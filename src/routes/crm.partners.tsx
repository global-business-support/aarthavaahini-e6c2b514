// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { useServerFn } from "@tanstack/react-start";
// import { listPartners, createPartnerAccount, resetPartnerPassword, deletePartner, updatePartner } from "@/lib/partners.functions";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import {
//   Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
// } from "@/components/ui/select";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Loader2, Plus, Handshake, Search, KeyRound, Trash2, Mail, Copy } from "lucide-react";
// import { toast } from "sonner";

// export const Route = createFileRoute("/crm/partners")({ component: PartnersPage });

// const CATEGORIES = ["DSA / Connector", "Bank Partner", "NBFC", "Insurance Agent", "Mutual Fund Distributor", "Referral"];

// function PartnersPage() {
//   const fetchAll = useServerFn(listPartners);
//   const create = useServerFn(createPartnerAccount);
//   const reset = useServerFn(resetPartnerPassword);
//   const del = useServerFn(deletePartner);
//   const upd = useServerFn(updatePartner);

//   const [rows, setRows] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [filter, setFilter] = useState("");
//   const [pwOpen, setPwOpen] = useState<string | null>(null);
//   const [newPw, setNewPw] = useState("");

//   const load = () => { setLoading(true); fetchAll().then((r) => setRows(r.partners)).catch((e) => toast.error(e.message)).finally(() => setLoading(false)); };
//   useEffect(() => { load(); }, []);

//   const filtered = rows.filter((p) => {
//     const q = filter.toLowerCase();
//     return !q || p.name?.toLowerCase().includes(q) || p.organisation?.toLowerCase().includes(q) || p.phone?.includes(q) || p.email?.toLowerCase().includes(q);
//   });

//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete partner and their login? This cannot be undone.")) return;
//     try { await del({ data: { id } }); toast.success("Partner deleted"); load(); } catch (e: any) { toast.error(e.message); }
//   };
//   const handleStatus = async (id: string, status: string) => {
//     try { await upd({ data: { id, patch: { status } } }); toast.success("Status updated"); load(); } catch (e: any) { toast.error(e.message); }
//   };
//   const handleReset = async (id: string) => {
//     if (!newPw || newPw.length < 6) return toast.error("Password must be 6+ chars");
//     try { await reset({ data: { partnerId: id, password: newPw } }); toast.success("Password updated"); setPwOpen(null); setNewPw(""); }
//     catch (e: any) { toast.error(e.message); }
//   };

//   return (
//     <div className="space-y-4">
//       <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 p-5 text-white shadow-lg shadow-sky-500/20">
//         <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
//         <div className="relative flex flex-wrap items-end justify-between gap-3">
//           <div>
//             <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
//               <Handshake className="h-3 w-3" /> Channel Partners
//             </div>
//             <h1 className="mt-2 text-2xl font-bold md:text-3xl">Partners</h1>
//             <p className="text-sm text-white/80">{rows.length} partner{rows.length === 1 ? "" : "s"} · each gets their own portal at /partner</p>
//           </div>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
//                 <Plus className="mr-2 h-4 w-4" /> Register Partner
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-2xl bg-white">
//               <DialogHeader><DialogTitle>Register New Partner (creates login)</DialogTitle></DialogHeader>
//               <PartnerForm onSaved={() => { setOpen(false); load(); }} create={create} />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <Card className="p-4">
//         <div className="relative max-w-md">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//           <Input placeholder="Search name, organisation, phone, email…" value={filter} onChange={(e) => setFilter(e.target.value)} className="pl-9" />
//         </div>
//       </Card>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-32 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-slate-400" /></div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">No partners yet. Register your first DSA / bank partner — they'll get login access to the Partner Portal.</div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Partner</TableHead>
//                 <TableHead>Login Email</TableHead>
//                 <TableHead>Category</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Commission</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.map((p) => (
//                 <TableRow key={p.id}>
//                   <TableCell>
//                     <div className="font-medium">{p.name}</div>
//                     <div className="text-xs text-slate-500">{p.organisation || "—"} · {p.city || "—"}</div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-1 text-sm">
//                       <Mail className="h-3 w-3 text-slate-400" />{p.email}
//                       <button onClick={() => { navigator.clipboard.writeText(p.email); toast.success("Email copied"); }} className="ml-1 text-slate-400 hover:text-sky-600"><Copy className="h-3 w-3" /></button>
//                     </div>
//                   </TableCell>
//                   <TableCell><Badge variant="secondary">{p.category}</Badge></TableCell>
//                   <TableCell className="text-sm">{p.phone}</TableCell>
//                   <TableCell className="text-sm">{p.commission_pct || 0}%</TableCell>
//                   <TableCell>
//                     <Select value={p.status} onValueChange={(v) => handleStatus(p.id, v)}>
//                       <SelectTrigger className="h-8 w-28"><SelectValue /></SelectTrigger>
//                       <SelectContent className="bg-white">
//                         <SelectItem value="Active">Active</SelectItem>
//                         <SelectItem value="Pending">Pending</SelectItem>
//                         <SelectItem value="Inactive">Inactive</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </TableCell>
//                   <TableCell className="text-right">
//                     <Dialog open={pwOpen === p.id} onOpenChange={(o) => { setPwOpen(o ? p.id : null); setNewPw(""); }}>
//                       <DialogTrigger asChild>
//                         <Button variant="ghost" size="sm" title="Reset password"><KeyRound className="h-4 w-4" /></Button>
//                       </DialogTrigger>
//                       <DialogContent className="max-w-sm bg-white">
//                         <DialogHeader><DialogTitle>Reset password for {p.name}</DialogTitle></DialogHeader>
//                         <div className="space-y-3">
//                           <Input type="text" placeholder="New password (min 6 chars)" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
//                           <Button className="w-full bg-sky-600 text-white" onClick={() => handleReset(p.id)}>Set Password</Button>
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                     <Button variant="ghost" size="sm" onClick={() => handleDelete(p.id)} className="text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </Card>
//     </div>
//   );
// }

