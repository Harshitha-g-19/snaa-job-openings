import { MapPin, Clock, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Tables } from "@/integrations/supabase/types";

interface JobCardProps {
  job: Tables<"job_openings">;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="font-heading text-lg">{job.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">{job.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" />{job.department}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{new Date(job.created_at).toLocaleDateString()}</span>
        </div>
        <Link to={`/careers/${job.id}`}>
          <Button size="sm" className="w-full mt-2">View & Apply</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default JobCard;
