import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function formatINR(n) {
  if (!isFinite(n) || isNaN(n)) return "—";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(Math.max(0, n))
  );
}
function PMT(rate, nper, pv) {
  if (rate === 0) return pv / nper;
  return pv * rate * Math.pow(1 + rate, nper) / (Math.pow(1 + rate, nper) - 1);
}
function NPER(rate, pmt, pv) {
  if (rate === 0) return pv / pmt;
  return Math.log(pmt / (pmt - pv * rate)) / Math.log(1 + rate);
}
function PV(rate, nper, pmt) {
  if (rate === 0) return pmt * nper;
  return pmt * (1 - Math.pow(1 + rate, -nper)) / rate;
}
function RATE(nper, pmt, pv, guess = 0.01) {
  let r = guess;
  for (let i = 0; i < 100; i++) {
    const f = pv * Math.pow(1 + r, nper) - pmt * (Math.pow(1 + r, nper) - 1) / r;
    const df = pv * nper * Math.pow(1 + r, nper - 1) - pmt * (nper * Math.pow(1 + r, nper - 1) / r - (Math.pow(1 + r, nper) - 1) / (r * r));
    const newR = r - f / df;
    if (Math.abs(newR - r) < 1e-8) return newR;
    r = newR;
  }
  return r;
}
function EmiCalculator() {
  const [tab, setTab] = reactExports.useState("emi");
  const [mode, setMode] = reactExports.useState("EMI");
  const [amount, setAmount] = reactExports.useState(27e5);
  const [rate, setRate] = reactExports.useState(8.5);
  const [years, setYears] = reactExports.useState(20);
  const [emiInput, setEmiInput] = reactExports.useState(42324);
  const months = years * 12;
  const monthlyRate = rate / 12 / 100;
  const result = reactExports.useMemo(() => {
    if (mode === "EMI") return PMT(monthlyRate, months, amount);
    if (mode === "ROI") {
      const monthly = RATE(months, emiInput, amount);
      const annual = monthly * 12 * 100;
      return isFinite(annual) && annual > 0 ? annual : 0;
    }
    if (mode === "Loan Amount") return PV(monthlyRate, months, emiInput);
    return 0;
  }, [mode, monthlyRate, months, amount, emiInput]);
  const finalEmi = mode === "EMI" ? result : emiInput;
  const finalAmount = mode === "Loan Amount" ? result : amount;
  const finalMonths = months;
  const finalRate = mode === "ROI" ? result / 12 / 100 : monthlyRate;
  const totalPayable = finalEmi * finalMonths;
  const totalInterest = totalPayable - finalAmount;
  const principalPct = totalPayable > 0 ? finalAmount / totalPayable * 100 : 0;
  const [income, setIncome] = reactExports.useState(1e5);
  const [existingEmi, setExistingEmi] = reactExports.useState(2e4);
  const [foir, setFoir] = reactExports.useState(60);
  const [eligRate, setEligRate] = reactExports.useState(9.5);
  const [eligYears, setEligYears] = reactExports.useState(20);
  const eligibility = reactExports.useMemo(() => {
    const eligEmi = Math.max(0, income * foir / 100 - existingEmi);
    const r = eligRate / 12 / 100;
    const n = eligYears * 12;
    const eligLoan = eligEmi > 0 && r > 0 ? PV(r, n, eligEmi) : 0;
    const reqIncome = foir > 0 ? (eligEmi + existingEmi) / (foir / 100) : 0;
    return { eligEmi, eligLoan, reqIncome };
  }, [income, existingEmi, foir, eligRate, eligYears]);
  const [ppAmount, setPpAmount] = reactExports.useState(27e5);
  const [ppRate, setPpRate] = reactExports.useState(8.5);
  const [ppYears, setPpYears] = reactExports.useState(20);
  const [ppLump, setPpLump] = reactExports.useState(3e5);
  const [ppAfterMonths, setPpAfterMonths] = reactExports.useState(24);
  const prepayment = reactExports.useMemo(() => {
    const r = ppRate / 12 / 100;
    const n = ppYears * 12;
    const emi = PMT(r, n, ppAmount);
    const totalWithout = emi * n;
    const interestWithout = totalWithout - ppAmount;
    let bal = ppAmount;
    let paidInterest = 0;
    for (let m = 1; m <= Math.min(ppAfterMonths, n) && bal > 0; m++) {
      const i = bal * r;
      const p = Math.min(emi - i, bal);
      paidInterest += i;
      bal -= p;
    }
    bal = Math.max(0, bal - ppLump);
    let remMonths = 0;
    if (bal > 0) {
      remMonths = Math.ceil(NPER(r, -emi, bal));
      let b2 = bal;
      for (let m = 1; m <= remMonths && b2 > 0; m++) {
        const i = b2 * r;
        const p = Math.min(emi - i, b2);
        paidInterest += i;
        b2 -= p;
      }
    }
    const totalTenure = ppAfterMonths + remMonths;
    const interestWith = paidInterest;
    return {
      emi,
      interestWithout,
      interestWith,
      saved: Math.max(0, interestWithout - interestWith),
      monthsSaved: Math.max(0, n - totalTenure),
      newTenure: totalTenure
    };
  }, [ppAmount, ppRate, ppYears, ppLump, ppAfterMonths]);
  const [btOutstanding, setBtOutstanding] = reactExports.useState(2e6);
  const [btCurRate, setBtCurRate] = reactExports.useState(10.5);
  const [btNewRate, setBtNewRate] = reactExports.useState(8.5);
  const [btYears, setBtYears] = reactExports.useState(15);
  const [btFees, setBtFees] = reactExports.useState(15e3);
  const balanceTransfer = reactExports.useMemo(() => {
    const n = btYears * 12;
    const rA = btCurRate / 12 / 100;
    const rB = btNewRate / 12 / 100;
    const emiA = PMT(rA, n, btOutstanding);
    const emiB = PMT(rB, n, btOutstanding);
    const totA = emiA * n;
    const totB = emiB * n + btFees;
    return {
      emiA,
      emiB,
      totA,
      totB,
      emiSaved: emiA - emiB,
      totalSaved: totA - totB
    };
  }, [btOutstanding, btCurRate, btNewRate, btYears, btFees]);
  const schedule = reactExports.useMemo(() => {
    const rows = [];
    let bal = finalAmount;
    const r = finalRate;
    const emi = finalEmi;
    for (let m = 1; m <= finalMonths && bal > 0; m++) {
      const interest = bal * r;
      const principal = Math.min(emi - interest, bal);
      bal = Math.max(0, bal - principal);
      rows.push({
        m,
        emi,
        interest,
        principal,
        balance: bal
      });
    }
    return rows;
  }, [finalAmount, finalRate, finalEmi, finalMonths]);
  const yearly = reactExports.useMemo(() => {
    const byYear = [];
    schedule.forEach((r) => {
      const y = Math.ceil(r.m / 12);
      let bucket = byYear[y - 1];
      if (!bucket) {
        bucket = {
          year: y,
          interest: 0,
          principal: 0,
          balance: r.balance
        };
        byYear[y - 1] = bucket;
      }
      bucket.interest += r.interest;
      bucket.principal += r.principal;
      bucket.balance = r.balance;
    });
    return byYear;
  }, [schedule]);
  const downloadGraphPNG = async () => {
    const svg = document.getElementById("loan-yearly-chart-svg");
    if (!svg) {
      alert("Graph not found. Please open Amortization tab first.");
      return;
    }
    const serializer = new XMLSerializer();
    const svgText = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgText], {
      type: "image/svg+xml;charset=utf-8"
    });
    const url = URL.createObjectURL(svgBlob);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1600;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        return;
      }
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "loan-yearly-breakup-graph.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
      }, "image/png");
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      alert("Graph download failed. Please try again.");
    };
    image.src = url;
  };
  const downloadPDF = () => {
    const graphSvg = document.getElementById("loan-yearly-chart-svg");
    const graphHtml = graphSvg ? new XMLSerializer().serializeToString(graphSvg) : "";
    const rows = schedule.map(
      (r) => `
          <tr>
            <td>${r.m}</td>
            <td>₹ ${formatINR(r.emi)}</td>
            <td>₹ ${formatINR(r.interest)}</td>
            <td>₹ ${formatINR(r.principal)}</td>
            <td>₹ ${formatINR(r.balance)}</td>
          </tr>
        `
    ).join("");
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Advance Loan Calculator Report</title>
          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 28px;
              font-family: Arial, sans-serif;
              color: #07142f;
              background: #ffffff;
            }

            h1 {
              margin: 0;
              font-size: 28px;
              color: #07142f;
            }

            h2 {
              margin-top: 28px;
              font-size: 20px;
              color: #07142f;
            }

            p {
              color: #64748b;
            }

            .summary {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 12px;
              margin-top: 20px;
            }

            .card {
              border: 1px solid #dbeafe;
              border-radius: 12px;
              padding: 14px;
              background: #f8fbff;
            }

            .label {
              font-size: 12px;
              color: #64748b;
            }

            .value {
              margin-top: 6px;
              font-size: 18px;
              font-weight: bold;
              color: #17357e;
            }

            .graph {
              margin-top: 16px;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              padding: 12px;
            }

            svg {
              width: 100%;
              height: 340px;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 16px;
              font-size: 12px;
            }

            th {
              background: #17357e;
              color: white;
              padding: 8px;
              text-align: right;
            }

            th:first-child,
            td:first-child {
              text-align: left;
            }

            td {
              border: 1px solid #e5e7eb;
              padding: 7px;
              text-align: right;
            }

            tr:nth-child(even) {
              background: #f8fbff;
            }

            .no-print {
              margin-bottom: 18px;
              padding: 10px 16px;
              border: 0;
              border-radius: 8px;
              background: #17357e;
              color: white;
              font-weight: bold;
              cursor: pointer;
            }

            @media print {
              body {
                padding: 18px;
              }

              .no-print {
                display: none;
              }
            }
          </style>
        </head>

        <body>
          <button class="no-print" onclick="window.print()">
            Save / Download PDF
          </button>

          <h1>Advance Loan Calculator Report</h1>
          <p>EMI engine, eligibility calculator and full amortization schedule.</p>

          <div class="summary">
            <div class="card">
              <div class="label">Loan Amount</div>
              <div class="value">₹ ${formatINR(finalAmount)}</div>
            </div>

            <div class="card">
              <div class="label">Monthly EMI</div>
              <div class="value">₹ ${formatINR(finalEmi)}</div>
            </div>

            <div class="card">
              <div class="label">Interest Rate</div>
              <div class="value">${(finalRate * 12 * 100).toFixed(2)}%</div>
            </div>

            <div class="card">
              <div class="label">Tenure</div>
              <div class="value">${finalMonths} Months</div>
            </div>

            <div class="card">
              <div class="label">Total Interest</div>
              <div class="value">₹ ${formatINR(totalInterest)}</div>
            </div>

            <div class="card">
              <div class="label">Total Payable</div>
              <div class="value">₹ ${formatINR(totalPayable)}</div>
            </div>
          </div>

          <h2>Year-wise Breakup Graph</h2>
          <div class="graph">
            ${graphHtml}
          </div>

          <h2>Month-wise Amortization Schedule</h2>

          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>EMI</th>
                <th>Interest</th>
                <th>Principal</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </body>
      </html>
    `;
    const printWindow = window.open("", "_blank", "width=1200,height=800");
    if (!printWindow) {
      alert("Popup blocked. Please allow popups to download PDF.");
      return;
    }
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "calculator", className: "bg-white py-14 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-2xl font-bold text-[#07142f] sm:text-4xl md:text-5xl", children: "Advance Loan Calculator" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-sm text-gray-500 sm:text-base", children: "EMI engine, eligibility calculator and full amortization schedule." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-6 max-w-3xl overflow-x-auto sm:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max justify-start gap-2 rounded-2xl bg-blue-50 p-1.5 sm:justify-center", children: [
      { k: "emi", label: "EMI Engine" },
      { k: "eligibility", label: "Eligibility" },
      { k: "prepayment", label: "Prepayment" },
      { k: "balance-transfer", label: "Balance Transfer" },
      { k: "amortization", label: "Amortization" }
    ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setTab(t.k),
        className: `whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${tab === t.k ? "bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow" : "text-blue-900 hover:bg-white"}`,
        children: t.label
      },
      t.k
    )) }) }),
    tab === "emi" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block font-medium", children: "Calculation Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["EMI", "ROI", "Loan Amount"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setMode(m),
              className: `rounded-lg border px-3 py-2 text-sm font-semibold ${mode === m ? "border-blue-600 bg-blue-600 text-white" : "border-blue-200 bg-white text-blue-700 hover:bg-blue-50"}`,
              children: m
            },
            m
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-500", children: "Select a mode — the chosen field will be calculated from the others." })
        ] }),
        mode !== "Loan Amount" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Loan Amount",
            value: `₹ ${formatINR(amount)}`,
            min: 1e5,
            max: 5e7,
            step: 5e4,
            v: amount,
            onChange: setAmount,
            unit: "₹"
          }
        ),
        mode !== "ROI" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Interest Rate %",
            value: `${rate}%`,
            min: 5,
            max: 24,
            step: 0.05,
            v: rate,
            onChange: setRate,
            unit: "%"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Loan Tenure (Years)",
            value: `${years} Years`,
            min: 1,
            max: 30,
            step: 1,
            v: years,
            onChange: setYears,
            unit: "Yr"
          }
        ),
        mode !== "EMI" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Monthly EMI",
            value: `₹ ${formatINR(emiInput)}`,
            min: 1e3,
            max: 5e5,
            step: 500,
            v: emiInput,
            onChange: setEmiInput,
            unit: "₹"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm uppercase tracking-widest text-white/80", children: [
            mode,
            " (Calculated)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-4xl font-bold", children: [
            mode === "ROI" && `${result.toFixed(2)}%`,
            (mode === "EMI" || mode === "Loan Amount") && `₹ ${formatINR(result)}`
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Monthly EMI", value: `₹ ${formatINR(finalEmi)}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Loan Amount", value: `₹ ${formatINR(finalAmount)}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Loan Tenure",
            value: `${years} Years (${finalMonths} mo)`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Interest Rate",
            value: `${(finalRate * 12 * 100).toFixed(2)}%`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Total Interest",
            value: `₹ ${formatINR(totalInterest)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Total Amount (Principal + Interest)",
            value: `₹ ${formatINR(totalPayable)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Principal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interest" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-3 overflow-hidden rounded-full bg-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-blue-600",
                style: { width: `${principalPct}%` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-orange-400",
                style: { width: `${100 - principalPct}%` }
              }
            )
          ] })
        ] })
      ] })
    ] }),
    tab === "eligibility" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Monthly Net Income",
            value: `₹ ${formatINR(income)}`,
            min: 15e3,
            max: 1e6,
            step: 5e3,
            v: income,
            onChange: setIncome
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Existing EMI",
            value: `₹ ${formatINR(existingEmi)}`,
            min: 0,
            max: 5e5,
            step: 1e3,
            v: existingEmi,
            onChange: setExistingEmi
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "FOIR %",
            value: `${foir}%`,
            min: 30,
            max: 75,
            step: 1,
            v: foir,
            onChange: setFoir
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Interest Rate",
            value: `${eligRate}%`,
            min: 5,
            max: 24,
            step: 0.05,
            v: eligRate,
            onChange: setEligRate
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Tenure",
            value: `${eligYears} Years`,
            min: 1,
            max: 30,
            step: 1,
            v: eligYears,
            onChange: setEligYears
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-white/80", children: "Eligible Loan Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-4xl font-bold", children: [
            "₹ ",
            formatINR(eligibility.eligLoan)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Eligible EMI",
            value: `₹ ${formatINR(eligibility.eligEmi)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Required Income (for desired EMI)",
            value: `₹ ${formatINR(eligibility.reqIncome)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-blue-50 p-4 text-xs text-blue-900", children: "FOIR (Fixed Obligation to Income Ratio) is the % of your income banks allow towards EMIs. Typical range: 50–65%." })
      ] })
    ] }),
    tab === "prepayment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Loan Amount",
            value: `₹ ${formatINR(ppAmount)}`,
            min: 1e5,
            max: 5e7,
            step: 5e4,
            v: ppAmount,
            onChange: setPpAmount
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Interest Rate",
            value: `${ppRate}%`,
            min: 5,
            max: 24,
            step: 0.05,
            v: ppRate,
            onChange: setPpRate
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Original Tenure",
            value: `${ppYears} Years`,
            min: 1,
            max: 30,
            step: 1,
            v: ppYears,
            onChange: setPpYears
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Lumpsum Prepayment",
            value: `₹ ${formatINR(ppLump)}`,
            min: 1e4,
            max: 1e7,
            step: 1e4,
            v: ppLump,
            onChange: setPpLump
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Prepay After (Months)",
            value: `${ppAfterMonths} months`,
            min: 1,
            max: ppYears * 12 - 1,
            step: 1,
            v: ppAfterMonths,
            onChange: setPpAfterMonths
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-center text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-white/80", children: "Interest Saved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-4xl font-bold", children: [
            "₹ ",
            formatINR(prepayment.saved)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-white/80", children: [
            Math.floor(prepayment.monthsSaved / 12),
            "y",
            " ",
            prepayment.monthsSaved % 12,
            "m saved on tenure"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Original EMI",
            value: `₹ ${formatINR(prepayment.emi)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Interest (without prepayment)",
            value: `₹ ${formatINR(prepayment.interestWithout)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Interest (with prepayment)",
            value: `₹ ${formatINR(prepayment.interestWith)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "New Total Tenure",
            value: `${Math.floor(prepayment.newTenure / 12)}y ${prepayment.newTenure % 12}m`
          }
        )
      ] })
    ] }),
    tab === "balance-transfer" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Outstanding Loan",
            value: `₹ ${formatINR(btOutstanding)}`,
            min: 1e5,
            max: 5e7,
            step: 5e4,
            v: btOutstanding,
            onChange: setBtOutstanding
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Current Rate",
            value: `${btCurRate}%`,
            min: 5,
            max: 24,
            step: 0.05,
            v: btCurRate,
            onChange: setBtCurRate
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "New Bank Rate",
            value: `${btNewRate}%`,
            min: 5,
            max: 24,
            step: 0.05,
            v: btNewRate,
            onChange: setBtNewRate
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Remaining Tenure",
            value: `${btYears} Years`,
            min: 1,
            max: 30,
            step: 1,
            v: btYears,
            onChange: setBtYears
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            label: "Transfer Fees",
            value: `₹ ${formatINR(btFees)}`,
            min: 0,
            max: 2e5,
            step: 1e3,
            v: btFees,
            onChange: setBtFees
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-white/80", children: "Total You Save" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-4xl font-bold", children: [
            "₹ ",
            formatINR(balanceTransfer.totalSaved)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-white/80", children: [
            "after transfer fees of ₹ ",
            formatINR(btFees)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Current EMI",
            value: `₹ ${formatINR(balanceTransfer.emiA)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "New EMI",
            value: `₹ ${formatINR(balanceTransfer.emiB)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "EMI Reduction / mo",
            value: `₹ ${formatINR(balanceTransfer.emiSaved)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Total Payable (Current)",
            value: `₹ ${formatINR(balanceTransfer.totA)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stat,
          {
            label: "Total Payable (New + Fees)",
            value: `₹ ${formatINR(balanceTransfer.totB)}`
          }
        )
      ] })
    ] }),
    tab === "amortization" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 max-w-6xl rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:p-6 lg:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#07142f]", children: "Month-wise Schedule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
            "Based on EMI Engine inputs · ",
            finalMonths,
            " months · ₹",
            " ",
            formatINR(finalEmi),
            "/mo"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-blue-100 px-3 py-1 text-blue-700", children: [
            "Principal ₹ ",
            formatINR(finalAmount)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-orange-100 px-3 py-1 text-orange-700", children: [
            "Interest ₹ ",
            formatINR(totalInterest)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-wrap justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: downloadPDF,
            className: "rounded-xl border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50",
            children: "Download PDF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: downloadGraphPNG,
            className: "rounded-xl border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50",
            children: "Download Graph PNG"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-xl border border-gray-200 bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#07142f]", children: "Year-wise Breakup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-sm bg-blue-600" }),
              "Principal"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-sm bg-orange-400" }),
              "Interest"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-1 rounded-sm bg-emerald-500" }),
              "Balance"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YearlyChart, { data: yearly, loan: finalAmount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-[#17357e] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-right", children: "EMI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-right", children: "Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-right", children: "Principal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-right", children: "Balance" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: schedule.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-blue-50/40" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-1.5", children: r.m }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-1.5 text-right", children: [
            "₹ ",
            formatINR(r.emi)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-1.5 text-right text-orange-700", children: [
            "₹ ",
            formatINR(r.interest)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-1.5 text-right text-blue-700", children: [
            "₹ ",
            formatINR(r.principal)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-1.5 text-right font-medium", children: [
            "₹ ",
            formatINR(r.balance)
          ] })
        ] }, r.m)) })
      ] }) })
    ] })
  ] }) });
}
function YearlyChart({ data, loan }) {
  if (!data.length) return null;
  const W = 760;
  const H = 260;
  const padL = 50;
  const padR = 50;
  const padB = 30;
  const padT = 10;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const maxStack = Math.max(...data.map((d) => d.interest + d.principal));
  const maxBal = Math.max(loan, ...data.map((d) => d.balance));
  const bw = innerW / data.length;
  const barW = Math.max(6, bw * 0.6);
  const balPoints = data.map((d, i) => {
    const x = padL + i * bw + bw / 2;
    const y = padT + innerH - d.balance / maxBal * innerH;
    return `${x},${y}`;
  }).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      id: "loan-yearly-chart-svg",
      viewBox: `0 0 ${W} ${H}`,
      className: "w-full min-w-[600px]",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: W, height: H, fill: "#ffffff" }),
        [0, 0.25, 0.5, 0.75, 1].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: padL,
            x2: W - padR,
            y1: padT + innerH * t,
            y2: padT + innerH * t,
            stroke: "#e5e7eb",
            strokeWidth: "1"
          },
          t
        )),
        data.map((d, i) => {
          const x = padL + i * bw + (bw - barW) / 2;
          const pH = d.principal / maxStack * innerH;
          const iH = d.interest / maxStack * innerH;
          const yP = padT + innerH - pH;
          const yI = yP - iH;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "rect",
              {
                x,
                y: yI,
                width: barW,
                height: iH,
                fill: "#fb923c",
                rx: "2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
                  "Year ",
                  d.year,
                  " · Interest ₹ ",
                  formatINR(d.interest)
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "rect",
              {
                x,
                y: yP,
                width: barW,
                height: pH,
                fill: "#2563eb",
                rx: "2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
                  "Year ",
                  d.year,
                  " · Principal ₹ ",
                  formatINR(d.principal)
                ] })
              }
            ),
            (data.length <= 20 || d.year % 2 === 1) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "text",
              {
                x: x + barW / 2,
                y: H - padB + 14,
                fontSize: "10",
                fill: "#6b7280",
                textAnchor: "middle",
                children: d.year
              }
            )
          ] }, d.year);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "polyline",
          {
            points: balPoints,
            fill: "none",
            stroke: "#10b981",
            strokeWidth: "2.5"
          }
        ),
        data.map((d, i) => {
          const x = padL + i * bw + bw / 2;
          const y = padT + innerH - d.balance / maxBal * innerH;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "2.5", fill: "#10b981", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
            "Year ",
            d.year,
            " · Balance ₹ ",
            formatINR(d.balance)
          ] }) }, d.year);
        }),
        [0, 0.5, 1].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: padL - 6,
            y: padT + innerH * (1 - t) + 3,
            fontSize: "10",
            fill: "#6b7280",
            textAnchor: "end",
            children: [
              "₹",
              formatINR(maxStack * t)
            ]
          },
          `l${t}`
        )),
        [0, 0.5, 1].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: W - padR + 6,
            y: padT + innerH * (1 - t) + 3,
            fontSize: "10",
            fill: "#10b981",
            textAnchor: "start",
            children: [
              "₹",
              formatINR(maxBal * t)
            ]
          },
          `r${t}`
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: padL, y: H - 4, fontSize: "10", fill: "#6b7280", children: "Year" })
      ]
    }
  ) });
}
function Slider({
  label,
  value,
  v,
  min,
  max,
  step,
  onChange,
  unit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-1", children: [
        unit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: unit }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min,
            max,
            step,
            value: v,
            onChange: (e) => {
              const n = Number(e.target.value);
              if (!isNaN(n)) onChange(n);
            },
            className: "w-28 bg-transparent text-right text-sm font-semibold text-blue-700 outline-none"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value: v,
        onChange: (e) => onChange(Number(e.target.value)),
        className: "w-full accent-blue-600"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex justify-between text-[10px] text-gray-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: typeof min === "number" && min >= 1e3 ? `₹ ${formatINR(min)}` : min }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: typeof max === "number" && max >= 1e3 ? `₹ ${formatINR(max)}` : max })
    ] })
  ] });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-semibold text-[#07142f]", children: value })
  ] });
}
export {
  EmiCalculator as E
};
