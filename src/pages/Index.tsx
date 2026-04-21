import { Link } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Globe,
  Layers3,
  Shield,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global Business Support",
    desc: "Dedicated operational support for GBMT Group’s international business functions.",
  },
  {
    icon: Shield,
    title: "Reliable Processes",
    desc: "Structured workflows that ensure consistency, accountability, and efficiency.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "A collaborative workplace built on discipline, growth, and long-term value.",
  },
];

const quickCards = [
  "Finance & Accounts Support",
  "HR & Administrative Operations",
  "Data Processing & Documentation",
  "Business Coordination & Internal Support",
];

export default function Index() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .site-root {
          font-family: 'Inter', sans-serif;
          background: #fff;
          color: #0f172a;
        }

        .display-font {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .reveal {
          opacity: 0;
          animation: fadeUp .85s ease forwards;
        }

        .d1 { animation-delay: .08s; }
        .d2 { animation-delay: .18s; }
        .d3 { animation-delay: .28s; }
        .d4 { animation-delay: .38s; }

        .float-soft {
          animation: floatY 6s ease-in-out infinite;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(rgba(15,23,42,.78), rgba(15,23,42,.65)),
            url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          padding: 110px 0 120px;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          color: #dbeafe;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(12px);
          margin-bottom: 18px;
        }

        .gold-bar {
          width: 70px;
          height: 3px;
          border-radius: 999px;
          margin: 0 auto 22px;
          background: linear-gradient(90deg,#f59e0b,#fde68a);
        }

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
          box-shadow: 0 14px 30px rgba(245,158,11,.24);
          transition: all .25s ease;
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
          background: rgba(255,255,255,.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,.18);
          transition: all .25s ease;
        }

        .secondary-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.16);
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(1.9rem,3vw,2.7rem);
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          margin-bottom: 14px;
        }

        .section-sub {
          color: #64748b;
          font-size: 15px;
          line-height: 1.85;
          text-align: center;
          max-width: 760px;
          margin: 0 auto 46px;
        }

        .glass-panel {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 20px 50px rgba(0,0,0,.18);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          padding: 24px;
        }

        .feature-card, .quick-card, .stat-box {
          transition: all .28s ease;
        }

        .feature-card {
          border-radius: 20px;
          background: #fff;
          border: 1px solid #e2e8f0;
          padding: 30px 24px;
          box-shadow: 0 10px 26px rgba(15,23,42,.05);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(15,23,42,.08);
        }

        .quick-card {
          border-radius: 18px;
          background: #fff;
          border: 1px solid #e2e8f0;
          padding: 18px 18px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .quick-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(15,23,42,.08);
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

        .icon-box svg {
          color: #2563eb;
        }

        .band {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(rgba(15,23,42,.84), rgba(30,58,138,.84)),
            url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          padding: 78px 0;
        }

        .stat-box {
          border-radius: 22px;
          padding: 24px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          backdrop-filter: blur(12px);
          text-align: center;
        }

        .stat-box:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,.11);
        }

        .cta-section {
          background: linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);
          padding: 84px 0;
        }
      `}</style>

      <div className="site-root min-h-screen flex flex-col">
        <PublicHeader />

        <main className="flex-1">
          <section className="hero-section">
            <div
              className="hero-orb float-soft"
              style={{
                width: 360,
                height: 360,
                right: -70,
                top: -90,
                background: "rgba(245,158,11,.08)",
              }}
            />
            <div
              className="hero-orb float-soft"
              style={{
                width: 240,
                height: 240,
                left: -60,
                bottom: -70,
                border: "1px solid rgba(255,255,255,.08)",
              }}
            />

            <div className="container mx-auto px-4" style={{ position: "relative" }}>
              <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
                <div className="hero-badge reveal d1">
                  <Award size={14} />
                  Supporting GBMT Group, Dubai
                </div>

                <div className="gold-bar reveal d2" />

                <h1
                  className="display-font reveal d2"
                  style={{
                    fontSize: "clamp(2.8rem,6vw,5rem)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.08,
                    marginBottom: 18,
                  }}
                >
                  SNAA Business Processing Centre
                </h1>

                <p
                  className="reveal d3"
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

                <div
                  className="reveal d4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 14,
                    flexWrap: "wrap",
                    marginBottom: 34,
                  }}
                >
                  <Link to="/about" className="primary-btn">
                    Learn More <ArrowRight size={16} />
                  </Link>
                  <Link to="/careers" className="secondary-btn">
                    Explore Careers <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="glass-panel">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                      gap: 16,
                    }}
                  >
                    {quickCards.map((item) => (
                      <div
                        key={item}
                        style={{
                          background: "rgba(255,255,255,.08)",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: 18,
                          padding: "18px 16px",
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>Overview</p>
              <h2 className="display-font section-title">Who We Are</h2>
              <p className="section-sub">
                SNAA Business Processing Centre Pvt. Ltd., headquartered in Mangalore,
                Karnataka, serves as the operational support backbone for GBMT Group,
                Dubai. We manage critical business support functions that strengthen
                international execution, streamline internal workflows, and help maintain
                consistent operational standards.
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
                {highlights.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="feature-card">
                    <div className="icon-box">
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

          <section className="band">
            <div className="container mx-auto px-4 text-center">
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#f59e0b",
                  marginBottom: 10,
                }}
              >
                Parent Company
              </p>

              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                Supporting GBMT Group’s Global Operations
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,.8)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  maxWidth: 760,
                  margin: "0 auto 40px",
                }}
              >
                GBMT Group has built a strong reputation in the steel and structural
                materials sector across the GCC and MENA region. SNAA contributes by
                powering core business processes with precision and reliability.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: 18,
                  maxWidth: 980,
                  margin: "0 auto",
                }}
              >
                <div className="stat-box">
                  <p className="display-font" style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>
                    2000
                  </p>
                  <p style={{ color: "#cbd5e1", fontSize: 13 }}>Established in Dubai</p>
                </div>

                <div className="stat-box">
                  <p className="display-font" style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>
                    135K
                  </p>
                  <p style={{ color: "#cbd5e1", fontSize: 13 }}>Sq. Ft. Facility Area</p>
                </div>

                <div className="stat-box">
                  <p className="display-font" style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>
                    30K+
                  </p>
                  <p style={{ color: "#cbd5e1", fontSize: 13 }}>Tons Annual Capacity</p>
                </div>

                <div className="stat-box">
                  <p className="display-font" style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>
                    25K
                  </p>
                  <p style={{ color: "#cbd5e1", fontSize: 13 }}>Metric Tons Fastener Output</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 950 }}>
              <p className="section-label" style={{ textAlign: "center" }}>Quick Access</p>
              <h2 className="display-font section-title">Explore Our Website</h2>
              <p className="section-sub">
                Learn more about our company, career opportunities, and support channels.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: 18,
                }}
              >
                <Link to="/about" className="quick-card">
                  <div className="icon-box" style={{ marginBottom: 14 }}>
                    <Building2 size={22} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                    About
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                    Company background, values, operations, and locations.
                  </p>
                </Link>

                <Link to="/careers" className="quick-card">
                  <div className="icon-box" style={{ marginBottom: 14 }}>
                    <Users size={22} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                    Careers
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                    View opportunities and learn why professionals join SNAA.
                  </p>
                </Link>

                <Link to="/support" className="quick-card">
                  <div className="icon-box" style={{ marginBottom: 14 }}>
                    <Layers3 size={22} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                    Support
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                    Find help information, FAQs, and office support details.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container mx-auto px-4 text-center">
              <CheckCircle2 size={30} style={{ color: "#fff", margin: "0 auto 16px" }} />
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                Professional Support. Global Alignment.
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
                Explore how SNAA supports GBMT Group and discover opportunities to grow
                with a professional operations team.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/about" className="primary-btn">
                  About Us <ArrowRight size={16} />
                </Link>
                <Link to="/careers" className="secondary-btn">
                  View Careers <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  );
}