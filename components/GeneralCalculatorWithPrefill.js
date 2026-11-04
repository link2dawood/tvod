"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GeneralCalculator from "./GeneralCalculator";

// Prefill: /brutto-netto-rechner/?brutto=3000&steuerklasse=1&bundesland=NRW&kirche=ja&kinder=ja&vbl=ja&zusatzbeitrag=2.9
function Prefilled() {
  const params = useSearchParams();
  const brutto = Number(params.get("brutto") || 4000) || 4000;
  const sk = params.get("steuerklasse") || "1";
  const preset = {
    brutto,
    steuerklasse: ["1","2","3","4","5","6"].includes(sk) ? sk : "1",
    bundesland: params.get("bundesland") || "NRW",
    kirche: params.get("kirche") === "ja",
    kinder: params.get("kinder") === "ja",
    vbl: params.get("vbl") === "ja",
    zusatzbeitrag: Number(params.get("zusatzbeitrag") || 2.9) || 2.9,
  };
  return <GeneralCalculator preset={preset} />;
}

export default function GeneralCalculatorWithPrefill() {
  return (
    <Suspense fallback={<div className="card">Rechner wird geladen …</div>}>
      <Prefilled />
    </Suspense>
  );
}
