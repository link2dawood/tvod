import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Eingruppierung: Warum du in dieser Entgeltgruppe bist" };
export default function Page() {
  return (
    <GuideShell title="TVöD Eingruppierung: Warum du in genau dieser Entgeltgruppe bist" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · TV-L 01.04.2026–28.02.2027"
      intro="Die Eingruppierung ist die Frage hinter fast jeder Gehaltssuche: „Warum bin ich E 9b und nicht E 11? Warum S 8a und nicht S 8b?“ Die Antwort steht nicht in deinem Abschlusszeugnis allein, sondern in den Tätigkeitsmerkmalen der Entgeltordnung — also in den Aufgaben, die dir tatsächlich übertragen sind."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Eingruppierung" }]}
      relatedLinks={related(["/tvoed-rechner", "/tvoed/entgelttabelle", "/tvoed/p-7", "/tvoed/erzieher", "/tvoed/pflegefachkraft"])}
      faq={[
        { frage: "Zählt mein Abschluss oder meine Tätigkeit?", antwort: "Beides — aber die Tätigkeit entscheidet. Die Entgeltordnung beschreibt Tätigkeitsmerkmale (z. B. Schwierigkeit, Verantwortung, Selbstständigkeit). Ein Master allein macht noch keine E 13, wenn die übertragenen Aufgaben E 11 entsprechen — und umgekehrt kann eine anspruchsvolle Tätigkeit auch ohne formalen Abschluss höher eingruppiert sein, wenn die Merkmale es hergeben." },
        { frage: "Was sind Arbeitsvorgänge?", antwort: "Die Eingruppierung betrachtet Arbeitsvorgänge — also abgrenzbare Arbeitsergebnisse — und ihren Zeitanteil. Entscheidend ist, welche Merkmale auf mindestens die Hälfte der Arbeitsvorgänge zutreffen (bei manchen Merkmalen gelten andere Schwellen). Deshalb lohnt sich eine genaue Tätigkeitsbeschreibung." },
        { frage: "Kann ich eine Höhergruppierung beantragen?", antwort: "Ja — wenn sich deine Aufgaben dauerhaft geändert haben, kannst du eine Überprüfung der Eingruppierung verlangen. Dokumentiere die neuen Aufgaben, sprich mit dem Personalrat und ggf. der Gewerkschaft, und stelle den Antrag schriftlich. Eine Höhergruppierung wirkt in der Regel ab dem Zeitpunkt der Aufgabenänderung, nicht rückwirkend auf Jahre." },
        { frage: "Warum sind zwei Kollegen mit gleichem Job unterschiedlich eingruppiert?", antwort: "Weil die übertragenen Aufgaben oder die Voraussetzungen (z. B. Weiterbildung, Leitungsfunktion, besondere Verantwortung) sich unterscheiden — oder weil eine Eingruppierung schlicht falsch ist. Das kommt vor und ist korrigierbar." },
        { frage: "Gilt die Eingruppierung auch für TV-L?", antwort: "TV-L hat eine eigene Entgeltordnung. Die Gruppenbezeichnungen (E 13 usw.) ähneln sich, die Merkmale und Tabellenwerte unterscheiden sich. Vergleiche nie nur die Gruppennummer — vergleiche Tabelle und Jahressonderzahlung." },
      ]}>
      <div className="card"><h2>So läuft eine Eingruppierung ab</h2>
      <ol>
        <li><strong>Tätigkeiten erfassen:</strong> Welche Arbeitsvorgänge machst du, mit welchem Zeitanteil?</li>
        <li><strong>Merkmale prüfen:</strong> Welche Tätigkeitsmerkmale der Entgeltordnung (Anlage A für den allgemeinen Teil, Anlage E für Pflege, SuE-Anlage für den Sozial- und Erziehungsdienst) treffen zu?</li>
        <li><strong>Gruppe bestimmen:</strong> Die höchste Gruppe, deren Merkmale auf den maßgeblichen Anteil deiner Arbeitsvorgänge zutreffen.</li>
        <li><strong>Stufe bestimmen:</strong> Berufserfahrung im öffentlichen Dienst — siehe <a href="/tvoed/stufenlaufzeit">Stufenlaufzeit</a>.</li>
      </ol></div>
      <div className="card"><h2>Typische Grenzfälle</h2>
      <ul>
        <li><strong>Erzieher:</strong> S 8a oder S 8b — der Unterschied liegt in der Schwierigkeit der Tätigkeit und der Verantwortung, nicht im Abschluss allein. Siehe <a href="/tvoed/erzieher">Erzieher-Gehalt</a>.</li>
        <li><strong>Pflegefachkraft:</strong> P 7 ist die Regelgruppe; Praxisanleitung und vergleichbare Zusatzaufgaben führen in der Regel zu P 8. Siehe <a href="/tvoed/pflegefachkraft">Pflegefachkraft-Gehalt</a>.</li>
        <li><strong>Verwaltung:</strong> E 9b vs. E 11 — hier entscheidet oft, ob gründliche, umfassende Fachkenntnisse und selbstständige Leistungen im Sinne der Entgeltordnung vorliegen.</li>
      </ul>
      <p>Rechne den Gehaltsunterschied der Grenzfälle direkt im <a href="/tvoed-rechner">TVöD-Rechner</a> nach — eine Gruppe höher sind bei E 9b → E 11 in Stufe 3 rund 842 € brutto im Monat (4.203,56 € vs. 5.046,03 €).</p></div>
    </GuideShell>
  );
}
