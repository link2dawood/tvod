import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Pflegefachkraft Gehalt nach TVöD 2026: P 7 / P 8, Netto, JSZ" };
export default function Page() {
  return (
    <GuideShell title="Pflegefachkraft Gehalt nach TVöD 2026" validity="Gültig: TVöD VKA P-Tabelle, 01.05.2026–31.03.2027"
      intro="Die meisten Pflegefachkräfte in kommunalen Einrichtungen sind nach TVöD in P 7 eingruppiert — das ist die Regelgruppe für die 3-jährige Pflegeausbildung. Mit Zusatzaufgaben wie Praxisanleitung kommt P 8 infrage. Entscheidend ist nicht der Berufsabschluss allein, sondern die tatsächlich übertragenen Aufgaben."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Pflegefachkraft Gehalt" }]}
      relatedLinks={related(["/tvoed/p-7", "/tvoed/pflege-tabelle", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/eingruppierung"])}
      faq={[
        { frage: "In welcher Gruppe bin ich als Pflegefachkraft?", antwort: "In der Regel P 7. P 8 gilt u. a. für Praxisanleitung und vergleichbare Zusatzfunktionen. Fachweiterbildungen und Leitungsaufgaben können — je nach Tätigkeit — höhere P-Gruppen begründen; das prüft die Eingruppierung im Einzelfall." },
        { frage: "Was verdient eine Pflegefachkraft netto?", antwort: "P 7, Stufe 2, Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: 2.275,46 € netto bei 3.510,30 € brutto. P 8, Stufe 2, gleiche Annahmen: 2.376,65 € netto bei 3.701,21 € brutto. Zulagen kommen hinzu." },
        { frage: "Gibt es eine Pflegezulage?", antwort: "Ja, die Pflegezulage ist ein zusätzlicher Betrag auf das Tabellenentgelt und wird separat ausgewiesen. Sie ist nicht in den Tabellenwerten und nicht in den Netto-Beispielen auf dieser Seite enthalten — prüfe deine Gehaltsabrechnung für den aktuellen Betrag." },
        { frage: "Zählt Schicht- und Nachtdienst extra?", antwort: "Ja — Schicht-, Nacht-, Sonn- und Feiertagszuschläge kommen zum Tabellenentgelt hinzu und sind in den Beispielen nicht enthalten. Sie können das Monatsgehalt deutlich erhöhen." },
        { frage: "TVöD oder TV-L in der Pflege?", antwort: "Kommunale Krankenhäuser und Pflegeeinrichtungen: TVöD (VKA, teilweise TVöD-K). Unikliniken der Länder: TV-L. Die Tabellen und die Jahressonderzahlung unterscheiden sich — vergleiche immer beides." },
      ]}>
      <div className="card"><h2>Beruf → Gruppe: die Zuordnung</h2>
      <table><thead><tr><th>Tätigkeit</th><th>Gruppe (Regelfall)</th><th>Brutto, Stufe 2</th></tr></thead><tbody>
        <tr><td>Pflegefachkraft (3-jährige Ausbildung)</td><td>P 7</td><td>3.510,30 €</td></tr>
        <tr><td>Pflegefachkraft mit Praxisanleitung / vergleichbaren Zusatzaufgaben</td><td>P 8</td><td>3.701,21 €</td></tr>
      </tbody></table>
      <p>Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=P7&stufe=2">P 7, Stufe 2</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=P8&stufe=2">P 8, Stufe 2</a> · Alle Werte in der <a href="/tvoed/pflege-tabelle">P-Tabelle</a> und im Detail auf der <a href="/tvoed/p-7">P-7-Seite</a>.</p></div>
    </GuideShell>
  );
}
