import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD vs TV-L: Gehaltsvergleich inkl. Jahressonderzahlung" };
export default function Page() {
  return (
    <GuideShell title="TVöD vs TV-L: Der Gehaltsvergleich, der mehr als die Tabelle zeigt" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · TV-L 01.04.2026–28.02.2027"
      intro="TVöD und TV-L klingen ähnlich und haben ähnliche Gruppennummern — aber sie sind verschiedene Tarife für verschiedene Arbeitgeber. TVöD gilt für Bund und Kommunen, TV-L für die Länder (außer Hessen, dort TV-H). Wer nur die Monatstabelle vergleicht, unterschätzt den Unterschied: Die Jahressonderzahlung macht ihn noch größer."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TVöD vs TV-L" }]}
      relatedLinks={related(["/tvoed/tv-l-tabelle", "/tvoed/entgelttabelle", "/tvoed-rechner", "/tvoed/jahressonderzahlung", "/tvoed/tvoed-bund-vs-vka"])}
      faq={[
        { frage: "Ich arbeite an einer Uni — TVöD oder TV-L?", antwort: "In der Regel TV-L, wenn die Uni eine Landeseinrichtung ist. Ausnahmen gibt es (z. B. Bundesuniversitäten, außeruniversitäre Forschung mit Bundeszuschuss) — entscheidend ist der Arbeitgeber, nicht der Arbeitsort." },
        { frage: "Ist TV-L immer schlechter bezahlt?", antwort: "In den hier verglichenen Gruppen ja — Tabelle und Jahressonderzahlung liegen unter TVöD VKA. Das heißt nicht, dass jede TV-L-Stelle schlechter ist: Arbeitszeit, Urlaub, Zusatzversorgung und die konkrete Stelle zählen mit. Vergleiche immer das Jahreseinkommen, nicht nur einen Monatswert." },
        { frage: "Kann ich von TV-L zu TVöD wechseln und meine Stufe behalten?", antwort: "Bei einem Arbeitgeberwechsel wird die Stufe neu festgestellt — einschlägige Berufserfahrung kann angerechnet werden, ein Automatismus ist es nicht. Kläre die Einstufung vor der Unterschrift." },
        { frage: "Gilt TV-L auch für Lehrer?", antwort: "Lehrer an staatlichen Schulen sind in der Regel Beamte oder TV-L-Beschäftigte — je nach Bundesland. Der SuE-Bereich (Kitas, Jugendhilfe) ist dagegen überwiegend TVöD VKA, wenn der Träger eine Kommune ist." },
        { frage: "Was ist mit Hessen?", antwort: "Hessen ist aus dem TV-L ausgestiegen und hat einen eigenen Tarif: TV-H. Die TV-L-Werte auf dieser Seite gelten für Hessen nicht." },
      ]}>
      <div className="card"><h2>Vergleich am Beispiel E 13, Stufe 3</h2>
      <table><thead><tr><th></th><th>TVöD VKA</th><th>TV-L</th></tr></thead><tbody>
        <tr><td>Monatsbrutto (Vollzeit)</td><td>5.709,87 €</td><td>5.366,89 €</td></tr>
        <tr><td>Jahresbrutto (12 Monate)</td><td>68.518,44 €</td><td>64.402,68 €</td></tr>
        <tr><td>Jahressonderzahlung</td><td>4.853,39 € (85 %)</td><td>2.493,99 € (46,47 %)</td></tr>
        <tr><td><strong>Jahr gesamt (Brutto + JSZ)</strong></td><td><strong>73.371,83 €</strong></td><td><strong>66.896,67 €</strong></td></tr>
        <tr><td><strong>Unterschied</strong></td><td colSpan="2"><strong>6.475,16 € pro Jahr zugunsten TVöD VKA</strong></td></tr>
      </tbody></table>
      <p>Der reine Tabellenunterschied beträgt 342,98 € im Monat — die JSZ vergrößert die Jahresdifferenz auf über 6.400 €. In höheren Gruppen (E 14–15) ist der TV-L-JSZ-Satz mit 32,53 % noch niedriger, der Gap also noch größer.</p></div>
      <div className="card"><h2>Weitere Unterschiede im Überblick</h2>
      <table><thead><tr><th>Thema</th><th>TVöD</th><th>TV-L</th></tr></thead><tbody>
        <tr><td>Arbeitgeber</td><td>Bund, Kommunen</td><td>Länder (außer Hessen)</td></tr>
        <tr><td>Tabellen gültig</td><td>01.05.2026–31.03.2027</td><td>01.04.2026–28.02.2027</td></tr>
        <tr><td>SuE-Tabelle</td><td>Eigene S-Tabelle (VKA)</td><td>Eigene SuE-Werte, z. B. S 8b Stufe 1: 3.489,55 € (vs. VKA 3.578,87 €)</td></tr>
        <tr><td>Arbeitszeit</td><td>Bund 39 h; VKA 39 h (West und Ost seit 2023, landesbezirklich bis 40 h möglich)</td><td>Je nach Land, in der Regel 39–40 h — Arbeitsvertrag prüfen</td></tr>
      </tbody></table>
      <p>Vergleiche deine konkrete Stelle im <a href="/tvoed-rechner">TVöD-Rechner</a> (Tarif umschalten!) und in der <a href="/tvoed/tv-l-tabelle">TV-L-Tabelle</a>.</p></div>
    </GuideShell>
  );
}
