import { Link } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, CheckCircle2, Globe, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "International Exposure",
    desc: "Support business operations connected to the UAE, Qatar, and the wider GCC region.",
  },
  {
    icon: Users,
    title: "Professional Work Culture",
    desc: "Be part of a collaborative workplace focused on accountability, learning, and growth.",
  },
  {
    icon: Shield,
    title: "Stability & Development",
    desc: "Build your future with an organization backed by long-standing industry presence.",
  },
];

const roles = [
  "Data Entry Operator",
  "HR Executive",
  "Accounts & Finance Assistant",
  "Business Process Associate",
  "Document Controller",
  "Operations Coordinator",
];

export default function Careers() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .page-root { font-family:'Inter',sans-serif; color:#0f172a; background:#fff; }
        .display-font { font-family:'Playfair Display',serif; }

        .hero {
          background:
            linear-gradient(rgba(15,23,42,.8), rgba(30,58,138,.72)),
            url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          padding: 110px 0 90px;
          text-align:center;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 10px;
        }

        .card, .role-pill {
          border-radius: 20px;
          background: #fff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 26px rgba(15,23,42,.05);
          transition: all .28s ease;
        }

        .card {
          padding: 30px 24px;
        }

        .card:hover, .role-pill:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(15,23,42,.08);
        }

        .role-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
        }

        .icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .icon-box svg { color: #2563eb; }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          border-radius: 999px;
          padding: 14px 28px;
          background: #f59e0b;
          color: #111827;
          font-size: 14px;
          font-weight: 700;
          transition: all .25s ease;
          box-shadow: 0 14px 30px rgba(245,158,11,.24);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }
      `}</style>

      <div className="page-root min-h-screen flex flex-col">
        <PublicHeader />

        <main className="flex-1">
          <section className="hero">
            <div className="container mx-auto px-4">
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Careers at SNAA
              </p>
              <h1
                className="display-font"
                style={{
                  fontSize: "clamp(2.5rem,5vw,4.2rem)",
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                Grow With a Professional Operations Team
              </h1>
              <p
                style={{
                  maxWidth: 760,
                  margin: "0 auto",
                  color: "rgba(255,255,255,.82)",
                  fontSize: 16,
                  lineHeight: 1.85,
                }}
              >
                Explore opportunities to build your career in a stable, process-driven,
                and globally aligned workplace.
              </p>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>Why Join Us</p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.7rem)",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                A Workplace Built for Growth
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: 15,
                  lineHeight: 1.85,
                  textAlign: "center",
                  maxWidth: 760,
                  margin: "0 auto 46px",
                }}
              >
                SNAA offers a work environment where professionalism, consistency, and
                continuous development are part of everyday operations.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                  gap: 24,
                  maxWidth: 1000,
                  margin: "0 auto",
                }}
              >
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="card">
                    <div className="icon-box">
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                    <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 860 }}>
              <p className="section-label" style={{ textAlign: "center" }}>Opportunities</p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.7rem)",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                Roles We Commonly Hire For
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: 15,
                  lineHeight: 1.85,
                  textAlign: "center",
                  maxWidth: 700,
                  margin: "0 auto 40px",
                }}
              >
                Explore the types of positions that are frequently available within our
                operations team in Mangalore.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  gap: 14,
                }}
              >
                {roles.map((role) => (
                  <div key={role} className="role-pill">
                    <CheckCircle2 size={18} style={{ color: "#2563eb", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "84px 0",
              background: "linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)",
              textAlign: "center",
            }}
          >
            <div className="container mx-auto px-4">
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                Ready to Explore Opportunities?
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.82)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  maxWidth: 620,
                  margin: "0 auto 34px",
                }}
              >
                Join a team that supports global business operations with reliability,
                structure, and professionalism.
              </p>

              <Link to="/support" className="primary-btn">
                Contact Support / HR <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  );
}