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
  Award,
  Layers3,
} from "lucide-react";

const stats = [
  { label: "Established", value: "2000", sub: "Dubai, UAE" },
  { label: "Facility Area", value: "135K", sub: "Sq. Ft." },
  { label: "Production Capacity", value: "30K+", sub: "Tons / Year" },
  { label: "Fastener Output", value: "25K", sub: "Metric Tons" },
];

const divisions = [
  {
    icon: Factory,
    title: "Structural Steel Manufacturing",
    desc: "Manufacturing threaded rods, U-bolts, anchor bolts, hex nuts, washers, and industrial fastening products with dependable quality and scale.",
  },
  {
    icon: Building2,
    title: "Steel Stockist & Services",
    desc: "A recognized ISO-certified structural steel stockist in the GCC, supplying plates, beams, sections, angles, flat bars, and round bars.",
  },
  {
    icon: TrendingUp,
    title: "Deformed Steel Bars",
    desc: "Supplying deformed steel bars conforming to BS 4449 Grade B500B with strong annual cut-to-length production capability.",
  },
];

const whyJoin = [
  {
    icon: Globe,
    title: "International Exposure",
    desc: "Work in an environment that supports operations across the UAE, Qatar, and the broader GCC region.",
  },
  {
    icon: Users,
    title: "Professional Culture",
    desc: "Grow within a collaborative workplace that values accountability, support, and continuous learning.",
  },
  {
    icon: Shield,
    title: "Stability & Growth",
    desc: "Build your future with a well-established organization backed by decades of industry presence.",
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

        :root{
          --navy:#0f172a;
          --blue:#1d4ed8;
          --blueDark:#1e3a8a;
          --light:#f8fafc;
          --muted:#64748b;
          --gold:#f59e0b;
          --border:#e2e8f0;
          --white:#ffffff;
        }

        .snaa-root{
          font-family:'Inter',sans-serif;
          background:var(--white);
          color:var(--navy);
        }

        .snaa-display{
          font-family:'Playfair Display',serif;
        }

        @keyframes fadeUp {
          from {
            opacity:0;
            transform:translateY(30px);
          }
          to {
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes zoomSoft {
          from {
            opacity:0;
            transform:scale(1.04);
          }
          to {
            opacity:1;
            transform:scale(1);
          }
        }

        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .reveal {
          opacity: 0;
          animation: fadeUp .9s ease forwards;
        }

        .reveal-1 { animation-delay: .08s; }
        .reveal-2 { animation-delay: .18s; }
        .reveal-3 { animation-delay: .28s; }
        .reveal-4 { animation-delay: .38s; }

        .zoom-soft {
          animation: zoomSoft 1.1s ease forwards;
        }

        .float-soft {
          animation: floatY 6s ease-in-out infinite;
        }

        .section-label{
          font-size:11px;
          font-weight:700;
          letter-spacing:.18em;
          text-transform:uppercase;
          color:var(--blue);
          margin-bottom:10px;
        }

        .section-title{
          font-size:clamp(1.8rem,3vw,2.7rem);
          font-weight:700;
          color:var(--navy);
          text-align:center;
          margin-bottom:14px;
        }

        .section-sub{
          color:var(--muted);
          font-size:15px;
          line-height:1.85;
          text-align:center;
          max-width:740px;
          margin:0 auto 48px;
        }

        .grad-line{
          height:1px;
          max-width:960px;
          margin:0 auto;
          background:linear-gradient(90deg,transparent,rgba(29,78,216,.18),transparent);
        }

        .primary-btn{
          display:inline-flex;
          align-items:center;
          gap:8px;
          border:none;
          border-radius:999px;
          padding:14px 28px;
          font-size:14px;
          font-weight:600;
          background:var(--gold);
          color:#111827;
          cursor:pointer;
          transition:all .25s ease;
          box-shadow:0 14px 30px rgba(245,158,11,.24);
        }

        .primary-btn:hover{
          transform:translateY(-3px);
          background:#fbbf24;
        }

        .secondary-btn{
          display:inline-flex;
          align-items:center;
          gap:8px;
          border:1px solid rgba(255,255,255,.2);
          border-radius:999px;
          padding:13px 24px;
          font-size:14px;
          font-weight:600;
          background:rgba(255,255,255,.08);
          color:#fff;
          cursor:pointer;
          transition:all .25s ease;
          backdrop-filter:blur(10px);
        }

        .secondary-btn:hover{
          transform:translateY(-2px);
          background:rgba(255,255,255,.14);
        }

        .hero-section{
          position:relative;
          overflow:hidden;
          padding:110px 0 120px;
          background:
            linear-gradient(rgba(15,23,42,.78), rgba(15,23,42,.62)),
            url('https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
        }

        .hero-orb{
          position:absolute;
          border-radius:50%;
          pointer-events:none;
          filter:blur(2px);
        }

        .hero-badge{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 14px;
          border-radius:999px;
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.14);
          color:#dbeafe;
          font-size:12px;
          font-weight:600;
          margin-bottom:18px;
          backdrop-filter:blur(12px);
        }

        .gold-bar{
          width:68px;
          height:3px;
          border-radius:999px;
          background:linear-gradient(90deg,#f59e0b,#fde68a);
          margin:0 auto 22px;
        }

        .glass-panel{
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.12);
          box-shadow:0 20px 50px rgba(0,0,0,.18);
          backdrop-filter:blur(14px);
          border-radius:24px;
          padding:28px 24px;
        }

        .stat-card,
        .div-card,
        .why-card,
        .role-pill,
        .loc-card,
        .feature-mini{
          transition:all .28s ease;
        }

        .stat-card{
          border-radius:18px;
          background:#fff;
          border:1px solid var(--border);
          padding:30px 20px;
          text-align:center;
          box-shadow:0 8px 24px rgba(15,23,42,.05);
        }

        .stat-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 34px rgba(15,23,42,.09);
        }

        .div-card{
          border-radius:20px;
          background:#fff;
          border:1px solid var(--border);
          padding:30px 26px;
          box-shadow:0 8px 24px rgba(15,23,42,.05);
        }

        .div-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 34px rgba(15,23,42,.09);
        }

        .div-icon,
        .why-icon,
        .mini-icon{
          width:54px;
          height:54px;
          border-radius:16px;
          background:#eff6ff;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:18px;
        }

        .div-icon svg,
        .why-icon svg,
        .mini-icon svg{
          color:var(--blue);
        }

        .parallax-band{
          position:relative;
          overflow:hidden;
          background:
            linear-gradient(rgba(15,23,42,.82), rgba(30,58,138,.85)),
            url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          padding:78px 0;
        }

        .sector-tag{
          border-radius:999px;
          padding:9px 18px;
          font-size:13px;
          font-weight:500;
          color:#dbeafe;
          border:1px solid rgba(255,255,255,.18);
          background:rgba(255,255,255,.05);
          transition:all .25s ease;
        }

        .sector-tag:hover{
          transform:translateY(-2px);
          background:rgba(255,255,255,.1);
        }

        .why-card{
          border-radius:20px;
          border:1px solid var(--border);
          background:#fff;
          padding:30px 24px;
          text-align:center;
          box-shadow:0 8px 24px rgba(15,23,42,.05);
        }

        .why-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 34px rgba(15,23,42,.09);
        }

        .role-pill{
          display:flex;
          align-items:center;
          gap:12px;
          border-radius:16px;
          border:1px solid var(--border);
          background:#fff;
          padding:16px 18px;
          box-shadow:0 6px 18px rgba(15,23,42,.04);
        }

        .role-pill:hover{
          transform:translateY(-4px);
          box-shadow:0 14px 28px rgba(15,23,42,.08);
        }

        .feature-mini{
          border-radius:18px;
          border:1px solid rgba(255,255,255,.12);
          background:rgba(255,255,255,.08);
          padding:18px;
          text-align:left;
        }

        .feature-mini:hover{
          transform:translateY(-3px);
          background:rgba(255,255,255,.11);
        }

        .loc-card{
          flex:1;
          min-width:280px;
          border-radius:20px;
          border:1px solid var(--border);
          background:#fff;
          padding:24px 20px;
          box-shadow:0 8px 24px rgba(15,23,42,.05);
        }

        .loc-card:hover{
          transform:translateY(-5px);
          box-shadow:0 18px 34px rgba(15,23,42,.09);
        }

        .cta-section{
          position:relative;
          overflow:hidden;
          padding:86px 0;
          background:
            linear-gradient(135deg, rgba(30,58,138,.95), rgba(37,99,235,.92)),
            url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
        }

        @media (max-width: 768px){
          .hero-section{
            padding-top:90px;
            padding-bottom:90px;
          }
        }
      `}</style>

      <div className="snaa-root flex min-h-screen flex-col">
        <PublicHeader />

        <main className="flex-1">
          <section className="hero-section">
            <div
              className="hero-orb float-soft"
              style={{
                width: 420,
                height: 420,
                top: -140,
                right: -80,
                background: "rgba(245,158,11,.08)",
              }}
            />
            <div
              className="hero-orb float-soft"
              style={{
                width: 280,
                height: 280,
                bottom: -80,
                left: -60,
                border: "1px solid rgba(255,255,255,.08)",
              }}
            />

            <div className="container mx-auto px-4" style={{ position: "relative" }}>
              <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
                <div className="hero-badge reveal reveal-1">
                  <Award size={14} />
                  Supporting GBMT Group, Dubai
                </div>

                <div className="gold-bar reveal reveal-2" />

                <h1
                  className="snaa-display reveal reveal-2"
                  style={{
                    fontSize: "clamp(2.6rem,6vw,4.8rem)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.08,
                    marginBottom: 18,
                  }}
                >
                  SNAA Business Processing Centre
                </h1>

                <p
                  className="reveal reveal-3"
                  style={{
                    color: "rgba(255,255,255,.84)",
                    fontSize: 17,
                    lineHeight: 1.85,
                    maxWidth: 760,
                    margin: "0 auto 34px",
                  }}
                >
                  The dedicated back-office operations arm of GBMT Group, Dubai —
                  delivering dependable support across finance, HR, data processing,
                  and business administration from Mangalore, India.
                </p>

                <div className="reveal reveal-4" style={{ marginBottom: 34 }}>
                  <Link to="/careers">
                    <button className="primary-btn">
                      View Open Positions <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>

                <div
                  className="glass-panel zoom-soft"
                  style={{
                    maxWidth: 900,
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                      gap: 18,
                    }}
                  >
                    <div className="feature-mini">
                      <div className="mini-icon">
                        <Layers3 size={22} />
                      </div>
                      <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                        Operational Excellence
                      </h3>
                      <p style={{ color: "rgba(255,255,255,.76)", fontSize: 13, lineHeight: 1.7 }}>
                        Structured support processes that strengthen global business operations.
                      </p>
                    </div>

                    <div className="feature-mini">
                      <div className="mini-icon">
                        <Globe size={22} />
                      </div>
                      <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                        Global Alignment
                      </h3>
                      <p style={{ color: "rgba(255,255,255,.76)", fontSize: 13, lineHeight: 1.7 }}>
                        Supporting teams and workflows connected to the UAE, Qatar, and GCC markets.
                      </p>
                    </div>

                    <div className="feature-mini">
                      <div className="mini-icon">
                        <Users size={22} />
                      </div>
                      <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                        Professional Team
                      </h3>
                      <p style={{ color: "rgba(255,255,255,.76)", fontSize: 13, lineHeight: 1.7 }}>
                        Built on discipline, collaboration, and long-term growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 860, textAlign: "center" }}>
              <p className="section-label">Who We Are</p>
              <h2 className="snaa-display section-title">
                About SNAA Business Processing Centre
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.9, fontSize: 15 }}>
                SNAA Business Processing Centre Pvt. Ltd., headquartered in Mangalore,
                Karnataka, serves as the dedicated business support arm of GBMT Group,
                Dubai. We manage essential back-office functions such as HR support,
                finance processing, data operations, and administrative coordination —
                helping power efficient international operations with consistency,
                professionalism, and reliability.
              </p>
            </div>
          </section>

          <div className="grad-line" />

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>
                Our Parent Company
              </p>
              <h2 className="snaa-display section-title">GBMT Group, Dubai</h2>
              <p className="section-sub">
                Established in 2000, GBMT Group has grown into a recognized structural
                steel stockist and manufacturer serving construction, oil & gas,
                engineering, fabrication, and industrial sectors across the GCC and MENA region.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                  gap: 20,
                  maxWidth: 980,
                  margin: "0 auto",
                }}
              >
                {stats.map(({ label, value, sub }) => (
                  <div key={label} className="stat-card">
                    <p
                      className="snaa-display"
                      style={{
                        fontSize: 34,
                        fontWeight: 800,
                        color: "#1d4ed8",
                      }}
                    >
                      {value}
                    </p>
                    <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{sub}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", marginTop: 8 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>
                Business Divisions
              </p>
              <h2 className="snaa-display section-title">GBMT Group — Core Operations</h2>
              <p className="section-sub">
                A diversified steel-focused business with strong manufacturing, stockholding, and supply capabilities.
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
                  <div key={title} className="div-card">
                    <div className="div-icon">
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="parallax-band">
            <div className="container mx-auto px-4 text-center">
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#f59e0b",
                  marginBottom: 8,
                }}
              >
                Industries We Serve
              </p>

              <h2
                className="snaa-display"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.5rem)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                Supporting Demanding Industrial Sectors
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,.78)",
                  fontSize: 14,
                  maxWidth: 720,
                  margin: "0 auto 36px",
                  lineHeight: 1.8,
                }}
              >
                GBMT Group’s products and services are trusted across diverse sectors requiring scale, strength, and reliability.
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

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>
                Career Benefits
              </p>
              <h2 className="snaa-display section-title">Why Join SNAA?</h2>
              <p className="section-sub">
                A workplace designed for professionals seeking stability, development, and meaningful contribution.
              </p>

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
                    <div className="why-icon" style={{ margin: "0 auto 18px" }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 780 }}>
              <p className="section-label" style={{ textAlign: "center" }}>
                Opportunities
              </p>
              <h2 className="snaa-display section-title">Roles We Commonly Hire For</h2>
              <p className="section-sub" style={{ marginBottom: 34 }}>
                Explore the types of roles frequently available within our Mangalore operations team.
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
                    <CheckCircle2 size={18} style={{ color: "#1d4ed8", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", flex: 1 }}>
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "72px 0", background: "#fff" }}>
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
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                        SNAA Business Processing Centre Pvt. Ltd.
                      </p>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>
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
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                        GBMT Group
                      </p>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>
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

          <section className="cta-section">
            <div className="container mx-auto px-4 text-center">
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Briefcase size={26} style={{ color: "#fff" }} />
              </div>

              <h2
                className="snaa-display"
                style={{
                  fontSize: "clamp(1.9rem,3.5vw,2.9rem)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                Explore Career Opportunities at SNAA
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,.8)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  maxWidth: 560,
                  margin: "0 auto 34px",
                }}
              >
                Discover opportunities to grow with a team that supports global operations with professionalism and consistency.
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