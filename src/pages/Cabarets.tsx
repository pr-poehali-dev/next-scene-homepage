import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

export default function Cabarets() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "42vh", minHeight: "360px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,18,0.9) 0%, rgba(26,22,18,0.55) 55%, rgba(26,22,18,0.15) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem 3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(248,245,239,0.5)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(248,245,239,0.3)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(248,245,239,0.7)" }}>Cabarets</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 4.8rem)", fontWeight: 400, color: "#F8F5EF", lineHeight: 1.04, marginBottom: "0.75rem" }}>
            Cabarets
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(248,245,239,0.65)", maxWidth: "480px", lineHeight: 1.65 }}>
            Seasonal performances by all-teen casts across Rockland County.
          </p>
        </div>
      </div>

      {/* ── MAIN SECTION ── */}
      <section style={{ padding: "6.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "start" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>What Are Cabarets</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.1, marginBottom: "2rem" }}>
                Perform in our<br />
                <em style={{ color: "var(--accent)" }}>seasonal cabarets</em>
              </h2>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: "MapPin", text: "Held at libraries, community spaces, and local venues across Rockland County" },
                  { icon: "Music", text: "Live music performances by all-teen casts" },
                  { icon: "Calendar", text: "Each spring and fall — regular performance opportunities" },
                  { icon: "Heart", text: "Supporting community-focused causes" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <div style={{ width: "34px", height: "34px", flexShrink: 0, backgroundColor: "var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={icon} size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.65, paddingTop: "0.5rem" }}>{text}</p>
                  </div>
                ))}
              </div>

              <a href="#register" className="btn-red">
                <Icon name="ClipboardList" size={14} />
                Register Now
              </a>
            </div>

            <div style={{ paddingTop: "1rem" }}>
              {/* Feature image */}
              <div style={{ aspectRatio: "4/3", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1.5rem", boxShadow: "var(--shadow-lg)" }} />

              {/* Description */}
              <div style={{ backgroundColor: "var(--bg-surface)", padding: "1.75rem 2rem", borderLeft: "3px solid var(--accent)" }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.85, marginBottom: "1rem" }}>
                  Participate in one of our seasonal cabarets. Held each spring and fall at libraries, community spaces, and local venues across Rockland County, these performances feature all-teen casts sharing themed programs of live music with the public.
                </p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.85 }}>
                  Each cabaret presents a different theme and repertoire, offering students regular opportunities to perform while supporting community-focused causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING CABARETS ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Season 2025</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)" }}>
                Upcoming Cabarets
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {[
              {
                status: "past",
                season: "Summer 2025",
                title: "Inaugural Cabaret",
                theme: "Broadway Favorites",
                venue: "Rockland County YMCA",
                desc: "Our first-ever cabaret performance featuring a teen cast performing beloved Broadway numbers.",
              },
              {
                status: "upcoming",
                season: "Fall 2025",
                title: "Fall Cabaret",
                theme: "Coming Soon",
                venue: "Rockland County",
                desc: "Details coming soon. Join our mailing list to be the first to know about dates and repertoire.",
              },
              {
                status: "upcoming",
                season: "Winter 2025",
                title: "Holiday Cabaret",
                theme: "Coming Soon",
                venue: "Rockland County",
                desc: "A seasonal celebration of music and performance. Tickets and details coming soon.",
              },
            ].map((c, i) => (
              <div key={i} className="card" style={{ overflow: "hidden", position: "relative" }}>
                {/* Status badge */}
                <div style={{ position: "relative" }}>
                  <div style={{ height: "180px", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{
                    position: "absolute", top: "1rem", left: "1rem",
                    backgroundColor: c.status === "upcoming" ? "var(--accent)" : "rgba(26,22,18,0.7)",
                    padding: "0.3rem 0.8rem",
                  }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
                      {c.status === "upcoming" ? "Upcoming" : "Past"}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.63rem", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.35rem" }}>{c.season}</p>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "var(--text)", marginBottom: "0.2rem", lineHeight: 1.1 }}>{c.title}</h3>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: c.status === "upcoming" ? "var(--accent)" : "var(--text-muted)", fontStyle: "italic", marginBottom: "1rem" }}>{c.theme}</p>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{c.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon name="MapPin" size={12} style={{ color: "var(--text-muted)" }} />
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "var(--text-muted)" }}>{c.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section id="register" style={{ backgroundColor: "var(--accent)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>
              Open Enrollment
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
              Ready to perform?<br />
              <em>Register for the next cabaret.</em>
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
            Register Now
          </a>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "4.5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.75rem" }}>
                Don't miss the next cabaret
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-2)" }}>
                Join our mailing list to get notified about upcoming dates, tickets, and auditions.
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
