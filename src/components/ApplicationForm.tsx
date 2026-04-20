import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Loader2, CheckCircle2 } from "lucide-react";

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  cover_letter: string;
}

const ApplicationForm = ({ jobId, jobTitle }: ApplicationFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      let resumeUrl: string | null = null;

      if (file) {
        const fileExt = file.name.split('.').pop();
        const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('resumes').upload(filePath, file);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(filePath);
        resumeUrl = urlData.publicUrl;
      }

      const { error } = await supabase.from('job_applications').insert({
        job_opening_id: jobId,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null,
        cover_letter: data.cover_letter || null,
        resume_url: resumeUrl,
      });

      if (error) throw error;

      setSubmitted(true);
      reset();
      setFile(null);
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to submit application", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="border-success/30 bg-success/5">
        <CardContent className="flex flex-col items-center gap-4 py-12">
          <CheckCircle2 className="h-16 w-16 text-success" />
          <h3 className="font-heading text-xl font-semibold">Application Submitted!</h3>
          <p className="text-muted-foreground text-center max-w-md">
            Thank you for applying to <strong>{jobTitle}</strong>. Our HR team will review your application and get back to you.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Application</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Apply for {jobTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name *</Label>
              <Input id="full_name" {...register("full_name", { required: "Name is required" })} placeholder="John Doe" />
              {errors.full_name && <p className="text-xs text-destructive">{errors.full_name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email", { required: "Email is required" })} placeholder="john@example.com" />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" {...register("phone")} placeholder="+91 98765 43210" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_letter">Cover Letter</Label>
            <Textarea id="cover_letter" {...register("cover_letter")} placeholder="Tell us why you're a great fit..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label>Resume / CV</Label>
            <div className="flex items-center gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted-foreground hover:border-primary hover:text-foreground transition-colors flex-1">
                <Upload className="h-4 w-4" />
                {file ? file.name : "Click to upload (PDF, DOC, DOCX)"}
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              </label>
              {file && <Button type="button" variant="ghost" size="sm" onClick={() => setFile(null)}>Remove</Button>}
            </div>
          </div>

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
