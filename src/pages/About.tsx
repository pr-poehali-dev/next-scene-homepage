import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

export default function About() {
  return (
    <Layout>

      {/* ── PAGE HERO ── */}
      <div style={{
        backgroundColor: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 0 4rem",
      }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "var(--text-muted)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-secondary)" }}>About</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.04, marginBottom: "1.25rem" }}>
            About Next Scene NY
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.75 }}>
            The first teen-founded and teen-led nonprofit theater company in Rockland County.
          </p>
        </div>
      </div>

      {/* ── STORY ── */}
      <section style={{ padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "7rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top" }} />
              <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", padding: "1.5rem 2rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", color: "var(--accent)", lineHeight: 1 }}>2025</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.3rem" }}>Est.</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Our Story</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "2rem" }}>
                Founded by a freshman,<br /><em style={{ color: "var(--text-secondary)" }}>built by a generation</em>
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Next Scene NY was founded in 2025 by Roy Pan as a freshman in high school — creating the first entirely teen-led nonprofit theater company in Rockland County.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                From day one, the company was built on a single principle: teens don't just participate in theater — they lead it. Every role in our organization, from artistic direction and choreography to production design and stage management, is held by young artists.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.9 }}>
                In partnership with the Rockland County YMCA's Teens in Action program, we work to ensure that every young person who wants to be part of theater can — regardless of background or experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Mission</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "1.75rem" }}>
                Inclusive. Accessible.<br /><em style={{ color: "var(--accent-soft)" }}>Powered by teens.</em>
              </h2>
              <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.6 }}>
                  "A space where every young artist can find their role — onstage, backstage, or behind the creative team."
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Our mission is to make theater more accessible and inclusive by giving teens the chance to lead, create, and perform in a supportive environment with no tuition.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.9 }}>
                Through storytelling, hands-on experience, and teamwork, we build community, inspire confidence, and cultivate the next generation of theater makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "5.5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Leadership</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text-primary)" }}>Meet the Team</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {/* Roy */}
            <div className="promo-card" style={{ padding: "2.5rem", display: "flex", gap: "2rem" }}>
              <div style={{ width: "72px", height: "72px", flexShrink: 0, backgroundColor: "var(--bg-surface2)", border: "1px solid var(--border-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="User" size={28} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>Roy Pan</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
                  Founder & Artistic Director
                </p>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Roy Pan founded Next Scene NY as a freshman in high school. He serves as director and musical director, has trained with industry professionals for over three years, and has performed since age four in community theater and Off-Broadway productions.
                </p>
              </div>
            </div>

            {/* Charleigh */}
            <div className="promo-card" style={{ padding: "2.5rem", display: "flex", gap: "2rem" }}>
              <div style={{ width: "72px", height: "72px", flexShrink: 0, backgroundColor: "var(--bg-surface2)", border: "1px solid var(--border-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="User" size={28} style={{ color: "var(--text-muted)" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>Charleigh Taylor</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-secondary)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
                  Choreographer & Assistant Director
                </p>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  More about our growing team coming soon as Next Scene NY expands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>Partner</p>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "var(--text-primary)" }}>Rockland County YMCA — Teens in Action</p>
          </div>
          <Link to="/productions" className="btn-red">
            <Icon name="Theater" size={14} />
            View Productions
          </Link>
        </div>
      </section>

    </Layout>
  );
}
