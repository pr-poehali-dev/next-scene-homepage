import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";
const R = { fontFamily: "'Raleway', sans-serif" } as const;

const DATES = [
  { label: "In-Person Audition", date: "Friday, Dec. 12", time: "3:00 PM–5:30 PM", location: "Rockland YMCA" },
  { label: "Self-Tape Deadline", date: "Sunday, Dec. 14", time: "By 12:00 PM", location: "Submitted online" },
  { label: "Rehearsals Begin", date: "10 Rehearsals", time: "2–3 conflicts allowed", location: "TBD" },
  { label: "Tech Night 1", date: "Thursday, March 26", time: "Evening", location: "Venue TBD" },
  { label: "Tech Night 2", date: "Friday, March 27", time: "Evening", location: "Venue TBD" },
  { label: "Performance #1", date: "Saturday, March 28", time: "7:30 PM", location: "Venue TBD" },
  { label: "Performance #2", date: "Sunday, March 29", time: "4:00 PM", location: "Venue TBD" },
];

export default function Productions() {
  return (
    <Layout>

      {/* HERO */}
      <div style={{ position: "relative", height: "44vh", minHeight: "360px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.55) 55%, rgba(17,17,17,0.15) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Productions</span>
          </div>
          <h1 style={{ ...R, fontSize: "clamp(3rem, 5.5vw, 5.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "0.75rem" }}>
            Upcoming<br />Productions
          </h1>
          <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.55)", maxWidth: "420px", lineHeight: 1.65 }}>
            Teen-led productions, auditions, rehearsals, and performances.
          </p>
        </div>
      </div>

      {/* MAIN PRODUCTION */}
      <section style={{ background: "var(--white)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>2026 Main-Stage Production</p>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "6rem", alignItems: "start" }}>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2, background: "var(--gold)", padding: "0.4rem 0.95rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Icon name="Star" size={11} style={{ color: "#fff" }} />
                <span style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>Main Stage 2026</span>
              </div>
              <div style={{ aspectRatio: "16/10", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-lg)" }} />
            </div>

            {/* Info */}
            <div>
              <h2 style={{ ...R, fontSize: "4.5rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "0.5rem" }}>
                Mean Girls
              </h2>
              <p style={{ ...R, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "1.5rem" }}>
                Full Broadway Version
              </p>
              <div style={{ height: "2px", background: "var(--ink)", marginBottom: "1.75rem" }} />

              {/* Meta */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.75rem" }}>
                {[
                  { icon: "Users", label: "Cast", value: "All-Teen Cast & Crew" },
                  { icon: "UserCheck", label: "Eligibility", value: "Actors 12–17" },
                  { icon: "MapPin", label: "Location", value: "Rockland County, NY" },
                  { icon: "Calendar", label: "Year", value: "2026 Season" },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <Icon name={icon} size={13} style={{ color: "var(--red)", flexShrink: 0 }} />
                    <span style={{ ...R, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", minWidth: "80px" }}>{label}</span>
                    <span style={{ ...R, fontSize: "0.88rem", fontWeight: 600, color: "var(--ink-2)" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Synopsis */}
              <div style={{ background: "var(--surface)", padding: "1.5rem", borderLeft: "4px solid var(--red)", marginBottom: "2rem" }}>
                <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.8 }}>
                  Cady Heron may have grown up on an African savanna, but nothing prepared her for suburban Illinois. When she takes on The Plastics and their queen bee Regina George, she learns the hard way that you can't cross a queen bee without getting stung.
                </p>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#auditions" className="btn-red">
                  <Icon name="ClipboardList" size={14} />
                  Register Audition
                </a>
                <a href="#dates" className="btn-outline-dark">
                  <Icon name="Calendar" size={13} />
                  Important Dates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITIONS */}
      <section id="auditions" style={{ background: "var(--surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Auditions</p>
          <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "3rem" }}>
            Audition Information
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              {
                icon: "MapPin", iconColor: "var(--red)", label: "In-Person Auditions",
                items: [
                  "What to Prepare: 16–32 bar cut from a musical song of your choice",
                  "Scenes will be provided at the audition",
                ],
              },
              {
                icon: "Video", iconColor: "var(--gold)", label: "Self-Tape Auditions",
                items: [
                  "Slate your full name, age, dream role, and song information before performing",
                  "Prepare only a 16–32 bar cut from a musical song of your choice",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="card" style={{ padding: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "44px", height: "44px", background: i === 0 ? "var(--red-light)" : "var(--gold-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={block.icon} size={18} style={{ color: block.iconColor }} />
                  </div>
                  <h3 style={{ ...R, fontSize: "1.35rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{block.label}</h3>
                </div>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                      <Icon name="Check" size={13} style={{ color: block.iconColor, flexShrink: 0, marginTop: "3px" }} />
                      <span style={{ ...R, fontSize: "0.88rem", fontWeight: 500, color: "var(--ink-2)", lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATES */}
      <section id="dates" style={{ background: "var(--white)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Schedule</p>
          <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "3rem" }}>
            Important Dates
          </h2>

          {/* Table */}
          <div style={{ border: "2px solid var(--ink)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "0.75rem 2rem", background: "var(--ink)" }}>
              {["Event", "Time", "Location"].map(h => (
                <span key={h} style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{h}</span>
              ))}
            </div>
            {DATES.map((d, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
                padding: "1.5rem 2rem", alignItems: "center",
                borderTop: "1px solid var(--border)",
                background: i % 2 === 0 ? "transparent" : "rgba(17,17,17,0.02)",
              }}>
                <div>
                  <p style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.25rem" }}>{d.label}</p>
                  <p style={{ ...R, fontSize: "1.05rem", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em" }}>{d.date}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon name="Clock" size={12} style={{ color: "var(--ink-3)" }} />
                  <span style={{ ...R, fontSize: "0.85rem", fontWeight: 600, color: "var(--ink-2)" }}>{d.time}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon name="MapPin" size={12} style={{ color: "var(--ink-3)" }} />
                  <span style={{ ...R, fontSize: "0.85rem", fontWeight: 600, color: "var(--ink-2)" }}>{d.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section style={{ background: "var(--red)", padding: "5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "0.6rem" }}>Free Auditions Open</p>
            <h2 style={{ ...R, fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1 }}>
              Register Your Free Audition
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "#fff", color: "var(--red)",
            ...R, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "1rem 2.25rem", textDecoration: "none",
            transition: "transform 0.15s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(17,17,17,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <Icon name="ClipboardList" size={15} />
            Register Now — It's Free
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "4.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <h2 style={{ ...R, fontSize: "2rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.75rem" }}>
                Stay Updated on Auditions
              </h2>
              <p style={{ ...R, fontSize: "0.9rem", fontWeight: 400, color: "var(--ink-2)" }}>
                Get updates about productions, rehearsals, and performance dates.
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
