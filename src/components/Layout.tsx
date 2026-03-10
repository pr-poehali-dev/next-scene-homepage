import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TICKER = [
  "Tickets Are On Sale", "·", "Click Here to Purchase", "·",
  "Mean Girls — Full Broadway Version — 2026", "·",
  "Upcoming Teen-Led Productions", "·", "Auditions Now Open", "·",
  "Seasonal Cabarets in Rockland County", "·", "Contact Us", "·",
  "Tickets Are On Sale", "·", "Click Here to Purchase", "·",
  "Mean Girls — Full Broadway Version — 2026", "·",
  "Upcoming Teen-Led Productions", "·", "Auditions Now Open", "·",
  "Seasonal Cabarets in Rockland County", "·", "Contact Us", "·",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* TICKER */}
      <div style={{ background: "var(--red)", height: "38px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div className="ticker-track">
          {TICKER.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.65rem", fontWeight: t === "·" ? 400 : 700,
              letterSpacing: t === "·" ? "0" : "0.15em",
              textTransform: "uppercase",
              color: t === "·" ? "rgba(255,255,255,0.4)" : "#fff",
              padding: "0 0.75rem",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(245,242,236,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid var(--ink)",
      }}>
        <div className="container" style={{
          height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1.35rem", fontWeight: 900,
              letterSpacing: "-0.01em", color: "var(--ink)",
              textTransform: "uppercase",
            }}>
              Next Scene NY
            </span>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.52rem", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--red)", marginTop: "2px",
            }}>
              Teen Theater Company
            </span>
          </Link>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {[
              { label: "Cabarets", path: "/cabarets" },
              { label: "Productions", path: "/productions" },
              { label: "About Us", path: "/about" },
            ].map(({ label, path }) => (
              <Link key={path} to={path} className="nav-item"
                style={{ color: pathname === path ? "var(--red)" : undefined }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/productions" className="btn-red" style={{ padding: "0.7rem 1.5rem", fontSize: "0.68rem" }}>
            <Icon name="Ticket" size={13} />
            Get Tickets
          </Link>
        </div>
      </header>

      {/* PAGE */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* FOOTER */}
      <footer style={{ background: "var(--ink)", padding: "5rem 0 3rem" }}>
        <div className="container">

          {/* Top grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr",
            gap: "5rem", paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: "2.5rem",
          }}>
            {/* Brand */}
            <div>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: "1rem", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                Next Scene NY
              </p>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", fontWeight: 400, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "340px", marginBottom: "1.75rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025.
              </p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="btn-outline-white" style={{ padding: "0.6rem 1.25rem", fontSize: "0.65rem" }}
              >
                <Icon name="Instagram" size={13} />
                Follow on Instagram
              </a>
            </div>

            {/* Links */}
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>Quick Links</p>
              {[
                { label: "About Next Scene", path: "/about" },
                { label: "Upcoming Productions", path: "/productions" },
                { label: "Cabarets", path: "/cabarets" },
              ].map(({ label, path }) => (
                <Link key={path} to={path} style={{
                  display: "block", fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.88rem", fontWeight: 600,
                  color: "rgba(255,255,255,0.5)", textDecoration: "none",
                  marginBottom: "0.75rem", transition: "color 0.18s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>Contact</p>
              {[
                { icon: "MapPin", text: "35 S Broadway, Nyack, NY 10960" },
                { icon: "Mail", text: "nextsceneny@gmail.com" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", marginBottom: "0.9rem" }}>
                  <Icon name={icon} size={13} style={{ color: "var(--red)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.28)" }}>
              © 2025 Next Scene NY. All rights reserved. Nonprofit organization.
            </p>
            <a href="#" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.28)", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
