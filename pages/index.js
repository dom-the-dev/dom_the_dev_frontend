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
                <h1><span className={"font-bold"}>dom</span> <span className={"text-primary font-light"}>the dev</span>
                </h1>
                <p className={"text-3xl"}>A <span className="font-bold">Fullstack JavaScript Developer</span> never
                    tired of learning and always up for new projects. <a
                        href="#contact"><span className={"text-primary font-bold"}>#hmu</span></a></p>
            </Section>

            <Section id={"projects"} title={"Projects."}>
                <div className={`grid gap-2 grid-col-1 md:grid-cols-2`}>
                    <Project title={"movie-slap"}
                             description={"Browse Movies and create your Movie Watchlist. Use the 'Movie-Slap' to Tinder through random videos."}
                             url={"https://movie-slap.vercel.app/"}
                             image={"./movie-slap.png"}
                    />

                    <Project title={"Spoti Fight"}
                             description={"Spotify Game "}
                             url={"https://spoti-fight.vercel.app/"}
                             image={"./spoti-fight.png"}
                    />
                </div>
            </Section>

            {/*<Section id={"about"} title={"about."}>*/}
            {/*    <p>*/}
            {/*        Hi, I&apos;m <span className="font-bold">Dom</span> and I&apos;m a full stack developer from <span*/}
            {/*        className="font-bold">Germany.</span>*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        After a <span className="font-bold">vocational training</span> in Germany&apos;s capital city*/}
            {/*        Berlin,*/}
            {/*        I started my career as a <span className="font-bold">frontend*/}
			{/*			developer</span> at the agency <span className="font-bold">SIRUP</span>.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        <span className="font-bold">Five years</span> as a frontend developer later i decided to take the*/}
            {/*        next step and started focusing on*/}
            {/*        learning full stack development.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        Soon I passed the <span*/}
            {/*        className="font-bold">Full Stack JavaScript Developer Nanodegree</span> at <span*/}
            {/*        className="font-bold">Udacity</span> and started to call myself a Full Stack Developer.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        Since 2021 I am also working <span className="font-bold">self-employed</span> as a <span*/}
            {/*        className="font-bold">full stack javascript developer</span>, <span*/}
            {/*        className="font-bold">never tired</span> of learning and always up for*/}
            {/*        <span className="font-bold"> new projects</span>.*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*        If you are interested in working with me, feel free to use the <a*/}
            {/*        href="#contact"><span className="font-bold text-primary">contact form</span></a> or write an*/}
            {/*        email to <span*/}
            {/*        className="font-bold text-primary"><a href="mailto:hi@domthedev.com">hi@domthedev.com</a></span>.*/}
            {/*    </p>*/}
            {/*</Section>*/}

            <Section id={"youtube"} title={"latest YouTube videos."}
                     moreLink={"https://www.youtube.com/channel/UCAa2t4QIxlaUuPO2FKq5TDw"}
                     moreTitle={"visit channel"}>
                <ListRepos videos={youtube}/>
            </Section>

            <Section id={"github"} title={"latest GitHub repos."} moreLink={"https://github.com/dom-the-dev/"}
                     moreTitle={"see more"}>
                <ListRepos repos={repos}/>
            </Section>

            <Section id={"contact"} title={"contact."}>
                <ContactForm/>
            </Section>
        </Layout>
    )
}

export async function getStaticProps() {
    const latestGithub = await axios.get(process.env.NEXT_PUBLIC_GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=6&sort=asc')
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_YT_API_URL}?key=${process.env.NEXT_PUBLIC_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`)

    return {
        props: {
            repos: latestGithub.data,
            youtube: data.items.filter(item => item.id.kind === 'youtube#video')
        },
    }
}
