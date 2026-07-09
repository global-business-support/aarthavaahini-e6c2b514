import{r as c,j as e}from"./index-BEKhMSDY.js";function t(a){return!isFinite(a)||isNaN(a)?"—":new Intl.NumberFormat("en-IN",{maximumFractionDigits:0}).format(Math.round(Math.max(0,a)))}function ne(a,m,l){return a===0?l/m:l*a*Math.pow(1+a,m)/(Math.pow(1+a,m)-1)}function ke(a,m,l){return a===0?l/m:Math.log(m/(m-l*a))/Math.log(1+a)}function re(a,m,l){return a===0?l*m:l*(1-Math.pow(1+a,-m))/a}function Ee(a,m,l,g=.01){let o=g;for(let E=0;E<100;E++){const R=l*Math.pow(1+o,a)-m*(Math.pow(1+o,a)-1)/o,j=l*a*Math.pow(1+o,a-1)-m*(a*Math.pow(1+o,a-1)/o-(Math.pow(1+o,a)-1)/(o*o)),N=o-R/j;if(Math.abs(N-o)<1e-8)return N;o=N}return o}function Ce(){const[a,m]=c.useState("emi"),[l,g]=c.useState("EMI"),[o,E]=c.useState(27e5),[R,j]=c.useState(8.5),[N,f]=c.useState(20),[S,z]=c.useState(42324),$=N*12,C=R/12/100,P=c.useMemo(()=>{if(l==="EMI")return ne(C,$,o);if(l==="ROI"){const r=Ee($,S,o)*12*100;return isFinite(r)&&r>0?r:0}return l==="Loan Amount"?re(C,$,S):0},[l,C,$,o,S]),n=l==="EMI"?P:S,y=l==="Loan Amount"?P:o,w=$,k=l==="ROI"?P/12/100:C,L=n*w,T=L-y,V=L>0?y/L*100:0,[_,ie]=c.useState(1e5),[Y,ce]=c.useState(2e4),[B,de]=c.useState(60),[J,xe]=c.useState(9.5),[K,me]=c.useState(20),le=c.useMemo(()=>{const s=Math.max(0,_*B/100-Y),r=J/12/100,h=K*12,x=s>0&&r>0?re(r,h,s):0,d=B>0?(s+Y)/(B/100):0;return{eligEmi:s,eligLoan:x,reqIncome:d}},[_,Y,B,J,K]),[W,he]=c.useState(27e5),[Q,pe]=c.useState(8.5),[F,ue]=c.useState(20),[Z,be]=c.useState(3e5),[U,ge]=c.useState(24),A=c.useMemo(()=>{const s=Q/12/100,r=F*12,h=ne(s,r,W),d=h*r-W;let i=W,p=0;for(let I=1;I<=Math.min(U,r)&&i>0;I++){const X=i*s,ae=Math.min(h-X,i);p+=X,i-=ae}i=Math.max(0,i-Z);let M=0;if(i>0){M=Math.ceil(ke(s,-h,i));let I=i;for(let X=1;X<=M&&I>0;X++){const ae=I*s,Ie=Math.min(h-ae,I);p+=ae,I-=Ie}}const v=U+M,q=p;return{emi:h,interestWithout:d,interestWith:q,saved:Math.max(0,d-q),monthsSaved:Math.max(0,r-v),newTenure:v}},[W,Q,F,Z,U]),[D,fe]=c.useState(2e6),[ee,ve]=c.useState(10.5),[te,je]=c.useState(8.5),[se,ye]=c.useState(15),[G,we]=c.useState(15e3),O=c.useMemo(()=>{const s=se*12,r=ee/12/100,h=te/12/100,x=ne(r,s,D),d=ne(h,s,D),i=x*s,p=d*s+G;return{emiA:x,emiB:d,totA:i,totB:p,emiSaved:x-d,totalSaved:i-p}},[D,ee,te,se,G]),H=c.useMemo(()=>{const s=[];let r=y;const h=k,x=n;for(let d=1;d<=w&&r>0;d++){const i=r*h,p=Math.min(x-i,r);r=Math.max(0,r-p),s.push({m:d,emi:x,interest:i,principal:p,balance:r})}return s},[y,k,n,w]),oe=c.useMemo(()=>{const s=[];return H.forEach(r=>{const h=Math.ceil(r.m/12);let x=s[h-1];x||(x={year:h,interest:0,principal:0,balance:r.balance},s[h-1]=x),x.interest+=r.interest,x.principal+=r.principal,x.balance=r.balance}),s},[H]),Ne=async()=>{const s=document.getElementById("loan-yearly-chart-svg");if(!s){alert("Graph not found. Please open Amortization tab first.");return}const h=new XMLSerializer().serializeToString(s),x=new Blob([h],{type:"image/svg+xml;charset=utf-8"}),d=URL.createObjectURL(x),i=new Image;i.onload=()=>{const p=document.createElement("canvas");p.width=1600,p.height=600;const M=p.getContext("2d");if(!M){URL.revokeObjectURL(d);return}M.fillStyle="#ffffff",M.fillRect(0,0,p.width,p.height),M.drawImage(i,0,0,p.width,p.height),p.toBlob(v=>{if(!v)return;const q=URL.createObjectURL(v),I=document.createElement("a");I.href=q,I.download="loan-yearly-breakup-graph.png",document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(q),URL.revokeObjectURL(d)},"image/png")},i.onerror=()=>{URL.revokeObjectURL(d),alert("Graph download failed. Please try again.")},i.src=d},Me=()=>{const s=(k*12*100).toFixed(2),r=`
      <tr><th>Loan Amount</th><td>${Math.round(y)}</td></tr>
      <tr><th>Interest Rate (p.a.)</th><td>${s}%</td></tr>
      <tr><th>Tenure (Months)</th><td>${w}</td></tr>
      <tr><th>Monthly EMI</th><td>${Math.round(n)}</td></tr>
      <tr><th>Total Interest</th><td>${Math.round(T)}</td></tr>
      <tr><th>Total Payable</th><td>${Math.round(L)}</td></tr>
    `,h=H.map(v=>`
          <tr>
            <td>${v.m}</td>
            <td>${Math.round(v.emi)}</td>
            <td>${Math.round(v.interest)}</td>
            <td>${Math.round(v.principal)}</td>
            <td>${Math.round(v.balance)}</td>
          </tr>`).join(""),x=oe.map(v=>`
          <tr>
            <td>${v.year}</td>
            <td>${Math.round(v.principal)}</td>
            <td>${Math.round(v.interest)}</td>
            <td>${Math.round(v.balance)}</td>
          </tr>`).join(""),d=`
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:x="urn:schemas-microsoft-com:office:excel"
            xmlns="http://www.w3.org/TR/REC-html40">
        <head>
          <meta charset="UTF-8" />
          <!--[if gte mso 9]>
          <xml>
            <x:ExcelWorkbook>
              <x:ExcelWorksheets>
                <x:ExcelWorksheet><x:Name>Summary</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                <x:ExcelWorksheet><x:Name>Schedule</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                <x:ExcelWorksheet><x:Name>Yearly</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
              </x:ExcelWorksheets>
            </x:ExcelWorkbook>
          </xml>
          <![endif]-->
          <style>
            table { border-collapse: collapse; font-family: Arial, sans-serif; }
            th, td { border: 1px solid #999; padding: 6px 10px; }
            th { background: #17357e; color: #fff; text-align: left; }
            .title { font-size: 16px; font-weight: bold; color: #07142f; padding: 8px 0; }
          </style>
        </head>
        <body>
          <div class="title">Loan Summary</div>
          <table>${r}</table>
          <br/><br/>
          <div class="title">Month-wise Amortization Schedule</div>
          <table>
            <thead>
              <tr><th>Month</th><th>EMI (₹)</th><th>Interest (₹)</th><th>Principal (₹)</th><th>Balance (₹)</th></tr>
            </thead>
            <tbody>${h}</tbody>
          </table>
          <br/><br/>
          <div class="title">Year-wise Breakup</div>
          <table>
            <thead>
              <tr><th>Year</th><th>Principal (₹)</th><th>Interest (₹)</th><th>Balance (₹)</th></tr>
            </thead>
            <tbody>${x}</tbody>
          </table>
        </body>
      </html>`,i=new Blob([`\uFEFF${d}`],{type:"application/vnd.ms-excel;charset=utf-8"}),p=URL.createObjectURL(i),M=document.createElement("a");M.href=p,M.download="loan-amortization-report.xls",document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(p)},$e=()=>{const s=document.getElementById("loan-yearly-chart-svg"),r=s?new XMLSerializer().serializeToString(s):"",h=H.map(i=>`
          <tr>
            <td>${i.m}</td>
            <td>₹ ${t(i.emi)}</td>
            <td>₹ ${t(i.interest)}</td>
            <td>₹ ${t(i.principal)}</td>
            <td>₹ ${t(i.balance)}</td>
          </tr>
        `).join(""),x=`
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
              <div class="value">${(k*12*100).toFixed(2)}%</div>
            </div>

            <div class="card">
              <div class="label">Tenure</div>
              <div class="value">${w} Months</div>
            </div>

            <div class="card">
              <div class="label">Total Interest</div>
              <div class="value">₹ ${t(T)}</div>
            </div>

            <div class="card">
              <div class="label">Total Payable</div>
              <div class="value">₹ ${t(L)}</div>
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
    `,d=window.open("","_blank","width=1200,height=800");if(!d){alert("Popup blocked. Please allow popups to download PDF.");return}d.document.open(),d.document.write(x),d.document.close(),d.focus(),setTimeout(()=>{d.print()},500)};return e.jsx("section",{id:"calculator",className:"bg-white py-14 sm:py-24",children:e.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[e.jsx("h2",{className:"text-center text-2xl font-bold text-[#07142f] sm:text-4xl md:text-5xl",children:"Advance Loan Calculator"}),e.jsx("p",{className:"mt-3 text-center text-sm text-gray-500 sm:text-base",children:"EMI engine, eligibility calculator and full amortization schedule."}),e.jsx("div",{className:"mx-auto mt-6 max-w-3xl overflow-x-auto sm:mt-8",children:e.jsx("div",{className:"flex min-w-max justify-start gap-2 rounded-2xl bg-blue-50 p-1.5 sm:justify-center",children:[{k:"emi",label:"EMI Engine"},{k:"eligibility",label:"Eligibility"},{k:"prepayment",label:"Prepayment"},{k:"balance-transfer",label:"Balance Transfer"},{k:"amortization",label:"Amortization"}].map(s=>e.jsx("button",{type:"button",onClick:()=>m(s.k),className:`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${a===s.k?"bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow":"text-blue-900 hover:bg-white"}`,children:s.label},s.k))})}),a==="emi"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block font-medium",children:"Calculation Mode"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EMI","ROI","Loan Amount"].map(s=>e.jsx("button",{type:"button",onClick:()=>g(s),className:`rounded-lg border px-3 py-2 text-sm font-semibold ${l===s?"border-blue-600 bg-blue-600 text-white":"border-blue-200 bg-white text-blue-700 hover:bg-blue-50"}`,children:s},s))}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Select a mode — the chosen field will be calculated from the others."})]}),l!=="Loan Amount"&&e.jsx(u,{label:"Loan Amount",value:`₹ ${t(o)}`,min:1e5,max:5e7,step:5e4,v:o,onChange:E,unit:"₹"}),l!=="ROI"&&e.jsx(u,{label:"Interest Rate %",value:`${R}%`,min:5,max:24,step:.05,v:R,onChange:j,unit:"%"}),e.jsx(u,{label:"Loan Tenure (Years)",value:`${N} Years`,min:1,max:30,step:1,v:N,onChange:f,unit:"Yr"}),l!=="EMI"&&e.jsx(u,{label:"Monthly EMI",value:`₹ ${t(S)}`,min:1e3,max:5e5,step:500,v:S,onChange:z,unit:"₹"})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsxs("p",{className:"text-sm uppercase tracking-widest text-white/80",children:[l," (Calculated)"]}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:[l==="ROI"&&`${P.toFixed(2)}%`,(l==="EMI"||l==="Loan Amount")&&`₹ ${t(P)}`]})]}),e.jsx(b,{label:"Monthly EMI",value:`₹ ${t(n)}`}),e.jsx(b,{label:"Loan Amount",value:`₹ ${t(y)}`}),e.jsx(b,{label:"Loan Tenure",value:`${N} Years (${w} mo)`}),e.jsx(b,{label:"Interest Rate",value:`${(k*12*100).toFixed(2)}%`}),e.jsx(b,{label:"Total Interest",value:`₹ ${t(T)}`}),e.jsx(b,{label:"Total Amount (Principal + Interest)",value:`₹ ${t(L)}`}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex justify-between text-xs text-gray-600",children:[e.jsx("span",{children:"Principal"}),e.jsx("span",{children:"Interest"})]}),e.jsxs("div",{className:"flex h-3 overflow-hidden rounded-full bg-gray-200",children:[e.jsx("div",{className:"bg-blue-600",style:{width:`${V}%`}}),e.jsx("div",{className:"bg-orange-400",style:{width:`${100-V}%`}})]})]})]})]}),a==="eligibility"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(u,{label:"Monthly Net Income",value:`₹ ${t(_)}`,min:15e3,max:1e6,step:5e3,v:_,onChange:ie}),e.jsx(u,{label:"Existing EMI",value:`₹ ${t(Y)}`,min:0,max:5e5,step:1e3,v:Y,onChange:ce}),e.jsx(u,{label:"FOIR %",value:`${B}%`,min:30,max:75,step:1,v:B,onChange:de}),e.jsx(u,{label:"Interest Rate",value:`${J}%`,min:5,max:24,step:.05,v:J,onChange:xe}),e.jsx(u,{label:"Tenure",value:`${K} Years`,min:1,max:30,step:1,v:K,onChange:me})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Eligible Loan Amount"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(le.eligLoan)]})]}),e.jsx(b,{label:"Eligible EMI",value:`₹ ${t(le.eligEmi)}`}),e.jsx(b,{label:"Required Income (for desired EMI)",value:`₹ ${t(le.reqIncome)}`}),e.jsx("div",{className:"rounded-xl bg-blue-50 p-4 text-xs text-blue-900",children:"FOIR (Fixed Obligation to Income Ratio) is the % of your income banks allow towards EMIs. Typical range: 50–65%."})]})]}),a==="prepayment"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(u,{label:"Loan Amount",value:`₹ ${t(W)}`,min:1e5,max:5e7,step:5e4,v:W,onChange:he}),e.jsx(u,{label:"Interest Rate",value:`${Q}%`,min:5,max:24,step:.05,v:Q,onChange:pe}),e.jsx(u,{label:"Original Tenure",value:`${F} Years`,min:1,max:30,step:1,v:F,onChange:ue}),e.jsx(u,{label:"Lumpsum Prepayment",value:`₹ ${t(Z)}`,min:1e4,max:1e7,step:1e4,v:Z,onChange:be}),e.jsx(u,{label:"Prepay After (Months)",value:`${U} months`,min:1,max:F*12-1,step:1,v:U,onChange:ge})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Interest Saved"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(A.saved)]}),e.jsxs("p",{className:"mt-1 text-xs text-white/80",children:[Math.floor(A.monthsSaved/12),"y"," ",A.monthsSaved%12,"m saved on tenure"]})]}),e.jsx(b,{label:"Original EMI",value:`₹ ${t(A.emi)}`}),e.jsx(b,{label:"Interest (without prepayment)",value:`₹ ${t(A.interestWithout)}`}),e.jsx(b,{label:"Interest (with prepayment)",value:`₹ ${t(A.interestWith)}`}),e.jsx(b,{label:"New Total Tenure",value:`${Math.floor(A.newTenure/12)}y ${A.newTenure%12}m`})]})]}),a==="balance-transfer"&&e.jsxs("div",{className:"mx-auto mt-8 grid max-w-6xl gap-6 rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:gap-8 sm:p-8 lg:grid-cols-5 lg:p-10",children:[e.jsxs("div",{className:"space-y-6 lg:col-span-3",children:[e.jsx(u,{label:"Outstanding Loan",value:`₹ ${t(D)}`,min:1e5,max:5e7,step:5e4,v:D,onChange:fe}),e.jsx(u,{label:"Current Rate",value:`${ee}%`,min:5,max:24,step:.05,v:ee,onChange:ve}),e.jsx(u,{label:"New Bank Rate",value:`${te}%`,min:5,max:24,step:.05,v:te,onChange:je}),e.jsx(u,{label:"Remaining Tenure",value:`${se} Years`,min:1,max:30,step:1,v:se,onChange:ye}),e.jsx(u,{label:"Transfer Fees",value:`₹ ${t(G)}`,min:0,max:2e5,step:1e3,v:G,onChange:we})]}),e.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[e.jsxs("div",{className:"rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-center text-white",children:[e.jsx("p",{className:"text-sm uppercase tracking-widest text-white/80",children:"Total You Save"}),e.jsxs("h3",{className:"mt-2 text-4xl font-bold",children:["₹ ",t(O.totalSaved)]}),e.jsxs("p",{className:"mt-1 text-xs text-white/80",children:["after transfer fees of ₹ ",t(G)]})]}),e.jsx(b,{label:"Current EMI",value:`₹ ${t(O.emiA)}`}),e.jsx(b,{label:"New EMI",value:`₹ ${t(O.emiB)}`}),e.jsx(b,{label:"EMI Reduction / mo",value:`₹ ${t(O.emiSaved)}`}),e.jsx(b,{label:"Total Payable (Current)",value:`₹ ${t(O.totA)}`}),e.jsx(b,{label:"Total Payable (New + Fees)",value:`₹ ${t(O.totB)}`})]})]}),a==="amortization"&&e.jsxs("div",{className:"mx-auto mt-8 max-w-6xl rounded-3xl bg-[#f7f9ff] p-4 shadow-xl sm:mt-10 sm:p-6 lg:p-8",children:[e.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#07142f]",children:"Month-wise Schedule"}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Based on EMI Engine inputs · ",w," months · ₹"," ",t(n),"/mo"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[e.jsxs("span",{className:"rounded-full bg-blue-100 px-3 py-1 text-blue-700",children:["Principal ₹ ",t(y)]}),e.jsxs("span",{className:"rounded-full bg-orange-100 px-3 py-1 text-orange-700",children:["Interest ₹ ",t(T)]})]})]}),e.jsxs("div",{className:"mb-5 flex flex-wrap justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:$e,className:"rounded-xl border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50",children:"Download PDF"}),e.jsx("button",{type:"button",onClick:Me,className:"rounded-xl border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50",children:"Download Excel"}),e.jsx("button",{type:"button",onClick:Ne,className:"rounded-xl border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50",children:"Download Graph PNG"})]}),e.jsxs("div",{className:"mb-6 rounded-xl border border-gray-200 bg-white p-4",children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h4",{className:"text-sm font-bold text-[#07142f]",children:"Year-wise Breakup"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-sm bg-blue-600"}),"Principal"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-sm bg-orange-400"}),"Interest"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"inline-block h-3 w-1 rounded-sm bg-emerald-500"}),"Balance"]})]})]}),e.jsx(Re,{data:oe,loan:y})]}),e.jsx("div",{className:"max-h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"sticky top-0 bg-[#17357e] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Month"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"EMI"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Interest"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Principal"}),e.jsx("th",{className:"px-4 py-2 text-right",children:"Balance"})]})}),e.jsx("tbody",{children:H.map((s,r)=>e.jsxs("tr",{className:r%2?"bg-blue-50/40":"",children:[e.jsx("td",{className:"px-4 py-1.5",children:s.m}),e.jsxs("td",{className:"px-4 py-1.5 text-right",children:["₹ ",t(s.emi)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right text-orange-700",children:["₹ ",t(s.interest)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right text-blue-700",children:["₹ ",t(s.principal)]}),e.jsxs("td",{className:"px-4 py-1.5 text-right font-medium",children:["₹ ",t(s.balance)]})]},s.m))})]})})]})]})})}function Re({data:a,loan:m}){if(!a.length)return null;const l=760,g=260,o=50,E=50,R=30,j=10,N=l-o-E,f=g-j-R,S=Math.max(...a.map(n=>n.interest+n.principal)),z=Math.max(m,...a.map(n=>n.balance)),$=N/a.length,C=Math.max(6,$*.6),P=a.map((n,y)=>{const w=o+y*$+$/2,k=j+f-n.balance/z*f;return`${w},${k}`}).join(" ");return e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{id:"loan-yearly-chart-svg",viewBox:`0 0 ${l} ${g}`,className:"w-full min-w-[600px]",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0",y:"0",width:l,height:g,fill:"#ffffff"}),[0,.25,.5,.75,1].map(n=>e.jsx("line",{x1:o,x2:l-E,y1:j+f*n,y2:j+f*n,stroke:"#e5e7eb",strokeWidth:"1"},n)),a.map((n,y)=>{const w=o+y*$+($-C)/2,k=n.principal/S*f,L=n.interest/S*f,T=j+f-k,V=T-L;return e.jsxs("g",{children:[e.jsx("rect",{x:w,y:V,width:C,height:L,fill:"#fb923c",rx:"2",children:e.jsxs("title",{children:["Year ",n.year," · Interest ₹ ",t(n.interest)]})}),e.jsx("rect",{x:w,y:T,width:C,height:k,fill:"#2563eb",rx:"2",children:e.jsxs("title",{children:["Year ",n.year," · Principal ₹ ",t(n.principal)]})}),(a.length<=20||n.year%2===1)&&e.jsx("text",{x:w+C/2,y:g-R+14,fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:n.year})]},n.year)}),e.jsx("polyline",{points:P,fill:"none",stroke:"#10b981",strokeWidth:"2.5"}),a.map((n,y)=>{const w=o+y*$+$/2,k=j+f-n.balance/z*f;return e.jsx("circle",{cx:w,cy:k,r:"2.5",fill:"#10b981",children:e.jsxs("title",{children:["Year ",n.year," · Balance ₹ ",t(n.balance)]})},n.year)}),[0,.5,1].map(n=>e.jsxs("text",{x:o-6,y:j+f*(1-n)+3,fontSize:"10",fill:"#6b7280",textAnchor:"end",children:["₹",t(S*n)]},`l${n}`)),[0,.5,1].map(n=>e.jsxs("text",{x:l-E+6,y:j+f*(1-n)+3,fontSize:"10",fill:"#10b981",textAnchor:"start",children:["₹",t(z*n)]},`r${n}`)),e.jsx("text",{x:o,y:g-4,fontSize:"10",fill:"#6b7280",children:"Year"})]})})}function u({label:a,value:m,v:l,min:g,max:o,step:E,onChange:R,unit:j}){return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2",children:[e.jsx("span",{className:"font-medium",children:a}),e.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-1",children:[j&&e.jsx("span",{className:"text-xs text-gray-500",children:j}),e.jsx("input",{type:"number",min:g,max:o,step:E,value:l,onChange:N=>{const f=Number(N.target.value);isNaN(f)||R(f)},className:"w-28 bg-transparent text-right text-sm font-semibold text-blue-700 outline-none"})]})]}),e.jsx("input",{type:"range",min:g,max:o,step:E,value:l,onChange:N=>R(Number(N.target.value)),className:"w-full accent-blue-600"}),e.jsxs("div",{className:"mt-1 flex justify-between text-[10px] text-gray-400",children:[e.jsx("span",{children:typeof g=="number"&&g>=1e3?`₹ ${t(g)}`:g}),e.jsx("span",{className:"text-blue-700",children:m}),e.jsx("span",{children:typeof o=="number"&&o>=1e3?`₹ ${t(o)}`:o})]})]})}function b({label:a,value:m}){return e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm",children:[e.jsx("span",{className:"text-sm text-gray-600",children:a}),e.jsx("span",{className:"text-right font-semibold text-[#07142f]",children:m})]})}export{Ce as E};
