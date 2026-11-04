import { GuideShell } from "../../../components/site";
import { related } from "../../../lib/links";
import { eur } from "../../../lib/tables";
import { lohnsteuerPap2026 } from "../../../lib/pap";
export const metadata = { title: "5000 Euro brutto: Was bleibt netto? Alle Steuerklassen 2026" };
export default function Page() {
  const brutto = 5000;
  const rows = ["1","2","3","4","5","6"].map((sk) => {
    const r = lohnsteuerPap2026({ bruttoMonat: brutto, steuerklasse: sk, bundesland: "NRW", kirchensteuer: false, kinder: false, zusatzbeitrag: 2.9, vbl: false });
    return { sk, ...r };
  });
  const prev = 4500;
  const next = 5500;
  return (
    <GuideShell title="5000 Euro brutto: Was bleibt netto?" validity="Gültig: BMF Programmablaufplan 2026 · NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, ohne VBL"
      intro="5000 Euro brutto im Monat — was bleibt davon netto übrig? Die Antwort hängt vor allem von der Steuerklasse ab: Zwischen Steuerklasse III und V liegen bei diesem Brutto mehrere hundert Euro im Monat. Die Tabelle zeigt alle sechs Steuerklassen mit Lohnsteuer, Soli und Sozialabgaben, berechnet nach dem amtlichen PAP 2026."
      crumbs={[{ label: "Brutto-Netto-Rechner", href: "/brutto-netto-rechner" }, { label: "5000 € brutto" }]}
      relatedLinks={related(["/brutto-netto-rechner", "/brutto-netto/steuerklassen-vergleich", "/tvoed/netto-zu-brutto-rechner"])}
      faq={[
        { frage: "Warum ist Steuerklasse III so viel günstiger als V?", antwort: "Weil III/V ein Splitting auf zwei Karten verteilt: III bekommt den doppelten Grundfreibetrag und die günstigere Progression, V den Rest. Zusammen zahlen III+V ungefähr so viel wie IV/IV — einzeln verglichen täuscht der Unterschied. Siehe Steuerklassen-Vergleich." },
        { frage: "Was ändert sich mit Kirchensteuer?", antwort: "8 % (Bayern/Baden-Württemberg) bzw. 9 % (sonst) auf die Lohnsteuer-Bemessungsgrundlage (JBMG). Rechne deinen Fall im Brutto-Netto-Rechner mit Kirchensteuer = Ja nach." },
        { frage: "Was ändert sich mit Kindern?", antwort: "Die Lohnsteuer selbst ändert sich durch Kinder nicht (§ 51a Abs. 2a EStG) — aber die Bemessungsgrundlage für Soli und Kirchensteuer sinkt um den Kinderfreibetrag, und der Pflegeversicherungszuschlag für Kinderlose entfällt." },
      ]}>
      <div className="card"><h2>5000 € brutto: Netto nach Steuerklasse</h2>
      <table><thead><tr><th>Steuerklasse</th><th>Lohnsteuer</th><th>Soli</th><th>Sozialabgaben</th><th>Netto / Monat</th><th>Netto / Jahr</th><th>Nettoquote</th></tr></thead><tbody>
        {rows.map((r) => (<tr key={r.sk}><td>{r.sk}</td><td>{eur(r.lohnsteuerMonat)}</td><td>{eur(r.soliMonat)}</td><td>{eur(r.sozialMonat)}</td><td><strong>{eur(r.nettoMonat)}</strong></td><td>{eur(r.nettoJahr)}</td><td>{(r.nettoquote * 100).toFixed(1)} %</td></tr>))}
      </tbody></table>
      <p><small>Annahmen: NRW, ohne Kirchensteuer, kinderlos, Zusatzbeitrag 2,9 %, ohne VBL, ohne Freibeträge, ohne Einmalzahlungen. Sozialabgaben = Rente 9,3 % + Kranken (7,3 % + halber Zusatzbeitrag) + Pflege (2,4 % inkl. Kinderlosenzuschlag) + Arbeitslosen 1,3 %, jeweils bis zur Beitragsbemessungsgrenze.</small></p>
      <p>Deinen eigenen Fall rechnen: <a href={"/brutto-netto-rechner/?brutto=" + brutto}>5000 € im Brutto-Netto-Rechner</a> · Umgekehrt: <a href="/tvoed/netto-zu-brutto-rechner">Welches Brutto brauche ich für mein Wunsch-Netto?</a></p>
      <p>{prev ? (<><a href={`/brutto-netto/${prev}-euro`}>← {prev.toLocaleString("de-DE")} € brutto</a> · </>) : null}{next ? (<a href={`/brutto-netto/${next}-euro`}>{next.toLocaleString("de-DE")} € brutto →</a>) : null}</p></div>
    </GuideShell>
  );
}
