import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'CinePing - Datenschutzerklärung'}>
      <h2>Datenschutz­erklärung für CinePing</h2>
      <Splitline />

      <h3>1. Datenschutz auf einen Blick</h3>
      <h4>Allgemeine Hinweise</h4>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie die App CinePing nutzen. Personenbezogene Daten
        sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>

      <h4>Datenerfassung in dieser App</h4>
      <h5>Wer ist verantwortlich für die Datenerfassung in dieser App?</h5>
      <p>
        Die Datenverarbeitung erfolgt durch den Betreiber der App. Die Kontaktdaten finden Sie im
        Abschnitt „Hinweis zur verantwortlichen Stelle“.
      </p>

      <h5>Wie erfassen wir Ihre Daten?</h5>
      <p>
        CinePing kann ohne Registrierung genutzt werden. Personenbezogene Daten werden nicht aktiv
        abgefragt. Technische Daten können bei der Kommunikation mit externen Diensten anfallen.
      </p>

      <h5>Wofür nutzen wir Daten?</h5>
      <p>
        Daten werden ausschließlich zur Bereitstellung der App-Funktionen genutzt, insbesondere zur
        Anzeige von Filmdaten und zur optionalen Erstellung von Erinnerungen.
      </p>

      <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung sowie Beschwerde bei einer zuständigen Aufsichtsbehörde.
      </p>

      <Splitline />
      <h3>2. Externe Dienste</h3>
      <h4>TMDB (The Movie Database)</h4>
      <p>
        CinePing nutzt die API von TMDB, um Filminformationen bereitzustellen (z. B. Titel, Poster,
        Trailer- und Veröffentlichungsdaten). Beim Abruf dieser Inhalte wird eine Verbindung zu TMDB
        hergestellt. Dabei können technische Verbindungsdaten (z. B. IP-Adresse, Zeitpunkt,
        Geräteinformationen) durch TMDB verarbeitet werden.
      </p>
      <p>
        Weitere Informationen zur Datenverarbeitung durch TMDB finden Sie unter:
        <br />
        <a href="https://www.themoviedb.org/privacy-policy">
          https://www.themoviedb.org/privacy-policy
        </a>
      </p>

      <Splitline />
      <h3>3. Berechtigungen auf dem Gerät</h3>
      <h4>Kalenderzugriff (optional)</h4>
      <p>
        Wenn Sie die Kalenderfunktion aktivieren, erstellt CinePing auf Wunsch Kalendereinträge für
        Filmstarts. Der Zugriff erfolgt nur nach Ihrer ausdrücklichen Zustimmung über die
        iOS-Systemabfrage.
      </p>

      <h4>Benachrichtigungen (optional)</h4>
      <p>
        Wenn Sie Erinnerungen aktivieren, kann CinePing lokale Benachrichtigungen auf Ihrem Gerät
        planen. Auch hierfür ist eine vorherige Systemfreigabe erforderlich.
      </p>

      <Splitline />
      <h3>4. Lokale Speicherung</h3>
      <p>
        App-Einstellungen und Listen (z. B. Watchlist/Favoriten) werden lokal auf dem Gerät
        gespeichert. Eine zentrale Kontodatenbank wird dafür nicht verwendet.
      </p>

      <Splitline />
      <h3>5. Allgemeine Hinweise und Pflichtinformationen</h3>
      <h4>Datenschutz</h4>
      <p>
        Wir behandeln personenbezogene Daten vertraulich und entsprechend den gesetzlichen
        Datenschutzvorschriften.
      </p>

      <h4>Hinweis zur verantwortlichen Stelle</h4>
      <h5>Verantwortlich für die Datenverarbeitung:</h5>
      <p>
        Dominik Amrugiewicz, <br />
        Friedrich-Ebert-Straße 58a, <br />
        67549 Worms, <br />
        E-Mail: hi@domthedev.com
      </p>

      <h4>Speicherdauer</h4>
      <p>
        Lokal gespeicherte Daten verbleiben auf Ihrem Gerät, bis Sie diese in der App löschen oder
        die App deinstallieren.
      </p>

      <h4>Rechtsgrundlagen der Datenverarbeitung</h4>
      <ul>
        <li>• Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der App-Funktionen)</li>
        <li>• Art. 6 Abs. 1 lit. a DSGVO (Einwilligung bei optionalen Berechtigungen)</li>
        <li>• Art. 6 Abs. 1 lit. f DSGVO (stabile und sichere Bereitstellung der App)</li>
      </ul>

      <Splitline />
      <h3>6. Ihre Rechte als Nutzer</h3>
      <h4>Widerruf Ihrer Einwilligung</h4>
      <p>
        Bereits erteilte Einwilligungen (z. B. Kalender/Benachrichtigungen) können Sie jederzeit in
        den iOS-Einstellungen widerrufen.
      </p>

      <h4>Recht auf Auskunft, Berichtigung und Löschung</h4>
      <p>
        Sie haben das Recht, Auskunft über verarbeitete personenbezogene Daten zu verlangen sowie
        Berichtigung oder Löschung zu beantragen, soweit gesetzlich möglich.
      </p>

      <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
      <p>
        Bei Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei der zuständigen
        Aufsichtsbehörde zu.
      </p>

      <Splitline />
      <h3>7. Änderungen der Datenschutzerklärung</h3>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage oder
        die App-Funktionalität ändert.
      </p>
    </PageLayout>
  );
};

export default Privacy;
