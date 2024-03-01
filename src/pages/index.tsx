import React, { FC } from 'react';
import PageLayout from '@/component/PageLayout';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <PageLayout pageTitle={'Aloha'}>
      <p className={styles.intro}>
        I&apos;m a seasoned full stack maestro with over a decade of code-wrangling under my belt,
        crafting sleek and powerful web solutions that dazzle and deliver. Since 2022, I&apos;ve
        been blazing my own trail as a freelancer, bringing innovation and excellence to every
        project I touch. And since 2023, I&apos;ve proudly joined the ranks of{' '}
        <a href="https://wohnsinn.com" target={'_blank'} rel="noreferrer">
          Wohnsinn.com
        </a>
        , where I&apos;m spicing up their platform with my unique blend of skills and creativity.
      </p>
      <span className={styles.sub}>- oww, thank you, ChatGPT </span>😚
    </PageLayout>
  );
};

export default Home;
