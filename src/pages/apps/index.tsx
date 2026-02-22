import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'Domthedev - App'}>
      <ul>
        <li>
          <Link href={'/apps/liga-live-chat'}>Liga Live Chat</Link>
        </li>
        <li>
          <Link href={'/apps/when-did-i'}>When Did I</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default Privacy;
