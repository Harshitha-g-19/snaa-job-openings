import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import {
  ArrowRight,
  Users,
  Globe,
  Shield,
  Building2,
  Factory,
  MapPin,
  TrendingUp,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-primary py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-3">
              Back Office Operations — GBMT Group, Dubai
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl lg:text-6xl leading-tight">
              SNAA Careers <br /> Job Openings for Freshers
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              SNAA Business Processing Centre is the India back office of GBMT Group, Dubai — a leading structural steel manufacturer in the GCC & MENA region. Join our growing team in Mangalore.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/careers">
                <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About SNAA */}
        <section className="bg-muted/40 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">About SNAA Business Processing Centre</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                SNAA Business Processing Centre Pvt. Ltd. is headquartered in Mangalore, Karnataka, and serves as the dedicated back-office operations arm of GBMT Group, Dubai. We handle data entry, HR operations, finance processing, and other critical business support functions that power GBMT's international operations across the UAE, Qatar, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* About GBMT */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Our Parent Company</p>
                <h2 className="font-heading text-3xl font-bold mb-4">GBMT Group, Dubai</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Established in 2000, GBMT Group has grown into one of the most recognized structural steel stockists and manufacturers in the GCC and MENA region. Headquartered in Dubai Investment Park, GBMT serves the construction, oil & gas, and energy sectors across the Middle East and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a manufacturing facility of 135,000 sq. ft. and a production capacity of 30,000 tons per year, GBMT is a trusted partner to major industries requiring high-quality structural steel solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Established", value: "2000", sub: "Dubai, UAE" },
                  { label: "Facility Area", value: "135,000", sub: "Sq. Ft." },
                  { label: "Production Capacity", value: "30,000+", sub: "Tons / Year" },
                  { label: "Regions Served", value: "GCC & MENA", sub: "& International" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="rounded-xl border bg-card p-5 text-center shadow-sm">
                    <p className="text-2xl font-extrabold text-primary">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                    <p className="text-sm font-medium mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GBMT Industries */}
        <section className="bg-muted/40 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-center mb-10">GBMT Group — Business Divisions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Factory,
                  title: "Structural Steel Manufacturing",
                  desc: "Threaded rods, U-bolts, anchor bolts, hex nuts, washers, and more — with 25,000 MT annual fastener production capacity.",
                },
                {
                  icon: Building2,
                  title: "Steel Stockist & Services",
                  desc: "One of the largest ISO-certified structural steel stockists in the GCC, supplying plates, beams, sections, angles, flat bars, and round bars.",
                },
                {
                  icon: TrendingUp,
                  title: "Deformed Steel Bars",
                  desc: "Flagship supply of deformed steel bars conforming to BS 4449 Grade B500B, with 45,000 MT annual cut-to-length capacity.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border bg-card p-6 shadow-sm space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">Industries We Serve</h2>
            <p className="text-muted-foreground mb-10">GBMT's products and services power some of the most demanding sectors globally.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Oil & Gas", "Construction", "Heavy Fabrication", "Light Steel Fabrication", "Engineering", "Shipbuilding", "Energy"].map((sector) => (
                <span key={sector} className="rounded-full border bg-card px-5 py-2 text-sm font-medium shadow-sm">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join SNAA */}
        <section className="bg-muted/40 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-center mb-10">Why Join SNAA?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Globe,
                  title: "International Exposure",
                  desc: "Work as part of a global team supporting GBMT's operations across the UAE, Qatar, and the broader GCC region.",
                },
                {
                  icon: Users,
                  title: "People First Culture",
                  desc: "We invest in our team's growth, offer mentorship, and maintain a supportive and inclusive workplace in Mangalore.",
                },
                {
                  icon: Shield,
                  title: "Stability & Growth",
                  desc: "Join a well-established organization backed by 25+ years of GBMT's success in the international steel industry.",
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
          </div>
        </section>

        {/* Roles we hire for */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-center mb-2">Roles We Hire For</h2>
              <p className="text-center text-muted-foreground mb-8">We're always looking for fresh talent in Mangalore to join our back-office team.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Data Entry Operator",
                  "HR Executive",
                  "Accounts & Finance Assistant",
                  "Business Process Associate",
                  "Document Controller",
                  "Operations Coordinator",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-muted/40 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">SNAA Business Processing Centre Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">No. C-03-02, Plama Center, 3rd Floor,<br />Bejai Kapikad Road, Mangalore – 575 004</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">GBMT Group (Parent Company)</p>
                  <p className="text-sm text-muted-foreground">Dubai Investment Park, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="mx-auto h-10 w-10 text-primary-foreground/70 mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-3">
              Ready to Start Your Career?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Explore open positions at SNAA and be part of a team that supports a global steel giant from the heart of Mangalore.
            </p>
            <Link to="/careers">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default Index;