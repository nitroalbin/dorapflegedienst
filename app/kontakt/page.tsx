
"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageIntro from '@/components/PageIntro';
import { CONTACT, ICONS } from '@/constants';

function ContactContent() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  return (
    <div className="bg-white pb-32">
      <PageIntro 
        accent="Persönlich & Nah"
        title="Kontakt zur Dora GmbH"
        description="Wir sind Ihr verlässlicher Partner für professionelle Pflege in Offenbach/Frankfurt am Main. Ein Anruf genügt für eine unverbindliche Erstberatung."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & 24h Note */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Massive Phone Display */}
            <div className="bg-brand text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform" aria-hidden="true">
                <ICONS.Phone className="w-32 h-32" />
              </div>
              <p className="text-brand-accent/60 text-xs font-black uppercase tracking-[0.3em] mb-4">
                Direktwahl Beratung
              </p>
              <a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
                className="text-4xl md:text-5xl font-black tracking-tighter hover:text-brand-accent transition-colors block mb-4"
              >
                {CONTACT.phone}
              </a>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Wir bevorzugen den direkten Kontakt per Telefon für eine schnelle und individuelle Beratung.
              </p>
            </div>

            {/* Detailed Contact List */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-brand/5">
              <h3 className="text-xl font-serif font-bold text-brand mb-8 border-b border-brand/10 pb-4">
                Kontaktdaten im Überblick
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ICONS.Phone className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Telefon</span>
                    <span className="font-bold text-brand-dark">{CONTACT.phone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ICONS.Phone className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Mobil</span>
                    <span className="font-bold text-brand-dark">{CONTACT.mobile}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ICONS.Shield className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Fax</span>
                    <span className="font-bold text-brand-dark">{CONTACT.fax}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ICONS.Mail className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">E-Mail</span>
                    <a href={`mailto:${CONTACT.email}`} className="font-bold text-brand hover:underline">{CONTACT.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ICONS.Location className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Adresse</span>
                    <span className="font-bold text-brand-dark leading-snug block">{CONTACT.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ICONS.Location className="w-5 h-5 text-brand/40 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Einzugsgebiet</span>
                    <span className="font-bold text-brand-dark leading-snug block">{CONTACT.serviceArea}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 24h Note */}
            <div className="bg-brand-accent/50 p-8 rounded-[2rem] border border-brand/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <ICONS.Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-brand">24-Stunden-Rufbereitschaft</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Für unsere Patienten sind wir in akuten pflegerischen Notfällen rund um die Uhr erreichbar. 
                Sicherheit und Verlässlichkeit stehen bei uns an erster Stelle.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-brand/5">
              {isSuccess ? (
                <div role="alert" className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ICONS.Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand mb-4">Vielen Dank!</h3>
                  <p className="text-gray-600 mb-8">Ihre Nachricht wurde erfolgreich versendet. Wir melden uns zeitnah bei Ihnen.</p>
                  <button 
                    onClick={() => window.location.href = '/kontakt'}
                    className="text-brand font-bold underline underline-offset-4"
                  >
                    Neues Formular senden
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-serif font-bold text-brand mb-4">Nachricht senden</h3>
                  <p className="text-gray-500 mb-12">Hinterlassen Sie uns Ihre Kontaktdaten, wir rufen Sie gerne zurück.</p>
                  
                  <form action="/api/submit" method="POST" className="space-y-8">
                    <input type="hidden" name="from_name" value="Dora GmbH Website" />
                    <input type="hidden" name="access_key" value="7ac58a77-a441-4f08-a8cc-3f735b6159ca" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-brand/40 ml-1">Vollständiger Name</label>
                        <input id="name" type="text" name="name" required placeholder="Ihr Name" className="w-full px-6 py-4 rounded-2xl bg-brand-accent/30 border border-transparent focus:bg-white focus:border-brand/20 outline-none focus:ring-4 focus:ring-brand/5 transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-brand/40 ml-1">E-Mail Adresse</label>
                        <input id="email" type="email" name="email" required placeholder="ihre@email.de" className="w-full px-6 py-4 rounded-2xl bg-brand-accent/30 border border-transparent focus:bg-white focus:border-brand/20 outline-none focus:ring-4 focus:ring-brand/5 transition-all font-medium" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-brand/40 ml-1">Telefonnummer (für Rückruf)</label>
                      <input id="phone" type="tel" name="phone" placeholder="z.B. 069 123456" className="w-full px-6 py-4 rounded-2xl bg-brand-accent/30 border border-transparent focus:bg-white focus:border-brand/20 outline-none focus:ring-4 focus:ring-brand/5 transition-all font-medium" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-brand/40 ml-1">Ihr Anliegen</label>
                      <textarea id="message" name="message" rows={5} required placeholder="Wie können wir Ihnen helfen?" className="w-full px-6 py-4 rounded-2xl bg-brand-accent/30 border border-transparent focus:bg-white focus:border-brand/20 outline-none focus:ring-4 focus:ring-brand/5 transition-all resize-none font-medium"></textarea>
                    </div>
                    
                    <div className="flex items-start gap-4 bg-brand-accent/20 p-4 rounded-2xl">
                      <input type="checkbox" required className="mt-1 w-5 h-5 accent-brand" id="dsgvo-accept" />
                      <label htmlFor="dsgvo-accept" className="text-[10px] text-gray-500 leading-relaxed cursor-pointer">
                        Mit dem Absenden des Formulars erkläre ich mich damit einverstanden, dass meine Daten zur Bearbeitung meines Anliegens gespeichert und verwendet werden. Weitere Infos in der <a href="/datenschutz" className="text-brand font-bold underline">Datenschutzerklärung</a>.
                      </label>
                    </div>
                    
                    <button type="submit" className="w-full bg-brand text-white py-6 rounded-[2rem] font-black text-xl hover:bg-brand-light transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                      Anfrage jetzt absenden
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <ContactContent />
    </Suspense>
  );
}
