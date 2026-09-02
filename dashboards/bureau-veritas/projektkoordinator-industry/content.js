// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Projektkoordinator Industry<br>Bureau Veritas Industry Services GmbH",
      role: "Projektkoordinator Industry",
      location: "offen",
      interviewDate: "2. September 2026",
      salaryAd: "offen",
      salaryAsk: "offen",
      salaryMin: "offen",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich bringe <mark>Struktur in komplexe Abläufe</mark>, halte Beteiligte auf demselben Stand und erkenne technische Abhängigkeiten früh.'
    },
    en: {
      roleSubtitle: "Project Coordinator Industry<br>Bureau Veritas Industry Services GmbH",
      role: "Project Coordinator Industry",
      location: "TBD",
      interviewDate: "September 2, 2026",
      salaryAd: "TBD",
      salaryAsk: "TBD",
      salaryMin: "TBD",
      introTitle: "Interview Prep",
      introText: 'I bring <mark>structure to complex workflows</mark>, keep everyone aligned on status, and spot technical dependencies early.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"Bureau Veritas – Unternehmen & Rolle", en:"Bureau Veritas – Company & Role"},
    5: {de:"STAR-Kurzreferenz", en:"STAR Quick Reference"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Top-Projekte", en:"Key Projects"},
    8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">„Klarheit für technische Projekte. Verlässliche Koordination für starke Zusammenarbeit.“ — Vom Mediendesign über zehn Jahre Frontend-Entwicklung zur strukturierten Projektsteuerung.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Roter Faden</p>' +
    '<p>Ich bringe <mark>Struktur in komplexe Abläufe</mark>, halte Beteiligte auf demselben Stand und erkenne technische Abhängigkeiten früh.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Schlusssatz</p>' +
    '<p>„Informationen klären. Abläufe nachhalten. Menschen verbinden.“</p>';

  CONTENT.en[1] = '<div class="lead">"Clarity for technical projects. Reliable coordination for strong collaboration." — From media design through ten years of frontend development to structured project steering.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Through-line</p>' +
    '<p>I bring <mark>structure to complex workflows</mark>, keep everyone aligned on status, and spot technical dependencies early.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Closing line</p>' +
    '<p>"Clarify information. Keep processes on track. Connect people."</p>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="lead">Vom Mediendesign über zehn Jahre Frontend-Entwicklung zur strukturierten Projektsteuerung.</div>' +
    '<ul class="tight">' +
    '<li><b>01 · Zehn Jahre Schnittstellenarbeit:</b> deepblue (10+ Unilever-Marken) → Patrick &amp; Friends (Kunden, Design, Backend, Frontend, externe Partner) → AI Project Manager.</li>' +
    '<li><b>02 · Technik verständlich machen:</b> Technische Themen einordnen, gezielt nachfragen, Abhängigkeiten sichtbar machen. Mein Team nannte mich „Social Glue“.</li>' +
    '<li><b>03 · Von Umsetzung zu Koordination:</b> Anforderungen klären, Reviews begleiten, Status transparent halten, Entscheidungen dokumentieren und Wissen weitergeben.</li>' +
    '<li><b>04 · Was Bureau Veritas gewinnt:</b> Technisches Verständnis plus strukturierte Kommunikation. Inspektions- und kaufmännische Prozesse sind neu — die Arbeitsweise nicht.</li>' +
    '</ul>';

  CONTENT.en[2] = '<div class="lead">From media design through ten years of frontend development to structured project steering.</div>' +
    '<ul class="tight">' +
    '<li><b>01 · Ten years at the interface:</b> deepblue (10+ Unilever brands) → Patrick &amp; Friends (clients, design, backend, frontend, external partners) → AI Project Manager.</li>' +
    '<li><b>02 · Making technology understandable:</b> Placing technical topics in context, asking targeted questions, surfacing dependencies. My team called me "social glue."</li>' +
    '<li><b>03 · From delivery to coordination:</b> Clarifying requirements, accompanying reviews, keeping status transparent, documenting decisions, and passing on knowledge.</li>' +
    '<li><b>04 · What Bureau Veritas gains:</b> Technical understanding plus structured communication. Inspection and commercial processes are new — the way of working isn\'t.</li>' +
    '</ul>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Stärken</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">Übersetzen statt weiterleiten</div><div class="b">Beispiel: Patrick &amp; Friends — Anforderungen mit Kunden, Design, Frontend, Backend und Partnern geklärt. Nutzen: gemeinsames Verständnis.</div></div>' +
    '<div class="c"><div class="t">Technische Risiken früh erkennen</div><div class="b">Beispiel: Shopify, Shopware, Spryker; Abhängigkeiten und Plattformgrenzen. Nutzen: Alternativen entscheidbar machen.</div></div>' +
    '<div class="c"><div class="t">Komplexität zusammenhalten</div><div class="b">Beispiel: deepblue — parallele Websites, Relaunches und Promotions für 10+ Marken. Nutzen: Überblick für Beteiligte.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Schwächen / Entwicklungsfelder</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">Technisches Mitdenken</div><div class="b">Will bei Technikfragen schnell mitlösen; nutze das Wissen bewusst für die richtigen Fragen ans Team.</div></div>' +
    '<div class="c"><div class="t">Tempo bei Klärung</div><div class="b">Dränge bei vagen Briefings früh auf Klarheit; gebe Stakeholdern bewusst Raum davor.</div></div>' +
    '<div class="c"><div class="t">Kaufmännische Prozesse neu</div><div class="b">Eingangs-/Ausgangsrechnungen, Monatsabschluss, Forecast und Budgetplanung: offen benennen, Lernweg zeigen.</div></div>' +
    '</div>';

  CONTENT.en[3] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Strengths</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">Translating, not just relaying</div><div class="b">Example: Patrick &amp; Friends — clarified requirements with clients, design, frontend, backend, and partners. Benefit: shared understanding.</div></div>' +
    '<div class="c"><div class="t">Spotting technical risk early</div><div class="b">Example: Shopify, Shopware, Spryker; dependencies and platform limits. Benefit: makes alternatives decidable.</div></div>' +
    '<div class="c"><div class="t">Holding complexity together</div><div class="b">Example: deepblue — parallel websites, relaunches, and promotions for 10+ brands. Benefit: overview for everyone involved.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Weaknesses / Growth Areas</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">Wanting to help solve tech issues</div><div class="b">Tempted to jump into solving technical questions myself; I channel that knowledge into asking the team the right questions instead.</div></div>' +
    '<div class="c"><div class="t">Pace on clarification</div><div class="b">I push early for clarity on vague briefs; I consciously give stakeholders room before that.</div></div>' +
    '<div class="c"><div class="t">Commercial processes are new</div><div class="b">Incoming/outgoing invoices, month-end close, forecast, and budget planning: I name this openly and show my learning path.</div></div>' +
    '</div>';

  // ===== 4 · Company & Role =====
  CONTENT.de[4] = '<div class="lead">Prüf-, Inspektions- und Zertifizierungsunternehmen — „Shaping a World of Trust“.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Bureau Veritas in 30 Sekunden</p>' +
    '<ul class="tight">' +
    '<li>2025: rund 82.000 Mitarbeitende in 140 Ländern; 6,47 Mrd. € Umsatz.</li>' +
    '<li>Industry: 1,37 Mrd. € Umsatz 2025; technische Sicherheit, Qualität und Konformität stehen im Zentrum.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Rolle — worauf es ankommt</p>' +
    '<ul class="tight">' +
    '<li>Weltweite technische Abnahmen und Inspektionen koordinieren</li>' +
    '<li>Fortschrittsberichte, Systeme, Dokumente und Abstimmungen zuverlässig nachhalten</li>' +
    '<li>Rechnungen, Monatsabschluss, Orderbook, Forecast und Budgetplanung unterstützen</li>' +
    '<li>Kunden, interne/externe Teams und Inspektoren serviceorientiert verbinden</li>' +
    '</ul>' +
    '<p style="font-size:11px;color:var(--muted);margin-top:12px;">Quellen: offizielle Stellenanzeige Ref. 213673; Bureau Veritas Key Figures 2025; Bureau Veritas Unternehmensseite. Abruf: 2. September 2026.</p>';

  CONTENT.en[4] = '<div class="lead">Testing, inspection, and certification company — "Shaping a World of Trust."</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Bureau Veritas in 30 Seconds</p>' +
    '<ul class="tight">' +
    '<li>2025: roughly 82,000 employees across 140 countries; €6.47bn revenue.</li>' +
    '<li>Industry division: €1.37bn revenue in 2025; technical safety, quality, and compliance are the core focus.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Role — What Matters</p>' +
    '<ul class="tight">' +
    '<li>Coordinate technical approvals and inspections worldwide</li>' +
    '<li>Reliably track progress reports, systems, documents, and coordination</li>' +
    '<li>Support invoices, month-end close, order book, forecast, and budget planning</li>' +
    '<li>Connect clients, internal/external teams, and inspectors in a service-oriented way</li>' +
    '</ul>' +
    '<p style="font-size:11px;color:var(--muted);margin-top:12px;">Sources: official job posting Ref. 213673; Bureau Veritas Key Figures 2025; Bureau Veritas company site. Retrieved: September 2, 2026.</p>';

  // ===== 5 · STAR Quick Reference =====
  CONTENT.de[5] = '<div class="lead">Wichtig: Keine Termine, Qualitätsverbesserungen, Budgets oder messbaren Ergebnisse behaupten, die ich nicht konkret belegen kann. Frage zuerst beantworten, dann Situation → Aufgabe → Vorgehen → Ergebnis/Lernpunkt.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unklare/unvollständige Anforderungen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Beispiel:</b> Patrick &amp; Friends.</div>' +
    '<div class="row"><b>Ansatz:</b> Annahmen sichtbar machen, Beteiligte abgleichen.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: ein konkretes Briefing und die offenen Punkte, die ich geklärt habe.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Technik und Anforderung passen nicht zusammen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Beispiel:</b> deepblue.</div>' +
    '<div class="row"><b>Ansatz:</b> Modulare Plattformlogik, Optionen verständlich erklären.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: eine konkrete Marke oder Anforderung und die gewählte Alternative.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Priorisierung paralleler Vorhaben <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Beispiel:</b> deepblue.</div>' +
    '<div class="row"><b>Ansatz:</b> Relaunches plus Tagesgeschäft parallel steuern.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Neue Qualitätsstandards im laufenden Projekt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Beispiel:</b> Patrick &amp; Friends.</div>' +
    '<div class="row"><b>Ansatz:</b> An echten Beispielen erklären und im Team verankern.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: welcher Standard konkret eingeführt wurde.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Komplexes Vorhaben mit Abhängigkeiten <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Beispiel:</b> Möbel Martin.</div>' +
    '<div class="row"><b>Ansatz:</b> Reviews und Qualitätssicherung über mehrere Projektphasen.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Important: don\'t claim deadlines, quality improvements, budgets, or measurable results I can\'t back up concretely. Answer the question first, then Situation → Task → Action → Result/lesson.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unclear or incomplete requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Example:</b> Patrick &amp; Friends.</div>' +
    '<div class="row"><b>Approach:</b> Surface assumptions, align stakeholders.</div>' +
    '<div class="erg">Add before the interview: one concrete briefing and the open points I clarified.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Technical feasibility doesn\'t match the requirement <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Example:</b> deepblue.</div>' +
    '<div class="row"><b>Approach:</b> Modular platform logic, explain options clearly.</div>' +
    '<div class="erg">Add before the interview: one concrete brand or requirement and the alternative I chose.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Prioritizing parallel initiatives <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Example:</b> deepblue.</div>' +
    '<div class="row"><b>Approach:</b> Steer relaunches and day-to-day work in parallel.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Introducing new quality standards mid-project <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Example:</b> Patrick &amp; Friends.</div>' +
    '<div class="row"><b>Approach:</b> Explain with real examples and embed them in the team.</div>' +
    '<div class="erg">Add before the interview: which standard was actually introduced.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Complex initiative with dependencies <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Example:</b> Möbel Martin.</div>' +
    '<div class="row"><b>Approach:</b> Reviews and quality assurance across several project phases.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Kritische Kurzantworten</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">„Keine kaufmännische Ausbildung?“</div><div class="b">Mein Profil ist technisch geprägt. Gleichzeitig habe ich über Jahre organisiert, abgestimmt, dokumentiert und Qualität gesichert. Die buchhalterischen Abläufe sind ein konkretes Lernfeld.</div></div>' +
    '<div class="c"><div class="t">„Keine Erfahrung mit Inspektionen?“</div><div class="b">Das Fachgebiet ist neu. Vertraut sind mir technische Abhängigkeiten, saubere Übergaben, Statusverfolgung und die Koordination interner wie externer Beteiligter.</div></div>' +
    '<div class="c"><div class="t">„Warum raus aus dem Frontend?“</div><div class="b">Nicht weg von Technik, sondern hin zu der Rolle, die mir schon lange liegt: Komplexität reduzieren, Beteiligte verbinden und verlässliche Abläufe schaffen.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Wahrscheinliche Fragen — Kernbotschaft</p>' +
    '<ul class="tight">' +
    '<li><b>Warum Bureau Veritas?</b> Technische Arbeit mit greifbarem Zweck: verlässliche Prüfprozesse schaffen Sicherheit und Vertrauen. Die Rolle verbindet genau meine Stärken — Technik verstehen, Struktur schaffen, Menschen koordinieren.</li>' +
    '<li><b>Wie organisieren Sie viele Vorgänge?</b> Klare Prioritäten, sichtbarer Status, feste nächste Schritte, Verantwortlichkeiten und frühe Eskalation bei fehlenden Informationen.</li>' +
    '<li><b>Wie gehen Sie mit internationalen Partnern um?</b> Eindeutige Briefings, schriftliche Zusammenfassungen, verständliche Sprache, bestätigte Termine und saubere Übergaben.</li>' +
    '<li><b>Wie lernen Sie neue Prozesse?</b> End-to-End-Ablauf verstehen, Begriffe und Kontrollen klären, mit Beispielen üben, Rückfragen bündeln, Checkliste etablieren.</li>' +
    '</ul>';

  CONTENT.en[6] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Tough Questions, Short Answers</p>' +
    '<div class="card3">' +
    '<div class="c"><div class="t">"No commercial training?"</div><div class="b">My background is technical. At the same time, I\'ve organized, aligned, documented, and safeguarded quality for years. The accounting workflows are a concrete area to learn.</div></div>' +
    '<div class="c"><div class="t">"No inspection experience?"</div><div class="b">The subject area is new. What I bring is fluency with technical dependencies, clean handoffs, status tracking, and coordinating internal and external stakeholders.</div></div>' +
    '<div class="c"><div class="t">"Why leave frontend?"</div><div class="b">Not away from technology, but toward the role that has suited me for a long time: reducing complexity, connecting people, and building reliable processes.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Likely Questions — Core Message</p>' +
    '<ul class="tight">' +
    '<li><b>Why Bureau Veritas?</b> Technical work with a tangible purpose: reliable testing processes create safety and trust. The role combines exactly my strengths — understanding technology, building structure, coordinating people.</li>' +
    '<li><b>How do you organize many processes at once?</b> Clear priorities, visible status, fixed next steps, clear ownership, and early escalation when information is missing.</li>' +
    '<li><b>How do you work with international partners?</b> Clear briefs, written summaries, understandable language, confirmed deadlines, and clean handoffs.</li>' +
    '<li><b>How do you learn new processes?</b> Understand the end-to-end flow, clarify terminology and controls, practice with examples, batch follow-up questions, build a checklist.</li>' +
    '</ul>';

  // ===== 7 · Key Projects =====
  CONTENT.de[7] = '<table class="info">' +
    '<tr><th>Projekt</th><th>Kurzbeschreibung</th></tr>' +
    '<tr><td class="k">deepblue (2015–18)</td><td>10+ Unilever-Marken; modulare White-Label-Plattform; Websites, Relaunches und Promotions. Relevanz: mehrere Vorhaben parallel priorisieren und technische Abhängigkeiten sichtbar halten.</td></tr>' +
    '<tr><td class="k">Patrick &amp; Friends (2018–25)</td><td>Kunden-/Design-/Frontend-/Backend-Abstimmung bei E-Commerce-, Website- und Relaunch-Projekten (u. a. ALDI Süd, Möbel Martin, KORO). Onboarding, Mentoring und Qualitätsstandards.</td></tr>' +
    '<tr><td class="k">Möbel Martin</td><td>Komplexe Frontend-Delivery über mehrere Projektphasen; Anforderungsabstimmung, Reviews und Qualitätssicherung bis zum Release.</td></tr>' +
    '</table>';

  CONTENT.en[7] = '<table class="info">' +
    '<tr><th>Project</th><th>Summary</th></tr>' +
    '<tr><td class="k">deepblue (2015–18)</td><td>10+ Unilever brands; modular white-label platform; websites, relaunches, and promotions. Relevance: prioritizing several initiatives in parallel while keeping technical dependencies visible.</td></tr>' +
    '<tr><td class="k">Patrick &amp; Friends (2018–25)</td><td>Client/design/frontend/backend alignment on e-commerce, website, and relaunch projects (incl. ALDI Süd, Möbel Martin, KORO). Onboarding, mentoring, and quality standards.</td></tr>' +
    '<tr><td class="k">Möbel Martin</td><td>Complex frontend delivery across several project phases; requirement alignment, reviews, and quality assurance through to release.</td></tr>' +
    '</table>';

  // ===== 8 · Questions for the Employer =====
  CONTENT.de[8] = '<ul class="tight">' +
    '<li>Woran erkennen Sie nach sechs Monaten, dass jemand in dieser Rolle erfolgreich ist?</li>' +
    '<li>Wie läuft ein typischer Auftrag von der Kundenanfrage bis zur abgeschlossenen Inspektion und Abrechnung?</li>' +
    '<li>Wo entstehen aktuell die häufigsten Verzögerungen oder Reibungsverluste?</li>' +
    '<li>Wie groß sind Team und Inspektorenpool, und wie international ist die tägliche Zusammenarbeit?</li>' +
    '<li>Welche Systeme nutzen Sie für Aufträge, Dokumente, Rechnungen, Orderbook und Forecast?</li>' +
    '<li>Wie ist die Einarbeitung in Inspektionsabläufe und kaufmännische Prozesse organisiert?</li>' +
    '</ul>' +
    '<div class="lead">Gehaltsfrage: Keine Zahl aus der ABOUT-YOU-Vorbereitung übertragen. Erst Verantwortungsumfang, tarifliche Einordnung und Gesamtpaket klären; anschließend eine auf diese Rolle abgestimmte Spanne nennen.</div>';

  CONTENT.en[8] = '<ul class="tight">' +
    '<li>What tells you, after six months, that someone is succeeding in this role?</li>' +
    '<li>What does a typical order look like, from client inquiry through to completed inspection and billing?</li>' +
    '<li>Where do the most frequent delays or friction points currently occur?</li>' +
    '<li>How large are the team and the inspector pool, and how international is day-to-day collaboration?</li>' +
    '<li>Which systems do you use for orders, documents, invoices, order book, and forecast?</li>' +
    '<li>How is onboarding into inspection workflows and commercial processes organized?</li>' +
    '</ul>' +
    '<div class="lead">Salary question: don\'t carry over a number from the ABOUT YOU prep. First clarify scope of responsibility, pay-scale classification, and total package; then name a range calibrated to this specific role.</div>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<ul class="tight checklist">' +
    '<li>Langsam anfangen.</li>' +
    '<li><mark>Konkret antworten, dann ein Beispiel.</mark></li>' +
    '<li>Erst die Frage beantworten, dann Situation → Aufgabe → Vorgehen → Ergebnis/Lernpunkt.</li>' +
    '<li>Eine Lernlücke offen benennen und den Lernweg zeigen.</li>' +
    '<li>In eigener Sprache antworten, keine übernommenen Floskeln.</li>' +
    '<li><mark>Keine Termine, Qualitätsverbesserungen, Budgets oder messbaren Ergebnisse behaupten, die ich nicht konkret belegen kann.</mark></li>' +
    '</ul>' +
    '<div class="lead">Bureau Veritas gewinnt mit mir <mark>technisches Verständnis plus strukturierte Kommunikation</mark> — Inspektions- und kaufmännische Prozesse sind neu, die Arbeitsweise nicht.</div>';

  CONTENT.en[9] = '<ul class="tight checklist">' +
    '<li>Start slowly.</li>' +
    '<li><mark>Answer concretely, then give an example.</mark></li>' +
    '<li>Answer the question first, then Situation → Task → Action → Result/lesson.</li>' +
    '<li>Name a knowledge gap openly and show the learning path.</li>' +
    '<li>Answer in my own words, no borrowed phrases.</li>' +
    '<li><mark>Don\'t claim deadlines, quality improvements, budgets, or measurable results I can\'t back up concretely.</mark></li>' +
    '</ul>' +
    '<div class="lead">Bureau Veritas gains <mark>technical understanding plus structured communication</mark> with me — inspection and commercial processes are new, the way of working isn\'t.</div>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · Bureau Veritas · Projektkoordinator Industry",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
