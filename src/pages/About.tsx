import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import { Building2, Factory, Globe, MapPin, TrendingUp } from "lucide-react";

const divisions = [
  {
    icon: Factory,
    title: "Structural Steel Manufacturing",
    desc: "Industrial fasteners and steel-related products manufactured with consistency and scale.",
  },
  {
    icon: Building2,
    title: "Steel Stockist & Services",
    desc: "Large-scale stockholding and distribution capability supporting project and industrial requirements.",
  },
  {
    icon: TrendingUp,
    title: "Deformed Steel Bars",
    desc: "Strong production and supply capability aligned with recognized quality standards.",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .page-root { font-family:'Inter',sans-serif; color:#0f172a; background:#fff; }
        .display-font { font-family:'Playfair Display',serif; }

        .hero {
          background:
            linear-gradient(rgba(15,23,42,.78), rgba(15,23,42,.68)),
            url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
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

        .card {
          border-radius: 20px;
          background: #fff;
          border: 1px solid #e2e8f0;
          padding: 30px 24px;
          box-shadow: 0 10px 26px rgba(15,23,42,.05);
          transition: all .28s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(15,23,42,.08);
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
                About SNAA
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
                Company Overview
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
                Learn more about SNAA Business Processing Centre, our role in supporting
                GBMT Group, and the operational foundation we provide from Mangalore.
              </p>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 860, textAlign: "center" }}>
              <p className="section-label">Who We Are</p>
              <h2 className="display-font" style={{ fontSize: "clamp(2rem,3vw,2.7rem)", fontWeight: 700, marginBottom: 18 }}>
                About SNAA Business Processing Centre
              </h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.9 }}>
                SNAA Business Processing Centre Pvt. Ltd., headquartered in Mangalore,
                Karnataka, is the dedicated back-office support organization serving GBMT
                Group, Dubai. We contribute to organizational effectiveness through
                business support functions including data processing, HR support, finance
                operations, coordination, and documentation management.
              </p>
            </div>
          </section>

          <section style={{ padding: "0 0 84px", background: "#fff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 980 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  gap: 24,
                }}
              >
                <div className="card">
                  <div className="icon-box">
                    <Globe size={24} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Our Role</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    To strengthen GBMT Group’s internal operations through dependable
                    business support delivered with precision and professionalism.
                  </p>
                </div>

                <div className="card">
                  <div className="icon-box">
                    <Building2 size={24} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Our Focus</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    Finance support, HR operations, administrative coordination, data handling,
                    and process-driven documentation workflows.
                  </p>
                </div>

                <div className="card">
                  <div className="icon-box">
                    <MapPin size={24} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Our Presence</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    Based in Mangalore, India, and aligned with the international operations
                    of GBMT Group headquartered in Dubai, UAE.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>Business Scope</p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.7rem)",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                GBMT Group — Core Operations
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
                GBMT Group operates across multiple steel-related business areas with strong
                industrial and regional relevance.
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
                {divisions.map(({ icon: Icon, title, desc }) => (
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

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 860, textAlign: "center" }}>
              <p className="section-label">Locations</p>
              <h2 className="display-font" style={{ fontSize: "clamp(2rem,3vw,2.7rem)", fontWeight: 700, marginBottom: 18 }}>
                Our Offices
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  gap: 24,
                  textAlign: "left",
                }}
              >
                <div className="card">
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                    SNAA Business Processing Centre Pvt. Ltd.
                  </h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    No. C-03-02, Plama Center, 3rd Floor<br />
                    Bejai Kapikad Road, Mangalore – 575004<br />
                    Karnataka, India
                  </p>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                    GBMT Group
                  </h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    Dubai Investment Park<br />
                    Dubai, United Arab Emirates<br />
                    Established in 2000
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  );
}