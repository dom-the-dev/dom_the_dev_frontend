import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
// import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { Roboto_Slab, Roboto } from '@next/font/google';
import styles from './PageLayout.module.scss';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const roboto = Roboto({ weight: '300', subsets: ['latin'] });

const PageLayout: FC<PropsWithChildren<{ pageTitle: string }>> = ({ pageTitle, children }) => {
  return (
    <div className={`${roboto.className} ${styles.wrapper}`}>
      <Head>
        <title>{pageTitle} | dom the dev</title>
        <meta name="description" content="Dom the devs homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${robotoSlab.className} ${styles.header}`}>
        <Link href={'/'}>
          <h1>hi, i&apos;m dom the dev</h1>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={`${robotoSlab.className} ${styles.footer}`}>
        <ul>
          {/*<li>*/}
          {/*  <Link href={'/apps'}>apps</Link>*/}
          {/*</li>*/}
          <li>
            <Link href={'/apps'}>apps</Link>
          </li>
          <li>
            <Link href={'/imprint'}>imprint</Link>
          </li>
          <li>
            <a target={'_blank'} rel="noopener noreferrer" href="https://github.com/dom-the-dev/">
              github
            </a>
          </li>
          <li>
            <a target={'_blank'} rel="noopener noreferrer" href="https://dev.to/dom_the_dev">
              dev.to
            </a>
          </li>
          <li>
            <a target={'_blank'} rel="noopener noreferrer" href="mailto:hi@domthedev.com">
              contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default PageLayout;
