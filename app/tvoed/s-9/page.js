import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD S 9 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaS" gruppeId="S9" crumbsLabel="S 9 Gehalt" title="TVöD S 9 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="S 9 ist die erste Leitungsgruppe im SuE: Leiter von Kindertagesstätten mit einer Durchschnittsbelegung bis zu 39 Plätzen, koordinierende Erzieher und Heilpädagogen. Das Gehalt liegt zwischen 3.648,68 € (Stufe 1) und 5.272,60 € (Stufe 6) brutto bei Vollzeit. Die Jahressonderzahlung beträgt 85 % (VKA). Hinzu kommt die SuE-Zulage von 130 € monatlich (S 2–S 11a)."
    wer="Leiter kleiner Kitas (bis 39 Plätze Durchschnittsbelegung), ständige Vertreter von Leitern von Kitas ab 40 Plätzen, koordinierende Erzieher und Heilpädagogen mit entsprechender Tätigkeit."
    nachbar="Darunter: S 8b (Stufe 1: 3.578,87 €, Erzieher mit schwierigen Tätigkeiten). Darüber: S 13 (Stufe 1: 3.978,00 €) — Kita-Leitung ab 40 Plätzen — und S 15 (Stufe 1: 4.113,00 €) — Kita-Leitung ab 70 Plätzen. Die vollständige Leitungsstaffel steht auf der Kita-Leitung-Seite."
    zulagen="SuE-Zulage: 130 € monatlich für S 2–S 11a (nicht in den Tabellenwerten und nicht in den Netto-Beispielen enthalten)."
    relatedHrefs={["/tvoed/sue-tabelle", "/tvoed/kita-leitung", "/tvoed/erzieher", "/tvoed/s-8b", "/tvoed-rechner"]}
    faq={[
      { frage: "Ab wann ist eine Kita-Leitung S 13 statt S 9?", antwort: "Ab einer Durchschnittsbelegung von 40 Plätzen: bis 39 Plätze = S 9, 40–69 Plätze = S 13, 70–99 = S 15, 100–129 = S 16, 130–179 = S 17, ab 180 = S 18. Maßgeblich ist die Zahl der vergebenen, je Tag gleichzeitig belegbaren Plätze." },
      { frage: "Was ist eine Durchschnittsbelegung?", antwort: "Die Zahl der vergebenen Plätze, die je Tag gleichzeitig belegbar sind — ermittelt grundsätzlich aus dem Zeitraum 1. Oktober bis 31. Dezember des Vorjahres. Eine Unterschreitung um bis zu 5 % führt in der Regel nicht sofort zu einer Herabgruppierung." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei S 9?", antwort: "85 % (VKA). Bei Stufe 1 sind das 3.101,38 € brutto, bei Stufe 6 4.481,71 € brutto." },
    ]} />;
}
