import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD E 15 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaE" gruppeId="E15" crumbsLabel="E 15 Gehalt" title="TVöD E 15 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="E 15 ist die höchste reguläre Gruppe der E-Tabelle (daneben gibt es nur noch die Sondergruppe E 15Ü). Sie setzt ein wissenschaftliches Hochschulstudium und Aufgaben mit herausgehobener Bedeutung und besonderer Verantwortung voraus — z. B. Referats- oder Amtsleitung auf höherer Ebene. Das Gehalt liegt zwischen 5.827,86 € (Stufe 1) und 8.204,11 € (Stufe 6) brutto bei Vollzeit."
    wer="Beschäftigte mit wissenschaftlichem Hochschulstudium in herausgehobenen Fach- oder Leitungsfunktionen — z. B. Referatsleitung, Amtsleitung oder vergleichbar verantwortungsvolle Spezialaufgaben."
    nachbar="Darunter: E 14 (Stufe 1: 5.298,27 €). Darüber gibt es in der regulären Tabelle nichts mehr — E 15Ü ist eine Überleitungsgruppe aus dem alten BAT, keine reguläre Eingruppierung für Neueinstellungen, und sie endet bei Stufe 5."
    relatedHrefs={["/tvoed/entgelttabelle", "/tvoed/e-13", "/tvoed-rechner", "/tvoed/jahressonderzahlung", "/tvoed/hoehergruppierung"]}
    faq={[
      { frage: "Was ist E 15Ü?", antwort: "Eine Überleitungsgruppe für Beschäftigte, die 2005 aus dem BAT übergeleitet wurden. Sie ist keine Gruppe, in die man heute neu eingruppiert wird, und sie endet bei Stufe 5." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei E 15?", antwort: "VKA: 85 %. Bund: 75 % (E 13–15). Bei Stufe 6 (8.204,11 €) sind das 6.973,49 € (VKA) bzw. 6.153,08 € (Bund) brutto." },
      { frage: "Ab wann gilt die Reichensteuer (45 %)?", antwort: "Erst ab einem zu versteuernden Einkommen von 277.826 € im Jahr — E 15, Stufe 6 liegt mit rund 98.000 € Jahresbrutto weit darunter. Der Spitzensteuersatz von 42 % greift ab 69.879 € zvE." },
    ]} />;
}
