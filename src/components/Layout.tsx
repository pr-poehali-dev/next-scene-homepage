import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TICKER_ITEMS = [
  "Tickets Are On Sale",
  "Click Here to Purchase",
  "Upcoming Teen-Led Productions",
  "Mean Girls — Full Broadway Version — 2026",
  "Seasonal Cabarets in Rockland County",
  "Auditions Now Open",
  "Contact Us",
  "Tickets Are On Sale",
  "Click Here to Purchase",
  "Upcoming Teen-Led Productions",
  "Mean Girls — Full Broadway Version — 2026",
  "Seasonal Cabarets in Rockland County",
  "Auditions Now Open",
  "Contact Us",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── TICKER ── */}
      <div style={{
        backgroundColor: "var(--accent)",
        height: "36px", overflow: "hidden",
        display: "flex", alignItems: "center",
      }}>
        <div className="animate-ticker">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: "1.5rem",
              fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem",
              fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#fff", padding: "0 2rem",
            }}>
              {item}
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.45rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "rgba(248,245,239,0.97)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 8px rgba(26,22,18,0.06)",
      }}>
        <div style={{
          maxWidth: "1360px", margin: "0 auto",
          padding: "0 2.5rem", height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.55rem" }}>
            <span style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.5rem", fontWeight: 500,
              color: "var(--text)", letterSpacing: "0.01em", lineHeight: 1,
            }}>
              Next Scene NY
            </span>
            <span style={{
              fontFamily: "DM Sans, sans-serif", fontSize: "0.52rem",
              fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--accent)",
            }}>
              Theater Co.
            </span>
          </Link>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {[
              { label: "Cabarets", path: "/cabarets" },
              { label: "Upcoming Productions", path: "/productions" },
              { label: "About Us", path: "/about" },
            ].map(({ label, path }) => (
              <Link
                key={path} to={path} className="nav-link"
                style={{ color: pathname === path ? "var(--text)" : undefined,
                         fontWeight: pathname === path ? 600 : undefined }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/productions" className="btn-red" style={{ padding: "0.65rem 1.4rem" }}>
            <Icon name="Ticket" size={13} />
            Get Tickets
          </Link>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{
        backgroundColor: "var(--text)",
        borderTop: "none",
        padding: "5rem 0 2.5rem",
      }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.8fr 1fr 1.2fr",
            gap: "5rem", paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: "2.5rem",
          }}>
            {/* Brand */}
            <div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "#F8F5EF", marginBottom: "1rem", lineHeight: 1 }}>
                Next Scene NY
              </h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "rgba(248,245,239,0.5)", lineHeight: 1.8, maxWidth: "360px", marginBottom: "2rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025.
              </p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-soft)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F8F5EF")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--accent-soft)")}
              >
                <Icon name="Instagram" size={14} />
                Follow Us On Instagram
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(248,245,239,0.35)", marginBottom: "1.25rem" }}>
                Quick Links
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { label: "About Next Scene", path: "/about" },
                  { label: "Upcoming Productions", path: "/productions" },
                  { label: "Cabarets", path: "/cabarets" },
                ].map(({ label, path }) => (
                  <Link key={path} to={path} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "rgba(248,245,239,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F8F5EF")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,245,239,0.55)")}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(248,245,239,0.35)", marginBottom: "1.25rem" }}>
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { icon: "MapPin", text: "35 S Broadway, Nyack, NY 10960" },
                  { icon: "Mail", text: "nextsceneny@gmail.com" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <Icon name={icon} size={13} style={{ color: "var(--accent-soft)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "rgba(248,245,239,0.55)", lineHeight: 1.5 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "rgba(248,245,239,0.3)" }}>
              © 2025 Next Scene NY. All rights reserved. Nonprofit organization.
            </p>
            <a href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "rgba(248,245,239,0.3)", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
