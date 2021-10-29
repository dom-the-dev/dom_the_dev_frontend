import {useEffect} from "react";
import axios from "axios";
import ListArticles from "../components/list/ListArticles";
import ListRepos from "../components/list/ListRepos";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import {changeBackground} from "../js/changeBackground";

export default function Home({articles, repos, homepage}) {
    useEffect(() => {
        changeBackground()
    }, []);

    return (
        <Layout>
            <Hero
                title={homepage.hero.title}
                description={homepage.hero.description}
            />

            <Row>
                <Col half={true}>
                    <h3>Latest articles</h3> {articles.length > 5 && <a href="all">See all</a>}
                    {articles && articles.length ?
                        <ListArticles articles={articles}/>
                        : null}
                </Col>

                <Col half={true}>
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
    const latestArticles = await axios.get(process.env.API_URL + 'articles?_limit=10')
    const latestGithub = await axios.get(process.env.GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=10&sort=asc')

    return {
        props: {
            homepage: homepage.data,
            articles: latestArticles.data,
            repos: latestGithub.data,
        },
    }
}
