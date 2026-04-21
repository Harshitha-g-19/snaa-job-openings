import { Link } from "react-router-dom";
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

const stats = [
  { label: "Established", value: "2000", sub: "Dubai, UAE" },
  { label: "Facility Area", value: "135K", sub: "Sq. Ft." },
  { label: "Production Capacity", value: "30K+", sub: "Tons / Year" },
  { label: "Annual Fastener Output", value: "25K", sub: "Metric Tons" },
];

const divisions = [
  {
    icon: Factory,
    title: "Structural Steel Manufacturing",
    desc: "Production of threaded rods, U-bolts, anchor bolts, hex nuts, washers, and industrial fasteners with consistent quality standards.",
  },
  {
    icon: Building2,
    title: "Steel Stockist & Services",
    desc: "A trusted ISO-certified structural steel stockist in the GCC, supplying plates, beams, sections, angles, flat bars, and round bars.",
  },
  {
    icon: TrendingUp,
    title: "Deformed Steel Bars",
    desc: "Reliable supply of deformed steel bars conforming to BS 4449 Grade B500B, supported by large-scale cut-to-length capacity.",
  },
];

const whyJoin = [
  {
    icon: Globe,
    title: "International Exposure",
    desc: "Be part of a team supporting business operations across the UAE, Qatar, and the wider GCC region.",
  },
  {
    icon: Users,
    title: "People-Centered Culture",
    desc: "Grow in a collaborative work environment that values mentorship, inclusion, and continuous learning.",
  },
  {
    icon: Shield,
    title: "Stability & Career Growth",
    desc: "Build your future with a well-established organization backed by over two decades of industry success.",
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

const sectors = [
  "Oil & Gas",
  "Construction",
  "Heavy Fabrication",
  "Light Steel Fabrication",
  "Engineering",
  "Shipbuilding",
  "Energy",
];

export default function Index() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .snaa-root {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          color: #0f172a;
        }

        .snaa-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
        }

        .gold-bar {
          width: 64px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #f59e0b, #fde68a);
          margin: 0 auto 20px;
        }

        .sec-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1d4ed8;
          margin-bottom: 10px;
        }

        .section-heading {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          margin-bottom: 14px;
        }

        .section-sub {
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
          text-align: center;
          max-width: 720px;
          margin: 0 auto 46px;
        }

        .stat-card,
        .div-card,
        .why-card,
        .role-pill,
        .loc-card {
          transition: all 0.25s ease;
        }

        .stat-card {
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
        }

        .div-card {
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 30px 26px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .div-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.08);
        }

        .div-icon,
        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .div-icon svg,
        .why-icon svg {
          color: #1d4ed8;
        }

        .sector-tag {
          border-radius: 999px;
          padding: 9px 18px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.18);
          color: #dbeafe;
          background: rgba(255,255,255,0.04);
        }

        .why-card {
          border-radius: 18px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 30px 24px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.08);
        }

        .why-icon {
          margin: 0 auto 18px;
        }

        .role-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 16px 18px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .role-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
        }

        .loc-card {
          flex: 1;
          min-width: 280px;
          border-radius: 18px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 24px 20px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .loc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          background: #f59e0b;
          color: #0f172a;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 12px 28px rgba(245, 158, 11, 0.22);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }

        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 13px 24px;
          font-size: 14px;
          font-weight: 600;
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.22);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.16);
          transform: translateY(-2px);
        }

        .grad-div {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.18), transparent);
          margin: 0 auto;
          max-width: 960px;
        }
      `}</style>

      <div className="snaa-root flex min-h-screen flex-col">
        <PublicHeader />

        <main className="flex-1">
          <section
            style={{
              background: "linear-gradient(135deg,#0f172a 0%,#1e3a8a 58%,#2563eb 100%)",
              position: "relative",
              overflow: "hidden",
              paddingTop: "112px",
              paddingBottom: "120px",
            }}
          >
            <div
              className="hero-orb"
              style={{
                width: 520,
                height: 520,
                border: "1px solid rgba(255,255,255,0.05)",
                top: -180,
                right: -120,
              }}
            />
            <div
              className="hero-orb"
              style={{
                width: 260,
                height: 260,
                background: "rgba(245,158,11,0.08)",
                bottom: -60,
                left: -40,
              }}
            />

            <div className="container mx-auto px-4 text-center" style={{ position: "relative" }}>
              <p
                className="reveal delay-1"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#f59e0b",
                  marginBottom: 16,
                }}
              >
                Back Office Operations · GBMT Group, Dubai
              </p>

              <div className="gold-bar reveal delay-2" />

              <h1
                className="snaa-display reveal delay-2"
                style={{
                  fontSize: "clamp(2.8rem,6vw,4.7rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: 14,
                }}
              >
                Build Your Career with SNAA
              </h1>

              <p
                className="reveal delay-3"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 700,
                  margin: "0 auto 36px",
                }}
              >
                SNAA Business Processing Centre is the India back-office operations hub of GBMT Group, Dubai — supporting international business functions with reliability, precision, and professionalism.
              </p>

              <Link to="/careers">
                <button className="primary-btn reveal delay-4">
                  View Open Positions <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </section>

          <section style={{ padding: "80px 0", background: "#ffffff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 820, textAlign: "center" }}>
              <p className="sec-label">Who We Are</p>
              <h2 className="snaa-display section-heading">
                About SNAA Business Processing Centre
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.85, fontSize: 15 }}>
                SNAA Business Processing Centre Pvt. Ltd., headquartered in Mangalore, Karnataka, is the dedicated business support arm of GBMT Group, Dubai. We manage critical back-office functions including data operations, HR support, finance processing, and administrative workflows that strengthen GBMT’s international presence across the UAE, Qatar, and the wider region.
              </p>
            </div>
          </section>

          <div className="grad-div" />

          <section style={{ padding: "80px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Our Parent Company</p>
              <h2 className="snaa-display section-heading">GBMT Group, Dubai</h2>
              <p className="section-sub">
                Established in 2000, GBMT Group has grown into a recognized structural steel stockist and manufacturer serving construction, oil & gas, and industrial sectors across the GCC and MENA region.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                  gap: 20,
                  maxWidth: 960,
                  margin: "0 auto",
                }}
              >
                {stats.map(({ label, value, sub }) => (
                  <div key={label} className="stat-card">
                    <p
                      className="snaa-display"
                      style={{ fontSize: 34, fontWeight: 800, color: "#1d4ed8" }}
                    >
                      {value}
                    </p>
                    <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{sub}</p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0f172a",
                        marginTop: 8,
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "80px 0", background: "#ffffff" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Business Divisions</p>
              <h2 className="snaa-display section-heading">GBMT Group — Core Operations</h2>

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
                  <div key={title} className="div-card">
                    <div className="div-icon">
                      <Icon size={24} />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#0f172a",
                        marginBottom: 10,
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "76px 0",
              background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
            }}
          >
            <div className="container mx-auto px-4 text-center">
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#f59e0b",
                  marginBottom: 8,
                }}
              >
                Industries
              </p>
              <h2
                className="snaa-display"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.4rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                Industries We Serve
              </h2>
              <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 36 }}>
                Our products support demanding industrial and infrastructure sectors across multiple regions.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "center",
                  maxWidth: 860,
                  margin: "0 auto",
                }}
              >
                {sectors.map((sector) => (
                  <span key={sector} className="sector-tag">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "80px 0", background: "#ffffff" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Career Benefits</p>
              <h2 className="snaa-display section-heading">Why Join SNAA?</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 24,
                  maxWidth: 980,
                  margin: "0 auto",
                }}
              >
                {whyJoin.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="why-card">
                    <div className="why-icon">
                      <Icon size={24} />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#0f172a",
                        marginBottom: 10,
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "80px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 760 }}>
              <p className="sec-label" style={{ textAlign: "center" }}>Opportunities</p>
              <h2 className="snaa-display section-heading">Roles We Commonly Hire For</h2>
              <p className="section-sub" style={{ marginBottom: 34 }}>
                Explore the types of roles frequently available at our Mangalore operations centre.
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
                    <CheckCircle2
                      size={18}
                      style={{ color: "#1d4ed8", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#0f172a",
                        flex: 1,
                      }}
                    >
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "70px 0", background: "#ffffff" }}>
            <div className="container mx-auto px-4">
              <h2
                className="snaa-display"
                style={{
                  fontSize: "clamp(1.6rem,2.5vw,2rem)",
                  fontWeight: 700,
                  color: "#0f172a",
                  textAlign: "center",
                  marginBottom: 36,
                }}
              >
                Our Locations
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 20,
                  justifyContent: "center",
                  maxWidth: 860,
                  margin: "0 auto",
                }}
              >
                <div className="loc-card">
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} style={{ color: "#1d4ed8" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: 6,
                        }}
                      >
                        SNAA Business Processing Centre Pvt. Ltd.
                      </p>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>
                        No. C-03-02, Plama Center, 3rd Floor
                        <br />
                        Bejai Kapikad Road, Mangalore – 575004
                        <br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="loc-card">
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Building2 size={18} style={{ color: "#1d4ed8" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: 6,
                        }}
                      >
                        GBMT Group
                      </p>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>
                        Dubai Investment Park
                        <br />
                        Dubai, United Arab Emirates
                        <br />
                        Established in 2000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "82px 0",
              background: "linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)",
            }}
          >
            <div className="container mx-auto px-4 text-center">
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Briefcase size={24} style={{ color: "#ffffff" }} />
              </div>

              <h2
                className="snaa-display"
                style={{
                  fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                Join a Team That Supports Global Operations
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.76)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  maxWidth: 560,
                  margin: "0 auto 34px",
                }}
              >
                Discover career opportunities with SNAA and contribute to a business that supports international excellence from Mangalore.
              </p>

              <Link to="/careers">
                <button className="secondary-btn">
                  Explore Careers <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  );
}