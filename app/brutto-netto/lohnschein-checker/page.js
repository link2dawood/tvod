import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import PayslipChecker from "../../../components/PayslipChecker";
export const metadata = { title: "Lohnabrechnung prüfen 2026: Stimmt dein Gehalt? Gehaltsabrechnung-Checker" };
export default function Page() {
  return (
    <GuideShell title="Lohnabrechnung prüfen: Stimmt deine Gehaltsabrechnung?" validity="Gültig: BMF Programmablaufplan 2026 · Toleranz 0,05 € pro Position"
      intro="Nimm deine Gehaltsabrechnung, tippe die Beträge ab, und der Checker rechnet jede Position nach dem amtlichen PAP 2026 nach — Lohnsteuer, Soli, Kirchensteuer, alle vier Sozialversicherungen, VBL und Netto. Abweichungen über 0,05 Euro sind keine Rundung mehr, sondern haben eine Ursache — und der Checker nennt dir die wahrscheinlichste, von der geänderten Krankenkassen-Zusatzbeitrag bis zum fehlenden VBL-Abzug."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "Lohnabrechnung prüfen" }]}
      relatedLinks={related(["/brutto-netto-rechner", "/brutto-netto/steuerklassen-vergleich", "/brutto-netto/minijob", "/brutto-netto/midijob", "/tvoed-rechner"])}
      faq={[
        { frage: "Meine Abrechnung weicht um 1–2 Cent ab — ist das ein Fehler?", antwort: "Nein. Lohnabrechnungsprogramme runden jede Position auf Cent, der PAP rundet ab (centweises Abrunden) — 1–2 Cent Differenz pro Position sind normal. Der Checker toleriert deshalb 0,05 € pro Position. Erst darüber lohnt sich ein Blick." },
        { frage: "Im November weicht alles ab — warum?", antwort: "Weil im November die Jahressonderzahlung (TVöD) oder das Weihnachtsgeld ausgezahlt wird. Einmalzahlungen werden nach dem Jahresverfahren versteuert, nicht nach dem Monatsverfahren — der Monat ist dann nicht mit dem PAP-Monatsrechner vergleichbar. Prüfe einen normalen Monat ohne Einmalzahlung." },
        { frage: "Was mache ich, wenn der Checker einen echten Fehler findet?", antwort: "Zuerst mit der Personal-/Lohnbuchhaltung sprechen — die meisten Fehler sind ELStAM-Datenfehler (falsche Steuerklasse, fehlende Kinder, alter Zusatzbeitrag) und lassen sich für Folgemonate korrigieren. Zu viel gezahlte Lohnsteuer bekommst du über die Einkommensteuererklärung zurück; zu viel gezahlte Sozialbeiträge über Arbeitgeber und Krankenkasse/Rentenversicherung." },
        { frage: "Werden meine Daten gespeichert?", antwort: "Nein — der Checker läuft komplett im Browser. Nichts wird an einen Server gesendet, nichts gespeichert. Du kannst ihn auch mit einer ausgedruckten Abrechnung nutzen, ohne etwas hochzuladen." },
        { frage: "Warum braucht der Checker meine Steuerklasse und den Zusatzbeitrag?", antwort: "Weil beides den erwarteten Wert direkt ändert: Die Steuerklasse bestimmt Lohnsteuer und Soli, der Zusatzbeitrag die Krankenversicherung. Wenn du den Zusatzbeitrag deiner Kasse nicht kennst, steht er auf der Abrechnung selbst — oder der Checker leitet ihn aus deinem KV-Beitrag ab und sagt dir, welcher Satz zu deiner Abrechnung passt." },
      ]}>
      <PayslipChecker />
      <div className="card"><h2>Die fünf häufigsten Abrechnungsfehler — und woran du sie erkennst</h2>
      <ol>
        <li><strong>Alter Krankenkassen-Zusatzbeitrag.</strong> Kassen ändern den Satz meist zum 1. Januar. Wenn nur die KV-Zeile abweicht, ist das fast immer die Ursache — der Checker rechnet dir den Satz aus, der zu deiner Abrechnung passt.</li>
        <li><strong>Falsche ELStAM-Daten.</strong> Falsche Steuerklasse, fehlende Kinder, Kirchensteuer trotz Austritt (wirkt erst ab Folgemonat). Betrifft Lohnsteuer, Soli und Kirchensteuer gleichzeitig — ein Muster, keine Einzelabweichung.</li>
        <li><strong>Fehlender VBL-Abzug im öffentlichen Dienst.</strong> VBL steht auf 0 €, obwohl du nach TVöD bezahlt wirst. Sieht aus wie ein Vorteil, ist aber ein Fehler: Ohne Abzug entstehen auch keine VBL-Ansprüche.</li>
        <li><strong>Kinderlosenzuschlag trotz Kinder.</strong> Pflegeversicherung 0,6 Prozentpunkte zu hoch. Ursache: Kinder sind in den ELStAM-Daten nicht hinterlegt.</li>
        <li><strong>Einmalzahlung im Monat.</strong> November (JSZ), Dezember (Weihnachtsgeld), Bonus-Monate: Die Steuer ist dann nach dem Jahresverfahren berechnet und weicht vom Monatsrechner ab — kein Fehler, sondern ein anderer Monat. Prüfe einen normalen Monat.</li>
      </ol></div>
    </GuideShell>
  );
}
