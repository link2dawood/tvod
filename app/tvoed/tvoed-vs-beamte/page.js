import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD vs Beamte: Entgelt vs Besoldung, Rente vs Pension, Beihilfe" };
export default function Page() {
  return (
    <GuideShell title="TVöD vs Beamte: Zwei Systeme, ein öffentlicher Dienst" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · Beamtenrecht je nach Bund/Land"
      intro="TVöD-Beschäftigte und Beamte arbeiten oft nebeneinander im selben Amt — aber unter zwei völlig verschiedenen Systemen. Tarifbeschäftigte haben einen Arbeitsvertrag, Entgelt nach Gruppen und Stufen, Sozialabgaben und eine Rente plus Zusatzversorgung. Beamte haben ein öffentlich-rechtliches Dienst- und Treueverhältnis, Besoldung nach A-, B-, W- oder R-Besoldung, keine Sozialabgaben, dafür Beihilfe und Pension. Ein direkter Bruttovergleich täuscht deshalb fast immer."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TVöD vs Beamte" }]}
      relatedLinks={related(["/tvoed/was-ist-tvoed", "/tvoed/vbl-zusatzversorgung", "/tvoed/tvoed-arbeitszeit", "/tvoed/tvoed-urlaub", "/tvoed-rechner"])}
      faq={[
        { frage: "Warum ist das Beamten-Netto oft höher?", antwort: "Weil Beamte keine Beiträge zur gesetzlichen Renten-, Arbeitslosen- und Krankenversicherung zahlen. Vom Brutto gehen nur Lohnsteuer, ggf. Kirchensteuer und der PKV-Beitrag für die Restkostenversicherung ab. Bei vergleichbarem Brutto bleibt deshalb oft mehr netto — vor Abzug der PKV." },
        { frage: "Was ist Beihilfe?", antwort: "Der Dienstherr übernimmt einen Teil der Krankheitskosten — in der Regel 50 % bis 70 %, je nach Familienstand und Land. Den Rest versicherst du privat (Restkostenversicherung). In einigen Ländern gibt es alternativ eine pauschale Beihilfe mit Verbleib in der gesetzlichen Krankenversicherung." },
        { frage: "Was ist besser: Rente + VBL oder Pension?", antwort: "Die Beamtenpension (Ruhegehalt) liegt bei bis zu ca. 71,75 % des letzten ruhegehaltsfähigen Dienstbezugs — in der Regel deutlich über der Kombination aus gesetzlicher Rente und VBL-Betriebsrente. Dafür ist das System weniger flexibel: Ein Wechsel in die Privatwirtschaft ist für Beamte mit Versorgungsnachteilen verbunden." },
        { frage: "Wird meine TVöD-Stufe bei einer Verbeamtung übernommen?", antwort: "Nein — Entgeltgruppen und Stufen werden nicht 1:1 in Besoldungsgruppen und Erfahrungsstufen übertragen. Fördliche Zeiten im öffentlichen Dienst werden bei der Festsetzung der anfänglichen Erfahrungsstufe berücksichtigt, aber es gibt keinen Automatismus." },
        { frage: "Was passiert mit meiner VBL bei einer Verbeamtung?", antwort: "Die Pflichtversicherung endet mit der Ernennung. Bereits erworbene Anwartschaften und Versorgungspunkte bleiben bestehen, sofern die Mindestwartezeit von 60 Monaten erfüllt ist. Eine neue VBL-Versicherung entsteht im Beamtenverhältnis nicht — die Pension übernimmt die Altersversorgung." },
        { frage: "Haben Beamte auch 30 Tage Urlaub?", antwort: "Ja — bei einer 5-Tage-Woche ebenfalls 30 Arbeitstage Erholungsurlaub (Erholungsurlaubsverordnungen des Bundes bzw. der Länder), plus Schwerbehindertenzusatzurlaub von 5 Tagen und ggf. Zusatzurlaub für Schicht/Wechselschicht." },
        { frage: "Können Beamte streiken?", antwort: "Nein — Beamte haben ein Streikverbot als Teil des Dienst- und Treueverhältnisses. Tarifbeschäftigte haben das Streikrecht. Im Gegenzug haben Beamte eine nahezu absolute Arbeitsplatzsicherheit nach der Ernennung auf Lebenszeit." },
      ]}>
      <div className="card"><h2>Systemvergleich im Überblick</h2>
      <table><thead><tr><th>Merkmal</th><th>TVöD-Beschäftigte</th><th>Beamte</th></tr></thead><tbody>
        <tr><td>Rechtsverhältnis</td><td>Arbeitsvertrag (privates Tarifarbeitsrecht)</td><td>Ernennung (öffentlich-rechtliches Dienstverhältnis)</td></tr>
        <tr><td>Bezahlung</td><td>Entgelt: E/P/S-Gruppen + Stufen 1–6</td><td>Besoldung: A/B/W/R-Gruppen + Erfahrungsstufen</td></tr>
        <tr><td>Sozialabgaben</td><td>Voll versicherungspflichtig (Rente, Pflege, ALV, GKV)</td><td>Keine gesetzlichen Sozialabgaben</td></tr>
        <tr><td>Krankenversicherung</td><td>Gesetzliche KV (bzw. freiwillig versichert)</td><td>Beihilfe (50–70 %) + PKV-Restkostenversicherung</td></tr>
        <tr><td>Altersversorgung</td><td>Gesetzliche Rente + VBL/ZVK</td><td>Pension (bis ca. 71,75 % des letzten Dienstbezugs)</td></tr>
        <tr><td>Arbeitszeit</td><td>39 h (TVöD), TV-L je nach Land</td><td>Oft 40–41 h (je nach Land/Bund)</td></tr>
        <tr><td>Urlaub (5-Tage-Woche)</td><td>30 Tage (2026), 31 ab 2027</td><td>30 Tage</td></tr>
        <tr><td>Streikrecht</td><td>Ja</td><td>Nein (Streikverbot)</td></tr>
        <tr><td>Kündigungsschutz</td><td>Tariflicher Kündigungsschutz, nach langer Betriebszugehörigkeit Unkündbarkeit</td><td>Nahezu absolut nach Ernennung auf Lebenszeit</td></tr>
      </tbody></table>
      <p><small>Diese Seite ist ein Systemvergleich, keine Besoldungstabelle: Beamtenbesoldung wird hier bewusst nicht in Euro tabelliert, weil sie je nach Bund/Land, Besoldungsgruppe, Erfahrungsstufe und Familienzuschlag stark variiert. Die vollständigen Besoldungstabellen sind Phase 3 dieser Site und werden nur aus offiziellen Quellen übernommen.</small></p></div>
    </GuideShell>
  );
}
