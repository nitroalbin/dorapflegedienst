
import React from 'react';
import PageIntro from '@/components/PageIntro';
import { BRAND, CONTACT, ICONS } from '@/constants';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageIntro 
        accent="Wer wir sind"
        title="Unser Selbstverständnis"
        description="In der Dora GmbH steht der Mensch im Mittelpunkt. Wir verstehen Pflege als eine Brücke zwischen fachlicher Kompetenz und tiefer Menschlichkeit."
      />

      {/* Core Quote Section */}
      <section className="py-32 bg-brand text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ICONS.Heart className="w-16 h-16 text-brand-accent/30 mx-auto mb-10" />
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-brand-accent">
            {BRAND.quote}
          </blockquote>
        </div>
      </section>

      {/* Description & Values */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand mb-6">Pflege mit Herz & Verstand</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Der ambulante Pflegedienst Dora GmbH wurde mit der Vision gegründet, die häusliche Pflege in Offenbach/Frankfurt am Main ein Stück menschlicher zu gestalten. Für uns ist jeder Patient eine Persönlichkeit mit eigener Geschichte, Wünschen und Bedürfnissen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-brand-accent/50 border border-brand/5">
                <h4 className="font-bold text-brand mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand"></div> Respekt
                </h4>
                <p className="text-sm text-gray-500">Wir wahren die Würde und Autonomie unserer Patienten in jeder Situation.</p>
              </div>
              <div className="p-6 rounded-3xl bg-brand-accent/50 border border-brand/5">
                <h4 className="font-bold text-brand mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand"></div> Wärme
                </h4>
                <p className="text-sm text-gray-500">Ein Lächeln und ein offenes Ohr gehören für uns fest zum Pflegealltag.</p>
              </div>
              <div className="p-6 rounded-3xl bg-brand-accent/50 border border-brand/5">
                <h4 className="font-bold text-brand mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand"></div> Kompetenz
                </h4>
                <p className="text-sm text-gray-500">Stetige Fortbildung sichert die höchste Qualität unserer medizinischen Versorgung.</p>
              </div>
              <div className="p-6 rounded-3xl bg-brand-accent/50 border border-brand/5">
                <h4 className="font-bold text-brand mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand"></div> Vertrauen
                </h4>
                <p className="text-sm text-gray-500">Wir sind der verlässliche Anker für Patienten und ihre Angehörigen.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100">
               <img 
                 src="/uberuns.webp?v=20260129" 
                 alt="Pflegekraft im Gespräch"
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-brand/5">
              <p className="text-brand font-serif italic text-lg leading-snug">
                „Gute Pflege bedeutet nicht nur Versorgung, sondern echtes Vertrauen.“
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section className="py-32 bg-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-6">Netzwerk der Gesundheit</h2>
            <p className="text-gray-600 text-lg">
              Wir arbeiten eng mit Hausärzten, Kliniken, Apotheken und Sanitätshäusern zusammen, um eine lückenlose Versorgungssicherheit zu garantieren. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
             <div className="space-y-4">
               <div className="text-4xl">👨‍⚕️</div>
               <h4 className="font-bold text-brand">Hausärzte & Spezialisten</h4>
               <p className="text-sm text-gray-500">Regelmäßiger Austausch für eine optimale medizinische Therapie.</p>
             </div>
             <div className="space-y-4">
               <div className="text-4xl">🏥</div>
               <h4 className="font-bold text-brand">Überleitmanagement</h4>
               <p className="text-sm text-gray-500">Reibungslose Entlassung aus dem Krankenhaus direkt in die häusliche Pflege.</p>
             </div>
             <div className="space-y-4">
               <div className="text-4xl">🤝</div>
               <h4 className="font-bold text-brand">Angehörigenberatung</h4>
               <p className="text-sm text-gray-500">Wir sind die Stütze für die gesamte Familie und beraten bei Anträgen.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand mb-6">Unser Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Gesichter mit Herz. Hier stellen wir Ihnen bald die Menschen vor, die täglich für Ihr Wohlbefinden im Einsatz sind.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="group text-center">
              <div className="aspect-square bg-brand-accent rounded-[3rem] mb-6 overflow-hidden border-2 border-transparent group-hover:border-brand/20 transition-all flex items-center justify-center text-brand/10">
                <ICONS.Users className="w-20 h-20" />
              </div>
              <h4 className="font-bold text-brand text-lg">Mitarbeiter {i}</h4>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Pflegefachkraft</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section with Map Placeholder */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-serif font-bold text-brand mb-6">Besuchen Sie uns</h2>
               <p className="text-gray-600 mb-8">
                 Unser Büro liegt im Herzen von Offenbach/Frankfurt am Main. Wir freuen uns über Ihren Besuch nach vorheriger Terminvereinbarung.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <ICONS.Location className="w-6 h-6 text-brand" />
                   <span className="font-bold text-brand-dark">{CONTACT.address}</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <ICONS.Clock className="w-6 h-6 text-brand" />
                   <span className="text-gray-600">{CONTACT.openingHours}</span>
                 </div>
               </div>
             </div>
             <a 
               href="https://www.google.com/maps/search/Ambulanter+Pflegedienst+Dora+GmbH+Offenbach%2FFrankfurt+am+Main" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block group relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white"
             >
               <img 
                 src="/4.webp?v=20260129" 
                 alt="Map Placeholder" 
                 className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white text-brand px-8 py-4 rounded-full font-black shadow-2xl">Auf Google Maps öffnen</span>
               </div>
             </a>
           </div>
        </div>
      </section>
    </div>
  );
}
