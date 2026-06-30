import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Search, Building2, Download } from "lucide-react";
import { toast } from "sonner";

const WEBSITE_BANKS: Array<{ name: string; domain: string; logo?: string; category: string }> = [
  { name: "Bank of Baroda", domain: "bankofbaroda.in", category: "PSU Bank" },
  { name: "State Bank of India", domain: "onlinesbi.sbi", category: "PSU Bank" },
  { name: "Bank of India", domain: "bankofindia.co.in", category: "PSU Bank" },
  { name: "Punjab National Bank", domain: "pnbindia.in", category: "PSU Bank" },
  { name: "Central Bank of India", domain: "centralbankofindia.co.in", category: "PSU Bank" },
  { name: "HDFC Bank", domain: "hdfcbank.com", category: "Private Bank" },
  { name: "ICICI Bank", domain: "icicibank.com", category: "Private Bank" },
  { name: "Axis Bank", domain: "axisbank.com", category: "Private Bank" },
  { name: "Kotak Mahindra Bank", domain: "kotak.com", category: "Private Bank" },
  { name: "IndusInd Bank", domain: "indusind.com", category: "Private Bank" },
  { name: "RBL Bank", domain: "rblbank.com", category: "Private Bank" },
  { name: "Yes Bank", domain: "yesbank.in", category: "Private Bank" },
  { name: "Bandhan Bank", domain: "bandhanbank.com", category: "Private Bank" },
  { name: "IDFC First Bank", domain: "idfcfirstbank.com", category: "Private Bank" },
  { name: "Saraswat Bank", domain: "saraswatbank.com", category: "Co-op Bank" },
  { name: "Aditya Birla Capital", domain: "adityabirlacapital.com", category: "NBFC" },
  { name: "PNB Housing Finance", domain: "pnbhousing.com", category: "HFC" },
  { name: "Tata Capital", domain: "tatacapital.com", category: "NBFC" },
  { name: "Sundaram Housing Finance", domain: "sundaramhome.in", category: "HFC" },
  { name: "SMFG India Credit", domain: "smfgindiacredit.com", category: "NBFC" },
  { name: "Bajaj Finserv", domain: "bajajfinserv.in", category: "NBFC" },
  { name: "Jio Finance", domain: "jiofinance.com", category: "NBFC" },
  { name: "L&T Finance", domain: "ltfs.com", category: "NBFC" },
  { name: "Cholamandalam Finance", domain: "cholamandalam.com", category: "NBFC" },
  { name: "Mahindra Finance", domain: "mahindrafinance.com", category: "NBFC" },
];

export const Route = createFileRoute("/crm/banks")({ component: BanksPage });

type Bank = {
  id: string;
  name: string;
  domain: string | null;
  logo_url: string | null;
  category: string | null;
  is_active: boolean;
  position: number;
  notes: string | null;
};

const EMPTY: Omit<Bank, "id"> = {
  name: "",
  domain: "",
  logo_url: "",
  category: "Bank",
  is_active: true,
  position: 0,
  notes: "",
};

