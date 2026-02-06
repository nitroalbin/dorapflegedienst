
import React from 'react';
import PageIntro from '@/components/PageIntro';
import ServiceCard from '@/components/ServiceCard';
import { CONTACT, ICONS } from '@/constants';

export default function ServicesPage() {
  const services = [
    {
      title: "Behandlungspflege (SGB V)",
      description: "Medizinisch notwendige Maßnahmen, die von Ihrem Arzt verordnet werden. Unser Fachpersonal stellt sicher, dass die Therapieziele im häuslichen Umfeld erreicht werden.",
      icon: "🏥",
      features: ["Wundversorgung & Verbandwechsel", "Injektionen (z.B. Insulin)", "Medikamentengabe & Überwachung", "Blutdruck- & Blutzuckermessung"],
      details: {
        whatIs: "Die Behandlungspflege umfasst alle medizinischen Maßnahmen, die von einem Arzt verordnet und von examinierten Pflegefachkräften durchgeführt werden. Im Gegensatz zur Grundpflege geht es hier um medizinische Versorgung wie Wundbehandlung, Injektionen, Katheter- und Stomapflege, Medikamentengabe oder das Anziehen von Kompressionsstrümpfen. Diese Leistungen sind im Sozialgesetzbuch V (Krankenversicherung) geregelt – nicht im Pflegebereich!",
        forWhom: "Für alle Menschen, die medizinische Versorgung zu Hause benötigen – unabhängig vom Alter oder Pflegegrad. Typische Beispiele: Diabetiker, die Insulininjektionen brauchen, Patienten mit chronischen Wunden, Menschen nach Operationen oder mit Dauerkathetern. Auch wer keinen Pflegegrad hat, kann Behandlungspflege erhalten!",
        costs: [
          "Die Krankenkasse übernimmt 100% der Kosten",
          "Sie benötigen KEINEN Pflegegrad",
          "Lediglich eine ärztliche Verordnung (Rezept) ist erforderlich",
          "Keine Zuzahlung bei Befreiung, sonst max. 10€ pro Verordnung"
        ],
        faqs: [
          {
            question: "Brauche ich einen Pflegegrad für Behandlungspflege?",
            answer: "Nein! Die Behandlungspflege ist eine Leistung der Krankenkasse (SGB V) und völlig unabhängig vom Pflegegrad. Sie brauchen lediglich eine Verordnung von Ihrem Arzt."
          },
          {
            question: "Wie bekomme ich Behandlungspflege?",
            answer: "Ihr Hausarzt oder Facharzt stellt eine Verordnung für häusliche Krankenpflege aus. Diese reichen wir bei Ihrer Krankenkasse ein und nach Genehmigung beginnen wir mit der Versorgung."
          },
          {
            question: "Wie lange gilt die Verordnung?",
            answer: "Die Erstverordnung gilt meist für 14 Tage. Danach kann Ihr Arzt Folgeverordnungen ausstellen – bei chronischen Erkrankungen oft für bis zu 3 Monate."
          }
        ]
      }
    },
    {
      title: "Grundpflege",
      description: "Unterstützung im Alltag mit Würde, Respekt und Zeit. Wir begleiten Sie einfühlsam bei allen grundpflegerischen Tätigkeiten.",
      icon: "🛁",
      features: ["Ganzkörper- & Teilwaschungen", "Hilfe beim An- & Auskleiden", "Unterstützung bei der Nahrungsaufnahme", "Lagerung & Mobilisation"],
      details: {
        whatIs: "Die Grundpflege (auch körperbezogene Pflegemaßnahmen genannt) umfasst alle Hilfen bei den alltäglichen Verrichtungen: Körperpflege (Waschen, Duschen, Baden, Zahnpflege), Ernährung (Hilfe beim Essen und Trinken), Mobilität (Aufstehen, Gehen, Treppensteigen) und Ausscheidung (Toilettengang, Inkontinenzversorgung). Diese Leistungen werden über die Pflegekasse (SGB XI) finanziert.",
        forWhom: "Für alle Menschen mit einem anerkannten Pflegegrad (1-5), die bei der täglichen Körperpflege, Ernährung oder Mobilität Unterstützung benötigen. Besonders geeignet für Senioren, Menschen mit körperlichen Einschränkungen oder nach einem Krankenhausaufenthalt.",
        costs: [
          "Finanzierung über Pflegesachleistungen der Pflegekasse",
          "Pflegegrad 2: bis zu 761€/Monat",
          "Pflegegrad 3: bis zu 1.432€/Monat",
          "Pflegegrad 4: bis zu 1.778€/Monat",
          "Pflegegrad 5: bis zu 2.200€/Monat",
          "Kombinierbar mit Pflegegeld (Kombinationsleistung)"
        ],
        faqs: [
          {
            question: "Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistung?",
            answer: "Pflegegeld erhalten Sie, wenn Angehörige Sie pflegen. Pflegesachleistungen werden direkt an einen Pflegedienst wie uns gezahlt. Sie können beides kombinieren: Nutzen Sie z.B. 50% der Sachleistung, erhalten Sie noch 50% des Pflegegeldes."
          },
          {
            question: "Was ist mit Pflegegrad 1?",
            answer: "Mit Pflegegrad 1 haben Sie keinen Anspruch auf Pflegesachleistungen, aber Sie können den Entlastungsbetrag von 125€/Monat für Grundpflege nutzen. Wir beraten Sie gerne zu den Möglichkeiten."
          },
          {
            question: "Wie oft kommt der Pflegedienst?",
            answer: "Das hängt von Ihrem individuellen Bedarf ab – von einmal wöchentlich bis mehrmals täglich. Gemeinsam erstellen wir einen Pflegeplan, der zu Ihnen passt."
          }
        ]
      }
    },
    {
      title: "Pflegeberatung (§ 37 SGB XI)",
      description: "Kompetente Beratung für Pflegebedürftige und ihre Angehörigen. Wir unterstützen Sie bei allen Fragen rund um die Pflege und helfen Ihnen, die beste Versorgung zu finden.",
      icon: "🛡️",
      features: ["Beratungsbesuche nach § 37.3 SGB XI", "Hilfe bei Pflegegradanträgen", "Information über Leistungsansprüche", "Individuelle Pflegeplanung"],
      details: {
        whatIs: "Der Beratungsbesuch nach § 37.3 SGB XI ist ein gesetzlich vorgeschriebener Besuch für alle, die Pflegegeld beziehen und zu Hause von Angehörigen gepflegt werden. Eine Pflegefachkraft kommt zu Ihnen, überprüft die Pflegesituation, gibt Tipps zur Verbesserung und berät zu weiteren Leistungen. Dieser Besuch ist verpflichtend und dient Ihrer Sicherheit!",
        forWhom: "Verpflichtend für alle Pflegegeldempfänger (Pflegegrad 2-5), die ausschließlich von Angehörigen gepflegt werden. Bei Pflegegrad 2 und 3 halbjährlich, bei Pflegegrad 4 und 5 vierteljährlich. Auch für Pflegegrad 1 empfohlen (freiwillig, aber kostenlos).",
        costs: [
          "Die Beratungsbesuche sind für Sie komplett kostenfrei",
          "Die Pflegekasse übernimmt 100% der Kosten",
          "Keine versteckten Gebühren oder Zuzahlungen"
        ],
        faqs: [
          {
            question: "Was passiert, wenn ich den Beratungsbesuch nicht mache?",
            answer: "Achtung: Wird der Beratungsbesuch nicht durchgeführt, kann die Pflegekasse das Pflegegeld kürzen oder sogar ganz streichen! Bei erstmaligem Versäumnis erfolgt eine Mahnung, danach droht Kürzung um 50%."
          },
          {
            question: "Ist das eine Kontrolle?",
            answer: "Nein! Der Besuch dient in erster Linie der Beratung und Unterstützung. Wir schauen, wie es Ihnen geht, ob die Pflege gut läuft und welche zusätzlichen Hilfen Sie nutzen könnten. Es geht um Ihr Wohlbefinden, nicht um Kontrolle."
          },
          {
            question: "Kann ich mir den Termin aussuchen?",
            answer: "Ja! Wir vereinbaren einen Termin, der Ihnen passt. Der Besuch dauert etwa 30-45 Minuten und findet bei Ihnen zu Hause statt."
          }
        ]
      }
    },
    {
      title: "Betreuung & Entlastung",
      description: "Zusätzliche Betreuungsleistungen nach § 45b SGB XI zur Förderung der Lebensqualität und Entlastung pflegender Angehöriger.",
      icon: "❤️",
      features: ["Alltagsbegleitung & Spaziergänge", "Gedächtnistraining", "Begleitung zu Arztbesuchen", "Stundenweise Entlastung"],
      details: {
        whatIs: "Der Entlastungsbetrag ist eine monatliche Leistung von 125€ für alle Pflegebedürftigen mit Pflegegrad 1-5. Er dient zur Entlastung pflegender Angehöriger und zur Förderung der Selbstständigkeit. Sie können damit Betreuung zu Hause, Alltagsbegleitung, Haushaltshilfe oder Tages-/Nachtpflege finanzieren.",
        forWhom: "Für alle Menschen mit Pflegegrad 1-5! Besonders wertvoll für pflegende Angehörige, die eine Auszeit brauchen, und für Pflegebedürftige, die Gesellschaft und Aktivierung wünschen. Bei Pflegegrad 1 ist dies oft die wichtigste Leistung überhaupt.",
        costs: [
          "125€ pro Monat – für jeden Pflegegrad (1-5)",
          "Nicht genutzte Beträge können angespart werden",
          "Übertrag ins Folgejahr möglich (bis 30. Juni)",
          "Das sind bis zu 1.500€ pro Jahr!",
          "Zusätzlich zu allen anderen Pflegeleistungen"
        ],
        faqs: [
          {
            question: "Verfällt der Entlastungsbetrag, wenn ich ihn nicht nutze?",
            answer: "Nicht sofort! Sie können die monatlichen 125€ ansparen. Nicht genutzte Beträge aus dem Vorjahr können Sie noch bis zum 30. Juni des Folgejahres verwenden. Danach verfallen sie allerdings. Nutzen Sie Ihr Guthaben!"
          },
          {
            question: "Wofür kann ich den Entlastungsbetrag genau nutzen?",
            answer: "Für anerkannte Angebote zur Unterstützung im Alltag: Betreuung zu Hause, Haushaltshilfe, Alltagsbegleitung, Tages- oder Nachtpflege, oder auch Kurzzeitpflege. Wir helfen Ihnen, das Beste daraus zu machen!"
          },
          {
            question: "Bekomme ich das Geld ausgezahlt?",
            answer: "Nein, der Entlastungsbetrag wird nicht bar ausgezahlt. Sie nutzen die Leistung, und wir rechnen direkt mit Ihrer Pflegekasse ab. Sie müssen nicht in Vorkasse gehen."
          }
        ]
      }
    },
    {
      title: "Verhinderungspflege",
      description: "Verhinderungspflege zur Entlastung pflegender Angehöriger.",
      icon: "🤝",
      features: [
        "Vertretung der Pflegepersonen",
        "Wenn pflegende Angehörige krank sind",
        "Wenn pflegende Angehörige Urlaub benötigen",
        "Übernahme der Kosten durch die Pflegekasse"
      ],
      details: {
        whatIs: "Die Verhinderungspflege springt ein, wenn die Person, die Sie normalerweise pflegt (z.B. Ehepartner, Kinder), verhindert ist – sei es durch Krankheit, Urlaub, einen wichtigen Termin oder einfach zur Erholung. Ein Pflegedienst oder eine andere Person übernimmt dann die Pflege. So können Angehörige neue Kraft tanken!",
        forWhom: "Für Pflegebedürftige mit Pflegegrad 2-5, die seit mindestens 6 Monaten zu Hause von einem Angehörigen gepflegt werden. Die Verhinderungspflege kann stundenweise (unter 8 Stunden/Tag) oder tageweise genutzt werden.",
        costs: [
          "Bis zu 1.612€ pro Kalenderjahr",
          "PLUS: bis zu 806€ aus ungenutzter Kurzzeitpflege",
          "Das sind bis zu 2.418€ insgesamt!",
          "Bei stundenweiser Verhinderungspflege: kein Abzug vom Pflegegeld",
          "Voraussetzung: 6 Monate Vorpflegezeit"
        ],
        faqs: [
          {
            question: "Was ist der Unterschied zur Kurzzeitpflege?",
            answer: "Verhinderungspflege findet zu Hause statt, Kurzzeitpflege in einer Pflegeeinrichtung. Das Gute: Sie können bis zu 50% des Kurzzeitpflege-Budgets (806€) für Verhinderungspflege umwidmen – das ergibt bis zu 2.418€!"
          },
          {
            question: "Kann ich Verhinderungspflege stundenweise nutzen?",
            answer: "Ja! Bei stundenweiser Verhinderungspflege (unter 8 Stunden täglich) wird das Pflegegeld nicht gekürzt und die Tage werden nicht auf die 42 Tage/Jahr angerechnet. Ideal für regelmäßige kurze Auszeiten."
          },
          {
            question: "Muss mein Angehöriger wirklich 6 Monate gepflegt haben?",
            answer: "Ja, die Vorpflegezeit von 6 Monaten ist Voraussetzung. Sie beginnt ab Feststellung des Pflegegrades. Erst danach kann Verhinderungspflege beantragt werden."
          }
        ]
      }
    },
    {
      title: "Hauswirtschaftliche Hilfe",
      description: "Wir unterstützen Sie bei der Bewältigung Ihres Haushalts, damit Sie sich in Ihren eigenen vier Wänden rundum wohlfühlen können.",
      icon: "🧹",
      features: ["Reinigen der Wohnung", "Wäschepflege & Bügeln", "Einkaufsservice", "Zubereitung von Mahlzeiten"],
      details: {
        whatIs: "Hauswirtschaftliche Versorgung umfasst alle Tätigkeiten im Haushalt, die Sie nicht mehr selbst erledigen können: Wohnung reinigen, Wäsche waschen, Betten beziehen, Einkaufen, Mahlzeiten zubereiten, Geschirr spülen, Müll entsorgen und vieles mehr. So können Sie sicher und komfortabel in Ihrem eigenen Zuhause leben.",
        forWhom: "Für alle Menschen, die bei der Haushaltsführung Unterstützung benötigen – ob mit oder ohne Pflegegrad. Besonders hilfreich für Senioren, Menschen mit körperlichen Einschränkungen oder nach Operationen und Krankenhausaufenthalten.",
        costs: [
          "Finanzierung über den Entlastungsbetrag (125€/Monat) möglich",
          "Bei Pflegegrad 2-5: auch über Pflegesachleistungen",
          "Teilweise über Krankenkasse nach Krankenhausaufenthalt",
          "Auch als Privatleistung buchbar"
        ],
        faqs: [
          {
            question: "Gehört Fensterputzen zur hauswirtschaftlichen Versorgung?",
            answer: "Grundsätzlich ja, aber die Pflegekasse übernimmt meist nur die Basisreinigung. Aufwendige Tätigkeiten wie Fensterputzen, Gardinenaufhängen oder Grundreinigungen können als Privatleistung hinzugebucht werden."
          },
          {
            question: "Wie oft kommt jemand für den Haushalt?",
            answer: "Das bestimmen Sie! Von einmal wöchentlich bis täglich – je nach Bedarf und Budget. Wir erstellen gemeinsam einen Plan, der zu Ihrem Leben passt."
          },
          {
            question: "Kann ich Hauswirtschaft auch ohne Pflegegrad bekommen?",
            answer: "Ja! Auch ohne Pflegegrad können Sie hauswirtschaftliche Hilfe als Privatleistung buchen. Nach einem Krankenhausaufenthalt zahlt oft auch die Krankenkasse (Haushaltshilfe nach § 38 SGB V)."
          }
        ]
      }
    },
    {
      title: "Vermittlung",
      description: "Wir vermitteln Ihnen zuverlässige Zusatzleistungen für Ihren Alltag – alles aus einer Hand für Ihre Sicherheit und Bequemlichkeit.",
      icon: "⭐",
      features: ["Essen auf Rädern", "Hausnotruf-Systeme", "Fahrdienste", "Hilfsmittelversorgung"],
      details: {
        whatIs: "Als Ihr Pflegedienst kümmern wir uns nicht nur um die direkte Pflege, sondern vermitteln Ihnen auch wichtige Zusatzleistungen: Hausnotruf für Ihre Sicherheit, Essen auf Rädern für warme Mahlzeiten, Fahrdienste für Arztbesuche und Hilfsmittel wie Pflegebetten, Rollstühle oder Toilettenstühle. Alles aus einer Hand!",
        forWhom: "Für alle Pflegebedürftigen und Senioren, die ihr Leben zu Hause sicherer und komfortabler gestalten möchten. Besonders wichtig für Alleinlebende (Hausnotruf!) und Menschen mit eingeschränkter Mobilität.",
        costs: [
          "Hausnotruf: Pflegekasse zahlt ab Pflegegrad 1 (ca. 25€/Monat)",
          "Essen auf Rädern: ab ca. 6-8€ pro Mahlzeit (teils steuerlich absetzbar)",
          "Hilfsmittel: meist über Rezept von der Krankenkasse",
          "Fahrdienste: bei med. Notwendigkeit über Krankenkasse"
        ],
        faqs: [
          {
            question: "Übernimmt die Pflegekasse den Hausnotruf?",
            answer: "Ja! Ab Pflegegrad 1 bezuschusst die Pflegekasse den Hausnotruf mit bis zu 25,50€/Monat. Bei vielen Anbietern ist das Basispaket damit komplett abgedeckt. Wir helfen bei der Antragstellung."
          },
          {
            question: "Wie funktioniert die Hilfsmittelversorgung?",
            answer: "Ihr Arzt stellt ein Rezept aus, dann übernimmt in der Regel die Krankenkasse die Kosten. Wir koordinieren mit Sanitätshäusern und kümmern uns darum, dass Sie schnell versorgt werden – vom Pflegebett bis zum Rollator."
          },
          {
            question: "Muss ich mich selbst um alles kümmern?",
            answer: "Nein! Das ist ja der Vorteil: Wir koordinieren alles für Sie. Sie sagen uns, was Sie brauchen, und wir kümmern uns um Anbieter, Anträge und Termine. Sie haben einen Ansprechpartner für alles."
          }
        ]
      }
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
              details={service.details}
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
              { title: "Bezugspflege", desc: "Wir achten auf Kontinuität. Sie haben feste Ansprechpartner, die Sie und Ihre Gewohnheiten kennen." },
              { title: "Individuelle Planung", desc: "Keine Stoppuhr-Pflege. Wir nehmen uns Zeit und passen die Einsätze flexibel an Ihren Bedarf an." },
              { title: "Zertifizierte Fachkräfte", desc: "Unser Team besteht ausschließlich aus examinierten Pflegekräften und geschulten Assistenten." }
            ].map((usp, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
                <div className="w-12 h-12 bg-brand/5 rounded-full flex items-center justify-center text-brand mx-auto mb-6">
                  <ICONS.Check className="w-6 h-6" />
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
          <div className="flex gap-8 group">
            <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">1</div>
            <div>
              <h4 className="text-xl font-bold text-brand mb-2">Erstkontakt</h4>
              <p className="text-gray-600 leading-relaxed">
                Rufen Sie uns unverbindlich an oder schreiben Sie uns eine E-Mail. In einem kurzen Telefonat klären wir Ihre erste Situation und vereinbaren einen zeitnahen Termin.
              </p>
            </div>
          </div>
          <div className="flex gap-8 group">
            <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">2</div>
            <div>
              <h4 className="text-xl font-bold text-brand mb-2">Persönliche Beratung & Bedarfsermittlung</h4>
              <p className="text-gray-600 leading-relaxed">
                Wir besuchen Sie kostenlos zu Hause. Gemeinsam mit Ihnen und Ihren Angehörigen ermitteln wir den konkreten Hilfebedarf und erstellen eine individuelle Pflegeplanung.
              </p>
            </div>
          </div>
          <div className="flex gap-8 group">
            <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">3</div>
            <div>
              <h4 className="text-xl font-bold text-brand mb-2">Beginn der Versorgung</h4>
              <p className="text-gray-600 leading-relaxed">
                Nach Klärung der Kostenübernahme durch die Pflegekasse oder das Sozialamt starten wir mit der vereinbarten Unterstützung. Wir sind ab dann verlässlich für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-20 text-center text-white mx-4 rounded-[4rem] mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Sie haben Fragen zur Finanzierung oder zum Pflegegrad?</h3>
          <p className="text-brand-accent/80 text-lg mb-10">Wir beraten Sie kompetent und helfen Ihnen bei den nötigen Anträgen.</p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="inline-flex items-center gap-4 bg-white text-brand px-12 py-6 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-transform"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
