"use client";

import { useMemo, useState } from "react";

function formatINR(n: number) {
  if (!isFinite(n) || isNaN(n)) return "—";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(Math.max(0, n)),
  );
}

type Mode = "sip" | "stepup" | "lumpsum" | "goal" | "swp";

type YearRow = { year: number; invested: number; value: number };

export function MfCalculator() {
  const [mode, setMode] = useState<Mode>("sip");

  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [inflation, setInflation] = useState(6);
  const [stepUp, setStepUp] = useState(10);

  const [sip, setSip] = useState(10000);
  const [lump, setLump] = useState(500000);
  const [goal, setGoal] = useState(5000000);
  const [corpus, setCorpus] = useState(5000000);
  const [withdraw, setWithdraw] = useState(30000);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const realFactor = Math.pow(1 + inflation / 100, years);
    const yearRows: YearRow[] = [];

    if (mode === "sip") {
      let bal = 0;
      let invested = 0;
      for (let y = 1; y <= years; y++) {
        for (let k = 0; k < 12; k++) {
          bal = (bal + sip) * (1 + r);
          invested += sip;
        }
        yearRows.push({ year: y, invested, value: bal });
      }
      return {
        fv: bal,
        invested,
        gains: bal - invested,
        realValue: bal / realFactor,
        required: undefined,
        yearRows,
        monthly: sip,
        monthsLeft: 0,
      };
    }

    if (mode === "stepup") {
      let bal = 0;
      let invested = 0;
      let m = sip;
      for (let y = 1; y <= years; y++) {
        for (let k = 0; k < 12; k++) {
          bal = (bal + m) * (1 + r);
          invested += m;
        }
        yearRows.push({ year: y, invested, value: bal });
        m = m * (1 + stepUp / 100);
      }
      return {
        fv: bal,
        invested,
        gains: bal - invested,
        realValue: bal / realFactor,
        required: undefined,
        yearRows,
        monthly: sip,
        monthsLeft: 0,
      };
    }

    if (mode === "lumpsum") {
      const fv = lump * Math.pow(1 + rate / 100, years);
      for (let y = 1; y <= years; y++) {
        yearRows.push({ year: y, invested: lump, value: lump * Math.pow(1 + rate / 100, y) });
      }
      return {
        fv,
        invested: lump,
        gains: fv - lump,
        realValue: fv / realFactor,
        required: undefined,
        yearRows,
        monthly: 0,
        monthsLeft: 0,
      };
    }

    if (mode === "goal") {
      const required = (goal * r) / (Math.pow(1 + r, n) - 1) / (1 + r);
      const invested = required * n;
      let bal = 0;
      for (let y = 1; y <= years; y++) {
        for (let k = 0; k < 12; k++) bal = (bal + required) * (1 + r);
        yearRows.push({ year: y, invested: required * y * 12, value: bal });
      }
      return {
        fv: goal,
        invested,
        gains: goal - invested,
        realValue: goal / realFactor,
        required,
        yearRows,
        monthly: required,
        monthsLeft: 0,
      };
    }

    // SWP: monthly withdrawal from a corpus
    let bal = corpus;
    let withdrawn = 0;
    let monthsLeft = 0;
    for (let m = 0; m < years * 12; m++) {
      bal = bal * (1 + r) - withdraw;
      withdrawn += withdraw;
      if (bal <= 0) {
        bal = 0;
        monthsLeft = m + 1;
        break;
      }
    }
    if (bal > 0) monthsLeft = years * 12;
    // Year rows simulate separately to avoid double-run cost at scale; approximate from final state is not enough, so re-run:
    const rows: YearRow[] = [];
    let b2 = corpus;
    let w2 = 0;
    for (let y = 1; y <= years; y++) {
      for (let k = 0; k < 12 && b2 > 0; k++) {
        b2 = b2 * (1 + r) - withdraw;
        w2 += withdraw;
        if (b2 < 0) b2 = 0;
      }
      rows.push({ year: y, invested: w2, value: b2 });
    }
    return {
      fv: bal,
      invested: withdrawn,
      gains: bal - withdrawn,
      realValue: bal / realFactor,
      required: undefined,
      yearRows: rows,
      monthly: 0,
      monthsLeft,
    };
  }, [mode, sip, lump, goal, corpus, withdraw, years, rate, inflation, stepUp]);

  const investedPct =
    result.fv + result.gains > 0 && result.fv > 0
      ? (result.invested / result.fv) * 100
      : 0;
  const gainsPct = 100 - investedPct;

  const chartData = result.yearRows;
  const maxVal = Math.max(...chartData.map((d) => d.value), 1);
  const maxInv = Math.max(...chartData.map((d) => d.invested), 1);
  const chartMax = Math.max(maxVal, maxInv, 1);

  const path = (key: "value" | "invested") => {
    if (chartData.length === 0) return "";
    const pts = chartData.map((d, idx) => {
      const x = (idx / Math.max(chartData.length - 1, 1)) * 100;
      const y = 100 - (d[key] / chartMax) * 100;
      return `${x},${y}`;
    });
    return `M ${pts.join(" L ")}`;
  };

  return (
    <section id="mf-calculator" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
          Advanced Mutual Fund Calculator
        </h2>

        <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
          SIP, step-up SIP, lumpsum, goal planning and monthly SWP — with
          year-wise growth and inflation-adjusted value.
        </p>

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-[#f7f9ff] p-5 shadow-xl sm:p-8 lg:p-10">
          {/* MODE TABS */}
          <div className="mx-auto mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-sm">
            {(
              [
                ["sip", "SIP"],
                ["stepup", "Step-up SIP"],
                ["lumpsum", "Lumpsum"],
                ["goal", "Goal Planner"],
                ["swp", "Monthly SWP"],
              ] as [Mode, string][]
            ).map(([m, label]) => (
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
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-7 lg:col-span-3">
              {(mode === "sip" || mode === "stepup") && (
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

              {mode === "stepup" && (
                <Slider
                  label="Annual Step-Up"
                  value={`${stepUp}%`}
                  v={stepUp}
                  min={0}
                  max={25}
                  step={1}
                  onChange={setStepUp}
                  suffix="%"
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

              {mode === "swp" && (
                <>
                  <Slider
                    label="Investment Corpus"
                    value={`₹ ${formatINR(corpus)}`}
                    v={corpus}
                    min={100000}
                    max={50000000}
                    step={50000}
                    onChange={setCorpus}
                    prefix="₹"
                  />
                  <Slider
                    label="Monthly Withdrawal"
                    value={`₹ ${formatINR(withdraw)}`}
                    v={withdraw}
                    min={1000}
                    max={200000}
                    step={500}
                    onChange={setWithdraw}
                    prefix="₹"
                  />
                </>
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

              <Slider
                label="Inflation (for real value)"
                value={`${inflation}%`}
                v={inflation}
                min={0}
                max={12}
                step={0.5}
                onChange={setInflation}
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
                    ₹ {formatINR(result.required ?? 0)}
                  </h3>
                </div>
              ) : (
                <div className="rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-5 text-center text-white sm:p-6">
                  <p className="text-xs uppercase tracking-widest text-white/80 sm:text-sm">
                    {mode === "swp" ? "Balance Left" : "Future Value"}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                    ₹ {formatINR(result.fv)}
                  </h3>
                  {mode === "swp" && (
                    <p className="mt-1 text-xs text-white/80">
                      {result.monthsLeft < years * 12
                        ? `Corpus exhausted in ${result.monthsLeft} months`
                        : `Lasts full ${years} years at this rate`}
                    </p>
                  )}
                </div>
              )}

              <Stat label="Total Invested" value={`₹ ${formatINR(result.invested)}`} />
              <Stat label="Estimated Gains" value={`₹ ${formatINR(result.gains)}`} />
              <Stat
                label="Real Value (after inflation)"
                value={`₹ ${formatINR(result.realValue)}`}
              />

              {/* Donut */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <svg viewBox="0 0 42 42" className="h-20 w-20 -rotate-90">
                  <circle
                    cx="21"
                    cy="21"
                    r="15.9"
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="15.9"
                    fill="transparent"
                    stroke="#17357e"
                    strokeWidth="6"
                    strokeDasharray={`${investedPct} ${100 - investedPct}`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="15.9"
                    fill="transparent"
                    stroke="#f4a300"
                    strokeWidth="6"
                    strokeDasharray={`${gainsPct} ${100 - gainsPct}`}
                    strokeDashoffset={`-${investedPct}`}
                  />
                </svg>
                <div className="text-xs sm:text-sm">
                  <p className="flex items-center gap-2 font-medium text-slate-700">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#17357e]" />
                    Invested {Math.round(investedPct)}%
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-medium text-slate-700">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f4a300]" />
                    Gains {Math.round(gainsPct)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Year-wise growth chart */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-[#07142f] sm:text-xl">
              Year-wise Growth
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-48 w-full sm:h-56"
              >
                <defs>
                  <linearGradient id="mf-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#17357e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#17357e" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {chartData.length > 1 && (
                  <>
                    <path
                      d={`${path("invested")} L 100,100 L 0,100 Z`}
                      fill="#e5e7eb"
                    />
                    <path
                      d={`${path("value")} L 100,100 L 0,100 Z`}
                      fill="url(#mf-area)"
                    />
                    <path
                      d={path("invested")}
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={path("value")}
                      fill="none"
                      stroke="#17357e"
                      strokeWidth="2.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </>
                )}
              </svg>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-slate-500">
                <span>Year 1</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#17357e]" />
                    Portfolio Value
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-300" />
                    Invested
                  </span>
                </span>
                <span>Year {years}</span>
              </div>
            </div>

            {/* Year-wise table (first 5 + last year preview) */}
            <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="bg-[#f7f9ff] text-left text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3 font-semibold">Year</th>
                    <th className="px-4 py-3 font-semibold">Invested</th>
                    <th className="px-4 py-3 font-semibold">Value</th>
                    <th className="px-4 py-3 font-semibold">Gains</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.slice(0, 5).map((row) => (
                    <tr key={row.year} className="border-t border-gray-100">
                      <td className="px-4 py-2.5 font-medium text-slate-700">
                        {row.year}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        ₹ {formatINR(row.invested)}
                      </td>
                      <td className="px-4 py-2.5 font-semibold text-[#07142f]">
                        ₹ {formatINR(row.value)}
                      </td>
                      <td className="px-4 py-2.5 text-[#f4a300]">
                        ₹ {formatINR(row.value - row.invested)}
                      </td>
                    </tr>
                  ))}
                  {chartData.length > 6 && (
                    <tr className="border-t border-gray-100 text-slate-400">
                      <td className="px-4 py-2.5" colSpan={4}>
                        …
                      </td>
                    </tr>
                  )}
                  {chartData.length > 5 && (
                    <tr className="border-t border-gray-100 bg-[#f7f9ff]">
                      <td className="px-4 py-2.5 font-semibold text-slate-700">
                        {chartData[chartData.length - 1].year} (final)
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        ₹{" "}
                        {formatINR(
                          chartData[chartData.length - 1].invested,
                        )}
                      </td>
                      <td className="px-4 py-2.5 font-semibold text-[#07142f]">
                        ₹ {formatINR(chartData[chartData.length - 1].value)}
                      </td>
                      <td className="px-4 py-2.5 text-[#f4a300]">
                        ₹{" "}
                        {formatINR(
                          chartData[chartData.length - 1].value -
                            chartData[chartData.length - 1].invested,
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            * Illustration only. Mutual fund returns are market-linked and not
            guaranteed.
          </p>
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
