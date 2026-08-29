import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Plus, Users, Search } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createMyPartnerLead,
  listMyPartnerLeads,
} from "@/lib/partners.functions";

export const Route = createFileRoute("/partner/leads")({
  component: PartnerLeadsPage,
  head: () => ({
    meta: [
      { title: "My Leads · Partner Portal | Aarthvaahini" },
      {
        name: "description",
        content:
          "Partner portal: add new leads and track the status of leads assigned to you by the Aarthvaahini team.",
      },
      { property: "og:title", content: "My Leads · Partner Portal" },
      {
        property: "og:description",
        content: "Add new leads and track leads assigned to you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

type PartnerLead = {
  id: string;
  full_name: string | null;
  phone: string | null;
  email: string | null;
  city: string | null;
  product_type: string | null;
  product_name: string | null;
  amount: number | null;
  status: string;
  created_at: string;
};

const PRODUCTS = ["Loan", "Insurance", "Mutual Fund", "Banking"];

const statusClass = (s: string) => {
  const v = s.toLowerCase();
  if (v === "approved" || v === "disbursed" || v === "closed")
    return "bg-emerald-100 text-emerald-700";
  if (v === "rejected") return "bg-rose-100 text-rose-700";
  if (v === "qualified") return "bg-sky-100 text-sky-700";
  return "bg-amber-100 text-amber-700";
};

function PartnerLeadsPage() {
  const fetchLeads = useServerFn(listMyPartnerLeads);
  const addLead = useServerFn(createMyPartnerLead);

  const [rows, setRows] = useState<PartnerLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    city: "",
    product_type: "Loan",
    product_name: "",
    amount: "",
    message: "",
  });

  const resetForm = () =>
    setForm({
      full_name: "",
      phone: "",
      email: "",
      city: "",
      product_type: "Loan",
      product_name: "",
      amount: "",
      message: "",
    });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchLeads();
      setRows((res.leads ?? []) as PartnerLead[]);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not load leads");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [fetchLeads]);

  useEffect(() => {
    load();
  }, [load]);

  const submit = async () => {
    const name = form.full_name.trim();
    const phone = form.phone.trim().replace(/\D/g, "");

    if (name.length < 2) return toast.error("Enter a valid name");
    if (phone.length < 10 || phone.length > 12)
      return toast.error("Mobile number must be 10–12 digits");

    setSaving(true);
    try {
      await addLead({
        data: {
          full_name: name,
          phone,
          email: form.email.trim() || undefined,
          city: form.city.trim() || undefined,
          product_type: form.product_type,
          product_name: form.product_name.trim() || undefined,
          amount: form.amount ? Number(form.amount) : undefined,
          message: form.message.trim() || undefined,
        },
      });
      toast.success("Lead added — sent to the Aarthvaahini team");
      setOpen(false);
      resetForm();
      load();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not add lead");
    } finally {
      setSaving(false);
    }
  };

  const filtered = rows.filter((r) => {
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      r.full_name?.toLowerCase().includes(s) ||
      r.phone?.includes(q) ||
      r.email?.toLowerCase().includes(s) ||
      r.product_name?.toLowerCase().includes(s)
    );
  });

  const isNew = (s: string) => ["new", "contacted"].includes(s.toLowerCase());
  const counts = {
    total: rows.length,
    fresh: rows.filter((r) => isNew(r.status)).length,
    won: rows.filter((r) =>
      ["approved", "disbursed", "closed"].includes(r.status.toLowerCase()),
    ).length,
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-5 text-white shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

        <div className="relative flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <Users className="h-3 w-3" /> My Leads
            </div>

            <h1 className="mt-2 text-2xl font-bold md:text-3xl">Lead Tracker</h1>

            <p className="text-sm text-white/80">
              {counts.total} total · {counts.fresh} new · {counts.won} converted
            </p>
          </div>

          <Dialog
            open={open}
            onOpenChange={(o) => {
              setOpen(o);
              if (!o) resetForm();
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-white text-emerald-700 shadow-md hover:bg-emerald-50">
                <Plus className="mr-1.5 h-4 w-4" /> Add Lead
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto bg-white">
              <DialogHeader>
                <DialogTitle>Add New Lead</DialogTitle>
              </DialogHeader>

              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={form.full_name}
                      maxLength={60}
                      onChange={(e) =>
                        setForm({ ...form, full_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Mobile *</Label>
                    <Input
                      inputMode="numeric"
                      maxLength={12}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value.replace(/\D/g, "").slice(0, 12),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>City</Label>
                    <Input
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Product Interest</Label>
                    <select
                      value={form.product_type}
                      onChange={(e) =>
                        setForm({ ...form, product_type: e.target.value })
                      }
                      className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>Requirement Amount</Label>
                    <Input
                      inputMode="numeric"
                      value={form.amount}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          amount: e.target.value.replace(/\D/g, ""),
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label>Sub Product / Details</Label>
                  <Input
                    value={form.product_name}
                    placeholder="e.g. Home Loan, Term Insurance, SIP"
                    onChange={(e) =>
                      setForm({ ...form, product_name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Notes</Label>
                  <Textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>

                <Button
                  onClick={submit}
                  disabled={saving}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                >
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Add Lead
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search name, mobile, email, product…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9"
          />
        </div>
      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No leads yet. Add your own leads, or leads assigned to you by the
            Aarthvaahini team will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Added</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">
                      {r.full_name ?? "—"}
                    </TableCell>

                    <TableCell className="text-xs text-slate-600">
                      <div>{r.phone ?? "—"}</div>
                      {r.email && (
                        <div className="text-slate-400">{r.email}</div>
                      )}
                    </TableCell>

                    <TableCell>
                      <Badge variant="secondary">
                        {r.product_name || r.product_type || "—"}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-sm">
                      {r.amount
                        ? `₹${Number(r.amount).toLocaleString("en-IN")}`
                        : "—"}
                    </TableCell>

                    <TableCell>
                      <Badge className={statusClass(r.status)}>{r.status}</Badge>
                    </TableCell>

                    <TableCell className="text-xs text-slate-500">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}
