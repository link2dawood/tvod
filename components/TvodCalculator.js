"use client";
import { useMemo, useState } from "react";
import { TABLES, VALIDITY, eur, findBrutto } from "../lib/tables";
import { berechneJSZ } from "../lib/calc";
import { lohnsteuerPap2026 } from "../lib/pap";

const TABLE_KEYS = { E: "vkaE", P: "vkaP", S: "vkaS" };

export default function TvodCalculator({ preset = {} }) {
  const [tarif, setTarif] = useState(preset.tarif || "vka");
  const [tabelle, setTabelle] = useState(preset.tabelle || "E");
  const [gruppe, setGruppe] = useState(preset.gruppe || "E13");
  const [stufe, setStufe] = useState(preset.stufe || 3);
  const [teilzeit, setTeilzeit] = useState(preset.teilzeit || 100);
  const [steuerklasse, setSteuerklasse] = useState(preset.steuerklasse || "1");
  const [bundesland, setBundesland] = useState(preset.bundesland || "NRW");
  const [kirche, setKirche] = useState(preset.kirche || false);
  const [kinder, setKinder] = useState(preset.kinder || false);
  const [vbl, setVbl] = useState(preset.vbl !== undefined ? preset.vbl : true);
  const [zusatzbeitrag, setZusatzbeitrag] = useState(preset.zusatzbeitrag || 2.9);

  const gruppen = tarif === "tvl" ? TABLES.tvlE : TABLES[TABLE_KEYS[tabelle]];
  const tabellenBrutto = findBrutto(tarif, tabelle, gruppe, stufe);
  const brutto = tabellenBrutto === null ? 0 : tabellenBrutto * (teilzeit / 100);

  const netto = useMemo(() => brutto > 0 ? lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse, bundesland, kirchensteuer: kirche, kinder, zusatzbeitrag, vbl }) : null, [brutto, steuerklasse, bundesland, kirche, kinder, zusatzbeitrag, vbl]);
  const jsz = useMemo(() => brutto > 0 ? berechneJSZ({ tarif, gruppeId: gruppe, monatsentgelt: tabellenBrutto || 0, teilzeitProzent: teilzeit }) : null, [tarif, gruppe, tabellenBrutto, teilzeit]);

  function onTarif(v) { setTarif(v); if (v === "tvl") { setTabelle("E"); setGruppe("E13"); } }
  function onTabelle(v) { setTabelle(v); const first = TABLES[TABLE_KEYS[v]][0]; setGruppe(first.id); setStufe(first.stufen[0] === null ? 2 : 1); }

  return (
    <div className="card">
      <div className="banner"><small>{tarif === "tvl" ? VALIDITY.tvl : VALIDITY.vka} · Alle Angaben ohne Gewähr.</small></div>
      <div className="grid">
        <div><label>Tarif</label><select value={tarif} onChange={(e) => onTarif(e.target.value)}><option value="vka">TVöD VKA (Kommunen)</option><option value="bund">TVöD Bund</option><option value="tvl">TV-L (Länder)</option></select></div>
        {tarif !== "tvl" && (<div><label>Tabelle</label><select value={tabelle} onChange={(e) => onTabelle(e.target.value)}><option value="E">E-Tabelle (allgemein)</option><option value="P">P-Tabelle (Pflege)</option><option value="S">S-Tabelle (SuE)</option></select></div>)}
        <div><label>Entgeltgruppe</label><select value={gruppe} onChange={(e) => setGruppe(e.target.value)}>{gruppen.map((g) => (<option key={g.id} value={g.id}>{g.id}</option>))}</select></div>
        <div><label>Stufe</label><select value={stufe} onChange={(e) => setStufe(Number(e.target.value))}>{[1,2,3,4,5,6].map((s) => (<option key={s} value={s}>Stufe {s}</option>))}</select></div>
        <div><label>Beschäftigungsumfang (%)</label><input type="number" min="10" max="100" value={teilzeit} onChange={(e) => setTeilzeit(Number(e.target.value))} /></div>
        <div><label>Steuerklasse</label><select value={steuerklasse} onChange={(e) => setSteuerklasse(e.target.value)}>{["1","2","3","4","5","6"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
        <div><label>Bundesland</label><select value={bundesland} onChange={(e) => setBundesland(e.target.value)}><option value="NRW">Nordrhein-Westfalen</option><option value="BY">Bayern (Kirchensteuer 8 %)</option><option value="BW">Baden-Württemberg (8 %)</option><option value="BE">Berlin</option><option value="SN">Sachsen</option></select></div>
        <div><label>Kirchensteuer</label><select value={kirche ? "ja" : "nein"} onChange={(e) => setKirche(e.target.value === "ja")}><option value="nein">Nein</option><option value="ja">Ja</option></select></div>
        <div><label>Krankenkassen-Zusatzbeitrag (%)</label><input type="number" step="0.1" min="0" max="5" value={zusatzbeitrag} onChange={(e) => setZusatzbeitrag(Number(e.target.value))} /><small>Ø 2,9 % in 2026; der Satz der eigenen Kasse zählt.</small></div>
      </div>
      <div className="grid">
        <div><label><input type="checkbox" checked={kinder} onChange={(e) => setKinder(e.target.checked)} /> Kinder (Pflegeversicherung ohne Zuschlag)</label></div>
        <div><label><input type="checkbox" checked={vbl} onChange={(e) => setVbl(e.target.checked)} /> VBL/ZVK (1,81 %, West) abziehen</label></div>
      </div>
      {tabellenBrutto === null ? (
        <p><strong>Diese Gruppe hat keine Stufe {stufe}.</strong> Beispiel: P 7–P 16 beginnen bei Stufe 2, E 1 beginnt bei Stufe 2. Wähle eine andere Stufe.</p>
      ) : netto && jsz ? (
        <div className="result">
          <div>Tabellenentgelt (Vollzeit): {eur(tabellenBrutto)} · bei {teilzeit} %: {eur(brutto)}</div>
          <div><strong>{eur(netto.nettoMonat)} netto / Monat</strong> · {eur(netto.nettoJahr)} / Jahr · Nettoquote {(netto.nettoquote * 100).toFixed(1)} %</div>
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
            <tr><td>Jahressonderzahlung (brutto, {(jsz.satz * 100).toFixed(2).replace(/\.?0+$/, "")} %)</td><td>{eur(jsz.anteilig)}</td></tr>
          </tbody></table>
          <small>Lohnsteuer nach dem amtlichen BMF-Programmablaufplan 2026 (§ 32a, § 39b EStG), inkl. Vorsorgepauschale und Sondermethode für Steuerklassen V/VI. Nicht enthalten: ELStAM-Freibeträge, Faktorverfahren (IV mit Faktor), private Krankenversicherung, Zulagen, Überstunden, Einmalzahlungen und landesspezifische Kirchensteuer-Kappungen. Die Jahressonderzahlung wird mit dem Novembergehalt ausgezahlt und dort nach dem Jahresverfahren versteuert — hier nur brutto gezeigt. Kinderlosenzuschlag ab 23 angenommen; Sachsen: Pflegeversicherung +1 Punkt beim Arbeitnehmer.</small>
        </div>
      ) : null}
    </div>
  );
}
