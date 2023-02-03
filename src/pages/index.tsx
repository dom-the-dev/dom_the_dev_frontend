import Head from 'next/head'
import {Roboto_Slab, Roboto} from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import React, {FC, useRef, useState} from "react";

const robotoSlab = Roboto_Slab({subsets: ['latin']})
const roboto = Roboto({weight: "300", subsets: ['latin']})

interface IArticle {
  id: string;
  title: string;
  url: string;
}

interface IGitHubRepo {
  id: string;
  name: string;
  html_url: string;
}

interface IYoutubeVideo {
  id: {
    videoId: string
  };
  snippet: {
    title: string;
  }
  url: string;
}

interface IHomeProps {
  devArticles: IArticle[],
  githubRepos: IGitHubRepo[],
  youtubeVids: IYoutubeVideo[],
}

const Home: FC<IHomeProps> = ({devArticles, youtubeVids, githubRepos}) => {
  const start = useRef<null | HTMLDivElement>(null);
  const me = useRef<null | HTMLDivElement>(null);
  // const projects = useRef<null | HTMLDivElement>(null);
  const youtube = useRef<null | HTMLDivElement>(null);
  const github = useRef<null | HTMLDivElement>(null);
  const articles = useRef<null | HTMLDivElement>(null);
  const contact = useRef<null | HTMLDivElement>(null);
  const imprint = useRef<null | HTMLDivElement>(null);
  const [showImprint, setShowImprint] = useState(false);

  const handleClick = (ref: any) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleImprintClick = () => {
    setShowImprint(!showImprint)
    setTimeout(() => {
      handleClick(imprint)
    }, 100)
  }


  return (
    <div className={`${robotoSlab.className} ${styles.layout}`}>
      <Head>
        <title>dom the dev</title>
        <meta name="description" content="Dom the devs homepage"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <nav>
        <ul className={styles.nav}>
          <li>
            <button tabIndex={1} className={`${styles.link} ${robotoSlab.className}`}
                    onClick={() => handleClick(me)}>me
            </button>
          </li>
          {/*<li>*/}
          {/*  <button className={`${styles.link} ${robotoSlab.className}`}*/}
          {/*          onClick={() => handleClick(projects)}>projects*/}
          {/*  </button>*/}
          {/*</li>*/}
          <li>
            <button className={`${styles.link} ${robotoSlab.className}`} onClick={() => handleClick(youtube)}>youtube
            </button>
          </li>
          <li>
            <button className={`${styles.link} ${robotoSlab.className}`} onClick={() => handleClick(github)}>github
            </button>
          </li>
          <li>
            <button className={`${styles.link} ${robotoSlab.className}`}
                    onClick={() => handleClick(articles)}>articles
            </button>
          </li>
          <li>
            <button className={`${styles.link} ${robotoSlab.className}`} onClick={() => handleClick(contact)}>contact
            </button>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.logo}>
          <h1>dom the dev</h1>
          {/*<span className={styles.slogan}>Fullstack JavaScript Developer never tired of learning and always up for new projects.</span>*/}
        </div>
        <div ref={start} className={`${styles.page} ${styles.start}`}>
          <button className={`${styles.link} ${robotoSlab.className}`} onClick={() => handleClick(me)}>start</button>
        </div>


        <div id={'me'} ref={me} className={styles.page}>
          <h2 className={styles.subtitle}>me.</h2>
          <p className={`${styles.meText} ${roboto.className}`}>
            Hey, I&apos;m Dom. A Fullstack JavaScript Developer based in Germany with more than 6 years experience in
            web
            development.
            In 2022 I started freelancing until I become a member of the <a style={{textDecoration: 'underline'}}
                                                                            href="https://wohnsinn.com"
                                                                            target={'_blank'}
                                                                            rel="noreferrer">Wohnsinn</a> Crew. Since
            2023 I&apos;m working
            there as the Head of Frontend.
          </p>

          <div className={styles.linkWrapper}>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(start)}>back
            </button>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(youtube)}>next
            </button>
          </div>
        </div>

        {/*<div id={'projects'} ref={projects} className={styles.page}>*/}
        {/*  <ul className={styles.list}>*/}
        {/*    <li>project 1</li>*/}
        {/*    <li>project 2</li>*/}
        {/*    <li>project 3</li>*/}
        {/*  </ul>*/}
        {/*  <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}*/}
        {/*          onClick={() => handleClick(youtube)}>next*/}
        {/*  </button>*/}

        {/*</div>*/}

        <div id={'youtube'} ref={youtube} className={styles.page}>
          <h2 className={styles.subtitle}>youtube.</h2>
          <ul className={`${styles.list} ${roboto.className}`}>
            {youtubeVids.map(video => (
              <li key={video.id.videoId}>
                <a className={styles.work} target={'_blank'} rel="noreferrer"
                   href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>{video.snippet.title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.linkWrapper}>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(me)}>back
            </button>
            <a target={'_blank'} rel="noreferrer" href="https://www.youtube.com/domthedeveloper">more</a>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(github)}>next
            </button>
          </div>
        </div>

        <div id={'github'} ref={github} className={styles.page}>
          <h2 className={styles.subtitle}>github.</h2>
          <ul className={`${styles.list} ${roboto.className}`}>
            {githubRepos?.map(repo => (
              <li key={repo.id}>
                <a className={styles.work} target={'_blank'} rel="noreferrer" href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>

          <div className={styles.linkWrapper}>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(youtube)}>back
            </button>
            <a target={'_blank'} rel="noreferrer" href="https://github.com/dom-the-dev/">more</a>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(articles)}>next
            </button>
          </div>
        </div>

        <div id={'articles'} ref={articles} className={styles.page}>
          <h2 className={styles.subtitle}>dev.to</h2>
          <ul className={`${styles.list} ${roboto.className}`}>
            {devArticles?.map(article => (
              <li key={article.id}>
                <a className={styles.work} target={'_blank'} rel="noreferrer" href={article.url}>
                  {article.title}
                </a>
              </li>
            ))}

          </ul>

          <div className={styles.linkWrapper}>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(github)}>back
            </button>
            <a target={'_blank'} rel="noreferrer" href="https://dev.to/dom_the_dev">more</a>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(contact)}>next
            </button>
          </div>
        </div>

        <div id={'contact'} ref={contact} className={styles.page}>
          <h2 className={styles.subtitle}>contact.</h2>
          <ul className={`${styles.list} ${roboto.className}`}>
            <li><a className={styles.work} target={'_blank'} rel="noreferrer"
                   href="mailto:hi@domthedev.com">hi@domthedev.com</a></li>
            <li><a className={styles.work} target={'_blank'} rel="noreferrer"
                   href="https://www.youtube.com/domthedeveloper">youtube</a></li>
            <li><a className={styles.work} target={'_blank'} rel="noreferrer"
                   href="https://github.com/dom-the-dev/">github</a></li>
            <li><a className={styles.work} target={'_blank'} rel="noreferrer"
                   href="https://dev.to/dom_the_dev">dev.to</a></li>
          </ul>
          <div className={styles.linkWrapper}>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={() => handleClick(articles)}>back
            </button>
            <button className={`${styles.link} ${styles.next} ${robotoSlab.className}`}
                    onClick={handleImprintClick}>{showImprint ? 'close imprint' : 'imprint'}
            </button>
          </div>
        </div>

        <div ref={imprint} className={`${styles.imprint} ${showImprint ? styles.show : ''}`}>
          <div style={{padding: 15}}>
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG: <br/>
              Dominik Amrugiewicz <br/>
              Bensheimer Straße 42<br/>
              67547 Worms
            </p>
            <h2>Haftungsausschluss (Disclaimer)</h2>
            <h3>Haftung für Inhalte</h3>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
              einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
              werden
              wir diese Inhalte umgehend entfernen. Haftung für Links Unser Angebot enthält Links zu externen
              Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
              ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.</p>

            <h3>Urheberrecht</h3>

            <p>Die durch die Seitenbetreiber
              erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads
              und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
              die
              Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

            <h3>Datenschutzhinweis:</h3>

            <p>Beim Besuch dieser Internet-Seiten werden personenbezogene Daten erfasst, wenn Sie diese Angaben
              freiwillig, etwa im Rahmen der Kontaktanfrage per E-Mail, machen und dienen zur Beantwortung Ihrer
              Kontaktanfrage. Eine Weitergabe an Dritte findet nicht statt.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps() {

  const resDevTo = await fetch('https://dev.to/api/articles?username=dom_the_dev')
  const devArticles: IArticle[] = await resDevTo.json()

  const youtubeRes = await fetch(`${process.env.NEXT_PUBLIC_YT_API_URL}?key=${process.env.NEXT_PUBLIC_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`)
  const latestYouTube = await youtubeRes.json()
  const items: IYoutubeVideo[] = latestYouTube.items

  const githubRes = await fetch(process.env.NEXT_PUBLIC_GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=6&sort=asc')
  const latestGithub: IGitHubRepo[] = await githubRes.json()

  return {
    props: {
      githubRepos: latestGithub,
      youtubeVids: items.filter((item: any) => item.id.kind === 'youtube#video'),
      devArticles
    },
  }
}

