import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const YOUTH_TEAM = [
  { name: "Charleigh Taylor", role: "Choreographer & Assistant Director" },
  { name: "Ashley Kaluzna", role: "Assistant Choreographer" },
  { name: "Emma Gusler", role: "Creative Director" },
  { name: "Lia Fasano", role: "Operations Coordinator" },
];

export default function About() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "5rem 0 4.5rem" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "var(--text-faint)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-2)" }}>About</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.04, marginBottom: "1.25rem" }}>
            About Next Scene NY
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1.05rem", fontWeight: 300, color: "var(--text-2)", maxWidth: "540px", lineHeight: 1.7 }}>
            A nonprofit theater company by the next generation of young artists.
          </p>
        </div>
      </div>

      {/* ── MAIN INTRO ── */}
      <section style={{ padding: "6.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "7rem", alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "-16px", left: "-16px",
                width: "100%", height: "100%",
                border: "2px solid var(--accent)", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, aspectRatio: "4/5", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", boxShadow: "var(--shadow-lg)" }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", zIndex: 2, backgroundColor: "var(--accent)", padding: "1.6rem 2rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.4rem", color: "#fff", lineHeight: 1 }}>1st</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                  In Rockland County
                </p>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Who We Are</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3vw, 3rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.1, marginBottom: "2rem" }}>
                A teen-led nonprofit<br /><em style={{ color: "var(--text-2)" }}>theater company</em>
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.97rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9 }}>
                Next Scene NY is the first teen-founded and entirely teen-led theater company in Rockland County. Founded in 2025 by Roy Pan as a freshman in high school, the company gives young artists the opportunity to create, direct, and perform professional-quality productions while leading every aspect of the organization, including directing, choreography, music, stage crew, production teams, and board leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "start" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Mission</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.1, marginBottom: "2.5rem" }}>
                Making theater more<br />
                <em style={{ color: "var(--accent)" }}>inclusive and accessible</em>
              </h2>
              {/* Quote */}
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.65 }}>
                  "A space where every young artist can find their role — onstage, backstage, or as part of a creative team."
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.97rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Our mission is to provide teens with the chance to lead, create, and perform. We create a space where every young artist can find their role onstage, backstage, or as part of a creative team. All offered with no tuition.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.97rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                We work with the Rockland County YMCA and their Teens in Action program to expand opportunities for youth involvement. Through storytelling, hands-on experience, and teamwork, we build community, inspire confidence, and cultivate the next generation of theater makers.
              </p>
              {/* Partner badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1.25rem", backgroundColor: "var(--bg-white)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <Icon name="HandHeart" size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "var(--text-2)" }}>
                  In partnership with Rockland County YMCA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Leadership</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)", marginBottom: "3rem" }}>
            About Our Founder
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Photo */}
            <div>
              <div style={{
                aspectRatio: "3/4",
                backgroundImage: `url(${HERO_IMG})`,
                backgroundSize: "cover", backgroundPosition: "center top",
                marginBottom: "1.5rem",
                boxShadow: "var(--shadow-md)",
              }} />
              <div style={{ padding: "1.25rem", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.35rem", color: "var(--text)", marginBottom: "0.2rem" }}>Roy Pan</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  Founder & Artistic Director
                </p>
              </div>
            </div>

            {/* Bio */}
            <div style={{ paddingTop: "0.5rem" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Founder and Artistic Director Roy Pan established Next Scene NY as a freshman, creating the first teen-led theater company in Rockland and Westchester County. Roy serves as both director and musical director for all teen-directed and performed productions.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                He has been professionally trained for over three years and has been performing since age four in local community theaters as well as in multiple Off-Broadway productions.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9 }}>
                Through Next Scene, he empowers young artists to lead, create, and perform at the highest standard.
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: "3rem", marginTop: "2.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)" }}>
                {[
                  { num: "3+", label: "Years of professional training" },
                  { num: "4", label: "Age he started performing" },
                  { num: "Multi", label: "Off-Broadway productions" },
                ].map((s, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", color: "var(--accent)", lineHeight: 1, marginBottom: "0.35rem" }}>{s.num}</p>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTH TEAM ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Team</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)", marginBottom: "3rem" }}>
            Youth Team
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {YOUTH_TEAM.map((member, i) => (
              <div key={i} className="card" style={{ padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: i === 0 ? "var(--accent)" : "var(--bg-surface2)" }} />
                <div style={{ width: "52px", height: "52px", backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon name="User" size={20} style={{ color: i === 0 ? "var(--accent)" : "var(--text-muted)" }} />
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.35rem", color: "var(--text)", marginBottom: "0.35rem", lineHeight: 1.2 }}>{member.name}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: i === 0 ? "var(--accent)" : "var(--text-muted)", letterSpacing: "0.06em", fontWeight: 500, lineHeight: 1.5 }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.4rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.5rem" }}>
              Ready to get involved?
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-2)" }}>
              Find your place onstage or behind the scenes.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.85rem" }}>
            <Link to="/productions" className="btn-red">
              <Icon name="Theater" size={14} />
              View Productions
            </Link>
            <Link to="/cabarets" className="btn-outline">
              Explore Cabarets
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
