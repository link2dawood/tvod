import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Erzieher Gehalt nach TVöD 2026: S 8a / S 8b, Netto, JSZ" };
export default function Page() {
  return (
    <GuideShell title="Erzieher Gehalt nach TVöD 2026" validity="Gültig: TVöD VKA S-Tabelle, 01.05.2026–31.03.2027"
      intro="Die meisten Erzieher in kommunalen Kitas sind nach TVöD in S 8a oder S 8b eingruppiert. Der Unterschied liegt in der Schwierigkeit der Tätigkeit und der Verantwortung — nicht im Abschluss allein. S 8b zahlt in jeder Stufe mehr als S 8a, und der Abstand wächst mit der Stufe."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Erzieher Gehalt" }]}
      relatedLinks={related(["/tvoed/sue-tabelle", "/tvoed-rechner", "/tvoed/eingruppierung", "/tvoed/jahressonderzahlung-rechner", "/tvoed/teilzeit-rechner"])}
      faq={[
        { frage: "Bin ich S 8a oder S 8b?", antwort: "Das hängt von den übertragenen Tätigkeiten ab — S 8b setzt schwierigere Tätigkeiten bzw. besondere Verantwortung voraus. Die genaue Abgrenzung steht in der SuE-Entgeltordnung. Wer unsicher ist, lässt die Eingruppierung prüfen (Personalrat, Gewerkschaft)." },
        { frage: "Was verdient ein Erzieher netto?", antwort: "S 8a, Stufe 1, Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: 2.274,98 € netto bei 3.509,44 € brutto. S 8b, Stufe 1, gleiche Annahmen: 2.311,88 € netto bei 3.578,87 € brutto. S 8b, Stufe 6: 3.133,35 € netto bei 5.190,90 € brutto." },
        { frage: "Wie hoch ist die Jahressonderzahlung?", antwort: "85 % (VKA, SuE-Gruppen). S 8b, Stufe 1: 3.042,04 € brutto. S 8b, Stufe 6: 4.412,27 € brutto — jeweils vor Steuern und Sozialabgaben." },
        { frage: "Was bringt eine Kita-Leitung?", antwort: "Leitungsfunktionen liegen in höheren S-Gruppen — die genaue Gruppe hängt von der Größe der Einrichtung und dem Verantwortungsumfang ab. Der Sprung von S 8b auf eine Leitungsgruppe ist eine Höhergruppierung und muss mit den Aufgaben begründet sein." },
        { frage: "Gilt TVöD auch für freie Träger?", antwort: "Nein — freie Träger haben eigene Tarife oder orientieren sich an TVöD, ohne tariflich gebunden zu sein. Wer bei einem freien Träger arbeitet, sollte den Arbeitsvertrag prüfen: Dort steht, welcher Tarif (wenn überhaupt) gilt." },
      ]}>
      <div className="card"><h2>Beruf → Gruppe: die Zuordnung</h2>
      <table><thead><tr><th>Gruppe</th><th>Stufe 1</th><th>Stufe 3</th><th>Stufe 6</th></tr></thead><tbody>
        <tr><td>S 8a</td><td>3.509,44 €</td><td>3.976,82 €</td><td>4.668,84 €</td></tr>
        <tr><td>S 8b</td><td>3.578,87 €</td><td>4.091,94 €</td><td>5.190,90 €</td></tr>
      </tbody></table>
      <p>Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=S8a&stufe=1">S 8a, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=S8b&stufe=1">S 8b, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=S8b&stufe=6">S 8b, Stufe 6</a> · Alle Werte in der <a href="/tvoed/sue-tabelle">S-Tabelle</a>.</p></div>
    </GuideShell>
  );
}
