import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const PrivacyEnglish = () => {
  return (
    <PageLayout pageTitle={'CinePing - Privacy Policy'}>
      <h2>Privacy Policy for CinePing</h2>
      <Splitline />

      <h3>1. Privacy at a glance</h3>
      <h4>General information</h4>
      <p>
        This policy explains what happens to personal data when you use the CinePing app. Personal
        data means any information that can be used to identify you.
      </p>

      <h4>Data collection in this app</h4>
      <h5>Who is responsible for data collection in this app?</h5>
      <p>
        Data processing is carried out by the app operator. Contact details are listed below in the
        section about the responsible party.
      </p>

      <h5>How do we collect your data?</h5>
      <p>
        CinePing can be used without registration. The app does not actively request personal data,
        but technical data may be processed when communicating with external services.
      </p>

      <h5>What do we use your data for?</h5>
      <p>
        Data is used only to provide app features, especially loading movie information and
        optionally creating reminders.
      </p>

      <h5>What rights do you have regarding your data?</h5>
      <p>
        You have the right to request information, correction, deletion, restriction of processing,
        and to file a complaint with a competent supervisory authority.
      </p>

      <Splitline />
      <h3>2. External services</h3>
      <h4>TMDB (The Movie Database)</h4>
      <p>
        CinePing uses the TMDB API to provide movie information such as titles, posters, trailers,
        and release dates. When loading this content, a connection to TMDB is established. TMDB may
        process technical connection data such as IP address, timestamp, or device-related
        information.
      </p>
      <p>
        More information about TMDB data processing is available at:
        <br />
        <a href="https://www.themoviedb.org/privacy-policy">
          https://www.themoviedb.org/privacy-policy
        </a>
      </p>

      <Splitline />
      <h3>3. Device permissions</h3>
      <h4>Calendar access (optional)</h4>
      <p>
        If you enable the calendar feature, CinePing can create calendar events for movie release
        dates. Access is granted only after your explicit consent through the iOS permission prompt.
      </p>

      <h4>Notifications (optional)</h4>
      <p>
        If you enable reminders, CinePing may schedule local notifications on your device. This also
        requires permission through the iOS system prompt.
      </p>

      <Splitline />
      <h3>4. Local storage</h3>
      <p>
        App settings and lists such as watchlist or favorites are stored locally on your device. No
        central user account database is used for this purpose.
      </p>

      <Splitline />
      <h3>5. General information and mandatory disclosures</h3>
      <h4>Data protection</h4>
      <p>
        Personal data is treated confidentially and in accordance with applicable data protection
        laws.
      </p>

      <h4>Responsible party</h4>
      <h5>Responsible for data processing:</h5>
      <p>
        Dominik Amrugiewicz, <br />
        Friedrich-Ebert-Strasse 58a, <br />
        67549 Worms, Germany, <br />
        E-Mail: hi@domthedev.com
      </p>

      <h4>Storage duration</h4>
      <p>
        Data stored locally remains on your device until you delete it in the app or uninstall the
        app.
      </p>

      <h4>Legal bases of processing</h4>
      <ul>
        <li>Art. 6(1)(b) GDPR for providing app functionality</li>
        <li>Art. 6(1)(a) GDPR for consent-based optional permissions</li>
        <li>Art. 6(1)(f) GDPR for stable and secure app operation</li>
      </ul>

      <Splitline />
      <h3>6. Your rights as a user</h3>
      <h4>Withdrawal of consent</h4>
      <p>
        Permissions already granted, such as calendar or notification access, can be withdrawn at
        any time in your iOS settings.
      </p>

      <h4>Right to information, correction, and deletion</h4>
      <p>
        You have the right to request information about processed personal data and to request
        correction or deletion where legally applicable.
      </p>

      <h4>Right to lodge a complaint</h4>
      <p>
        In case of violations of applicable privacy laws, you may lodge a complaint with the
        competent supervisory authority.
      </p>

      <Splitline />
      <h3>7. Changes to this privacy policy</h3>
      <p>We may update this privacy policy if legal requirements or app functionality changes.</p>
    </PageLayout>
  );
};

export default PrivacyEnglish;
