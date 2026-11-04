import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD P 7 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return (
    <GuideShell title="TVöD P 7 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" validity="Gültig: TVöD VKA P-Tabelle, 01.05.2026–31.03.2027"
      intro="P 7 ist die Regelgruppe für Pflegefachkräfte mit 3-jähriger Ausbildung im TVöD der Kommunen (VKA). Das Gehalt liegt zwischen 3.510,30 € (Stufe 2) und 4.305,40 € (Stufe 6) brutto bei Vollzeit — eine Stufe 1 gibt es für P 7 nicht. Die Jahressonderzahlung beträgt 90 % (P 5–P 8-Regel), nicht 85 % wie bei den meisten anderen Gruppen."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "P 7 Gehalt" }]}
      relatedLinks={related(["/tvoed/pflege-tabelle", "/tvoed/pflegefachkraft", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/stufenrechner", "/tvoed/teilzeit-rechner"])}
      faq={[
        { frage: "Warum beginnt P 7 bei Stufe 2?", antwort: "Weil die P-Tabelle für Pflegefachkräfte mit abgeschlossener Ausbildung keine Stufe 1 vorsieht — Stufe 2 ist die Einstiegsstufe. Wer neu einsteigt, startet also direkt mit 3.510,30 €." },
        { frage: "Wann erreiche ich Stufe 3?", antwort: "Erst nach 3 Jahren in Stufe 2 — das ist die P-7/P-8-Ausnahme von der Regel (normalerweise 2 Jahre). Danach gelten die Regellaufzeiten: Stufe 4 nach weiteren 3 Jahren, Stufe 5 nach 4, Stufe 6 nach 5." },
        { frage: "Was ist der Unterschied zu P 8?", antwort: "P 8 liegt in jeder Stufe höher (z. B. Stufe 2: 3.701,21 € statt 3.510,30 €) und gilt u. a. für Praxisanleitung und vergleichbare Zusatzaufgaben. Der Sprung von P 7 auf P 8 ist eine Höhergruppierung — sie muss mit geänderten Aufgaben begründet sein." },
        { frage: "Wie hoch ist die Jahressonderzahlung bei P 7?", antwort: "90 % des Jul–Sep-Durchschnitts. Bei Stufe 2 sind das 3.159,27 € brutto, bei Stufe 6 3.874,86 € brutto — vor Steuern und Sozialabgaben." },
        { frage: "Was bleibt bei P 7 netto?", antwort: "Bei Stufe 2, Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %: 2.339,00 € ohne VBL, 2.275,46 € mit VBL (1,81 %). Bei Stufe 6: 2.768,58 € ohne VBL, 2.690,66 € mit VBL. Zulagen (z. B. Pflegezulage, Schichtzulagen) kommen ggf. hinzu und sind hier nicht enthalten." },
      ]}>
      <div className="card"><h2>P 7 im Überblick: alle Stufen</h2>
      <table><thead><tr><th>Stufe</th><th>Brutto (Vollzeit)</th><th>JSZ brutto (90 %)</th><th>Netto-Beispiel (SK I, mit VBL)</th></tr></thead><tbody>
        <tr><td>Stufe 2 (Einstieg)</td><td>3.510,30 €</td><td>3.159,27 €</td><td>2.275,46 €</td></tr>
        <tr><td>Stufe 3 (nach 3 Jahren in Stufe 2)</td><td>3.701,21 €</td><td>3.331,09 €</td><td>—</td></tr>
        <tr><td>Stufe 4</td><td>3.998,33 €</td><td>3.598,50 €</td><td>—</td></tr>
        <tr><td>Stufe 5</td><td>4.149,59 €</td><td>3.734,63 €</td><td>—</td></tr>
        <tr><td>Stufe 6</td><td>4.305,40 €</td><td>3.874,86 €</td><td>2.690,66 €</td></tr>
      </tbody></table>
      <p><small>Netto-Beispiele: Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL 1,81 %. Ohne VBL: Stufe 2 = 2.339,00 €, Stufe 6 = 2.768,58 €. Teilzeit-Beispiel Stufe 2 bei 75 %: Brutto 2.632,73 € — rechne deinen Fall im <a href="/tvoed/teilzeit-rechner">Teilzeit-Rechner</a>.</small></p>
      <p>Direkt rechnen, vorbefüllt: <a href="/tvoed-rechner/?tarif=vka&gruppe=P7&stufe=2">P 7, Stufe 2 im TVöD-Rechner</a> · <a href="/tvoed-rechner/?tarif=vka&gruppe=P7&stufe=6">P 7, Stufe 6</a></p></div>
    </GuideShell>
  );
}
