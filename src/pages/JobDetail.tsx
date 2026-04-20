import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import ApplicationForm from "@/components/ApplicationForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Building2, Clock } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: job, isLoading } = useQuery({
    queryKey: ["job-opening", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("job_openings").select("*").eq("id", id!).single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/careers" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Careers
        </Link>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : job ? (
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="font-heading text-2xl font-bold md:text-3xl">{job.title}</h1>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Building2 className="h-4 w-4" />{job.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <h3 className="font-heading text-base font-semibold">Description</h3>
                <p className="text-muted-foreground whitespace-pre-line">{job.description}</p>

                {job.requirements && (
                  <>
                    <h3 className="font-heading text-base font-semibold mt-6">Requirements</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{job.requirements}</p>
                  </>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <ApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">Job not found.</p>
        )}
      </main>
      <PublicFooter />
    </div>
  );
};

export default JobDetail;
