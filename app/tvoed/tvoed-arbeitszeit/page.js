import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Arbeitszeit: 39 Stunden, Korridor, TV-L und Beamte im Vergleich" };
export default function Page() {
  return (
    <GuideShell title="TVöD Arbeitszeit: 39 Stunden — und was das für deinen Stundenlohn heißt" validity="Gültig: § 6 TVöD, aktuelle Fassung (Ost-Angleichung seit 01.01.2023)"
      intro="Die regelmäßige Arbeitszeit im TVöD beträgt 39 Stunden pro Woche — für den Bund und für die Kommunen in West und Ost. Die oft noch zitierten 38,5 Stunden (VKA West) und 40 Stunden (VKA Ost) sind veraltet: Ost wurde zum 01.01.2022 auf 39,5 und zum 01.01.2023 auf 39,0 Stunden angeglichen. Wer mit alten Tabellen rechnet, rechnet mit der falschen Stundenzahl."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TVöD Arbeitszeit" }]}
      relatedLinks={related(["/tvoed/tvoed-vs-tv-l", "/tvoed/tvoed-bund-vs-vka", "/tvoed/teilzeit-rechner", "/tvoed/tvoed-vs-beamte"])}
      faq={[
        { frage: "Wie viele Stunden arbeite ich nach TVöD?", antwort: "Bund: durchschnittlich 39 Stunden wöchentlich. VKA: durchschnittlich 39 Stunden in West und Ost (Ost seit 01.01.2023). Auf landesbezirklicher Ebene können die Tarifvertragsparteien in West eine Verlängerung auf bis zu 40 Stunden vereinbaren — das gilt nur, wo eine solche Vereinbarung besteht, und steht dann in deinem Arbeitsvertrag." },
        { frage: "Was ist der Arbeitszeitkorridor?", antwort: "Nach § 6 TVöD kann durch Betriebs- oder Dienstvereinbarung ein wöchentlicher Arbeitszeitkorridor von bis zu 45 Stunden vereinbart werden. Innerhalb des Korridors wird die Arbeitszeit über einen Ausgleichszeitraum von bis zu einem Jahr ausgeglichen — Überstunden im Korridor sind keine Mehrarbeit im tariflichen Sinne." },
        { frage: "Wie ist die Arbeitszeit im TV-L?", antwort: "Je nach Bundesland — in der Regel 39 bis 40 Stunden, in einigen Ländern auch mehr. Der TV-L ist ein Ländertarif, deshalb gibt es keine bundeseinheitliche Zahl wie im TVöD. Maßgeblich ist der Arbeitsvertrag und die landesspezifische Regelung." },
        { frage: "Und bei Beamten?", antwort: "Beamte arbeiten je nach Landesarbeitszeitverordnung oder Bundes-Arbeitszeitverordnung oft 40 bis 41 Stunden pro Woche — also 1 bis 2 Stunden mehr als TVöD-Beschäftigte bei vergleichbarem Monatsbrutto. Der Stundenlohn ist dadurch rechnerisch niedriger, auch wenn das Monatsgehalt ähnlich aussieht." },
        { frage: "Ändert die Arbeitszeit das Tabellenentgelt?", antwort: "Nein — das Tabellenentgelt ist ein Monatsbetrag für Vollzeit, unabhängig davon, ob die Vollzeit 39 oder 40 Stunden beträgt. Was sich ändert, ist der Stundenlohn: Bei 40 Stunden ist er rund 2,5 % niedriger als bei 39 Stunden (40 ÷ 39 = 1,0256), bei gleichem Monatsbrutto." },
        { frage: "Was gilt bei Teilzeit?", antwort: "Die regelmäßige Arbeitszeit wird anteilig reduziert — z. B. 75 % von 39 Stunden = 29,25 Stunden pro Woche. Das Tabellenentgelt wird im gleichen Verhältnis gekürzt. Siehe Teilzeit-Rechner." },
      ]}>
      <div className="card"><h2>Arbeitszeit im Überblick</h2>
      <table><thead><tr><th>Bereich</th><th>Regelmäßige Arbeitszeit</th></tr></thead><tbody>
        <tr><td>TVöD Bund</td><td>39 Stunden / Woche</td></tr>
        <tr><td>TVöD VKA West</td><td>39 Stunden / Woche (landesbezirklich bis 40 möglich)</td></tr>
        <tr><td>TVöD VKA Ost</td><td>39 Stunden / Woche (seit 01.01.2023; davor 40, ab 2022 39,5)</td></tr>
        <tr><td>TV-L</td><td>Je nach Land, in der Regel 39–40 Stunden / Woche</td></tr>
        <tr><td>Beamte</td><td>Je nach Land/Bund, oft 40–41 Stunden / Woche</td></tr>
      </tbody></table>
      <p>Monatsstunden bei Vollzeit: 39 h × 52 Wochen ÷ 12 Monate = 169 Stunden. Bei 40 h: 173,33 Stunden. Das Tabellenentgelt bleibt gleich — der Stundenlohn sinkt mit jeder zusätzlichen Stunde.</p></div>
    </GuideShell>
  );
}
