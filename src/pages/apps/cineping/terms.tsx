import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const Terms = () => {
  return (
    <PageLayout pageTitle={'CinePing - Nutzungsbedingungen'}>
      <h2>Nutzungsbedingungen für CinePing</h2>
      <p>Stand: {new Date().getFullYear()}</p>
      <p>
        Willkommen bei <strong>CinePing</strong>! Durch die Nutzung unserer App akzeptierst du die
        folgenden Nutzungsbedingungen. Falls du mit ihnen nicht einverstanden bist, darfst du die
        App nicht verwenden.
      </p>

      <Splitline />
      <h3>1. Geltungsbereich</h3>
      <p>
        Diese Nutzungsbedingungen gelten für alle Nutzer von <strong>CinePing</strong>. Sie regeln
        den Zugriff auf die App und deren Funktionen.
      </p>

      <Splitline />
      <h3>2. Nutzung der App</h3>
      <h4>2.1 Zweck der App</h4>
      <p>
        CinePing dient der Anzeige und Organisation von Filmstarts (z. B. Watchlist, Favoriten,
        Erinnerungen, Kalender-Einträge).
      </p>

      <h4>2.2 Externe Filmdaten über TMDB</h4>
      <p>
        CinePing nutzt Daten der <strong>TMDB API</strong> (The Movie Database). Für Richtigkeit,
        Vollständigkeit und Aktualität der dort bereitgestellten Inhalte übernehmen wir keine
        Gewähr.
      </p>
      <p>
        Diese App wird nicht von TMDB unterstützt oder zertifiziert. Informationen zu TMDB:
        <br />
        <a href="https://www.themoviedb.org/terms-of-use">
          https://www.themoviedb.org/terms-of-use
        </a>
      </p>

      <h4>2.3 Verfügbarkeit und Änderungen</h4>
      <ul>
        <li>
          Wir bemühen uns, die App verfügbar zu halten, übernehmen aber keine Garantie für eine
          ununterbrochene Nutzung.
        </li>
        <li>Funktionen können jederzeit geändert, erweitert oder entfernt werden.</li>
      </ul>

      <Splitline />
      <h3>3. Berechtigungen</h3>
      <h4>3.1 Optionale Zugriffe</h4>
      <ul>
        <li>Kalenderzugriff (zum Anlegen von Filmstart-Terminen)</li>
        <li>Benachrichtigungen (für Erinnerungen)</li>
      </ul>
      <p>
        Diese Funktionen sind optional und setzen deine Zustimmung über die iOS-Systemdialoge
        voraus.
      </p>

      <Splitline />
      <h3>4. Pflichten der Nutzer</h3>
      <ul>
        <li>Die App darf nur im Rahmen der geltenden Gesetze verwendet werden.</li>
        <li>Technische Schutzmaßnahmen der App dürfen nicht umgangen werden.</li>
        <li>
          Eine missbräuchliche automatisierte Nutzung (z. B. Scraping, übermäßige API-Abrufe über
          die App) ist untersagt.
        </li>
      </ul>

      <Splitline />
      <h3>5. Haftungsbeschränkung</h3>
      <ul>
        <li>Wir haften nicht für die permanente Verfügbarkeit der App.</li>
        <li>
          Wir haften nicht für inhaltliche Fehler in extern bezogenen Datenquellen (insbesondere
          TMDB).
        </li>
        <li>
          Die Haftung ist im gesetzlich zulässigen Umfang auf Vorsatz und grobe Fahrlässigkeit
          beschränkt.
        </li>
      </ul>

      <Splitline />
      <h3>6. Änderungen der Nutzungsbedingungen</h3>
      <ul>
        <li>Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.</li>
        <li>Änderungen treten mit Veröffentlichung auf dieser Seite in Kraft.</li>
      </ul>

      <Splitline />
      <h3>7. Kontakt & Support</h3>
      <p>Verantwortlich für die App ist:</p>
      <p>
        <strong>Dominik Amrugiewicz</strong>
        <br />
        Friedrich-Ebert-Straße 58a
        <br />
        67549 Worms
        <br />
        E-Mail: hi@domthedev.com
      </p>
    </PageLayout>
  );
};

export default Terms;
