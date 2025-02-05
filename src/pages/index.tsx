import React, { FC } from 'react';
import PageLayout from '@/component/PageLayout';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <PageLayout pageTitle={'Aloha'}>
      <p className={styles.intro}>
        Full-stack maestro with over a decade of code-wrangling mastery, building slick,
        high-performance web and native apps that don’t just run—they shine. Since 2022, I’ve been
        carving my own path as a freelancer, turning bold ideas into seamless digital experiences.
        And in 2023, I joined{' '}
        <a href="https://wohnsinn.com" target={'_blank'} rel="noreferrer">
          Wohnsinn.com
        </a>
        , where I’m supercharging their platform with a fusion of creativity, clean code, and
        cutting-edge tech. From powerful web solutions to polished mobile apps, I craft digital
        magic that delivers. Let’s build something that turns heads!
      </p>
    </PageLayout>
  );
};

export default Home;
