import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Search, Download, Eye, Users, Briefcase, FileText, Clock } from "lucide-react";
import JobsList from "@/components/hr/JobsList";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  reviewing: "bg-yellow-100 text-yellow-800",
  shortlisted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-emerald-100 text-emerald-800",
};

const HRDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/admin-staff");
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) navigate("/admin-staff");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: applications, isLoading } = useQuery({
    queryKey: ["hr-applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("job_applications")
        .select("*, job_openings(title, department)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: jobs } = useQuery({
    queryKey: ["hr-jobs"],
    queryFn: async () => {
      const { data, error } = await supabase.from("job_openings").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from("job_applications").update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr-applications"] });
      toast({ title: "Status updated" });
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-staff");
  };

  const handleResumeView = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResumeDownload = async (url: string, applicantName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const ext = url.split('.').pop()?.split('?')[0] || 'pdf';
      const filename = `${applicantName.replace(/\s+/g, '_')}_resume.${ext}`;
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      toast({ title: "Download failed", description: "Could not download the resume.", variant: "destructive" });
    }
  };

  const filtered = applications?.filter((app) => {
    const matchesSearch = !search || app.full_name.toLowerCase().includes(search.toLowerCase()) || app.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: applications?.length || 0,
    new: applications?.filter((a) => a.status === "new").length || 0,
    shortlisted: applications?.filter((a) => a.status === "shortlisted").length || 0,
    openJobs: jobs?.filter((j) => j.is_active).length || 0,
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div>
            <h1 className="font-heading text-lg font-bold">HR Admin Panel</h1>
            <p className="text-xs text-muted-foreground">SNAA Business Processing Center</p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Applications", value: stats.total, icon: FileText, color: "text-blue-600" },
            { label: "New Applications", value: stats.new, icon: Clock, color: "text-amber-600" },
            { label: "Shortlisted", value: stats.shortlisted, icon: Users, color: "text-green-600" },
            { label: "Open Positions", value: stats.openJobs, icon: Briefcase, color: "text-primary" },
          ].map(({ label, value, icon: Icon, color }) => (
            <Card key={label}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="applications">
          <TabsList>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="jobs">Job Openings</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-base">Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-44">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="reviewing">Reviewing</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="hired">Hired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading ? (
                        <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
                      ) : filtered && filtered.length > 0 ? (
                        filtered.map((app: any) => (
                          <TableRow key={app.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{app.full_name}</p>
                                <p className="text-xs text-muted-foreground">{app.email}</p>
                                {app.phone && <p className="text-xs text-muted-foreground">{app.phone}</p>}
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">
                              {app.job_openings?.title || "—"}
                              {app.job_openings?.department && (
                                <p className="text-xs text-muted-foreground">{app.job_openings.department}</p>
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${statusColors[app.status] || ""} border-0 text-xs capitalize`}>
                                {app.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(app.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              {app.resume_url ? (
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="gap-1 text-xs" onClick={() => handleResumeView(app.resume_url)}>
                                    <Eye className="h-3.5 w-3.5" /> View
                                  </Button>
                                  <Button variant="ghost" size="sm" className="gap-1 text-xs" onClick={() => handleResumeDownload(app.resume_url, app.full_name)}>
                                    <Download className="h-3.5 w-3.5" /> Download
                                  </Button>
                                </div>
                              ) : (
                                <span className="text-xs text-muted-foreground">None</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <Select value={app.status} onValueChange={(val) => updateStatus.mutate({ id: app.id, status: val })}>
                                <SelectTrigger className="h-8 w-32 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New</SelectItem>
                                  <SelectItem value="reviewing">Reviewing</SelectItem>
                                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                                  <SelectItem value="rejected">Rejected</SelectItem>
                                  <SelectItem value="hired">Hired</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No applications found</TableCell></TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs">
            <JobsList jobs={jobs} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRDashboard;
