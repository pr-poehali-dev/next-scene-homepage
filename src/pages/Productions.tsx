import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

export default function Productions() {
  return (
    <Layout>

      {/* ── PAGE HERO ── */}
      <div style={{ position: "relative", height: "45vh", minHeight: "380px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,15,18,1) 0%, rgba(14,15,18,0.65) 60%, rgba(14,15,18,0.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem 3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(245,241,232,0.5)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(245,241,232,0.3)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(245,241,232,0.7)" }}>Productions</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 4.8rem)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.04 }}>
            Upcoming Productions
          </h1>
        </div>
      </div>

      {/* ── MAIN STAGE FEATURE ── */}
      <section style={{ padding: "5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              {/* Main stage badge */}
              <div style={{
                position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 2,
                backgroundColor: "var(--gold)", padding: "0.4rem 0.9rem",
                display: "flex", alignItems: "center", gap: "0.4rem",
              }}>
                <Icon name="Star" size={11} style={{ color: "#fff" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
                  Main Stage 2026
                </span>
              </div>
              <div style={{ aspectRatio: "16/10", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>2026 Main-Stage Production</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "4rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "0.5rem" }}>
                Mean Girls
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Full Broadway Version
              </p>
              <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  { icon: "Calendar", label: "Year", value: "2026" },
                  { icon: "Users", label: "Cast", value: "All-Teen Cast & Crew" },
                  { icon: "MapPin", label: "Location", value: "Rockland County, NY" },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <Icon name={icon} size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: "70px" }}>{label}</span>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "var(--text-secondary)" }}>{value}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our flagship 2026 main-stage production — the full Broadway version of Mean Girls, performed entirely by a teen cast and led by our teen creative team. Tickets on sale soon.
              </p>

              <div style={{ display: "flex", gap: "0.85rem" }}>
                <a href="#" className="btn-red">
                  <Icon name="Ticket" size={14} />
                  Purchase Tickets
                </a>
                <a href="#" className="btn-ghost">
                  Audition Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAST PRODUCTIONS ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Archive</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.6rem", fontWeight: 400, color: "var(--text-primary)" }}>Past Productions</h2>
          </div>

          {/* Single past production row */}
          <div style={{ display: "flex", gap: "2rem", padding: "2rem", border: "1px solid var(--border)", backgroundColor: "var(--bg-deep)", alignItems: "center" }}>
            <div style={{ width: "140px", height: "90px", flexShrink: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                2025 Inaugural Production
              </p>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                Inaugural Cabaret
              </h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--text-secondary)" }}>
                All-teen cast performance — Rockland County
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.35rem 0.85rem", border: "1px solid var(--border)" }}>
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.4rem", fontWeight: 400, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Want to be part of the cast or crew?
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)" }}>
              Auditions and crew applications open for upcoming productions.
            </p>
          </div>
          <Link to="/about" className="btn-red">
            Get Involved
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </section>

    </Layout>
  );
}
