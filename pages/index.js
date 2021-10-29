import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import axios from "axios";
import ListArticles from "../components/ListArticles";
import ListRepos from "../components/ListRepos";

export default function Home({articles, repos, homepage}) {
    console.log(homepage)
    return (
        <div>
            <Head>
                <title>Dom the dev</title>
                <meta name="description" content="Blog/Portfolio of Dom the Dev"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={`row row--align-center`}>
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
                                    <h3>Latest articles</h3>
                                    <ListArticles articles={articles}/>
                                </>
                            </div>
                            : null}
                        {repos && repos.length &&
                        <div className={`col`}>
                            <>
                                <h3>Latest GitHub Repos</h3>
                                <ListRepos repos={repos}/>
                            </>
                        </div>
                        }
                    </div>
                </section>

            </main>

            <footer className={styles.footer}>
                By Dom the dev
            </footer>
        </div>
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
