import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TICKER_TEXT = [
  "Tickets Are On Sale",
  "Click Here to Purchase",
  "Upcoming Teen-Led Productions",
  "Contact Us",
  "Mean Girls — Full Broadway Version",
  "Seasonal Cabarets in Rockland County",
  "Tickets Are On Sale",
  "Click Here to Purchase",
  "Upcoming Teen-Led Productions",
  "Contact Us",
  "Mean Girls — Full Broadway Version",
  "Seasonal Cabarets in Rockland County",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── ANNOUNCEMENT TICKER ── */}
      <div style={{
        backgroundColor: "var(--accent)",
        overflow: "hidden",
        height: "36px",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="animate-ticker" style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {TICKER_TEXT.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: "1.5rem",
              fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem",
              fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#fff", padding: "0 2rem",
            }}>
              {item}
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.5rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "rgba(14,15,18,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{
          maxWidth: "1340px", margin: "0 auto",
          padding: "0 2.5rem",
          height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <span style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.5rem", fontWeight: 500,
              color: "var(--text-primary)", letterSpacing: "0.01em", lineHeight: 1,
            }}>
              Next Scene NY
            </span>
            <span style={{
              fontFamily: "DM Sans, sans-serif", fontSize: "0.55rem",
              fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--accent)",
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
                key={path}
                to={path}
                className="nav-link"
                style={{ color: location.pathname === path ? "var(--text-primary)" : undefined }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/productions" className="btn-red" style={{ padding: "0.65rem 1.5rem" }}>
            <Icon name="Ticket" size={14} />
            Get Tickets
          </Link>
        </div>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        padding: "4.5rem 0 2.5rem",
      }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          {/* Top */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "4rem", paddingBottom: "3.5rem", borderBottom: "1px solid var(--border)" }}>
            {/* Brand */}
            <div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                Next Scene NY
              </h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "340px", marginBottom: "1.5rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025.
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text"
              >
                <Icon name="Instagram" size={14} />
                Follow Us On Instagram
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Quick Links</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "About Next Scene", path: "/about" },
                  { label: "Upcoming Productions", path: "/productions" },
                  { label: "Cabarets", path: "/cabarets" },
                ].map(({ label, path }) => (
                  <Link key={path} to={path} style={{
                    fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem",
                    color: "var(--text-secondary)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: "MapPin", text: "35 S Broadway, Nyack, NY 10960" },
                  { icon: "Mail", text: "nextsceneny@gmail.com" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <Icon name={icon} size={13} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-muted)" }}>
              © 2025 Next Scene NY. All rights reserved. Nonprofit organization.
            </p>
            <a href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-muted)", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
