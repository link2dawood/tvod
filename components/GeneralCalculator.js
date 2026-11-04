"use client";
import { useMemo, useState } from "react";
import { eur } from "../lib/tables";
import { lohnsteuerPap2026 } from "../lib/pap";

// General (non-TVöD) Brutto-Netto calculator: any monthly gross, PAP 2026.
// No table, no JSZ, no VBL by default — VBL is opt-in for public-sector cases.
export default function GeneralCalculator({ preset = {} }) {
  const [brutto, setBrutto] = useState(preset.brutto || 4000);
  const [steuerklasse, setSteuerklasse] = useState(preset.steuerklasse || "1");
  const [bundesland, setBundesland] = useState(preset.bundesland || "NRW");
  const [kirche, setKirche] = useState(preset.kirche || false);
  const [kinder, setKinder] = useState(preset.kinder || false);
  const [vbl, setVbl] = useState(preset.vbl || false);
  const [zusatzbeitrag, setZusatzbeitrag] = useState(preset.zusatzbeitrag || 2.9);

  const netto = useMemo(() => brutto > 0 ? lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse, bundesland, kirchensteuer: kirche, kinder, zusatzbeitrag, vbl }) : null, [brutto, steuerklasse, bundesland, kirche, kinder, zusatzbeitrag, vbl]);

  return (
    <div className="card">
      <div className="banner"><small>BMF Programmablaufplan 2026 · Monatsnetto ohne Einmalzahlungen · Alle Angaben ohne Gewähr.</small></div>
      <div className="grid">
        <div><label>Brutto / Monat (€)</label><input type="number" min="1" step="50" value={brutto} onChange={(e) => setBrutto(Number(e.target.value))} /></div>
        <div><label>Steuerklasse</label><select value={steuerklasse} onChange={(e) => setSteuerklasse(e.target.value)}>{["1","2","3","4","5","6"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
        <div><label>Bundesland</label><select value={bundesland} onChange={(e) => setBundesland(e.target.value)}><option value="NRW">Nordrhein-Westfalen</option><option value="BY">Bayern (Kirchensteuer 8 %)</option><option value="BW">Baden-Württemberg (8 %)</option><option value="BE">Berlin</option><option value="SN">Sachsen</option></select></div>
        <div><label>Kirchensteuer</label><select value={kirche ? "ja" : "nein"} onChange={(e) => setKirche(e.target.value === "ja")}><option value="nein">Nein</option><option value="ja">Ja</option></select></div>
        <div><label>Krankenkassen-Zusatzbeitrag (%)</label><input type="number" step="0.1" min="0" max="5" value={zusatzbeitrag} onChange={(e) => setZusatzbeitrag(Number(e.target.value))} /></div>
      </div>
      <div className="grid">
        <div><label><input type="checkbox" checked={kinder} onChange={(e) => setKinder(e.target.checked)} /> Kinder (Pflegeversicherung ohne Zuschlag)</label></div>
        <div><label><input type="checkbox" checked={vbl} onChange={(e) => setVbl(e.target.checked)} /> VBL/ZVK (1,81 %, West) abziehen — nur öffentlicher Dienst</label></div>
      </div>
      {netto ? (
        <div className="result">
          <div><strong>{eur(netto.nettoMonat)} netto / Monat</strong> bei {eur(brutto)} brutto · {eur(netto.nettoJahr)} / Jahr · Nettoquote {(netto.nettoquote * 100).toFixed(1)} %</div>
          <div><small>Zu versteuerndes Einkommen (Jahr): {eur(netto.zve)} · Vorsorgepauschale (Jahr): {eur(netto.vorsorgepauschaleJahr)} · Bemessungsgrundlage Soli/Kirche (JBMG, Jahr): {eur(netto.jbmgJahr)}</small></div>
          <table><tbody>
            <tr><td>Lohnsteuer</td><td>− {eur(netto.lohnsteuerMonat)}</td></tr>
            <tr><td>Solidaritätszuschlag</td><td>− {eur(netto.soliMonat)}</td></tr>
            <tr><td>Kirchensteuer</td><td>− {eur(netto.kircheMonat)}</td></tr>
            <tr><td>Rentenversicherung (9,3 %)</td><td>− {eur(netto.rv)}</td></tr>
            <tr><td>Krankenversicherung</td><td>− {eur(netto.kv)}</td></tr>
            <tr><td>Pflegeversicherung</td><td>− {eur(netto.pv)}</td></tr>
            <tr><td>Arbeitslosenversicherung (1,3 %)</td><td>− {eur(netto.av)}</td></tr>
            <tr><td>VBL/ZVK</td><td>− {eur(netto.vblMonat)}</td></tr>
          </tbody></table>
          <small>Lohnsteuer nach dem amtlichen BMF-Programmablaufplan 2026 (§ 32a, § 39b EStG). Nicht enthalten: ELStAM-Freibeträge, Faktorverfahren (IV mit Faktor), private Krankenversicherung, Zulagen, Überstunden, Einmalzahlungen (Weihnachtsgeld, Boni — werden nach dem Jahresverfahren versteuert), Minijob-/Midijob-Sonderregeln und landesspezifische Kirchensteuer-Kappungen. Kinderlosenzuschlag ab 23 angenommen; Sachsen: Pflegeversicherung +1 Punkt beim Arbeitnehmer. Schätzung, keine Lohnabrechnung. Im öffentlichen Dienst (TVöD) nutze zusätzlich den <a href="/tvoed-rechner">TVöD-Rechner</a> (mit VBL und Jahressonderzahlung).</small>
        </div>
      ) : (<p>Gib ein Brutto über 0 € ein.</p>)}
    </div>
  );
}
