import styles from '../styles/Index.module.scss'
import axios from "axios";
import ListArticles from "../components/ListArticles";
import ListRepos from "../components/ListRepos";
import Layout from "../components/Layout";

export default function Home({articles, repos, homepage}) {
    return (
        <Layout>
            <div className={`row`}>
                <div className={`col`}>
                    <h1 className={styles.title}>
                        {homepage.hero.title}
                    </h1>
                </div>
                <div className={`col`}>
                    <p className={styles.description}>
                        {homepage.hero.description}
                    </p>
                </div>
            </div>


            <section className={styles.section}>
                <div className={`row`}>
                    {articles && articles.length ?
                        <div className={`col`}>
                            <>
                                <h3>Latest articles</h3> {articles.length > 5 && <a href="all">See all</a>}
                                <ListArticles articles={articles}/>
                            </>
                        </div>
                        : null}
                    {repos && repos.length &&
                    <div className={`col`}>
                        <>
                            <div  style={{display: "flex"}}>
                                <h3>Latest Repos</h3>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://github.com/dom-the-dev?tab=repositories">See all</a>
                            </div>
                            <ListRepos repos={repos}/>
                        </>
                    </div>
                    }
                </div>
            </section>

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
