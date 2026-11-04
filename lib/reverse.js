// Reverse calculator: find the monthly gross that yields a given monthly net
// under BMF PAP 2026. Net is monotonically increasing in gross (tax and
// contributions never fall when gross rises, and BBG caps only flatten the
// contribution part), so binary search converges. No closed form exists
// because the §32a tariff, the Vorsorgepauschale caps and the Soli
// Milderungszone are piecewise — iteration over the forward PAP is exact.
import { lohnsteuerPap2026 } from "./pap";

export function findeBruttoAusNetto({ zielNetto, steuerklasse = "1", bundesland = "NRW", kirchensteuer = false, kinder = false, zusatzbeitrag = 2.9, vbl = false }) {
  if (!(zielNetto > 0)) return null;
  const opts = { steuerklasse, bundesland, kirchensteuer, kinder, zusatzbeitrag, vbl };
  const nettoBei = (brutto) => lohnsteuerPap2026({ bruttoMonat: brutto, ...opts }).nettoMonat;
  // Lower bound: net is always below gross (deductions are positive), so the
  // required gross must exceed the target net.
  let lo = zielNetto;
  let hi = Math.max(zielNetto * 2, zielNetto + 1000);
  // Double the upper bound until it overshoots (caps at 200.000 €/Monat, far
  // above any TVöD value, to avoid an infinite loop on absurd inputs).
  while (nettoBei(hi) < zielNetto && hi < 200000) hi *= 2;
  if (nettoBei(hi) < zielNetto) return null;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (nettoBei(mid) < zielNetto) lo = mid; else hi = mid;
  }
  // Round the gross UP to the next cent. Because PAP monthly amounts are
  // floored to cents, the resulting net matches the target to within 1 cent
  // (a 1-cent wobble from component flooring is inherent to payroll math,
  // not to the search — the gross itself is accurate to ~0.15 €).
  const brutto = Math.ceil(hi * 100) / 100;
  const check = lohnsteuerPap2026({ bruttoMonat: brutto, ...opts });
  return { brutto, ...check };
}

// Round-up helpers for negotiation: the next round gross at/above a value,
// and the net it actually yields.
export function aufgerundet(brutto, schritt) {
  return Math.ceil(brutto / schritt) * schritt;
}
