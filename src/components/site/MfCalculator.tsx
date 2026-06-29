"use client";

import { useMemo, useState } from "react";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(Math.max(0, n)),
  );
}

type Mode = "sip" | "lumpsum" | "goal";

export function MfCalculator() {
  const [mode, setMode] = useState<Mode>("sip");

  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const [sip, setSip] = useState(10000);
  const [lump, setLump] = useState(500000);
  const [goal, setGoal] = useState(5000000);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;

    if (mode === "sip") {
      const fv = sip * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      const invested = sip * n;

      return {
        fv,
        invested,
        gains: fv - invested,
      };
    }

    if (mode === "lumpsum") {
      const fv = lump * Math.pow(1 + rate / 100, years);

      return {
        fv,
        invested: lump,
        gains: fv - lump,
      };
    }

    const required = (goal * r) / (Math.pow(1 + r, n) - 1) / (1 + r);
    const invested = required * n;

    return {
      fv: goal,
      invested,
      gains: goal - invested,
      required,
    };
  }, [mode, sip, lump, goal, years, rate]);

  return (
    <section id="mf-calculator" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
          Mutual Fund Calculator
        </h2>

        <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
          Plan SIP, lumpsum or a financial goal — all in one place.
        </p>

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-[#f7f9ff] p-5 shadow-xl sm:p-8 lg:p-10">
          {/* SMALL TABS */}
          <div className="mx-auto mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-sm">
            {(["sip", "lumpsum", "goal"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition sm:px-5 sm:py-2 sm:text-sm ${
                  mode === m
                    ? "bg-gradient-to-r from-[#17357e] to-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {m === "sip"
                  ? "SIP"
                  : m === "lumpsum"
                    ? "Lumpsum"
                    : "Goal Planner"}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-7 lg:col-span-3">
              {mode === "sip" && (
                <Slider
                  label="Monthly SIP"
                  value={`₹ ${formatINR(sip)}`}
                  v={sip}
                  min={500}
                  max={200000}
                  step={500}
                  onChange={setSip}
                  prefix="₹"
                />
              )}

              {mode === "lumpsum" && (
                <Slider
                  label="One-time Investment"
                  value={`₹ ${formatINR(lump)}`}
                  v={lump}
                  min={1000}
                  max={10000000}
                  step={1000}
                  onChange={setLump}
                  prefix="₹"
                />
              )}

              {mode === "goal" && (
                <Slider
                  label="Goal Amount"
                  value={`₹ ${formatINR(goal)}`}
                  v={goal}
                  min={100000}
                  max={50000000}
                  step={50000}
                  onChange={setGoal}
                  prefix="₹"
                />
              )}

              <Slider
                label="Investment Period"
                value={`${years} Years`}
                v={years}
                min={1}
                max={40}
                step={1}
                onChange={setYears}
                suffix="Yr"
              />

              <Slider
                label="Expected Return (p.a.)"
                value={`${rate}%`}
                v={rate}
                min={4}
                max={25}
                step={0.5}
                onChange={setRate}
                suffix="%"
              />
            </div>

            <div className="space-y-4 lg:col-span-2">
              {mode === "goal" ? (
                <div className="rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-5 text-center text-white sm:p-6">
                  <p className="text-xs uppercase tracking-widest text-white/80 sm:text-sm">
                    Required Monthly SIP
                  </p>

                  <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                    ₹ {formatINR((result as { required: number }).required)}
                  </h3>
                </div>
              ) : (
                <div className="rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-5 text-center text-white sm:p-6">
                  <p className="text-xs uppercase tracking-widest text-white/80 sm:text-sm">
                    Future Value
                  </p>

                  <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                    ₹ {formatINR(result.fv)}
                  </h3>
                </div>
              )}

              <Stat
                label="Total Invested"
                value={`₹ ${formatINR(result.invested)}`}
              />

              <Stat
                label="Estimated Gains"
                value={`₹ ${formatINR(result.gains)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  v,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  v: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  const handleChange = (num: number) => {
    if (Number.isNaN(num)) return;

    if (num < min) {
      onChange(min);
      return;
    }

    if (num > max) {
      onChange(max);
      return;
    }

    onChange(num);
  };

  return (
    <div>
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-base font-semibold text-slate-900 sm:text-lg">
          {label}
        </span>

        {/* SMALL MANUAL INPUT */}
        <div className="flex h-10 w-full items-center rounded-lg border border-blue-200 bg-white px-3 shadow-sm sm:w-[155px]">
          {prefix && (
            <span className="mr-2 text-sm font-semibold text-slate-500">
              {prefix}
            </span>
          )}

          <input
            type="number"
            value={v}
            min={min}
            max={max}
            step={step}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-full bg-transparent text-right text-base font-bold text-blue-600 outline-none"
          />

          {suffix && (
            <span className="ml-2 text-sm font-semibold text-blue-600">
              {suffix}
            </span>
          )}
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="mt-1 flex justify-between text-xs font-medium text-slate-400">
        <span>
          {prefix === "₹" ? `₹ ${formatINR(min)}` : `${min}${suffix ?? ""}`}
        </span>

        <span className="text-blue-600">{value}</span>

        <span>
          {prefix === "₹" ? `₹ ${formatINR(max)}` : `${max}${suffix ?? ""}`}
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-right font-semibold text-[#07142f]">{value}</span>
    </div>
  );
}