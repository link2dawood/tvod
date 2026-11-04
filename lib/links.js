// Single source of truth for Phase 1 internal linking.
// Every Phase 1 page appears here; the layout footer renders this list on
// every page, so there are no orphan pages. Guides link to their tool/table
// pages, and group/profession pages link back to their table + calculators.
export const PHASE1 = [
  { href: "/tvoed-rechner", label: "TVöD-Rechner", gruppe: "Rechner", desc: "Brutto, Netto (BMF PAP 2026), VBL und Jahressonderzahlung" },
  { href: "/tvoed/jahressonderzahlung-rechner", label: "Jahressonderzahlung-Rechner", gruppe: "Rechner", desc: "Weihnachtsgeld nach VKA, Bund und TV-L" },
  { href: "/tvoed/stufenrechner", label: "Stufenrechner", gruppe: "Rechner", desc: "Wann erreiche ich die nächste Stufe, und was zahlt sie?" },
  { href: "/tvoed/teilzeit-rechner", label: "Teilzeit-Rechner", gruppe: "Rechner", desc: "Teilzeit-Brutto und -Netto, anteilige Jahressonderzahlung" },
  { href: "/tvoed/entgelttabelle", label: "Entgelttabelle (E)", gruppe: "Tabellen", desc: "TVöD VKA/Bund, alle E-Gruppen und Stufen" },
  { href: "/tvoed/pflege-tabelle", label: "Pflege-Tabelle (P)", gruppe: "Tabellen", desc: "TVöD VKA, P 5–P 16" },
  { href: "/tvoed/sue-tabelle", label: "SuE-Tabelle (S)", gruppe: "Tabellen", desc: "TVöD VKA, Sozial- und Erziehungsdienst" },
  { href: "/tvoed/tv-l-tabelle", label: "TV-L-Tabelle (E)", gruppe: "Tabellen", desc: "TV-L, 01.04.2026–28.02.2027 — nicht mit TVöD verwechseln" },
  { href: "/tvoed/was-ist-tvoed", label: "Was ist TVöD?", gruppe: "Ratgeber", desc: "Einstieg: wen TVöD abdeckt, welche Tabellen es gibt" },
  { href: "/tvoed/eingruppierung", label: "Eingruppierung", gruppe: "Ratgeber", desc: "Warum du in genau dieser Entgeltgruppe bist — und nicht eine höher" },
  { href: "/tvoed/jahressonderzahlung", label: "Jahressonderzahlung", gruppe: "Ratgeber", desc: "Regeln, Bemessung Jul–Sep, 1.-Dezember-Stichtag, 1/12-Kürzung" },
  { href: "/tvoed/stufenlaufzeit", label: "Stufenlaufzeit", gruppe: "Ratgeber", desc: "§ 16/§ 17: 15 Jahre bis Stufe 6, Ausnahmen, Teilzeit-Mythos" },
  { href: "/tvoed/vbl-zusatzversorgung", label: "VBL / Zusatzversorgung", gruppe: "Ratgeber", desc: "Warum Standard-Rechner das TVöD-Netto zu hoch zeigen" },
  { href: "/tvoed/tvoed-vs-tv-l", label: "TVöD vs TV-L", gruppe: "Ratgeber", desc: "Jahreseinkommens-Vergleich inkl. Jahressonderzahlung" },
  { href: "/tvoed/tvoed-bund-vs-vka", label: "TVöD Bund vs VKA", gruppe: "Ratgeber", desc: "Gleiche Tabelle, andere Jahressonderzahlung" },
  { href: "/tvoed/p-7", label: "TVöD P 7 Gehalt", gruppe: "Gruppen & Berufe", desc: "Pflegefachkraft: Tabelle, Netto, Stufen, Jahressonderzahlung" },
  { href: "/tvoed/pflegefachkraft", label: "Pflegefachkraft Gehalt", gruppe: "Gruppen & Berufe", desc: "Beruf → P 7 / P 8, mit Netto-Beispiel" },
  { href: "/tvoed/erzieher", label: "Erzieher Gehalt", gruppe: "Gruppen & Berufe", desc: "Beruf → S 8a / S 8b, mit Netto-Beispiel" },
];

