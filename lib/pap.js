// BMF Programmablaufplan (PAP) 2026 — Lohnsteuer, Solidaritätszuschlag, Kirchenlohnsteuer.
// Sources: BMF-Schreiben 12.11.2025 (PAP 2026, Anlage 1/2), § 32a EStG 2026,
// § 39b EStG, § 3/§ 4 SolzG, Sozialversicherungs-Rechengrößenverordnung 2026.
// Scope of this implementation (stated on the site, in German):
//  - Regular monthly salary, statutory health/care/pension/unemployment insurance.
//  - No ELStAM Freibetrag/Hinzurechnungsbetrag, no Faktor (class IV with factor),
//    no private health insurance, no Versorgungsbezüge, no one-time-payment annual
//    method (JSZ is shown gross only), no state church-tax caps, no Aktivrente.
//  - "Kinder" toggle = 1 child for the Soli/Kirche base only. Lohnsteuer itself
//    does not fall because of children (§ 51a Abs. 2a EStG); the base for Soli/Kirche
//    (JBMG) is the tax on (zvE minus child allowance). Child allowance used:
//    classes I–III: 9.756 €, class IV: 4.878 €, classes V/VI: 0 (PAP ZKF handling).
//    Multiple children / 0.5 counters are not yet an input — that is the one
//    remaining simplification for Soli/Kirche with children.
//  - Childless care surcharge assumes age 23+; Saxony PV employee share +1 point.
//  - All annual amounts are floored/ceiled exactly where the PAP does it:
//    zvE floored to whole euros, tariff floored to whole euros, Vorsorgepauschale
//    ceiled to whole euros, monthly tax = annual / 12 with cent fractions dropped.

export const PAP_2026 = {
  grundfreibetrag: 12348,
  zone2Ende: 17799,
  zone3Ende: 69878,
  zone4Ende: 277825,
  anp: 1230, // Arbeitnehmerpauschbetrag, classes I–V
  sap: 36, // Sonderausgabenpauschbetrag, classes I–V
  efa: 4260, // Entlastungsbetrag Alleinerziehende, class II
  kinderfreibetragI_III: 9756,
  kinderfreibetragIV: 4878,
  soliFreigrenze: 20350, // classes other than III
  soliFreigrenzeIII: 40700,
  soliSatz: 0.055,
  soliKappung: 0.119, // Milderungszone
  vspAvCap: 1900, // KV+PV+AV parts of Vorsorgepauschale together
  bbgKvPvJahr: 69750,
  bbgRvAvJahr: 101400,
  rvSatzAn: 0.093,
  avSatzAn: 0.013,
  kvSatzAnAllgemein: 0.073, // + half Zusatzbeitrag
  pvSatzBasis: 0.018,
  pvZuschlagKinderlos: 0.006,
  pvSachsenAufschlag: 0.01,
  w1Stkl5: 14071,
  w2Stkl5: 34939,
  w3Stkl5: 222260,
  vblSatzWest: 0.0181,
};

const P = PAP_2026;
const floorEuro = (x) => Math.floor(x);
const ceilEuro = (x) => Math.ceil(x);
const dropCent = (x) => Math.floor(x * 100) / 100;

// § 32a EStG 2026 tariff (UPTAB26), Grundtarif. Input: whole euros. Output: whole euros.
export function tarif2026(x) {
  const X = floorEuro(x);
  if (X <= 12348) return 0;
  if (X <= 17799) {
    const y = (X - 12348) / 10000;
    return floorEuro((914.51 * y + 1400) * y);
  }
  if (X <= 69878) {
    const z = (X - 17799) / 10000;
    return floorEuro((173.1 * z + 2397) * z + 1034.87);
  }
  if (X <= 277825) return floorEuro(0.42 * X - 11135.63);
  return floorEuro(0.45 * X - 19470.38);
}

// Special method for classes V and VI, § 39b Abs. 2 Satz 7 EStG (UP5-6 / MST5-6).
function up56(z) {
  let st = 2 * (tarif2026(floorEuro(z * 1.25)) - tarif2026(floorEuro(z * 0.75)));
  return Math.max(st, floorEuro(z * 0.14));
}
function steuerKlasse56(x) {
  const X = floorEuro(x);
  if (X > P.w2Stkl5) {
    let st = up56(P.w2Stkl5);
    if (X > P.w3Stkl5) {
      st += floorEuro((P.w3Stkl5 - P.w2Stkl5) * 0.42) + floorEuro((X - P.w3Stkl5) * 0.45);
    } else {
      st += floorEuro((X - P.w2Stkl5) * 0.42);
    }
    return st;
  }
  let st = up56(X);
  if (X > P.w1Stkl5) {
    st = Math.min(st, up56(P.w1Stkl5) + floorEuro((X - P.w1Stkl5) * 0.42));
  }
  return st;
}

function steuerNachKlasse(zve, steuerklasse) {
  if (steuerklasse === "3") return tarif2026(floorEuro(zve / 2)) * 2;
  if (steuerklasse === "5" || steuerklasse === "6") return steuerKlasse56(zve);
  return tarif2026(zve);
}

