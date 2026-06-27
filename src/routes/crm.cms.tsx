import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/cms")({ component: CmsPage });

type Tab = "banners" | "products" | "testimonials" | "dashboard";

function CmsPage() {
  const [tab, setTab] = useState<Tab>("banners");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Site Content (CMS)</h1>
        <p className="text-sm text-muted-foreground">
          Manage hero banners, homepage product cards, testimonials and CRM
          dashboard card labels. Changes show up immediately on the public site.
        </p>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as Tab)}>
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="banners">Hero Banners</TabsTrigger>
          <TabsTrigger value="products">Product Cards</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard Cards</TabsTrigger>
        </TabsList>

        <TabsContent value="banners">
          <BannersEditor />
        </TabsContent>
        <TabsContent value="products">
          <ProductCardsEditor />
        </TabsContent>
        <TabsContent value="testimonials">
          <TestimonialsEditor />
        </TabsContent>
        <TabsContent value="dashboard">
          <DashboardEditor />
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* -----------------------------  shared helpers  ----------------------------- */

function ImageField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>Image URL</Label>
      <Input
        placeholder="https://… (paste an image URL, recommended ≥ 1200px wide)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <img
          src={value}
          alt="preview"
          className="h-32 w-full rounded-lg border object-cover"
          onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.3")}
        />
      )}
    </div>
  );
}

/* -----------------------------  Hero banners  ----------------------------- */

type HeroRow = {
  id: string;
  position: number;
  image_url: string;
  title: string | null;
  subtitle: string | null;
  show_text: boolean;
  cta_label: string | null;
  cta_link: string | null;
  is_active: boolean;
};

