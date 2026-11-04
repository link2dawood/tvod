import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Höhergruppierung: Stufengleich, Laufzeit neu, SuE-Garantiebetrag" };
export default function Page() {
  return (
    <GuideShell title="TVöD Höhergruppierung: Was dir eine höhere Gruppe wirklich bringt" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · SuE-Garantiebeträge ab 01.05.2026"
      intro="Eine Höhergruppierung ist kein Automatismus für mehr Geld in der gleichen Höhe wie der Tabellenunterschied — sie folgt § 17 TVöD, und die wichtigste Regel lautet: stufengleich. Du behältst deine Stufe, aber die Stufenlaufzeit beginnt in der neuen Gruppe neu. Wer das nicht weiß, überschätzt den Sprung oder wundert sich über den nächsten Stufenaufstieg."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Höhergruppierung" }]}
      relatedLinks={related(["/tvoed/eingruppierung", "/tvoed/stufenlaufzeit", "/tvoed-rechner", "/tvoed/e-9b", "/tvoed/e-11", "/tvoed/s-11b"])}
      faq={[
        { frage: "Was heißt stufengleich?", antwort: "Du wirst in der neuen Gruppe in derselben Stufe eingruppiert, die du in der alten Gruppe erreicht hast — mindestens aber in Stufe 2. Beispiel: E 9b, Stufe 3 (4.203,56 €) → E 11, Stufe 3 (5.046,03 €) = +842,47 € brutto im Monat." },
        { frage: "Beginnt die Stufenlaufzeit neu?", antwort: "Ja. In der neuen Gruppe beginnt die Laufzeit für die nächste Stufe von vorn — auch wenn du in der alten Gruppe kurz vor dem nächsten Aufstieg standest. Das ist der versteckte Preis einer Höhergruppierung, den man gegen den sofortigen Sprung abwägen muss." },
        { frage: "Gibt es noch einen Garantiebetrag?", antwort: "Für reguläre Höhergruppierungen im TVöD Bund (seit 01.03.2014) und VKA (seit 01.03.2017) ist der klassische Garantiebetrag abgeschafft — die stufengleiche Zuordnung ersetzt ihn. Ausnahme: Im Sozial- und Erziehungsdienst (SuE) bestehen Garantiebeträge fort: ab 01.05.2026 77,37 € (S 2–S 8b) bzw. 123,79 € (S 9–S 18), wenn die stufengleiche Höhergruppierung sonst nur einen kleinen Gewinn brächte." },
        { frage: "Was passiert bei einer Höhergruppierung über mehrere Gruppen?", antwort: "Sie wird schrittweise bestimmt: In jeder dazwischenliegenden Gruppe wird eine Stufenzuordnung vorgenommen, bis die Zielgruppe erreicht ist. Ein Garantiebetrag entfällt dabei." },
        { frage: "Was, wenn ich nur vorübergehend höherwertige Aufgaben übernehme?", antwort: "Dann gibt es keine Höhergruppierung, sondern eine persönliche Zulage in Höhe des Unterschiedsbetrags für die Dauer der Übertragung — vorausgesetzt, die Voraussetzungen des § 17 TVöD für vorübergehende Übertragung sind erfüllt. Die Zulage endet mit der Rückübertragung." },
        { frage: "Kann eine Höhergruppierung auch nach hinten losgehen?", antwort: "Fast nie beim Tabellenentgelt — stufengleich ist die neue Tabelle in jeder Stufe höher als die alte. Aufpassen muss man bei Zulagen, die an die alte Gruppe gebunden sind (z. B. Funktionszulagen), und bei der neu beginnenden Stufenlaufzeit." },
      ]}>
      <div className="card"><h2>Beispiele: Was ein Sprung bringt (VKA, gleiche Stufe)</h2>
      <table><thead><tr><th>Sprung</th><th>Vorher</th><th>Nachher</th><th>Plus / Monat</th></tr></thead><tbody>
        <tr><td>E 9b, Stufe 3 → E 11, Stufe 3</td><td>4.203,56 €</td><td>5.046,03 €</td><td>+842,47 €</td></tr>
        <tr><td>E 9a, Stufe 6 → E 9b, Stufe 6</td><td>4.979,97 €</td><td>5.313,37 €</td><td>+333,40 €</td></tr>
        <tr><td>P 7, Stufe 2 → P 8, Stufe 2</td><td>3.510,30 €</td><td>3.701,21 €</td><td>+190,91 €</td></tr>
        <tr><td>S 8a, Stufe 1 → S 8b, Stufe 1</td><td>3.509,44 €</td><td>3.578,87 €</td><td>+69,43 €</td></tr>
      </tbody></table>
      <p>Rechne deinen Sprung im <a href="/tvoed-rechner">TVöD-Rechner</a> nach — beide Gruppen, gleiche Stufe, VBL-Schalter an.</p></div>
      <div className="card"><h2>So beantragst du eine Höhergruppierung</h2>
      <ol>
        <li><strong>Aufgaben dokumentieren:</strong> Welche Arbeitsvorgänge haben sich dauerhaft geändert, mit welchem Zeitanteil?</li>
        <li><strong>Merkmale prüfen:</strong> Welche Tätigkeitsmerkmale der höheren Gruppe treffen auf mindestens den maßgeblichen Anteil zu? Siehe <a href="/tvoed/eingruppierung">Eingruppierung</a>.</li>
        <li><strong>Personalrat / Gewerkschaft:</strong> Vor dem Antrag beraten lassen — die Eingruppierung ist eine Stellenbewertung, keine Verhandlungssache.</li>
        <li><strong>Schriftlich beantragen:</strong> Mit Tätigkeitsbeschreibung und Datum der Aufgabenänderung. Die Höhergruppierung wirkt in der Regel ab der Aufgabenänderung, nicht rückwirkend auf Jahre.</li>
      </ol></div>
    </GuideShell>
  );
}
