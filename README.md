# TVöD-Rechner MVP (Next.js)

German-language TVöD calculator hub, built from `../your_files/tvod-page-architecture.md`.

## What is in this MVP
- `/` and `/tvoed-rechner` — TVöD-Rechner: tariff (VKA/Bund/TV-L) + table (E/P/S) + group + Stufe + Teilzeit + Steuerklasse + Bundesland + Kirchensteuer + Kinder + VBL toggle → Netto (BMF PAP 2026) + Jahressonderzahlung. Calculator prefill via query params, e.g. `/tvoed-rechner/?tarif=vka&gruppe=P7&stufe=2` (table inferred from group prefix).
- `/tvoed/entgelttabelle` — full E-Tabelle VKA (01.05.2026–31.03.2027)
- `/tvoed/pflege-tabelle` — P-Tabelle VKA (P 5–P 16, with gaps where not verified)
- `/tvoed/sue-tabelle` — S-Tabelle VKA (main groups S 8a–S 18)
- `/tvoed/tv-l-tabelle` — TV-L E-Tabelle (E 12–E 14 verified; 01.04.2026–28.02.2027)
- `/tvoed/jahressonderzahlung-rechner` — JSZ calculator (VKA 85%, Bund 95/90/75%, TV-L 32–88%, P 5–P 8 90%)
- `/tvoed/stufenrechner` — Stufe path calculator (§16 Laufzeiten, 15 years to Stufe 6)
- `/tvoed/teilzeit-rechner` — Teilzeit brutto/netto (PAP) + anteilige JSZ, with Teilzeit myths
- Guides (each with validity banner, worked example, FAQ + FAQ schema, sources, related links): `/tvoed/jahressonderzahlung`, `/tvoed/stufenlaufzeit`, `/tvoed/vbl-zusatzversorgung`, `/tvoed/eingruppierung`, `/tvoed/tvoed-vs-tv-l`, `/tvoed/tvoed-bund-vs-vka`, `/tvoed/was-ist-tvoed`
- Group/profession pages: `/tvoed/p-7`, `/tvoed/pflegefachkraft`, `/tvoed/erzieher`
- **Phase 1 complete: 18 pages** (hub + 17 `/tvoed/` pages, per `../your_files/tvod-page-architecture.md` §3), plus `/` as an extra landing page.
- **Phase 2 complete (2026-11-04): +19 pages = 37 Phase pages + `/` = 38 content routes.** Group pages (computed from `lib/tables.js` + `lib/pap.js` via `components/GroupPage.js`, so numbers cannot drift from the calculator): `/tvoed/e-9b`, `/tvoed/e-11`, `/tvoed/e-13`, `/tvoed/e-15`, `/tvoed/p-8`, `/tvoed/p-9`, `/tvoed/s-8a`, `/tvoed/s-8b`, `/tvoed/s-9`, `/tvoed/s-11b`. Profession pages (verified mappings, ranges where Eingruppierung depends on tasks): `/tvoed/sozialarbeiter` (S 11b/S 12), `/tvoed/kita-leitung` (S 9–S 18 by Platzzahl: bis 39/40–69/70–99/100–129/130–179/ab 180), `/tvoed/verwaltungsfachangestellte` (E 5/E 6 entry, E 9a–E 11 with VL II), `/tvoed/ordnungsamt` (KOD E 5–E 9a, Sachbearbeitung E 6–E 10), `/tvoed/bauhof-stadtreinigung` (Bauhof E 3–E 6, Müllwerker E 3–E 5, Facharbeiter E 5–E 8; TV-V/TV-L exceptions noted). Guides: `/tvoed/hoehergruppierung` (stufengleich, Laufzeit neu, SuE-Garantiebetrag 77,37 €/123,79 € ab 01.05.2026), `/tvoed/tvoed-urlaub` (30 Tage 2026, 31 ab 2027, Umrechnung nach Arbeitstagen), `/tvoed/tvoed-arbeitszeit` (§ 6: 39 h Bund/VKA West+Ost seit 2023, landesbezirklich bis 40 h möglich — the old 38,5–39 h VKA range in Phase 1 pages was corrected to this), `/tvoed/tvoed-vs-beamte` (system comparison only, no Beamte Euro tables — those are Phase 3).
- S-Tabelle: S 11b/S 12 now exact (3.915,12 € / 3.967,57 € Stufe 1) instead of rounded integers.
- **Reverse calculator (2026-11-04, post-Phase 2):** `/tvoed/netto-zu-brutto-rechner` — target net → required gross via binary search over `lib/pap.js` (`lib/reverse.js`), with Teilzeit + Vollzeit-Äquivalent and round-up-to-100/250/500 € negotiation table. Validated: forward vectors 3.000/4.000/5.000 € (SK I) and E 13 Stufe 3 with VBL reverse to within ~0.15 € gross / 0.01 € net.
- **General Brutto-Netto hub (2026-11-04, post-Phase 2, 15 routes):** `/brutto-netto-rechner` (any gross, PAP 2026, query prefill `?brutto=&steuerklasse=&bundesland=&kirche=&kinder=&vbl=&zusatzbeitrag=`), `/brutto-netto` index, 9 amount pages 2.000–6.000 € (SK I–VI tables computed at build from `lib/pap.js`; spot-checked 4.000 € SK I = 2.605,50 €), and guides: Steuerklassen-Vergleich (III/V vs IV/IV joint math), Minijob 2026 (603 € Grenze = 13,90 € × 130 ÷ 3, RV 3,6 %, Befreiung, 2027: 633 €), Midijob (Übergangsbereich 603,01–2.000 €, § 20 SGB IV — reduced basis NOT modelled in the PAP calculator, stated on the page), Werkstudent (20-h rule, 26-week rule, only RV 9,3 %; example 1.200 €: Werkstudent 1.088,40 € vs normal 939,00 €). All wired into `GENERAL` in `lib/links.js` (sitemap/footer/home).
- **Payslip checker (2026-11-04, post-Phase 2):** `/brutto-netto/lohnschein-checker` (`components/PayslipChecker.js`) — user copies figures from their Lohnabrechnung, tool recomputes every line via PAP 2026 with 0,05 €/line rounding tolerance and diagnoses the cause (implied Zusatzbeitrag from KV, PV rate vs childless/Sachsen rules, VBL missing/present, church tax after Austritt, ELStAM/Faktor/Einmalzahlung for LSt, Soli child allowance, arithmetic sum check). Runs fully client-side, nothing sent or stored. Route 200 + in sitemap/footer/home/general index (index check needs no trailing slash — `/brutto-netto/` 308-redirects to `/brutto-netto`).

