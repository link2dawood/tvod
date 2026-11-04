import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD P 8 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaP" gruppeId="P8" crumbsLabel="P 8 Gehalt" title="TVöD P 8 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="P 8 liegt eine Stufe über der Regelgruppe P 7 und gilt u. a. für Praxisanleitung und vergleichbare Zusatzaufgaben in der Pflege. Das Gehalt liegt zwischen 3.701,21 € (Stufe 2) und 4.488,98 € (Stufe 6) brutto bei Vollzeit — eine Stufe 1 gibt es für P 8 nicht. Die Jahressonderzahlung beträgt 90 % (P 5–P 8-Regel)."
    wer="Pflegefachkräfte mit Zusatzaufgaben — insbesondere Praxisanleitung für Auszubildende — sowie vergleichbar bewertete pflegerische Spezialaufgaben. Die genaue Abgrenzung zu P 7 steht in der Entgeltordnung (Anlage E)."
    nachbar="Darunter: P 7 (Stufe 2: 3.510,30 €) — die Regelgruppe. Darüber: P 9 (Stufe 2: 3.992,39 €) — u. a. bei Fachweiterbildung und entsprechenden Aufgaben."
    relatedHrefs={["/tvoed/pflege-tabelle", "/tvoed/p-7", "/tvoed/pflegefachkraft", "/tvoed/p-9", "/tvoed-rechner", "/tvoed/stufenlaufzeit"]}
    faq={[
      { frage: "Was ist der Unterschied zwischen P 7 und P 8?", antwort: "P 8 setzt Zusatzaufgaben wie Praxisanleitung voraus. In Stufe 2 beträgt der Unterschied 190,91 € brutto im Monat (3.701,21 € vs. 3.510,30 €), in Stufe 6 sind es 183,58 €." },
      { frage: "Gilt für P 8 auch die 3-Jahre-Regel für Stufe 3?", antwort: "Ja — wie P 7 erreicht auch P 8 die Stufe 3 erst nach 3 Jahren in Stufe 2 (nicht nach 2). Danach gelten die Regellaufzeiten." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei P 8?", antwort: "90 % (P 5–P 8). Bei Stufe 2 sind das 3.331,09 € brutto, bei Stufe 6 4.040,08 € brutto." },
    ]} />;
}
