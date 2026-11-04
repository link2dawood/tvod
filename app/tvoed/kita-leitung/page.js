import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { TABLES, eur } from "../../../lib/tables";
export const metadata = { title: "Kita-Leitung Gehalt nach TVöD 2026: S 9–S 18 nach Platzzahl" };
export default function Page() {
  const g = (id) => TABLES.vkaS.find((x) => x.id === id);
  const rows = [
    ["bis 39 Plätze", "S9", "S 9"], ["40–69 Plätze", "S13", "S 13"], ["70–99 Plätze", "S15", "S 15"],
    ["100–129 Plätze", "S16", "S 16"], ["130–179 Plätze", "S17", "S 17"], ["ab 180 Plätze", "S18", "S 18"],
  ];
  return (
    <GuideShell title="Kita-Leitung Gehalt nach TVöD 2026" validity="Gültig: TVöD SuE VKA, 01.05.2026–31.03.2027"
      intro="Das Gehalt einer Kita-Leitung hängt im TVöD SuE fast ausschließlich von einer Zahl ab: der Durchschnittsbelegung der Einrichtung. Kleine Kitas bis 39 Plätze bedeuten S 9, große ab 180 Plätzen S 18 — ein Unterschied von über 1.000 € brutto im Monat in Stufe 1 und über 1.600 € in Stufe 6."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Kita-Leitung Gehalt" }]}
      relatedLinks={related(["/tvoed/s-9", "/tvoed/sue-tabelle", "/tvoed/erzieher", "/tvoed-rechner", "/tvoed/eingruppierung"])}
      faq={[
        { frage: "Was zählt als Durchschnittsbelegung?", antwort: "Die Zahl der vergebenen Plätze, die je Tag gleichzeitig belegbar sind — ermittelt grundsätzlich aus dem Zeitraum 1. Oktober bis 31. Dezember des Vorjahres. Nicht die tatsächlich anwesenden Kinder, sondern die vergebenen Plätze zählen." },
        { frage: "Was passiert, wenn die Platzzahl sinkt?", antwort: "Eine Unterschreitung der maßgeblichen Platzzahl um bis zu 5 % führt in der Regel nicht sofort zu einer Herabgruppierung. Bei dauerhaft deutlich niedrigerer Belegung kann die Eingruppierung aber neu bewertet werden — prüfe den Arbeitsvertrag und die Entgeltordnung." },
        { frage: "Gilt die Staffel auch für stellvertretende Leitungen?", antwort: "Ständige Vertreter sind jeweils eine Gruppe unter der Leitung eingruppiert — z. B. Vertreter einer Leitung ab 130 Plätzen in S 16, Vertreter ab 180 Plätzen in S 17. Die genaue Zuordnung steht in der SuE-Entgeltordnung." },
        { frage: "Was ist mit Kitas für Kinder mit Behinderung?", antwort: "Für Leitungen von Kitas für Menschen mit Behinderung gelten niedrigere Platzzahl-Schwellen — z. B. S 16 bereits ab 40 Plätzen. Die genaue Staffel steht in der Entgeltordnung." },
        { frage: "Bekomme ich als Kita-Leitung die SuE-Zulage?", antwort: "Ja, wenn du in S 2–S 11a eingruppiert bist (130 €) bzw. in S 14/S 15 Fallgruppe 6 (180 €). Für S 9 gilt die 130-€-Zulage; für S 13, S 16–S 18 ist keine SuE-Zulage nach dieser Staffel vorgesehen." },
      ]}>
      <div className="card"><h2>Leitungsstaffel: Platzzahl → Gruppe → Gehalt</h2>
      <table><thead><tr><th>Durchschnittsbelegung</th><th>Gruppe</th><th>Stufe 1</th><th>Stufe 3</th><th>Stufe 6</th></tr></thead><tbody>
        {rows.map(([plaetze, id, label]) => {
          const gr = g(id);
          return (<tr key={id}><td>{plaetze}</td><td>{label}</td><td>{eur(gr.stufen[0])}</td><td>{eur(gr.stufen[2])}</td><td>{eur(gr.stufen[5])}</td></tr>);
        })}
      </tbody></table>
      <p><small>Stufenwerte aus der S-Tabelle (S 13–S 18 gerundet auf volle Euro in dieser Tabelle). Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=S9&stufe=1">S 9, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=S16&stufe=1">S 16, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=S18&stufe=1">S 18, Stufe 1</a>.</small></p></div>
    </GuideShell>
  );
}
