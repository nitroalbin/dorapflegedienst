
import React from 'react';
import Link from 'next/link';
import { BRAND, CONTACT, ICONS } from '@/constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-brand overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/hero.webp?v=20260129" 
            alt="Pflegerische Zuwendung" 
            className="w-full h-full object-cover opacity-20 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-base font-bold uppercase tracking-widest mb-8">
              <ICONS.Heart className="w-5 h-5" />
              <span>Ambulanter Pflegedienst – Dora GmbH</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-[1.05]">
              Pflege mit Herz, <br />
              <span className="text-brand-accent/90">Kompetenz und Vertrauen.</span>
            </h1>
            
            <div className="bg-white/5 border-l-4 border-brand-accent p-6 mb-10 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-white italic font-light leading-relaxed">
                {BRAND.quote}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center justify-center gap-4 bg-white text-brand px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:bg-brand-accent hover:scale-105 transition-all transform active:scale-95"
              >
                <ICONS.Phone className="w-6 h-6 animate-pulse" />
                Jetzt anrufen
              </a>
              <Link 
                href="/leistungen"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEISTUNGEN OVERVIEW */}
      <section className="py-32 bg-brand-accent/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand text-sm font-black uppercase tracking-[0.3em] mb-4">Serviceportfolio</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Kurzüberblick unserer Leistungen</h3>
            </div>
            <Link href="/leistungen" className="text-brand font-bold flex items-center gap-2 group">
              Alle Leistungen ansehen
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grundpflege",
                desc: "Würdevolle Unterstützung bei Körperpflege, Ernährung und Mobilität im vertrauten Zuhause.",
                icon: "🛁",
                features: ["Körperpflege", "Lagerung", "Ernährung"]
              },
              {
                title: "Behandlungspflege",
                desc: "Fachgerechte medizinische Versorgung nach ärztlicher Verordnung (SGB V) durch unsere Profis.",
                icon: "🏥",
                features: ["Wundversorgung", "Injektionen", "Medikamente"]
              },
              {
                title: "Hauswirtschaft",
                desc: "Wir halten Ihnen den Rücken frei und unterstützen Sie zuverlässig bei alltäglichen Aufgaben.",
                icon: "🧹",
                features: ["Reinigung", "Einkäufe", "Wäschepflege"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform inline-block" aria-hidden="true">{service.icon}</div>
                <h4 className="text-2xl font-serif font-bold text-brand mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map(f => (
                    <span key={f} className="text-[10px] font-bold uppercase tracking-wider bg-brand-accent px-3 py-1 rounded-full text-brand/70">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einzugsgebiet Banner */}
      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <ICONS.Location className="w-6 h-6 text-brand-accent" />
            <span className="font-semibold">Einzugsgebiet:</span>
            <span>Alle Stadtteile in Frankfurt und Offenbach – auf Anfrage bedienen wir auch andere Gebiete</span>
          </div>
        </div>
      </section>

      {/* 3. WARUM WIR? (USPs) */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img 
                src="/warumwir.webp?v=20260129" 
                alt="Einfühlsame Pflege" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand text-white p-10 rounded-[2rem] shadow-2xl z-20 max-w-[280px]">
              <ICONS.Shield className="w-12 h-12 mb-4 text-brand-accent opacity-50" aria-hidden="true" />
              <p className="text-lg font-bold">Zertifizierte Qualität & Herzlichkeit</p>
            </div>
          </div>

          <div>
            <h2 className="text-brand text-sm font-black uppercase tracking-[0.3em] mb-4">Ihre Vorteile</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-12">Warum sich Patienten für Dora entscheiden</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Feste Ansprechpartner", desc: "Wir setzen auf Bezugspflege für echtes Vertrauen.", icon: <ICONS.Users className="w-6 h-6" /> },
                { title: "Individuelle Pflege", desc: "Keine Standardlösungen. Wir planen nach Ihrem Bedarf.", icon: <ICONS.Heart className="w-6 h-6" /> },
                { title: "24h Erreichbarkeit", desc: "Im Notfall sind wir rund um die Uhr als Partner an Ihrer Seite.", icon: <ICONS.Clock className="w-6 h-6" /> },
                { title: "Zuverlässig", desc: "Pünktlichkeit und Kontinuität sind für uns selbstverständlich.", icon: <ICONS.Shield className="w-6 h-6" /> }
              ].map((usp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-accent flex items-center justify-center text-brand" aria-hidden="true">
                    {usp.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-1">{usp.title}</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 rounded-3xl bg-brand-dark text-white">
              <p className="text-brand-accent font-bold mb-2">Haben Sie Fragen zur Finanzierung?</p>
              <p className="text-white/70 text-sm mb-6">Wir beraten Sie kostenlos zu Pflegegraden und Krankenkassenleistungen.</p>
              <Link href="/kontakt" className="inline-block border-b border-brand-accent text-brand-accent font-bold pb-1 hover:text-white transition-colors">
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST ELEMENTS */}
      <section className="py-32 bg-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-brand mb-16">Was unsere Kunden sagen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-10 rounded-3xl shadow-sm italic text-gray-600 relative">
                <span className="absolute top-4 left-4 text-6xl text-brand/10 font-serif" aria-hidden="true">“</span>
                <p className="mb-6 relative z-10">
                  „Hier wird noch mit Herz gepflegt. Die Mitarbeiter der Dora GmbH sind unglaublich geduldig und einfühlsam. Wir fühlen uns bestens aufgehoben.“
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" aria-hidden="true"></div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-brand-dark uppercase tracking-widest">Familie M.</div>
                    <div className="text-[10px] text-gray-400">Angehörige aus Offenbach/Frankfurt am Main</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 py-12 border-y border-brand/10 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
             <span className="text-2xl font-serif font-bold text-brand">PFLEGEKASSE</span>
             <span className="text-2xl font-serif font-bold text-brand">MDK GEPRÜFT</span>
             <span className="text-2xl font-serif font-bold text-brand">SGB V / XI</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Wir sind nur einen Anruf entfernt.
          </h3>
          <p className="text-xl text-brand-accent mb-12 max-w-2xl mx-auto">
            Lassen Sie uns in einem persönlichen Erstgespräch klären, wie wir Sie am besten unterstützen können.
          </p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-6 bg-brand-accent text-brand px-12 py-6 rounded-full text-2xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
