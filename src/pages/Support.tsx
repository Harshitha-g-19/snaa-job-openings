import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import { HelpCircle, Mail, MapPin, Phone } from "lucide-react";

const faqs = [
  {
    q: "How can I inquire about current openings?",
    a: "You can visit the Careers page to explore roles or contact the relevant team for more information.",
  },
  {
    q: "Where is SNAA located?",
    a: "SNAA Business Processing Centre Pvt. Ltd. is based in Mangalore, Karnataka, India.",
  },
  {
    q: "Who does SNAA support?",
    a: "SNAA supports the business operations of GBMT Group, Dubai.",
  },
  {
    q: "What type of support functions does SNAA handle?",
    a: "SNAA supports finance, HR, administration, documentation, and other operational workflows.",
  },
];

export default function Support() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .page-root { font-family:'Inter',sans-serif; color:#0f172a; background:#fff; }
        .display-font { font-family:'Playfair Display',serif; }

        .hero {
          background:
            linear-gradient(rgba(15,23,42,.8), rgba(30,58,138,.72)),
            url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
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
          padding: 28px 24px;
          box-shadow: 0 10px 26px rgba(15,23,42,.05);
          transition: all .28s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 34px rgba(15,23,42,.08);
        }

        .faq-item {
          border-radius: 18px;
          background: #fff;
          border: 1px solid #e2e8f0;
          padding: 20px 20px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
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
                Support
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
                Help & Contact Information
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
                Find assistance, contact details, and quick answers to common questions.
              </p>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#fff" }}>
            <div className="container mx-auto px-4">
              <p className="section-label" style={{ textAlign: "center" }}>Contact</p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.7rem)",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                Reach Us
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: 15,
                  lineHeight: 1.85,
                  textAlign: "center",
                  maxWidth: 700,
                  margin: "0 auto 46px",
                }}
              >
                For general assistance, careers-related queries, or office information,
                use the contact details below.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: 24,
                  maxWidth: 960,
                  margin: "0 auto",
                }}
              >
                <div className="card">
                  <MapPin size={22} style={{ color: "#2563eb", marginBottom: 14 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Office Address</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    No. C-03-02, Plama Center, 3rd Floor<br />
                    Bejai Kapikad Road, Mangalore – 575004<br />
                    Karnataka, India
                  </p>
                </div>

                <div className="card">
                  <Phone size={22} style={{ color: "#2563eb", marginBottom: 14 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Phone</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    +91 XXXXX XXXXX<br />
                    Monday to Saturday<br />
                    Business Hours
                  </p>
                </div>

                <div className="card">
                  <Mail size={22} style={{ color: "#2563eb", marginBottom: 14 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Email</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>
                    support@snaa.example<br />
                    careers@snaa.example
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "84px 0", background: "#f8fafc" }}>
            <div className="container mx-auto px-4" style={{ maxWidth: 860 }}>
              <p className="section-label" style={{ textAlign: "center" }}>FAQ</p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(2rem,3vw,2.7rem)",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                Frequently Asked Questions
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
                Quick answers to common questions about SNAA and our operations.
              </p>

              <div className="flex flex-col gap-4">
                {faqs.map((item) => (
                  <div key={item.q} className="faq-item">
                    <div className="flex items-start gap-3">
                      <HelpCircle size={18} style={{ color: "#2563eb", marginTop: 2, flexShrink: 0 }} />
                      <div>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                          {item.q}
                        </h3>
                        <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  );
}