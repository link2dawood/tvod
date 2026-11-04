import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Werkstudent 2026: 20-Stunden-Regel, Sozialversicherung, Netto-Vorteil" };
export default function Page() {
  return (
    <GuideShell title="Werkstudent 2026: 20 Stunden, nur Rentenversicherung — und was das netto bringt" validity="Gültig: 2026 — Werkstudentenprivileg (§ 6 Abs. 1 Nr. 3 SGB V), Mindestlohn 13,90 €/Std."
      intro="Das Werkstudentenprivileg ist der größte Netto-Vorteil im Studium: Während der Vorlesungszeit darfst du bis zu 20 Stunden pro Woche arbeiten, und über den Job zahlst du nur den Rentenversicherungsbeitrag (9,3 %) — keine Kranken-, keine Pflege-, keine Arbeitslosenversicherung. Die Lohnsteuer zahlst du wie jeder andere nach Steuerklasse und Brutto; eine eigene Werkstudenten-Steuerregel gibt es nicht."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "Werkstudent" }]}
      relatedLinks={related(["/brutto-netto/minijob", "/brutto-netto/midijob", "/brutto-netto-rechner", "/brutto-netto/steuerklassen-vergleich"])}
      faq={[
        { frage: "Wer ist Werkstudent?", antwort: "Ein ordentlich immatrikulierter Vollzeitstudent einer Hochschule, dessen Studium im Vordergrund steht und dessen Job Nebensache ist. Nicht: Urlaubssemester, Promotion, duales Studium (dort bist du voll sozialversicherungspflichtig wie ein normaler Arbeitnehmer)." },
        { frage: "Was ist die 20-Stunden-Regel?", antwort: "Während der Vorlesungszeit darfst du regelmäßig nicht mehr als 20 Stunden pro Woche arbeiten, sonst verlierst du das Privileg und wirst voll sozialversicherungspflichtig. In der vorlesungsfreien Zeit (Semesterferien) darfst du mehr arbeiten — und nach der 26-Wochen-Regel insgesamt bis zu 26 Wochen (182 Tage) im Zeitjahr über 20 Stunden, z. B. abends, nachts, am Wochenende oder in den Ferien." },
        { frage: "Was zahle ich als Werkstudent genau?", antwort: "Nur den Rentenversicherungsbeitrag von 9,3 % deines Bruttos. Kranken- und Pflegeversicherung laufen über deine Familienversicherung (solange sie besteht) oder deine studentische Krankenversicherung, die du selbst zahlst — nicht über den Job. Arbeitslosenversicherung: 0 € über den Job. Eine Befreiung von der Rentenversicherungspflicht gibt es für Werkstudenten — anders als bei Minijobbern — nicht (außer im Minijob-Bereich unter 603 €)." },
        { frage: "Gilt das Privileg auch zwischen 603 € und 2.000 €?", antwort: "Ja, aber mit einer Besonderheit: Im Übergangsbereich (Midijob) wird die Rentenversicherungs-Bemessungsgrundlage ermäßigt (§ 20 Abs. 2a SGB IV) — der RV-Beitrag ist dort niedriger als volle 9,3 %. Der allgemeine Brutto-Netto-Rechner bildet diese Ermäßigung nicht ab; er zeigt für Werkstudenten im Midijob-Bereich also etwas zu wenig Netto aus dem RV-Anteil." },
        { frage: "Zahle ich als Werkstudent Lohnsteuer?", antwort: "Ja, wie jeder andere: nach Steuerklasse (in der Regel I) und Brutto, über den PAP. Bei 20 Stunden × 13,90 € Mindestlohn ≈ 1.203 € brutto im Monat (20 × 13,90 × 52 ÷ 12 = 1.203,67 €) fällt in Steuerklasse I in der Regel noch keine Lohnsteuer an (Grundfreibetrag), nur die Rentenversicherung — netto also rund 1.091,73 €." },
        { frage: "Was passiert mit BAföG?", antwort: "BAföG hat eigene Freibeträge für Erwerbseinkommen — ein Werkstudentenjob kann das BAföG kürzen, wenn der Freibetrag überschritten wird. Das ist eine BAföG-Frage, keine Steuerfrage: Prüfe den aktuellen BAföG-Freibetrag beim BAföG-Amt, bevor du die Stunden ausweitest." },
      ]}>
      <div className="card"><h2>Werkstudent vs. normaler Arbeitnehmer (Beispiel: 1.200 € brutto, SK I)</h2>
      <table><thead><tr><th></th><th>Werkstudent</th><th>Normaler Arbeitnehmer</th></tr></thead><tbody>
        <tr><td>Rentenversicherung (9,3 %)</td><td>− 111,60 €</td><td>− 111,60 €</td></tr>
        <tr><td>Krankenversicherung</td><td>0 € (über Familien-/studentische KV)</td><td>− ca. 105 € (7,3 % + halber Zusatzbeitrag)</td></tr>
        <tr><td>Pflegeversicherung</td><td>0 €</td><td>− ca. 28,80 € (2,4 % inkl. Kinderlosenzuschlag)</td></tr>
        <tr><td>Arbeitslosenversicherung (1,3 %)</td><td>0 €</td><td>− 15,60 €</td></tr>
        <tr><td>Lohnsteuer (SK I, 1.200 €)</td><td>0 € (unter Grundfreibetrag)</td><td>0 €</td></tr>
        <tr><td><strong>Netto (ca.)</strong></td><td><strong>1.088,40 €</strong></td><td><strong>939,00 €</strong></td></tr>
      </tbody></table>
      <p><small>Die Arbeitnehmer-Werte sind Näherungswerte (Zusatzbeitrag 2,9 %, kinderlos, ohne Kirchensteuer); den exakten Wert für den Normalfall zeigt der Brutto-Netto-Rechner. Der Werkstudenten-Vorteil bei 1.200 € brutto beträgt rund 149 € im Monat — und er wächst mit dem Brutto, bis die Beitragsbemessungsgrenzen greifen.</small></p></div>
    </GuideShell>
  );
}
