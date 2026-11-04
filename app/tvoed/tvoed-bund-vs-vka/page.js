import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Bund vs VKA: Gleiche Tabelle, andere Jahressonderzahlung" };
export default function Page() {
  return (
    <GuideShell title="TVöD Bund vs VKA: Gleiche Tabelle, andere Jahressonderzahlung" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027"
      intro="TVöD Bund und TVöD VKA teilen sich die Entgelttabelle — wer nur auf die Monatswerte schaut, sieht keinen Unterschied. Der Unterschied steckt in der Jahressonderzahlung und in den Rahmenbedingungen: Bund und Kommunen haben getrennte Tarifverträge mit eigenen JSZ-Sätzen, eigener Arbeitszeitregelung und eigener Zusatzversorgungskasse."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TVöD Bund vs VKA" }]}
      relatedLinks={related(["/tvoed/jahressonderzahlung", "/tvoed/jahressonderzahlung-rechner", "/tvoed/entgelttabelle", "/tvoed/tvoed-vs-tv-l"])}
      faq={[
        { frage: "Ist die Tabelle bei Bund und VKA wirklich identisch?", antwort: "Für die E-, P- und S-Tabellen in diesem Zeitraum ja — die Tarifeinigung 06.04.2025 gilt für beide Bereiche mit +2,8 % ab 01.05.2026. Unterschiede entstehen erst bei JSZ, Arbeitszeit und Zusatzversorgung." },
        { frage: "Wer bekommt mehr Weihnachtsgeld — Bund oder Kommune?", antwort: "Es hängt von der Gruppe ab: In E 1–8 bekommt der Bund 95 % gegenüber 85 % bei der VKA, in E 9a–12 sind es 90 % gegenüber 85 %. In E 13–15 dreht es sich um: Der Bund zahlt nur 75 %, die VKA weiterhin 85 %. In höheren Gruppen ist die Kommune also besser." },
        { frage: "Wie ist die Arbeitszeit?", antwort: "Bund: 39 Stunden pro Woche. VKA: 39 Stunden in West und Ost (Ost seit 2023 angeglichen); auf landesbezirklicher Ebene kann sie in West bis auf 40 Stunden verlängert werden. Die genaue Arbeitszeit steht in deinem Arbeitsvertrag — sie ändert das Tabellenentgelt nicht, wohl aber den Stundenlohn." },
        { frage: "VBL oder ZVK?", antwort: "Bund: VBL. Kommunen: die Zusatzversorgungskasse des jeweiligen kommunalen Arbeitgeberverbands. Der Arbeitnehmeranteil ist in beiden Systemen ein eigener Abzug neben den Sozialversicherungen — siehe VBL-Ratgeber." },
        { frage: "Kann ich zwischen Bund und Kommune wechseln?", antwort: "Ja, aber die Stufe wird neu festgestellt und die JSZ-Sätze wechseln mit dem Arbeitgeber. Bei einem Wechsel in E 13+ von der Kommune zum Bund sinkt die JSZ von 85 % auf 75 % — rechne das vorher im JSZ-Rechner nach." },
      ]}>
      <div className="card"><h2>Jahressonderzahlung: Der einzige große Unterschied</h2>
      <table><thead><tr><th>Gruppe</th><th>VKA</th><th>Bund</th></tr></thead><tbody>
        <tr><td>E 1–8</td><td>85 %</td><td>95 %</td></tr>
        <tr><td>E 9a–12</td><td>85 %</td><td>90 %</td></tr>
        <tr><td>E 13–15</td><td>85 %</td><td>75 %</td></tr>
      </tbody></table>
      <p>Beispiel E 13, Stufe 3 (5.709,87 €): VKA-JSZ 4.853,39 €, Bund-JSZ 4.282,40 € — ein Unterschied von 570,99 € pro Jahr zugunsten der Kommune. Umgekehrt bei E 8, Stufe 3 (3.843,36 €): VKA 3.266,86 €, Bund 3.651,19 € — 384,33 € zugunsten des Bundes.</p></div>
    </GuideShell>
  );
}
