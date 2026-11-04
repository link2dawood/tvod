import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Minijob 2026: 603-Euro-Grenze, Abgaben, Befreiung, Urlaub" };
export default function Page() {
  return (
    <GuideShell title="Minijob 2026: Die 603-Euro-Grenze und was sie für dein Netto heißt" validity="Gültig: 2026 — Geringfügigkeitsgrenze 603 €/Monat (7.236 €/Jahr), Mindestlohn 13,90 €/Std."
      intro="Ein Minijob ist eine geringfügig entlohnte Beschäftigung bis zur Geringfügigkeitsgrenze — 2026 sind das 603 Euro im Monat. Die Grenze hängt seit Oktober 2022 am Mindestlohn (Mindestlohn × 130 ÷ 3, aufgerundet: 13,90 € × 130 ÷ 3 = 602,33 € → 603 €) und steigt automatisch mit ihm — 2027 bereits auf 633 Euro. Für den Arbeitnehmer ist der Minijob fast abgabenfrei, aber nicht ganz."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "Minijob" }]}
      relatedLinks={related(["/brutto-netto/midijob", "/brutto-netto/werkstudent", "/brutto-netto-rechner", "/brutto-netto/steuerklassen-vergleich"])}
      faq={[
        { frage: "Was zahle ich als Minijobber selbst?", antwort: "In der Regel nur den Rentenversicherungsbeitrag von 3,6 % deines Verdienstes — der Arbeitgeber zahlt 15 % pauschal, zusammen 18,6 %. Du kannst dich von der Rentenversicherungspflicht befreien lassen (Antrag beim Arbeitgeber); dann zahlst du gar nichts, erwirbst aber auch keine vollen Rentenansprüche aus dem Minijob." },
        { frage: "Zahle ich Lohnsteuer im Minijob?", antwort: "In der Regel nicht direkt: Der Arbeitgeber versteuert den Minijob pauschal mit 2 % (zusammen mit den Pauschalbeiträgen) oder — seltener — nach deinen individuellen Lohnsteuerabzugsmerkmalen. Auf deiner Abrechnung taucht deshalb normalerweise keine Lohnsteuer auf." },
        { frage: "Darf ich die 603 € in einem Monat überschreiten?", antwort: "Gelegentlich ja: In bis zu zwei Kalendermonaten im Jahr darf das Entgelt unvorhersehbar höher sein (z. B. Krankheitsvertretung), solange das Jahreslimit von 7.236 € eingehalten wird. Ein regelmäßiges Überschreiten beendet den Minijob — dann beginnt der Midijob-Bereich." },
        { frage: "Habe ich als Minijobber Urlaub und Lohnfortzahlung?", antwort: "Ja — Minijobber haben dieselben arbeitsrechtlichen Ansprüche wie andere Beschäftigte: bezahlter Urlaub (nach Arbeitstagen pro Woche umgerechnet, wie im TVöD-Urlaubsratgeber beschrieben), Entgeltfortzahlung im Krankheitsfall und Kündigungsschutz. Die Abgabenfreiheit ändert nichts an den Arbeitnehmerrechten." },
        { frage: "Zählen mehrere Minijobs zusammen?", antwort: "Ja — mehrere Minijobs beim selben oder bei verschiedenen Arbeitgebern werden zusammengerechnet. Überschreitet die Summe die 603-€-Grenze, ist keiner der Jobs mehr ein Minijob (Ausnahme: ein Minijob neben einer sozialversicherungspflichtigen Hauptbeschäftigung bleibt geringfügig)." },
        { frage: "Was ist der Unterschied zum Midijob?", antwort: "Ab 603,01 € beginnt der Übergangsbereich (Midijob) bis 2.000 €: Dort zahlst du gestaffelt reduzierte Sozialbeiträge, die mit steigendem Verdienst auf den vollen Satz anwachsen. Siehe Midijob-Ratgeber." },
      ]}>
      <div className="card"><h2>Minijob 2026 auf einen Blick</h2>
      <table><thead><tr><th></th><th>Wert 2026</th></tr></thead><tbody>
        <tr><td>Geringfügigkeitsgrenze / Monat</td><td>603 €</td></tr>
        <tr><td>Geringfügigkeitsgrenze / Jahr</td><td>7.236 €</td></tr>
        <tr><td>Mindestlohn / Stunde</td><td>13,90 € (→ ca. 43 Stunden/Monat bei Mindestlohn)</td></tr>
        <tr><td>Arbeitnehmer: Rentenversicherung</td><td>3,6 % (Befreiung möglich)</td></tr>
        <tr><td>Arbeitnehmer: Kranken-, Pflege-, Arbeitslosenversicherung</td><td>0 € (pauschal durch Arbeitgeber)</td></tr>
        <tr><td>Arbeitnehmer: Lohnsteuer</td><td>In der Regel 0 € (2-%-Pauschsteuer durch Arbeitgeber)</td></tr>
        <tr><td>Netto bei 603 € brutto (ohne Befreiung)</td><td>ca. 581,29 € (603 € − 3,6 % RV = 21,71 €)</td></tr>
        <tr><td>Ausblick 2027</td><td>Mindestlohn 14,60 € → Grenze 633 €</td></tr>
      </tbody></table>
      <p><small>Der allgemeine Brutto-Netto-Rechner bildet Minijob-Regeln nicht ab — er rechnet mit vollen Sozialabgaben und würde einen Minijob zu niedrig zeigen. Nutze für Minijobs diese Tabelle, nicht den Rechner.</small></p></div>
    </GuideShell>
  );
}
