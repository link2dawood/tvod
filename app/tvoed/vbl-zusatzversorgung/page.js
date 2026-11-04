import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD VBL / Zusatzversorgung: Warum das Netto niedriger ist" };
export default function Page() {
  return (
    <GuideShell title="TVöD VBL / Zusatzversorgung: Warum dein Netto niedriger ist als im Standard-Rechner" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027"
      intro="Der häufigste Grund, warum ein TVöD-Gehalt auf der Gehaltsabrechnung niedriger ist als in einem allgemeinen Brutto-Netto-Rechner: die Zusatzversorgung. Beschäftigte des Bundes sind bei der VBL (Versorgungsanstalt des Bundes und der Länder) pflichtversichert, Beschäftigte der Kommunen bei einer Zusatzversorgungskasse (ZVK). Der Arbeitnehmeranteil wird zusätzlich zu den vier Sozialversicherungszweigen vom Brutto abgezogen — und die meisten Standard-Rechner zeigen ihn gar nicht."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "VBL / Zusatzversorgung" }]}
      relatedLinks={related(["/tvoed-rechner", "/tvoed/was-ist-tvoed", "/tvoed/pflege-tabelle", "/tvoed/entgelttabelle"])}
      faq={[
        { frage: "Wie hoch ist der VBL-Arbeitnehmeranteil?", antwort: "Im Abrechnungsverband West in der Regel 1,81 % des zusatzversorgungspflichtigen Entgelts. Der Arbeitgeberanteil liegt deutlich höher und erhöht die Bemessungsgrundlage für die Lohnsteuer leicht — der Rechner zeigt den Arbeitnehmeranteil als eigene Zeile." },
        { frage: "Ist VBL dasselbe wie Rentenversicherung?", antwort: "Nein. Die VBL/ZVK ist eine betriebliche Altersversorgung zusätzlich zur gesetzlichen Rente. Sie wird nicht in den 9,3 % Rentenversicherung gezeigt — wer sie dort sucht, findet sie nicht und wundert sich über die Differenz." },
        { frage: "Gilt VBL auch in den neuen Bundesländern?", antwort: "Die Zusatzversorgung gilt auch dort, aber mit eigenen Sätzen und Regelungen (Abrechnungsverband Ost). Der Rechner verwendet den West-Satz von 1,81 % — für Ost-Fälle ist das Ergebnis eine Näherung." },
        { frage: "Kann ich mich von der VBL befreien lassen?", antwort: "Nein, die Pflichtversicherung ist tariflich zwingend. Eine Befreiung gibt es im Regelfall nicht — auch nicht bei kurzer Beschäftigungsdauer." },
        { frage: "Was bekomme ich später aus der VBL?", antwort: "Eine Betriebsrente, die sich nach Entgeltpunkten (Versorgungspunkte) richtet. Sie ist kein fester Prozentsatz des letzten Gehalts — die genaue Höhe steht in deinem VBL-Kontoauszug." },
      ]}>
      <div className="card"><h2>Beispiele: Was VBL monatlich kostet (West, 1,81 %)</h2>
      <table><thead><tr><th>Beispiel</th><th>Tabellenentgelt</th><th>VBL-Arbeitnehmeranteil</th></tr></thead><tbody>
        <tr><td>E 13, Stufe 3</td><td>5.709,87 €</td><td>103,34 €</td></tr>
        <tr><td>P 7, Stufe 2</td><td>3.510,30 €</td><td>63,53 €</td></tr>
        <tr><td>S 8b, Stufe 3</td><td>4.091,94 €</td><td>74,06 €</td></tr>
      </tbody></table>
      <p>Rechne dein eigenes Netto mit und ohne VBL im <a href="/tvoed-rechner">TVöD-Rechner</a> — der VBL-Schalter zeigt die Differenz sofort. Bei E 13, Stufe 3, Steuerklasse I sind es 3.486,50 € ohne VBL gegenüber 3.383,16 € mit VBL.</p></div>
      <div className="card"><h2>VBL oder ZVK — was gilt für mich?</h2>
      <ul>
        <li><strong>Bund:</strong> VBL.</li>
        <li><strong>Kommunen:</strong> Zusatzversorgungskasse des jeweiligen kommunalen Arbeitgeberverbands (z. B. ZVK, kvw, rzvk — je nach Bundesland).</li>
        <li><strong>Länder (TV-L):</strong> VBL für die meisten Länder, mit landesspezifischen Regelungen.</li>
      </ul>
      <p>Die Satzung deiner Kasse steht in deinem Arbeitsvertrag bzw. in der Gehaltsabrechnung. Der Abzug ist dort als eigene Zeile ausgewiesen — nicht unter Kranken- oder Rentenversicherung versteckt.</p></div>
    </GuideShell>
  );
}
