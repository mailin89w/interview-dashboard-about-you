// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Senior Technical Business Analyst<br>Campaign Engine · ABOUT YOU",
      role: "Senior Technical BA, Campaign Engine",
      location: "Hamburg / Berlin · hybrid",
      interviewDate: "11. August 2026",
      salaryAd: "70.000–85.000 €",
      salaryAsk: "78.000 €",
      salaryMin: "~75.000 €",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde mehr als zehn Jahre technische Umsetzung im E-Commerce mit der Fähigkeit, <mark>Anforderungen zu klären</mark>, Abhängigkeiten früh sichtbar zu machen und unterschiedliche Beteiligte zu einer umsetzbaren Lösung zu führen.'
    },
    en: {
      roleSubtitle: "Senior Technical Business Analyst<br>Campaign Engine · ABOUT YOU",
      role: "Senior Technical BA, Campaign Engine",
      location: "Hamburg / Berlin · hybrid",
      interviewDate: "August 11, 2026",
      salaryAd: "€70,000–85,000",
      salaryAsk: "€78,000",
      salaryMin: "~€75,000",
      introTitle: "Interview Prep",
      introText: 'I combine more than ten years of hands-on technical delivery in e-commerce with the ability to <mark>clarify requirements</mark>, surface dependencies early, and bring different stakeholders together on a workable solution.'
    }
  };

  var TITLES = {
      1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
      2: {de:"Elevator Pitch", en:"Elevator Pitch"},
      3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
      4: {de:"ABOUT YOU Geschäftsmodell", en:"ABOUT YOU Business Model"},
      5: {de:"STAR-Antworten", en:"STAR Answers"},
      6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
      7: {de:"Retail-Media-Grundbegriffe", en:"Retail Media Basics"},
      8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
      9: {de:"Mentale Checkliste", en:"Mental Checklist"}
    };
  
    var CONTENT = { de: {}, en: {} };
  
    CONTENT.de[1] = '<div class="lead">Ich verbinde mehr als zehn Jahre technische Umsetzung im E-Commerce mit der Fähigkeit, Anforderungen zu klären, Abhängigkeiten früh sichtbar zu machen und <mark>unterschiedliche Beteiligte zu einer umsetzbaren Lösung zu führen</mark>.</div>' +
      '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was ABOUT YOU mit mir gewinnt</p>' +
      '<ul class="tight">' +
      '<li><b>Realistische technische Konzepte:</b> Frontend, Plattformen und typische Frontend-/Backend-Abhängigkeiten aus der Praxis.</li>' +
      '<li><b>Verlässliche Projektsteuerung:</b> Ziele, Entscheidungen, offene Punkte und nächste Schritte so strukturieren, dass Teams arbeitsfähig bleiben.</li>' +
      '<li><b>Verständliche Verbindung zwischen den Beteiligten:</b> Fachlich mit Devs sprechen, technische Zusammenhänge für Kunden und Fachabteilungen nachvollziehbar machen.</li>' +
      '<li><b>E-Commerce- und Kampagnenerfahrung:</b> Shopify, Shopware, Spryker, WordPress; Website-, Relaunch- und Promotion-Projekte.</li>' +
      '<li><b>Ehrliche Lernfähigkeit:</b> Retail Media und Kennzahlen sind neu — das Muster (Anforderungen verstehen, technisch einordnen, Teams koordinieren) ist langjährig erprobt.</li>' +
      '</ul>';
  
    CONTENT.en[1] = '<div class="lead">I combine more than ten years of hands-on technical delivery in e-commerce with the ability to clarify requirements, surface dependencies early, and <mark>bring different stakeholders together on a workable solution</mark>.</div>' +
      '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What ABOUT YOU gains from me</p>' +
      '<ul class="tight">' +
      '<li><b>Realistic technical concepts:</b> frontend, platforms, and typical frontend/backend dependencies from hands-on practice.</li>' +
      '<li><b>Reliable project steering:</b> I structure goals, decisions, open questions, and next steps so teams stay able to work.</li>' +
      '<li><b>A clear bridge between stakeholders:</b> I can talk shop with developers and make technical context understandable for clients and business teams.</li>' +
      '<li><b>E-commerce and campaign experience:</b> Shopify, Shopware, Spryker, WordPress, plus recurring website, relaunch, and promotion projects.</li>' +
      '<li><b>Honest about the learning curve:</b> retail media and its metrics are new to me — the underlying pattern (understand requirements, translate them technically, coordinate teams) is something I\'ve practiced for years.</li>' +
      '</ul>';
  
    CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
        '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
        '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
         '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre lang Websites, Onlineshops und Relaunches umgesetzt – unter anderem im Umfeld von Unilever, ALDI Süd, Möbel Martin und verschiedenen E-Commerce-Unternehmen. Mit der Zeit habe ich immer mehr Aufgaben übernommen, die über die reine Entwicklung hinausgingen. Ich habe Anforderungen mit Kunden und Designern geklärt, technische Abhängigkeiten mit Frontend und Backend abgestimmt und Projekte von der ersten Einschätzung über die Umsetzung und Qualitätssicherung bis zum Release begleitet.</p>' +
         '<p>Dabei habe ich gemerkt, dass meine besondere Stärke an den Schnittstellen liegt. Ich verstehe die technische Seite, kann mit Devs auf Augenhöhe sprechen und komplexe Zusammenhänge gleichzeitig so erklären, dass auch Menschen ohne technischen Hintergrund fundierte Entscheidungen treffen können. Mein Team hat mich einmal als <mark>„Social Glue“</mark> bezeichnet. Das passt gut: Ich bringe die richtigen Menschen zusammen, frage nach, wenn etwas noch nicht klar ist, und sorge dafür, dass Entscheidungen, Zuständigkeiten und nächste Schritte nachvollziehbar bleiben.</p>' +
         '<p>Meine Weiterbildung im AI Project Management ergänzt diese praktische Erfahrung um Projektplanung, Anforderungsmanagement, agile Methoden und Change Management. Aus der Anzeige lese ich heraus: Sie suchen jemanden, der Anforderungen nicht nur dokumentiert, sondern technisch einordnet und mit mehreren Dev-Teams bis zum Roll-out begleitet — <mark>und genau das bringe ich mit.</mark></p>' +
       '</div>' +
       '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
         '<p>Ich komme aus der Frontend-Entwicklung und habe mehr als zehn Jahre Erfahrung mit E-Commerce-, Website- und Relaunch-Projekten. Mein Schwerpunkt hat sich dabei immer stärker zur Schnittstelle zwischen Kunden, Design und Entwicklung verschoben. Ich kläre Anforderungen, mache technische Abhängigkeiten sichtbar und sorge für verständliche Entscheidungen. Diese Erfahrung habe ich durch meine Weiterbildung im AI Project Management gezielt ergänzt. Für ABOUT YOU bringe ich damit <mark>technische Tiefe, Struktur und eine sehr verbindende Arbeitsweise</mark> zusammen.</p>' +
       '</div>' +
       '<p style="font-size:11px;color:var(--muted);margin-top:10px;"><b style="color:var(--muted);">Sprechhinweis:</b> nicht auswendig aufsagen — 3 Haltepunkte: Woher komme ich? · Was hat sich entwickelt? · Warum bin ich für diese Rolle wertvoll?</p>';
  
    CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
        '<button class="mtab active" data-tab="haupt">Main version (60–90 sec.)</button>' +
        '<button class="mtab" data-tab="kurz">Short version (30 sec.)</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
         '<p>I originally come from frontend development and spent more than ten years building websites, online shops, and relaunches — including work in the Unilever, ALDI Süd, Möbel Martin, and various e-commerce environments. Over time I took on more and more responsibilities beyond pure development. I clarified requirements with clients and designers, aligned technical dependencies with frontend and backend, and guided projects from initial scoping through implementation, QA, and release.</p>' +
         '<p>Along the way I realized my particular strength sits at the interfaces. I understand the technical side, can talk to developers as a peer, and at the same time explain complex relationships clearly enough that people without a technical background can make sound decisions. My team once called me <mark>"Social Glue."</mark> That fits: I bring the right people together, ask questions when something isn\'t clear yet, and make sure decisions, ownership, and next steps stay traceable.</p>' +
         '<p>My further training in AI Project Management adds project planning, requirements management, agile methods, and change management to this hands-on experience. From the job posting, I read that you\'re looking for someone who doesn\'t just document requirements but places them in technical context and guides them with multiple dev teams through to rollout — <mark>and that\'s exactly what I bring.</mark></p>' +
       '</div>' +
       '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
         '<p>I come from frontend development and have more than ten years of experience with e-commerce, website, and relaunch projects. Over time my focus shifted more and more toward the interface between clients, design, and development. I clarify requirements, surface technical dependencies, and make sure decisions are understandable. I\'ve deliberately built on this experience through my training in AI Project Management. For ABOUT YOU, that means I bring <mark>technical depth, structure, and a strongly connective way of working</mark>.</p>' +
       '</div>' +
       '<p style="font-size:11px;color:var(--muted);margin-top:10px;"><b style="color:var(--muted);">Delivery note:</b> don\'t recite from memory — 3 anchor points: Where do I come from? · What has evolved? · Why am I valuable for this role?</p>';
  
    CONTENT.de[3] = '<div class="mtabs" data-group="sw">' +
        '<button class="mtab active" data-tab="staerken">Stärken</button>' +
        '<button class="mtab" data-tab="locker">Schwächen · locker</button>' +
        '<button class="mtab" data-tab="fachlich">Schwächen · fachlich</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="staerken" data-group="sw"><div class="card3">' +
         '<div class="c"><div class="t">Übersetzen statt weiterleiten</div><div class="b"><b>Beispiel:</b> P&amp;F — Anforderungen mit Kunden, Design, Frontend, Backend, externen Partnern geklärt. <b>Nutzen:</b> umsetzbare Pakete, gemeinsames Verständnis.</div></div>' +
         '<div class="c"><div class="t">Technische Risiken früh erkennen</div><div class="b"><b>Beispiel:</b> Shopify, Shopware, Spryker; Frontend-/Backend-Abhängigkeiten &amp; Plattformgrenzen. <b>Nutzen:</b> Alternativen entscheidbar machen.</div></div>' +
         '<div class="c"><div class="t">Überblick behalten, wenn vieles gleichzeitig läuft</div><div class="b"><b>Beispiel:</b> Bei deepblue liefen zeitgleich 10+ Unilever-Marken mit eigenen Websites, Relaunches und Promotions. Ich habe festgehalten, was offen ist, wer was entscheidet und was wovon abhängt. <b>Nutzen:</b> Alle arbeiten mit demselben Stand, nichts geht unter.</div></div>' +
       '</div></div>' +
       '<div class="mtabpanel" data-panel="locker" data-group="sw">' +
         '<p style="font-size:11.5px;color:var(--muted);margin-bottom:8px;">Erste Wahl auf „Was ist Ihre größte Schwäche?“ — locker, echt, unproblematisch.</p>' +
         '<div class="card3">' +
         '<div class="c"><div class="t">1 · Direktheit</div><div class="b">Klar ansprechen, dabei bewusst auf Kontext und Ton achten.</div></div>' +
         '<div class="c"><div class="t">2 · Trockener Humor</div><div class="b">Im vertrauten Team verbindend; in neuen Situationen bewusst zurückhaltend.</div></div>' +
         '<div class="c"><div class="t">3 · Kinderschokolade</div><div class="b"><mark>Gefährdet höchstens den Vorrat in der Teeküche.</mark></div></div>' +
       '</div></div>' +
       '<div class="mtabpanel" data-panel="fachlich" data-group="sw">' +
         '<p style="font-size:11.5px;color:var(--muted);margin-bottom:8px;">Falls gezielt nachgefragt — fachlich, positiv gedreht.</p>' +
         '<div class="card3">' +
         '<div class="c"><div class="t">Technisches Mitdenken</div><div class="b">Will bei Technikfragen zu schnell mitlösen; nutze das Wissen für die richtigen Fragen ans Team.</div></div>' +
         '<div class="c"><div class="t">Tempo bei Klärung</div><div class="b">Dränge früh auf Klarheit bei vagen Briefings; gebe Stakeholdern bewusst Raum davor.</div></div>' +
         '<div class="c"><div class="t">Retail Media neu</div><div class="b">Neues Fachgebiet; E-Commerce-, Kampagnen- und Plattformverständnis sind vorhanden.</div></div>' +
       '</div></div>';
  
    CONTENT.en[3] = '<div class="mtabs" data-group="sw">' +
        '<button class="mtab active" data-tab="staerken">Strengths</button>' +
        '<button class="mtab" data-tab="locker">Weaknesses · casual</button>' +
        '<button class="mtab" data-tab="fachlich">Weaknesses · professional</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="staerken" data-group="sw"><div class="card3">' +
         '<div class="c"><div class="t">Translating, not just forwarding</div><div class="b"><b>Example:</b> P&amp;F — clarified requirements with clients, design, frontend, backend, external partners. <b>Benefit:</b> workable packages, shared understanding.</div></div>' +
         '<div class="c"><div class="t">Spotting technical risk early</div><div class="b"><b>Example:</b> Shopify, Shopware, Spryker; frontend/backend dependencies &amp; platform limits. <b>Benefit:</b> makes trade-offs clear enough to decide on.</div></div>' +
         '<div class="c"><div class="t">Keeping the overview when a lot runs in parallel</div><div class="b"><b>Example:</b> At deepblue, 10+ Unilever brands ran at the same time, each with its own websites, relaunches, and promotions. I kept track of what was open, who decided what, and what depended on what. <b>Benefit:</b> everyone works from the same status, nothing falls through the cracks.</div></div>' +
       '</div></div>' +
       '<div class="mtabpanel" data-panel="locker" data-group="sw">' +
         '<p style="font-size:11.5px;color:var(--muted);margin-bottom:8px;">First choice for "What\'s your biggest weakness?" — light, honest, unproblematic.</p>' +
         '<div class="card3">' +
         '<div class="c"><div class="t">1 · Directness</div><div class="b">I say things clearly, while staying deliberate about context and tone.</div></div>' +
         '<div class="c"><div class="t">2 · Dry humor</div><div class="b">Bonding within a familiar team; I hold back deliberately in new settings.</div></div>' +
         '<div class="c"><div class="t">3 · Kinder chocolate</div><div class="b"><mark>At most a threat to the office snack supply.</mark></div></div>' +
       '</div></div>' +
       '<div class="mtabpanel" data-panel="fachlich" data-group="sw">' +
         '<p style="font-size:11.5px;color:var(--muted);margin-bottom:8px;">If specifically asked — professional angle, framed positively.</p>' +
         '<div class="card3">' +
         '<div class="c"><div class="t">Technical over-involvement</div><div class="b">I tend to want to jump in on technical questions myself; I now channel that into asking the team the right questions.</div></div>' +
         '<div class="c"><div class="t">Pace in clarifying requirements</div><div class="b">I push early for clarity on vague briefs; I deliberately give stakeholders room to clarify first.</div></div>' +
         '<div class="c"><div class="t">Retail media is new</div><div class="b">A subject area I haven\'t worked in before; my e-commerce, campaign, and platform understanding carries over.</div></div>' +
       '</div></div>';
  
    CONTENT.de[4] = '<p>ABOUT YOU verbindet mehrere Geschäftsbereiche:</p>' +
       '<ul class="tight">' +
       '<li>Eine personalisierte Fashion- und Lifestyle-Plattform für Endkundinnen und Endkunden</li>' +
       '<li>Marketplace-, Wholesale- und Retail-Media-Angebote für Markenpartner</li>' +
       '<li>Die selbst entwickelte Commerce-Infrastruktur <mark>SCAYLE</mark>, auch für externe Marken und Händler eingesetzt</li>' +
       '</ul>' +
       '<p><b>Retail Media</b> bedeutet: Marken können bezahlte Sichtbarkeit und Kampagnen innerhalb der Plattform nutzen — Sponsored Products, Sponsored Content, Sponsored Coupons, Sponsored Missions.</p>' +
       '<div class="lead">Nicht eine klassische Modefirma mit angeschlossener IT, sondern eine <mark>technologiegetriebene E-Commerce-Organisation</mark> — Technologie und Daten sind Kern von Produkt, Strategie und Wachstum.</div>';
  
    CONTENT.en[4] = '<p>ABOUT YOU combines several business areas:</p>' +
       '<ul class="tight">' +
       '<li>A personalized fashion and lifestyle platform for consumers</li>' +
       '<li>Marketplace, wholesale, and retail media offerings for brand partners</li>' +
       '<li>Its own commerce infrastructure, <mark>SCAYLE</mark>, also used by external brands and retailers</li>' +
       '</ul>' +
       '<p><b>Retail media</b> means brands can buy paid visibility and campaigns within the platform — Sponsored Products, Sponsored Content, Sponsored Coupons, Sponsored Missions.</p>' +
       '<div class="lead">Not a classic fashion company with an IT department attached, but a <mark>technology-driven e-commerce organization</mark> — technology and data are described as core to product, strategy, and growth.</div>';
  
    CONTENT.de[5] = '<div class="macc"><button class="macc-head">1 · Fachliche Anforderung passt nicht zur Technik <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Kernaussage:</b> <mark>Ich sage nicht nur, dass etwas schwierig ist. Ich kläre das Ziel, prüfe die Abhängigkeiten und mache Alternativen entscheidbar.</mark></div>' +
        '<div class="row"><b>Situation:</b> Bei deepblue wurden Websites, Relaunches und Promotion-Projekte für mehr als zehn Unilever-DACH-Marken auf modularen, wiederverwendbaren Plattformstrukturen umgesetzt. Markenspezifische Wünsche mussten deshalb immer auch im Kontext der gemeinsamen technischen Basis betrachtet werden.</div>' +
        '<div class="row"><b>Aufgabe:</b> Die Kampagnenanforderung musste in eine technisch konsistente Lösung übersetzt werden, ohne die Wiederverwendbarkeit und Konsistenz der Plattform aus dem Blick zu verlieren.</div>' +
        '<div class="row"><b>Aktion:</b> Ich habe die Anforderung mit Projektmanagement, Kreation, Entwicklung und gegebenenfalls externen Beteiligten geklärt, technische Abhängigkeiten sichtbar gemacht und einen umsetzbaren Weg abgestimmt. Statt eines pauschalen „geht nicht“ wurden Lösungswege und ihre Folgen verständlich gegenübergestellt.</div>' +
        '<div class="row"><b>Ergebnis:</b> Die Anforderungen konnten in die modulare Plattformlogik eingeordnet und Releases über mehrere Marken hinweg konsistent begleitet werden.</div>' +
        '<div class="erg">Vor dem Gespräch ergänzen: eine konkrete Marke oder Promotion, der ursprüngliche Wunsch und die tatsächlich gewählte Alternative.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">2 · Unklare oder unvollständige Anforderungen <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Kernaussage:</b> <mark>Ich mache Annahmen sichtbar, bevor sie zu Entwicklungsproblemen werden.</mark></div>' +
        '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Briefings für E-Commerce-, Website- und Relaunch-Projekte aus Kunden- und Designsicht. Technische Voraussetzungen, Systemgrenzen oder Abhängigkeiten waren darin nicht immer vollständig beschrieben.</div>' +
        '<div class="row"><b>Aufgabe:</b> Aus dem Briefing musste eine Arbeitsgrundlage entstehen, mit der Frontend, Backend und weitere Beteiligte verlässlich weiterarbeiten konnten.</div>' +
        '<div class="row"><b>Aktion:</b> Ich habe Ziel, Nutzerwirkung und Muss-Anforderungen geklärt, offene Punkte und Annahmen dokumentiert und technische Fragen mit den zuständigen Beteiligten abgestimmt. Erst danach wurden daraus konkrete Umsetzungspakete und nächste Schritte.</div>' +
        '<div class="row"><b>Ergebnis:</b> Unterschiedliche Beteiligte arbeiteten auf Basis eines gemeinsamen Verständnisses; offene Entscheidungen und Abhängigkeiten waren vor der Umsetzung sichtbar.</div>' +
        '<div class="erg">Vor dem Gespräch ergänzen: ein konkretes Briefing und zwei Fragen, die ich gestellt habe.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">3 · Priorisierung: Großprojekte vs. Tagesgeschäft <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<p style="font-size:11px;color:var(--muted);margin-bottom:8px;">Auch bei: „Es gibt mehr Aufgaben als Zeit — wie gehen Sie vor?“</p>' +
        '<div class="kern"><b>Priorisierungsprinzip:</b> <mark>Ich sortiere zuerst nach dem, was andere blockiert oder eine harte Deadline hat, danach nach Wirkung.</mark> Alles andere wird nicht stillschweigend liegen gelassen, sondern aktiv verschoben und kommuniziert.</div>' +
        '<div class="row"><b>Situation:</b> Bei deepblue liefen große (Re-)Launches parallel zum Tagesgeschäft — Newsletter &amp; Promotion-Sites mit eigenen, oft kurzfristigen Terminen.</div>' +
        '<div class="row"><b>Aufgabe:</b> Beides musste termingerecht laufen, ohne dass eins das andere verdrängt.</div>' +
        '<div class="row"><b>Aktion:</b> Ich habe Prioritäten nach Dringlichkeit gesetzt, vorausschauend geplant und meine Kapazität bewusst aufgeteilt.</div>' +
        '<div class="row"><b>Ergebnis:</b> (Re-)Launches und Tagesgeschäft liefen beide termingerecht, ohne dass eines zu kurz kam.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">4 · Neue Standards im laufenden Projekt <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Kernaussage:</b> <mark>Veränderungen werden greifbar, wenn sie an der echten Arbeit erklärt und schrittweise eingeführt werden.</mark></div>' +
        '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends habe ich Onboarding und Mentoring übernommen und wartbare Komponenten- und Qualitätsstandards vermittelt, während Projekte weiterliefen.</div>' +
        '<div class="row"><b>Aufgabe:</b> Neue Kolleginnen und Kollegen sowie bestehende Projektteams brauchten verständliche Strukturen, ohne dass die laufende Arbeit von einer rein theoretischen Prozessdiskussion verdrängt wurde.</div>' +
        '<div class="row"><b>Aktion:</b> Ich habe Standards an konkreten Projektbeispielen erklärt, Entscheidungen dokumentiert und Kolleginnen und Kollegen direkt bei der Anwendung begleitet.</div>' +
        '<div class="row"><b>Ergebnis:</b> Projektstrukturen und wartbare Qualitätsstandards standen als gemeinsame Orientierung für Onboarding und Umsetzung zur Verfügung.</div>' +
        '<div class="erg">Vor dem Gespräch ergänzen: welcher Standard konkret eingeführt wurde und woran ich gemerkt habe, dass er angenommen wurde.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">5 · Komplexes Projekt mit Abhängigkeiten <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Kernaussage:</b> <mark>Ich zerlege Komplexität in Entscheidungen, Abhängigkeiten, Verantwortlichkeiten und prüfbare Zwischenergebnisse.</mark></div>' +
        '<div class="row"><b>Situation:</b> Für Möbel Martin habe ich über mehrere Projektphasen hinweg an komplexer Frontend-Delivery, Anforderungsabstimmung und Qualitätssicherung gearbeitet.</div>' +
        '<div class="row"><b>Aufgabe:</b> Design, Frontend, Backend und Kundenseite mussten über mehrere Phasen hinweg anschlussfähig zusammenarbeiten.</div>' +
        '<div class="row"><b>Aktion:</b> Ich habe technische Anforderungen und offene Punkte strukturiert, Abhängigkeiten mit den Beteiligten abgestimmt und die Umsetzung durch Reviews und Qualitätssicherung begleitet.</div>' +
        '<div class="row"><b>Ergebnis:</b> Anforderungen und Qualitätsfragen blieben über die Projektphasen hinweg nachvollziehbar und konnten in der weiteren Umsetzung aufgegriffen werden.</div>' +
        '<div class="erg">Vor dem Gespräch ergänzen: ein konkreter Meilenstein, ein aufgetretenes Risiko und das tatsächliche Release-Ergebnis.</div>' +
        '</div></div></div>' +
        '<p style="font-size:10.8px;color:var(--warn);margin-top:10px;">⚠ Keine pünktlichen Releases oder messbaren Verbesserungen behaupten, die ich nicht konkret belegen kann.</p>';
  
    CONTENT.en[5] = '<div class="macc"><button class="macc-head">1 · Business requirement doesn\'t match what\'s technically feasible <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Core message:</b> <mark>I don\'t just say something is difficult. I clarify the goal, check the dependencies, and lay out alternatives clearly enough to decide between them.</mark></div>' +
        '<div class="row"><b>Situation:</b> At deepblue, websites, relaunches, and promotional campaigns were built for more than ten Unilever DACH brands on modular, reusable platform structures. Brand-specific requests always had to be considered in the context of that shared technical foundation.</div>' +
        '<div class="row"><b>Task:</b> The campaign requirement had to be translated into a technically consistent solution without losing sight of the platform\'s reusability and consistency.</div>' +
        '<div class="row"><b>Action:</b> I clarified the requirement with project management, creative, development, and where relevant external partners, made technical dependencies visible, and agreed on a workable path. Instead of a blanket "can\'t be done," I laid out the possible solutions and their consequences in an understandable way.</div>' +
        '<div class="row"><b>Result:</b> The requirements were worked into the modular platform logic, and releases stayed consistent across multiple brands.</div>' +
        '<div class="erg">Add before the interview: a specific brand or promotion, the original request, and the alternative actually chosen.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">2 · Unclear or incomplete requirements <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Core message:</b> <mark>I make assumptions visible before they turn into development problems.</mark></div>' +
        '<div class="row"><b>Situation:</b> At P&amp;F, briefs for e-commerce, website, and relaunch projects came from a client and design perspective. Technical prerequisites, system boundaries, or dependencies weren\'t always fully described in them.</div>' +
        '<div class="row"><b>Task:</b> The brief had to become a foundation that frontend, backend, and other stakeholders could reliably build on.</div>' +
        '<div class="row"><b>Action:</b> I clarified the goal, user impact, and must-have requirements, documented open points and assumptions, and aligned technical questions with the relevant stakeholders. Only after that did concrete work packages and next steps emerge.</div>' +
        '<div class="row"><b>Result:</b> Different stakeholders worked from a shared understanding; open decisions and dependencies were visible before implementation began.</div>' +
        '<div class="erg">Add before the interview: a specific brief and two questions I asked.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">3 · Prioritizing: big projects vs. day-to-day work <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<p style="font-size:11px;color:var(--muted);margin-bottom:8px;">Also covers: "There\'s more work than time — how do you handle that?"</p>' +
        '<div class="kern"><b>Prioritization principle:</b> <mark>I sort first by what\'s blocking others or has a hard deadline, then by impact.</mark> Everything else doesn\'t just get quietly dropped — it gets actively rescheduled and communicated.</div>' +
        '<div class="row"><b>Situation:</b> At deepblue, large (re)launches ran parallel to day-to-day business — newsletters and promo sites with their own, often short-notice deadlines.</div>' +
        '<div class="row"><b>Task:</b> Both had to land on time without one crowding out the other.</div>' +
        '<div class="row"><b>Action:</b> I set priorities by urgency, planned ahead, and deliberately split my capacity.</div>' +
        '<div class="row"><b>Result:</b> (Re)launches and day-to-day business both landed on time, without either one falling short.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">4 · Introducing new standards mid-project <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Core message:</b> <mark>Change becomes tangible when it\'s explained through real work and introduced step by step.</mark></div>' +
        '<div class="row"><b>Situation:</b> At P&amp;F, I took on onboarding and mentoring and taught maintainable component and quality standards while projects kept running.</div>' +
        '<div class="row"><b>Task:</b> New colleagues and existing project teams needed understandable structures, without the ongoing work being pushed aside by a purely theoretical process discussion.</div>' +
        '<div class="row"><b>Action:</b> I explained standards using concrete project examples, documented decisions, and supported colleagues directly as they applied them.</div>' +
        '<div class="row"><b>Result:</b> Project structures and maintainable quality standards became a shared point of orientation for onboarding and delivery.</div>' +
        '<div class="erg">Add before the interview: which standard was specifically introduced, and how I could tell it had been adopted.</div>' +
        '</div></div></div>' +
        '<div class="macc"><button class="macc-head">5 · Complex project with dependencies <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner">' +
        '<div class="kern"><b>Core message:</b> <mark>I break complexity down into decisions, dependencies, responsibilities, and checkable intermediate results.</mark></div>' +
        '<div class="row"><b>Situation:</b> For Möbel Martin, I worked across multiple project phases on complex frontend delivery, requirements alignment, and quality assurance.</div>' +
        '<div class="row"><b>Task:</b> Design, frontend, backend, and the client side had to stay connected and work together across multiple phases.</div>' +
        '<div class="row"><b>Action:</b> I structured technical requirements and open points, aligned dependencies with stakeholders, and supported delivery through reviews and quality assurance.</div>' +
        '<div class="row"><b>Result:</b> Requirements and quality questions stayed traceable across the project phases and could be picked up again later in delivery.</div>' +
        '<div class="erg">Add before the interview: a specific milestone, a risk that came up, and the actual release outcome.</div>' +
        '</div></div></div>' +
        '<p style="font-size:10.8px;color:var(--warn);margin-top:10px;">⚠ Don\'t claim on-time releases or measurable improvements I can\'t actually back up.</p>';
  
    CONTENT.de[6] = '<div class="macc"><button class="macc-head">„Bisher keine Technical Business Analystin — warum die Senior-Rolle?“ <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p><mark>Der Titel ist neu, die zugrunde liegende Arbeit nicht.</mark> Ich kläre seit Jahren Anforderungen, bewerte technische Abhängigkeiten, stimme Lösungswege mit unterschiedlichen Beteiligten ab und begleite Umsetzung, QA und Release. Meine Entwicklungserfahrung gibt mir technische Tiefe; die Weiterbildung im AI Project Management ergänzt diese Praxis um formale Methoden. Bei Retail Media muss ich die Domäne lernen — die Brückenfunktion selbst ist mir sehr vertraut.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">„Wie datengetrieben arbeiten Sie?“ <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>Bisher vor allem mit Qualitäts-, Umsetzungs- und technischen Erfolgskriterien gearbeitet. Kommerzielle Retail-Media-Dashboards sind neu. Ansatz bei Kennzahlen: <mark>Was wollen wir beurteilen, wie wird die Kennzahl erzeugt, welche Handlung folgt daraus?</mark> Die relevanten Kennzahlen würde ich mir im Produktkontext systematisch erschließen.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">„Haben Sie Budgetverantwortung?“ <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>Bislang vor allem Aufwand, Umsetzbarkeit und Delivery-Risiken aus technischer Sicht bewertet. Eine formale End-to-End-Budgetverantwortung war nicht Schwerpunkt meiner bisherigen Rolle. Ich kenne aber die Entscheidungen, die Aufwand und Budget wesentlich beeinflussen, und <mark>möchte diese Verantwortung weiter ausbauen</mark>.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">„Warum möchten Sie nicht mehr entwickeln?“ <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p><mark>Ich wende mich nicht von Technik ab</mark> — ich setze mein technisches Wissen an einer anderen Stelle ein. Meine größte Wirkung hatte ich zunehmend dort, wo Anforderungen noch unklar waren, mehrere Gewerke zusammenkommen oder technische Entscheidungen verständlich gemacht werden mussten. Darauf möchte ich meinen Schwerpunkt legen.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">„Warum ABOUT YOU?“ <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>Mich reizt, dass die Rolle nicht bei der Dokumentation einer Anforderung endet — sie verbindet fachliche Klärung, technische Konzeption, Koordination mehrerer Dev-Teams, Testing und Roll-out. Dazu ein E-Commerce-Umfeld, in dem <mark>Technologie tatsächlich Teil des Geschäftsmodells ist</mark>. Passt sehr gut zu meiner Erfahrung und der Art, wie ich arbeiten möchte.</p></div></div></div>';
  
    CONTENT.en[6] = '<div class="macc"><button class="macc-head">"You haven\'t been a Technical Business Analyst before — why do you think you\'re ready for a senior role?" <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p><mark>The title is new, the underlying work isn\'t.</mark> I\'ve clarified requirements, assessed technical dependencies, aligned solution paths with different stakeholders, and supported implementation, QA, and release for years. My development background gives me technical depth; my AI Project Management training adds the formal methods on top. I\'ll need to learn the retail media domain — the bridging role itself is very familiar to me.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">"How data-driven is your way of working?" <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>So far I\'ve mostly worked with quality, delivery, and technical success criteria. Commercial retail media dashboards are new to me. My approach to metrics: <mark>what decision should this support, how is the metric generated, and what action follows from it?</mark> I\'d work through the relevant metrics systematically within the product context.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">"Do you have budget responsibility?" <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>So far I\'ve mainly assessed effort, feasibility, and delivery risk from a technical angle. Formal end-to-end budget ownership hasn\'t been the focus of my role so far. That said, I understand the decisions that materially affect effort and budget, and <mark>I\'d like to grow into more of that responsibility</mark>.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">"Why don\'t you want to keep developing?" <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p><mark>I\'m not turning away from technology</mark> — I\'m applying my technical knowledge somewhere else. My biggest impact increasingly came where requirements were still unclear, where multiple disciplines had to come together, or where technical decisions needed to be made understandable. That\'s where I want to focus.</p></div></div></div>' +
        '<div class="macc"><button class="macc-head">"Why ABOUT YOU?" <span class="chev">▾</span></button>' +
        '<div class="macc-body"><div class="macc-body-inner"><p>What appeals to me is that the role doesn\'t stop at documenting a requirement — it combines business clarification, technical conception, coordination across multiple dev teams, testing, and rollout. On top of that, an e-commerce environment where <mark>technology is genuinely part of the business model</mark>. This fits very well with my experience and the way I want to work.</p></div></div></div>';
  
    CONTENT.de[7] = '<table class="info">' +
       '<tr><th>Begriff</th><th>Kurz erklärt</th></tr>' +
       '<tr><td class="k">Impressions</td><td>Wie oft eine Anzeige ausgespielt wurde</td></tr>' +
       '<tr><td class="k">CTR</td><td>Anteil der Ausspielungen, die zu einem Klick führen</td></tr>' +
       '<tr><td class="k">Conversion Rate</td><td>Anteil der Klicks/Besuche, die zur gewünschten Aktion führen</td></tr>' +
       '<tr><td class="k">ROAS</td><td>Erzielter Umsatz im Verhältnis zu den Werbeausgaben</td></tr>' +
       '<tr><td class="k">Incremental Sales</td><td>Zusätzliche Verkäufe, die ohne die Kampagne voraussichtlich nicht entstanden wären</td></tr>' +
       '<tr><td class="k">Budget Utilization</td><td>Wie viel des vorgesehenen Kampagnenbudgets tatsächlich genutzt wurde</td></tr>' +
       '</table>' +
       '<p style="font-size:11.5px;color:var(--muted);margin-top:10px;"><mark>Bei jeder Kennzahl: Welche Entscheidung soll sie unterstützen? Woher kommen die Daten? Welche Handlung folgt daraus?</mark></p>';
  
    CONTENT.en[7] = '<table class="info">' +
       '<tr><th>Term</th><th>Quick explanation</th></tr>' +
       '<tr><td class="k">Impressions</td><td>How often an ad was served</td></tr>' +
       '<tr><td class="k">CTR</td><td>Share of impressions that lead to a click</td></tr>' +
       '<tr><td class="k">Conversion Rate</td><td>Share of clicks/visits that lead to the desired action</td></tr>' +
       '<tr><td class="k">ROAS</td><td>Revenue generated relative to ad spend</td></tr>' +
       '<tr><td class="k">Incremental Sales</td><td>Additional sales that likely wouldn\'t have happened without the campaign</td></tr>' +
       '<tr><td class="k">Budget Utilization</td><td>How much of the planned campaign budget was actually used</td></tr>' +
       '</table>' +
       '<p style="font-size:11.5px;color:var(--muted);margin-top:10px;"><mark>For every metric: what decision should it support? Where does the data come from? What action follows from it?</mark></p>';
  
    CONTENT.de[8] = '<div class="mtabs" data-group="fragen">' +
        '<button class="mtab active" data-tab="rolle">Zur Rolle</button>' +
        '<button class="mtab" data-tab="produkt">Zu Produkt &amp; Kennzahlen</button>' +
        '<button class="mtab" data-tab="zusammenarbeit">Zur Zusammenarbeit</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="rolle" data-group="fragen"><ul class="tight">' +
         '<li>Woran würden Sie nach sechs Monaten erkennen, dass die Person in dieser Rolle erfolgreich ist?</li>' +
         '<li>Wo entstehen heute die größten Reibungsverluste zwischen dem Retail-Media-Team und den beteiligten Dev-Teams?</li>' +
         '<li>Wie entsteht bei Ihnen ein technisches Konzept, und wer entscheidet bei Zielkonflikten?</li>' +
         '<li>Wie viel der Rolle ist Anforderungsanalyse, wie viel Projektsteuerung und wie viel operative Abstimmung?</li>' +
       '</ul></div>' +
       '<div class="mtabpanel" data-panel="produkt" data-group="fragen"><ul class="tight">' +
         '<li>Welche Retail-Media-Produkte oder technischen Themen haben aktuell die höchste Priorität?</li>' +
         '<li>Welche Kennzahlen nutzt das Team, um eine neue Funktion nach dem Start zu beurteilen?</li>' +
         '<li>Wie wird die Vorbereitung der Fach- und Vertriebsteams vor einem Launch praktisch abgenommen?</li>' +
       '</ul></div>' +
       '<div class="mtabpanel" data-panel="zusammenarbeit" data-group="fragen"><ul class="tight">' +
         '<li>Wie arbeiten Retail Media, Empfehlungen und Sortierung sowie App und Web im Alltag zusammen?</li>' +
         '<li>Welche festen Formate und Werkzeuge nutzt das Team für Entscheidungen, Dokumentation und Priorisierung?</li>' +
         '<li>Was wäre fachlich das wichtigste Thema, in das ich mich in den ersten Wochen einarbeiten sollte?</li>' +
       '</ul></div>';
  
    CONTENT.en[8] = '<div class="mtabs" data-group="fragen">' +
        '<button class="mtab active" data-tab="rolle">About the role</button>' +
        '<button class="mtab" data-tab="produkt">Product &amp; metrics</button>' +
        '<button class="mtab" data-tab="zusammenarbeit">Collaboration</button>' +
       '</div>' +
       '<div class="mtabpanel active" data-panel="rolle" data-group="fragen"><ul class="tight">' +
         '<li>How would you know, after six months, that this person is succeeding in the role?</li>' +
         '<li>Where does the most friction happen today between the retail media team and the dev teams involved?</li>' +
         '<li>How does a technical concept come together on your side, and who decides when there\'s a conflict of goals?</li>' +
         '<li>How much of the role is requirements analysis, how much is project steering, and how much is day-to-day coordination?</li>' +
       '</ul></div>' +
       '<div class="mtabpanel" data-panel="produkt" data-group="fragen"><ul class="tight">' +
         '<li>Which retail media products or technical topics currently have the highest priority?</li>' +
         '<li>Which metrics does the team use to judge a new feature after launch?</li>' +
         '<li>How is the readiness of the business and sales teams practically signed off before a launch?</li>' +
       '</ul></div>' +
       '<div class="mtabpanel" data-panel="zusammenarbeit" data-group="fragen"><ul class="tight">' +
         '<li>How do retail media, recommendations &amp; sorting, and app &amp; web work together day to day?</li>' +
         '<li>What fixed formats and tools does the team use for decisions, documentation, and prioritization?</li>' +
         '<li>What would be the most important topic for me to get up to speed on in the first few weeks?</li>' +
       '</ul></div>';
  
    CONTENT.de[9] = '<ul class="tight checklist">' +
       '<li>Langsam anfangen.</li>' +
       '<li><mark>Erst die Frage beantworten, dann das Beispiel erzählen.</mark></li>' +
       '<li>Eine kurze Pause vor der Antwort ist erlaubt.</li>' +
       '<li>Ein konkretes Beispiel ist stärker als drei allgemeine Aussagen.</li>' +
       '<li>Keine Begriffe übernehmen, die ich selbst nicht verwenden würde.</li>' +
       '<li>Eine Wissenslücke offen benennen und anschließend den Lernweg erklären.</li>' +
       '<li><mark>Keine Ergebnisse oder Zahlen behaupten, die ich nicht sicher vertreten kann.</mark></li>' +
       '</ul>' +
       '<div class="lead">ABOUT YOU gewinnt mit mir keine klassische Business Analystin aus dem Lehrbuch, sondern eine <mark>technisch erfahrene Übersetzerin mit echter Umsetzungspraxis</mark>.</div>';
  
    CONTENT.en[9] = '<ul class="tight checklist">' +
       '<li>Start slowly.</li>' +
       '<li><mark>Answer the question first, then tell the example.</mark></li>' +
       '<li>A short pause before answering is fine.</li>' +
       '<li>One concrete example beats three general statements.</li>' +
       '<li>Don\'t adopt terms I wouldn\'t use myself.</li>' +
       '<li>Name a knowledge gap openly, then explain how I\'d close it.</li>' +
       '<li><mark>Don\'t claim results or numbers I can\'t confidently stand behind.</mark></li>' +
       '</ul>' +
       '<div class="lead">ABOUT YOU doesn\'t get a textbook business analyst with me, but a <mark>technically experienced translator with real delivery practice</mark>.</div>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · ABOUT YOU · Senior Technical BA",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
