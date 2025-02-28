import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const Terms = () => {
  return (
    <PageLayout pageTitle={'Liga Live Chat - Nutzungsbedingungen'}>
      <h2>Nutzungsbedingungen für Liga Live Chat</h2>
      <p>Stand: {new Date().getFullYear()}</p>
      <p>
        Willkommen bei <strong>Liga Live Chat</strong>! Durch die Nutzung unserer App akzeptierst du
        die folgenden Nutzungsbedingungen. Falls du mit ihnen nicht einverstanden bist, darfst du
        die App nicht verwenden.
      </p>
      <Splitline />
      <h3>1. Geltungsbereich</h3>
      <p>
        Diese Nutzungsbedingungen gelten für alle registrierten und nicht registrierten Nutzer von{' '}
        <strong>Liga Live Chat</strong>. Sie regeln den Zugriff auf die App und deren Funktionen.
      </p>
      <Splitline />
      <h3>2. Nutzung der App</h3>

      <h4>2.1 Zweck der App</h4>
      <p>
        Liga Live Chat ermöglicht es Nutzern, in Echtzeit über Bundesliga-Spiele zu chatten. Die App
        nutzt Spieldaten aus der <strong>OpenLigaDB API</strong>, übernimmt jedoch keine
        Verantwortung für deren Richtigkeit oder Aktualität.
      </p>

      <h4>2.2 Verfügbarkeit und Änderungen</h4>
      <ul>
        <li>
          Wir bemühen uns, die App stets verfügbar zu halten, übernehmen aber keine Garantie für
          eine ununterbrochene Nutzung.
        </li>
        <li>Funktionen können jederzeit geändert, erweitert oder entfernt werden.</li>
      </ul>
      <Splitline />
      <h3>3. Nutzerkonten & Registrierung</h3>
      <h4>3.1 Registrierungspflicht</h4>
      <p>
        Einige Funktionen der App erfordern eine Registrierung. Dazu stehen folgende Methoden zur
        Verfügung:
      </p>
      <ul>
        <li>Anmeldung mit E-Mail & Passwort</li>
        <li>Anmeldung mit Google</li>
        <li>Anmeldung mit Apple</li>
      </ul>
      <h4>3.2 Verantwortlichkeit für das Konto</h4>
      <ul>
        <li>Du bist für alle Aktivitäten verantwortlich, die unter deinem Konto stattfinden.</li>
        <li>Die Weitergabe von Anmeldeinformationen an Dritte ist untersagt.</li>
      </ul>
      <h4>3.3 Beendigung & Löschung des Kontos</h4>
      <ul>
        <li>Nutzer können ihr Konto jederzeit löschen.</li>
        <li>
          Wir behalten uns das Recht vor, Konten zu sperren oder zu entfernen, wenn gegen diese
          Nutzungsbedingungen verstoßen wird.
        </li>
      </ul>
      <Splitline />
      <h3>4. Verhaltensregeln im Chat</h3>
      <h4>4.1 Allgemeine Chat-Regeln</h4>
      <p>
        In der App ist ein respektvoller Umgang erforderlich. Es ist untersagt, Inhalte zu
        veröffentlichen, die:
      </p>
      <ul>
        <li>Beleidigend, rassistisch, diskriminierend oder gewaltverherrlichend sind.</li>
        <li>Spam oder Werbung enthalten.</li>
        <li>Rechte Dritter verletzen.</li>
      </ul>

      <h4>4.2 Moderation & Sperrung</h4>
      <ul>
        <li>
          Wir behalten uns das Recht vor, Beiträge zu entfernen oder Nutzer zu sperren, die
          wiederholt gegen die Regeln verstoßen.
        </li>
      </ul>

      <Splitline />
      <h3>5. Haftungsbeschränkung</h3>
      <ul>
        <li>Wir übernehmen keine Haftung für Schäden, die durch die Nutzung der App entstehen.</li>
        <li>
          Wir garantieren nicht für die Richtigkeit, Vollständigkeit oder Aktualität der
          bereitgestellten Inhalte.
        </li>
        <li>Nutzer sind für ihre eigenen Inhalte verantwortlich.</li>
      </ul>

      <Splitline />
      <h3>6. Änderungen der Nutzungsbedingungen</h3>
      <ul>
        <li>Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.</li>
        <li>Änderungen treten mit Veröffentlichung in der App in Kraft.</li>
      </ul>

      <Splitline />
      <h3>7. Kontakt & Support</h3>
      <p>Verantwortlich für die App ist:</p>
      <p>
        <strong>Dominik Amrugiewicz</strong>
        <br />
        Kaiser-Heinrich-Platz 8<br />
        67547 Worms
        <br />
        E-Mail: hi@domthedev.com
      </p>
    </PageLayout>
  );
};

export default Terms;
