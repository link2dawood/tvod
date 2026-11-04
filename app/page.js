import TvodCalculator from "../components/TvodCalculator";
import { HubIndex } from "../components/site";
export default function Home() {
  return (<>
    <h1>TVöD-Rechner 2026: Was bleibt brutto, was bleibt netto?</h1>
    <p>Wähle Tarif, Tabelle, Entgeltgruppe und Stufe — der Rechner zeigt Tabellenentgelt, Netto nach BMF PAP 2026, VBL-Abzug und Jahressonderzahlung. Für Kommunen (VKA), Bund und Länder (TV-L).</p>
    <TvodCalculator />
    <div className="card"><h2>So funktioniert TVöD in 60 Sekunden</h2>
      <p><strong>Entgeltgruppe</strong> = Tätigkeit und Qualifikation. <strong>Stufe</strong> = Berufserfahrung im öffentlichen Dienst (Stufe 1 bei Einstellung, Stufe 6 nach 15 Jahren im Regelfall). <strong>Tabellenentgelt</strong> ist das Brutto bei Vollzeit — Teilzeit wird anteilig gezahlt. Die häufigste Verwechslung: TVöD (Bund/Kommunen) und TV-L (Länder) sind verschiedene Tarife mit verschiedenen Tabellen und verschiedener Jahressonderzahlung — siehe <a href="/tvoed/tvoed-vs-tv-l">TVöD vs TV-L</a>.</p>
      <p><small>Die Lohnsteuer läuft nach dem BMF-Programmablaufplan 2026 (siehe Rechner-Hinweis für die ausgeschlossenen Fälle). Tabellenwerte, die in der Recherche nicht verifiziert wurden, sind bewusst nicht enthalten.</small></p>
    </div>
    <HubIndex />
  </>);
}
