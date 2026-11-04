import "./globals.css";
import { PHASE1, PHASE2 } from "../lib/links";
export const metadata = { title: "TVöD-Rechner 2026 — Brutto, Netto, Jahressonderzahlung", description: "TVöD-Rechner für Bund, Kommunen (VKA) und Länder (TV-L): Tabellenentgelt, Netto nach BMF PAP 2026, Jahressonderzahlung und Stufen. Deutsch, kostenlos, ohne Anmeldung." };
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <header><nav>
          <a href="/"><strong>TVöD-Rechner</strong></a>
          <a href="/tvoed-rechner">Rechner</a>
          <a href="/tvoed/entgelttabelle">E-Tabelle</a>
          <a href="/tvoed/pflege-tabelle">P-Tabelle</a>
          <a href="/tvoed/sue-tabelle">S-Tabelle</a>
          <a href="/tvoed/tv-l-tabelle">TV-L</a>
          <a href="/tvoed/jahressonderzahlung-rechner">Weihnachtsgeld</a>
          <a href="/tvoed/stufenrechner">Stufen</a>
          <a href="/tvoed/was-ist-tvoed">Was ist TVöD?</a>
        </nav></header>
        <main>{children}</main>
        <footer>
          <p>Lohnsteuer nach dem amtlichen BMF-Programmablaufplan 2026 (ohne ELStAM-Freibeträge, Faktorverfahren, private Krankenversicherung und Kirchensteuer-Kappungen — siehe Rechner-Hinweis). Tabellen: TVöD VKA/Bund 01.05.2026–31.03.2027, TV-L 01.04.2026–28.02.2027.</p>
          <nav aria-label="Alle TVöD-Seiten">
            <strong>Alle TVöD-Seiten:</strong>{" "}
            {[...PHASE1, ...PHASE2].map((p, i) => (<span key={p.href}>{i > 0 ? " · " : ""}<a href={p.href}>{p.label}</a></span>))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
