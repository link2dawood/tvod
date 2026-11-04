import { TABLES, VALIDITY, eur } from "../lib/tables";
import { Breadcrumbs, RelatedLinks } from "./site";
import { related } from "../lib/links";
export default function TablePage({ title, intro, tableKey, validity, crumbs, relatedHrefs }) {
  const rows = TABLES[tableKey];
  return (<>
    <Breadcrumbs trail={crumbs || [{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: title }]} />
    <h1>{title}</h1>
    <div className="banner"><small>{validity || VALIDITY.vka} · Monatliches Tabellenentgelt bei Vollzeit, brutto. „—“ = diese Stufe gibt es für die Gruppe nicht.</small></div>
    <p>{intro}</p>
    <div className="card"><table><thead><tr><th>Gruppe</th><th>Stufe 1</th><th>Stufe 2</th><th>Stufe 3</th><th>Stufe 4</th><th>Stufe 5</th><th>Stufe 6</th></tr></thead>
    <tbody>{rows.map((r) => (<tr key={r.id}><td><strong>{r.id}</strong></td>{r.stufen.map((v, i) => (<td key={i}>{eur(v)}</td>))}</tr>))}</tbody></table>
    <p><small>Gruppen/Stufen, die hier fehlen, sind bewusst nicht enthalten — sie wurden in der Recherche nicht verifiziert und werden nicht erfunden. Quelle: VKA-Tarifeinigung 06.04.2025, dbb/VKA-Tabellen, cross-check oeffentlicher-dienst.info. Teilzeit: Brutto und Netto anteilig — siehe Teilzeit-Rechner. Die Jahressonderzahlung kommt hinzu, wird aber separat berechnet.</small></p></div>
    <RelatedLinks links={related(relatedHrefs || ["/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/stufenrechner", "/tvoed/teilzeit-rechner", "/tvoed/eingruppierung"])} />
  </>);
}
