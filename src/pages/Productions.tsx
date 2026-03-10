import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const DATES = [
  { label: "In-Person Audition", detail: "Friday, Dec. 12", time: "3:00 PM–5:30 PM", location: "Rockland YMCA" },
  { label: "Self-Tape Deadline", detail: "Sunday, Dec. 14", time: "by 12:00 PM", location: "Submitted online" },
  { label: "Rehearsals", detail: "10 rehearsals", time: "2–3 conflicts allowed", location: "TBD" },
  { label: "Tech Nights", detail: "Thu, March 26 & Fri, March 27", time: "Evening", location: "Venue TBD" },
  { label: "Performance #1", detail: "Saturday, March 28", time: "7:30 PM", location: "Venue TBD" },
  { label: "Performance #2", detail: "Sunday, March 29", time: "4:00 PM", location: "Venue TBD" },
];

export default function Productions() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "42vh", minHeight: "360px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,18,0.9) 0%, rgba(26,22,18,0.55) 55%, rgba(26,22,18,0.15) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem 3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(248,245,239,0.5)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(248,245,239,0.3)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(248,245,239,0.7)" }}>Productions</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 4.8rem)", fontWeight: 400, color: "#F8F5EF", lineHeight: 1.04, marginBottom: "0.75rem" }}>
            Upcoming Productions
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(248,245,239,0.65)", maxWidth: "480px", lineHeight: 1.65 }}>
            Teen-led productions, auditions, rehearsals, and performances.
          </p>
        </div>
      </div>

      {/* ── FEATURED PRODUCTION ── */}
      <section style={{ padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>2026 Main-Stage Production</p>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "5.5rem", alignItems: "start" }}>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2, display: "flex", gap: "0.5rem" }}>
                <div style={{ backgroundColor: "var(--gold)", padding: "0.4rem 0.9rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Icon name="Star" size={11} style={{ color: "#fff" }} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
                    Main Stage 2026
                  </span>
                </div>
              </div>
              <div style={{ aspectRatio: "16/10", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-lg)" }} />
            </div>

            {/* Details */}
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "4.2rem", fontWeight: 400, color: "var(--text)", lineHeight: 0.95, marginBottom: "0.5rem" }}>
                Mean Girls
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
                Full Broadway Version
              </p>
              <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.75rem" }} />

              {/* Meta */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                {[
                  { icon: "Users", label: "Cast", value: "All-Teen Cast & Crew" },
                  { icon: "UserCheck", label: "Eligibility", value: "Actors 12–17" },
                  { icon: "MapPin", label: "Location", value: "Rockland County, NY" },
                  { icon: "Calendar", label: "Year", value: "2026" },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <Icon name={icon} size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.73rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: "75px" }}>{label}</span>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", color: "var(--text-2)" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Synopsis */}
              <div style={{ backgroundColor: "var(--bg-surface)", padding: "1.5rem", borderLeft: "3px solid var(--accent)", marginBottom: "2rem" }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.8 }}>
                  Cady Heron may have grown up on an African savanna, but nothing prepared her for suburban Illinois. When she takes on The Plastics and their queen bee Regina George, she learns the hard way that you can't cross a queen bee without getting stung.
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.85rem" }}>
                <a href="#auditions" className="btn-red">
                  <Icon name="ClipboardList" size={14} />
                  Register Your Free Audition
                </a>
                <a href="#dates" className="btn-outline">
                  <Icon name="Calendar" size={13} />
                  Important Dates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDITIONS ── */}
      <section id="auditions" style={{ backgroundColor: "var(--bg-surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Auditions</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)", marginBottom: "3rem" }}>
            Audition Information
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* In-person */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="MapPin" size={16} style={{ color: "var(--accent)" }} />
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "var(--text)" }}>In-Person Auditions</h3>
              </div>
              <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "What to Prepare: 16–32 bar cut from a musical song of your choice",
                  "Scenes will be provided at the audition",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <Icon name="Check" size={13} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-tape */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "var(--gold-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="Video" size={16} style={{ color: "var(--gold)" }} />
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "var(--text)" }}>Self-Tape Auditions</h3>
              </div>
              <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "Slate your full name, age, dream role, and song information before performing",
                  "Prepare only a 16–32 bar cut from a musical song of your choice",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <Icon name="Check" size={13} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATES ── */}
      <section id="dates" style={{ padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Schedule</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)", marginBottom: "3rem" }}>
            Important Dates
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {DATES.map((d, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
                padding: "1.5rem 2rem",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
                backgroundColor: i % 2 === 0 ? "var(--bg-white)" : "transparent",
                alignItems: "center",
              }}>
                <div>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.3rem" }}>
                    {d.label}
                  </p>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "var(--text)" }}>{d.detail}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon name="Clock" size={12} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "var(--text-2)" }}>{d.time}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon name="MapPin" size={12} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "var(--text-2)" }}>{d.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section style={{ backgroundColor: "var(--accent)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.5rem" }}>
              Free Auditions
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
              Register Your Free Audition
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "#fff", color: "var(--accent)",
            fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem",
            fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
            padding: "1rem 2rem", textDecoration: "none",
            transition: "transform 0.15s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,22,18,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <Icon name="ClipboardList" size={15} />
            Register Now — It's Free
          </a>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "4.5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.75rem" }}>
                Stay updated on auditions
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-2)" }}>
                Get updates about productions, rehearsals, and performance dates.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", marginBottom: "0.75rem" }}>
                <input type="email" placeholder="Email Address" className="input-field" style={{ flex: 1, borderRight: "none" }} />
                <button className="btn-red">Sign Up</button>
              </div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                We respect your privacy and you can unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
