import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "Midijob 2026: Übergangsbereich 603–2.000 €, reduzierte Sozialbeiträge" };
export default function Page() {
  return (
    <GuideShell title="Midijob 2026: Der Übergangsbereich zwischen Minijob und Vollbeitrag" validity="Gültig: 2026 — Übergangsbereich 603,01–2.000 € (§ 20 SGB IV), Geringfügigkeitsgrenze 603 €"
      intro="Ab 603,01 Euro im Monat bist du kein Minijobber mehr — aber noch lange kein Vollbeitragszahler. Im Übergangsbereich (früher Gleitzone) bis 2.000 Euro zahlst du reduzierte Sozialversicherungsbeiträge, die mit steigendem Verdienst stufenlos auf den vollen Satz anwachsen. Am unteren Ende fallen fast keine Beiträge an, am oberen Ende zahlst du den vollen Satz. Die Lohnsteuer läuft dagegen ganz normal nach Steuerklasse und PAP."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "Midijob" }]}
      relatedLinks={related(["/brutto-netto/minijob", "/brutto-netto/werkstudent", "/brutto-netto-rechner", "/brutto-netto/steuerklassen-vergleich"])}
      faq={[
        { frage: "Wie werden die reduzierten Beiträge berechnet?", antwort: "Über eine ermäßigte beitragspflichtige Einnahme nach § 20 Abs. 2 SGB IV: Statt des tatsächlichen Bruttos wird ein niedrigerer Betrag für die Sozialversicherung herangezogen, der von 603,01 € bis 2.000 € auf das volle Brutto ansteigt. Der genaue Faktor wird jährlich angepasst — der allgemeine Brutto-Netto-Rechner bildet diese Ermäßigung nicht ab und zeigt Midijobs deshalb zu niedrig (er rechnet mit vollen Beiträgen)." },
        { frage: "Gilt der Übergangsbereich für alle Sozialversicherungen?", antwort: "Ja — Renten-, Kranken-, Pflege- und Arbeitslosenversicherung werden alle auf die ermäßigte Bemessungsgrundlage berechnet. Die Lohnsteuer ist davon unberührt und läuft nach dem PAP." },
        { frage: "Was passiert ab 2.000,01 €?", antwort: "Der Übergangsbereich endet — ab dann zahlst du die vollen Arbeitnehmerbeiträge (Rente 9,3 %, Kranken 7,3 % + halber Zusatzbeitrag, Pflege 2,4 % inkl. Kinderlosenzuschlag, Arbeitslosen 1,3 %). Der allgemeine Brutto-Netto-Rechner ist ab dort exakt." },
        { frage: "Kann ich den Midijob mit einem Minijob kombinieren?", antwort: "Ein Minijob neben einer sozialversicherungspflichtigen Hauptbeschäftigung bleibt geringfügig — auch wenn die Hauptbeschäftigung ein Midijob ist. Zwei Midijobs oder ein Midijob plus ein weiterer sozialversicherungspflichtiger Job werden zusammengerechnet." },
        { frage: "Gilt der Übergangsbereich auch für Werkstudenten?", antwort: "Ja, für die Rentenversicherung: Im Bereich 603,01–2.000 € wird auch bei Werkstudenten die RV-Bemessungsgrundlage ermäßigt (§ 20 Abs. 2a SGB IV). Kranken-, Pflege- und Arbeitslosenversicherung sind bei Werkstudenten ohnehin über das Privileg befreit." },
      ]}>
      <div className="card"><h2>Übergangsbereich auf einen Blick</h2>
      <table><thead><tr><th>Monatsbrutto</th><th>Status</th><th>Sozialbeiträge (Arbeitnehmer)</th></tr></thead><tbody>
        <tr><td>bis 603 €</td><td>Minijob</td><td>Nur RV 3,6 % (Befreiung möglich)</td></tr>
        <tr><td>603,01–2.000 €</td><td>Midijob (Übergangsbereich)</td><td>Reduziert, steigend von fast 0 % auf den vollen Satz</td></tr>
        <tr><td>ab 2.000,01 €</td><td>Regulär versicherungspflichtig</td><td>Voller Satz (ca. 20,3 % inkl. Zusatzbeitrag/Kinderlosenzuschlag)</td></tr>
      </tbody></table>
      <p>Für den exakten Midijob-Beitrag nutze den Rechner der Deutschen Rentenversicherung oder deiner Krankenkasse — die Formel hängt vom jährlich angepassten Faktor ab und ist kein fester Prozentsatz, den man in einer Tabelle ablesen könnte. Für alles ab 2.000,01 € ist der <a href="/brutto-netto-rechner">Brutto-Netto-Rechner</a> exakt.</p></div>
    </GuideShell>
  );
}
