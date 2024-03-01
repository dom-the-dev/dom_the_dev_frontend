import React from 'react';
import PageLayout from '@/component/PageLayout';
import Link from 'next/link';

const Terms = () => {
  return (
    <PageLayout pageTitle={'Tomodoro - Terms of Use'}>
      <h1>Tomodoro - Terms of Use</h1>
      <p>Todo</p>

      <Link href={'/tomodoro/privacy'}>Privacy Policy</Link>
    </PageLayout>
  );
};

export default Terms;
