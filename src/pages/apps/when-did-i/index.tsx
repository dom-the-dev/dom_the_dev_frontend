import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const WhenDidI = () => {
  return (
    <PageLayout pageTitle={'When Did I - App'}>
      <h2>When Did I</h2>
      <p>Rechtliche Informationen für die App When Did I.</p>
      <Splitline />
      <ul>
        <li>
          <Link href="/apps/when-did-i/privacy">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/apps/when-did-i/terms">Nutzungsbedingungen</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default WhenDidI;
