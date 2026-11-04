import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD S 8a Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaS" gruppeId="S8a" crumbsLabel="S 8a Gehalt" title="TVöD S 8a Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="S 8a ist die Regelgruppe für Erzieher im TVöD SuE der Kommunen. Das Gehalt liegt zwischen 3.509,44 € (Stufe 1) und 4.668,84 € (Stufe 6) brutto bei Vollzeit. Die Jahressonderzahlung beträgt 85 % (VKA). Hinzu kommt die SuE-Zulage von 130 € monatlich für S 2–S 11a — sie ist in den Tabellenwerten nicht enthalten."
    wer="Erzieher in kommunalen Kitas und vergleichbaren Einrichtungen des Sozial- und Erziehungsdienstes, deren Tätigkeit den Merkmalen von S 8a entspricht. Ob S 8a oder S 8b gilt, entscheidet die Schwierigkeit der Tätigkeit und die Verantwortung — nicht der Abschluss allein."
    nachbar="Darüber: S 8b (Stufe 1: 3.578,87 €) — Erzieher mit schwierigen Tätigkeiten. Darüber liegen S 9 (Stufe 1: 3.648,68 €, u. a. Kita-Leitung kleiner Einrichtungen) und S 11b (Sozialarbeiter, Stufe 1: 3.915,12 €)."
    zulagen="SuE-Zulage: 130 € monatlich für S 2–S 11a (nicht in den Tabellenwerten und nicht in den Netto-Beispielen enthalten). Sie ist steuer- und sozialabgabenpflichtig, erhöht also das Brutto — rechne sie im TVöD-Rechner als Teil des Bruttos, wenn du dein exaktes Netto willst."
    relatedHrefs={["/tvoed/sue-tabelle", "/tvoed/erzieher", "/tvoed/s-8b", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner"]}
    faq={[
      { frage: "Was ist der Unterschied zwischen S 8a und S 8b?", antwort: "Die Schwierigkeit der Tätigkeit: S 8b setzt schwierigere Tätigkeiten bzw. besondere Verantwortung voraus. In Stufe 1 beträgt der Unterschied 69,43 € brutto im Monat, in Stufe 6 sind es 522,06 €." },
      { frage: "Bekomme ich die SuE-Zulage automatisch?", antwort: "Ja, wenn du in S 2–S 11a eingruppiert bist — sie beträgt 130 € monatlich und ist in der Gehaltsabrechnung als eigene Position ausgewiesen." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei S 8a?", antwort: "85 % (VKA). Bei Stufe 1 sind das 2.983,02 € brutto, bei Stufe 6 3.968,51 € brutto." },
    ]} />;
}
