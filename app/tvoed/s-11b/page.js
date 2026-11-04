import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD S 11b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaS" gruppeId="S11b" crumbsLabel="S 11b Gehalt" title="TVöD S 11b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="S 11b ist die Regelgruppe für staatlich anerkannte Sozialarbeiter und Sozialpädagogen mit Hochschulabschluss im TVöD SuE der Kommunen. Das Gehalt liegt zwischen 3.915,12 € (Stufe 1) und 5.440,57 € (Stufe 6) brutto bei Vollzeit. Die Jahressonderzahlung beträgt 85 % (VKA). Hinzu kommt die SuE-Zulage von 180 € monatlich für S 11b–S 12 (sowie S 14, S 15 Fallgruppe 6)."
    wer="Staatlich anerkannte Sozialarbeiter und Sozialpädagogen mit Hochschulabschluss sowie Heilpädagogen mit abgeschlossener Hochschulbildung (soweit nach Landesrecht vorgesehen, mit staatlicher Anerkennung) mit entsprechender Tätigkeit — sowie Beschäftigte mit gleichwertigen Fähigkeiten und Erfahrungen in entsprechender Tätigkeit."
    nachbar="Darunter: S 11a (Stufe 1: 3.846,25 €). Darüber: S 12 (Stufe 1: 3.968,00 €) — Sozialarbeiter mit schwierigen Tätigkeiten, z. B. im Allgemeinen Sozialen Dienst (ASD) — und S 14 (Stufe 1: 4.073,00 €) für besonders verantwortungsvolle Aufgaben."
    zulagen="SuE-Zulage: 180 € monatlich für S 11b–S 12 (nicht in den Tabellenwerten und nicht in den Netto-Beispielen enthalten)."
    relatedHrefs={["/tvoed/sue-tabelle", "/tvoed/sozialarbeiter", "/tvoed/s-9", "/tvoed-rechner", "/tvoed/eingruppierung"]}
    faq={[
      { frage: "Was ist der Unterschied zwischen S 11b und S 12?", antwort: "S 12 setzt schwierige Tätigkeiten voraus — z. B. im Allgemeinen Sozialen Dienst (ASD), bei Gefährdungseinschätzungen oder in der Eingliederungshilfe. In Stufe 1 beträgt der Unterschied nur 52,45 € brutto im Monat, in Stufe 6 sind es 14,08 € — der Sprung lohnt sich also vor allem über die Zulagen und die weiteren Stufen, nicht über die Tabelle allein." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei S 11b?", antwort: "85 % (VKA). Bei Stufe 1 sind das 3.327,85 € brutto, bei Stufe 6 4.624,48 € brutto." },
      { frage: "Gilt S 11b auch für Sozialarbeiter bei freien Trägern?", antwort: "Nein — freie Träger haben eigene Tarife oder orientieren sich an TVöD, ohne tariflich gebunden zu sein. S 11b gilt für kommunale Arbeitgeber nach TVöD SuE (VKA)." },
    ]} />;
}
