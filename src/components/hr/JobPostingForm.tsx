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
import { Plus, Pencil, Loader2 } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location?: string;
  type: string;
  description: string;
  requirements?: string;
};

type Props = {
  job?: Job;
};

const parseRequirements = (raw?: string) => {
  if (!raw) return { workType: "On-site", requirements: "", contactDetails: "" };
  const lines = raw.split("\n");
  const workTypeLine = lines.find((l) => l.startsWith("Work Type:"));
  const contactLine = lines.find((l) => l.startsWith("Contact:"));
  const otherLine = lines.find((l) => l.startsWith("Other Details:"));
  return {
    workType: workTypeLine?.replace("Work Type:", "").trim() || "On-site",
    contactDetails: contactLine?.replace("Contact:", "").trim() || "",
    requirements: otherLine?.replace("Other Details:", "").trim() || "",
  };
};

const JobPostingForm = ({ job }: Props) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isEditing = !!job;

  const parsed = parseRequirements(job?.requirements);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: job?.title || "",
    department: job?.department || "",
    location: job?.location || "",
    type: job?.type || "Full-time",
    workType: parsed.workType,
    description: job?.description || "",
    requirements: parsed.requirements,
    contactDetails: parsed.contactDetails,
  });

  // Reset form when dialog opens (in case job prop changed)
  const handleOpenChange = (val: boolean) => {
    if (val && isEditing) {
      const p = parseRequirements(job.requirements);
      setForm({
        title: job.title,
        department: job.department,
        location: job.location || "",
        type: job.type,
        workType: p.workType,
        description: job.description,
        requirements: p.requirements,
        contactDetails: p.contactDetails,
      });
    }
    if (!val && !isEditing) {
      setForm({ title: "", department: "", location: "", type: "Full-time", workType: "On-site", description: "", requirements: "", contactDetails: "" });
    }
    setOpen(val);
  };

  const buildRequirements = () =>
    [
      form.workType ? `Work Type: ${form.workType}` : "",
      form.requirements ? `Other Details: ${form.requirements}` : "",
      form.contactDetails ? `Contact: ${form.contactDetails}` : "",
    ]
      .filter(Boolean)
      .join("\n") || null;

  const createJob = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("job_openings").insert({
        title: form.title,
        department: form.department,
        location: form.location,
        type: form.type,
        description: form.description,
        requirements: buildRequirements(),
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr-jobs"] });
      toast({ title: "Job posted successfully" });
      setOpen(false);
      setForm({ title: "", department: "", location: "", type: "Full-time", workType: "On-site", description: "", requirements: "", contactDetails: "" });
    },
    onError: (err: any) => toast({ title: "Error", description: err.message, variant: "destructive" }),
  });

  const updateJob = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("job_openings")
        .update({
          title: form.title,
          department: form.department,
          location: form.location,
          type: form.type,
          description: form.description,
          requirements: buildRequirements(),
        })
        .eq("id", job!.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr-jobs"] });
      toast({ title: "Job updated successfully" });
      setOpen(false);
    },
    onError: (err: any) => toast({ title: "Error", description: err.message, variant: "destructive" }),
  });

  const isPending = createJob.isPending || updateJob.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.department || !form.description) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    isEditing ? updateJob.mutate() : createJob.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {isEditing ? (
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Post New Job
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading">
            {isEditing ? "Edit Job Opening" : "Post a New Job Opening"}
          </DialogTitle>
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
              <Label>Work Type</Label>
              <Select value={form.workType} onValueChange={(val) => setForm({ ...form, workType: val })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="On-site">On-site</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Employment Type</Label>
              <Select value={form.type} onValueChange={(val) => setForm({ ...form, type: val })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Mumbai, India" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description *</Label>
            <Textarea id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe the role and responsibilities..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Other Details</Label>
            <Textarea id="requirements" value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} placeholder="Any additional information, benefits, salary range, etc..." rows={2} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactDetails">Contact Details</Label>
            <Input id="contactDetails" value={form.contactDetails} onChange={(e) => setForm({ ...form, contactDetails: e.target.value })} placeholder="e.g. hr@snaa.com or +91 9876543210" />
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {isEditing ? "Saving..." : "Posting..."}</>
            ) : (
              isEditing ? "Save Changes" : "Post Job Opening"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobPostingForm;