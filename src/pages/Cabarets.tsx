import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";
const R = { fontFamily: "'Raleway', sans-serif" } as const;

const SHOWS = [
  { status: "past",     season: "Summer 2025", title: "Inaugural Cabaret", theme: "Broadway Favorites", venue: "Rockland County YMCA",   desc: "Our first-ever cabaret performance featuring a teen cast performing beloved Broadway numbers." },
  { status: "upcoming", season: "Fall 2025",   title: "Fall Cabaret",      theme: "Coming Soon",        venue: "Rockland County",         desc: "Details coming soon. Join our mailing list to be the first to know about dates and repertoire." },
  { status: "upcoming", season: "Winter 2025", title: "Holiday Cabaret",   theme: "Coming Soon",        venue: "Rockland County",         desc: "A seasonal celebration of music and performance. Tickets and details coming soon." },
];

export default function Cabarets() {
  return (
    <Layout>

      {/* HERO */}
      <div style={{ position: "relative", height: "44vh", minHeight: "360px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.55) 55%, rgba(17,17,17,0.15) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Cabarets</span>
          </div>
          <h1 style={{ ...R, fontSize: "clamp(3rem, 5.5vw, 5.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "0.75rem" }}>
            Cabarets
          </h1>
          <p style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.65 }}>
            Seasonal performances by all-teen casts across Rockland County.
          </p>
        </div>
      </div>

      {/* WHAT ARE CABARETS */}
      <section style={{ background: "var(--white)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "7rem", alignItems: "start" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>What Are Cabarets</p>
              <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, marginBottom: "2rem" }}>
                Perform in Our<br />
                <span style={{ color: "var(--red)", fontStyle: "italic" }}>Seasonal Cabarets</span>
              </h2>
              <div className="rule-red" style={{ marginBottom: "2rem" }} />

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: "MapPin",   text: "Held at libraries, community spaces, and local venues across Rockland County" },
                  { icon: "Music",    text: "Live music performances by all-teen casts" },
                  { icon: "Calendar", text: "Each spring and fall — regular performance opportunities" },
                  { icon: "Heart",    text: "Supporting community-focused causes" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <div style={{ width: "36px", height: "36px", flexShrink: 0, background: "var(--red-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={icon} size={15} style={{ color: "var(--red)" }} />
                    </div>
                    <p style={{ ...R, fontSize: "0.9rem", fontWeight: 500, color: "var(--ink-2)", lineHeight: 1.65, paddingTop: "0.5rem" }}>{text}</p>
                  </div>
                ))}
              </div>

              <a href="#register" className="btn-red">
                <Icon name="ClipboardList" size={14} />
                Register Now
              </a>
            </div>

            {/* Right side */}
            <div>
              <div style={{ aspectRatio: "4/3", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-lg)", marginBottom: "1.75rem" }} />
              <div style={{ background: "var(--surface)", padding: "1.75rem 2rem", borderLeft: "4px solid var(--red)" }}>
                <p style={{ ...R, fontSize: "0.92rem", fontWeight: 500, color: "var(--ink-2)", lineHeight: 1.85, marginBottom: "1rem" }}>
                  Participate in one of our seasonal cabarets. Held each spring and fall at libraries, community spaces, and local venues across Rockland County, these performances feature all-teen casts sharing themed programs of live music with the public.
                </p>
                <p style={{ ...R, fontSize: "0.92rem", fontWeight: 500, color: "var(--ink-2)", lineHeight: 1.85 }}>
                  Each cabaret presents a different theme and repertoire, offering students regular opportunities to perform while supporting community-focused causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section style={{ background: "var(--surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Season 2025</p>
              <h2 style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1 }}>
                Upcoming Cabarets
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {SHOWS.map((s, i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                {/* Photo with badge */}
                <div style={{ position: "relative", height: "190px", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: s.status === "past" ? "rgba(17,17,17,0.45)" : "rgba(17,17,17,0.25)",
                  }} />
                  <div style={{
                    position: "absolute", top: "1rem", left: "1rem",
                    background: s.status === "upcoming" ? "var(--red)" : "rgba(17,17,17,0.75)",
                    padding: "0.3rem 0.85rem",
                  }}>
                    <span style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>
                      {s.status === "upcoming" ? "Upcoming" : "Past"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem 2rem" }}>
                  <p style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "0.3rem" }}>{s.season}</p>
                  <h3 style={{ ...R, fontSize: "1.6rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, marginBottom: "0.2rem" }}>{s.title}</h3>
                  <p style={{ ...R, fontSize: "0.72rem", fontWeight: 700, color: s.status === "upcoming" ? "var(--red)" : "var(--ink-3)", fontStyle: "italic", marginBottom: "1rem" }}>{s.theme}</p>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                  <p style={{ ...R, fontSize: "0.85rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon name="MapPin" size={12} style={{ color: "var(--ink-3)" }} />
                    <span style={{ ...R, fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)" }}>{s.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section id="register" style={{ background: "var(--red)", padding: "5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "0.6rem" }}>Open Enrollment</p>
            <h2 style={{ ...R, fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1 }}>
              Ready to Perform?<br />
              <span style={{ fontStyle: "italic" }}>Register for the Next Cabaret.</span>
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
            Register Now
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "4.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <h2 style={{ ...R, fontSize: "2rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.75rem" }}>
                Don't Miss the Next Cabaret
              </h2>
              <p style={{ ...R, fontSize: "0.9rem", fontWeight: 400, color: "var(--ink-2)" }}>
                Join our mailing list to get notified about upcoming dates, tickets, and auditions.
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
