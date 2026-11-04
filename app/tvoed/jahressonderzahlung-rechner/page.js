"use client";
import { useMemo, useState } from "react";
import { eur, findBrutto } from "../../../lib/tables";
import { berechneJSZ } from "../../../lib/calc";
import { Breadcrumbs, RelatedLinks } from "../../../components/site";
import { related } from "../../../lib/links";
export default function Page() {
  const [tarif, setTarif] = useState("vka");
  const [gruppe, setGruppe] = useState("E13");
  const [stufe, setStufe] = useState(3);
  const [teilzeit, setTeilzeit] = useState(100);
  const [monate, setMonate] = useState(12);
  const tabellenBrutto = findBrutto(tarif, "E", gruppe, stufe) || 0;
  const jsz = useMemo(() => berechneJSZ({ tarif, gruppeId: gruppe, monatsentgelt: tabellenBrutto, teilzeitProzent: teilzeit, monateMitAnspruch: monate }), [tarif, gruppe, tabellenBrutto, teilzeit, monate]);
  return (<>
    <Breadcrumbs trail={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Jahressonderzahlung-Rechner" }]} />
    <h1>TVöD Jahressonderzahlung-Rechner 2026</h1>
    <p>Weihnachtsgeld nach § 20 TVöD: VKA einheitlich 85 %, Bund gestaffelt 95/90/75 %, TV-L je nach Gruppe 32–88 %. Basis ist im Regelfall der Durchschnitt Juli–September, Auszahlung mit dem Novembergehalt, Anspruch bei Beschäftigung am 1. Dezember. Die Regeln im Detail stehen im <a href="/tvoed/jahressonderzahlung">Jahressonderzahlung-Ratgeber</a>.</p>
    <div className="card"><div className="grid">
      <div><label>Tarif</label><select value={tarif} onChange={(e) => setTarif(e.target.value)}><option value="vka">TVöD VKA</option><option value="bund">TVöD Bund</option><option value="tvl">TV-L</option></select></div>
      <div><label>Entgeltgruppe (E-Beispiel)</label><input value={gruppe} onChange={(e) => setGruppe(e.target.value)} placeholder="z. B. E13, P7" /></div>
      <div><label>Stufe</label><select value={stufe} onChange={(e) => setStufe(Number(e.target.value))}>{[1,2,3,4,5,6].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
      <div><label>Teilzeit (%)</label><input type="number" value={teilzeit} onChange={(e) => setTeilzeit(Number(e.target.value))} /></div>
      <div><label>Monate mit Entgeltanspruch</label><input type="number" min="0" max="12" value={monate} onChange={(e) => setMonate(Number(e.target.value))} /></div>
    </div>
    <div className="result"><div>Tabellenentgelt (E-Tabelle, Vollzeit): {eur(tabellenBrutto)}</div><div><strong>{eur(jsz.anteilig)} Jahressonderzahlung (brutto)</strong></div><div>Satz: {(jsz.satz * 100).toFixed(2)} % · Vollzeit-Volljahr: {eur(jsz.voll)}</div><small>Für P-Gruppen gilt bei VKA: P 5–P 8 = 90 %, sonst 85 %. Diese Seite nutzt für die Tabellenwerte die E-Tabelle als Beispiel — gib für Pflege/SuE den Monatsbetrag über den Haupt-Rechner ein, oder wähle die Gruppe im Haupt-Rechner und lies die JSZ dort ab.</small></div></div>
    <div className="card"><h2>Beispiel: E 13, Stufe 3 — drei Tarife, drei Weihnachtsgelder</h2>
    <table><thead><tr><th>Tarif</th><th>Monatsbrutto</th><th>Satz</th><th>JSZ brutto</th></tr></thead><tbody>
      <tr><td>TVöD VKA</td><td>5.709,87 €</td><td>85 %</td><td>4.853,39 €</td></tr>
      <tr><td>TVöD Bund</td><td>5.709,87 €</td><td>75 % (E 13–15)</td><td>4.282,40 €</td></tr>
      <tr><td>TV-L</td><td>5.366,89 €</td><td>46,47 % (E 12–13)</td><td>2.493,99 €</td></tr>
    </tbody></table><p><small>Die JSZ wird im November mit dem Gehalt versteuert (Jahresverfahren für sonstige Bezüge) — der Bruttobetrag hier ist also nicht das, was netto ankommt. Teilzeit und Monate ohne Entgeltanspruch kürzen anteilig.</small></p></div>
    <RelatedLinks links={related(["/tvoed/jahressonderzahlung", "/tvoed-rechner", "/tvoed/tvoed-vs-tv-l", "/tvoed/teilzeit-rechner"])} />
  </>);
}