function BanksPage() {
  const [rows, setRows] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Bank | null>(null);
  const [form, setForm] = useState<Omit<Bank, "id">>(EMPTY);

  const importWebsiteBanks = async () => {
    if (!confirm(`Import ${WEBSITE_BANKS.length} banks from the website list? Existing banks with the same name will be skipped.`)) return;
    const existing = new Set(rows.map((r) => r.name.trim().toLowerCase()));
    const toInsert = WEBSITE_BANKS.filter((b) => !existing.has(b.name.toLowerCase())).map((b, i) => ({
      name: b.name,
      domain: b.domain,
      logo_url: b.logo ?? `https://logo.clearbit.com/${b.domain}`,
      category: b.category,
      is_active: true,
      position: rows.length + i,
      notes: null,
    }));
    if (toInsert.length === 0) {
      toast.info("All website banks are already imported");
      return;
    }
    const { error } = await supabase.from("banks").insert(toInsert);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(`Imported ${toInsert.length} banks`);
    load();
  };

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("banks")
      .select("*")
      .order("position", { ascending: true })
      .order("name", { ascending: true });
    if (error) toast.error(error.message);
    setRows((data as Bank[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  };

  const openEdit = (b: Bank) => {
    setEditing(b);
    setForm({
      name: b.name,
      domain: b.domain ?? "",
      logo_url: b.logo_url ?? "",
      category: b.category ?? "Bank",
      is_active: b.is_active,
      position: b.position,
      notes: b.notes ?? "",
    });
    setOpen(true);
  };

  const save = async () => {
    if (!form.name.trim()) {
      toast.error("Bank name is required");
      return;
    }
    const payload = { ...form, name: form.name.trim() };
    const { error } = editing
      ? await supabase.from("banks").update(payload).eq("id", editing.id)
      : await supabase.from("banks").insert(payload);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(editing ? "Bank updated" : "Bank added");
    setOpen(false);
    load();
  };

  const remove = async (b: Bank) => {
    if (!confirm(`Delete ${b.name}?`)) return;
    const { error } = await supabase.from("banks").delete().eq("id", b.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Deleted");
    load();
  };

  const toggleActive = async (b: Bank) => {
    const { error } = await supabase
      .from("banks")
      .update({ is_active: !b.is_active })
      .eq("id", b.id);
    if (error) toast.error(error.message);
    else load();
  };

  const filtered = rows.filter((r) =>
    [r.name, r.domain, r.category]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(q.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <Building2 className="h-6 w-6 text-sky-600" /> Partner Banks
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage banks &amp; NBFCs shown across CRM lead forms and the public website.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={importWebsiteBanks} variant="outline">
            <Download className="mr-1.5 h-4 w-4" /> Import Website List
          </Button>
          <Button onClick={openNew} className="bg-sky-600 hover:bg-sky-700">
            <Plus className="mr-1.5 h-4 w-4" /> Add Bank
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="relative mb-4 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search banks…"
            className="pl-9"
          />
        </div>

        {loading ? (
          <div className="py-12 text-center text-sm text-muted-foreground">Loading…</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No banks yet. Click <strong>Add Bank</strong> to create one.
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((b) => (
              <div
                key={b.id}
                className="group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-200">
                    {b.logo_url ? (
                      <img
                        src={b.logo_url}
                        alt={b.name}
                        className="h-10 w-10 object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <Building2 className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-slate-900">{b.name}</div>
                    <div className="truncate text-xs text-slate-500">{b.domain || "—"}</div>
                    <div className="mt-1 inline-block rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                      {b.category || "Bank"}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Switch
                      checked={b.is_active}
                      onCheckedChange={() => toggleActive(b)}
                    />
                    <span className={b.is_active ? "text-emerald-600" : "text-slate-400"}>
                      {b.is_active ? "Active" : "Hidden"}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={() => openEdit(b)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => remove(b)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Bank" : "Add Bank"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <div>
              <Label>Bank Name *</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. HDFC Bank"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Domain</Label>
                <Input
                  value={form.domain ?? ""}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  placeholder="hdfcbank.com"
                />
              </div>
              <div>
                <Label>Category</Label>
                <Input
                  value={form.category ?? ""}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="Bank / NBFC / HFC"
                />
              </div>
            </div>
            <div>
              <Label>Logo URL</Label>
              <Input
                value={form.logo_url ?? ""}
                onChange={(e) => setForm({ ...form, logo_url: e.target.value })}
                placeholder="https://… (leave blank to auto-fetch from domain)"
              />
              {form.logo_url ? (
                <img
                  src={form.logo_url}
                  alt="preview"
                  className="mt-2 h-12 w-12 rounded border object-contain"
                />
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Display Order</Label>
                <Input
                  type="number"
                  value={form.position}
                  onChange={(e) =>
                    setForm({ ...form, position: Number(e.target.value) || 0 })
                  }
                />
              </div>
              <div className="flex items-end gap-2">
                <Switch
                  checked={form.is_active}
                  onCheckedChange={(v) => setForm({ ...form, is_active: v })}
                />
                <span className="text-sm">Active</span>
              </div>
            </div>
            <div>
              <Label>Notes</Label>
              <Textarea
                rows={2}
                value={form.notes ?? ""}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Internal notes (commission, contact person, etc.)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={save} className="bg-sky-600 hover:bg-sky-700">
              {editing ? "Save Changes" : "Add Bank"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
