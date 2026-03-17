import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const CinePing = () => {
  return (
    <PageLayout pageTitle={'CinePing - App'}>
      <h2>CinePing</h2>
      <p>
        Offizielle Informationen und Support fuer die App CinePing. Hier finden Nutzer Hilfe,
        Kontaktmoeglichkeiten sowie die deutschen Rechtstexte fuer die App.
      </p>
      <Splitline />
      <h3>Hilfe & Support</h3>
      <ul>
        <li>
          <Link href="/apps/cineping/support">Support</Link>
        </li>
        <li>
          <Link href="/apps/cineping/privacy">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/apps/cineping/terms">Nutzungsbedingungen</Link>
        </li>
      </ul>
      <Splitline />
      <h3>Sprachen</h3>
      <ul>
        <li>Deutsch: diese Seite</li>
        <li>
          <Link href="/en/apps/cineping">English version</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default CinePing;
