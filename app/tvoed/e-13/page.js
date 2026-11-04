import GroupPage from "../../../components/GroupPage";
export const metadata = { title: "TVöD E 13 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung" };
export default function Page() {
  return <GroupPage tabelleKey="vkaE" gruppeId="E13" crumbsLabel="E 13 Gehalt" title="TVöD E 13 Gehalt 2026: Tabelle, Netto, Stufe, Jahressonderzahlung"
    intro="E 13 ist die Einstiegsgruppe des höheren Dienstes: wissenschaftliches Hochschulstudium (Master/Diplom Universität) mit entsprechender Tätigkeit. Das Gehalt liegt zwischen 4.901,11 € (Stufe 1) und 7.025,87 € (Stufe 6) brutto bei Vollzeit. Achtung bei der Jahressonderzahlung: Beim Bund beträgt sie in E 13 nur 75 %, bei der VKA weiterhin 85 %."
    wer="Beschäftigte mit wissenschaftlichem Hochschulstudium — z. B. in der Verwaltung (höherer Dienst), in der Wissenschaft, in der IT-Architektur oder in Fachreferaten — deren Aufgaben den Tätigkeitsmerkmalen von E 13 entsprechen."
    nachbar="Darunter: E 12 (Stufe 1: 4.415,70 €). Darüber: E 14 (Stufe 1: 5.298,27 €) und E 15 (Stufe 1: 5.827,86 €) — dort liegen Aufgaben mit besonderer Verantwortung und herausgehobener Bedeutung."
    relatedHrefs={["/tvoed/entgelttabelle", "/tvoed/tv-l-tabelle", "/tvoed/tvoed-vs-tv-l", "/tvoed-rechner", "/tvoed/hoehergruppierung"]}
    faq={[
      { frage: "Ist E 13 im TVöD dasselbe wie E 13 im TV-L?", antwort: "Nein — gleiche Nummer, andere Tabelle: TVöD VKA E 13, Stufe 3 zahlt 5.709,87 €, TV-L E 13, Stufe 3 nur 5.366,89 €. Und die Jahressonderzahlung unterscheidet sich noch stärker (VKA 85 % vs. TV-L 46,47 %). Siehe TVöD vs TV-L." },
      { frage: "Warum bekommt der Bund in E 13 weniger Weihnachtsgeld als die Kommune?", antwort: "Weil die JSZ-Sätze getrennt verhandelt sind: Bund E 13–15 = 75 %, VKA = 85 %. Bei Stufe 3 sind das 4.282,40 € (Bund) gegenüber 4.853,39 € (VKA) brutto." },
      { frage: "Wie hoch ist das Netto bei E 13, Stufe 3?", antwort: "Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL: 3.383,16 € netto bei 5.709,87 € brutto. Ohne VBL: 3.486,50 €." },
    ]} />;
}
