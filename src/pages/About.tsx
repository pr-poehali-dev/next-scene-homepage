import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";
const R = { fontFamily: "'Raleway', sans-serif" } as const;

const TEAM = [
  { name: "Charleigh Taylor", role: "Choreographer & Assistant Director" },
  { name: "Ashley Kaluzna", role: "Assistant Choreographer" },
  { name: "Emma Gusler", role: "Creative Director" },
  { name: "Lia Fasano", role: "Operations Coordinator" },
];

export default function About() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <div style={{ background: "var(--ink)", padding: "5.5rem 0 5rem", position: "relative", overflow: "hidden" }}>
        {/* faint bg text */}
        <span style={{ position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)", ...R, fontSize: "18vw", fontWeight: 900, textTransform: "uppercase", color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em" }}>
          ABOUT
        </span>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem" }}>
            <Link to="/" style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>About</span>
          </div>
          <p className="eyebrow" style={{ color: "var(--red)", marginBottom: "1rem" }}>About Next Scene NY</p>
          <h1 style={{ ...R, fontSize: "clamp(3.2rem, 6vw, 6rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            A Nonprofit<br />
            <span style={{ color: "var(--red)", fontStyle: "italic" }}>Theater Company</span>
          </h1>
          <p style={{ ...R, fontSize: "1.05rem", fontWeight: 400, color: "rgba(255,255,255,0.55)", maxWidth: "520px", lineHeight: 1.75 }}>
            By the next generation of young artists.
          </p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section style={{ background: "var(--white)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "7rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", boxShadow: "var(--shadow-lg)" }} />
              <div style={{ position: "absolute", top: "-1rem", left: "-1rem", width: "100%", height: "100%", border: "3px solid var(--red)", zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: "-1.25rem", right: "-1.25rem", background: "var(--red)", padding: "1.4rem 1.75rem" }}>
                <p style={{ ...R, fontSize: "2.4rem", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>1st</p>
                <p style={{ ...R, fontSize: "0.52rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>In Rockland County</p>
              </div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Who We Are</p>
              <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, marginBottom: "2rem" }}>
                A Teen-Led<br />
                <span style={{ color: "var(--red)", fontStyle: "italic" }}>Nonprofit</span>
              </h2>
              <div className="rule-red" style={{ marginBottom: "2rem" }} />
              <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9 }}>
                Next Scene NY is the first teen-founded and entirely teen-led theater company in Rockland County. Founded in 2025 by Roy Pan as a freshman in high school, the company gives young artists the opportunity to create, direct, and perform professional-quality productions while leading every aspect of the organization, including directing, choreography, music, stage crew, production teams, and board leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background: "var(--surface)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Mission</p>
              <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, marginBottom: "2.5rem" }}>
                Making Theater<br />
                <span style={{ color: "var(--red)", fontStyle: "italic" }}>More Accessible</span>
              </h2>
              {/* Pull quote */}
              <div style={{ borderLeft: "4px solid var(--red)", paddingLeft: "1.5rem" }}>
                <p style={{ ...R, fontSize: "1.15rem", fontWeight: 700, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.55 }}>
                  "A space where every young artist can find their role — onstage, backstage, or as part of a creative team."
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ ...R, fontSize: "0.97rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Our mission is to provide teens with the chance to lead, create, and perform. We create a space where every young artist can find their role onstage, backstage, or as part of a creative team. All offered with no tuition.
              </p>
              <p style={{ ...R, fontSize: "0.97rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                We work with the Rockland County YMCA and their Teens in Action program to expand opportunities for youth involvement. Through storytelling, hands-on experience, and teamwork, we build community, inspire confidence, and cultivate the next generation of theater makers.
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1.25rem", background: "var(--white)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <Icon name="HandHeart" size={14} style={{ color: "var(--red)", flexShrink: 0 }} />
                <span style={{ ...R, fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-2)" }}>
                  In partnership with Rockland County YMCA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ background: "var(--white)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Leadership</p>
          <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "3.5rem" }}>
            About Our Founder
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "5rem", alignItems: "start" }}>
            {/* Photo + name card */}
            <div>
              <div style={{ aspectRatio: "3/4", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", marginBottom: "0", boxShadow: "var(--shadow-lg)" }} />
              <div style={{ background: "var(--red)", padding: "1.25rem 1.5rem" }}>
                <p style={{ ...R, fontSize: "1.25rem", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.2rem" }}>Roy Pan</p>
                <p style={{ ...R, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                  Founder & Artistic Director
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="rule-red" style={{ marginBottom: "2rem" }} />
              <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                Founder and Artistic Director Roy Pan established Next Scene NY as a freshman, creating the first teen-led theater company in Rockland and Westchester County. Roy serves as both director and musical director for all teen-directed and performed productions.
              </p>
              <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                He has been professionally trained for over three years and has been performing since age four in local community theaters as well as in multiple Off-Broadway productions.
              </p>
              <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                Through Next Scene, he empowers young artists to lead, create, and perform at the highest standard.
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: "0", borderTop: "2px solid var(--ink)" }}>
                {[
                  { num: "3+", label: "Years Professional Training" },
                  { num: "4", label: "Age He Started Performing" },
                  { num: "Multi", label: "Off-Broadway Productions" },
                ].map((s, i) => (
                  <div key={i} style={{ flex: 1, padding: "1.5rem 1.75rem", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                    <p style={{ ...R, fontSize: "2.5rem", fontWeight: 900, color: "var(--red)", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.35rem" }}>{s.num}</p>
                    <p style={{ ...R, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", lineHeight: 1.45 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTH TEAM ── */}
      <section style={{ background: "var(--surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Team</p>
          <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
            Youth Team
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {TEAM.map((m, i) => (
              <div key={i} className="card" style={{ padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: i === 0 ? "var(--red)" : "var(--border)" }} />
                <div style={{ width: "52px", height: "52px", background: i === 0 ? "var(--red)" : "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon name="User" size={22} style={{ color: i === 0 ? "#fff" : "var(--ink-3)" }} />
                </div>
                <h3 style={{ ...R, fontSize: "1.1rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.4rem", lineHeight: 1.2 }}>{m.name}</h3>
                <div style={{ height: "1px", background: "var(--border)", margin: "0.75rem 0" }} />
                <p style={{ ...R, fontSize: "0.75rem", fontWeight: 600, color: i === 0 ? "var(--red)" : "var(--ink-3)", lineHeight: 1.45, letterSpacing: "0.02em" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ ...R, fontSize: "2.4rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.5rem" }}>
              Ready to Get Involved?
            </h2>
            <p style={{ ...R, fontSize: "0.95rem", fontWeight: 400, color: "var(--ink-2)" }}>
              Find your place onstage or behind the scenes.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/productions" className="btn-red">
              <Icon name="Theater" size={14} />
              View Productions
            </Link>
            <Link to="/cabarets" className="btn-outline-dark">
              Explore Cabarets
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
