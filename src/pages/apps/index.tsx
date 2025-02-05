import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'Domthedev - App'}>
      <Link href={'/apps/mygymlib'}>MyGymLib</Link>
    </PageLayout>
  );
};

export default Privacy;
