"use client";
import { useMemo, useState } from "react";
import { eur } from "../lib/tables";
import { lohnsteuerPap2026 } from "../lib/pap";
import { findeBruttoAusNetto, aufgerundet } from "../lib/reverse";

export default function ReverseCalculator() {
  const [zielNetto, setZielNetto] = useState(3000);
  const [teilzeit, setTeilzeit] = useState(100);
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [bundesland, setBundesland] = useState("NRW");
  const [kirche, setKirche] = useState(false);
  const [kinder, setKinder] = useState(false);
  const [vbl, setVbl] = useState(true);
  const [zusatzbeitrag, setZusatzbeitrag] = useState(2.9);

  const ergebnis = useMemo(() => {
    if (!(zielNetto > 0) || !(teilzeit > 0) || teilzeit > 100) return null;
    return findeBruttoAusNetto({ zielNetto, steuerklasse, bundesland, kirchensteuer: kirche, kinder, zusatzbeitrag, vbl });
  }, [zielNetto, steuerklasse, bundesland, kirche, kinder, zusatzbeitrag, vbl]);

  const vollzeitBrutto = ergebnis && teilzeit < 100 ? ergebnis.brutto / (teilzeit / 100) : null;
  const runden = ergebnis ? [100, 250, 500].map((schritt) => {
    const brutto = aufgerundet(ergebnis.brutto, schritt);
    const netto = lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse, bundesland, kirchensteuer: kirche, kinder, zusatzbeitrag, vbl }).nettoMonat;
    return { schritt, brutto, netto };
  }) : [];

  return (
    <div className="card">
      <div className="banner"><small>BMF Programmablaufplan 2026 · Monatsnetto ohne Jahressonderzahlung · Alle Angaben ohne Gewähr.</small></div>
      <div className="grid">
        <div><label>Ziel-Netto / Monat (€)</label><input type="number" min="1" step="50" value={zielNetto} onChange={(e) => setZielNetto(Number(e.target.value))} /></div>
        <div><label>Beschäftigungsumfang (%)</label><input type="number" min="10" max="100" value={teilzeit} onChange={(e) => setTeilzeit(Number(e.target.value))} /><small>Das Ziel-Netto gilt für diesen Umfang; das Vollzeit-Äquivalent wird unten gezeigt.</small></div>
        <div><label>Steuerklasse</label><select value={steuerklasse} onChange={(e) => setSteuerklasse(e.target.value)}>{["1","2","3","4","5","6"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
        <div><label>Bundesland</label><select value={bundesland} onChange={(e) => setBundesland(e.target.value)}><option value="NRW">Nordrhein-Westfalen</option><option value="BY">Bayern (Kirchensteuer 8 %)</option><option value="BW">Baden-Württemberg (8 %)</option><option value="BE">Berlin</option><option value="SN">Sachsen</option></select></div>
        <div><label>Kirchensteuer</label><select value={kirche ? "ja" : "nein"} onChange={(e) => setKirche(e.target.value === "ja")}><option value="nein">Nein</option><option value="ja">Ja</option></select></div>
        <div><label>Krankenkassen-Zusatzbeitrag (%)</label><input type="number" step="0.1" min="0" max="5" value={zusatzbeitrag} onChange={(e) => setZusatzbeitrag(Number(e.target.value))} /></div>
      </div>
      <div className="grid">
        <div><label><input type="checkbox" checked={kinder} onChange={(e) => setKinder(e.target.checked)} /> Kinder (Pflegeversicherung ohne Zuschlag)</label></div>
        <div><label><input type="checkbox" checked={vbl} onChange={(e) => setVbl(e.target.checked)} /> VBL/ZVK (1,81 %, West) abziehen</label></div>
      </div>
      {ergebnis ? (
        <div className="result">
          <div><strong>Benötigtes Brutto: {eur(ergebnis.brutto)} / Monat</strong> {teilzeit < 100 ? `bei ${teilzeit} %` : "(Vollzeit)"} — ergibt {eur(ergebnis.nettoMonat)} netto (Ziel: {eur(zielNetto)})</div>
          {vollzeitBrutto && (<div>Vollzeit-Äquivalent: <strong>{eur(vollzeitBrutto)} / Monat</strong> — das ist das Tabellenentgelt, das du bei 100 % brauchst, um bei {teilzeit} % auf {eur(zielNetto)} netto zu kommen.</div>)}
          <div><small>Nettoquote {(ergebnis.nettoquote * 100).toFixed(1)} % · Zu versteuerndes Einkommen (Jahr): {eur(ergebnis.zve)} · Vorsorgepauschale (Jahr): {eur(ergebnis.vorsorgepauschaleJahr)}</small></div>
          <table><tbody>
            <tr><td>Lohnsteuer</td><td>− {eur(ergebnis.lohnsteuerMonat)}</td></tr>
            <tr><td>Solidaritätszuschlag</td><td>− {eur(ergebnis.soliMonat)}</td></tr>
            <tr><td>Kirchensteuer</td><td>− {eur(ergebnis.kircheMonat)}</td></tr>
            <tr><td>Rentenversicherung (9,3 %)</td><td>− {eur(ergebnis.rv)}</td></tr>
            <tr><td>Krankenversicherung</td><td>− {eur(ergebnis.kv)}</td></tr>
            <tr><td>Pflegeversicherung</td><td>− {eur(ergebnis.pv)}</td></tr>
            <tr><td>Arbeitslosenversicherung (1,3 %)</td><td>− {eur(ergebnis.av)}</td></tr>
            <tr><td>VBL/ZVK</td><td>− {eur(ergebnis.vblMonat)}</td></tr>
          </tbody></table>
          <h3>Für die Verhandlung: aufgerundet</h3>
          <table><thead><tr><th>Brutto fordern (aufgerundet)</th><th>Netto, das dabei herauskommt</th><th>Mehr als Ziel</th></tr></thead><tbody>
            {runden.map((r) => (<tr key={r.schritt}><td>{eur(r.brutto)} (nächste {r.schritt} €)</td><td>{eur(r.netto)}</td><td>+ {eur(r.netto - zielNetto)}</td></tr>))}
          </tbody></table>
          <small>Das Ergebnis ist ein Monatsnetto ohne Jahressonderzahlung, Zulagen und Überstunden — die JSZ kommt im November hinzu und wird dort versteuert. Nicht enthalten: ELStAM-Freibeträge, Faktorverfahren (IV mit Faktor), private Krankenversicherung, landesspezifische Kirchensteuer-Kappungen. Kinderlosenzuschlag ab 23 angenommen; Sachsen: Pflegeversicherung +1 Punkt beim Arbeitnehmer. Schätzung, keine Lohnabrechnung.</small>
        </div>
      ) : (<p>Gib ein Ziel-Netto über 0 € und einen Beschäftigungsumfang zwischen 10 % und 100 % ein.</p>)}
    </div>
  );
}
