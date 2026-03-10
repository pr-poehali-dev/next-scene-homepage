import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

export default function Index() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "88vh", minHeight: "640px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 22%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(26,22,18,0.88) 0%, rgba(26,22,18,0.65) 45%, rgba(26,22,18,0.2) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem", width: "100%" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="animate-reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "28px", height: "2px", backgroundColor: "var(--accent-soft)" }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-soft)" }}>
                Rockland County · Est. 2025
              </span>
            </div>
            <h1 className="animate-reveal delay-100" style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.4rem, 5.5vw, 5.8rem)",
              fontWeight: 400, lineHeight: 1.04,
              color: "#F8F5EF", letterSpacing: "-0.01em", marginBottom: "1.5rem",
            }}>
              The Next Generation<br />of Theater<br />
              <em style={{ color: "var(--accent-soft)" }}>Starts Here</em>
            </h1>
            <p className="animate-reveal delay-200" style={{
              fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300,
              color: "rgba(248,245,239,0.72)", lineHeight: 1.75, maxWidth: "500px", marginBottom: "2.5rem",
            }}>
              A teen-founded and teen-led nonprofit theater company creating productions, performances, and opportunities for young artists in Rockland County.
            </p>
            <div className="animate-reveal delay-300" style={{ display: "flex", gap: "0.85rem" }}>
              <Link to="/productions" className="btn-red">
                <Icon name="Theater" size={14} />
                Upcoming Productions
              </Link>
              <Link to="/about" style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                color: "rgba(248,245,239,0.88)", fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", padding: "0.78rem 1.75rem",
                border: "1.5px solid rgba(248,245,239,0.3)",
                transition: "border-color 0.2s", textDecoration: "none",
              }}>
                About Next Scene
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ANNOUNCEMENT ── */}
      <section style={{ backgroundColor: "var(--bg-white)", borderBottom: "1px solid var(--border)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.6rem" }}>Featured</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 400, color: "var(--text)", lineHeight: 1 }}>
                Now Performing and Casting
              </h2>
            </div>
            <Link to="/productions" className="btn-text">View All <Icon name="ArrowRight" size={13} /></Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {/* Card 1 — Tickets */}
            <div className="card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--accent)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--accent-dim)", padding: "0.32rem 0.75rem", marginBottom: "1.4rem" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>On Sale Now</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "var(--text)", lineHeight: 1.15, marginBottom: "0.75rem" }}>Tickets On Sale</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                See our latest performance and reserve your seats for an unforgettable evening of teen-led theater.
              </p>
              <Link to="/productions" className="btn-red" style={{ padding: "0.65rem 1.35rem" }}>
                <Icon name="Ticket" size={13} />
                Purchase Tickets
              </Link>
            </div>

            {/* Card 2 — Mean Girls */}
            <div className="card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--gold)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--gold-dim)", padding: "0.32rem 0.75rem", marginBottom: "1.4rem" }}>
                <Icon name="Star" size={11} style={{ color: "var(--gold)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>2026 Main-Stage</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "var(--text)", lineHeight: 1.15, marginBottom: "0.25rem" }}>Mean Girls</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Full Broadway Version</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                Our upcoming flagship production performed by an all-teen cast and crew.
              </p>
              <Link to="/productions" className="btn-outline" style={{ padding: "0.65rem 1.35rem" }}>
                View Production
              </Link>
            </div>

            {/* Card 3 — Cabarets */}
            <div className="card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--bg-surface2)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(26,26,26,0.05)", padding: "0.32rem 0.75rem", marginBottom: "1.4rem" }}>
                <Icon name="Music" size={11} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Seasonal</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "var(--text)", lineHeight: 1.15, marginBottom: "0.75rem" }}>Seasonal Cabarets</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                Themed performances by all-teen casts across Rockland County venues.
              </p>
              <Link to="/cabarets" className="btn-outline" style={{ padding: "0.65rem 1.35rem" }}>
                Explore Cabarets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: "6.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "7rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "3/4", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", boxShadow: "var(--shadow-lg)" }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", backgroundColor: "var(--accent)", padding: "1.75rem 2rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.6rem", color: "#fff", lineHeight: 1 }}>2025</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.3rem" }}>Founded</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>About</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.75rem" }}>
                A teen-led theater<br /><em style={{ color: "var(--text-2)" }}>nonprofit</em>
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "1.75rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.97rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025. We give young artists the chance to create, lead, and perform while taking part in every aspect of production — from directing and choreography to stage crew and creative teams.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us <Icon name="ArrowRight" size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Our Mission</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3vw, 3rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.15 }}>
                Inclusive. Accessible.<br /><em style={{ color: "var(--accent)" }}>Powered by teens.</em>
              </h2>
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.85 }}>
              Our mission is to make theater more accessible and inclusive by giving teens the chance to lead, create, and perform in a supportive environment with no tuition. In partnership with the Rockland County YMCA's Teens in Action program.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border)" }}>
            {[
              { num: "1st", label: "In Rockland County" },
              { num: "100%", label: "Teen-Led Operations" },
              { num: "$0", label: "Tuition for Participants" },
              { num: "2025", label: "Year Founded" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "2.25rem 2rem", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", color: "var(--accent)", lineHeight: 1, marginBottom: "0.5rem" }}>{item.num}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section style={{ padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Get Involved</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--text)" }}>
              Find your place onstage or<br /><em style={{ color: "var(--text-2)" }}>behind the scenes</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {[
              { num: "01", icon: "Mic2", label: "Perform", desc: "Join productions and live performances. No prior experience required — open to all teens.", color: "var(--accent)" },
              { num: "02", icon: "Clapperboard", label: "Create", desc: "Help lead choreography, music direction, stage management, and creative work.", color: "var(--gold)" },
              { num: "03", icon: "Heart", label: "Support", desc: "Help expand opportunities for young artists through donations, sponsorship, or partnership.", color: "var(--text-muted)" },
            ].map((item, i) => (
              <div key={i} className="card-warm" style={{ padding: "2.75rem 2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: "46px", height: "46px", border: `1.5px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={item.icon} size={18} style={{ color: item.color }} />
                  </div>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "4rem", color: "rgba(26,26,26,0.06)", lineHeight: 1 }}>{item.num}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.9rem", color: "var(--text)", marginBottom: "0.85rem" }}>{item.label}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Stay Updated</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--text)", marginBottom: "1rem" }}>
                Join Our Mailing List
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-2)", lineHeight: 1.75 }}>
                Get updates about productions, auditions, cabarets, and performances.
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
