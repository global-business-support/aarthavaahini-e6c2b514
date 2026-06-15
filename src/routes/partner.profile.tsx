import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getMyPartner, updateMyPartner } from "@/lib/partners.functions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/partner/profile")({ component: PartnerProfile });

function PartnerProfile() {
  const fetchP = useServerFn(getMyPartner);
  const upd = useServerFn(updateMyPartner);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState("");
  const [f, setF] = useState({ name: "", phone: "", city: "", organisation: "", notes: "" });

  useEffect(() => {
    fetchP().then((r) => {
      setEmail(r.email || "");
      setF({
        name: r.partner.name || "",
        phone: r.partner.phone || "",
        city: r.partner.city || "",
        organisation: r.partner.organisation || "",
        notes: r.partner.notes || "",
      });
    }).finally(() => setLoading(false));
  }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try { await upd({ data: f }); toast.success("Profile updated"); }
    catch (err: any) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-emerald-500" /></div>;

  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
      <Card className="p-6">
        <form onSubmit={save} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Fld label="Email (login)"><Input value={email} disabled /></Fld>
          <Fld label="Name"><Input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></Fld>
          <Fld label="Phone"><Input value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></Fld>
          <Fld label="City"><Input value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} /></Fld>
          <Fld label="Organisation"><Input value={f.organisation} onChange={(e) => setF({ ...f, organisation: e.target.value })} /></Fld>
          <div className="sm:col-span-2"><Fld label="Notes"><Input value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} /></Fld></div>
          <div className="sm:col-span-2 flex justify-end">
            <Button type="submit" disabled={saving} className="bg-emerald-600 text-white">
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

function Fld({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="min-w-0"><Label className="text-xs">{label}</Label><div className="mt-1">{children}</div></div>;
}
