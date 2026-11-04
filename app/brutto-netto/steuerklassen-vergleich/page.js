import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { eur } from "../../../lib/tables";
import { lohnsteuerPap2026 } from "../../../lib/pap";
export const metadata = { title: "Steuerklassen Vergleich 2026: I, II, III, IV, V, VI — was sich wirklich unterscheidet" };
export default function Page() {
  const brutto = 4000;
  const rows = ["1","2","3","4","5","6"].map((sk) => ({ sk, ...lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse: sk, bundesland: "NRW", kirchensteuer: false, kinder: false, zusatzbeitrag: 2.9, vbl: false }) }));
  const iii = rows.find((r) => r.sk === "3"); const v = rows.find((r) => r.sk === "5"); const iv = rows.find((r) => r.sk === "4");
  return (
    <GuideShell title="Steuerklassen im Vergleich: Was I, II, III, IV, V und VI wirklich bedeuten" validity="Gültig: BMF Programmablaufplan 2026 · Beispiel: 4.000 € brutto, NRW, ohne Kirchensteuer, kinderlos"
      intro="Die Steuerklasse ist der größte einzelne Hebel auf dein Monatsnetto — größer als der Zusatzbeitrag, größer als die Kirchensteuer. Aber: Die Klasse ändert nicht, wie viel Steuer du im Jahr insgesamt zahlst (das klärt die Einkommensteuererklärung), sondern nur, wie viel monatlich einbehalten wird. Und III/V ist kein Geschenk, sondern eine Aufteilung auf zwei Karten."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "Steuerklassen-Vergleich" }]}
      relatedLinks={related(["/brutto-netto-rechner", "/brutto-netto/4000-euro", "/brutto-netto/minijob", "/tvoed/netto-zu-brutto-rechner"])}
      faq={[
        { frage: "Welche Steuerklasse habe ich?", antwort: "Ledig ohne Kinder: I. Alleinerziehend: II (mit Entlastungsbetrag 4.260 €). Verheiratet/verpartnert: IV/IV (Standard) oder III/V (auf Antrag) oder IV/IV mit Faktor (Faktorverfahren — vom PAP-Rechner nicht abgebildet, weil der Faktor vom Finanzamt festgesetzt wird). Zweitjob: VI." },
        { frage: "Lohnen sich III/V?", antwort: "Monatlich ja für den III-Partner, monatlich nein für den V-Partner — zusammen ungefähr neutral gegenüber IV/IV. III/V lohnt sich monatlich vor allem, wenn ein Partner deutlich mehr verdient als der andere oder wenn ein Partner gar nicht arbeitet. Am Jahresende gleicht die Steuererklärung (Pflicht bei III/V) die Differenz weitgehend aus." },
        { frage: "Was ist das Faktorverfahren (IV mit Faktor)?", antwort: "IV/IV mit einem vom Finanzamt berechneten Faktor, der die Splittingwirkung schon monatlich annähert — ohne die III/V-Schieflage. Der Rechner bildet es nicht ab, weil der Faktor individuell festgesetzt wird und nicht aus dem Brutto allein folgt." },
        { frage: "Warum ist Steuerklasse VI so teuer?", antwort: "Weil VI ohne Grundfreibetrag und ohne Arbeitnehmerpauschbetrag rechnet (§ 39b-Sondermethode): Der erste Euro wird sofort hoch besteuert. VI gilt für den Zweitjob — der Hauptjob behält die günstige Klasse." },
        { frage: "Ändert ein Kind meine Steuerklasse?", antwort: "Nein — Kinder ändern die Steuerklasse nicht. Sie ändern die Bemessungsgrundlage für Soli und Kirchensteuer (Kinderfreibetrag) und den Pflegeversicherungsbeitrag (kein Kinderlosenzuschlag). Die Lohnsteuer selbst bleibt durch Kinder unverändert (§ 51a Abs. 2a EStG)." },
      ]}>
      <div className="card"><h2>Beispiel: 4.000 € brutto, alle Steuerklassen</h2>
      <table><thead><tr><th>Klasse</th><th>Für wen (typisch)</th><th>Lohnsteuer</th><th>Soli</th><th>Netto / Monat</th></tr></thead><tbody>
        {rows.map((r) => (<tr key={r.sk}><td>{r.sk}</td><td>{r.sk === "1" ? "Ledig" : r.sk === "2" ? "Alleinerziehend" : r.sk === "3" ? "Verheiratet, Höherverdiener" : r.sk === "4" ? "Verheiratet (Standard)" : r.sk === "5" ? "Verheiratet, Geringverdiener" : "Zweitjob"}</td><td>{eur(r.lohnsteuerMonat)}</td><td>{eur(r.soliMonat)}</td><td><strong>{eur(r.nettoMonat)}</strong></td></tr>))}
      </tbody></table>
      <p>III+V zusammen: {eur(iii.nettoMonat + v.nettoMonat)} netto bei 2 × 4.000 € brutto (beide Partner je 4.000 € — in der Praxis verdient der V-Partner meist weniger). IV+IV zusammen: {eur(iv.nettoMonat * 2)}. Der Vergleich zeigt: Bei gleichem Einkommen beider Partner ist IV/IV monatlich günstiger als III/V — die III/V-Aufteilung lohnt sich erst bei ungleichem Einkommen.</p>
      <p>Deinen Fall rechnen: <a href="/brutto-netto-rechner/?brutto=4000">4.000 € im Brutto-Netto-Rechner</a> (Steuerklasse oben umschalten).</p></div>
    </GuideShell>
  );
}
