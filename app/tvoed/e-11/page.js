import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD E 11 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaE" gruppeId="E11" crumbsLabel="E 11 Gehalt" title="TVöD E 11 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="E 11 liegt im gehobenen Dienst oberhalb von E 9b/E 10: Bachelor- oder Fachhochschulabschluss mit besonders anspruchsvollen Fachaufgaben oder Leitungsfunktionen, z. B. Sachgebietsleitung. Das Gehalt liegt zwischen 4.269,64 € (Stufe 1) und 6.326,77 € (Stufe 6) brutto bei Vollzeit."
    wer="Beschäftigte mit Bachelor/FH-Abschluss oder Verwaltungsfachwirt, die besonders anspruchsvolle Fachaufgaben wahrnehmen oder ein Sachgebiet leiten — z. B. Sachgebietsleitung im Ordnungsamt, in der Personalabteilung oder im Sozialamt."
    nachbar="Darunter: E 10 (Stufe 1: 4.124,53 €) und E 9b (Stufe 1: 3.779,84 €). Darüber: E 12 (Stufe 1: 4.415,70 €) — dort liegen Aufgaben, die ein wissenschaftliches Hochschulstudium in der Regel nicht erfordern, aber eine herausgehobene Verantwortung tragen — und E 13 (Master, Stufe 1: 4.901,11 €)."
    relatedHrefs={["/tvoed/entgelttabelle", "/tvoed/ordnungsamt", "/tvoed/e-9b", "/tvoed/e-13", "/tvoed-rechner", "/tvoed/hoehergruppierung"]}
    faq={[
      { frage: "Was unterscheidet E 11 von E 9b?", antwort: "Die Anforderungshöhe: E 11 verlangt besonders anspruchsvolle Fachaufgaben oder eine Leitungsfunktion, E 9b gehobene Sachbearbeitung. In Stufe 1 beträgt der Unterschied 489,80 € brutto im Monat." },
      { frage: "Brauche ich für E 11 einen Master?", antwort: "Nein — E 11 ist eine Gruppe des gehobenen Dienstes (Bachelor/FH). E 13 ist die erste Gruppe, die in der Regel ein wissenschaftliches Hochschulstudium (Master) voraussetzt." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei E 11?", antwort: "VKA: 85 %. Bund: 90 % (E 9a–12). Bei Stufe 3 (5.046,03 €) sind das 4.289,13 € (VKA) bzw. 4.541,43 € (Bund) brutto." },
    ]} />;
}
