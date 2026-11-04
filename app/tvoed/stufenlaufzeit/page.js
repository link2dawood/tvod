import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
export const metadata = { title: "TVöD Stufenlaufzeit: § 16, 15 Jahre bis Stufe 6, Ausnahmen" };
export default function Page() {
  return (
    <GuideShell title="TVöD Stufenlaufzeit: Wann du die nächste Stufe erreichst" validity="Gültig: TVöD VKA/Bund 01.05.2026–31.03.2027 · TV-L 01.04.2026–28.02.2027"
      intro="Die Stufe ist der zweite Hebel deines TVöD-Gehalts — nach der Entgeltgruppe. Sie richtet sich nach der Berufserfahrung im öffentlichen Dienst, nicht nach dem Alter. Im Regelfall brauchst du 15 Jahre, um von Stufe 1 auf Stufe 6 zu kommen. Wer die Laufzeiten kennt, kann seinen nächsten Gehaltssprung auf den Monat genau vorhersagen."
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "Stufenlaufzeit" }]}
      relatedLinks={related(["/tvoed/stufenrechner", "/tvoed-rechner", "/tvoed/eingruppierung", "/tvoed/teilzeit-rechner"])}
      faq={[
        { frage: "Wie lange dauert es bis Stufe 6?", antwort: "Im Regelfall 15 Jahre: 1 Jahr in Stufe 1, 2 in Stufe 2, 3 in Stufe 3, 4 in Stufe 4 und 5 in Stufe 5. Danach bleibst du in Stufe 6 — es gibt keine Stufe 7." },
        { frage: "Verlängert Teilzeit die Stufenlaufzeit?", antwort: "Im Regelfall nein. Die Laufzeit läuft in Kalenderjahren, unabhängig vom Beschäftigungsumfang. Das ist einer der häufigsten Irrtümer bei Teilzeit." },
        { frage: "Kann ich eine Stufe schneller erreichen?", antwort: "§ 17 TVöD erlaubt eine Verkürzung bei erheblich überdurchschnittlicher Leistung — sie ist aber selten, muss beantragt/begründet werden und ist kein normaler Weg. Plane nicht mit ihr." },
        { frage: "Was passiert bei Höhergruppierung?", antwort: "Bei einer Höhergruppierung wirst du in der neuen Gruppe in der Regel stufengleich eingruppiert, und die Stufenlaufzeit beginnt in der neuen Stufe neu. Der Sprung lohnt sich trotzdem fast immer, weil die neue Tabelle höher liegt." },
        { frage: "Zählt Berufserfahrung außerhalb des öffentlichen Dienstes?", antwort: "Bei der Einstellung kann einschlägige Berufserfahrung berücksichtigt werden — du startest dann ggf. nicht in Stufe 1, sondern in einer höheren Stufe. Das ist Verhandlungssache vor Vertragsabschluss, nachher kaum noch korrigierbar." },
      ]}>
      <div className="card"><h2>Die Regellaufzeiten (§ 16 TVöD)</h2>
      <table><thead><tr><th>Übergang</th><th>Dauer</th><th>Kumuliert ab Einstellung</th></tr></thead><tbody>
        <tr><td>Stufe 1 → 2</td><td>1 Jahr</td><td>1 Jahr</td></tr>
        <tr><td>Stufe 2 → 3</td><td>2 Jahre</td><td>3 Jahre</td></tr>
        <tr><td>Stufe 3 → 4</td><td>3 Jahre</td><td>6 Jahre</td></tr>
        <tr><td>Stufe 4 → 5</td><td>4 Jahre</td><td>10 Jahre</td></tr>
        <tr><td>Stufe 5 → 6</td><td>5 Jahre</td><td>15 Jahre</td></tr>
      </tbody></table></div>
      <div className="card"><h2>Ausnahmen, die man kennen muss</h2>
      <ul>
        <li><strong>E 1</strong> beginnt bei Stufe 2 — es gibt keine Stufe 1.</li>
        <li><strong>P 7–P 16 (Pflege)</strong> beginnen bei Stufe 2 — ebenfalls keine Stufe 1.</li>
        <li><strong>P 7 und P 8</strong> erreichen Stufe 3 erst nach 3 Jahren in Stufe 2 (nicht nach 2).</li>
        <li><strong>E 15Ü</strong> endet bei Stufe 5 — es gibt keine Stufe 6.</li>
        <li>Bei Einstellung mit einschlägiger Berufserfahrung kann eine höhere Anfangsstufe vereinbart werden.</li>
      </ul>
      <p>Deinen persönlichen Pfad — mit Datum und Gehalt je Stufe — rechnet der <a href="/tvoed/stufenrechner">Stufenrechner</a>. Beachte: Der Rechner bildet die P-7/P-8-Ausnahme (3 Jahre in Stufe 2) derzeit nicht ab; für P-Gruppen gilt die Tabelle oben.</p></div>
    </GuideShell>
  );
}
