import { GuideShell } from "../../components/site";
import { related } from "../../lib/links";
import GeneralCalculatorWithPrefill from "../../components/GeneralCalculatorWithPrefill";
export const metadata = { title: "Brutto-Netto-Rechner 2026: Was bleibt vom Bruttogehalt übrig?" };
export default function Page() {
  return (
    <GuideShell title="Brutto-Netto-Rechner 2026: Was bleibt vom Bruttogehalt übrig?" validity="Gültig: BMF Programmablaufplan 2026 · Alle Steuerklassen I–VI"
      intro="Der allgemeine Brutto-Netto-Rechner für alle, die nicht nach TVöD bezahlt werden — oder die einfach nur wissen wollen, was von einem beliebigen Brutto übrig bleibt. Gib dein Monatsbrutto ein, wähle Steuerklasse, Bundesland und Kirchensteuer, und du siehst Lohnsteuer, Soli, Kirchensteuer und alle vier Sozialversicherungszweige nach dem amtlichen PAP 2026."
      crumbs={[{ label: "Brutto-Netto-Rechner" }]}
      relatedLinks={related(["/brutto-netto", "/brutto-netto/steuerklassen-vergleich", "/brutto-netto/minijob", "/brutto-netto/midijob", "/tvoed-rechner", "/tvoed/netto-zu-brutto-rechner"])}
      faq={[
        { frage: "Was ist der Unterschied zum TVöD-Rechner?", antwort: "Der TVöD-Rechner nimmt eine Entgeltgruppe/Stufe und rechnet Tabellenentgelt, VBL und Jahressonderzahlung mit. Dieser Rechner nimmt ein beliebiges Brutto — für alle Berufe, auch außerhalb des öffentlichen Dienstes. VBL ist hier nur ein Schalter, kein Standard." },
        { frage: "Warum ist das Netto bei gleichem Brutto in Steuerklasse III so viel höher als in V?", antwort: "Weil III/V ein Ehegatten-Splitting auf zwei Lohnsteuerkarten verteilt: III bekommt den doppelten Grundfreibetrag und die günstigere Progression, V bekommt den Rest. Zusammen zahlen III+V ungefähr so viel wie IV/IV — einzeln verglichen täuscht der Unterschied." },
        { frage: "Sind Boni und Weihnachtsgeld enthalten?", antwort: "Nein — Einmalzahlungen werden nach dem Jahresverfahren versteuert und sind hier nicht enthalten. Das Ergebnis ist das laufende Monatsnetto ohne Einmalzahlungen." },
        { frage: "Gilt der Rechner für Minijobs und Midijobs?", antwort: "Nein — Minijobs (bis 603 €) und Midijobs (603,01–2.000 €, Übergangsbereich) haben eigene Beitragsregeln, die der PAP-Rechner nicht abbildet. Siehe die Minijob- und Midijob-Ratgeber." },
      ]}>
      <GeneralCalculatorWithPrefill />
      <div className="card"><h2>Beliebte Brutto-Beträge</h2>
      <p>Direkt zum Netto für einen festen Betrag, alle Steuerklassen im Vergleich: {" "}
        {[2000,2500,3000,3500,4000,4500,5000,5500,6000].map((b, i) => (<span key={b}>{i > 0 ? " · " : ""}<a href={`/brutto-netto/${b}-euro`}>{b.toLocaleString("de-DE")} €</a></span>))}
      </p></div>
    </GuideShell>
  );
}
