// TVöD table data — verified values from the architecture research (Nov 2026).
// Sources: VKA Tarifeinigung 06.04.2025 (+2.8% from 01.05.2026), dbb / VKA tables,
// oeffentlicher-dienst.info cross-checks. See README for the full source list.
// A null stage means that stage does not exist for that group (e.g. P 7 starts at Stufe 2).
// Groups/stages not listed here are TBD — they are intentionally NOT invented.
// Validity: TVöD VKA/Bund 01.05.2026–31.03.2027. TV-L 01.04.2026–28.02.2027.

export const VALIDITY = {
  vka: "TVöD VKA/Bund, gültig 01.05.2026–31.03.2027 (+2,8 %)",
  tvl: "TV-L, gültig 01.04.2026–28.02.2027 (+2,8 %, mind. 100 €)",
};

export const TABLES = {
  // E-Tabelle, TVöD VKA (monthly gross, full-time). Stages 1–6.
  vkaE: [
    { id: "E15", stufen: [5827.86, 6208.96, 6634.05, 7214.39, 7811.37, 8204.11] },
    { id: "E14", stufen: [5298.27, 5643.35, 6094.01, 6549.12, 7151.57, 7551.78] },
    { id: "E13", stufen: [4901.11, 5279.32, 5709.87, 6177.31, 6727.38, 7025.87] },
    { id: "E12", stufen: [4415.70, 4850.91, 5359.50, 5923.82, 6586.00, 6900.18] },
    { id: "E11", stufen: [4269.64, 4669.92, 5046.03, 5454.10, 6012.56, 6326.77] },
    { id: "E10", stufen: [4124.53, 4438.16, 4794.69, 5181.37, 5611.95, 5753.35] },
    { id: "E9c", stufen: [4010.72, 4290.50, 4594.76, 4922.61, 5275.05, 5527.70] },
    { id: "E9b", stufen: [3779.84, 4039.01, 4203.56, 4690.55, 4979.11, 5313.37] },
    { id: "E9a", stufen: [3658.61, 3877.94, 4097.67, 4586.77, 4697.43, 4979.97] },
    { id: "E8", stufen: [3486.40, 3697.29, 3843.36, 3992.40, 4153.50, 4230.97] },
    { id: "E7", stufen: [3294.98, 3537.94, 3682.69, 3828.76, 3969.05, 4045.24] },
    { id: "E6", stufen: [3240.30, 3440.25, 3580.46, 3719.22, 3855.50, 3926.20] },
    { id: "E5", stufen: [3124.08, 3318.04, 3449.05, 3587.78, 3716.70, 3783.33] },
    { id: "E4", stufen: [2994.17, 3190.45, 3355.14, 3457.66, 3560.17, 3620.20] },
    { id: "E3", stufen: [2953.13, 3164.20, 3215.57, 3332.99, 3421.10, 3501.81] },
    { id: "E2", stufen: [2767.54, 2975.32, 3027.12, 3101.04, 3263.52, 3433.49] },
    { id: "E1", stufen: [null, 2534.55, 2568.83, 2611.69, 2651.64, 2754.50] },
  ],
  // P-Tabelle (Pflege), TVöD VKA. P 7–P 16 start at Stufe 2.
  vkaP: [
    { id: "P16", stufen: [null, 5240.04, 5415.90, 5983.76, 6645.71, 6937.70] },
    { id: "P15", stufen: [null, 5132.29, 5293.23, 5695.60, 6177.16, 6361.06] },
    { id: "P14", stufen: [null, 5013.53, 5170.59, 5563.22, 6096.68, 6194.02] },
    { id: "P13", stufen: [null, 4894.78, 5047.94, 5430.82, 5707.28, 5778.68] },
    { id: "P12", stufen: [null, 4657.22, 4802.61, 5166.04, 5389.29, 5493.13] },
    { id: "P10", stufen: [null, 4184.40, 4312.38, 4675.42, 4850.63, 4960.96] },
    { id: "P9", stufen: [null, 3992.39, 4184.40, 4312.38, 4558.59, 4662.42] },
    { id: "P8", stufen: [null, 3701.21, 3862.80, 4075.58, 4247.92, 4488.98] },
    { id: "P7", stufen: [null, 3510.30, 3701.21, 3998.33, 4149.59, 4305.40] },
    { id: "P6", stufen: [3012.49, 3187.41, 3363.47, 3737.95, 3833.41, 4013.41] },
    { id: "P5", stufen: [2907.18, 3146.33, 3216.62, 3334.09, 3422.22, 3629.25] },
  ],
  // S-Tabelle (SuE), TVöD VKA. Main groups only in this MVP; S 2–S 7 are TBD.
  vkaS: [
    { id: "S18", stufen: [4721, 4841, 5437, 5883, 6554, 6963] },
    { id: "S17", stufen: [4352, 4655, 5139, 5437, 6032, 6382] },
    { id: "S16", stufen: [4263, 4558, 4885, 5288, 5734, 6003] },
    { id: "S15", stufen: [4113, 4394, 4692, 5034, 5586, 5824] },
    { id: "S14", stufen: [4073, 4351, 4682, 5019, 5391, 5652] },
    { id: "S13", stufen: [3978, 4249, 4617, 4915, 5288, 5474] },
    { id: "S12", stufen: [3967.57, 4237.49, 4590.75, 4903.53, 5290.81, 5454.65] },
    { id: "S11b", stufen: [3915.12, 4181.19, 4368.13, 4844.78, 5217.14, 5440.57] },
    { id: "S11a", stufen: [3846.25, 4106.12, 4291.48, 4766.33, 5138.69, 5362.12] },
    { id: "S10", stufen: [3603, 3937, 4108, 4620, 5037, 5380] },
    { id: "S9", stufen: [3648.68, 3887.42, 4166.69, 4580.02, 4970.99, 5272.60] },
    { id: "S8b", stufen: [3578.87, 3812.64, 4091.94, 4503.48, 4892.59, 5190.90] },
    { id: "S8a", stufen: [3509.44, 3738.13, 3976.82, 4207.08, 4432.16, 4668.84] },
  ],
  // TV-L E-Tabelle — only fully verified groups in this MVP.
  tvlE: [
    { id: "E14", stufen: [5143.59, 5515.90, 5821.41, 6283.38, 6991.23, 7194.48] },
    { id: "E13", stufen: [4759.37, 5106.09, 5366.89, 5873.56, 6573.97, 6764.69] },
    { id: "E12", stufen: [4310.90, 4599.41, 5210.41, 5746.90, 6439.85, 6626.54] },
  ],
};

export const STUFENLAUFZEIT_JAHRE = [null, 1, 2, 3, 4, 5]; // 1→2: 1y, 2→3: 2y, … 5→6: 5y

export const JSZ_SAETZE = {
  vka: { label: "TVöD VKA (Kommunen)", alle: 0.85, "P5-P8": 0.90 },
  bund: { label: "TVöD Bund", "E1-8": 0.95, "E9a-12": 0.90, "E13-15": 0.75 },
  tvl: { label: "TV-L", "E1-4": 0.8743, "E5-8": 0.8814, "E9a-11": 0.7435, "E12-13": 0.4647, "E14-15": 0.3253 },
};

export function eur(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
}

export function findBrutto(tarifKey, tabelleKey, gruppeId, stufe) {
  const key = tarifKey === "tvl" ? "tvlE" : tabelleKey === "P" ? "vkaP" : tabelleKey === "S" ? "vkaS" : "vkaE";
  const gruppe = TABLES[key].find((g) => g.id === gruppeId);
  if (!gruppe) return null;
  return gruppe.stufen[stufe - 1] ?? null;
}
