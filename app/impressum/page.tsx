
import React from 'react';
import PageIntro from '@/components/PageIntro';
import { BRAND, CONTACT } from '@/constants';

export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <PageIntro 
        accent="Rechtliches"
        title="Impressum"
        description="Gesetzliche Anbieterkennung nach § 5 TMG und Informationen zur Dora GmbH."
      />
      
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-brand/5 space-y-12 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold text-lg">{BRAND.name}</p>
            <p>{CONTACT.address}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Vertreten durch</h2>
            <p>[Vorname Nachname des Geschäftsführers]</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Kontakt</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><strong>Telefon:</strong> {CONTACT.phone}</p>
              <p><strong>Mobil:</strong> {CONTACT.mobile}</p>
              <p><strong>Fax:</strong> {CONTACT.fax}</p>
              <p><strong>E-Mail:</strong> {CONTACT.email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Registereintrag</h2>
            <p>Eintragung im Handelsregister.</p>
            <p><strong>Registergericht:</strong> Amtsgericht Frankfurt am Main</p>
            <p><strong>Registernummer:</strong> HRB [Nummer einfügen]</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE [Nummer einfügen]</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Aufsichtsbehörde</h2>
            <p>Pflegekassen und Krankenkassen der gesetzlichen Krankenversicherung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Redaktionell verantwortlich</h2>
            <p>[Vorname Nachname]</p>
            <p>{CONTACT.address}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <div className="pt-10 border-t border-brand/10">
            <p className="text-sm text-gray-400 italic">
              Quelle: Erstellt mit dem Impressum-Generator von eRecht24.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
