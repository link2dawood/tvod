import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { TABLES, eur } from "../../../lib/tables";
export const metadata = { title: "Bauhof / Stadtreinigung Gehalt nach TVöD 2026: E 3–E 8" };
export default function Page() {
  const g = (id) => TABLES.vkaE.find((x) => x.id === id);
  return (
    <GuideShell title="Bauhof / Stadtreinigung Gehalt nach TVöD 2026" validity="Gültig: TVöD VKA, 01.05.2026–31.03.2027"
      intro="Bauhof und Stadtreinigung sind handwerklich-technische Berufe im TVöD VKA — mit einer Spanne von E 3 (Hilfskräfte, Müllwerker) bis E 8 (Facharbeiter mit besonderen Aufgaben) und E 9a/E 9b für Leitungsfunktionen. Achtung: Große eigenständige Stadtreinigungen und Stadtwerke-Betriebe zahlen oft nach dem Tarifvertrag für Versorgungsbetriebe (TV-V), nicht nach TVöD — und in den Stadtstaaten gilt der TV-L."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Bauhof / Stadtreinigung Gehalt" }]}
      relatedLinks={related(["/tvoed/entgelttabelle", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/teilzeit-rechner"])}
      faq={[
        { frage: "In welcher Gruppe ist ein Bauhof-Mitarbeiter?", antwort: "Je nach Qualifikation und Verantwortung meist E 3–E 6. Facharbeiter mit abgeschlossener dreijähriger Ausbildung (z. B. Straßenbauer, Gärtner, Kfz-Mechatroniker, Maurer) liegen in der Regel bei E 5–E 8, mit besonderen Aufgaben oder Leitungsfunktionen bis E 9a/E 9b." },
        { frage: "Was verdient ein Müllwerker?", antwort: "Müllwerker (Mülllader) liegen typischerweise bei E 3–E 5, Fahrer von Müllfahrzeugen bei E 6. E 5, Stufe 1: 3.124,08 €. E 3, Stufe 1: 2.953,13 €. Erschwerniszuschläge (z. B. für körperlich belastende Arbeit) kommen ggf. hinzu." },
        { frage: "Gilt TVöD auch für die Stadtreinigung der Stadtwerke?", antwort: "Nicht immer — wenn die Stadtreinigung organisatorisch zu den Stadtwerken gehört, gilt oft der TV-V mit eigenen, teils höheren Tabellenwerten. Prüfe den Arbeitsvertrag: Dort steht der Tarifvertrag." },
        { frage: "Gibt es Erschwerniszuschläge?", antwort: "Ja — für körperlich belastende, schmutzige oder gefährliche Arbeit können Erschwerniszuschläge nach § 19 TVöD bzw. Dienstvereinbarung gezahlt werden. Sie sind in den Tabellenwerten nicht enthalten." },
      ]}>
      <div className="card"><h2>Tätigkeit → Gruppe → Gehalt</h2>
      <table><thead><tr><th>Tätigkeit</th><th>Typische Gruppe</th><th>Stufe 1</th><th>Stufe 3</th><th>Stufe 6</th></tr></thead><tbody>
        <tr><td>Müllwerker / Mülllader</td><td>E 3–E 5</td><td>{eur(g("E3").stufen[0])} (E 3)</td><td>{eur(g("E3").stufen[2])}</td><td>{eur(g("E5").stufen[5])} (E 5)</td></tr>
        <tr><td>Bauhof-Facharbeiter (Geselle, 3-jährige Ausbildung)</td><td>E 5–E 6</td><td>{eur(g("E5").stufen[0])} (E 5)</td><td>{eur(g("E5").stufen[2])}</td><td>{eur(g("E6").stufen[5])} (E 6)</td></tr>
        <tr><td>Fahrer Müllwagen / Großkehrmaschine, Vorarbeiter</td><td>E 5–E 7</td><td>{eur(g("E6").stufen[0])} (E 6)</td><td>{eur(g("E6").stufen[2])}</td><td>{eur(g("E7").stufen[5])} (E 7)</td></tr>
        <tr><td>Facharbeiter mit besonderen Aufgaben / Meister</td><td>E 7–E 9a</td><td>{eur(g("E7").stufen[0])} (E 7)</td><td>{eur(g("E7").stufen[2])}</td><td>{eur(g("E9a").stufen[5])} (E 9a)</td></tr>
      </tbody></table>
      <p>Direkt rechnen: <a href="/tvoed-rechner/?tarif=vka&gruppe=E5&stufe=1">E 5, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E6&stufe=1">E 6, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=E9a&stufe=1">E 9a, Stufe 1</a>.</p></div>
    </GuideShell>
  );
}
