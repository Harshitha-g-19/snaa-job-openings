import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2 } from "lucide-react";

const JobPostingForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "Remote",
    type: "Full-time",
    description: "",
    requirements: "",
  });

  const createJob = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("job_openings").insert({
        title: form.title,
        department: form.department,
        location: form.location,
        type: form.type,
        description: form.description,
        requirements: form.requirements || null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr-jobs"] });
      toast({ title: "Job posted successfully" });
      setOpen(false);
      setForm({ title: "", department: "", location: "Remote", type: "Full-time", description: "", requirements: "" });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.department || !form.description) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    createJob.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Post New Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading">Post a New Job Opening</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title *</Label>
            <Input id="job-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Senior Accountant" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="department">Department *</Label>
              <Input id="department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="e.g. Finance" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Mumbai, India" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Employment Type</Label>
            <Select value={form.type} onValueChange={(val) => setForm({ ...form, type: val })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description *</Label>
            <Textarea id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe the role and responsibilities..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea id="requirements" value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} placeholder="List qualifications and skills..." rows={3} />
          </div>

          <Button type="submit" disabled={createJob.isPending} className="w-full">
            {createJob.isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...</> : "Post Job Opening"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobPostingForm;
