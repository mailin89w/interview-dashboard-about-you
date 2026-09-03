// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Projektkoordinator Industry<br>Bureau Veritas Industry Services GmbH",
      role: "Projektkoordinator Industry",
      location: "Hamburg",
      interviewDate: "3. September 2026, 14:00 Uhr",
      salaryAd: "offen",
      salaryAsk: "68.000 €",
      salaryMin: "65.000 €",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde mehr als zehn Jahre technische Umsetzung mit der Fähigkeit, <mark>Informationen zu strukturieren</mark>, Abhängigkeiten früh sichtbar zu machen und Kunden, interne Teams sowie externe Partner durch einen verlässlichen Ablauf zu führen.'
    },
    en: {
      roleSubtitle: "Project Coordinator Industry<br>Bureau Veritas Industry Services GmbH",
      role: "Project Coordinator Industry",
      location: "Hamburg",
      interviewDate: "September 3, 2026, 2:00 PM",
      salaryAd: "TBD",
      salaryAsk: "€68,000",
      salaryMin: "€65,000",
      introTitle: "Interview Prep",
      introText: 'I combine more than ten years of hands-on technical delivery with the ability to <mark>structure information</mark>, surface dependencies early, and guide clients, internal teams, and external partners through a reliable process.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"Bureau Veritas – Unternehmen & Rolle", en:"Bureau Veritas – Company & Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Industry-Grundbegriffe", en:"Industry Basics"},
    8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde mehr als zehn Jahre technische Umsetzung mit der Fähigkeit, <mark>Informationen zu strukturieren</mark>, Abhängigkeiten früh sichtbar zu machen und Kunden, interne Teams sowie externe Partner durch einen verlässlichen Ablauf zu führen.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was Bureau Veritas mit mir gewinnt</p>' +
    '<ul class="tight">' +
    '<li><b>Technisches Verständnis ohne Fachrollen-Übertreibung:</b> Ich kann technische Dokumente und Rückfragen einordnen, ohne mich als Inspektorin darzustellen.</li>' +
    '<li><b>Verlässliche Schnittstellenarbeit:</b> Ich kläre Anforderungen, Zuständigkeiten, offene Punkte und nächste Schritte so, dass Beteiligte arbeitsfähig bleiben.</li>' +
    '<li><b>Struktur bei parallelen Vorgängen:</b> Aus Agentur- und E-Commerce-Projekten kenne ich wechselnde Prioritäten, mehrere Ansprechpartner und saubere Übergaben.</li>' +
    '<li><b>Dienstleistungsorientierte Kommunikation:</b> Ich bin direkte Kundenkommunikation gewohnt und bleibe auch bei fehlenden Informationen oder Termindruck verbindlich.</li>' +
    '<li><b>Ehrliche Lernfähigkeit:</b> Inspektorensteuerung, Rechnungsprozesse, Monatsabschluss, Orderbook, Forecast und Budgetplanung sind konkrete Lernfelder.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Realistischer Passungscheck</p>' +
    '<div class="lead">Gute Passung: Schnittstellenkommunikation, technisches Verständnis, Organisation und Lernbereitschaft. Erklärungsbedürftig: kein klassischer kaufmännischer oder Dispositionshintergrund, keine direkte Industry-Services-Erfahrung und bisher kein Schwerpunkt auf operativen Finanzprozessen. Die richtige Linie lautet: Lücke klar benennen, übertragbare Praxis belegen, Lernweg konkret machen.</div>';

  CONTENT.en[1] = '<div class="lead">I combine more than ten years of hands-on technical delivery with the ability to <mark>structure information</mark>, surface dependencies early, and guide clients, internal teams, and external partners through a reliable process.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What Bureau Veritas Gains From Me</p>' +
    '<ul class="tight">' +
    '<li><b>Technical understanding without overstating my role:</b> I can make sense of technical documents and follow-up questions without presenting myself as an inspector.</li>' +
    '<li><b>Reliable interface work:</b> I clarify requirements, ownership, open points, and next steps so everyone stays able to work.</li>' +
    '<li><b>Structure across parallel processes:</b> From agency and e-commerce projects, I know shifting priorities, multiple points of contact, and clean handoffs.</li>' +
    '<li><b>Service-oriented communication:</b> I\'m used to direct client communication and stay reliable even under missing information or deadline pressure.</li>' +
    '<li><b>Honest about the learning curve:</b> Coordinating inspectors, invoicing processes, month-end close, order book, forecast, and budget planning are concrete areas to learn.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Realistic Fit Check</p>' +
    '<div class="lead">Good fit: interface communication, technical understanding, organization, and willingness to learn. Needs explaining: no classical commercial or dispatch background, no direct Industry Services experience, and so far no focus on operational finance processes. The right line to take: name the gap clearly, show transferable practice, make the learning path concrete.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der technischen Umsetzung und habe mehr als zehn Jahre digitale Projekte, Websites, Onlineshops und Relaunches begleitet. Dabei hat sich meine Rolle zunehmend zur Schnittstelle entwickelt: Ich habe Anforderungen mit Kunden und Design geklärt, technische Abhängigkeiten mit Frontend, Backend und externen Partnern abgestimmt, offene Punkte nachgehalten und Qualität bis zur Übergabe begleitet. Meine Stärke liegt darin, viele Informationen so zu ordnen, dass für alle klar ist, was gebraucht wird, wer zuständig ist und was als Nächstes passieren muss.</p>' +
       '<p>Mein Team hat mich einmal als <mark>„Social Glue“</mark> bezeichnet — weil ich früh merke, wenn Informationen fehlen oder Erwartungen auseinanderlaufen, und die richtigen Menschen zur Klärung zusammenbringe. Genau das sehe ich auch im Kern der Position bei Bureau Veritas: Kunden, interne und externe Teams sowie Inspektorinnen und Inspektoren verbinden, vollständige Unterlagen sicherstellen, Fortschritt transparent halten und den Vorgang bis zur Abrechnung zuverlässig begleiten.</p>' +
       '<p>Technische Themen verstehen, strukturiert nachfragen und komplexe Abläufe koordinieren sind <mark>seit Jahren Teil meiner Arbeit</mark> — und genau diese Fähigkeiten möchte ich in die Rolle bei Bureau Veritas einbringen.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich komme aus der technischen Umsetzung und habe mich über mehr als zehn Jahre immer stärker zur Schnittstelle zwischen Kunden, Fachseite und technischen Teams entwickelt. Ich kläre Informationen, mache Abhängigkeiten sichtbar und halte Zuständigkeiten und nächste Schritte nachvollziehbar.</p>' +
       '<p>Bei Bureau Veritas möchte ich genau diese Stärke in die <mark>Koordination weltweiter Inspektionen</mark> einbringen — Informationen klären, Abhängigkeiten sichtbar machen und Zuständigkeiten nachvollziehbar halten.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Sprechhinweis</p>' +
     '<ul class="tight">' +
     '<li><b>Woher komme ich?</b> Mehr als zehn Jahre technische Umsetzung.</li>' +
     '<li><b>Was hat sich entwickelt?</b> Von eigener Umsetzung zu Schnittstelle, Koordination und Qualität.</li>' +
     '<li><b>Warum diese Stelle?</b> Technische Aufträge zuverlässig durch Informationen, Menschen und Prozesse führen.</li>' +
     '<li><mark>Nicht behaupten:</mark> Inspektionen fachlich beurteilen zu können. Die Koordinatorin ermöglicht den Einsatz der Fachleute.</li>' +
     '</ul>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from technical delivery and have spent more than ten years on digital projects, websites, online shops, and relaunches. Over time, my role increasingly became an interface one: I clarified requirements with clients and design, aligned technical dependencies with frontend, backend, and external partners, tracked open points, and accompanied quality through to handover. My strength lies in organizing large amounts of information so it\'s clear to everyone what\'s needed, who\'s responsible, and what has to happen next.</p>' +
       '<p>My team once called me <mark>"social glue"</mark> — because I notice early when information is missing or expectations diverge, and I bring the right people together to sort it out. That\'s exactly what I see at the core of this role at Bureau Veritas: connecting clients, internal and external teams, and inspectors, ensuring documentation is complete, keeping progress transparent, and reliably carrying a case through to billing.</p>' +
       '<p>Understanding technical topics, asking structured questions, and coordinating complex workflows have been <mark>part of my work for years</mark> — and that\'s exactly what I want to bring to this role at Bureau Veritas.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I come from technical delivery and, over more than ten years, increasingly became the interface between clients, business stakeholders, and technical teams. I clarify information, surface dependencies, and keep ownership and next steps traceable.</p>' +
       '<p>At Bureau Veritas, I want to bring exactly that strength to <mark>coordinating inspections worldwide</mark> — clarifying information, surfacing dependencies, and keeping ownership traceable.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Delivery Notes</p>' +
     '<ul class="tight">' +
     '<li><b>Where do I come from?</b> More than ten years of technical delivery.</li>' +
     '<li><b>What evolved?</b> From hands-on delivery to interface, coordination, and quality.</li>' +
     '<li><b>Why this role?</b> Reliably steering technical assignments through information, people, and process.</li>' +
     '<li><mark>Don\'t claim:</mark> to be able to assess inspections technically. The coordinator enables the specialists to do their work.</li>' +
     '</ul>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Stärke 1 · Übersetzen statt weiterleiten</div><div class="b">Ich reiche Informationen nicht einfach weiter, sondern kläre, was gebraucht wird, welche Angaben fehlen und welche Folgen entstehen. Beleg: Patrick &amp; Friends — Anforderungen zwischen Kunden, Design, Frontend, Backend und externen Partnern abgestimmt. Nutzen für BV: Inspektor:innen und interne Teams erhalten eine klare, belastbare Arbeitsgrundlage.</div></div>' +
    '<div class="c"><div class="t">Stärke 2 · Technische Risiken früh erkennen</div><div class="b">Durch meine Entwicklungserfahrung erkenne ich früh, wenn eine scheinbar kleine Anforderung Abhängigkeiten oder offene Rückfragen auslöst. Beleg: Arbeit mit Shopify, Shopware, Spryker sowie Frontend-/Backend-Abhängigkeiten. Nutzen für BV: Unvollständige oder widersprüchliche Angaben können vor einem Einsatz sichtbar werden.</div></div>' +
    '<div class="c"><div class="t">Stärke 3 · Komplexität zusammenhalten</div><div class="b">Ich mache offene Punkte, Entscheidungen und nächste Schritte sichtbar. Beleg: Wiederkehrende Websites, Relaunches und Promotions für mehr als zehn Unilever-Marken in einem modularen Umfeld. Nutzen für BV: Mehrere Aufträge und Beteiligte bleiben nachvollziehbar, ohne dass jede Abstimmung neu beginnt.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Persönliche Schwächen — authentisch und unverändert</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Wenn etwas unklar oder technisch nicht sinnvoll ist, spreche ich es offen an. Ich achte bewusst auf Kontext und Ton. Mir geht es um eine tragfähige Lösung, nicht darum, recht zu haben.</li>' +
    '<li><b>Trockener, manchmal sarkastischer Humor:</b> Im vertrauten Team kann mein Humor verbindend sein. In neuen Konstellationen und schriftlich setze ich ihn bewusst zurückhaltend ein; bei Konflikten bleibe ich sachlich.</li>' +
    '<li><b>Lockere dritte Antwort:</b> Kinderschokolade. Die sollte man in meiner Nähe nicht unbeaufsichtigt lassen — nur verwenden, wenn die Gesprächsatmosphäre wirklich passt.</li>' +
    '<li><b>Fachliches Entwicklungsfeld:</b> Industry Services, technische Abnahmen, Inspektorenpool und kaufmännische Prozesse sind neu. Ich trenne klar zwischen technischem Verständnis und Fachprüfung und arbeite mich systematisch über Prozess, Begriffe, Prüfpunkte und echte Fälle ein.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Strength 1 · Translating, not just relaying</div><div class="b">I don\'t just pass information along — I clarify what\'s needed, what\'s missing, and what consequences follow. Evidence: Patrick &amp; Friends — aligned requirements between clients, design, frontend, backend, and external partners. Benefit for BV: inspectors and internal teams get a clear, solid working basis.</div></div>' +
    '<div class="c"><div class="t">Strength 2 · Spotting technical risk early</div><div class="b">My development background means I notice early when a seemingly small requirement triggers dependencies or open questions. Evidence: work with Shopify, Shopware, Spryker, and frontend/backend dependencies. Benefit for BV: incomplete or contradictory information can surface before a job starts.</div></div>' +
    '<div class="c"><div class="t">Strength 3 · Holding complexity together</div><div class="b">I make open points, decisions, and next steps visible. Evidence: recurring websites, relaunches, and promotions for more than ten Unilever brands in a modular environment. Benefit for BV: multiple orders and stakeholders stay traceable without every alignment starting from scratch.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Personal Weaknesses — Honest and Unfiltered</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> When something is unclear or technically doesn\'t make sense, I say so openly. I\'m deliberate about context and tone — the goal is a workable solution, not being right.</li>' +
    '<li><b>Dry, occasionally sarcastic humor:</b> With a team I trust, my humor can be a connector. In new settings and in writing, I deliberately hold it back; in conflicts I stay factual.</li>' +
    '<li><b>The light third answer:</b> Kinderschokolade (chocolate). Best not left unattended near me — only bring this one up if the mood in the room genuinely fits.</li>' +
    '<li><b>Domain-specific growth area:</b> Industry Services, technical approvals, the inspector pool, and commercial processes are new. I keep a clear line between technical understanding and formal inspection, and I\'m working through process, terminology, checkpoints, and real cases systematically.</li>' +
    '</ul>';

  // ===== 4 · Company & Role =====
  CONTENT.de[4] = '<div class="lead">Bureau Veritas ist ein weltweit tätiges Unternehmen für Prüfung, Inspektion, Zertifizierung und technische Dienstleistungen.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was Bureau Veritas macht</p>' +
    '<ul class="tight">' +
    '<li>Industry Services unterstützt Sicherheit, Rechtskonformität und planmäßigen Betrieb von Anlagen, Maschinen und Produkten.</li>' +
    '<li>Die aktuelle Anzeige nennt mehr als 400.000 Kunden, mehr als 85.000 Mitarbeitende und Präsenz in über 140 Ländern.</li>' +
    '<li>Der Hamburger Bereich Technical Services gehört zur Bureau Veritas Industry Services GmbH.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was eine technische Abnahme oder Inspektion organisatorisch bedeutet</p>' +
    '<p>Ein Kunde beauftragt eine Prüfung oder Abnahme. Dafür müssen Auftrag, Spezifikation, Ort, Termin und erforderliche Dokumente vollständig sein. Eine fachlich geeignete und verfügbare Person aus dem Inspektorenpool wird eingesetzt. Fortschritt und Bericht werden nachgehalten, Dokumente zurückgeführt, Systeme gepflegt und der kaufmännische Abschluss vorbereitet. Die Koordinatorin prüft nicht selbst fachlich, sondern schafft den verlässlichen Rahmen für die Prüfung.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Warum die Rolle für Bureau Veritas wichtig ist</p>' +
    '<ul class="tight">' +
    '<li>Fehlende Unterlagen können einen Einsatz verzögern oder unmöglich machen.</li>' +
    '<li>Unklare Zuständigkeiten gefährden Termin, Kundenvertrauen und Abrechnung.</li>' +
    '<li>Ein belastbarer Status ist die Grundlage für Orderbook, Forecast und Budgetplanung.</li>' +
    '<li>Internationale Einsätze benötigen klare Kommunikation, bestätigte Termine und saubere Übergaben.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Aktueller Unternehmenskontext</p>' +
    '<p>Bureau Veritas meldete für das erste Halbjahr 2026 einen Umsatz von 3,258 Mrd. Euro und 5,0 % organisches Wachstum. Das Unternehmen hob dabei unter anderem die Dynamik bei „Mission Critical Assets“ hervor. Für das Interview reicht die Bedeutung: technische Prüf- und Inspektionsleistungen bleiben ein geschäftlich relevantes Wachstumsfeld; operative Verlässlichkeit und belastbare Daten sind entsprechend wichtig.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Abgleich der Stellenanforderungen mit meinem Profil</p>' +
    '<table class="info">' +
    '<tr><th>Anforderung der Stelle</th><th>Mein realistischer Bezug</th></tr>' +
    '<tr><td class="k">Zentrale Kommunikationsschnittstelle</td><td>Sehr hohe Passung: langjährige Abstimmung zwischen Kunden, Design, Frontend, Backend und externen Partnern.</td></tr>' +
    '<tr><td class="k">Weltweite Abnahmen und Inspektionen koordinieren</td><td>Koordinationsmuster ist übertragbar; Inspektionslogik, Verfügbarkeiten und internationale Abläufe sind neu.</td></tr>' +
    '<tr><td class="k">Fortschrittsberichte und Systeme pflegen</td><td>Hohe Passung bei Nachhalten, Dokumentation und Transparenz; konkrete BV-Systeme müssen gelernt werden.</td></tr>' +
    '<tr><td class="k">Dokumentenmanagement</td><td>Gute Grundlage aus Anforderungen, Entscheidungen, Reviews und Qualitätsdokumentation; formale Inspektionsdokumente sind neu.</td></tr>' +
    '<tr><td class="k">Ausgangs-/Eingangsrechnungen, Monatsabschluss</td><td>Klares Lernfeld; nicht als bisherige Kernkompetenz darstellen.</td></tr>' +
    '<tr><td class="k">Inspektorenpool pflegen</td><td>Vergleichbar mit Ressourcen-/Partnerkoordination, aber direkte Dispositionserfahrung fehlt.</td></tr>' +
    '<tr><td class="k">Orderbook, Forecast, Budgetplanung</td><td>Projektstatus und Aufwand einordnen ist vertraut; kaufmännische BV-Logik und Verantwortung sind neu.</td></tr>' +
    '<tr><td class="k">Technisches Interesse/Erfahrung</td><td>Sehr hohe Passung durch mehr als zehn Jahre Frontend- und Plattformpraxis.</td></tr>' +
    '<tr><td class="k">Organisation, Lernbereitschaft, Augenhöhe</td><td>Hohe Passung; mit konkreten Arbeitsweisen und Social-Glue-Beispiel belegen.</td></tr>' +
    '<tr><td class="k">Dienstleistungsorientierung und Kommunikation</td><td>Hohe Passung aus langjähriger Agentur- und Kundenarbeit.</td></tr>' +
    '<tr><td class="k">Deutsch C1, gutes Englisch</td><td>Deutsch sicher. Englisch nur in dem Umfang bewerten, den ich im Gespräch tatsächlich vertreten kann.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Mein passender Arbeitsansatz</p>' +
    '<ul class="tight">' +
    '<li><b>Vor einem Einsatz:</b> Pflichtinformationen, Dokumente, Termin, Ort, Scope und Ansprechpartner klären.</li>' +
    '<li><b>Während des Vorgangs:</b> Status, offene Punkte, Verantwortliche und Rückmeldetermine sichtbar halten.</li>' +
    '<li><b>Bei Abweichungen:</b> Auswirkungen konkret benennen, Alternative klären und rechtzeitig eskalieren.</li>' +
    '<li><b>Zum Abschluss:</b> Bericht und Dokumente vollständig zurückführen, Systeme aktualisieren und Abrechnung vorbereiten.</li>' +
    '</ul>';

  CONTENT.en[4] = '<div class="lead">Bureau Veritas is a global testing, inspection, certification, and technical services company.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What Bureau Veritas Does</p>' +
    '<ul class="tight">' +
    '<li>Industry Services supports the safety, legal compliance, and planned operation of plants, machinery, and products.</li>' +
    '<li>The current job ad cites more than 400,000 clients, more than 85,000 employees, and a presence in over 140 countries.</li>' +
    '<li>The Hamburg-based Technical Services division belongs to Bureau Veritas Industry Services GmbH.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What a Technical Approval or Inspection Means Organizationally</p>' +
    '<p>A client commissions a test or approval. That requires the order, specification, location, date, and required documents to be complete. A suitably qualified and available person from the inspector pool is assigned. Progress and the report are tracked, documents are returned, systems are maintained, and the commercial close is prepared. The coordinator doesn\'t perform the technical inspection herself — she creates the reliable framework the inspection runs in.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Why the Role Matters to Bureau Veritas</p>' +
    '<ul class="tight">' +
    '<li>Missing documentation can delay or prevent a job.</li>' +
    '<li>Unclear ownership puts deadlines, client trust, and billing at risk.</li>' +
    '<li>A solid status is the foundation for order book, forecast, and budget planning.</li>' +
    '<li>International jobs require clear communication, confirmed dates, and clean handoffs.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Current Company Context</p>' +
    '<p>Bureau Veritas reported H1 2026 revenue of €3.258bn and 5.0% organic growth, highlighting momentum in "Mission Critical Assets" among other areas. For the interview, the relevant takeaway is: technical testing and inspection services remain a commercially important growth area, so operational reliability and solid data matter accordingly.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Profile</p>' +
    '<table class="info">' +
    '<tr><th>Job Requirement</th><th>My Realistic Fit</th></tr>' +
    '<tr><td class="k">Central communication interface</td><td>Very high fit: years of aligning clients, design, frontend, backend, and external partners.</td></tr>' +
    '<tr><td class="k">Coordinate global approvals and inspections</td><td>The coordination pattern transfers; inspection logic, availability, and international workflows are new.</td></tr>' +
    '<tr><td class="k">Maintain progress reports and systems</td><td>High fit for tracking, documentation, and transparency; the specific BV systems need to be learned.</td></tr>' +
    '<tr><td class="k">Document management</td><td>Good foundation from requirements, decisions, reviews, and quality documentation; formal inspection documents are new.</td></tr>' +
    '<tr><td class="k">Outgoing/incoming invoices, month-end close</td><td>Clear learning area; not something to present as an existing core competency.</td></tr>' +
    '<tr><td class="k">Maintaining the inspector pool</td><td>Comparable to resource/partner coordination, but hands-on dispatch experience is missing.</td></tr>' +
    '<tr><td class="k">Order book, forecast, budget planning</td><td>Reading project status and effort is familiar; BV\'s commercial logic and accountability are new.</td></tr>' +
    '<tr><td class="k">Technical interest/experience</td><td>Very high fit from more than ten years of frontend and platform practice.</td></tr>' +
    '<tr><td class="k">Organization, willingness to learn, working at eye level</td><td>High fit; back it up with concrete working habits and the "social glue" example.</td></tr>' +
    '<tr><td class="k">Service orientation and communication</td><td>High fit from years of agency and client work.</td></tr>' +
    '<tr><td class="k">German C1, good English</td><td>German is solid. Only claim the English level I can actually stand behind in the conversation.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">My Working Approach for This Role</p>' +
    '<ul class="tight">' +
    '<li><b>Before a job:</b> clarify mandatory information, documents, date, location, scope, and point of contact.</li>' +
    '<li><b>During the process:</b> keep status, open points, owners, and follow-up dates visible.</li>' +
    '<li><b>When something deviates:</b> name the impact concretely, clarify an alternative, and escalate in time.</li>' +
    '<li><b>At close-out:</b> fully return the report and documents, update systems, and prepare billing.</li>' +
    '</ul>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Eine STAR-Antwort ist kein erfundener Erfolgsbericht. Wenn Ergebnis oder Kennzahl nicht dokumentiert sind, bleibt die Wirkung qualitativ.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unklare oder unvollständige Anforderungen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> In Agenturprojekten kamen Anforderungen aus Kunden-, Design- und technischen Perspektiven zusammen.</div>' +
    '<div class="row"><b>Aufgabe:</b> Vor der Umsetzung ein gemeinsames Verständnis herstellen.</div>' +
    '<div class="row"><b>Vorgehen:</b> Annahmen sichtbar machen, offene Fragen bündeln, technische Abhängigkeiten mit Frontend und Backend klären und Entscheidungen dokumentieren.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten hatten eine gemeinsame Arbeitsgrundlage.</div>' +
    '<div class="erg">Transfer: Bei BV würde ich vor einem Inspektoreneinsatz genauso Pflichtangaben und Unterlagen vollständig machen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Überblick bei mehreren parallelen Vorgängen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Bei deepblue liefen Relaunches, Websites und Promotions für mehrere Unilever-Marken parallel.</div>' +
    '<div class="row"><b>Aufgabe:</b> Neue Anforderungen und Tagesgeschäft zusammenhalten.</div>' +
    '<div class="row"><b>Vorgehen:</b> Arbeit nach Dringlichkeit, Abhängigkeiten und erforderlichen Entscheidungen strukturieren; offene Punkte und nächste Schritte sichtbar halten.</div>' +
    '<div class="row"><b>Ergebnis:</b> Der Informationsstand blieb nachvollziehbar.</div>' +
    '<div class="erg">Transfer: Bei BV würde ich jeden Auftrag mit Status, nächster Aktion, Besitzer und Termin führen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Fehlende Rückmeldung, Termin gefährdet <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Antwortlogik:</b> Nicht nur allgemein „nachfassen“. Erst prüfen, welche Information fehlt und welche Auswirkung sie hat. Dann die richtige Person konkret ansprechen, einen realistischen Rückmeldetermin vereinbaren, den Status dokumentieren und bei echter Termin- oder Kundenwirkung rechtzeitig eskalieren.</div>' +
    '<div class="erg">Ehrlichkeit: Kein erfundener BV-Fall; ein vergleichbares Beispiel aus Projektarbeit erzählen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Technische Themen für nichttechnische Kunden erklären <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Technische Abhängigkeiten oder Plattformgrenzen waren für Kunden nicht unmittelbar sichtbar.</div>' +
    '<div class="row"><b>Vorgehen:</b> Erst die Entscheidung erklären, dann die technische Ursache und anschließend umsetzbare Optionen mit Folgen darstellen.</div>' +
    '<div class="row"><b>Nutzen:</b> Kunden können entscheiden, ohne selbst technische Details beherrschen zu müssen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Neue Standards in einem laufenden Projekt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends wurden neue Qualitätsstandards eingeführt.</div>' +
    '<div class="row"><b>Aufgabe:</b> Standards verständlich und praktisch anwendbar machen.</div>' +
    '<div class="row"><b>Vorgehen:</b> An echten Beispielen erklären, in Reviews anwenden, Rückfragen aufnehmen und Wissen weitergeben.</div>' +
    '<div class="erg">Transfer: Neue BV-Checklisten oder Dokumentationsregeln würde ich ebenso in reale Abläufe übersetzen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Unterschiedliche Interessen moderieren <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Kundenwunsch, Designidee und technische Machbarkeit passten nicht immer unmittelbar zusammen.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ziel, Randbedingungen und offene Entscheidung voneinander trennen; Beteiligte mit ihren jeweiligen Perspektiven hören; Optionen samt Konsequenzen verständlich machen.</div>' +
    '<div class="row"><b>Stärke:</b> Direkt, aber lösungsorientiert.</div>' +
    '<div class="erg">Transfer: Bei BV können Kundenwunsch, Termin und Verfügbarkeit eines Inspektors kollidieren.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">7 · Einarbeitung in eine neue technische Domäne <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Erst den End-to-End-Prozess verstehen. Dann zentrale Begriffe, Pflichtdokumente, Rollen und Prüfpunkte klären. An echten Fällen mitlaufen, Rückfragen bündeln, eigene Checkliste erstellen und diese durch erfahrene Kolleg:innen prüfen lassen.</div>' +
    '<div class="row"><b>Bezug:</b> So trenne ich Lernbedarf von bereits vorhandener Koordinationskompetenz.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">8 · Umgang mit Fehlern <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Antwort:</b> Fehler früh sichtbar machen, Auswirkung und betroffene Personen klären, Korrektur priorisieren und anschließend den Prozess verbessern. Kein Schuldthema daraus machen, aber Verantwortung auch nicht verwässern.</div>' +
    '<div class="erg">Als Beispiel nur einen echten Fall nutzen, den ich sicher schildern kann.</div>' +
    '</div></div></div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Geeignete echte Beispiele vor dem Gespräch auswählen</p>' +
    '<ul class="tight">' +
    '<li>ein konkreter Priorisierungskonflikt bei deepblue;</li>' +
    '<li>eine unvollständige Anforderung bei Patrick &amp; Friends;</li>' +
    '<li>ein konkretes Risiko oder eine schwierige Übergabe bei Möbel Martin;</li>' +
    '<li>ein Qualitätsstandard, den ich erklärt oder in Reviews angewendet habe;</li>' +
    '<li>eine Situation, in der meine Direktheit früh Klarheit geschaffen hat.</li>' +
    '</ul>';

  CONTENT.en[5] = '<div class="lead">A STAR answer is not an invented success story. When a result or figure isn\'t documented, the impact stays qualitative.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unclear or incomplete requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> On agency projects, requirements came together from client, design, and technical perspectives.</div>' +
    '<div class="row"><b>Task:</b> Establish a shared understanding before delivery.</div>' +
    '<div class="row"><b>Action:</b> Surfaced assumptions, bundled open questions, clarified technical dependencies with frontend and backend, and documented decisions.</div>' +
    '<div class="row"><b>Result:</b> Everyone involved had a shared working basis.</div>' +
    '<div class="erg">Transfer: at BV, I\'d make mandatory information and documentation complete before an inspector assignment in the same way.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Keeping an overview across several parallel processes <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> At deepblue, relaunches, websites, and promotions ran in parallel for several Unilever brands.</div>' +
    '<div class="row"><b>Task:</b> Balance new requirements against day-to-day work.</div>' +
    '<div class="row"><b>Action:</b> Structured work by urgency, dependencies, and required decisions; kept open points and next steps visible.</div>' +
    '<div class="row"><b>Result:</b> The information status stayed traceable.</div>' +
    '<div class="erg">Transfer: at BV, I\'d run every order with status, next action, owner, and date.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Missing reply, deadline at risk <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Response logic:</b> Not just a generic "follow up." First check what information is missing and its impact. Then approach the right person specifically, agree a realistic reply date, document status, and escalate in time if there\'s a real deadline or client impact.</div>' +
    '<div class="erg">Honesty: no invented BV case — I\'d tell a comparable example from project work.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Explaining technical topics to non-technical clients <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Technical dependencies or platform limits weren\'t immediately visible to clients.</div>' +
    '<div class="row"><b>Action:</b> Explain the decision first, then the technical cause, then present workable options with their consequences.</div>' +
    '<div class="row"><b>Benefit:</b> Clients can decide without needing to master the technical detail themselves.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Rolling out new standards mid-project <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> New quality standards were introduced at Patrick &amp; Friends.</div>' +
    '<div class="row"><b>Task:</b> Make the standards understandable and practically applicable.</div>' +
    '<div class="row"><b>Action:</b> Explained with real examples, applied them in reviews, took in follow-up questions, and passed on knowledge.</div>' +
    '<div class="erg">Transfer: I\'d translate new BV checklists or documentation rules into real workflows the same way.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Moderating conflicting interests <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Client wishes, design ideas, and technical feasibility didn\'t always line up immediately.</div>' +
    '<div class="row"><b>Action:</b> Separated the goal, constraints, and the open decision; heard each stakeholder\'s perspective; made options and their consequences understandable.</div>' +
    '<div class="row"><b>Strength:</b> Direct, but solution-oriented.</div>' +
    '<div class="erg">Transfer: at BV, client wishes, deadlines, and an inspector\'s availability can collide.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">7 · Getting up to speed in a new technical domain <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> Understand the end-to-end process first. Then clarify core terminology, mandatory documents, roles, and checkpoints. Shadow real cases, bundle follow-up questions, build my own checklist, and have experienced colleagues review it.</div>' +
    '<div class="row"><b>Relevance:</b> This is how I separate what I still need to learn from coordination competence I already have.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">8 · Handling mistakes <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Answer:</b> Surface mistakes early, clarify the impact and who\'s affected, prioritize the fix, then improve the process. Don\'t turn it into blame, but don\'t dilute accountability either.</div>' +
    '<div class="erg">Only use a real case as an example — one I can describe confidently.</div>' +
    '</div></div></div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Real Examples to Pick Before the Interview</p>' +
    '<ul class="tight">' +
    '<li>a concrete prioritization conflict at deepblue;</li>' +
    '<li>an incomplete requirement at Patrick &amp; Friends;</li>' +
    '<li>a concrete risk or a difficult handover at Möbel Martin;</li>' +
    '<li>a quality standard I explained or applied in reviews;</li>' +
    '<li>a situation where my directness created clarity early.</li>' +
    '</ul>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie haben keine kaufmännische oder Dispositionsausbildung. Warum sollten wir Sie trotzdem einstellen?“</div>' +
    '<p>Mein Profil ist technisch und gestalterisch geprägt. Gleichzeitig habe ich über viele Jahre organisiert, abgestimmt, dokumentiert und Kunden sowie technische Teams durch komplexe Vorhaben geführt. Genau diese Schnittstellenstärke ist für die Rolle zentral. Die formalen Rechnungs-, Monatsabschluss- und Forecast-Prozesse sind ein Lernfeld, das ich nicht kleinrede. Ich würde es mit klarer Einarbeitung, Prozessverständnis und kontrollierten ersten Fällen schließen.</p>' +
    '<div class="lead">„Sie haben noch nie Inspektionen koordiniert.“</div>' +
    '<p>Das stimmt. Ich kenne weder Ihre Inspektionsarten noch den Inspektorenpool aus der Praxis. Vertraut sind mir aber technische Abhängigkeiten, vollständige Briefings, externe Partner, Statusverfolgung, Qualität und saubere Übergaben. Ich würde die Domäne nicht mit Digitalprojekten gleichsetzen, sondern die übertragbare Arbeitsweise nutzen und die Fachlogik gezielt lernen.</p>' +
    '<div class="lead">„Wie viel Buchhaltung können Sie?“</div>' +
    '<p>Buchhaltung war bisher nicht mein Schwerpunkt. Ich würde deshalb nicht behaupten, Monatsabschlüsse eigenständig aus meiner bisherigen Arbeit zu kennen. Ich kann sorgfältig mit strukturierten Daten und Prozessen arbeiten und möchte im Gespräch verstehen, welche Schritte, Systeme, Freigaben und Verantwortungsgrade konkret zur Position gehören.</p>' +
    '<div class="lead">„Warum wechseln Sie aus dem Frontend?“</div>' +
    '<p>Nicht, weil ich mit Technik nichts mehr zu tun haben möchte. Gerade mein technisches Verständnis soll Teil meiner neuen Rolle bleiben. Ich möchte aber stärker dort arbeiten, wo meine größte Wirkung liegt: Informationen klären, Menschen koordinieren, Abhängigkeiten sichtbar machen und Abläufe verlässlich bis zum Abschluss begleiten.</p>' +
    '<div class="lead">„Ist Ihnen die Rolle nicht zu administrativ?“</div>' +
    '<p>Der operative Anteil ist mir bewusst. Dokumente, Status und Abrechnung sind keine Nebensache, sondern Teil eines verlässlichen Kundenprozesses. Gleichzeitig möchte ich klären, wie groß der tatsächliche Gestaltungsspielraum und der Entwicklungspfad in Richtung Project Development sind.</p>' +
    '<div class="lead">„Wie sicher ist Ihr Englisch?“</div>' +
    '<p>Nur das Niveau behaupten, das ich spontan vertreten kann. Sichere Formulierung: Ich kann mich in fachlichen Abstimmungen schriftlich und mündlich verständigen und bereite wichtige Gespräche sorgfältig vor. Bei spezifischem Inspektionsvokabular werde ich mich gezielt einarbeiten.</p>';

  CONTENT.en[6] = '<div class="lead">"You don\'t have commercial or dispatch training. Why should we hire you anyway?"</div>' +
    '<p>My background is technical and creative. At the same time, I\'ve spent many years organizing, aligning, documenting, and guiding clients and technical teams through complex projects. That interface strength is exactly what\'s central to this role. The formal invoicing, month-end close, and forecast processes are a learning area I won\'t downplay — I\'d close it with clear onboarding, process understanding, and controlled first cases.</p>' +
    '<div class="lead">"You\'ve never coordinated inspections."</div>' +
    '<p>That\'s true. I don\'t know your inspection types or the inspector pool from hands-on practice. What I do bring is technical dependencies, complete briefings, external partners, status tracking, quality, and clean handoffs. I wouldn\'t equate the domain with digital projects — I\'d use the transferable way of working and learn the domain logic deliberately.</p>' +
    '<div class="lead">"How much accounting can you do?"</div>' +
    '<p>Accounting hasn\'t been my focus so far. So I wouldn\'t claim to know month-end closes independently from my past work. I can work carefully with structured data and processes, and in the conversation I\'d want to understand which steps, systems, approvals, and levels of accountability the role actually involves.</p>' +
    '<div class="lead">"Why are you leaving frontend?"</div>' +
    '<p>Not because I want nothing more to do with technology — my technical understanding is meant to stay part of my new role. I want to work more where my biggest impact lies: clarifying information, coordinating people, surfacing dependencies, and reliably carrying processes through to completion.</p>' +
    '<div class="lead">"Isn\'t the role too administrative for you?"</div>' +
    '<p>I\'m aware of the operational share. Documents, status, and billing aren\'t a side note — they\'re part of a reliable client process. At the same time, I\'d want to clarify how much actual scope for shaping the role exists, and what the development path toward Project Development looks like.</p>' +
    '<div class="lead">"How confident is your English?"</div>' +
    '<p>Only claim the level I can back up on the spot. Safe phrasing: I can communicate in professional discussions, written and spoken, and prepare important conversations carefully. For specific inspection vocabulary, I\'ll work in deliberately.</p>';

  // ===== 7 · Industry Basics =====
  CONTENT.de[7] = '<table class="info">' +
    '<tr><th>Begriff</th><th>Arbeitsdefinition für das Gespräch</th></tr>' +
    '<tr><td class="k">Technische Abnahme</td><td>Prüfung, ob definierte Anforderungen, Spezifikationen oder Standards erfüllt sind.</td></tr>' +
    '<tr><td class="k">Inspektion</td><td>Fachliche Prüfung durch qualifizierte Personen; kann vor Ort oder je nach Auftrag anders organisiert sein.</td></tr>' +
    '<tr><td class="k">Inspektorenpool</td><td>Verfügbare Fachpersonen mit passender Qualifikation, Region und Einsatzmöglichkeit.</td></tr>' +
    '<tr><td class="k">Scope</td><td>Genauer Umfang des Auftrags: Was wird wo, wann und nach welchen Anforderungen geprüft?</td></tr>' +
    '<tr><td class="k">Fortschrittsbericht</td><td>Statusinformation über Durchführung, Abweichungen, offene Punkte und nächste Schritte.</td></tr>' +
    '<tr><td class="k">Orderbook</td><td>Bestand beziehungsweise Übersicht vorhandener Aufträge als Grundlage für Steuerung und Planung.</td></tr>' +
    '<tr><td class="k">Forecast</td><td>Aktualisierte Erwartung künftiger Leistung, Umsatz oder Auslastung auf Basis des aktuellen Status.</td></tr>' +
    '<tr><td class="k">Monatsabschluss</td><td>Periodengerechte Erfassung und Prüfung relevanter Geschäftsvorgänge zum Monatsende.</td></tr>' +
    '</table>';

  CONTENT.en[7] = '<table class="info">' +
    '<tr><th>Term</th><th>Working Definition for the Interview</th></tr>' +
    '<tr><td class="k">Technical approval</td><td>Verification that defined requirements, specifications, or standards are met.</td></tr>' +
    '<tr><td class="k">Inspection</td><td>Expert examination by qualified people; can be on-site or organized differently depending on the order.</td></tr>' +
    '<tr><td class="k">Inspector pool</td><td>Available specialists with the right qualification, region, and availability.</td></tr>' +
    '<tr><td class="k">Scope</td><td>The exact extent of the order: what is being tested, where, when, and against which requirements.</td></tr>' +
    '<tr><td class="k">Progress report</td><td>Status information on execution, deviations, open points, and next steps.</td></tr>' +
    '<tr><td class="k">Order book</td><td>The stock or overview of existing orders as a basis for steering and planning.</td></tr>' +
    '<tr><td class="k">Forecast</td><td>Updated expectation of future performance, revenue, or utilization based on current status.</td></tr>' +
    '<tr><td class="k">Month-end close</td><td>Period-accurate recording and review of relevant business transactions at month end.</td></tr>' +
    '</table>';

  // ===== 8 · Questions for the Employer =====
  CONTENT.de[8] = '<ul class="tight">' +
    '<li>Wie läuft ein typischer Auftrag vom Auftragseingang über die Auswahl der Inspektor:innen bis zu Bericht und Abrechnung?</li>' +
    '<li>Welche Unterlagen müssen vor einem Einsatz zwingend vollständig sein, und wer prüft sie fachlich?</li>' +
    '<li>Wie viele parallele Aufträge oder Inspektionen betreut eine Person typischerweise?</li>' +
    '<li>Wo entstehen heute die häufigsten Verzögerungen: Kundendokumente, Verfügbarkeit, Reporting oder interne Übergaben?</li>' +
    '<li>Welche Systeme nutzen Sie für Aufträge, Dokumente, Rechnungen, Inspektorenpool, Orderbook und Forecast?</li>' +
    '<li>Wie verteilt sich die Tätigkeit zwischen Koordination, Disposition, Dokumentation und Abrechnung?</li>' +
    '<li>Wie international ist die tägliche Kommunikation, und gibt es Reisetätigkeit?</li>' +
    '<li>Wie sieht die Einarbeitung in Industry Services und die kaufmännischen Prozesse konkret aus?</li>' +
    '<li>Woran erkennen Sie nach sechs Monaten, dass jemand in dieser Rolle erfolgreich ist?</li>' +
    '<li>Welche realistischen Entwicklungsschritte gibt es in Richtung Project Development?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Rahmenbedingungen, die geklärt werden müssen</p>' +
    '<ul class="tight">' +
    '<li>Homeoffice-Regelung und Präsenzanforderung;</li>' +
    '<li>Arbeitszeiten und mögliche Zeitzonen bei internationalen Einsätzen;</li>' +
    '<li>Umfang möglicher Reisetätigkeit;</li>' +
    '<li>variable Vergütung oder tarifliche Einordnung;</li>' +
    '<li>Verhältnis von Koordination zu Administration und Abrechnung;</li>' +
    '<li>konkreter Entwicklungspfad aus der operativen Rolle.</li>' +
    '</ul>' +
    '<div class="lead">Formulierung zur Gehaltsfrage: „Auf Grundlage meiner langjährigen Erfahrung in technischen Projekten, der Koordination zwischen Kunden, Fachbereichen und technischen Teams sowie meiner Weiterbildung im Projektmanagement liegt meine Gehaltsvorstellung bei 68.000 Euro brutto im Jahr. Wichtig sind mir daneben die konkrete Verantwortung, die Einarbeitung in den Industry-Bereich und die Entwicklungsperspektive der Position.“</div>';

  CONTENT.en[8] = '<ul class="tight">' +
    '<li>What does a typical order look like, from intake through selecting the inspector(s) to report and billing?</li>' +
    '<li>Which documents must absolutely be complete before a job, and who checks them technically?</li>' +
    '<li>How many parallel orders or inspections does one person typically handle?</li>' +
    '<li>Where do the most frequent delays occur today: client documents, availability, reporting, or internal handoffs?</li>' +
    '<li>Which systems do you use for orders, documents, invoices, the inspector pool, order book, and forecast?</li>' +
    '<li>How is the work split between coordination, dispatch, documentation, and billing?</li>' +
    '<li>How international is day-to-day communication, and is there travel involved?</li>' +
    '<li>What does onboarding into Industry Services and the commercial processes actually look like?</li>' +
    '<li>What tells you, after six months, that someone is succeeding in this role?</li>' +
    '<li>What realistic development steps exist toward Project Development?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Terms to Clarify</p>' +
    '<ul class="tight">' +
    '<li>home-office policy and on-site requirement;</li>' +
    '<li>working hours and possible time zones for international jobs;</li>' +
    '<li>extent of possible travel;</li>' +
    '<li>variable pay or pay-scale classification;</li>' +
    '<li>the ratio of coordination to administration and billing;</li>' +
    '<li>a concrete development path out of the operational role.</li>' +
    '</ul>' +
    '<div class="lead">Salary phrasing: "Based on my years of experience in technical projects, coordinating between clients, business units, and technical teams, and my further training in project management, my salary expectation is €68,000 gross per year. Alongside that, the concrete scope of responsibility, onboarding into the Industry area, and the role\'s development perspective matter to me."</div>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<ul class="tight checklist">' +
    '<li>Langsam anfangen.</li>' +
    '<li><mark>Erst die Frage beantworten, dann das Beispiel.</mark></li>' +
    '<li>Eine kurze Pause vor der Antwort ist erlaubt.</li>' +
    '<li>Nicht versuchen, fehlende Inspektionserfahrung zu verstecken.</li>' +
    '<li>Direktheit mit Kontext und Lösung verbinden.</li>' +
    '<li><mark>Keine Ergebnisse, Zahlen oder Verantwortungen behaupten, die ich nicht sicher vertreten kann.</mark></li>' +
    '<li>Im Gespräch auch prüfen, ob der administrative Anteil und die Entwicklungsperspektive zu mir passen.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Unbedingt noch mit echten Details füllen</p>' +
    '<ul class="tight">' +
    '<li>ein konkretes Projekt mit mehreren parallel beteiligten Parteien;</li>' +
    '<li>eine Situation mit fehlenden oder widersprüchlichen Anforderungen;</li>' +
    '<li>ein echter Priorisierungskonflikt;</li>' +
    '<li>ein Beispiel für eine schwierige Kundenkommunikation;</li>' +
    '<li>ein Beispiel für sorgfältige Dokumentation oder Qualitätssicherung;</li>' +
    '<li>eine kurze englische Vorstellung und typische Termin-/Statussätze.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Mein Schlussgedanke</p>' +
    '<div class="lead">Bureau Veritas gewinnt mit mir keine fertige Industry-Inspektions- oder Buchhaltungsexpertin. Das wäre nicht glaubwürdig. Das Unternehmen gewinnt eine technisch erfahrene, kundenorientierte Koordinatorin, die Informationen nicht nur weiterleitet, sondern klärt; die früh erkennt, wenn Unterlagen, Zuständigkeiten oder Entscheidungen fehlen; und die unterschiedliche Beteiligte so zusammenbringt, dass ein Vorgang verlässlich weitergehen kann. Meine stärkste Passung liegt in technischem Verständnis, Schnittstellenkommunikation, Struktur und Lernfähigkeit. Die branchenspezifischen und kaufmännischen Prozesse sind klar umrissene Lernfelder. Genau diese Kombination sollte ich im Gespräch ruhig, konkret und ohne Übertreibung vertreten.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 4px;">Kernsatz für morgen</p>' +
    '<p>„Informationen klären. Abläufe nachhalten. Menschen verbinden.“</p>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Bureau Veritas Stellenanzeige Ref.-Nr. 213673 (veröffentlicht 18. August 2026); aktualisierte Stellendaten und Bewertung aus dem Bewerbungsordner; Bureau Veritas Deutschland Industry Services; Bureau Veritas Group H1-2026-Ergebnisse (29. Juli 2026); persönliche Beispiele, Stärken und Schwächen aus der finalen ABOUT-YOU-Interviewvorbereitung.</p>';

  CONTENT.en[9] = '<ul class="tight checklist">' +
    '<li>Start slowly.</li>' +
    '<li><mark>Answer the question first, then tell the example.</mark></li>' +
    '<li>A short pause before answering is fine.</li>' +
    '<li>Don\'t try to hide the missing inspection experience.</li>' +
    '<li>Pair directness with context and a solution.</li>' +
    '<li><mark>Don\'t claim results, numbers, or responsibilities I can\'t confidently stand behind.</mark></li>' +
    '<li>Also use the conversation to check whether the administrative share and the development perspective fit me.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Still Needs Real Details Before the Interview</p>' +
    '<ul class="tight">' +
    '<li>a concrete project with several parties involved in parallel;</li>' +
    '<li>a situation with missing or contradictory requirements;</li>' +
    '<li>a real prioritization conflict;</li>' +
    '<li>an example of difficult client communication;</li>' +
    '<li>an example of careful documentation or quality assurance;</li>' +
    '<li>a short English self-introduction and typical status/deadline phrases.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">My Closing Thought</p>' +
    '<div class="lead">Bureau Veritas doesn\'t gain a finished Industry inspection or accounting expert with me — that wouldn\'t be credible. The company gains a technically experienced, client-oriented coordinator who doesn\'t just relay information but clarifies it; who notices early when documents, ownership, or decisions are missing; and who brings different stakeholders together so a case can reliably move forward. My strongest fit is in technical understanding, interface communication, structure, and the ability to learn. The industry-specific and commercial processes are clearly defined learning areas. That\'s exactly the combination I should present calmly, concretely, and without overstatement.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 4px;">Core Line for Tomorrow</p>' +
    '<p>"Clarify information. Keep processes on track. Connect people."</p>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: Bureau Veritas job posting Ref. 213673 (published August 18, 2026); updated job data and assessment from the application folder; Bureau Veritas Germany Industry Services; Bureau Veritas Group H1 2026 results (July 29, 2026); personal examples, strengths, and weaknesses from the final ABOUT YOU interview prep.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · Bureau Veritas · Projektkoordinator Industry",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
