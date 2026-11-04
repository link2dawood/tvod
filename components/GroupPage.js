import { TABLES, eur } from "../lib/tables";
import { lohnsteuerPap2026 } from "../lib/pap";
import { berechneJSZ } from "../lib/calc";
import { GuideShell } from "./site";
import { related } from "../lib/links";

// Group page (architecture §5): one group, full Stufe table, JSZ and PAP net
// per Stufe — computed at build time from lib/tables.js + lib/pap.js, so the
// numbers cannot drift from the calculator. Net assumptions are stated on
// every page: Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos,
// Zusatzbeitrag 2,9 %, mit VBL 1,81 % (West).
export default function GroupPage({
  tabelleKey, gruppeId, title, intro, wer, nachbar, zulagen, faq, relatedHrefs, crumbsLabel,
}) {
  const key = tabelleKey;
  const gruppe = TABLES[key].find((g) => g.id === gruppeId);
  const stufen = gruppe.stufen.map((brutto, i) => {
    if (brutto === null) return { stufe: i + 1, brutto: null, jsz: null, netto: null };
    const jsz = berechneJSZ({ tarif: "vka", gruppeId, monatsentgelt: brutto });
    const netto = lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse: "1", vbl: true });
    return { stufe: i + 1, brutto, jsz: jsz.anteilig, netto: netto.nettoMonat };
  });
  const entry = stufen.find((s) => s.brutto !== null);
  const top = [...stufen].reverse().find((s) => s.brutto !== null);
  const tabelleHref = key === "vkaP" ? "/tvoed/pflege-tabelle" : key === "vkaS" ? "/tvoed/sue-tabelle" : "/tvoed/entgelttabelle";
  const prefill = (stufe) => `/tvoed-rechner/?tarif=vka&gruppe=${gruppeId}&stufe=${stufe}`;
  return (
    <GuideShell title={title} validity="Gültig: TVöD VKA, 01.05.2026–31.03.2027"
      intro={intro}
      crumbs={[{ label: "TVöD-Rechner", href: "/tvoed-rechner" }, { label: crumbsLabel || title }]}
      relatedLinks={related(relatedHrefs || [tabelleHref, "/tvoed-rechner", "/tvoed/jahressonderzahlung-rechner", "/tvoed/stufenrechner", "/tvoed/teilzeit-rechner", "/tvoed/eingruppierung"])}
      faq={faq}>
      <div className="card"><h2>Wer ist in {gruppeId}?</h2><p>{wer}</p>
      {nachbar && (<><h3>Nachbargruppen</h3><p>{nachbar}</p></>)}
      {zulagen && (<><h3>Zulagen</h3><p>{zulagen}</p></>)}</div>
      <div className="card"><h2>{gruppeId} im Überblick: alle Stufen</h2>
      <table><thead><tr><th>Stufe</th><th>Brutto (Vollzeit)</th><th>JSZ brutto (VKA)</th><th>Netto-Beispiel (SK I, mit VBL)</th></tr></thead><tbody>
        {stufen.map((s) => (
          <tr key={s.stufe}><td>Stufe {s.stufe}</td><td>{eur(s.brutto)}</td><td>{eur(s.jsz)}</td><td>{eur(s.netto)}</td></tr>
        ))}
      </tbody></table>
      <p><small>Netto-Beispiele: Steuerklasse I, NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, mit VBL 1,81 % (West), ohne Zulagen, Überstunden und Freibeträge. „—“ = diese Stufe gibt es für die Gruppe nicht (z. B. P-Gruppen ab Stufe 2). Die Jahressonderzahlung ist brutto und wird im November versteuert.</small></p>
      {entry && top && (<p>Teilzeit-Beispiel (Einstieg, 75 %): Brutto {eur(entry.brutto * 0.75)} — rechne deinen Fall im <a href="/tvoed/teilzeit-rechner">Teilzeit-Rechner</a>. Direkt rechnen, vorbefüllt: <a href={prefill(entry.stufe)}>{gruppeId}, Stufe {entry.stufe}</a> · <a href={prefill(top.stufe)}>{gruppeId}, Stufe {top.stufe}</a> · Alle Werte in der <a href={tabelleHref}>Tabelle</a>.</p>)}
      </div>
    </GuideShell>
  );
}
