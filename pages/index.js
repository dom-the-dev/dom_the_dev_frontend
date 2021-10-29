import axios from "axios";
import ListArticles from "../components/ListArticles";
import ListRepos from "../components/ListRepos";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";

export default function Home({articles, repos, homepage}) {
    return (
        <Layout>
            <Hero
                title={homepage.hero.title}
                description={homepage.hero.description}
            />

            <Row>
                <Col>
                    <h3>Latest articles</h3> {articles.length > 5 && <a href="all">See all</a>}
                    {articles && articles.length ?
                        <ListArticles articles={articles}/>
                        : null}
                </Col>

                <Col>
                    <h3>Latest Repos</h3>
                    {repos && repos.length &&
                    <ListRepos repos={repos}/>
                    }
                </Col>
            </Row>

        </Layout>
    )
}

export async function getStaticProps() {
    const homepage = await axios.get(process.env.API_URL + 'homepage')
    const latestArticles = await axios.get(process.env.API_URL + 'articles?_limit=5')
    const latestGithub = await axios.get(process.env.GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=5&sort=asc')

    return {
        props: {
            homepage: homepage.data,
            articles: latestArticles.data,
            repos: latestGithub.data,
        },
    }
}
