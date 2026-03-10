import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

export default function Index() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "88vh", minHeight: "660px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 25%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(14,15,18,0.93) 0%, rgba(14,15,18,0.72) 45%, rgba(14,15,18,0.28) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem", width: "100%" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="animate-reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "32px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="section-label">Rockland County · Est. 2025</span>
            </div>

            <h1 className="animate-reveal delay-100" style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.4rem, 5.5vw, 5.6rem)",
              fontWeight: 400, lineHeight: 1.04,
              color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "1.5rem",
            }}>
              The Next Generation<br />of Theater<br />
              <em style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>Starts Here</em>
            </h1>

            <p className="animate-reveal delay-200" style={{
              fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300,
              color: "rgba(245,241,232,0.72)", lineHeight: 1.75, maxWidth: "500px", marginBottom: "2.5rem",
            }}>
              A teen-founded and teen-led nonprofit theater company creating productions, performances, and opportunities for young artists in Rockland County.
            </p>

            <div className="animate-reveal delay-300" style={{ display: "flex", gap: "0.9rem" }}>
              <Link to="/productions" className="btn-red">
                <Icon name="Theater" size={14} />
                Upcoming Productions
              </Link>
              <Link to="/about" className="btn-ghost">
                About Next Scene
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, transparent, rgba(245,241,232,0.25))" }} />
          <Icon name="ChevronDown" size={13} style={{ color: "rgba(245,241,232,0.25)" }} />
        </div>
      </section>

      {/* ── FEATURED ANNOUNCEMENT ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.6rem" }}>Featured</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.6rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1 }}>
                Now Performing and Casting
              </h2>
            </div>
            <Link to="/productions" className="btn-text">
              View All <Icon name="ArrowRight" size={13} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {/* Card 1 */}
            <div className="promo-card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--accent)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--accent-dim)", padding: "0.35rem 0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>On Sale Now</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "var(--text-primary)", lineHeight: 1.15, marginBottom: "0.75rem" }}>Tickets On Sale</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                See our latest performance and reserve your seats for an unforgettable evening of teen-led theater.
              </p>
              <Link to="/productions" className="btn-red" style={{ padding: "0.65rem 1.4rem" }}>
                <Icon name="Ticket" size={13} />
                Purchase Tickets
              </Link>
            </div>

            {/* Card 2 */}
            <div className="promo-card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--gold)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(201,149,42,0.12)", padding: "0.35rem 0.75rem", marginBottom: "1.5rem" }}>
                <Icon name="Star" size={11} style={{ color: "var(--gold)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>2026 Main-Stage</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "var(--text-primary)", lineHeight: 1.15, marginBottom: "0.3rem" }}>Mean Girls</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Full Broadway Version</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                Our upcoming flagship production performed by an all-teen cast and crew.
              </p>
              <Link to="/productions" className="btn-ghost" style={{ padding: "0.65rem 1.4rem" }}>
                View Production
              </Link>
            </div>

            {/* Card 3 */}
            <div className="promo-card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "var(--bg-surface3)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(245,241,232,0.06)", padding: "0.35rem 0.75rem", marginBottom: "1.5rem" }}>
                <Icon name="Music" size={11} style={{ color: "var(--text-secondary)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>Seasonal</span>
              </div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", color: "var(--text-primary)", lineHeight: 1.15, marginBottom: "0.75rem" }}>Seasonal Cabarets</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                Themed performances by all-teen casts across Rockland County venues.
              </p>
              <Link to="/cabarets" className="btn-ghost" style={{ padding: "0.65rem 1.4rem" }}>
                Explore Cabarets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "3/4", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top" }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", backgroundColor: "var(--accent)", padding: "1.75rem 2rem" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>2025</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.3rem" }}>Founded</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>About Next Scene</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "1.75rem" }}>
                A teen-led theater<br /><em style={{ color: "var(--text-secondary)" }}>nonprofit</em>
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "1.75rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.97rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Next Scene NY is the first teen-founded and teen-led nonprofit theater company in Rockland County, established in 2025. We give young artists the chance to create, lead, and perform while taking part in every aspect of production — from directing and choreography to stage crew and creative teams.
              </p>
              <Link to="/about" className="btn-ghost">
                Learn More About Us <Icon name="ArrowRight" size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Our Mission</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3vw, 3rem)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15 }}>
                Inclusive. Accessible.<br /><em style={{ color: "var(--accent-soft)" }}>Powered by teens.</em>
              </h2>
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.85 }}>
              Our mission is to make theater more accessible and inclusive by giving teens the chance to lead, create, and perform in a supportive environment with no tuition. We work with the Rockland County YMCA and their Teens in Action program to expand opportunities for youth involvement.
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
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.73rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section style={{ padding: "5.5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Get Involved</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--text-primary)" }}>
              Find your place onstage or<br /><em style={{ color: "var(--text-secondary)" }}>behind the scenes</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--border)" }}>
            {[
              { num: "01", icon: "Mic2", label: "Perform", desc: "Join productions and live performances. No prior experience required — open to all teens.", color: "var(--accent)" },
              { num: "02", icon: "Clapperboard", label: "Create", desc: "Help lead choreography, music direction, stage management, and creative work behind the scenes.", color: "var(--gold)" },
              { num: "03", icon: "Heart", label: "Support", desc: "Help expand opportunities for young artists through donations, sponsorship, or partnership.", color: "var(--text-secondary)" },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "var(--bg-surface)", padding: "3rem 2.5rem", transition: "background-color 0.2s", cursor: "default" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface2)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: "46px", height: "46px", border: `1px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={item.icon} size={18} style={{ color: item.color }} />
                  </div>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "4rem", color: "rgba(245,241,232,0.04)", lineHeight: 1 }}>{item.num}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "var(--text-primary)", marginBottom: "0.85rem" }}>{item.label}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Stay Updated</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 3vw, 3rem)", fontWeight: 400, color: "var(--text-primary)", marginBottom: "1rem" }}>
                Join Our Mailing List
              </h2>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Get updates about productions, auditions, cabarets, and performances.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", marginBottom: "0.85rem" }}>
                <input type="email" placeholder="Email Address" className="input-dark" style={{ flex: 1, borderRight: "none" }} />
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
