import React from 'react';
import Link from 'next/link';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const Support = () => {
  return (
    <PageLayout pageTitle={'CinePing - Support'}>
      <h2>CinePing Support</h2>
      <p>
        Diese Seite ist die offizielle Support-Seite fuer CinePing. Wenn du Fragen hast,
        Unterstuetzung brauchst oder einen Fehler melden moechtest, kannst du uns direkt
        kontaktieren.
      </p>

      <Splitline />
      <h3>Kontakt</h3>
      <p>
        E-Mail: <a href="mailto:hi@domthedev.com?subject=CinePing%20Support">hi@domthedev.com</a>
      </p>
      <p>
        Bitte beschreibe dein Anliegen moeglichst genau und nenne, wenn passend, dein Geraet, deine
        iOS-Version und die CinePing-Version.
      </p>

      <Splitline />
      <h3>Wobei wir helfen koennen</h3>
      <ul>
        <li>Fragen zur Nutzung von Watchlist, Favoriten und Filmdetails</li>
        <li>Probleme mit Erinnerungen oder Benachrichtigungen</li>
        <li>Probleme mit Kalender-Eintraegen oder Berechtigungen</li>
        <li>Fehler beim Laden von Filmdaten</li>
        <li>Feedback, Verbesserungsvorschlaege und App-Review-Rueckfragen</li>
      </ul>

      <Splitline />
      <h3>Hinweise zur Fehlerbehebung</h3>
      <ul>
        <li>Pruefe, ob eine Internetverbindung besteht.</li>
        <li>Pruefe in iOS, ob Benachrichtigungen fuer CinePing erlaubt sind.</li>
        <li>Pruefe in iOS, ob Kalenderzugriff fuer CinePing erlaubt ist.</li>
        <li>Starte die App nach Berechtigungs- oder Systemeinstellungen einmal neu.</li>
      </ul>

      <Splitline />
      <h3>Rechtliches & weitere Informationen</h3>
      <ul>
        <li>
          <Link href="/apps/cineping/privacy">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/apps/cineping/terms">Nutzungsbedingungen</Link>
        </li>
        <li>
          <Link href="/en/apps/cineping/support">Support in English</Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default Support;
