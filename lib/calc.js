// TVöD-specific helpers. Lohnsteuer is now in lib/pap.js (BMF PAP 2026);
// this file keeps only the Jahressonderzahlung (JSZ) calculation.

export function berechneJSZ({ tarif, gruppeId, monatsentgelt, teilzeitProzent = 100, monateMitAnspruch = 12 }) {
  let satz = 0.85;
  if (tarif === "bund") {
    const num = parseInt(String(gruppeId).replace(/\D/g, ""), 10);
    satz = num <= 8 ? 0.95 : num <= 12 ? 0.90 : 0.75;
  } else if (tarif === "tvl") {
    const num = parseInt(String(gruppeId).replace(/\D/g, ""), 10);
    satz = num <= 4 ? 0.8743 : num <= 8 ? 0.8814 : num <= 11 ? 0.7435 : num <= 13 ? 0.4647 : 0.3253;
  } else if (String(gruppeId).startsWith("P")) {
    const num = parseInt(String(gruppeId).replace(/\D/g, ""), 10);
    satz = num >= 5 && num <= 8 ? 0.90 : 0.85;
  }
  const voll = monatsentgelt * satz;
  const anteilig = voll * (teilzeitProzent / 100) * (monateMitAnspruch / 12);
  return { satz, voll, anteilig };
}
