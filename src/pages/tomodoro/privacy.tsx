import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'Tomodoro - Privacy Policy'}>
      <h1>Tomodoro - Privacy Policy</h1>
      <p>Todo</p>
      <Link href={'/tomodoro/privacy'}>Terms of Use</Link>
    </PageLayout>
  );
};

export default Privacy;
