import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const CABARETS = [
  {
    season: "Summer 2025",
    title: "Inaugural Cabaret",
    theme: "Broadway Favorites",
    date: "Summer 2025",
    venue: "Rockland County YMCA",
    status: "past",
    desc: "Our first-ever cabaret performance featuring a teen cast performing beloved Broadway numbers.",
  },
  {
    season: "Fall 2025",
    title: "Fall Cabaret",
    theme: "Coming Soon",
    date: "Fall 2025",
    venue: "Rockland County",
    status: "upcoming",
    desc: "Details coming soon. Join our mailing list to be the first to know.",
  },
  {
    season: "Winter 2025",
    title: "Holiday Cabaret",
    theme: "Coming Soon",
    date: "Winter 2025",
    venue: "Rockland County",
    status: "upcoming",
    desc: "A seasonal celebration of music and performance. Tickets coming soon.",
  },
];

export default function Cabarets() {
  return (
    <Layout>

      {/* ── PAGE HERO ── */}
      <div style={{ position: "relative", height: "45vh", minHeight: "380px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,15,18,1) 0%, rgba(14,15,18,0.65) 60%, rgba(14,15,18,0.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem 3.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Link to="/" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(245,241,232,0.5)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(245,241,232,0.3)" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "rgba(245,241,232,0.7)" }}>Cabarets</span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5vw, 4.8rem)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.04, marginBottom: "0.75rem" }}>
            Seasonal Cabarets
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(245,241,232,0.6)", maxWidth: "520px", lineHeight: 1.7 }}>
            Themed performances by all-teen casts across Rockland County venues throughout the year.
          </p>
        </div>
      </div>

      {/* ── WHAT IS A CABARET ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "4.5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>About Cabarets</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.6rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Intimate. Themed.<br /><em style={{ color: "var(--accent-soft)" }}>All-teen performances.</em>
              </h2>
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.85 }}>
              Our cabarets are seasonal performances featuring an all-teen cast performing curated sets around a central theme. More intimate than our main-stage productions, cabarets are a showcase of raw talent, energy, and youth creativity in venues across Rockland County. Each cabaret is directed, choreographed, and performed entirely by teens.
            </p>
          </div>
        </div>
      </section>

      {/* ── CABARETS LIST ── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CABARETS.map((c, i) => (
              <div key={i} className="promo-card" style={{ padding: "0", overflow: "hidden", display: "grid", gridTemplateColumns: "280px 1fr" }}>
                {/* Image */}
                <div style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                  {c.status === "past" ? (
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "rgba(14,15,18,0.8)", padding: "0.3rem 0.75rem" }}>
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Past</span>
                    </div>
                  ) : (
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "var(--accent)", padding: "0.3rem 0.75rem" }}>
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Upcoming</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                      <div>
                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                          {c.season}
                        </p>
                        <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "var(--text-primary)", lineHeight: 1 }}>{c.title}</h3>
                      </div>
                      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }}>{c.theme}</span>
                    </div>

                    <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />

                    <div style={{ display: "flex", gap: "2.5rem", marginBottom: "1.25rem" }}>
                      {[
                        { icon: "Calendar", label: c.date },
                        { icon: "MapPin", label: c.venue },
                      ].map(({ icon, label }) => (
                        <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <Icon name={icon} size={12} style={{ color: "var(--accent)" }} />
                          <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "var(--text-secondary)" }}>{label}</span>
                        </div>
                      ))}
                    </div>

                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.75 }}>{c.desc}</p>
                  </div>

                  <div style={{ marginTop: "1.75rem" }}>
                    {c.status === "upcoming" ? (
                      <a href="#" className="btn-red" style={{ padding: "0.65rem 1.4rem" }}>
                        <Icon name="Ticket" size={13} />
                        Get Tickets
                      </a>
                    ) : (
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                        Performance completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER STRIP ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Don't miss the next cabaret
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)" }}>
              Join our mailing list to get notified about upcoming dates, tickets, and auditions.
            </p>
          </div>
          <div>
            <div style={{ display: "flex", marginBottom: "0.75rem" }}>
              <input type="email" placeholder="Email Address" className="input-dark" style={{ flex: 1, borderRight: "none" }} />
              <button className="btn-red">Sign Up</button>
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-muted)" }}>
              We respect your privacy and you can unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
