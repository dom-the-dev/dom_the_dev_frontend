import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const SupportEnglish = () => {
  return (
    <PageLayout pageTitle={'CinePing - Support'}>
      <h2>CinePing Support</h2>
      <p>
        This is the official support page for CinePing. If you have questions, need help, or want to
        report a bug, you can contact us directly here.
      </p>

      <Splitline />
      <h3>Contact</h3>
      <p>
        Email: <a href="mailto:hi@domthedev.com?subject=CinePing%20Support">hi@domthedev.com</a>
      </p>
      <p>
        Please include a short description of the issue and, if relevant, your device, iOS version,
        and CinePing app version.
      </p>

      <Splitline />
      <h3>We can help with</h3>
      <ul>
        <li>Questions about watchlist, favorites, and movie details</li>
        <li>Reminder or notification issues</li>
        <li>Calendar entry or permission issues</li>
        <li>Problems loading movie data</li>
        <li>Feedback, feature requests, and App Review follow-up</li>
      </ul>

      <Splitline />
      <h3>Troubleshooting tips</h3>
      <ul>
        <li>Make sure your device is connected to the internet.</li>
        <li>Check in iOS that notifications are enabled for CinePing.</li>
        <li>Check in iOS that calendar access is enabled for CinePing.</li>
        <li>Restart the app after changing permission or system settings.</li>
      </ul>

      <Splitline />
      <h3>Legal & related pages</h3>
      <ul>
        <li>
          <Link href="/en/apps/cineping/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/en/apps/cineping/terms">Terms of Use</Link>
        </li>
        <li>
          <Link href="/apps/cineping/support">Support auf Deutsch</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default SupportEnglish;
