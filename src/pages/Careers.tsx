import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import JobCard from "@/components/JobCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";

const Careers = () => {
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["job-openings"],
    queryFn: async () => {
      const { data, error } = await supabase.from("job_openings").select("*").eq("is_active", true).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Join Our Team
            </h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
              Explore exciting career opportunities at SNAA Business Processing Center
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-52 rounded-xl" />
              ))}
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
              <Briefcase className="h-16 w-16 opacity-30" />
              <h2 className="font-heading text-xl font-semibold">No openings right now</h2>
              <p className="text-sm">Check back soon for new opportunities.</p>
            </div>
          )}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
};

export default Careers;
