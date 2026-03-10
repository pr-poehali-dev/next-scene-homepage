import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const R = { fontFamily: "'Raleway', sans-serif" } as const;

export default function Index() {
  return (
    <Layout>

      {/* ════ HERO ════ */}
      <section style={{ position: "relative", height: "90vh", minHeight: "620px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 20%" }} />
        {/* gradient — half dark, half transparent so photo shows */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.15) 100%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: "700px" }}>

            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", background: "var(--red)", padding: "0.4rem 1rem" }}>
              <Icon name="Star" size={11} style={{ color: "#fff" }} />
              <span style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
                Rockland County's Teen Theater Company
              </span>
            </div>

            <h1 className="fade-up d1" style={{
              ...R, fontWeight: 900,
              fontSize: "clamp(3.5rem, 6vw, 6.2rem)",
              lineHeight: 0.95, letterSpacing: "-0.03em",
              color: "#fff", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              The Next<br />
              Generation<br />
              <span style={{ color: "var(--red)", fontStyle: "italic" }}>of Theater</span>
            </h1>

            <p className="fade-up d2" style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: "490px", marginBottom: "2.5rem" }}>
              A teen-founded and teen-led nonprofit theater company creating productions, performances, and opportunities for young artists in Rockland County.
            </p>

            <div className="fade-up d3" style={{ display: "flex", gap: "1rem" }}>
              <Link to="/productions" className="btn-red">
                <Icon name="Theater" size={14} />
                Upcoming Productions
              </Link>
              <Link to="/about" className="btn-outline-white">
                About Next Scene
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
          background: "var(--red)", padding: "0.8rem 0",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem",
        }}>
          {["Nonprofit Organization", "Est. 2025", "Rockland County, NY", "Teen-Led · Teen-Founded", "No Tuition"].map((t, i) => (
            <span key={i} style={{ ...R, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
              {t}
              {i < 4 && <span style={{ marginLeft: "2rem", opacity: 0.4 }}>◆</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ════ NOW PERFORMING ════ */}
      <section style={{ background: "var(--white)", borderBottom: "1px solid var(--border)", padding: "5.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Featured</p>
              <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1 }}>
                Now Performing & Casting
              </h2>
            </div>
            <Link to="/productions" style={{ ...R, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "gap 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.gap = "0.8rem")}
              onMouseLeave={e => (e.currentTarget.style.gap = "0.4rem")}
            >
              View All <Icon name="ArrowRight" size={13} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>

            {/* Tickets card */}
            <div className="card" style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--red)" }} />
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ background: "var(--red)", color: "#fff", ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", padding: "0.3rem 0.75rem" }}>
                  On Sale Now
                </span>
              </div>
              <h3 style={{ ...R, fontSize: "1.9rem", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "0.85rem" }}>
                Tickets On Sale
              </h3>
              <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Reserve your seats for an unforgettable evening of teen-led theater. Limited availability.
              </p>
              <Link to="/productions" className="btn-red" style={{ padding: "0.7rem 1.5rem", fontSize: "0.68rem" }}>
                <Icon name="Ticket" size={13} />
                Purchase Tickets
              </Link>
            </div>

            {/* Mean Girls card — featured, bigger visual */}
            <div className="card" style={{ padding: "0", overflow: "hidden", position: "relative", gridRow: "span 1" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--gold)" }} />
              <div style={{ height: "180px", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--gold)", padding: "0.28rem 0.7rem" }}>
                  <span style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>2026 Main-Stage</span>
                </div>
              </div>
              <div style={{ padding: "1.75rem 2rem" }}>
                <h3 style={{ ...R, fontSize: "2rem", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1, marginBottom: "0.2rem" }}>
                  Mean Girls
                </h3>
                <p style={{ ...R, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "0.85rem" }}>
                  Full Broadway Version
                </p>
                <p style={{ ...R, fontSize: "0.85rem", color: "var(--ink-2)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  Our 2026 flagship production — all-teen cast and creative team.
                </p>
                <Link to="/productions" className="btn-outline-dark" style={{ padding: "0.65rem 1.35rem", fontSize: "0.68rem" }}>
                  View Production
                </Link>
              </div>
            </div>

            {/* Cabarets card */}
            <div className="card" style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--ink)" }} />
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ background: "var(--bg)", color: "var(--ink-2)", border: "1px solid var(--border)", ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", padding: "0.3rem 0.75rem" }}>
                  Seasonal
                </span>
              </div>
              <h3 style={{ ...R, fontSize: "1.9rem", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "0.85rem" }}>
                Seasonal Cabarets
              </h3>
              <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Themed performances by all-teen casts at venues across Rockland County.
              </p>
              <Link to="/cabarets" className="btn-outline-dark" style={{ padding: "0.7rem 1.5rem", fontSize: "0.68rem" }}>
                Explore Cabarets
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════ ABOUT STRIP ════ */}
      <section style={{ padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "center" }}>

            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", boxShadow: "var(--shadow-lg)" }} />
              {/* Year badge */}
              <div style={{
                position: "absolute", bottom: "-1.25rem", right: "-1.25rem",
                background: "var(--red)", padding: "1.5rem 1.75rem",
                boxShadow: "var(--shadow-lg)",
              }}>
                <p style={{ ...R, fontSize: "2.6rem", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>2025</p>
                <p style={{ ...R, fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>Founded</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>About Next Scene</p>
              <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.0, marginBottom: "0.5rem" }}>
                A Teen-Led
              </h2>
              <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)", fontWeight: 900, fontStyle: "italic", color: "var(--red)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.0, marginBottom: "2rem" }}>
                Theater Nonprofit
              </h2>
              <div className="rule-red" style={{ marginBottom: "2rem" }} />
              <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.85, marginBottom: "2.25rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025. We give young artists the chance to create, lead, and perform — from directing and choreography to stage crew and board leadership.
              </p>
              <Link to="/about" className="btn-outline-dark">
                Learn More <Icon name="ArrowRight" size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ MISSION STATS ════ */}
      <section style={{ background: "var(--ink)", padding: "5.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <p className="eyebrow" style={{ color: "var(--red)", marginBottom: "1rem" }}>Our Mission</p>
              <h2 style={{ ...R, fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                Inclusive.<br />Accessible.<br />
                <span style={{ color: "var(--red)", fontStyle: "italic" }}>Powered by Teens.</span>
              </h2>
            </div>
            <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
              Our mission is to make theater more accessible and inclusive by giving teens the chance to lead, create, and perform in a supportive environment with no tuition. In partnership with the Rockland County YMCA Teens in Action program.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              { num: "1st", label: "Teen Theater Co.\nin Rockland County" },
              { num: "100%", label: "Teen-Led\nOrganization" },
              { num: "$0", label: "Tuition for\nAll Participants" },
              { num: "2025", label: "Year\nFounded" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "2.25rem 2rem",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <p style={{ ...R, fontSize: "3.2rem", fontWeight: 900, color: "var(--red)", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{s.num}</p>
                <p style={{ ...R, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ GET INVOLVED ════ */}
      <section style={{ background: "var(--surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Get Involved</p>
            <h2 style={{ ...R, fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1 }}>
              Find Your Place<br />
              <span style={{ color: "var(--red)", fontStyle: "italic" }}>On or Off Stage</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { num: "01", icon: "Mic2", label: "Perform", desc: "Join productions and live performances. No prior experience required — open to all teens.", accent: "var(--red)" },
              { num: "02", icon: "Clapperboard", label: "Create", desc: "Lead choreography, music direction, stage management, and backstage creative work.", accent: "var(--gold)" },
              { num: "03", icon: "Heart", label: "Support", desc: "Help expand opportunities for young artists through donations, sponsorship, or volunteering.", accent: "var(--ink)" },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "2.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: item.accent }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: "50px", height: "50px",
                    border: `2px solid ${item.accent}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name={item.icon} size={20} style={{ color: item.accent }} />
                  </div>
                  <span style={{ ...R, fontSize: "5rem", fontWeight: 900, color: "rgba(17,17,17,0.05)", lineHeight: 1, letterSpacing: "-0.04em" }}>{item.num}</span>
                </div>
                <h3 style={{ ...R, fontSize: "2rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.85rem" }}>{item.label}</h3>
                <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ NEWSLETTER ════ */}
      <section style={{ background: "var(--white)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Stay Updated</p>
              <h2 style={{ ...R, fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "1rem" }}>
                Join Our<br />Mailing List
              </h2>
              <p style={{ ...R, fontSize: "0.95rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.75 }}>
                Get updates about productions, auditions, cabarets, and performances.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", marginBottom: "0.75rem" }}>
                <input type="email" placeholder="Your Email Address" className="inp" style={{ flex: 1, borderRight: "none" }} />
                <button className="btn-red">Sign Up</button>
              </div>
              <p style={{ ...R, fontSize: "0.72rem", fontWeight: 500, color: "var(--ink-3)" }}>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
