import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD E 9b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaE" gruppeId="E9b" crumbsLabel="E 9b Gehalt" title="TVöD E 9b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="E 9b ist die zentrale Gruppe des gehobenen Dienstes: Bachelor-Abschluss, Fachhochschulstudium oder Verwaltungsfachwirt (Verwaltungslehrgang II) mit entsprechender Tätigkeit. Das Gehalt liegt zwischen 3.779,84 € (Stufe 1) und 5.313,37 € (Stufe 6) brutto bei Vollzeit. Die Jahressonderzahlung beträgt bei der VKA 85 %, beim Bund 90 % (E 9a–12)."
    wer="Beschäftigte mit Bachelor- oder Fachhochschulabschluss in gehobener Sachbearbeitung, z. B. in der Verwaltung, im Sozialamt oder in der Personalabteilung — sowie Verwaltungsfachwirte (AL II) mit entsprechend bewerteten Aufgaben. Entscheidend ist die Tätigkeit, nicht der Abschluss allein."
    nachbar="Darunter: E 9a (selbstständige Sachbearbeitung mit dreijähriger Ausbildung, Stufe 1: 3.658,61 €). Darüber: E 10 (Stufe 1: 4.124,53 €) und E 11 (Stufe 1: 4.269,64 €) — dort liegen Leitungs- und besonders anspruchsvolle Fachaufgaben."
    zulagen="Keine gruppenspezifische Zulage wie Pflege- oder SuE-Zulage. Leistungsentgelt nach § 18 TVöD und ggf. Fachkräftezulagen nach Dienstvereinbarung kommen ggf. hinzu und sind in den Netto-Beispielen nicht enthalten."
    relatedHrefs={["/tvoed/entgelttabelle", "/tvoed/verwaltungsfachangestellte", "/tvoed/e-11", "/tvoed-rechner", "/tvoed/hoehergruppierung"]}
    faq={[
      { frage: "Was ist der Unterschied zwischen E 9a und E 9b?", antwort: "E 9a setzt in der Regel eine dreijährige Ausbildung und selbstständige Sachbearbeitung voraus, E 9b einen Bachelor/FH-Abschluss oder Verwaltungsfachwirt mit gehobener Sachbearbeitung. Der Unterschied in Stufe 1 beträgt 121,23 € brutto im Monat — in Stufe 6 sind es 333,40 €." },
      { frage: "Reicht ein Bachelor für E 9b?", antwort: "Der Abschluss allein reicht nicht — die übertragenen Aufgaben müssen den Tätigkeitsmerkmalen von E 9b entsprechen. Ein Bachelor in einer E-9a-Stelle bleibt E 9a, bis die Aufgaben sich ändern." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei E 9b?", antwort: "VKA: 85 % des Jul–Sep-Durchschnitts. Bund: 90 %. Bei Stufe 3 (4.203,56 €) sind das 3.573,03 € (VKA) bzw. 3.783,20 € (Bund) brutto." },
      { frage: "Wie komme ich von E 9b auf E 11?", antwort: "Nur über eine Höhergruppierung bei geänderten Aufgaben — stufengleich, mit neu beginnender Stufenlaufzeit. Siehe Höhergruppierung-Ratgeber." },
    ]} />;
}
