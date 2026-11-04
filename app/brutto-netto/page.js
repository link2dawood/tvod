import { GuideShell } from "../../components/site";
import { related, GENERAL } from "../../lib/links";
export const metadata = { title: "Brutto-Netto-Hub 2026: Rechner, Beträge, Steuerklassen, Minijob, Werkstudent" };
export default function Page() {
  const gruppen = ["Rechner", "Beträge", "Ratgeber"];
  return (
    <GuideShell title="Brutto-Netto-Hub: Rechner, Beträge und Ratgeber für 2026" validity="Gültig: BMF Programmablaufplan 2026"
      intro="Der allgemeine Brutto-Netto-Hub — für alle Berufe, nicht nur den öffentlichen Dienst. Der Rechner nimmt jedes beliebige Brutto, die Betragsseiten zeigen alle Steuerklassen für 2.000–6.000 Euro, und die Ratgeber klären die Sonderfälle, die der Rechner bewusst nicht abbildet: Minijob, Midijob und Werkstudent."
      crumbs={[{ label: "Brutto-Netto-Hub" }]}
      relatedLinks={related(["/brutto-netto-rechner", "/tvoed-rechner", "/tvoed/netto-zu-brutto-rechner"])}
      faq={[
        { frage: "Was ist der Unterschied zum TVöD-Hub?", antwort: "Der TVöD-Hub rechnet mit Entgeltgruppen, Stufen, VBL und Jahressonderzahlung. Dieser Hub rechnet mit einem beliebigen Brutto nach dem allgemeinen PAP — für alle anderen Berufe. Wer im öffentlichen Dienst arbeitet, nutzt beide: TVöD-Rechner für die Gruppe, diesen Hub für Vergleiche." },
        { frage: "Warum bildet der Rechner Minijob/Midijob nicht ab?", antwort: "Weil dort eigene Beitragsregeln gelten (Minijob: fast abgabenfrei; Midijob: ermäßigte Bemessungsgrundlage nach § 20 SGB IV), die der PAP nicht enthält. Die Ratgeber erklären die Regeln und nennen die exakten Grenzen für 2026." },
      ]}>
      <div className="card"><h2>Alle Brutto-Netto-Seiten im Überblick</h2>
      {gruppen.map((g) => (
        <div key={g}>
          <h3>{g}</h3>
          <ul>
            {GENERAL.filter((p) => p.gruppe === g).map((p) => (
              <li key={p.href}><a href={p.href}>{p.label}</a> — {p.desc}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </GuideShell>
  );
}
