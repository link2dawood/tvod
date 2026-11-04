import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { TABLES, eur } from "../../../lib/tables";
export const metadata = { title: "Ordnungsamt Gehalt nach TVöD 2026: Außendienst, Sachbearbeitung, Leitung" };
export default function Page() {
  const g = (id) => TABLES.vkaE.find((x) => x.id === id);
  const rows = [
    ["Verkehrsüberwachung (ruhender Verkehr)", "E 3–E 6", "E5"],
    ["Ordnungsaußendienst / Kommunaler Ordnungsdienst (KOD)", "E 5–E 9a", "E7"],
    ["Sachbearbeitung Ordnungsamt", "E 6–E 10", "E9a"],
    ["Team- / Sachgebietsleitung", "E 9b–E 12", "E11"],
  ];
  return (
    <GuideShell title="Ordnungsamt Gehalt nach TVöD 2026" validity="Gültig: TVöD VKA, 01.05.2026–31.03.2027"
      intro="„Ordnungsamt“ ist kein Beruf mit einer Gruppe — es sind vier verschiedene Tätigkeiten mit vier verschiedenen Gehaltsspannen. Der Außendienst liegt typischerweise bei E 5–E 9a, die Sachbearbeitung bei E 6–E 10, die Leitung bei E 9b–E 12. In den Stadtstaaten Berlin, Hamburg und Bremen gilt statt TVöD der TV-L."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Ordnungsamt Gehalt" }]}
      relatedLinks={related(["/tvoed/e-11", "/tvoed/e-9b", "/tvoed/entgelttabelle", "/tvoed-rechner", "/tvoed/eingruppierung"])}
      faq={[
        { frage: "In welcher Gruppe ist der Ordnungsaußendienst?", antwort: "In der Regel E 5–E 9a, je nach Aufgaben, Eigenverantwortung und Fachkenntnissen. Ein Beispiel aus einer Stellenausschreibung: Entgeltgruppe 7 TVöD für den städtischen Ordnungsdienst im Außendienst (mit Verwaltungsfachangestellten-Ausbildung oder Fachkraft für Schutz und Sicherheit)." },
        { frage: "Was verdient man in der Verkehrsüberwachung?", antwort: "Typischerweise E 3–E 6. E 5, Stufe 1: 3.124,08 €. E 6, Stufe 1: 3.240,30 €. Schicht- und Nachtzuschläge kommen ggf. hinzu." },
        { frage: "Gibt es Zulagen für Schicht- und Nachtdienst?", antwort: "Ja — Schicht-, Nacht-, Sonn- und Feiertagszuschläge kommen zum Tabellenentgelt hinzu und sind in den Tabellenwerten nicht enthalten. Sie können das Monatsgehalt deutlich erhöhen." },
        { frage: "Gilt TVöD auch in Berlin, Hamburg und Bremen?", antwort: "Nein — in den Stadtstaaten gilt für Landes- und Kommunalbeschäftigte in der Regel der TV-L, nicht der TVöD VKA. Die Tabellen und die Jahressonderzahlung unterscheiden sich." },
      ]}>
      <div className="card"><h2>Tätigkeit → Gruppe → Gehalt (Beispielwerte)</h2>
      <table><thead><tr><th>Tätigkeit</th><th>Typische Gruppe</th><th>Beispiel: Stufe 1</th><th>Beispiel: Stufe 3</th><th>Beispiel: Stufe 6</th></tr></thead><tbody>
        {rows.map(([taet, gruppe, beispiel]) => {
          const gr = g(beispiel);
          return (<tr key={taet}><td>{taet}</td><td>{gruppe}</td><td>{eur(gr.stufen[0])} ({beispiel})</td><td>{eur(gr.stufen[2])}</td><td>{eur(gr.stufen[5])}</td></tr>);
        })}
      </tbody></table>
      <p><small>Die Beispielgruppen sind Orientierungswerte aus der Spanne, nicht die Eingruppierung einer konkreten Stelle — die steht in der Stellenausschreibung. Direkt rechnen: <a href="/tvoed-rechner/?tarif=vka&gruppe=E7&stufe=1">E 7, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E9a&stufe=1">E 9a, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E11&stufe=1">E 11, Stufe 1</a>.</small></p></div>
    </GuideShell>
  );
}
