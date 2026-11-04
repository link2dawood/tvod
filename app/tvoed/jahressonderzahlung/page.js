import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Jahressonderzahlung 2026: Regeln, Sätze, Beispiele" };
export default function Page() {
  return (
    <GuideShell title="TVöD Jahressonderzahlung 2026: Regeln, Sätze, Beispiele" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · TV-L 01.04.2026–28.02.2027"
      intro="Die Jahressonderzahlung (JSZ, umgangssprachlich Weihnachtsgeld) ist die einmalige Sonderzahlung im November nach § 20 TVöD bzw. TV-L. Sie ist kein 13. Monatsgehalt in voller Höhe — der Satz hängt vom Tarif und von der Entgeltgruppe ab, und er ist der größte systematische Unterschied zwischen TVöD und TV-L."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Jahressonderzahlung" }]}
      relatedLinks={related(["/tvoed/jahressonderzahlung-rechner", "/tvoed-rechner", "/tvoed/tvoed-vs-tv-l", "/tvoed/teilzeit-rechner"])}
      faq={[
        { frage: "Wann wird die Jahressonderzahlung gezahlt?", antwort: "Mit dem Novembergehalt. Bemessungsgrundlage ist im Regelfall der Durchschnitt des monatlichen Entgelts von Juli bis September." },
        { frage: "Muss ich am 1. Dezember noch beschäftigt sein?", antwort: "Ja — der Anspruch setzt im Regelfall ein Arbeitsverhältnis am 1. Dezember voraus. Wer vorher ausscheidet, verliert die JSZ in der Regel, auch wenn er Juli bis September gearbeitet hat." },
        { frage: "Was passiert bei Monaten ohne Entgeltanspruch?", antwort: "Jeder volle Kalendermonat ohne Entgeltanspruch kürzt die JSZ um 1/12. Ausnahmen gibt es u. a. für Mutterschutz, Elternzeit im Geburtsjahr und Monate mit Krankengeldzuschuss — die genauen Ausnahmen stehen in § 20 TVöD." },
        { frage: "Wird die JSZ bei Teilzeit gekürzt?", antwort: "Sie ist proportional: Sie bemisst sich am tatsächlichen Teilzeit-Entgelt. Eine zusätzliche Teilzeit-Kürzung darüber hinaus gibt es nicht." },
        { frage: "Kommt die JSZ netto an?", antwort: "Nein. Sie wird im November als sonstiger Bezug versteuert und trägt Sozialabgaben (bis zu den Beitragsbemessungsgrenzen). Der Rechner zeigt sie deshalb brutto — rechne sie nicht 1:1 zum Netto hinzu." },
      ]}>
      <div className="card"><h2>Die Sätze 2026 im Überblick</h2>
      <table><thead><tr><th>Tarif</th><th>Satz</th></tr></thead><tbody>
        <tr><td>TVöD VKA (Kommunen)</td><td>85 % — Pflege P 5–P 8: 90 %, P 9–P 16: 85 %</td></tr>
        <tr><td>TVöD Bund</td><td>95 % (E 1–8) · 90 % (E 9a–12) · 75 % (E 13–15)</td></tr>
        <tr><td>TV-L (Länder)</td><td>87,43 % (E 1–4) · 88,14 % (E 5–8) · 74,35 % (E 9a–11) · 46,47 % (E 12–13) · 32,53 % (E 14–15)</td></tr>
      </tbody></table>
      <p>Der TV-L-Satz fällt ab E 12 steil ab — das ist der Grund, warum ein Wechsel von TVöD zu TV-L in höheren Gruppen deutlich mehr kostet als der reine Tabellenunterschied vermuten lässt.</p></div>
      <div className="card"><h2>Beispiel: E 13, Stufe 3</h2>
      <table><thead><tr><th>Tarif</th><th>Monatsbrutto</th><th>Satz</th><th>JSZ brutto</th></tr></thead><tbody>
        <tr><td>TVöD VKA</td><td>5.709,87 €</td><td>85 %</td><td>4.853,39 €</td></tr>
        <tr><td>TVöD Bund</td><td>5.709,87 €</td><td>75 %</td><td>4.282,40 €</td></tr>
        <tr><td>TV-L</td><td>5.366,89 €</td><td>46,47 %</td><td>2.493,99 €</td></tr>
      </tbody></table>
      <p>Rechne deine eigene JSZ im <a href="/tvoed/jahressonderzahlung-rechner">Jahressonderzahlung-Rechner</a> — mit Teilzeit und Monaten ohne Entgeltanspruch.</p></div>
      <div className="card"><h2>Häufige Fehler</h2>
      <ul>
        <li>TV-L-Satz auf TVöD anwenden (oder umgekehrt) — die Sätze unterscheiden sich um bis zu 50 Prozentpunkte.</li>
        <li>JSZ mit dem November-Entgelt statt dem Jul–Sep-Durchschnitt berechnen — bei Stufenaufstieg im Herbst zählt der Durchschnitt, nicht das Novembergehalt.</li>
        <li>JSZ netto zum Jahresnetto addieren — sie wird versteuert und verbeitragt.</li>
      </ul></div>
    </GuideShell>
  );
}
