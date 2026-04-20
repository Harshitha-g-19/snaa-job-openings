import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, Users, Globe, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl lg:text-6xl leading-tight">
              SNAA Careers <br /> Job Openings for Freshers
            </h1>

            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Looking for job openings for freshers in Mangalore? SNAA Business
              Processing Center offers careers in data entry, HR, and business
              process roles. Apply now and start your career with SNAA.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/careers">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 font-semibold"
                >
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Job Openings for Freshers in Mangalore
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            SNAA provides job opportunities for freshers looking to start their
            careers in data entry, HR, and business processing roles. Explore
            the latest job openings and apply today to grow with SNAA.
          </p>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="font-heading text-2xl font-bold text-center mb-12">
            Why Work With Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "People First",
                desc: "We invest in our team's growth and well-being, fostering a supportive environment.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                desc: "Work on projects that serve clients across industries and geographies.",
              },
              {
                icon: Shield,
                title: "Stability & Growth",
                desc: "Join a trusted organization with a track record of consistent growth.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center space-y-3 p-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-heading text-lg font-semibold">{title}</h3>

                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Index;