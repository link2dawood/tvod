"use client";
import { useMemo, useState } from "react";
import { eur, findBrutto, STUFENLAUFZEIT_JAHRE } from "../../../lib/tables";
import { Breadcrumbs, RelatedLinks } from "../../../components/site";
import { related } from "../../../lib/links";
export default function Page() {
  const [gruppe, setGruppe] = useState("E13");
  const [stufe, setStufe] = useState(1);
  const [start, setStart] = useState("2026-01-01");
  const pfad = useMemo(() => {
    const out = [];
    let datum = new Date(start + "T00:00:00");
    if (isNaN(datum.getTime())) return out;
    for (let s = stufe; s <= 6; s++) {
      const brutto = findBrutto("vka", "E", gruppe, s);
      out.push({ stufe: s, datum: new Date(datum), brutto });
      if (s < 6) { const jahre = STUFENLAUFZEIT_JAHRE[s] || 1; datum = new Date(datum); datum.setFullYear(datum.getFullYear() + jahre); }
    }
    return out;
  }, [gruppe, stufe, start]);
  return (<>
    <Breadcrumbs trail={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Stufenrechner" }]} />
    <h1>TVöD Stufenrechner</h1>
    <p>Regellaufzeiten (§ 16 TVöD): Stufe 1→2 nach 1 Jahr, 2→3 nach 2 Jahren, 3→4 nach 3 Jahren, 4→5 nach 4 Jahren, 5→6 nach 5 Jahren — insgesamt 15 Jahre bis Stufe 6. Teilzeit verlängert die Laufzeit im Regelfall nicht. Die Regeln und Ausnahmen im Detail: <a href="/tvoed/stufenlaufzeit">Stufenlaufzeit-Ratgeber</a>.</p>
    <div className="card"><div className="grid">
      <div><label>Entgeltgruppe (E-Tabelle)</label><input value={gruppe} onChange={(e) => setGruppe(e.target.value)} /></div>
      <div><label>Aktuelle Stufe</label><select value={stufe} onChange={(e) => setStufe(Number(e.target.value))}>{[1,2,3,4,5,6].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
      <div><label>Seit wann in dieser Stufe?</label><input type="date" value={start} onChange={(e) => setStart(e.target.value)} /></div>
    </div>
    <table><thead><tr><th>Stufe</th><th>Erreicht ca.</th><th>Tabellenentgelt (VKA, Vollzeit)</th></tr></thead>
    <tbody>{pfad.map((p) => (<tr key={p.stufe}><td>Stufe {p.stufe}</td><td>{p.datum.toLocaleDateString("de-DE")}</td><td>{eur(p.brutto)}</td></tr>))}</tbody></table>
    <small>Achtung: Für P 7–P 16 gibt es keine Stufe 1, für E 1 beginnt die Tabelle bei Stufe 2. P 7/P 8 erreichen Stufe 3 erst nach 3 Jahren in Stufe 2 (nicht 2) — diese Ausnahme ist in diesem E-Tabellen-Rechner nicht abgebildet, siehe Stufenlaufzeit-Ratgeber. Diese Seite rechnet mit der E-Tabelle als Beispiel — die Laufzeiten gelten im Standardfall auch für P/S.</small></div>
    <RelatedLinks links={related(["/tvoed/stufenlaufzeit", "/tvoed-rechner", "/tvoed/entgelttabelle", "/tvoed/eingruppierung"])} />
  </>);
}
