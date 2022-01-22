import axios from "axios";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";
import ListRepos from "../components/list/ListRepos";
import ContactForm from "../components/ContactForm";
import Project from "../components/Project";

export default function Home({repos, youtube}) {
    return (
        <Layout title={"Home"}>
            <Section id={"start"}>
                <span className={"text-3xl"}>Welcome, I&apos;m</span>
                <h1><span className={`font-normal`}>dom</span> <span className={"text-primary font-light"}>the dev</span>
                </h1>
                <p className={"text-3xl"}>A <span className="font-normal">Fullstack JavaScript Developer</span> never
                    tired of learning and always up for new projects.</p>
            </Section>

            <Section id={"projects"} title={"Projects."}>
                <div className={`grid gap-10 grid-cols-1`}>
                    <Project title={"movie-slap"}
                             description={"Browse Movies and create your Movie Watchlist. Use the 'Movie-Slap' to Tinder through random videos. Fullstack application made with Supabase Authenticaion and Database. NextJS used for the frontend."}
                             url={"https://movie-slap.vercel.app/"}
                             image={"./movie-slap.png"}
                    />

                    <Project title={"Spoti Fight"}
                             description={"Spotify Game made with React and the Spotify API. 2 Players can choose an artist and battle each other in different categories."}
                             url={"https://spoti-fight.vercel.app/"}
                             image={"./spoti-fight.png"}
                    />
                </div>
            </Section>

            {/*<Section id={"about"} title={"about."}>*/}
            {/*    <p>*/}
            {/*        Hi, I&apos;m <span className="font-normal">Dom</span> and I&apos;m a full stack developer from <span*/}
            {/*        className="font-normal">Germany.</span>*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        After a <span className="font-normal">vocational training</span> in Germany&apos;s capital city*/}
            {/*        Berlin,*/}
            {/*        I started my career as a <span className="font-normal">frontend*/}
			{/*			developer</span> at the agency <span className="font-normal">SIRUP</span>.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        <span className="font-normal">Five years</span> as a frontend developer later i decided to take the*/}
            {/*        next step and started focusing on*/}
            {/*        learning full stack development.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        Soon I passed the <span*/}
            {/*        className="font-normal">Full Stack JavaScript Developer Nanodegree</span> at <span*/}
            {/*        className="font-normal">Udacity</span> and started to call myself a Full Stack Developer.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        Since 2021 I am also working <span className="font-normal">self-employed</span> as a <span*/}
            {/*        className="font-normal">full stack javascript developer</span>, <span*/}
            {/*        className="font-normal">never tired</span> of learning and always up for*/}
            {/*        <span className="font-normal"> new projects</span>.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        If you are interested in working with me, feel free to use the <a*/}
            {/*        href="#contact"><span className="font-normal text-primary">contact form</span></a> or write an*/}
            {/*        email to <span*/}
            {/*        className="font-normal text-primary"><a href="mailto:hi@domthedev.com">hi@domthedev.com</a></span>.*/}
            {/*    </p>*/}
            {/*</Section>*/}

            <Section id={"youtube"} title={"latest YouTube videos."}
                     moreLink={"https://www.youtube.com/channel/UCAa2t4QIxlaUuPO2FKq5TDw"}
                     moreTitle={"visit channel"}>
                <ListRepos videos={youtube}/>
            </Section>

            <Section id={"github"} title={"latest GitHub repos."} secondary={true} moreLink={"https://github.com/dom-the-dev/"}
                     moreTitle={"see more"}>
                <ListRepos repos={repos}/>
            </Section>

            <Section id={"contact"} title={"contact."}>
                <ContactForm/>
            </Section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const latestGithub = await axios.get(process.env.NEXT_PUBLIC_GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=4&sort=asc')
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_YT_API_URL}?key=${process.env.NEXT_PUBLIC_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`)

    return {
        props: {
            repos: latestGithub.data,
            youtube: data.items.filter(item => item.id.kind === 'youtube#video')
        },
    }
}
