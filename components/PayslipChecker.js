"use client";
import { useMemo, useState } from "react";
import { eur } from "../lib/tables";
import { lohnsteuerPap2026 } from "../lib/pap";

// Payslip checker: compare the figures on a Lohnabrechnung against PAP 2026.
// Tolerance 0,05 € per line covers cent-rounding differences between payroll
// software (which rounds) and the PAP's cent flooring; anything larger is a
// real difference worth investigating, not rounding.
const TOL = 0.05;
const BBG_KV = 69750 / 12; // 5.812,50 €/Monat

function Zeile({ label, ist, soll, einheit = "€" }) {
  if (ist === "" || ist === null || Number.isNaN(Number(ist))) return null;
  const istNum = Number(ist);
  const diff = istNum - soll;
  const ok = Math.abs(diff) <= TOL;
  return (
    <tr>
      <td>{label}</td>
      <td>{eur(istNum)}</td>
      <td>{eur(soll)}</td>
      <td style={{ color: ok ? "inherit" : "#b00" }}>{diff >= 0 ? "+" : "−"} {eur(Math.abs(diff)).replace("-", "")}</td>
      <td>{ok ? "✓ stimmt" : "⚠ abweichend"}</td>
    </tr>
  );
}

export default function PayslipChecker() {
  const [brutto, setBrutto] = useState(4000);
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [bundesland, setBundesland] = useState("NRW");
  const [kirche, setKirche] = useState(false);
  const [kinder, setKinder] = useState(false);
  const [vbl, setVbl] = useState(false);
  const [zusatzbeitrag, setZusatzbeitrag] = useState(2.9);
  const [abrechnung, setAbrechnung] = useState({ lst: "", soli: "", kirche: "", rv: "", kv: "", pv: "", av: "", vbl: "", netto: "" });

  const setA = (k) => (e) => setAbrechnung({ ...abrechnung, [k]: e.target.value });
  const erwartet = useMemo(() => brutto > 0 ? lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse, bundesland, kirchensteuer: kirche, kinder, zusatzbeitrag, vbl }) : null, [brutto, steuerklasse, bundesland, kirche, kinder, zusatzbeitrag, vbl]);

  const abweichungen = useMemo(() => {
    if (!erwartet) return [];
    const map = { lst: erwartet.lohnsteuerMonat, soli: erwartet.soliMonat, kirche: erwartet.kircheMonat, rv: erwartet.rv, kv: erwartet.kv, pv: erwartet.pv, av: erwartet.av, vbl: erwartet.vblMonat, netto: erwartet.nettoMonat };
    return Object.entries(map).filter(([k, soll]) => abrechnung[k] !== "" && !Number.isNaN(Number(abrechnung[k])) && Math.abs(Number(abrechnung[k]) - soll) > TOL).map(([k, soll]) => ({ k, ist: Number(abrechnung[k]), soll }));
  }, [erwartet, abrechnung]);

  const diagnosen = useMemo(() => {
    if (!erwartet) return [];
    const d = [];
    const hat = (k) => abrechnung[k] !== "" && !Number.isNaN(Number(abrechnung[k]));
    const kvBasis = Math.min(brutto, BBG_KV);
    if (hat("kv") && Math.abs(Number(abrechnung.kv) - erwartet.kv) > TOL && kvBasis > 0) {
      const impliziert = (Number(abrechnung.kv) / kvBasis - 0.073) * 200;
      d.push(`Krankenversicherung: Deine Abrechnung deutet auf einen Zusatzbeitrag von ${impliziert.toFixed(2).replace(".", ",")} % hin (eingestellt: ${zusatzbeitrag} %). Häufigste Ursache: Die Kasse hat den Satz zum Jahreswechsel geändert oder du hast die Kasse gewechselt — der neue Satz gilt ab dem Wechselmonat.`);
    }
    if (hat("pv") && Math.abs(Number(abrechnung.pv) - erwartet.pv) > TOL && kvBasis > 0) {
      const impliziert = (Number(abrechnung.pv) / kvBasis) * 100;
      const erwartetSatz = (erwartet.pv / kvBasis) * 100;
      d.push(`Pflegeversicherung: Deine Abrechnung rechnet mit ${impliziert.toFixed(2).replace(".", ",")} % statt der erwarteten ${erwartetSatz.toFixed(2).replace(".", ",")} %. Prüfe: ${kinder ? "Wird der Kinderlosenzuschlag (0,6 %) berechnet, obwohl Kinder angegeben sind? Dann stimmen die ELStAM-Daten nicht." : "Fehlt der Kinderlosenzuschlag (0,6 %) oder — in Sachsen — der Sachsen-Aufschlag (+1 Punkt)?"}`);
    }
    if (hat("vbl") && vbl && Number(abrechnung.vbl) === 0) d.push("VBL/ZVK: Du hast angegeben, im öffentlichen Dienst zu arbeiten, aber auf der Abrechnung steht 0 € VBL. Im TVöD ist die Zusatzversorgung Pflicht — ein fehlender VBL-Abzug ist fast immer ein Fehler in der Abrechnung, kein Vorteil (die Ansprüche fehlen dann auch).");
    if (hat("vbl") && !vbl && Number(abrechnung.vbl) > 0) d.push("VBL/ZVK: Auf der Abrechnung wird VBL abgezogen, obwohl du angegeben hast, nicht im öffentlichen Dienst zu arbeiten. Prüfe, ob dein Arbeitgeber doch eine betriebliche Altersversorgung über VBL/ZVK abführt — oder ob der Abzug zu einer anderen Versorgung gehört.");
    if (hat("kirche") && !kirche && Number(abrechnung.kirche) > 0) d.push("Kirchensteuer: Du hast angegeben, keine Kirchensteuer zu zahlen, aber die Abrechnung zieht Kirchensteuer ab. Nach einem Kirchenaustritt braucht das Finanzamt/der Arbeitgeber die ELStAM-Änderung — sie wirkt erst ab dem Folgemonat.");
    if (hat("kirche") && kirche && Number(abrechnung.kirche) === 0) d.push("Kirchensteuer: Du hast Kirchensteuer angegeben, aber die Abrechnung zeigt 0 €. Mögliche Ursachen: Kirchensteuer-Kappung (in einigen Bundesländern wird die Kirchensteuer bei hohem Einkommen gedeckelt — die Kappung bildet der Rechner nicht ab) oder fehlende ELStAM-Daten.");
    if (hat("lst") && Math.abs(Number(abrechnung.lst) - erwartet.lohnsteuerMonat) > TOL) d.push("Lohnsteuer: Die häufigsten Ursachen sind ein ELStAM-Freibetrag (z. B. für Fahrten zur Arbeit), das Faktorverfahren (IV mit Faktor), eine Einmalzahlung in diesem Monat (Weihnachtsgeld, Bonus, Jahressonderzahlung im November — die wird nach dem Jahresverfahren versteuert und verzerrt den Monat) oder eine falsche Steuerklasse in den ELStAM-Daten.");
    if (hat("soli") && Math.abs(Number(abrechnung.soli) - erwartet.soliMonat) > TOL) d.push("Solidaritätszuschlag: Der Soli hängt von der Bemessungsgrundlage (JBMG) ab — bei Kindern wird der Kinderfreibetrag abgezogen. Wenn deine Kinder in den ELStAM-Daten fehlen (oder fälschlich eingetragen sind), weicht der Soli ab, obwohl die Lohnsteuer stimmt.");
    if ((hat("rv") && Math.abs(Number(abrechnung.rv) - erwartet.rv) > TOL) || (hat("av") && Math.abs(Number(abrechnung.av) - erwartet.av) > TOL)) d.push("Renten-/Arbeitslosenversicherung: Beide sind an die Beitragsbemessungsgrenze (8.450 €/Monat) gekoppelt. Weicht der Wert ab, prüfe: Midijob-Übergangsbereich (ermäßigte Basis), mehrere Jobs (die Grenze gilt pro Beschäftigung, nicht insgesamt) oder ein Arbeitgeberwechsel mitten im Monat.");
    const summe = ["lst","soli","kirche","rv","kv","pv","av","vbl"].filter(hat).reduce((s, k) => s + Number(abrechnung[k]), 0);
    if (hat("netto") && ["lst","soli","kirche","rv","kv","pv","av","vbl"].every(hat)) {
      const rechnerisch = brutto - summe;
      if (Math.abs(rechnerisch - Number(abrechnung.netto)) > 0.10) d.push(`Rechenprobe: Brutto (${eur(brutto)}) minus deine eingegebenen Abzüge (${eur(summe)}) ergibt ${eur(rechnerisch)}, aber dein eingegebenes Netto ist ${eur(Number(abrechnung.netto))}. Deine Abrechnung geht rechnerisch nicht auf — prüfe, ob eine Position fehlt (z. B. Entgeltumwandlung, vermögenswirksame Leistungen, Sachbezug, Pfändung) oder ob du eine Zahl falsch abgelesen hast.`);
    }
    return d;
  }, [erwartet, abrechnung, brutto, kinder, kirche, vbl, zusatzbeitrag]);

  return (
    <div className="card">
      <div className="banner"><small>Vergleich gegen BMF Programmablaufplan 2026 · Toleranz 0,05 € pro Position (Rundung) · Nur laufendes Gehalt, keine Einmalzahlungen.</small></div>
      <h3>Schritt 1: Deine Angaben (so, wie sie in den ELStAM-Daten stehen sollten)</h3>
      <div className="grid">
        <div><label>Brutto / Monat (€)</label><input type="number" min="1" step="50" value={brutto} onChange={(e) => setBrutto(Number(e.target.value))} /></div>
        <div><label>Steuerklasse</label><select value={steuerklasse} onChange={(e) => setSteuerklasse(e.target.value)}>{["1","2","3","4","5","6"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
        <div><label>Bundesland</label><select value={bundesland} onChange={(e) => setBundesland(e.target.value)}><option value="NRW">Nordrhein-Westfalen</option><option value="BY">Bayern (Kirchensteuer 8 %)</option><option value="BW">Baden-Württemberg (8 %)</option><option value="BE">Berlin</option><option value="SN">Sachsen</option></select></div>
        <div><label>Kirchensteuer</label><select value={kirche ? "ja" : "nein"} onChange={(e) => setKirche(e.target.value === "ja")}><option value="nein">Nein</option><option value="ja">Ja</option></select></div>
        <div><label>Krankenkassen-Zusatzbeitrag (%)</label><input type="number" step="0.1" min="0" max="5" value={zusatzbeitrag} onChange={(e) => setZusatzbeitrag(Number(e.target.value))} /></div>
      </div>
      <div className="grid">
        <div><label><input type="checkbox" checked={kinder} onChange={(e) => setKinder(e.target.checked)} /> Kinder (Pflegeversicherung ohne Zuschlag)</label></div>
        <div><label><input type="checkbox" checked={vbl} onChange={(e) => setVbl(e.target.checked)} /> Öffentlicher Dienst (VBL/ZVK 1,81 % erwartet)</label></div>
      </div>
      <h3>Schritt 2: Werte von deiner Gehaltsabrechnung (leer lassen, was nicht draufsteht)</h3>
      <div className="grid">
        <div><label>Lohnsteuer (€)</label><input type="number" step="0.01" value={abrechnung.lst} onChange={setA("lst")} /></div>
        <div><label>Solidaritätszuschlag (€)</label><input type="number" step="0.01" value={abrechnung.soli} onChange={setA("soli")} /></div>
        <div><label>Kirchensteuer (€)</label><input type="number" step="0.01" value={abrechnung.kirche} onChange={setA("kirche")} /></div>
        <div><label>Rentenversicherung (€)</label><input type="number" step="0.01" value={abrechnung.rv} onChange={setA("rv")} /></div>
        <div><label>Krankenversicherung (€)</label><input type="number" step="0.01" value={abrechnung.kv} onChange={setA("kv")} /></div>
        <div><label>Pflegeversicherung (€)</label><input type="number" step="0.01" value={abrechnung.pv} onChange={setA("pv")} /></div>
        <div><label>Arbeitslosenversicherung (€)</label><input type="number" step="0.01" value={abrechnung.av} onChange={setA("av")} /></div>
        <div><label>VBL/ZVK (€)</label><input type="number" step="0.01" value={abrechnung.vbl} onChange={setA("vbl")} /></div>
        <div><label>Netto / Auszahlungsbetrag (€)</label><input type="number" step="0.01" value={abrechnung.netto} onChange={setA("netto")} /></div>
      </div>
      {erwartet && abweichungen.length === 0 && Object.values(abrechnung).some((v) => v !== "") ? (
        <div className="result"><strong>✓ Deine Abrechnung stimmt mit dem PAP 2026 überein</strong> — alle eingegebenen Positionen liegen innerhalb der Rundungstoleranz von 0,05 €.</div>
      ) : erwartet && abweichungen.length > 0 ? (
        <div className="result"><strong>{abweichungen.length} {abweichungen.length === 1 ? "Position weicht" : "Positionen weichen"} ab</strong> — das ist noch kein Beweis für einen Fehler, aber jede Abweichung unten hat eine wahrscheinliche Ursache. Beginne mit der größten Differenz.</div>
      ) : null}
      {erwartet && Object.values(abrechnung).some((v) => v !== "") ? (
        <div className="result">
          <table><thead><tr><th>Position</th><th>Deine Abrechnung</th><th>Erwartet (PAP 2026)</th><th>Differenz</th><th>Status</th></tr></thead><tbody>
            <Zeile label="Lohnsteuer" ist={abrechnung.lst} soll={erwartet.lohnsteuerMonat} />
            <Zeile label="Solidaritätszuschlag" ist={abrechnung.soli} soll={erwartet.soliMonat} />
            <Zeile label="Kirchensteuer" ist={abrechnung.kirche} soll={erwartet.kircheMonat} />
            <Zeile label="Rentenversicherung (9,3 %)" ist={abrechnung.rv} soll={erwartet.rv} />
            <Zeile label="Krankenversicherung" ist={abrechnung.kv} soll={erwartet.kv} />
            <Zeile label="Pflegeversicherung" ist={abrechnung.pv} soll={erwartet.pv} />
            <Zeile label="Arbeitslosenversicherung (1,3 %)" ist={abrechnung.av} soll={erwartet.av} />
            <Zeile label="VBL/ZVK" ist={abrechnung.vbl} soll={erwartet.vblMonat} />
            <Zeile label="Netto" ist={abrechnung.netto} soll={erwartet.nettoMonat} />
          </tbody></table>
          {diagnosen.length > 0 && (<div><h3>Was die Abweichungen wahrscheinlich bedeuten</h3><ul>{diagnosen.map((d, i) => (<li key={i}>{d}</li>))}</ul></div>)}
          <small>Der Vergleich gilt nur für laufendes Gehalt in einem normalen Monat. Monate mit Einmalzahlungen (Weihnachtsgeld, Bonus, Jahressonderzahlung im November), Freibeträgen, Faktorverfahren, Kirchensteuer-Kappung oder Midijob-Regeln weichen legitim ab — die Diagnosen oben nennen das jeweils. Schätzung, keine Lohnabrechnung; bei einem vermuteten Fehler sprich zuerst mit der Personalabteilung, dann mit dem Finanzamt/der Krankenkasse.</small>
        </div>
      ) : null}
    </div>
  );
}
