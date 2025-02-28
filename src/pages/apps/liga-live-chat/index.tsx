import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'MyGymLib'}>
      <h1>Liga Live Chat</h1>
      <ul>
        <li>
          <Link href="/apps/liga-live-chat/privacy">Datenschutz</Link>
        </li>
        <li>
          <Link href="/apps/liga-live-chat/terms">Nutzungsbedingungen</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default Privacy;
