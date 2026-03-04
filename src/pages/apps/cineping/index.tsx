import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const CinePing = () => {
  return (
    <PageLayout pageTitle={'CinePing - App'}>
      <h2>CinePing</h2>
      <p>Rechtliche Informationen für die App CinePing.</p>
      <Splitline />
      <ul>
        <li>
          <Link href="/apps/cineping/privacy">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/apps/cineping/terms">Nutzungsbedingungen</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default CinePing;
