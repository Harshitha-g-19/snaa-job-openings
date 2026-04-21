import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Support", path: "/support" },
];

export default function PublicHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226,232,240,0.9);
        }

        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          transition: color .25s ease;
        }

        .nav-link:hover {
          color: #0f172a;
        }

        .nav-link.active {
          color: #1d4ed8;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: #1d4ed8;
        }

        .header-btn {
          border-radius: 999px;
          background: #f59e0b;
          color: #111827;
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 700;
          transition: all .25s ease;
          box-shadow: 0 10px 24px rgba(245,158,11,.22);
        }

        .header-btn:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }

        .mobile-panel {
          border-top: 1px solid #e2e8f0;
          background: #fff;
        }

        .mobile-link {
          display: block;
          padding: 14px 0;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }

        .mobile-link.active {
          color: #1d4ed8;
        }
      `}</style>

      <header className="site-header">
        <div className="container mx-auto px-4 h-[78px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 14,
                boxShadow: "0 10px 24px rgba(37,99,235,.22)",
              }}
            >
              SN
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
                SNAA Business
              </p>
              <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.1 }}>
                Processing Centre
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/careers" className="header-btn">
              Explore Careers
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0f172a",
            }}
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="mobile-panel md:hidden">
            <div className="container mx-auto px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`mobile-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/careers"
                  onClick={() => setOpen(false)}
                  className="header-btn inline-flex"
                >
                  Explore Careers
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}