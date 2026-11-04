import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { TABLES, eur } from "../../../lib/tables";
import { lohnsteuerPap2026 } from "../../../lib/pap";
export const metadata = { title: "Sozialarbeiter Gehalt nach TVöD 2026: S 11b / S 12, Netto, JSZ" };
export default function Page() {
  const s11b = TABLES.vkaS.find((g) => g.id === "S11b");
  const s12 = TABLES.vkaS.find((g) => g.id === "S12");
  const nettoS11bS1 = lohnsteuerPap2026({ bruttoMonat: s11b.stufen[0], steuerklasse: "1", vbl: true }).nettoMonat;
  const nettoS12S1 = lohnsteuerPap2026({ bruttoMonat: s12.stufen[0], steuerklasse: "1", vbl: true }).nettoMonat;
  return (
    <GuideShell title="Sozialarbeiter Gehalt nach TVöD 2026" validity="Gültig: TVöD SuE VKA, 01.05.2026–31.03.2027"
      intro="Staatlich anerkannte Sozialarbeiter und Sozialpädagogen mit Hochschulabschluss starten im kommunalen Sozial- und Erziehungsdienst in der Regel in S 11b. Bei schwierigen Tätigkeiten — z. B. im Allgemeinen Sozialen Dienst (ASD) — ist S 12 die Einstiegsgruppe. Höhere Gruppen (S 14, S 18) kommen mit Leitungs- und Spezialaufgaben infrage."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Sozialarbeiter Gehalt" }]}
      relatedLinks={related(["/tvoed/s-11b", "/tvoed/sue-tabelle", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/eingruppierung"])}
      faq={[
        { frage: "In welcher Gruppe starte ich als Sozialarbeiter?", antwort: "In der Regel S 11b, Stufe 1. Im ASD und bei vergleichbar schwierigen Tätigkeiten häufig direkt S 12. Die genaue Gruppe steht in der Stellenausschreibung und im Arbeitsvertrag — sie hängt von den übertragenen Aufgaben ab, nicht vom Abschluss allein." },
        { frage: "Was verdient ein Sozialarbeiter netto?", antwort: "S 11b, Stufe 1, Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: " + eur(nettoS11bS1) + " netto bei " + eur(s11b.stufen[0]) + " brutto. S 12, Stufe 1, gleiche Annahmen: " + eur(nettoS12S1) + " netto bei " + eur(s12.stufen[0]) + " brutto. Die SuE-Zulage von 180 € (S 11b–S 12) ist in diesen Netto-Beispielen nicht enthalten." },
        { frage: "Gibt es die SuE-Zulage auch für Sozialarbeiter?", antwort: "Ja — 180 € monatlich für S 11b–S 12 (sowie S 14 und S 15, Fallgruppe 6). Sie ist steuer- und sozialabgabenpflichtig und in den Tabellenwerten nicht enthalten." },
        { frage: "Wie hoch ist die Jahressonderzahlung?", antwort: "85 % (VKA). S 11b, Stufe 1: 3.327,85 € brutto. S 12, Stufe 1: 3.372,43 € brutto." },
        { frage: "Gilt S 11b auch bei freien Trägern?", antwort: "Nein — freie Träger haben eigene Tarife oder orientieren sich an TVöD, ohne tariflich gebunden zu sein. S 11b gilt für kommunale Arbeitgeber nach TVöD SuE (VKA)." },
      ]}>
      <div className="card"><h2>Beruf → Gruppe: die Zuordnung</h2>
      <table><thead><tr><th>Tätigkeit</th><th>Gruppe</th><th>Stufe 1</th><th>Stufe 3</th><th>Stufe 6</th></tr></thead><tbody>
        <tr><td>Sozialarbeiter / Sozialpädagoge (Regel)</td><td>S 11b</td><td>{eur(s11b.stufen[0])}</td><td>{eur(s11b.stufen[2])}</td><td>{eur(s11b.stufen[5])}</td></tr>
        <tr><td>Sozialarbeiter mit schwierigen Tätigkeiten (z. B. ASD)</td><td>S 12</td><td>{eur(s12.stufen[0])}</td><td>{eur(s12.stufen[2])}</td><td>{eur(s12.stufen[5])}</td></tr>
      </tbody></table>
      <p>Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=S11b&stufe=1">S 11b, Stufe 1</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=S12&stufe=1">S 12, Stufe 1</a> · Alle Werte in der <a href="/tvoed/sue-tabelle">S-Tabelle</a> und im Detail auf der <a href="/tvoed/s-11b">S-11b-Seite</a>.</p></div>
    </GuideShell>
  );
}
