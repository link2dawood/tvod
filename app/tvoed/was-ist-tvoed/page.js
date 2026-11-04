import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Was ist TVöD? Der Tarifvertrag für Bund und Kommunen erklärt" };
export default function Page() {
  return (
    <GuideShell title="Was ist TVöD? Der Tarifvertrag für Bund und Kommunen" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · TV-L 01.04.2026–28.02.2027"
      intro="TVöD steht für Tarifvertrag für den öffentlichen Dienst. Er regelt Gehalt, Arbeitszeit, Urlaub, Stufen und Jahressonderzahlung für die Beschäftigten des Bundes und der Kommunen — also für Stadtverwaltungen, Landratsämter, Bundesbehörden, kommunale Kitas und kommunale Pflegeeinrichtungen. Er gilt nicht für Beamte (die haben Besoldung, kein Gehalt nach TVöD), nicht für die Länder (dort gilt TV-L, außer Hessen: TV-H) und nicht für kirchliche Träger (dort gelten AVR)."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Was ist TVöD?" }]}
      relatedLinks={related(["/tvoed-rechner", "/tvoed/entgelttabelle", "/tvoed/pflege-tabelle", "/tvoed/sue-tabelle", "/tvoed/eingruppierung", "/tvoed/tvoed-vs-tv-l"])}
      faq={[
        { frage: "Bin ich nach TVöD bezahlt?", antwort: "Wenn dein Arbeitgeber der Bund oder eine Kommune ist und du kein Beamter bist, in der Regel ja. Steht in deinem Arbeitsvertrag — dort ist der Tarifvertrag genannt. Bei freien Trägern, Kirchen und privaten Pflegeheimen gilt TVöD in der Regel nicht, auch wenn sie sich daran orientieren." },
        { frage: "Was bedeuten E, P und S?", antwort: "E = allgemeine Entgelttabelle (Verwaltung, Technik, Wissenschaft u. v. m.), P = Pflege (Anlage E), S = Sozial- und Erziehungsdienst. Jede Tabelle hat eigene Gruppen und Werte." },
        { frage: "Was ist eine Entgeltgruppe, was eine Stufe?", antwort: "Die Entgeltgruppe richtet sich nach deiner Tätigkeit und Qualifikation (Eingruppierung), die Stufe nach deiner Berufserfahrung im öffentlichen Dienst. Gruppe × Stufe = dein Tabellenentgelt." },
        { frage: "Bekomme ich automatisch mehr Geld, wenn ich länger dabei bin?", antwort: "Ja, über die Stufen: Nach 1, 2, 3, 4 und 5 Jahren in der jeweiligen Stufe steigst du auf — insgesamt 15 Jahre bis Stufe 6. Eine Höhergruppierung (neue Gruppe) kommt nur bei geänderten Aufgaben infrage." },
        { frage: "Was ist die Jahressonderzahlung?", antwort: "Eine einmalige Zahlung im November — das Weihnachtsgeld des öffentlichen Dienstes. Der Satz hängt vom Tarif und der Gruppe ab (VKA 85 %, Bund 95/90/75 %, TV-L deutlich niedriger)." },
      ]}>
      <div className="card"><h2>Die drei Tabellen auf einen Blick</h2>
      <ul>
        <li><strong>E-Tabelle:</strong> Verwaltung, Technik, IT, Wissenschaft, allgemeine Berufe — <a href="/tvoed/entgelttabelle">E-Tabelle ansehen</a>.</li>
        <li><strong>P-Tabelle:</strong> Pflege — P 7 ist die Regelgruppe für Pflegefachkräfte — <a href="/tvoed/pflege-tabelle">P-Tabelle ansehen</a> und <a href="/tvoed/p-7">P 7 im Detail</a>.</li>
        <li><strong>S-Tabelle:</strong> Sozial- und Erziehungsdienst — Erzieher sind meist S 8a oder S 8b — <a href="/tvoed/sue-tabelle">S-Tabelle ansehen</a> und <a href="/tvoed/erzieher">Erzieher-Gehalt</a>.</li>
      </ul>
      <p>Starte mit dem <a href="/tvoed-rechner">TVöD-Rechner</a>: Tarif, Tabelle, Gruppe, Stufe, Teilzeit — und du siehst Brutto, Netto nach BMF PAP 2026, VBL-Abzug und Jahressonderzahlung in einem Ergebnis.</p></div>
    </GuideShell>
  );
}
