import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const CinePingEnglish = () => {
  return (
    <PageLayout pageTitle={'CinePing - App'}>
      <h2>CinePing</h2>
      <p>
        Official CinePing information and support hub. This page provides support details, contact
        options, and the English legal documents for the app.
      </p>
      <Splitline />
      <h3>Help & Support</h3>
      <ul>
        <li>
          <Link href="/en/apps/cineping/support">Support</Link>
        </li>
        <li>
          <Link href="/en/apps/cineping/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/en/apps/cineping/terms">Terms of Use</Link>
        </li>
      </ul>
      <Splitline />
      <h3>Languages</h3>
      <ul>
        <li>
          <Link href="/apps/cineping">Deutsch</Link>
        </li>
        <li>English: this page</li>
      </ul>
    </PageLayout>
  );
};

export default CinePingEnglish;
