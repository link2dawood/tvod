"use client";
import { useMemo, useState } from "react";
import { eur } from "../../../lib/tables";
import { lohnsteuerPap2026 } from "../../../lib/pap";
import { berechneJSZ } from "../../../lib/calc";
import { Breadcrumbs, RelatedLinks } from "../../../components/site";
import { related } from "../../../lib/links";
export default function Page() {
  const [vollzeit, setVollzeit] = useState(5709.87);
  const [teilzeit, setTeilzeit] = useState(75);
  const [tarif, setTarif] = useState("vka");
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [kirche, setKirche] = useState(false);
  const [kinder, setKinder] = useState(false);
  const [vbl, setVbl] = useState(true);
  const brutto = vollzeit * (teilzeit / 100);
  const netto = useMemo(() => lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse, kirchensteuer: kirche, kinder, vbl }), [brutto, steuerklasse, kirche, kinder, vbl]);
  const jsz = useMemo(() => berechneJSZ({ tarif, gruppeId: "E13", monatsentgelt: vollzeit, teilzeitProzent: teilzeit }), [tarif, vollzeit, teilzeit]);
  return (<>
    <Breadcrumbs trail={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Teilzeit-Rechner" }]} />
    <h1>TVöD Teilzeit-Rechner</h1>
    <p>Teilzeit im TVöD ist im Kern proportional: Tabellenentgelt, Jahressonderzahlung und die meisten Zulagen werden anteilig zum Beschäftigungsumfang gezahlt. Was sich <em>nicht</em> proportional verhält, ist die Lohnsteuer — sie sinkt wegen der Progression überproportional — und die Stufenlaufzeit: Teilzeit verlängert sie im Regelfall nicht (§ 16). Gib dein Vollzeit-Tabellenentgelt ein (z. B. aus der <a href="/tvoed/entgelttabelle">E-Tabelle</a>), und der Rechner zeigt Teilzeit-Brutto, Netto nach BMF PAP 2026 und anteilige Jahressonderzahlung.</p>
    <div className="card"><div className="grid">
      <div><label>Vollzeit-Tabellenentgelt (€/Monat)</label><input type="number" step="0.01" value={vollzeit} onChange={(e) => setVollzeit(Number(e.target.value))} /></div>
      <div><label>Beschäftigungsumfang (%)</label><input type="number" min="10" max="100" value={teilzeit} onChange={(e) => setTeilzeit(Number(e.target.value))} /></div>
      <div><label>Tarif (für JSZ-Satz)</label><select value={tarif} onChange={(e) => setTarif(e.target.value)}><option value="vka">TVöD VKA (85 %)</option><option value="bund">TVöD Bund (E 13: 75 %)</option><option value="tvl">TV-L (E 13: 46,47 %)</option></select></div>
      <div><label>Steuerklasse</label><select value={steuerklasse} onChange={(e) => setSteuerklasse(e.target.value)}>{["1","2","3","4","5","6"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
    </div>
    <div className="grid">
      <div><label><input type="checkbox" checked={kirche} onChange={(e) => setKirche(e.target.checked)} /> Kirchensteuer</label></div>
      <div><label><input type="checkbox" checked={kinder} onChange={(e) => setKinder(e.target.checked)} /> Kinder</label></div>
      <div><label><input type="checkbox" checked={vbl} onChange={(e) => setVbl(e.target.checked)} /> VBL/ZVK (1,81 %) abziehen</label></div>
    </div>
    <div className="result">
      <div><strong>Teilzeit-Brutto: {eur(brutto)} / Monat</strong> (Vollzeit {eur(vollzeit)} × {teilzeit} %)</div>
      <div><strong>Teilzeit-Netto: {eur(netto.nettoMonat)} / Monat</strong> · Lohnsteuer {eur(netto.lohnsteuerMonat)} · Sozial {eur(netto.sozialMonat)} · VBL {eur(netto.vblMonat)}</div>
      <div>Jahressonderzahlung (brutto, anteilig): {eur(jsz.anteilig)} · Satz {(jsz.satz * 100).toFixed(2)} %</div>
      <small>Annahmen: Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 % — ändere die Eingaben für deinen Fall. Die JSZ ist hier mit dem E-13-Satz des gewählten Tarifs gerechnet; für andere Gruppen gilt der jeweilige Satz (siehe JSZ-Ratgeber).</small>
    </div></div>
    <div className="card"><h2>Beispiel: E 13, Stufe 3 (Vollzeit 5.709,87 €), Steuerklasse I</h2>
    <table><thead><tr><th>Umfang</th><th>Brutto</th><th>Netto (ohne VBL)</th><th>Netto (mit VBL)</th></tr></thead><tbody>
      <tr><td>100 %</td><td>5.709,87 €</td><td>3.486,50 €</td><td>3.383,16 €</td></tr>
      <tr><td>75 %</td><td>4.282,40 €</td><td>2.756,41 €</td><td>2.678,90 €</td></tr>
      <tr><td>50 %</td><td>2.854,93 €</td><td>1.972,35 €</td><td>1.920,68 €</td></tr>
    </tbody></table>
    <h3>Drei Teilzeit-Mythen, die nicht stimmen</h3>
    <p><strong>„Teilzeit verlängert die Stufe.“</strong> Nein — im Regelfall nicht. Die Stufenlaufzeit läuft in Kalenderjahren, unabhängig vom Umfang. <strong>„Die JSZ wird bei Teilzeit noch einmal gekürzt.“</strong> Nein — sie ist bereits proportional, weil sie sich am tatsächlichen (Teilzeit-)Entgelt bemisst. Eine zweite Kürzung gibt es nicht. <strong>„Urlaubstage sinken mit dem Prozentwert.“</strong> Nur bedingt: Urlaub hängt von den Arbeitstagen pro Woche ab, nicht vom Stundenprozentsatz. Wer von 5 auf 4 Tage geht, bekommt 4/5 der Urlaubstage — wer die Stunden auf 5 Tage verteilt, behält die vollen Tage.</p></div>
    <RelatedLinks links={related(["/tvoed-rechner", "/tvoed/stufenlaufzeit", "/tvoed/jahressonderzahlung", "/tvoed/entgelttabelle"])} />
  </>);
}
