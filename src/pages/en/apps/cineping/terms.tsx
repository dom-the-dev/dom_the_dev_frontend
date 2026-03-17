import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const TermsEnglish = () => {
  return (
    <PageLayout pageTitle={'CinePing - Terms of Use'}>
      <h2>Terms of Use for CinePing</h2>
      <p>Last updated: {new Date().getFullYear()}</p>
      <p>
        Welcome to <strong>CinePing</strong>. By using the app, you agree to the following terms of
        use. If you do not agree with them, you must not use the app.
      </p>

      <Splitline />
      <h3>1. Scope</h3>
      <p>
        These terms apply to all users of <strong>CinePing</strong> and govern access to the app and
        its features.
      </p>

      <Splitline />
      <h3>2. Using the app</h3>
      <h4>2.1 Purpose of the app</h4>
      <p>
        CinePing is designed to display and organize movie releases, including features such as
        watchlist, favorites, reminders, and calendar entries.
      </p>

      <h4>2.2 External movie data via TMDB</h4>
      <p>
        CinePing uses the <strong>TMDB API</strong> (The Movie Database). We do not guarantee the
        accuracy, completeness, or timeliness of the external content provided through TMDB.
      </p>
      <p>
        This app is not endorsed by or certified by TMDB. TMDB terms are available at:
        <br />
        <a href="https://www.themoviedb.org/terms-of-use">
          https://www.themoviedb.org/terms-of-use
        </a>
      </p>

      <h4>2.3 Availability and changes</h4>
      <ul>
        <li>We aim to keep the app available, but do not guarantee uninterrupted access.</li>
        <li>Features may be changed, expanded, or removed at any time.</li>
      </ul>

      <Splitline />
      <h3>3. Permissions</h3>
      <h4>3.1 Optional access</h4>
      <ul>
        <li>Calendar access for creating movie release events</li>
        <li>Notifications for reminders</li>
      </ul>
      <p>These features are optional and require your consent through iOS system dialogs.</p>

      <Splitline />
      <h3>4. User obligations</h3>
      <ul>
        <li>The app may only be used in accordance with applicable laws.</li>
        <li>Technical protection measures of the app must not be circumvented.</li>
        <li>
          Abusive automated use, such as scraping or excessive API requests through the app, is
          prohibited.
        </li>
      </ul>

      <Splitline />
      <h3>5. Limitation of liability</h3>
      <ul>
        <li>We are not liable for permanent availability of the app.</li>
        <li>
          We are not liable for factual errors in externally sourced data, especially TMDB data.
        </li>
        <li>Liability is limited to intent and gross negligence to the extent permitted by law.</li>
      </ul>

      <Splitline />
      <h3>6. Changes to these terms</h3>
      <ul>
        <li>We reserve the right to change these terms at any time.</li>
        <li>Changes take effect once published on this page.</li>
      </ul>

      <Splitline />
      <h3>7. Contact & support</h3>
      <p>The app is operated by:</p>
      <p>
        <strong>Dominik Amrugiewicz</strong>
        <br />
        Friedrich-Ebert-Strasse 58a
        <br />
        67549 Worms
        <br />
        Germany
        <br />
        E-Mail: hi@domthedev.com
      </p>
    </PageLayout>
  );
};

export default TermsEnglish;
