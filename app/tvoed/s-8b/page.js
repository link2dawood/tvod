import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD S 8b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaS" gruppeId="S8b" crumbsLabel="S 8b Gehalt" title="TVöD S 8b Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="S 8b gilt für Erzieher mit schwierigen Tätigkeiten bzw. besonderer Verantwortung — eine Gruppe über der Regelgruppe S 8a. Das Gehalt liegt zwischen 3.578,87 € (Stufe 1) und 5.190,90 € (Stufe 6) brutto bei Vollzeit. Die Jahressonderzahlung beträgt 85 % (VKA). Hinzu kommt die SuE-Zulage von 130 € monatlich (S 2–S 11a)."
    wer="Erzieher, deren Tätigkeit als schwierig im Sinne der SuE-Entgeltordnung bewertet ist — z. B. bei besonderer Verantwortung für Gruppen mit erhöhtem Förderbedarf oder vergleichbaren Merkmalen. Die Abgrenzung zu S 8a steht in der Entgeltordnung; im Zweifel lohnt sich eine Eingruppierungsprüfung."
    nachbar="Darunter: S 8a (Stufe 1: 3.509,44 €, Regelgruppe). Darüber: S 9 (Stufe 1: 3.648,68 €, u. a. Kita-Leitung kleiner Einrichtungen) und S 11b (Sozialarbeiter, Stufe 1: 3.915,12 €)."
    zulagen="SuE-Zulage: 130 € monatlich für S 2–S 11a (nicht in den Tabellenwerten und nicht in den Netto-Beispielen enthalten)."
    relatedHrefs={["/tvoed/sue-tabelle", "/tvoed/erzieher", "/tvoed/s-8a", "/tvoed/s-9", "/tvoed-rechner", "/tvoed/eingruppierung"]}
    faq={[
      { frage: "Bin ich S 8a oder S 8b?", antwort: "Das hängt von den übertragenen Tätigkeiten ab — S 8b setzt schwierigere Tätigkeiten bzw. besondere Verantwortung voraus. Die genaue Abgrenzung steht in der SuE-Entgeltordnung. Wer unsicher ist, lässt die Eingruppierung prüfen (Personalrat, Gewerkschaft)." },
      { frage: "Wie hoch ist das Netto bei S 8b, Stufe 1?", antwort: "Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: 2.311,88 € netto bei 3.578,87 € brutto — ohne die 130-€-SuE-Zulage. Mit Zulage (3.708,87 € brutto) läge das Netto höher." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei S 8b?", antwort: "85 % (VKA). Bei Stufe 1 sind das 3.042,04 € brutto, bei Stufe 6 4.412,27 € brutto." },
    ]} />;
}