export function pvSatzAn({ kinder, bundesland }) {
  let satz = P.pvSatzBasis + (kinder ? 0 : P.pvZuschlagKinderlos);
  if (bundesland === "SN") satz += P.pvSachsenAufschlag; // Sachsen: employee bears 1 point more
  return satz;
}

// Vorsorgepauschale, § 39b Abs. 2 Satz 5 Nr. 3 EStG, annual, ceiled to whole euros.
// KV part uses the reduced rate: KVSATZAN = KVZ/2/100 + 0.07 (KVZ = full Zusatzbeitrag, %).
export function vorsorgepauschale(bruttoJahr, { kinder, bundesland, zusatzbeitrag }) {
  const rvTeil = Math.min(bruttoJahr, P.bbgRvAvJahr) * P.rvSatzAn;
  const kvTeil = Math.min(bruttoJahr, P.bbgKvPvJahr) * (zusatzbeitrag / 200 + 0.07);
  const pvTeil = Math.min(bruttoJahr, P.bbgKvPvJahr) * pvSatzAn({ kinder, bundesland });
  const kvPv = kvTeil + pvTeil;
  let avTeil = 0;
  if (kvPv < P.vspAvCap) {
    avTeil = Math.min(Math.min(bruttoJahr, P.bbgRvAvJahr) * P.avSatzAn, P.vspAvCap - kvPv);
  }
  return { rvTeil, kvTeil, pvTeil, avTeil, gesamt: ceilEuro(rvTeil + kvTeil + pvTeil + avTeil) };
}

export function lohnsteuerPap2026({
  bruttoMonat,
  steuerklasse = "1",
  bundesland = "NRW",
  kirchensteuer = false,
  kinder = false,
  zusatzbeitrag = 2.9,
  vbl = false,
}) {
  const bruttoJahr = bruttoMonat * 12;
  const vsp = vorsorgepauschale(bruttoJahr, { kinder, bundesland, zusatzbeitrag });

  // Taxable amount (zvE): annual gross minus class lump sums minus Vorsorgepauschale.
  let zve = bruttoJahr - vsp.gesamt;
  if (steuerklasse !== "6") zve -= P.anp + P.sap; // VI: no ANP/SAP
  if (steuerklasse === "2") zve -= P.efa;
  zve = Math.max(0, floorEuro(zve));

  const lohnsteuerJahr = steuerNachKlasse(zve, steuerklasse);

  // Second run for Soli/Kirche base (JBMG): same method, zvE minus child allowance.
  const kfb =
    steuerklasse === "4" ? (kinder ? P.kinderfreibetragIV : 0)
    : steuerklasse === "1" || steuerklasse === "2" || steuerklasse === "3" ? (kinder ? P.kinderfreibetragI_III : 0)
    : 0;
  const jbmg = steuerNachKlasse(Math.max(0, zve - kfb), steuerklasse);

  const soliFreigrenze = steuerklasse === "3" ? P.soliFreigrenzeIII : P.soliFreigrenze;
  const soliJahr =
    jbmg <= soliFreigrenze ? 0 : Math.min(P.soliSatz * jbmg, P.soliKappung * (jbmg - soliFreigrenze));

  const kirchenSatz = bundesland === "BY" || bundesland === "BW" ? 0.08 : 0.09;
  const kircheJahr = kirchensteuer ? jbmg * kirchenSatz : 0;

  // Actual social contributions (employee share), monthly, capped at BBG.
  const rvBasis = Math.min(bruttoMonat, P.bbgRvAvJahr / 12);
  const kvBasis = Math.min(bruttoMonat, P.bbgKvPvJahr / 12);
  const rv = dropCent(rvBasis * P.rvSatzAn);
  const av = dropCent(rvBasis * P.avSatzAn);
  const kv = dropCent(kvBasis * (P.kvSatzAnAllgemein + zusatzbeitrag / 200));
  const pv = dropCent(kvBasis * pvSatzAn({ kinder, bundesland }));
  const sozialMonat = rv + av + kv + pv;

  const vblMonat = vbl ? dropCent(bruttoMonat * P.vblSatzWest) : 0;
  const lohnsteuerMonat = dropCent(lohnsteuerJahr / 12);
  const soliMonat = dropCent(soliJahr / 12);
  const kircheMonat = dropCent(kircheJahr / 12);
  const nettoMonat = dropCent(bruttoMonat - sozialMonat - lohnsteuerMonat - soliMonat - kircheMonat - vblMonat);

  return {
    bruttoMonat, bruttoJahr, zve, vorsorgepauschaleJahr: vsp.gesamt, jbmgJahr: jbmg,
    lohnsteuerJahr, lohnsteuerMonat, soliJahr, soliMonat, kircheJahr, kircheMonat,
    rv, av, kv, pv, sozialMonat, vblMonat, nettoMonat, nettoJahr: dropCent(nettoMonat * 12),
    nettoquote: bruttoMonat > 0 ? nettoMonat / bruttoMonat : 0,
  };
}
