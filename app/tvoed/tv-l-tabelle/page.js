import TablePage from "../../../components/TablePage";
import { VALIDITY } from "../../../lib/tables";
export const metadata = { title: "TV-L Entgelttabelle 2026–2027 (E-Tabelle Länder)" };
export default function Page() {
  return <TablePage title="TV-L Entgelttabelle 2026–2027" intro="TV-L ist der Tarif der Länder (außer Hessen, dort TV-H) — nicht TVöD. Er gilt u. a. für Universitäten, Schulen und Landesbehörden. Die TV-L-Tabelle liegt unter der TVöD-Tabelle, und die Jahressonderzahlung ist deutlich niedriger — der Vergleich lohnt sich vor einer Jobzusage: TVöD VKA E 13 Stufe 3 zahlt 5.709,87 €, TV-L E 13 Stufe 3 nur 5.366,89 €. Nur die hier verifizierten Gruppen sind aufgeführt; weitere TV-L-Gruppen folgen nicht erfunden, sondern erst nach Prüfung der offiziellen TV-L-Tabelle." tableKey="tvlE" validity={VALIDITY.tvl} crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: "TV-L-Tabelle" }]} relatedHrefs={["/tvoed/tvoed-vs-tv-l", "/tvoed/entgelttabelle", "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/was-ist-tvoed"]} />;
}
