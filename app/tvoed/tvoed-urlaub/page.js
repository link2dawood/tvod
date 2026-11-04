import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Urlaub 2026/2027: 30 Tage, ab 2027 31 Tage, Umrechnung" };
export default function Page() {
  return (
    <GuideShell title="TVöD Urlaub: 30 Tage — und ab 2027 einen mehr" validity="Gültig: § 26 TVöD — 30 Arbeitstage (2026), 31 Arbeitstage ab 2027 (Bund/Kommunen)"
      intro="Der TVöD-Urlaub ist einfach zu merken und trotzdem oft falsch verstanden: 30 Arbeitstage bei einer 5-Tage-Woche — und ab dem Kalenderjahr 2027 sind es 31 Arbeitstage bei Bund und Kommunen. Er hängt nicht vom Alter und nicht von der Betriebszugehörigkeit ab, sondern von der Verteilung deiner Arbeitszeit auf die Wochentage."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TVöD Urlaub" }]}
      relatedLinks={related(["/tvoed/teilzeit-rechner", "/tvoed/tvoed-arbeitszeit", "/tvoed-rechner", "/tvoed/tvoed-vs-beamte"])}
      faq={[
        { frage: "Wie viele Urlaubstage habe ich?", antwort: "Bei einer 5-Tage-Woche: 30 Arbeitstage im Jahr 2026, 31 Arbeitstage ab 2027 (Bund und Kommunen, § 26 TVöD). Bei einer anderen Verteilung der Arbeitszeit wird der Anspruch entsprechend umgerechnet — siehe Tabelle unten." },
        { frage: "Steigt der Urlaub mit dem Alter oder der Dienstzeit?", antwort: "Nein — im TVöD gibt es keine Alters- oder Dienstzeitstaffel für den Erholungsurlaub. Wer das aus anderen Tarifen oder aus dem alten BAT kennt, verwechselt das: Im TVöD ist der Anspruch für alle gleich (Ausnahme: Zusatzurlaub für Schicht/Wechselschicht und für Schwerbehinderte)." },
        { frage: "Wie wird bei Teilzeit umgerechnet?", antwort: "Nach den Arbeitstagen pro Woche, nicht nach den Stunden: 30 × (Arbeitstage ÷ 5). Wer 3 Tage pro Woche arbeitet, hat 18 Urlaubstage — aber jeder Urlaubstag deckt einen ganzen Arbeitstag ab. Wer die Stunden reduziert, aber an 5 Tagen arbeitet, behält 30 Tage." },
        { frage: "Was ist Zusatzurlaub?", antwort: "Nach § 27 TVöD für ständige Schicht- und Wechselschichtarbeit: 1 Arbeitstag je 4 zusammenhängende Monate ständiger Schichtarbeit bzw. je 2 Monate ständiger Wechselschichtarbeit. Schwerbehinderte erhalten zusätzlich 5 Arbeitstage nach § 208 SGB IX (bei 5-Tage-Woche). Im SuE gibt es außerdem Regenerationstage nach den SuE-Regelungen." },
        { frage: "Kann ich Urlaub ins nächste Jahr übertragen?", antwort: "Ja, aber übertragener Urlaub muss grundsätzlich in den ersten drei Monaten des folgenden Kalenderjahres angetreten werden (§ 26 Abs. 2 Buchst. a TVöD) — sonst verfällt er, außer bei Krankheit oder anderen gesetzlichen Ausnahmen." },
        { frage: "Was passiert bei Eintritt oder Austritt im Laufe des Jahres?", antwort: "Zwölftelung: Für jeden vollen Beschäftigungsmonat gibt es 1/12 des Jahresurlaubs. Ein Monat, in dem du nur teilweise beschäftigt warst, zählt nicht als voller Monat." },
      ]}>
      <div className="card"><h2>Urlaubstage nach Arbeitstagen pro Woche (2026, 30-Tage-Basis)</h2>
      <table><thead><tr><th>Arbeitstage / Woche</th><th>Urlaubstage / Jahr (2026)</th><th>Rechnerisch ab 2027 (31-Tage-Basis)</th></tr></thead><tbody>
        <tr><td>1</td><td>6</td><td>6,2</td></tr>
        <tr><td>2</td><td>12</td><td>12,4</td></tr>
        <tr><td>3</td><td>18</td><td>18,6</td></tr>
        <tr><td>4</td><td>24</td><td>24,8</td></tr>
        <tr><td>5</td><td>30</td><td>31</td></tr>
        <tr><td>6</td><td>36</td><td>37,2</td></tr>
      </tbody></table>
      <p><small>Die 2027-Werte sind rechnerisch (31 × Tage ÷ 5); wie Bruchteile in ganze Tage umgerechnet werden, regelt die Dienstvereinbarung deines Arbeitgebers. Sparkassen (TVöD-S) haben eigene Regelungen (32 Tage, mit Dienstvereinbarung bis 34).</small></p></div>
    </GuideShell>
  );
}
