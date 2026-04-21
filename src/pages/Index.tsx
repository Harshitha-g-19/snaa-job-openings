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
  ChevronRight,
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
];

const whyJoin = [
  {
    icon: Globe,
    title: "International Exposure",
    desc: "Work as part of a global team supporting GBMT's operations across the UAE, Qatar, and the broader GCC region.",
  },
  {
    icon: Users,
    title: "People First Culture",
    desc: "We invest in our team's growth, offer mentorship, and maintain a supportive, inclusive workplace in Mangalore.",
  },
  {
    icon: Shield,
    title: "Stability & Growth",
    desc: "Join a well-established organization backed by 25+ years of GBMT's success in the international steel industry.",
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
  "Oil & Gas", "Construction", "Heavy Fabrication",
  "Light Steel Fabrication", "Engineering", "Shipbuilding", "Energy",
];

export default function Index() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        .snaa-root { font-family: 'DM Sans', sans-serif; background: #fff; }
        .snaa-display { font-family: 'Playfair Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .fu1 { animation-delay: 0.05s; }
        .fu2 { animation-delay: 0.18s; }
        .fu3 { animation-delay: 0.32s; }
        .fu4 { animation-delay: 0.48s; }

        /* ── Hero bg circles ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none;
        }

        /* ── Accent line ── */
        .gold-bar {
          width: 64px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg, #f59e0b, #fde68a);
          margin: 0 auto 20px;
        }

        /* ── Section label ── */
        .sec-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: #1e40af; margin-bottom: 8px;
        }

        /* ── Stat card ── */
        .stat-card {
          border-radius: 16px; background: #fff;
          border: 1px solid #e2e8f0; padding: 28px 20px;
          text-align: center;
          transition: transform .28s ease, box-shadow .28s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,.04);
        }
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(30,64,175,.14);
        }

        /* ── Division card ── */
        .div-card {
          border-radius: 16px; background: #fff;
          border: 1px solid #e2e8f0; padding: 32px 28px;
          border-bottom: 3px solid transparent;
          box-shadow: 0 2px 10px rgba(0,0,0,.04);
          transition: transform .28s ease, box-shadow .28s ease, border-bottom-color .28s ease;
        }
        .div-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 28px 56px rgba(30,64,175,.13);
          border-bottom-color: #1e40af;
        }
        .div-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: #eff6ff; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: background .25s ease, transform .25s ease;
        }
        .div-card:hover .div-icon { background: #1e40af; transform: scale(1.1); }
        .div-icon svg { color: #1e40af; transition: color .25s ease; }
        .div-card:hover .div-icon svg { color: #fff; }

        /* ── Sector tag ── */
        .sector-tag {
          border-radius: 99px; padding: 8px 20px;
          font-size: 13px; font-weight: 500;
          border: 1px solid #334155; color: #cbd5e1;
          cursor: default;
          transition: background .2s ease, color .2s ease, transform .2s ease, border-color .2s ease;
        }
        .sector-tag:hover {
          background: #f59e0b; color: #0f172a;
          border-color: #f59e0b; transform: scale(1.06);
        }

        /* ── Why card ── */
        .why-card {
          border-radius: 16px; border: 1px solid #e2e8f0;
          background: #fafbff; padding: 32px 28px; text-align: center;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(30,64,175,.1);
          background: #eef4ff;
        }
        .why-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: #eff6ff; display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          transition: background .25s ease;
        }
        .why-card:hover .why-icon { background: #1e40af; }
        .why-icon svg { color: #1e40af; transition: color .25s ease; }
        .why-card:hover .why-icon svg { color: #fff; }

        /* ── Role pill ── */
        .role-pill {
          display: flex; align-items: center; gap: 12px;
          border-radius: 14px; border: 1px solid #e2e8f0;
          background: #fff; padding: 16px 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,.04);
          transition: background .22s ease, color .22s ease,
                      transform .22s ease, box-shadow .22s ease;
          cursor: default;
        }
        .role-pill:hover {
          background: #1e40af; transform: translateX(6px);
          box-shadow: 0 10px 28px rgba(30,64,175,.22);
        }
        .role-pill:hover .role-text  { color: #fff; }
        .role-pill:hover .role-check { color: #fde68a; }
        .role-pill:hover .role-arrow { color: rgba(255,255,255,.5); }

        /* ── Location card ── */
        .loc-card {
          flex: 1; border-radius: 16px; border: 1px solid #e2e8f0;
          background: #f8faff; padding: 24px 20px;
          transition: transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,.04);
        }
        .loc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(30,64,175,.11);
        }

        /* ── CTA button ── */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          border-radius: 99px; padding: 14px 32px;
          font-size: 14px; font-weight: 600;
          background: #f59e0b; color: #0f172a;
          border: none; cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(245,158,11,.4);
          background: #fbbf24;
        }

        /* ── Gradient divider ── */
        .grad-div {
          height: 1px;
          background: linear-gradient(90deg, transparent, #1e40af33, transparent);
          margin: 0 auto; max-width: 900px;
        }
      `}</style>

      <div className="snaa-root flex min-h-screen flex-col">
        <PublicHeader />

        <main className="flex-1">

          {/* ══ HERO ══ */}
          <section style={{
            background: "linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#1d4ed8 100%)",
            position: "relative", overflow: "hidden",
            paddingTop: "112px", paddingBottom: "120px",
          }}>
            <div className="hero-orb" style={{
              width: 560, height: 560,
              border: "1px solid rgba(255,255,255,0.05)",
              top: -180, right: -120,
            }} />
            <div className="hero-orb" style={{
              width: 320, height: 320,
              border: "1px solid rgba(255,255,255,0.06)",
              bottom: -90, left: -80,
            }} />
            <div className="hero-orb" style={{
              width: 200, height: 200,
              background: "rgba(245,158,11,0.06)",
              top: "40%", right: "8%",
            }} />

            <div className="container mx-auto px-4 text-center" style={{ position: "relative" }}>
              <p className="fu fu1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#f59e0b", marginBottom: 16,
              }}>
                Back Office Operations · GBMT Group, Dubai
              </p>

              <div className="gold-bar fu fu2" />

              <h1 className="snaa-display fu fu2" style={{
                fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 800,
                color: "#fff", lineHeight: 1.1, marginBottom: 8,
              }}>
                SNAA Careers
              </h1>
              <h2 className="snaa-display fu fu3" style={{
                fontSize: "clamp(1.4rem,3.5vw,2.6rem)", fontWeight: 700,
                color: "#93c5fd", marginBottom: 24,
              }}>
                Job Openings for Freshers
              </h2>

              <p className="fu fu4" style={{
                color: "rgba(255,255,255,0.68)", fontSize: 16, lineHeight: 1.75,
                maxWidth: 600, margin: "0 auto 40px",
              }}>
                SNAA Business Processing Centre is the India back office of GBMT Group, Dubai — a leading structural steel manufacturer across the GCC & MENA region. Join our growing team in Mangalore.
              </p>

              <Link to="/careers">
                <button className="cta-btn fu fu4">
                  View Open Positions <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </section>

          {/* ══ ABOUT SNAA ══ */}
          <section style={{ padding: "72px 0", background: "#fff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 760, textAlign: "center" }}>
              <p className="sec-label">Who We Are</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700,
                color: "#0f172a", marginBottom: 20,
              }}>
                About SNAA Business Processing Centre
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.8, fontSize: 15 }}>
                SNAA Business Processing Centre Pvt. Ltd. is headquartered in Mangalore, Karnataka, and serves as the dedicated back-office operations arm of GBMT Group, Dubai. We handle data entry, HR operations, finance processing, and other critical business support functions that power GBMT's international operations across the UAE, Qatar, and beyond.
              </p>
            </div>
          </section>

          <div className="grad-div" />

          {/* ══ GBMT STATS ══ */}
          <section style={{ padding: "72px 0", background: "#f8faff" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Our Parent Company</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700,
                color: "#0f172a", textAlign: "center", marginBottom: 12,
              }}>
                GBMT Group, Dubai
              </h2>
              <p style={{
                color: "#64748b", fontSize: 14, maxWidth: 580,
                margin: "0 auto 48px", textAlign: "center", lineHeight: 1.7,
              }}>
                Established in 2000, GBMT Group has grown into one of the most recognized structural steel stockists and manufacturers in the GCC and MENA region — serving construction, oil & gas, and energy sectors worldwide.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                gap: 20, maxWidth: 900, margin: "0 auto",
              }}>
                {stats.map(({ label, value, sub }) => (
                  <div key={label} className="stat-card">
                    <p className="snaa-display" style={{
                      fontSize: 36, fontWeight: 800, color: "#1e40af",
                    }}>{value}</p>
                    <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{sub}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", marginTop: 8 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ DIVISIONS ══ */}
          <section style={{ padding: "72px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Business Divisions</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700,
                color: "#0f172a", textAlign: "center", marginBottom: 48,
              }}>
                GBMT Group — Core Operations
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 24, maxWidth: 980, margin: "0 auto",
              }}>
                {divisions.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="div-card">
                    <div className="div-icon"><Icon size={24} /></div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ SECTORS ══ */}
          <section style={{
            padding: "72px 0",
            background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
          }}>
            <div className="container mx-auto px-4 text-center">
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#f59e0b", marginBottom: 8,
              }}>Industries</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700,
                color: "#fff", marginBottom: 10,
              }}>
                Industries We Serve
              </h2>
              <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 40 }}>
                GBMT's products power some of the most demanding sectors globally.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                {sectors.map((s) => (
                  <span key={s} className="sector-tag">{s}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ══ WHY JOIN ══ */}
          <section style={{ padding: "72px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="sec-label" style={{ textAlign: "center" }}>Career Benefits</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700,
                color: "#0f172a", textAlign: "center", marginBottom: 48,
              }}>
                Why Join SNAA?
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: 24, maxWidth: 980, margin: "0 auto",
              }}>
                {whyJoin.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="why-card">
                    <div className="why-icon"><Icon size={26} /></div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ ROLES ══ */}
          <section style={{ padding: "72px 0", background: "#f8faff" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 720 }}>
              <p className="sec-label" style={{ textAlign: "center" }}>Open Roles</p>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700,
                color: "#0f172a", textAlign: "center", marginBottom: 10,
              }}>
                Roles We Hire For
              </h2>
              <p style={{
                fontSize: 14, color: "#64748b", textAlign: "center", marginBottom: 40,
              }}>
                We're always looking for fresh talent in Mangalore to join our back-office team.
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 12,
              }}>
                {roles.map((role) => (
                  <div key={role} className="role-pill">
                    <CheckCircle2 size={18} className="role-check" style={{ color: "#1e40af", flexShrink: 0 }} />
                    <span className="role-text" style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", flex: 1 }}>{role}</span>
                    <ChevronRight size={16} className="role-arrow" style={{ color: "#94a3b8" }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ LOCATIONS ══ */}
          <section style={{ padding: "64px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.6rem,2.5vw,2rem)", fontWeight: 700,
                color: "#0f172a", textAlign: "center", marginBottom: 36,
              }}>
                Our Locations
              </h2>
              <div style={{
                display: "flex", flexWrap: "wrap",
                gap: 20, justifyContent: "center", maxWidth: 760, margin: "0 auto",
              }}>
                <div className="loc-card">
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: "#eff6ff", display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <MapPin size={18} style={{ color: "#1e40af" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                        SNAA Business Processing Centre Pvt. Ltd.
                      </p>
                      <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
                        No. C-03-02, Plama Center, 3rd Floor,<br />
                        Bejai Kapikad Road, Mangalore – 575 004<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="loc-card">
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: "#eff6ff", display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Building2 size={18} style={{ color: "#1e40af" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                        GBMT Group (Parent Company)
                      </p>
                      <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
                        Dubai Investment Park,<br />
                        Dubai, United Arab Emirates<br />
                        Established 2000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══ FINAL CTA ══ */}
          <section style={{
            padding: "88px 0",
            background: "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 100%)",
          }}>
            <div className="container mx-auto px-4 text-center">
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <Briefcase size={26} style={{ color: "#fff" }} />
              </div>
              <h2 className="snaa-display" style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800,
                color: "#fff", marginBottom: 12,
              }}>
                Ready to Start Your Career?
              </h2>
              <p style={{
                color: "rgba(255,255,255,0.68)", fontSize: 15, lineHeight: 1.75,
                maxWidth: 500, margin: "0 auto 40px",
              }}>
                Explore open positions at SNAA and be part of a team that supports a global steel giant from the heart of Mangalore.
              </p>
              <Link to="/careers">
                <button className="cta-btn">
                  View Open Positions <ArrowRight size={16} />
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