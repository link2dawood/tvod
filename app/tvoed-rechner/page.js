import TvodCalculatorWithPrefill from "../../components/TvodCalculatorWithPrefill";
import { Breadcrumbs, RelatedLinks } from "../../components/site";
import { related } from "../../lib/links";
export const metadata = { title: "TVöD-Rechner 2026 | Brutto, Netto, Jahressonderzahlung" };
export default function Page() {
  return (<>
    <Breadcrumbs trail={[{ label: "TVöD-Rechner" }]} />
    <h1>TVöD-Rechner 2026</h1>
    <p>Brutto, Netto nach BMF PAP 2026, VBL und Jahressonderzahlung für TVöD VKA, TVöD Bund und TV-L. Gruppen- und Berufs-Seiten verlinken hierher vorbefüllt — z. B. <a href="/tvoed-rechner/?tarif=vka&gruppe=P7&stufe=2">P 7, Stufe 2</a>.</p>
    <TvodCalculatorWithPrefill />
    <RelatedLinks links={related(["/tvoed/entgelttabelle", "/tvoed/jahressonderzahlung-rechner", "/tvoed/stufenrechner", "/tvoed/teilzeit-rechner", "/tvoed/eingruppierung"])} />
  </>);
}