export const PHASE2 = [
  { href: "/tvoed/e-9b", label: "TVöD E 9b Gehalt", gruppe: "Gruppen", desc: "Gehobener Dienst: Tabelle, Netto, Stufen, Jahressonderzahlung" },
  { href: "/tvoed/e-11", label: "TVöD E 11 Gehalt", gruppe: "Gruppen", desc: "Bachelor / Verwaltungsfachwirt: Tabelle, Netto, Stufen" },
  { href: "/tvoed/e-13", label: "TVöD E 13 Gehalt", gruppe: "Gruppen", desc: "Master / wissenschaftliches Studium: Tabelle, Netto, Stufen" },
  { href: "/tvoed/e-15", label: "TVöD E 15 Gehalt", gruppe: "Gruppen", desc: "Höchste reguläre E-Gruppe: Tabelle, Netto, Stufen" },
  { href: "/tvoed/p-8", label: "TVöD P 8 Gehalt", gruppe: "Gruppen", desc: "Pflege, u. a. Praxisanleitung: Tabelle, Netto, Stufen" },
  { href: "/tvoed/p-9", label: "TVöD P 9 Gehalt", gruppe: "Gruppen", desc: "Pflege mit Fachweiterbildung / besonderen Aufgaben" },
  { href: "/tvoed/s-8a", label: "TVöD S 8a Gehalt", gruppe: "Gruppen", desc: "Erzieher: Tabelle, Netto, Stufen, Jahressonderzahlung" },
  { href: "/tvoed/s-8b", label: "TVöD S 8b Gehalt", gruppe: "Gruppen", desc: "Erzieher mit schwierigen Tätigkeiten: Tabelle, Netto, Stufen" },
  { href: "/tvoed/s-9", label: "TVöD S 9 Gehalt", gruppe: "Gruppen", desc: "SuE, u. a. Kita-Leitung kleiner Einrichtungen" },
  { href: "/tvoed/s-11b", label: "TVöD S 11b Gehalt", gruppe: "Gruppen", desc: "Sozialarbeiter (Regelgruppe): Tabelle, Netto, Stufen" },
  { href: "/tvoed/sozialarbeiter", label: "Sozialarbeiter Gehalt", gruppe: "Berufe", desc: "Beruf → S 11b / S 12, mit Netto-Beispiel" },
  { href: "/tvoed/kita-leitung", label: "Kita-Leitung Gehalt", gruppe: "Berufe", desc: "Beruf → S 9–S 18 nach Platzzahl, mit Tabelle" },
  { href: "/tvoed/verwaltungsfachangestellte", label: "Verwaltungsfachangestellte Gehalt", gruppe: "Berufe", desc: "Beruf → E 5/E 6 im Einstieg, bis E 9a–E 11 mit VL II" },
  { href: "/tvoed/ordnungsamt", label: "Ordnungsamt Gehalt", gruppe: "Berufe", desc: "Beruf → E 5–E 9a (Außendienst), Sachbearbeitung E 6–E 10" },
  { href: "/tvoed/bauhof-stadtreinigung", label: "Bauhof / Stadtreinigung Gehalt", gruppe: "Berufe", desc: "Beruf → E 3–E 6 (Bauhof), E 3–E 5 (Müllwerker), Facharbeiter E 5–E 8" },
  { href: "/tvoed/hoehergruppierung", label: "TVöD Höhergruppierung", gruppe: "Ratgeber", desc: "Stufengleich, Laufzeit neu, SuE-Garantiebetrag 2026" },
  { href: "/tvoed/tvoed-urlaub", label: "TVöD Urlaub", gruppe: "Ratgeber", desc: "30 Tage (2026), 31 Tage ab 2027, Umrechnung nach Arbeitstagen" },
  { href: "/tvoed/tvoed-arbeitszeit", label: "TVöD Arbeitszeit", gruppe: "Ratgeber", desc: "§ 6: 39 Stunden Bund/VKA, TV-L je nach Land, Korridor bis 45" },
  { href: "/tvoed/tvoed-vs-beamte", label: "TVöD vs Beamte", gruppe: "Ratgeber", desc: "Systemvergleich: Entgelt vs Besoldung, Rente+VBL vs Pension, Beihilfe" },
];

export const ALL_PAGES = [...PHASE1, ...PHASE2];

export function byHref(href) { return ALL_PAGES.find((p) => p.href === href); }
export function related(hrefs) { return hrefs.map(byHref).filter(Boolean); }
