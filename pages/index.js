import axios from "axios";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";
import ListRepos from "../components/list/ListRepos";
import Link from 'next/link'
import ContactForm from "../components/ContactForm";

export default function Home({repos}) {
	return (
		<Layout title={"Home"}>
			<Section id={"start"}>
				<span className={"text-3xl"}>Welcome, I&apos;m</span>
				<h1><span className={"font-bold"}>dom</span> <span className={"text-primary font-light"}>the dev</span></h1>
				<p className={"text-3xl"}>A <span className="font-bold">Fullstack JavaScript Developer</span> never
					tired of learning and always up for new projects. <a
						href="#contact"><span className={"text-primary font-bold"}>#hmu</span></a></p>
			</Section>

			<Section id={"about"} title={"about."}>
					<p>
						Hi, I&apos;m <span className="font-bold">Dom</span> and I&apos;m a full stack developer from <span
						className="font-bold">Germany.</span>
					</p>
					<p>
						After a <span className="font-bold">vocational training</span> in Germany&apos;s capital city Berlin,
						I started my career as a <span className="font-bold">frontend
						developer</span> at the agency <span className="font-bold">SIRUP</span>.
					</p>

					<p>
						Five beautiful years as a frontend developer i decided to take the next step and started focusing on learning full stack development.
					</p>

					<p>
						Soon I passed the <span className="font-bold">Full Stack JavaScript Developer Nanodegree</span> at <span
						className="font-bold">Udacity</span> and started to call myself a Full Stack Developer.
					</p>

					<p>
						Since 2021 I am also working <span className="font-bold">self-employed</span> as a <span
						className="font-bold">full stack javascript developer</span>, <span
						className="font-bold">never tired</span> of learning and always up for
						<span className="font-bold"> new projects</span>.
					</p>

					{/*<p>*/}
					{/*	On this website you can see the stuff i am working on beside my work. Be sure to check out my latest project <a*/}
					{/*	href="https://react-vs-vanilla.vercel.app/" target={"_blank"} className={"text-primary font-bold"} rel={"noreferrer"}>React vs. Vanilla JS</a>*/}
					{/*</p>*/}

					<p>
						If you are interested in working with me, feel free to use the <a
						href="#contact"><span className="font-bold text-primary">contact form</span></a> or write an
						email to <span
						className="font-bold text-primary"><a href="mailto:hi@domthedev.com">hi@domthedev.com</a></span>.
					</p>
			</Section>

			{/*<Section id={"react-vs-vanilla"} title={"react-vs-vanilla."}>*/}
			{/*	In this little series I am building applications with the same design. One in react and one in pure*/}
			{/*	vanilla js.*/}
			{/*	If you are interessted just follow this <Link href="/react-vs-vanilla"><a>link</a></Link>*/}
			{/*</Section>*/}

			<Section id={"github"} title={"latest repos."} moreLink={"https://github.com/dom-the-dev/"}
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
	const latestGithub = await axios.get(process.env.GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=5&sort=asc')

	return {
		props: {
			repos: latestGithub.data,
		},
	}
}
