import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import axios from "axios";
import ListArticles from "../components/ListArticles";

export default function Home({articles}) {
    return (
        <div>
            <Head>
                <title>Dom the dev</title>
                <meta name="description" content="Blog/Portfolio of Dom the Dev"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionBox}>
                        <p className={styles.description}>A Fullstack JavaScript Developer never tired of learning and always open for new
                            projects. <span>#hmu</span></p>
                    </div>
                    <div className={styles.sectionBox}>
                        <h1 className={styles.title}>
                            Dom the dev
                        </h1>
                    </div>
                </section>

                <h3>Latest articles</h3>
                <ListArticles articles={articles}/>
            </main>

            <footer className={styles.footer}>
                By Dom the dev
            </footer>
        </div>
    )
}

export async function getStaticProps() {
    let latestArticles = await axios.get(process.env.API_URL + 'articles?_limit=3')

    return {
        props: {
            articles: latestArticles.data
        },
    }
}
