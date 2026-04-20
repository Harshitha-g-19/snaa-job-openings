
-- Create job_openings table
CREATE TABLE public.job_openings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT 'Remote',
  type TEXT NOT NULL DEFAULT 'Full-time',
  description TEXT NOT NULL,
  requirements TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active job openings"
  ON public.job_openings FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage job openings"
  ON public.job_openings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_opening_id UUID REFERENCES public.job_openings(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  cover_letter TEXT,
  resume_url TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON public.job_applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all applications"
  ON public.job_applications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applications"
  ON public.job_applications FOR UPDATE
  TO authenticated
  USING (true);

-- Timestamp triggers
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_job_openings_updated_at
  BEFORE UPDATE ON public.job_openings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON public.job_applications
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true);

CREATE POLICY "Anyone can upload resumes"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Anyone can view resumes"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resumes');
