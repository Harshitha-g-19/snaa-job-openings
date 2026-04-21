import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function PublicFooter() {
  return (
    <>
      <style>{`
        .footer-link {
          color: #cbd5e1;
          transition: color .2s ease;
          font-size: 14px;
        }

        .footer-link:hover {
          color: #ffffff;
        }
      `}</style>

      <footer
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "60px 0 24px",
        }}
      >
        <div className="container mx-auto px-4">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 28,
              marginBottom: 36,
            }}
          >
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>
                SNAA Business Processing Centre
              </h3>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.8 }}>
                Supporting GBMT Group, Dubai with dependable back-office operations
                across finance, HR, data processing, and administration.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/careers" className="footer-link">Careers</Link>
                <Link to="/support" className="footer-link">Support</Link>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Contact</h4>
              <div className="flex flex-col gap-3" style={{ color: "#cbd5e1", fontSize: 14 }}>
                <div className="flex items-start gap-3">
                  <MapPin size={16} style={{ marginTop: 2 }} />
                  <span>Mangalore, Karnataka, India</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} style={{ marginTop: 2 }} />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} style={{ marginTop: 2 }} />
                  <span>careers@snaa.example</span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 20,
              color: "#94a3b8",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} SNAA Business Processing Centre. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}