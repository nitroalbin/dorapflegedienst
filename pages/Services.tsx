
import React from 'react';
import PageIntro from '@/components/PageIntro';
import ServiceCard from '@/components/ServiceCard';
import { CONTACT, ICONS } from '@/constants';

const Services: React.FC = () => {
  const services = [
    {
      title: "Behandlungspflege (SGB V)",
      description: "Medizinisch notwendige Maßnahmen, die von Ihrem Arzt verordnet werden. Unser Fachpersonal stellt sicher, dass die Therapieziele im häuslichen Umfeld erreicht werden.",
      icon: <ICONS.Medical className="w-12 h-12" />,
      features: ["Wundversorgung & Verbandwechsel", "Injektionen (z.B. Insulin)", "Medikamentengabe & Überwachung", "Blutdruck- & Blutzuckermessung"]
    },
    {
      title: "Grundpflege",
      description: "Unterstützung im Alltag mit Würde, Respekt und Zeit. Wir begleiten Sie einfühlsam bei allen grundpflegerischen Tätigkeiten.",
      icon: <ICONS.Bath className="w-12 h-12" />,
      features: ["Ganzkörper- & Teilwaschungen", "Hilfe beim An- & Auskleiden", "Unterstützung bei der Nahrungsaufnahme", "Lagerung & Mobilisation"]
    },
    {
      title: "Pflegeberatung (§ 37 SGB XI)",
      description: "Kompetente Beratung für Pflegebedürftige und ihre Angehörigen. Wir unterstützen Sie bei allen Fragen rund um die Pflege und helfen Ihnen, die beste Versorgung zu finden.",
      icon: <ICONS.Shield className="w-12 h-12" />,
      features: ["Beratungsbesuche nach § 37.3 SGB XI", "Hilfe bei Pflegegradanträgen", "Information über Leistungsansprüche", "Individuelle Pflegeplanung"]
    },
    {
      title: "Betreuung & Entlastung",
      description: "Zusätzliche Betreuungsleistungen nach § 45b SGB XI zur Förderung der Lebensqualität und Entlastung pflegender Angehöriger.",
      icon: <ICONS.Heart className="w-12 h-12" />,
      features: ["Alltagsbegleitung & Spaziergänge", "Gedächtnistraining", "Begleitung zu Arztbesuchen", "Stundenweise Entlastung"]
    },
    {
      title: "Verhinderungspflege",
      description: "Verhinderungspflege zur Entlastung pflegender Angehöriger.",
      icon: <ICONS.Users className="w-12 h-12" />,
      features: [
        "Vertretung der Pflegepersonen",
        "Wenn pflegende Angehörige krank sind",
        "Wenn pflegende Angehörige Urlaub benötigen",
        "Übernahme der Kosten durch die Pflegekasse"
      ]
    },
    {
      title: "Hauswirtschaftliche Hilfe",
      description: "Wir unterstützen Sie bei der Bewältigung Ihres Haushalts, damit Sie sich in Ihren eigenen vier Wänden rundum wohlfühlen können.",
      icon: <ICONS.HomeService className="w-12 h-12" />,
      features: ["Reinigen der Wohnung", "Wäschepflege & Bügeln", "Einkaufsservice", "Zubereitung von Mahlzeiten"]
    },
    {
      title: "Vermittlung",
      description: "Wir vermitteln Ihnen zuverlässige Zusatzleistungen für Ihren Alltag – alles aus einer Hand für Ihre Sicherheit und Bequemlichkeit.",
      icon: <ICONS.Star className="w-12 h-12" />,
      features: ["Essen auf Rädern", "Hausnotruf-Systeme", "Fahrdienste", "Hilfsmittelversorgung"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <PageIntro 
        accent="Unser Serviceumfang"
        title="Umfassende Pflege & Betreuung"
        description="Wir bieten Ihnen ein breites Spektrum an professioneller Unterstützung, individuell auf Ihre Bedürfnisse und Ihren Pflegegrad zugeschnitten. Unser Ziel ist Ihr Wohlbefinden in den eigenen vier Wänden."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* USPs / Besonderheiten */}
      <section className="py-32 bg-brand-accent/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand">Das Besondere an Dora</h2>
            <p className="text-gray-500 mt-4">Qualität, die man spürt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Bezugspflege", desc: "Wir achten auf Kontinuität. Sie haben feste Ansprechpartner, die Sie und Ihre Gewohnheiten kennen.", icon: <ICONS.Users className="w-6 h-6" /> },
              { title: "Individuelle Planung", desc: "Keine Stoppuhr-Pflege. Wir nehmen uns Zeit und passen die Einsätze flexibel an Ihren Bedarf an.", icon: <ICONS.Clock className="w-6 h-6" /> },
              { title: "Zertifizierte Fachkräfte", desc: "Unser Team besteht ausschließlich aus examinierten Pflegekräften und geschulten Assistenten.", icon: <ICONS.Shield className="w-6 h-6" /> }
            ].map((usp, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
                <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6">
                  {usp.icon}
                </div>
                <h4 className="text-xl font-bold text-brand mb-4">{usp.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand text-center mb-16">Der Weg zu uns</h2>
        <div className="space-y-10">
          {[
            { step: 1, title: "Erstkontakt", desc: "Rufen Sie uns unverbindlich an oder schreiben Sie uns eine E-Mail. In einem kurzen Telefonat klären wir Ihre erste Situation und vereinbaren einen zeitnahen Termin." },
            { step: 2, title: "Persönliche Beratung & Bedarfsermittlung", desc: "Wir besuchen Sie kostenlos zu Hause. Gemeinsam mit Ihnen und Ihren Angehörigen ermitteln wir den konkreten Hilfebedarf und erstellen eine individuelle Pflegeplanung." },
            { step: 3, title: "Beginn der Versorgung", desc: "Nach Klärung der Kostenübernahme durch die Pflegekasse oder das Sozialamt starten wir mit der vereinbarten Unterstützung. Wir sind ab dann verlässlich für Sie da." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">{item.step}</div>
              <div>
                <h4 className="text-xl font-bold text-brand mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-24 text-center text-white mx-4 rounded-[4rem] mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Haben Sie Fragen zur Finanzierung oder zum Pflegegrad?</h3>
          <p className="text-brand-accent/80 text-xl mb-12">Wir beraten Sie kompetent und helfen Ihnen bei den nötigen Anträgen – völlig kostenfrei.</p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="inline-flex items-center gap-6 bg-white text-brand px-12 py-6 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-transform"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
