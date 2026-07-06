import{l as o,k as e}from"./index-DCWlA49d.js";function t(a){return!isFinite(a)||isNaN(a)?"—":new Intl.NumberFormat("en-IN",{maximumFractionDigits:0}).format(Math.round(Math.max(0,a)))}function ne(a,x,l){return a===0?l/x:l*a*Math.pow(1+a,x)/(Math.pow(1+a,x)-1)}function $e(a,x,l){return a===0?l/x:Math.log(x/(x-l*a))/Math.log(1+a)}function ie(a,x,l){return a===0?l*x:l*(1-Math.pow(1+a,-x))/a}function Re(a,x,l,g=.01){let i=g;for(let I=0;I<100;I++){const $=l*Math.pow(1+i,a)-x*(Math.pow(1+i,a)-1)/i,v=l*a*Math.pow(1+i,a-1)-x*(a*Math.pow(1+i,a-1)/i-(Math.pow(1+i,a)-1)/(i*i)),j=i-$/v;if(Math.abs(j-i)<1e-8)return j;i=j}return i}function Se(){const[a,x]=o.useState("emi"),[l,g]=o.useState("EMI"),[i,I]=o.useState(27e5),[$,v]=o.useState(8.5),[j,f]=o.useState(20),[E,Y]=o.useState(42324),N=j*12,k=$/12/100,A=o.useMemo(()=>{if(l==="EMI")return ne(k,N,i);if(l==="ROI"){const r=Re(N,E,i)*12*100;return isFinite(r)&&r>0?r:0}return l==="Loan Amount"?ie(k,N,E):0},[l,k,N,i,E]),n=l==="EMI"?A:E,y=l==="Loan Amount"?A:i,w=N,R=l==="ROI"?A/12/100:k,S=n*w,P=S-y,X=S>0?y/S*100:0,[V,re]=o.useState(1e5),[F,oe]=o.useState(2e4),[T,ce]=o.useState(60),[_,de]=o.useState(9.5),[J,xe]=o.useState(20),le=o.useMemo(()=>{const s=Math.max(0,V*T/100-F),r=_/12/100,h=J*12,m=s>0&&r>0?ie(r,h,s):0,d=T>0?(s+F)/(T/100):0;return{eligEmi:s,eligLoan:m,reqIncome:d}},[V,F,T,_,J]),[B,me]=o.useState(27e5),[K,he]=o.useState(8.5),[O,pe]=o.useState(20),[Q,ue]=o.useState(3e5),[U,be]=o.useState(24),C=o.useMemo(()=>{const s=K/12/100,r=O*12,h=ne(s,r,B),d=h*r-B;let c=B,u=0;for(let M=1;M<=Math.min(U,r)&&c>0;M++){const q=c*s,ae=Math.min(h-q,c);u+=q,c-=ae}c=Math.max(0,c-Q);let L=0;if(c>0){L=Math.ceil($e(s,-h,c));let M=c;for(let q=1;q<=L&&M>0;q++){const ae=M*s,Ie=Math.min(h-ae,M);u+=ae,M-=Ie}}const G=U+L,H=u;return{emi:h,interestWithout:d,interestWith:H,saved:Math.max(0,d-H),monthsSaved:Math.max(0,r-G),newTenure:G}},[B,K,O,Q,U]),[W,ge]=o.useState(2e6),[Z,fe]=o.useState(10.5),[ee,ve]=o.useState(8.5),[te,je]=o.useState(15),[D,ye]=o.useState(15e3),z=o.useMemo(()=>{const s=te*12,r=Z/12/100,h=ee/12/100,m=ne(r,s,W),d=ne(h,s,W),c=m*s,u=d*s+D;return{emiA:m,emiB:d,totA:c,totB:u,emiSaved:m-d,totalSaved:c-u}},[W,Z,ee,te,D]),se=o.useMemo(()=>{const s=[];let r=y;const h=R,m=n;for(let d=1;d<=w&&r>0;d++){const c=r*h,u=Math.min(m-c,r);r=Math.max(0,r-u),s.push({m:d,emi:m,interest:c,principal:u,balance:r})}return s},[y,R,n,w]),we=o.useMemo(()=>{const s=[];return se.forEach(r=>{const h=Math.ceil(r.m/12);let m=s[h-1];m||(m={year:h,interest:0,principal:0,balance:r.balance},s[h-1]=m),m.interest+=r.interest,m.principal+=r.principal,m.balance=r.balance}),s},[se]),Ne=async()=>{const s=document.getElementById("loan-yearly-chart-svg");if(!s){alert("Graph not found. Please open Amortization tab first.");return}const h=new XMLSerializer().serializeToString(s),m=new Blob([h],{type:"image/svg+xml;charset=utf-8"}),d=URL.createObjectURL(m),c=new Image;c.onload=()=>{const u=document.createElement("canvas");u.width=1600,u.height=600;const L=u.getContext("2d");if(!L){URL.revokeObjectURL(d);return}L.fillStyle="#ffffff",L.fillRect(0,0,u.width,u.height),L.drawImage(c,0,0,u.width,u.height),u.toBlob(G=>{if(!G)return;const H=URL.createObjectURL(G),M=document.createElement("a");M.href=H,M.download="loan-yearly-breakup-graph.png",document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(H),URL.revokeObjectURL(d)},"image/png")},c.onerror=()=>{URL.revokeObjectURL(d),alert("Graph download failed. Please try again.")},c.src=d},Me=()=>{const s=document.getElementById("loan-yearly-chart-svg"),r=s?new XMLSerializer().serializeToString(s):"",h=se.map(c=>`
          <tr>
            <td>${c.m}</td>
            <td>₹ ${t(c.emi)}</td>
            <td>₹ ${t(c.interest)}</td>
            <td>₹ ${t(c.principal)}</td>
            <td>₹ ${t(c.balance)}</td>
          </tr>
        `).join(""),m=`
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
              <div class="value">₹ ${t(y)}</div>
            </div>

            <div class="card">
              <div class="label">Monthly EMI</div>
              <div class="value">₹ ${t(n)}</div>
            </div>

            <div class="card">
              <div class="label">Interest Rate</div>
              <div class="value">${(R*12*100).toFixed(2)}%</div>
            </div>

            <div class="card">
              <div class="label">Tenure</div>
              <div class="value">${w} Months</div>
            </div>

            <div class="card">
              <div class="label">Total Interest</div>
              <div class="value">₹ ${t(P)}</div>
            </div>

            <div class="card">
              <div class="label">Total Payable</div>
              <div class="value">₹ ${t(S)}</div>
            </div>
          </div>

          <h2>Year-wise Breakup Graph</h2>
          <div class="graph">
            ${r}
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
              ${h}
            </tbody>
          </table>
        </body>
      </html>
    `,d=window.open("","_blank","width=1200,height=800");if(!d){alert("Popup blocked. Please allow popups to download PDF.");return}d.document.open(),d.document.write(m),d.document.close(),d.focus(),setTimeout(()=>{d.print()},500)};return e.jsx("section",{id:"calculator",className:"bg-white py-14 sm:py-24",children:e.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[e.jsx("h2",{className:"text-center text-2xl font-bold text-[#07142f] sm:text-4xl md:text-5xl",children:"Advance Loan Calculator"}),e.jsx("p",{className:"mt-3 text-center text-sm text-gray-500 sm:text-base",children:"EMI engine, eligibility calculator and full amortization schedule."}),e.jsx("div",{className:"mx-auto mt-6 max-w-3xl overflow-x-auto sm:mt-8",children:e.jsx("div",{className:"flex min-w-max justify-start gap-2 rounded-2xl bg-blue-50 p-1.5 sm:justify-center",children:[{k:"emi",label:"EMI Engine"},{k:"eligibility",label:"Eligibility"},{k:"prepayment",label:"Prepayment"},{k:"balance-transfer",label:"Balance Transfer"},{k:"amortization",label:"Amortization"}].map(s=>e.jsx("button",{type:"button",onClick:()=>x(s.k),className:`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${a===s.k?"bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow":"text-blue-900 hover:bg-white"}`,children:s.label},s.k))})}),a==="emi"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block font-medium",children:"Calculation Mode"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EMI","ROI","Loan Amount"].map(s=>e.jsx("button",{type:"button",onClick:()=>g(s),className:`rounded-lg border px-3 py-2 text-sm font-semibold ${l===s?"border-blue-600 bg-blue-600 text-white":"border-blue-200 bg-white text-blue-700 hover:bg-blue-50"}`,children:s},s))}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Select a mode — the chosen field will be calculated from the others."})]}),l!=="Loan Amount"&&e.jsx(p,{label:"Loan Amount",value:`₹ ${t(i)}`,min:1e5,max:5e7,step:5e4,v:i,onChange:I,unit:"₹"}),l!=="ROI"&&e.jsx(p,{label:"Interest Rate %",value:`${$}%`,min:5,max:24,step:.05,v:$,onChange:v,unit:"%"}),e.jsx(p,{label:"Loan Tenure (Years)",value:`${j} Years`,min:1,max:30,step:1,v:j,onChange:f,unit:"Yr"}),l!=="EMI"&&e.jsx(p,{label:"Monthly EMI",value:`₹ ${t(E)}`,min:1e3,max:5e5,step:500,v:E,onChange:Y,unit:"₹"})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsxs("p",{className:"text-sm uppercase tracking-widest text-white/80",children:[l," (Calculated)"]}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:[l==="ROI"&&`${A.toFixed(2)}%`,(l==="EMI"||l==="Loan Amount")&&`₹ ${t(A)}`]})]}),e.jsx(b,{label:"Monthly EMI",value:`₹ ${t(n)}`}),e.jsx(b,{label:"Loan Amount",value:`₹ ${t(y)}`}),e.jsx(b,{label:"Loan Tenure",value:`${j} Years (${w} mo)`}),e.jsx(b,{label:"Interest Rate",value:`${(R*12*100).toFixed(2)}%`}),e.jsx(b,{label:"Total Interest",value:`₹ ${t(P)}`}),e.jsx(b,{label:"Total Amount (Principal + Interest)",value:`₹ ${t(S)}`}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex justify-between text-xs text-gray-600",children:[e.jsx("span",{children:"Principal"}),e.jsx("span",{children:"Interest"})]}),e.jsxs("div",{className:"flex h-3 overflow-hidden rounded-full bg-gray-200",children:[e.jsx("div",{className:"bg-blue-600",style:{width:`${X}%`}}),e.jsx("div",{className:"bg-orange-400",style:{width:`${100-X}%`}})]})]})]})]}),a==="eligibility"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(p,{label:"Monthly Net Income",value:`₹ ${t(V)}`,min:15e3,max:1e6,step:5e3,v:V,onChange:re}),e.jsx(p,{label:"Existing EMI",value:`₹ ${t(F)}`,min:0,max:5e5,step:1e3,v:F,onChange:oe}),e.jsx(p,{label:"FOIR %",value:`${T}%`,min:30,max:75,step:1,v:T,onChange:ce}),e.jsx(p,{label:"Interest Rate",value:`${_}%`,min:5,max:24,step:.05,v:_,onChange:de}),e.jsx(p,{label:"Tenure",value:`${J} Years`,min:1,max:30,step:1,v:J,onChange:xe})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Eligible Loan Amount"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(le.eligLoan)]})]}),e.jsx(b,{label:"Eligible EMI",value:`₹ ${t(le.eligEmi)}`}),e.jsx(b,{label:"Required Income (for desired EMI)",value:`₹ ${t(le.reqIncome)}`}),e.jsx("div",{className:"rounded-xl bg-blue-50 p-4 text-xs text-blue-900",children:"FOIR (Fixed Obligation to Income Ratio) is the % of your income banks allow towards EMIs. Typical range: 50–65%."})]})]}),a==="prepayment"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(p,{label:"Loan Amount",value:`₹ ${t(B)}`,min:1e5,max:5e7,step:5e4,v:B,onChange:me}),e.jsx(p,{label:"Interest Rate",value:`${K}%`,min:5,max:24,step:.05,v:K,onChange:he}),e.jsx(p,{label:"Original Tenure",value:`${O} Years`,min:1,max:30,step:1,v:O,onChange:pe}),e.jsx(p,{label:"Lumpsum Prepayment",value:`₹ ${t(Q)}`,min:1e4,max:1e7,step:1e4,v:Q,onChange:ue}),e.jsx(p,{label:"Prepay After (Months)",value:`${U} months`,min:1,max:O*12-1,step:1,v:U,onChange:be})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Interest Saved"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(C.saved)]}),e.jsxs("p",{className:"mt-1 text-xs text-white/80",children:[Math.floor(C.monthsSaved/12),"y"," ",C.monthsSaved%12,"m saved on tenure"]})]}),e.jsx(b,{label:"Original EMI",value:`₹ ${t(C.emi)}`}),e.jsx(b,{label:"Interest (without prepayment)",value:`₹ ${t(C.interestWithout)}`}),e.jsx(b,{label:"Interest (with prepayment)",value:`₹ ${t(C.interestWith)}`}),e.jsx(b,{label:"New Total Tenure",value:`${Math.floor(C.newTenure/12)}y ${C.newTenure%12}m`})]})]}),a==="balance-transfer"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(p,{label:"Outstanding Loan",value:`₹ ${t(W)}`,min:1e5,max:5e7,step:5e4,v:W,onChange:ge}),e.jsx(p,{label:"Current Rate",value:`${Z}%`,min:5,max:24,step:.05,v:Z,onChange:fe}),e.jsx(p,{label:"New Bank Rate",value:`${ee}%`,min:5,max:24,step:.05,v:ee,onChange:ve}),e.jsx(p,{label:"Remaining Tenure",value:`${te} Years`,min:1,max:30,step:1,v:te,onChange:je}),e.jsx(p,{label:"Transfer Fees",value:`₹ ${t(D)}`,min:0,max:2e5,step:1e3,v:D,onChange:ye})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Total You Save"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(z.totalSaved)]}),e.jsxs("p",{className:"mt-1 text-xs text-white/80",children:["after transfer fees of ₹ ",t(D)]})]}),e.jsx(b,{label:"Current EMI",value:`₹ ${t(z.emiA)}`}),e.jsx(b,{label:"New EMI",value:`₹ ${t(z.emiB)}`}),e.jsx(b,{label:"EMI Reduction / mo",value:`₹ ${t(z.emiSaved)}`}),e.jsx(b,{label:"Total Payable (Current)",value:`₹ ${t(z.totA)}`}),e.jsx(b,{label:"Total Payable (New + Fees)",value:`₹ ${t(z.totB)}`})]})]}),a==="amortization"&&e.jsxs("div",{className:"mx-auto mt-8 max-w-6xl rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:p-6 lg:p-8",children:[e.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#07142f]",children:"Month-wise Schedule"}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Based on EMI Engine inputs · ",w," months · ₹"," ",t(n),"/mo"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[e.jsxs("span",{className:"rounded-full bg-blue-100 px-3 py-1 text-blue-700",children:["Principal ₹ ",t(y)]}),e.jsxs("span",{className:"rounded-full bg-orange-100 px-3 py-1 text-orange-700",children:["Interest ₹ ",t(P)]})]})]}),e.jsxs("div",{className:"mb-5 flex flex-wrap justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:Me,className:"rounded-xl border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50",children:"Download PDF"}),e.jsx("button",{type:"button",onClick:Ne,className:"rounded-xl border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50",children:"Download Graph PNG"})]}),e.jsxs("div",{className:"mb-6 rounded-xl border border-gray-200 bg-white p-4",children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h4",{className:"text-sm font-bold text-[#07142f]",children:"Year-wise Breakup"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-sm bg-blue-600"}),"Principal"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-sm bg-orange-400"}),"Interest"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-1 rounded-sm bg-emerald-500"}),"Balance"]})]})]}),e.jsx(Ee,{data:we,loan:y})]}),e.jsx("div",{className:"max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"sticky top-0 bg-[#17357e] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Month"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"EMI"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Interest"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Principal"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Balance"})]})}),e.jsx("tbody",{children:se.map((s,r)=>e.jsxs("tr",{className:r%2?"bg-blue-50/40":"",children:[e.jsx("td",{className:"px-4 py-1.5",children:s.m}),e.jsxs("td",{className:"px-4 py-1.5 text-right",children:["₹ ",t(s.emi)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right text-orange-700",children:["₹ ",t(s.interest)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right text-blue-700",children:["₹ ",t(s.principal)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right font-medium",children:["₹ ",t(s.balance)]})]},s.m))})]})})]})]})})}function Ee({data:a,loan:x}){if(!a.length)return null;const l=760,g=260,i=50,I=50,$=30,v=10,j=l-i-I,f=g-v-$,E=Math.max(...a.map(n=>n.interest+n.principal)),Y=Math.max(x,...a.map(n=>n.balance)),N=j/a.length,k=Math.max(6,N*.6),A=a.map((n,y)=>{const w=i+y*N+N/2,R=v+f-n.balance/Y*f;return`${w},${R}`}).join(" ");return e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{id:"loan-yearly-chart-svg",viewBox:`0 0 ${l} ${g}`,className:"w-full min-w-[600px]",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0",y:"0",width:l,height:g,fill:"#ffffff"}),[0,.25,.5,.75,1].map(n=>e.jsx("line",{x1:i,x2:l-I,y1:v+f*n,y2:v+f*n,stroke:"#e5e7eb",strokeWidth:"1"},n)),a.map((n,y)=>{const w=i+y*N+(N-k)/2,R=n.principal/E*f,S=n.interest/E*f,P=v+f-R,X=P-S;return e.jsxs("g",{children:[e.jsx("rect",{x:w,y:X,width:k,height:S,fill:"#fb923c",rx:"2",children:e.jsxs("title",{children:["Year ",n.year," · Interest ₹ ",t(n.interest)]})}),e.jsx("rect",{x:w,y:P,width:k,height:R,fill:"#2563eb",rx:"2",children:e.jsxs("title",{children:["Year ",n.year," · Principal ₹ ",t(n.principal)]})}),(a.length<=20||n.year%2===1)&&e.jsx("text",{x:w+k/2,y:g-$+14,fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:n.year})]},n.year)}),e.jsx("polyline",{points:A,fill:"none",stroke:"#10b981",strokeWidth:"2.5"}),a.map((n,y)=>{const w=i+y*N+N/2,R=v+f-n.balance/Y*f;return e.jsx("circle",{cx:w,cy:R,r:"2.5",fill:"#10b981",children:e.jsxs("title",{children:["Year ",n.year," · Balance ₹ ",t(n.balance)]})},n.year)}),[0,.5,1].map(n=>e.jsxs("text",{x:i-6,y:v+f*(1-n)+3,fontSize:"10",fill:"#6b7280",textAnchor:"end",children:["₹",t(E*n)]},`l${n}`)),[0,.5,1].map(n=>e.jsxs("text",{x:l-I+6,y:v+f*(1-n)+3,fontSize:"10",fill:"#10b981",textAnchor:"start",children:["₹",t(Y*n)]},`r${n}`)),e.jsx("text",{x:i,y:g-4,fontSize:"10",fill:"#6b7280",children:"Year"})]})})}function p({label:a,value:x,v:l,min:g,max:i,step:I,onChange:$,unit:v}){return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2",children:[e.jsx("span",{className:"font-medium",children:a}),e.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-1",children:[v&&e.jsx("span",{className:"text-xs text-gray-500",children:v}),e.jsx("input",{type:"number",min:g,max:i,step:I,value:l,onChange:j=>{const f=Number(j.target.value);isNaN(f)||$(f)},className:"w-28 bg-transparent text-right text-sm font-semibold text-blue-700 outline-none"})]})]}),e.jsx("input",{type:"range",min:g,max:i,step:I,value:l,onChange:j=>$(Number(j.target.value)),className:"w-full accent-blue-600"}),e.jsxs("div",{className:"mt-1 flex justify-between text-[10px] text-gray-400",children:[e.jsx("span",{children:typeof g=="number"&&g>=1e3?`₹ ${t(g)}`:g}),e.jsx("span",{className:"text-blue-700",children:x}),e.jsx("span",{children:typeof i=="number"&&i>=1e3?`₹ ${t(i)}`:i})]})]})}function b({label:a,value:x}){return e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm",children:[e.jsx("span",{className:"text-sm text-gray-600",children:a}),e.jsx("span",{className:"text-right font-semibold text-[#07142f]",children:x})]})}export{Se as E};
