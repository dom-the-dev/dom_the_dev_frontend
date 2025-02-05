import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'MyGymLib'}>
      <h1>MyGymLib</h1>
      <h2>Get on AppStore</h2>
      <Link href="/apps/mygymlib/privacy">Privacy</Link>
      <Link href="/apps/mygymlib/terms">Terms</Link>
    </PageLayout>
  );
};

export default Privacy;
