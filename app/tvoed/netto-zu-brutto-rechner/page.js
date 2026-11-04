import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import ReverseCalculator from "../../../components/ReverseCalculator";
export const metadata = { title: "Netto-zu-Brutto-Rechner 2026: Welches Brutto brauche ich für mein Wunsch-Netto?" };
export default function Page() {
  return (
    <GuideShell title="Netto-zu-Brutto-Rechner: Welches Brutto brauche ich für mein Wunsch-Netto?" validity="Gültig: BMF Programmablaufplan 2026 · Monatsnetto ohne Jahressonderzahlung"
      intro="Die Frage hinter jeder Gehaltsverhandlung, rückwärts gerechnet: Du sagst, was netto auf dem Konto landen soll — der Rechner sagt dir, welches Brutto du dafür fordern musst. Er nutzt denselben amtlichen PAP 2026 wie der TVöD-Rechner, nur invertiert: Statt Brutto → Netto wird per binärer Suche das Brutto gefunden, dessen Netto exakt deinem Ziel entspricht."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Netto-zu-Brutto-Rechner" }]}
      relatedLinks={related(["/tvoed-rechner", "/tvoed/teilzeit-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/entgelttabelle", "/tvoed/hoehergruppierung"])}
      faq={[
        { frage: "Warum gibt es keine einfache Formel Brutto = Netto ÷ 0,6?", antwort: "Weil Steuer und Sozialabgaben nicht proportional sind: Der §-32a-Tarif steigt progressiv, die Vorsorgepauschale ist gedeckelt, die Beitragsbemessungsgrenzen kappen Renten-/Krankenversicherung oberhalb von 8.450 € bzw. 5.812,50 € im Monat, und der Soli hat eine Freigrenze mit Milderungszone. Die Nettoquote hängt deshalb vom Brutto selbst ab — nur eine iterative Suche über den Vorwärtsrechner ist exakt." },
        { frage: "Ist die Jahressonderzahlung im Ergebnis enthalten?", antwort: "Nein — das Ergebnis ist ein Monatsnetto aus dem laufenden Gehalt. Die Jahressonderzahlung kommt im November hinzu und wird dort nach dem Jahresverfahren versteuert. Wer das Jahresnetto inklusive JSZ als Ziel hat, muss die JSZ separat addieren (siehe JSZ-Rechner)." },
        { frage: "Was bedeutet das Vollzeit-Äquivalent bei Teilzeit?", antwort: "Wenn du bei 75 % auf 2.500 € netto kommen willst, zeigt der Rechner zuerst das Teilzeit-Brutto — und darunter das Tabellenentgelt bei 100 %, das du dafür brauchst. Das Vollzeit-Äquivalent ist die Zahl, die du mit einer TVöD-Tabelle vergleichen kannst." },
        { frage: "Wie genau ist das Ergebnis?", antwort: "Das Brutto wird auf den nächsten Cent aufgerundet und trifft dein Ziel-Netto auf den Cent genau — bis auf maximal 1 Cent Rundung, die aus der centweisen Abrundung der einzelnen Abrechnungspositionen im PAP selbst kommt. Die verbleibende Unsicherheit ist nicht die Rechnung, sondern deine Eingaben (Steuerklasse, Zusatzbeitrag, VBL, Freibeträge)." },
        { frage: "Kann ich damit auch eine TVöD-Gruppe finden?", antwort: "Indirekt: Nimm das Vollzeit-Äquivalent und suche in der E-, P- oder S-Tabelle die Gruppe/Stufe, deren Tabellenentgelt mindestens so hoch ist. Der TVöD-Rechner zeigt dir dann das exakte Netto dieser Gruppe." },
      ]}>
      <ReverseCalculator />
      <div className="card"><h2>So nutzt du das Ergebnis in der Verhandlung</h2>
      <ol>
        <li><strong>Fordere die aufgerundete Zahl, nicht die exakte.</strong> Die Tabelle „Für die Verhandlung“ zeigt das nächste 100-€-, 250-€- und 500-€-Brutto mit dem Netto, das dabei herauskommt — eine runde Forderung ist glaubwürdiger und lässt Puffer für Rundungen in der Abrechnung.</li>
        <li><strong>Vergleiche mit der Tabelle, nicht mit dem Wunsch.</strong> Ein Vollzeit-Äquivalent von 4.900 € heißt in der Praxis: E 13, Stufe 1 (4.901,11 €) — oder eine Stufe höher in einer niedrigeren Gruppe. Das ist die Sprache, in der Personalabteilungen denken.</li>
        <li><strong>Vergiss die JSZ nicht.</strong> Ein Monatsnetto-Ziel ohne JSZ unterschätzt das Jahreseinkommen um eine Monatsrate mal JSZ-Satz (VKA 85 %, Bund 75–95 %, TV-L 32–88 %). Rechne sie im JSZ-Rechner dazu, bevor du das Jahresgehalt bewertest.</li>
      </ol></div>
    </GuideShell>
  );
}