function BannersEditor() {
  const [rows, setRows] = useState<HeroRow[]>([]);
  const [editing, setEditing] = useState<HeroRow | null>(null);
  const [open, setOpen] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("hero_slides")
      .select("*")
      .order("position", { ascending: true });
    setRows((data ?? []) as HeroRow[]);
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const save = async (row: HeroRow) => {
    const { id, ...rest } = row;
    const op = id
      ? supabase.from("hero_slides").update(rest).eq("id", id)
      : supabase.from("hero_slides").insert(rest);
    const { error } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this slide?")) return;
    const { error } = await supabase.from("hero_slides").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };

  return (
    <Card className="mt-4 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Hero Banners ({rows.length})</h2>
        <Button
          onClick={() => {
            setEditing({
              id: "",
              position: rows.length,
              image_url: "",
              title: "",
              subtitle: "",
              show_text: true,
              cta_label: "Free Consultation",
              cta_link: "/contact",
              is_active: true,
            });
            setOpen(true);
          }}
        >
          <Plus className="mr-1 h-4 w-4" /> Add Banner
        </Button>
      </div>

      <div className="grid gap-3">
        {rows.map((r) => (
          <div
            key={r.id}
            className="flex flex-wrap items-center gap-4 rounded-lg border p-3"
          >
            <img
              src={r.image_url}
              alt=""
              className="h-16 w-28 shrink-0 rounded object-cover"
              onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.3")}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{r.title || "(image only)"}</p>
              <p className="truncate text-xs text-muted-foreground">{r.subtitle}</p>
              <p className="text-xs">
                Pos {r.position} · {r.is_active ? "Active" : "Hidden"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setEditing(r);
                  setOpen(true);
                }}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => remove(r.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editing?.id ? "Edit Banner" : "Add Banner"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-3">
              <ImageField
                value={editing.image_url}
                onChange={(v) => setEditing({ ...editing, image_url: v })}
              />
              <div>
                <Label>Title</Label>
                <Input
                  value={editing.title ?? ""}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                />
              </div>
              <div>
                <Label>Subtitle</Label>
                <Textarea
                  value={editing.subtitle ?? ""}
                  onChange={(e) => setEditing({ ...editing, subtitle: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>CTA label</Label>
                  <Input
                    value={editing.cta_label ?? ""}
                    onChange={(e) => setEditing({ ...editing, cta_label: e.target.value })}
                  />
                </div>
                <div>
                  <Label>CTA link</Label>
                  <Input
                    value={editing.cta_link ?? ""}
                    onChange={(e) => setEditing({ ...editing, cta_link: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Position</Label>
                  <Input
                    type="number"
                    value={editing.position}
                    onChange={(e) =>
                      setEditing({ ...editing, position: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="flex items-end gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <Switch
                      checked={editing.show_text}
                      onCheckedChange={(v) => setEditing({ ...editing, show_text: v })}
                    />
                    Show text
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <Switch
                      checked={editing.is_active}
                      onCheckedChange={(v) => setEditing({ ...editing, is_active: v })}
                    />
                    Active
                  </label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => editing && save(editing)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

/* -----------------------------  Product cards  ----------------------------- */

type ProductRow = {
  id: string;
  position: number;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  bg_color: string | null;
  button1_label: string | null;
  button1_link: string | null;
  button2_label: string | null;
  button2_link: string | null;
  is_active: boolean;
};

function ProductCardsEditor() {
  const [rows, setRows] = useState<ProductRow[]>([]);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [open, setOpen] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("product_cards")
      .select("*")
      .order("position", { ascending: true });
    setRows((data ?? []) as ProductRow[]);
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const save = async (row: ProductRow) => {
    const { id, ...rest } = row;
    const op = id
      ? supabase.from("product_cards").update(rest).eq("id", id)
      : supabase.from("product_cards").insert(rest);
    const { error } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this card?")) return;
    const { error } = await supabase.from("product_cards").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };

  return (
    <Card className="mt-4 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Product Cards ({rows.length})</h2>
        <Button
          onClick={() => {
            setEditing({
              id: "",
              position: rows.length,
              title: "",
              subtitle: "",
              image_url: "",
              bg_color: "#eaf4ff",
              button1_label: "Apply Now",
              button1_link: "/contact",
              button2_label: "Learn more",
              button2_link: "/loans",
              is_active: true,
            });
            setOpen(true);
          }}
        >
          <Plus className="mr-1 h-4 w-4" /> Add Card
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.id}
            className="flex gap-3 overflow-hidden rounded-lg border p-3"
            style={{ backgroundColor: r.bg_color ?? "#fff" }}
          >
            {r.image_url && (
              <img
                src={r.image_url}
                alt=""
                className="h-20 w-24 shrink-0 rounded object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{r.title}</p>
              <p className="truncate text-xs">{r.subtitle}</p>
              <p className="text-xs opacity-70">
                Pos {r.position} · {r.is_active ? "Active" : "Hidden"}
              </p>
              <div className="mt-1 flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditing(r);
                    setOpen(true);
                  }}
                >
                  <Pencil className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => remove(r.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editing?.id ? "Edit Card" : "Add Card"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-3">
              <ImageField
                value={editing.image_url ?? ""}
                onChange={(v) => setEditing({ ...editing, image_url: v })}
              />
              <div>
                <Label>Title</Label>
                <Input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                />
              </div>
              <div>
                <Label>Subtitle</Label>
                <Textarea
                  value={editing.subtitle ?? ""}
                  onChange={(e) => setEditing({ ...editing, subtitle: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Background Color</Label>
                  <Input
                    type="color"
                    value={editing.bg_color ?? "#eaf4ff"}
                    onChange={(e) =>
                      setEditing({ ...editing, bg_color: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Position</Label>
                  <Input
                    type="number"
                    value={editing.position}
                    onChange={(e) =>
                      setEditing({ ...editing, position: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Button 1 label</Label>
                  <Input
                    value={editing.button1_label ?? ""}
                    onChange={(e) =>
                      setEditing({ ...editing, button1_label: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Button 1 link</Label>
                  <Input
                    value={editing.button1_link ?? ""}
                    onChange={(e) =>
                      setEditing({ ...editing, button1_link: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Button 2 label</Label>
                  <Input
                    value={editing.button2_label ?? ""}
                    onChange={(e) =>
                      setEditing({ ...editing, button2_label: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Button 2 link</Label>
                  <Input
                    value={editing.button2_link ?? ""}
                    onChange={(e) =>
                      setEditing({ ...editing, button2_link: e.target.value })
                    }
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <Switch
                  checked={editing.is_active}
                  onCheckedChange={(v) => setEditing({ ...editing, is_active: v })}
                />
                Active
              </label>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => editing && save(editing)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

/* -----------------------------  Testimonials  ----------------------------- */

type TRow = {
  id: string;
  position: number;
  name: string;
  role: string | null;
  text: string;
  rating: number;
  image_url: string | null;
  is_verified: boolean;
  is_active: boolean;
};

function TestimonialsEditor() {
  const [rows, setRows] = useState<TRow[]>([]);
  const [editing, setEditing] = useState<TRow | null>(null);
  const [open, setOpen] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("position", { ascending: true });
    setRows((data ?? []) as TRow[]);
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const save = async (r: TRow) => {
    const { id, ...rest } = r;
    const op = id
      ? supabase.from("testimonials").update(rest).eq("id", id)
      : supabase.from("testimonials").insert(rest);
    const { error } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };

  return (
    <Card className="mt-4 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Testimonials ({rows.length})</h2>
        <Button
          onClick={() => {
            setEditing({
              id: "",
              position: rows.length,
              name: "",
              role: "",
              text: "",
              rating: 5,
              image_url: "",
              is_verified: true,
              is_active: true,
            });
            setOpen(true);
          }}
        >
          <Plus className="mr-1 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.id} className="flex gap-3 rounded-lg border p-3">
            {r.image_url && (
              <img
                src={r.image_url}
                alt=""
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{r.name}</p>
              <p className="truncate text-xs text-muted-foreground">{r.role}</p>
              <p className="line-clamp-2 text-xs">{r.text}</p>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <span>★ {r.rating}</span>
                <span>· Pos {r.position}</span>
                <span>· {r.is_active ? "Active" : "Hidden"}</span>
              </div>
              <div className="mt-1 flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditing(r);
                    setOpen(true);
                  }}
                >
                  <Pencil className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => remove(r.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editing?.id ? "Edit Testimonial" : "Add Testimonial"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-3">
              <ImageField
                value={editing.image_url ?? ""}
                onChange={(v) => setEditing({ ...editing, image_url: v })}
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Name</Label>
                  <Input
                    value={editing.name}
                    onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Role / Location</Label>
                  <Input
                    value={editing.role ?? ""}
                    onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label>Testimonial text</Label>
                <Textarea
                  rows={4}
                  value={editing.text}
                  onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label>Rating (1-5)</Label>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    value={editing.rating}
                    onChange={(e) =>
                      setEditing({ ...editing, rating: Number(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <Label>Position</Label>
                  <Input
                    type="number"
                    value={editing.position}
                    onChange={(e) =>
                      setEditing({ ...editing, position: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 pt-5">
                  <label className="flex items-center gap-2 text-sm">
                    <Switch
                      checked={editing.is_verified}
                      onCheckedChange={(v) => setEditing({ ...editing, is_verified: v })}
                    />
                    Verified
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <Switch
                      checked={editing.is_active}
                      onCheckedChange={(v) => setEditing({ ...editing, is_active: v })}
                    />
                    Active
                  </label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => editing && save(editing)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

/* -----------------------------  Dashboard cards  ----------------------------- */

type DRow = {
  id: string;
  key: string;
  label: string;
  value_override: string | null;
  trend: string | null;
  icon: string | null;
  position: number;
  is_active: boolean;
};

function DashboardEditor() {
  const [rows, setRows] = useState<DRow[]>([]);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("dashboard_cards")
      .select("*")
      .order("position", { ascending: true });
    setRows((data ?? []) as DRow[]);
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const update = async (id: string, patch: Partial<DRow>) => {
    const { error } = await supabase.from("dashboard_cards").update(patch).eq("id", id);
    if (error) toast.error(error.message);
  };

  return (
    <Card className="mt-4 p-5">
      <h2 className="mb-4 text-lg font-semibold">CRM Dashboard Cards</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Edit the label or override the value shown on each dashboard tile.
        Leave value blank to use the live count from the database.
      </p>
      <div className="space-y-3">
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-1 items-center gap-3 rounded-lg border p-3 md:grid-cols-[120px_1fr_1fr_1fr_auto]"
          >
            <code className="text-xs text-muted-foreground">{r.key}</code>
            <Input
              defaultValue={r.label}
              onBlur={(e) => update(r.id, { label: e.target.value })}
              placeholder="Label"
            />
            <Input
              defaultValue={r.value_override ?? ""}
              onBlur={(e) =>
                update(r.id, { value_override: e.target.value || null })
              }
              placeholder="Value override (blank = live)"
            />
            <Input
              defaultValue={r.trend ?? ""}
              onBlur={(e) => update(r.id, { trend: e.target.value || null })}
              placeholder="Trend"
            />
            <label className="flex items-center gap-2 text-sm">
              <Switch
                defaultChecked={r.is_active}
                onCheckedChange={(v) => update(r.id, { is_active: v })}
              />
              Active
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
}
