"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TvodCalculator from "./TvodCalculator";
import { TABLES } from "../lib/tables";

// Calculator prefill per architecture §4.1: /tvoed-rechner/?tarif=vka&gruppe=P7&stufe=2
// The table (E/P/S) is inferred from the group prefix when not given explicitly.
function Prefilled() {
  const params = useSearchParams();
  const tarif = params.get("tarif") || "vka";
  const gruppe = params.get("gruppe") || "E13";
  const tabelle = params.get("tabelle") || (gruppe.startsWith("P") ? "P" : gruppe.startsWith("S") ? "S" : "E");
  const key = tarif === "tvl" ? "tvlE" : tabelle === "P" ? "vkaP" : tabelle === "S" ? "vkaS" : "vkaE";
  const ok = TABLES[key].some((g) => g.id === gruppe);
  const stufe = Number(params.get("stufe") || 3);
  const preset = {
    tarif: ["vka", "bund", "tvl"].includes(tarif) ? tarif : "vka",
    tabelle, gruppe: ok ? gruppe : "E13",
    stufe: stufe >= 1 && stufe <= 6 ? stufe : 3,
    teilzeit: Number(params.get("teilzeit") || 100) || 100,
  };
  return <TvodCalculator preset={preset} />;
}

export default function TvodCalculatorWithPrefill() {
  return (
    <Suspense fallback={<div className="card">Rechner wird geladen …</div>}>
      <Prefilled />
    </Suspense>
  );
}
