import axios from "axios";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";

export default function Home({repos}) {
	return (
		<Layout>
			<Section id={"start"} verticalCenter={true}>
				<h1>Hi, I'm dom the dev</h1>
				<p className={"text-3xl"}>A <span className="font-bold">Fullstack JavaScript Developer</span> never tired of learning and always up for new projects. <a
					href="#contact"><span className={"text-primary font-bold"}>#hmu</span></a></p>
			</Section>

			<Section id={"about"} title={"about."}>
				<div className={"md:w-1/2"}>

					<p>
						Hi, I’m <span className="font-bold">Dom</span> and Im a full stack developer from <span
						className="font-bold">Germany.</span>
					</p>
					<p>
						After a <span className="font-bold">vocational training</span> in Germanys capitol city Berlin,
						I started my career as a <span className="font-bold">frontend
						developer</span>.
					</p>

					<p>
						Besides a lot of online courses, i passed the <span className="font-bold">Full Stack JavaScript Developer Nanodegree</span> at <span
						className="font-bold">Udacity</span>.
					</p>

					<p>
						After five beautiful years as a frontend developer at the agency <span
						className="font-bold">SIRUP</span> i decided to take the next step.
					</p>

					<p>
						Since 2021 I am working <span className="font-bold">self-emplyed</span> as a <span
						className="font-bold">full stack developer</span>, <span
						className="font-bold">never tired</span> of learning and
						always
						up for
						<span className="font-bold">new projects</span>.
					</p>

					<p>
						If you are interested in working with me, feel free to use the <a
						href="#contact"><span className="font-bold text-primary">contact form</span></a> or write an email to <span
						className="font-bold text-primary"><a href="mailto:hi@domthedev.com">hi@domthedev.com</a></span>.
					</p>
				</div>
			</Section>

			<Section id={"skills"} title={"skills."}>

			</Section>
			<Section id={"github"} title={"github."}>

			</Section>
			<Section id={"contact"} title={"contact."}>

			</Section>
		</Layout>
	)
}

export async function getStaticProps() {
	const latestGithub = await axios.get(process.env.GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=10&sort=asc')

	return {
		props: {
			repos: latestGithub.data,
		},
	}
}
