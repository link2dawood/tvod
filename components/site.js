import { PHASE1, PHASE2 } from "../lib/links";

export function Breadcrumbs({ trail }) {
  // trail: [{label, href?}] — last item is the current page (no link).
  return (
    <nav aria-label="Brotkrumen" style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: 12 }}>
      <a href="/">Start</a>
      {trail.map((t, i) => (
        <span key={i}> › {t.href ? <a href={t.href}>{t.label}</a> : <span>{t.label}</span>}</span>
      ))}
    </nav>
  );
}

export function RelatedLinks({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="card">
      <h2>Weiterführend</h2>
      <ul>
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a> — {l.desc}</li>
        ))}
      </ul>
    </div>
  );
}

export function Faq({ items }) {
  if (!items || items.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question", name: q.frage,
      acceptedAnswer: { "@type": "Answer", text: q.antwort },
    })),
  };
  return (
    <div className="card">
      <h2>Häufige Fragen</h2>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {items.map((q, i) => (
        <div key={i}><h3>{q.frage}</h3><p>{q.antwort}</p></div>
      ))}
    </div>
  );
}

export function GuideShell({ title, intro, validity, crumbs, children, faq, relatedLinks, stand = "Stand: November 2026" }) {
  return (
    <>
      <Breadcrumbs trail={crumbs} />
      <h1>{title}</h1>
      <div className="banner"><small>{validity} · {stand}</small></div>
      <p>{intro}</p>
      {children}
      <div className="card">
        <h2>Quellen und Hinweis</h2>
        <p><small>Quellen: VKA-Tarifeinigung 06.04.2025 und dbb/VKA-Tabellen (Tabellenwerte), BMF-Programmablaufplan 2026 (Lohnsteuer), § 16/§ 17/§ 20 TVöD und TV-L (Stufen, Jahressonderzahlung). Sekundärquellen (oeffentlicher-dienst.info, kommunalforum.de) nur zur Gegenprüfung. Alle Angaben ohne Gewähr — Schätzung, keine Lohnabrechnung, keine Steuer- oder Rechtsberatung. Zulagen, Überstunden und individuelle Freibeträge sind in den Netto-Beispielen nicht enthalten, sofern nicht ausdrücklich genannt.</small></p>
      </div>
      <Faq items={faq} />
      <RelatedLinks links={relatedLinks} />
    </>
  );
}

export function HubIndex() {
  const gruppen = ["Rechner", "Tabellen", "Ratgeber", "Gruppen & Berufe"];
  const phase2Gruppen = ["Gruppen", "Berufe", "Ratgeber"];
  return (
    <div className="card">
      <h2>Alle TVöD-Seiten im Überblick</h2>
      <h3>Phase 1</h3>
      {gruppen.map((g) => (
        <div key={g}>
          <h3>{g}</h3>
          <ul>
            {PHASE1.filter((p) => p.gruppe === g).map((p) => (
              <li key={p.href}><a href={p.href}>{p.label}</a> — {p.desc}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Phase 2</h3>
      {phase2Gruppen.map((g) => (
        <div key={g}>
          <h3>{g}</h3>
          <ul>
            {PHASE2.filter((p) => p.gruppe === g).map((p) => (
              <li key={p.href}><a href={p.href}>{p.label}</a> — {p.desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
