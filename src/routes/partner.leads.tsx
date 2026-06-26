// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { useServerFn } from "@tanstack/react-start";
// import { listMyPartnerLeads, createMyPartnerLead } from "@/lib/partners.functions";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Loader2, Plus, Users } from "lucide-react";
// import { toast } from "sonner";

// export const Route = createFileRoute("/partner/leads")({ component: PartnerLeads });

// function PartnerLeads() {
//   const fetchL = useServerFn(listMyPartnerLeads);
//   const addL = useServerFn(createMyPartnerLead);
//   const [leads, setLeads] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [f, setF] = useState({ full_name: "", phone: "", email: "", product_type: "Loan", product_name: "", amount: "", city: "", message: "" });

//   const load = () => { setLoading(true); fetchL().then((r) => setLeads(r.leads)).finally(() => setLoading(false)); };
//   useEffect(() => { load(); }, []);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addL({ data: { ...f, amount: f.amount ? Number(f.amount) : undefined } });
//       toast.success("Lead added");
//       setOpen(false);
//       setF({ full_name: "", phone: "", email: "", product_type: "Loan", product_name: "", amount: "", city: "", message: "" });
//       load();
//     } catch (err: any) { toast.error(err.message); }
//   };

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">My Leads</h1>
//           <p className="text-sm text-slate-500">{leads.length} lead{leads.length === 1 ? "" : "s"}</p>
//         </div>
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white"><Plus className="mr-2 h-4 w-4" />Add Lead</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-xl bg-white">
//             <DialogHeader><DialogTitle>Add New Lead</DialogTitle></DialogHeader>
//             <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//               <Fld label="Full Name *"><Input required value={f.full_name} onChange={(e) => setF({ ...f, full_name: e.target.value })} /></Fld>
//               <Fld label="Phone *"><Input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></Fld>
//               <Fld label="Email"><Input type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></Fld>
//               <Fld label="Product Type"><Input value={f.product_type} onChange={(e) => setF({ ...f, product_type: e.target.value })} placeholder="Loan / Insurance / MF" /></Fld>
//               <Fld label="Product Name"><Input value={f.product_name} onChange={(e) => setF({ ...f, product_name: e.target.value })} /></Fld>
//               <Fld label="Amount"><Input type="number" value={f.amount} onChange={(e) => setF({ ...f, amount: e.target.value })} /></Fld>
//               <Fld label="City"><Input value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} /></Fld>
//               <div className="sm:col-span-2"><Fld label="Message"><Input value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></Fld></div>
//               <div className="sm:col-span-2 flex justify-end"><Button type="submit" className="bg-emerald-600 text-white">Save Lead</Button></div>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-32 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-slate-400" /></div>
//         ) : leads.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500"><Users className="mx-auto mb-2 h-8 w-8 text-slate-300" />No leads yet</div>
//         ) : (
//           <Table>
//             <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Contact</TableHead><TableHead>Product</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
//             <TableBody>
//               {leads.map((l) => (
//                 <TableRow key={l.id}>
//                   <TableCell className="font-medium">{l.full_name}</TableCell>
//                   <TableCell><div className="text-sm">{l.phone}</div><div className="text-xs text-slate-500">{l.email}</div></TableCell>
//                   <TableCell>{l.product_type}<div className="text-xs text-slate-500">{l.product_name}</div></TableCell>
//                   <TableCell>{l.amount ? `₹${Number(l.amount).toLocaleString("en-IN")}` : "—"}</TableCell>
//                   <TableCell><Badge variant="secondary">{l.status}</Badge></TableCell>
//                   <TableCell className="text-xs text-slate-500">{new Date(l.created_at).toLocaleDateString()}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </Card>
//     </div>
//   );
// }

// function Fld({ label, children }: { label: string; children: React.ReactNode }) {
//   return <div className="min-w-0"><Label className="text-xs">{label}</Label><div className="mt-1">{children}</div></div>;
// }
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/partner/leads")({
  component: PartnerLeadsPage,
});

function PartnerLeadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-[#17357e]/10 px-5 py-2 text-sm font-bold text-[#17357e]">
            Partner Leads
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#07142f] sm:text-5xl">
            Partner Leads Coming Soon
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page will show partner lead tracking, lead status, customer
            details and follow-up updates.
          </p>

          <Link to="/contact">
            <Button className="mt-8 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              Contact Admin
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}