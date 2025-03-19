import React from 'react';
import PageLayout from '@/component/PageLayout';
import Splitline from '@/component/Splitline';

const Privacy = () => {
  return (
    <PageLayout pageTitle={'Liga Live Chat - Datenschutzerklärung'}>
      <h2>Datenschutz­erklärung für Liga Live Chat</h2>
      <Splitline />
      <h3>1. Datenschutz auf einen Blick</h3>
      <h4>Allgemeine Hinweise </h4>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie die App Liga Live Chat nutzen. Personenbezogene
        Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
        Informationen entnehmen Sie der nachfolgenden Datenschutzerklärung.
      </p>
      <h4>Datenerfassung in dieser App</h4>
      <h5>Wer ist verantwortlich für die Datenerfassung in dieser App?</h5>
      <p>
        Die Datenverarbeitung erfolgt durch den Betreiber der App. Die Kontaktdaten können Sie dem
        Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.{' '}
      </p>
      <h5>Wie erfassen wir Ihre Daten?</h5>
      <p>
        Ihre Daten werden erhoben, wenn Sie uns diese mitteilen, z. B. durch die Registrierung mit
        E-Mail/Passwort oder über eine Anmeldung mit Google oder Apple. Weitere Daten werden
        automatisch oder nach Ihrer Einwilligung durch unsere IT-Systeme erfasst. Das sind vor allem
        technische Daten (z. B. verwendetes Gerät, Betriebssystem oder Uhrzeit des Zugriffs).
      </p>
      <h5>Wofür nutzen wir Ihre Daten?</h5>
      <p>
        Ein Teil der Daten wird erhoben, um die fehlerfreie Bereitstellung der App sicherzustellen.
        Andere Daten dienen der Nutzerverwaltung, der Bereitstellung von Chatfunktionen oder der
        Verbesserung unserer App.{' '}
      </p>
      <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
        Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie können die Berichtigung oder
        Löschung dieser Daten verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
        haben, können Sie diese jederzeit widerrufen. Zudem haben Sie das Recht, unter bestimmten
        Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen oder
        eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
      </p>
      <Splitline />
      <h3>2. Hosting & Datenverarbeitung</h3>
      <p>Die App nutzt folgende externe Dienste:</p>
      <h4>Firebase Firestore & Firebase Authentication (Google LLC)</h4>
      <p>
        Wir nutzen Firebase Firestore zur Speicherung von Chat-Nachrichten und Nutzerdaten sowie
        Firebase Authentication zur Anmeldung mit E-Mail/Passwort, Google oder Apple. Die Daten
        werden in Google Cloud-Rechenzentren gespeichert. Weitere Informationen zur
        Datenverarbeitung durch Firebase finden Sie unter:
        <a href="https://firebase.google.com/support/privacy">
          https://firebase.google.com/support/privacy
        </a>
      </p>
      <h4>OpenLigaDB API</h4>
      <p>
        Unsere App nutzt Daten von OpenLigaDB zur Bereitstellung von Bundesliga-Spieldaten (z. B.
        Spielstände, Mannschaftsnamen, Termine). Die OpenLigaDB API erhebt keine personenbezogenen
        Nutzerdaten. Weitere Informationen: https://www.openligadb.de/
      </p>
      <Splitline />
      <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
      <h4>Datenschutz</h4>
      <p>
        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
        Datenschutzvorschriften. Bitte beachten Sie, dass die Datenübertragung im Internet (z. B.
        bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
        der Daten vor Zugriff durch Dritte ist nicht möglich.
      </p>
      <h4>Hinweis zur verantwortlichen Stelle</h4>
      <h5>Verantwortlich für die Datenverarbeitung:</h5>
      <p>
        Dominik Amrugiewicz, <br />
        Kaiser-Heinrich-Platz 8, <br /> 67547 Worms, <br />
        E-Mail: hi@domthedev.com
      </p>
      <h4>Speicherdauer</h4>
      <p>
        Ihre Daten bleiben gespeichert, solange Ihr Nutzerkonto besteht. Nach einer Löschung des
        Kontos werden Ihre personenbezogenen Daten entfernt, sofern keine gesetzliche
        Aufbewahrungspflicht besteht.
      </p>
      <h4>Rechtsgrundlagen der Datenverarbeitung</h4>
      <h5>Die Datenverarbeitung erfolgt auf Basis folgender Rechtsgrundlagen:</h5>
      <ul>
        <li>
          • Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – bei der Registrierung und Nutzung der App
        </li>
        <li>
          • Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) – für die Bereitstellung der Chat- und
          Spieldaten-Funktionen
        </li>
        <li>
          • Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse) – zur Verbesserung der App und zur
          Fehleranalyse
        </li>
      </ul>
      <Splitline />
      <h3>4. Nutzerkonten & Registrierung</h3>
      <h4>Registrierung in der App</h4>
      <p>
        Um Liga Live Chat nutzen zu können, können Sie sich registrieren. Dazu stehen Ihnen folgende
        Anmeldeoptionen zur Verfügung:
      </p>
      <ul>
        <b>
          <li> E-Mail & Passwort</li>
          <li> Google-Login</li>
          <li> Apple-Login</li>
        </b>
      </ul>
      <h4>Welche Daten werden gespeichert?</h4>
      <p>Bei der Registrierung speichern wir:</p>
      <ul>
        <li> Ihre E-Mail-Adresse (bei Anmeldung per E-Mail)</li>
        <li> Ihren Nutzernamen</li>
        <li> Ihre Chat-Nachrichten</li>
        <li> Anmeldedatum und -zeit</li>
      </ul>
      <p>
        Diese Daten werden ausschließlich zur Verwaltung Ihres Nutzerkontos und zur Bereitstellung
        der Chat-Funktion verwendet.
      </p>
      <Splitline />
      <h3>5. Chat-Funktion & Datenverarbeitung</h3>
      <h4>Erstellung von Chat-Nachrichten</h4>
      <p>
        Nutzer können in der App Chat-Nachrichten zu Bundesliga-Spielen erstellen. Diese Nachrichten
        sind für andere Nutzer sichtbar und werden in Firebase Firestore gespeichert.
      </p>
      <h4>Löschung von Nachrichten</h4>
      <p>Chat-Nachrichten bleiben gespeichert, bis:</p>
      <ul>
        <li>der Nutzer sie selbst löscht oder</li>
        <li>ein Administrator sie entfernt.</li>
      </ul>
      <Splitline />
      <h3>6. Ihre Rechte als Nutzer</h3>
      <h4>Widerruf Ihrer Einwilligung</h4>
      <br />
      <p>
        Sie können eine erteilte Einwilligung zur Speicherung Ihrer Daten jederzeit widerrufen. Die
        bis zum Widerruf erfolgte Datenverarbeitung bleibt rechtmäßig.
      </p>
      <br />
      <h4>
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
        (Art. 21 DSGVO)
      </h4>
      <br />
      <p>
        Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten
        Widerspruch einzulegen, wenn sie auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht. Werden Ihre
        personenbezogenen Daten zum Zweck der Direktwerbung genutzt, können Sie dem jederzeit
        widersprechen.
      </p>
      <br />
      <h4>Recht auf Auskunft, Berichtigung und Löschung</h4>
      <br />
      <p>
        Sie haben das Recht, jederzeit Auskunft über Ihre gespeicherten personenbezogenen Daten zu
        erhalten. Sie können außerdem eine Berichtigung oder Löschung dieser Daten verlangen.
      </p>
      <br />
      <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
      <br />
      <p>
        Bei Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei der zuständigen
        Aufsichtsbehörde zu.
      </p>
      <br />
      <h4>Datenübertragbarkeit</h4>
      <br />
      <p>
        Sie haben das Recht, Ihre gespeicherten Daten in einem gängigen, maschinenlesbaren Format zu
        erhalten.
      </p>
      <Splitline />
      <h3>7. Sicherheit der Daten</h3>
      <h4>SSL- bzw. TLS-Verschlüsselung</h4>
      <p>
        Die App nutzt moderne Verschlüsselungstechnologien, um Ihre Daten bestmöglich zu schützen.
      </p>
      <h4>Widerspruch gegen Werbe-E-Mails</h4>
      <p>
        Der Nutzung von im Rahmen der Registrierung erhobenen E-Mail-Adressen zur Übersendung von
        nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
      </p>

      <Splitline />
      <h4>8. Änderungen der Datenschutzerklärung</h4>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage oder
        unsere App ändert. Die aktuelle Version der Datenschutzerklärung ist jederzeit in der App
        einsehbar.
      </p>
    </PageLayout>
  );
};

export default Privacy;