// function PartnerForm({ onSaved, create }: { onSaved: () => void; create: any }) {
//   const [f, setF] = useState({
//     name: "", organisation: "", category: CATEGORIES[0],
//     phone: "", email: "", password: "", city: "",
//     commission_pct: 1, notes: "",
//   });
//   const [busy, setBusy] = useState(false);

//   return (
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         if (!f.name.trim() || !f.phone.trim() || !f.email.trim() || !f.password) return toast.error("Name, phone, email and password required");
//         setBusy(true);
//         try {
//           await create({ data: f });
//           toast.success(`Partner registered. Share login: ${f.email}`);
//           onSaved();
//         } catch (err: any) { toast.error(err.message); }
//         finally { setBusy(false); }
//       }}
//       className="grid grid-cols-1 gap-3 sm:grid-cols-2"
//     >
//       <Fld label="Partner Name *"><Input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></Fld>
//       <Fld label="Organisation"><Input value={f.organisation} onChange={(e) => setF({ ...f, organisation: e.target.value })} /></Fld>
//       <Fld label="Login Email *"><Input type="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder="partner@example.com" /></Fld>
//       <Fld label="Password *"><Input type="text" required value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} placeholder="min 6 chars" /></Fld>
//       <Fld label="Phone *"><Input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></Fld>
//       <Fld label="City"><Input value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} /></Fld>
//       <Fld label="Category">
//         <Select value={f.category} onValueChange={(v) => setF({ ...f, category: v })}>
//           <SelectTrigger><SelectValue /></SelectTrigger>
//           <SelectContent className="bg-white">{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
//         </Select>
//       </Fld>
//       <Fld label="Commission %"><Input type="number" step="0.01" value={f.commission_pct} onChange={(e) => setF({ ...f, commission_pct: Number(e.target.value) })} /></Fld>
//       <div className="sm:col-span-2"><Fld label="Notes"><Input value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} placeholder="Agreement date, contact person…" /></Fld></div>
//       <div className="sm:col-span-2 flex justify-end">
//         <Button type="submit" disabled={busy} className="bg-gradient-to-r from-sky-500 to-blue-500 text-white">
//           {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Register & Create Login
//         </Button>
//       </div>
//     </form>
//   );
// }

// function Fld({ label, children }: { label: string; children: React.ReactNode }) {
//   return <div className="min-w-0"><Label className="text-xs">{label}</Label><div className="mt-1">{children}</div></div>;
// }
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/crm/partners")({
  component: CrmPartnersPage,
});

function CrmPartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-[#17357e]/10 px-5 py-2 text-sm font-bold text-[#17357e]">
            CRM Partners
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#07142f] sm:text-5xl">
            Partner Management Coming Soon
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            This CRM section will be used to manage partners, partner accounts,
            passwords, leads and partner performance.
          </p>

          <Link to="/crm">
            <Button className="mt-8 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              Back to CRM
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}