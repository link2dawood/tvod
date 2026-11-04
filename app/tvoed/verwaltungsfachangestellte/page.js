import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { TABLES, eur } from "../../../lib/tables";
import { lohnsteuerPap2026 } from "../../../lib/pap";
export const metadata = { title: "Verwaltungsfachangestellte Gehalt nach TVöD 2026: E 5/E 6 bis E 9a–E 11" };
export default function Page() {
  const g = (id) => TABLES.vkaE.find((x) => x.id === id);
  const nettoE6S1 = lohnsteuerPap2026({ bruttoMonat: g("E6").stufen[0], steuerklasse: "1", vbl: true }).nettoMonat;
  return (
    <GuideShell title="Verwaltungsfachangestellte Gehalt nach TVöD 2026" validity="Gültig: TVöD VKA, 01.05.2026–31.03.2027"
      intro="Verwaltungsfachangestellte starten nach der Ausbildung in der Regel in E 5 oder E 6 — nicht in E 9. Der große Sprung kommt mit dem Verwaltungslehrgang II (Angestelltenlehrgang II) und der Übernahme gehobener Sachbearbeitung: Dann sind E 9a bis E 11 erreichbar, also bis zu rund 2.000 € brutto mehr im Monat als im Einstieg."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Verwaltungsfachangestellte Gehalt" }]}
      relatedLinks={related(["/tvoed/e-9b", "/tvoed/e-11", "/tvoed/entgelttabelle", "/tvoed-rechner", "/tvoed/hoehergruppierung"])}
      faq={[
        { frage: "In welcher Gruppe starte ich nach der Ausbildung?", antwort: "In der Regel E 5 oder E 6, je nach übertragenen Aufgaben. E 5, Stufe 1: 3.124,08 €. E 6, Stufe 1: 3.240,30 €. Bei E 6, Stufe 1, Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: " + eur(nettoE6S1) + " netto." },
        { frage: "Was bringt der Verwaltungslehrgang II?", antwort: "Er qualifiziert für die gehobene Sachbearbeitung — mit entsprechenden Aufgaben sind E 9a bis E 11 erreichbar. E 9b, Stufe 1: 3.779,84 €. E 11, Stufe 1: 4.269,64 €. Der Lehrgang allein ohne geänderte Aufgaben reicht nicht — die Tätigkeit muss den Merkmalen entsprechen." },
        { frage: "Zählt die Ausbildung für die Stufe?", antwort: "Nein — die Stufe richtet sich nach einschlägiger Berufserfahrung im öffentlichen Dienst. Nach der Ausbildung startest du in der Regel in Stufe 1; Vorerfahrung kann eine höhere Anfangsstufe begründen (§ 16 TVöD)." },
        { frage: "Gilt das auch beim Bund?", antwort: "Die E-Tabelle ist für Bund und VKA identisch, die Jahressonderzahlung nicht: E 9a–12 beim Bund 90 %, bei der VKA 85 %. In E 5–E 8 zahlt der Bund sogar 95 %." },
      ]}>
      <div className="card"><h2>Karrierepfad: Einstieg → VL II</h2>
      <table><thead><tr><th>Station</th><th>Gruppe</th><th>Stufe 1</th><th>Stufe 3</th><th>Stufe 6</th></tr></thead><tbody>
        <tr><td>Einstieg nach Ausbildung</td><td>E 5</td><td>{eur(g("E5").stufen[0])}</td><td>{eur(g("E5").stufen[2])}</td><td>{eur(g("E5").stufen[5])}</td></tr>
        <tr><td>Einstieg nach Ausbildung (qualifiziert)</td><td>E 6</td><td>{eur(g("E6").stufen[0])}</td><td>{eur(g("E6").stufen[2])}</td><td>{eur(g("E6").stufen[5])}</td></tr>
        <tr><td>Gehobene Sachbearbeitung (mit VL II)</td><td>E 9a</td><td>{eur(g("E9a").stufen[0])}</td><td>{eur(g("E9a").stufen[2])}</td><td>{eur(g("E9a").stufen[5])}</td></tr>
        <tr><td>Gehobene Sachbearbeitung (mit VL II)</td><td>E 9b</td><td>{eur(g("E9b").stufen[0])}</td><td>{eur(g("E9b").stufen[2])}</td><td>{eur(g("E9b").stufen[5])}</td></tr>
        <tr><td>Sachgebietsleitung / besonders anspruchsvoll</td><td>E 11</td><td>{eur(g("E11").stufen[0])}</td><td>{eur(g("E11").stufen[2])}</td><td>{eur(g("E11").stufen[5])}</td></tr>
      </tbody></table>
      <p>Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=E6&stufe=1">E 6, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E9b&stufe=1">E 9b, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E11&stufe=1">E 11, Stufe 1</a>.</p></div>
    </GuideShell>
  );
}
