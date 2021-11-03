import axios from "axios";
import Layout from "../components/layout/Layout";


export default function Home({repos}) {
    return (
        <Layout>

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
