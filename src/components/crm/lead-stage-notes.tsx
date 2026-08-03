import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, MessageSquarePlus } from "lucide-react";

type LeadStageProps = {
  leadId: string;
  currentStage: string;
  existingNotes?: { text: string; date: string; by: string }[];
  onUpdate?: () => void;
};

const STAGES = ["New", "Contacted", "In Progress", "Documentation", "Closed Won", "Closed Lost"];

export function LeadStageAndNotes({ leadId, currentStage, existingNotes = [], onUpdate }: LeadStageProps) {
  const [stage, setStage] = useState(currentStage);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  // Update Lead Stage
  const handleStageChange = async (newStage: string) => {
    setStage(newStage);
    const { error } = await supabase
      .from("leads")
      .update({ stage: newStage })
      .eq("id", leadId);

    if (error) {
      toast.error("Failed to update stage: " + error.message);
    } else {
      toast.success("Lead stage updated to " + newStage);
      onUpdate?.();
    }
  };

  // Add Note to Lead
  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    setLoading(true);

    const updatedNotes = [
      ...existingNotes,
      {
        text: newNote,
        date: new Date().toISOString(),
        by: "Co-ordinator",
      },
    ];

    const { error } = await supabase
      .from("leads")
      .update({ notes: updatedNotes })
      .eq("id", leadId);

    setLoading(false);

    if (error) {
      toast.error("Failed to add note: " + error.message);
    } else {
      toast.success("Note added successfully!");
      setNewNote("");
      onUpdate?.();
    }
  };

  return (
    <Card className="w-full space-y-4 p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-semibold">Lead Progress & Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-0">
        {/* Stage Selector */}
        <div>
          <label className="text-xs font-medium text-slate-600">Change Stage</label>
          <Select value={stage} onValueChange={handleStageChange}>
            <SelectTrigger className="mt-1 h-9 bg-white">
              <SelectValue placeholder="Select Stage" />
            </SelectTrigger>
            <SelectContent>
              {STAGES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Notes List */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-600">Notes / Comments</label>
          <div className="max-h-36 overflow-y-auto rounded-md border bg-slate-50 p-2 space-y-2 text-xs">
            {existingNotes.length === 0 ? (
              <p className="text-slate-400 italic">No notes added yet.</p>
            ) : (
              existingNotes.map((n, i) => (
                <div key={i} className="rounded border bg-white p-2 shadow-sm">
                  <p className="text-slate-800">{n.text}</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    {new Date(n.date).toLocaleString()} • {n.by}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Note Input */}
        <div className="space-y-2">
          <Textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type a note or comment..."
            className="text-xs min-h-[60px]"
          />
          <Button
            size="sm"
            onClick={handleAddNote}
            disabled={loading || !newNote.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-1"
          >
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <MessageSquarePlus className="h-3.5 w-3.5" />}
            Add Note
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}