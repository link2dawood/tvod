import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD P 9 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaP" gruppeId="P9" crumbsLabel="P 9 Gehalt" title="TVöD P 9 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="P 9 liegt über P 7/P 8 und gilt u. a. für Pflegefachkräfte mit Fachweiterbildung und entsprechenden Aufgaben sowie für vergleichbar bewertete pflegerische Spezialfunktionen. Das Gehalt liegt zwischen 3.992,39 € (Stufe 2) und 4.662,42 € (Stufe 6) brutto bei Vollzeit — eine Stufe 1 gibt es für P 9 nicht. Die Jahressonderzahlung beträgt 85 % (P 9–P 16)."
    wer="Pflegefachkräfte mit Fachweiterbildung (z. B. Intensivpflege, Anästhesie, Onkologie — je nach Einsatzbereich) und vergleichbar bewerteten Spezialaufgaben. Ob die Weiterbildung allein für P 9 reicht, hängt von den tatsächlich übertragenen Aufgaben ab — die Entgeltordnung (Anlage E) entscheidet, nicht das Zertifikat allein."
    nachbar="Darunter: P 8 (Stufe 2: 3.701,21 €, u. a. Praxisanleitung) und P 7 (Stufe 2: 3.510,30 €, Regelgruppe). Darüber: P 10 (Stufe 2: 4.184,40 €) — dort liegen u. a. Leitungs- und besonders verantwortungsvolle Pflegeaufgaben."
    relatedHrefs={["/tvoed/pflege-tabelle", "/tvoed/p-8", "/tvoed/pflegefachkraft", "/tvoed-rechner", "/tvoed/hoehergruppierung"]}
    faq={[
      { frage: "Reicht eine Fachweiterbildung für P 9?", antwort: "Nicht automatisch — die Weiterbildung muss mit entsprechend bewerteten Aufgaben verbunden sein. Wer mit Fachweiterbildung weiter in einer P-7-Stelle arbeitet, bleibt in P 7, bis die Aufgaben sich ändern." },
      { frage: "Wie hoch ist die Jahressonderzahlung bei P 9?", antwort: "85 % (P 9–P 16, nicht 90 % wie P 5–P 8). Bei Stufe 2 sind das 3.393,53 € brutto, bei Stufe 6 3.963,06 € brutto." },
      { frage: "Was ist der Unterschied zu P 8?", antwort: "In Stufe 2: 291,18 € brutto im Monat (3.992,39 € vs. 3.701,21 €). In Stufe 6: 173,44 €." },
    ]} />;
}