## Internal linking structure
- `lib/links.js` is the single source of truth for all 18 Phase 1 pages.
- Every page carries breadcrumbs (Start › TVöD-Rechner › …), a "Weiterführend" related-links block, and the layout footer lists all Phase 1 pages — no orphan pages.
- Group/profession pages link back to their table page, the JSZ calculator, the Stufenrechner and the Teilzeit-Rechner, and link to the hub calculator prefilled with their group/stage.
- `/sitemap.xml` is generated from `lib/links.js`; set `SITE_URL` before deploy (fallback is localhost).

## What is NOT in this MVP (by design)
- No Beamte Besoldung tables, no AVR, no Ausbildung tables, no per-Stufe or per-city pages
- No AdSense code, no analytics, no login, no database — all calculations run in the browser
- Groups/stages not verified in the research are omitted, not invented (see `lib/tables.js`)

## Important accuracy note
`lib/pap.js` implements the **BMF Programmablaufplan 2026** (BMF-Schreiben
12.11.2025): § 32a tariff (Grundfreibetrag 12.348 €, zones to 17.799 / 69.878 /
277.825 €), Vorsorgepauschale (§ 39b: RV 9,3 % to BBG 101.400 €, KV reduced rate
`KVZ/2/100 + 0,07` to BBG 69.750 €, PV employee share, AV only up to the 1.900 €
KV+PV+AV cap, no minimum in 2026), ANP 1.230 €, SAP 36 €, EFA 4.260 € (class II),
splitting for class III, the § 39b special method for classes V/VI
(W1 14.071 €, W2 34.939 €, W3 222.260 €), Soli (5,5 %, Freigrenze 20.350 € /
40.700 € class III, 11,9 % Milderungszone) and church tax (8 % BY/BW, 9 % else)
on the JBMG base (zvE minus child allowance; Lohnsteuer itself is unchanged by
children, § 51a Abs. 2a EStG).
Validated against published 2026 examples, all SK I, kinderlos, ohne Kirche,
Zusatzbeitrag 2,9 %, ohne VBL — all matching to the cent:
3.000 € → Lohnsteuer 293,08 €, Sozial 652,50 €, netto 2.054,42 €;
4.000 € → 524,50 € / 870,00 € / 2.605,50 €;
5.000 € → 782,41 € / 1.087,50 € / 3.130,09 €.
**Remaining exclusions (stated on the site):** ELStAM Freibetrag/Hinzurechnung,
Faktorverfahren (IV mit Faktor), private health insurance, Versorgungsbezüge,
one-time-payment annual method (JSZ shown gross only), state church-tax caps,
Aktivrente, and multi-child/0.5 ZKF counters (the "Kinder" toggle = 1 child for
the Soli/Kirche base only). Fixing the RV BBG to 8.450 €/Monat (was 7.500 € in
the old estimator) was part of this change.

## Run
```bash
cd ~/workspace/tvod-mvp
npm install
npm run dev    # http://localhost:3000
npm run build  # production build check
npm start
```

## Data sources (tables)
VKA Tarifeinigung 06.04.2025 (+2,8 % ab 01.05.2026), dbb/VKA tables, cross-checked against oeffentlicher-dienst.info and kommunalforum.de. TV-L: 01.04.2026–28.02.2027 (+2,8 %, mind. 100 €), then +2,0 % (01.03.2027) and +1 % (01.01.2028) scheduled — update `lib/tables.js` at those dates.
