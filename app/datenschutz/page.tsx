
import React from 'react';
import PageIntro from '@/components/PageIntro';
import { CONTACT } from '@/constants';

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <PageIntro 
        accent="Datensicherheit"
        title="Datenschutzerklärung"
        description="Informationen darüber, wie wir Ihre personenbezogenen Daten erfassen, verarbeiten und schützen."
      />

      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-brand/5 space-y-12 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-bold text-brand mb-4">Allgemeine Hinweise</h3>
            <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <h3 className="text-lg font-bold text-brand mb-4">Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3 className="text-lg font-bold text-brand mb-4">Netlify</h3>
            <p>Wir hosten unsere Website bei Netlify. Anbieter ist die Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA. Netlify ist ein Dienst, mit dem Webseiten bereitgestellt werden können. Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Details finden Sie in der Datenschutzerklärung von Netlify: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://www.netlify.com/privacy/</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">3. Kontaktformular (Web3Forms)</h2>
            <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p className="mb-4">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).</p>
            <p>Wir nutzen den Dienst Web3Forms zur Weiterleitung der Formularnachrichten. Anbieter ist Web3Forms, eine Marke von [Unternehmensdetails falls bekannt, sonst allgemein]. Die Daten werden sicher verschlüsselt übertragen. Die Datenschutzerklärung von Web3Forms finden Sie unter: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://web3forms.com/privacy</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">4. Cookies</h2>
            <p className="mb-4">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>
            <p className="mb-4">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Speicherung Ihrer Cookie-Einwilligung). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>
            <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der Website erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">5. Ihre Rechte</h2>
            <p className="mb-4">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche <strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf <strong>Berichtigung</strong> oder <strong>Löschung</strong> dieser Daten.</p>
            <p className="mb-4">Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            <p><strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong> Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-6">6. Datensicherheit</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </section>

          <div className="pt-10 border-t border-brand/10">
             <p className="font-bold text-brand">Kontakt für Datenschutzanfragen:</p>
             <p>{CONTACT.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
