import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";
const R = { fontFamily: "'Raleway', sans-serif" } as const;

const AMOUNTS = [
  { value: "$25",  label: "Supporter",    desc: "Covers rehearsal supplies for one production" },
  { value: "$50",  label: "Patron",       desc: "Helps fund a full cabaret performance evening" },
  { value: "$100", label: "Benefactor",   desc: "Sponsors a student's entire season of shows" },
  { value: "$250", label: "Champion",     desc: "Funds production materials for a main-stage show" },
];

const WHY = [
  { icon: "DollarSign", title: "No Tuition. Ever.", desc: "Every dollar donated ensures we can keep participation free for all teen artists regardless of financial background." },
  { icon: "Users",      title: "Teen-Led, Teen-Run", desc: "Your gift directly supports the young people who direct, perform, choreograph, and manage every production." },
  { icon: "Theater",    title: "Main-Stage Quality", desc: "Donations fund professional-quality productions — from costumes and lighting to sound and venue rental." },
  { icon: "MapPin",     title: "Community Impact",   desc: "We bring live theater to Rockland County audiences and give local teens a platform to shine." },
];

export default function Donate() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <div style={{ position: "relative", minHeight: "52vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 25%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(19,17,56,0.93) 0%, rgba(19,17,56,0.78) 50%, rgba(19,17,56,0.3) 100%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%", padding: "6rem 2.5rem 6rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem" }}>
            <Link to="/" style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <Icon name="ChevronRight" size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ ...R, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Donate</span>
          </div>

          <div style={{ maxWidth: "680px" }}>
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", background: "var(--sky)", padding: "0.4rem 1rem" }}>
              <Icon name="Heart" size={11} style={{ color: "#fff" }} />
              <span style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
                Support the Mission
              </span>
            </div>

            <h1 className="fade-up d1" style={{
              ...R, fontWeight: 900,
              fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)",
              lineHeight: 0.95, letterSpacing: "-0.03em",
              color: "#fff", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Give a Teen<br />
              <span style={{ color: "var(--sky)", fontStyle: "italic" }}>Their Moment</span><br />
              on Stage
            </h1>

            <p className="fade-up d2" style={{ ...R, fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: "520px", marginBottom: "2.5rem" }}>
              Next Scene NY is a 100% free nonprofit theater company for teens. Your donation keeps it that way — funding productions, performances, and the next generation of artists.
            </p>

            <div className="fade-up d3" style={{ display: "flex", gap: "1rem" }}>
              <a href="#donate-form" className="btn-red">
                <Icon name="Heart" size={14} />
                Donate Now
              </a>
              <a href="#why-donate" className="btn-outline-white">
                Why It Matters
              </a>
            </div>
          </div>
        </div>

        {/* Bottom navy strip */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
          background: "var(--navy)", padding: "0.8rem 0",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem",
        }}>
          {["501(c)(3) Nonprofit", "100% Free for Teens", "Rockland County, NY", "Est. 2025", "All Donations Tax-Deductible"].map((t, i) => (
            <span key={i} style={{ ...R, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
              {t}
              {i < 4 && <span style={{ marginLeft: "2rem", opacity: 0.3 }}>◆</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY DONATE ── */}
      <section id="why-donate" style={{ background: "var(--white)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "7rem", alignItems: "start" }}>

            {/* Left heading */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Why Your Gift Matters</p>
              <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, marginBottom: "2rem" }}>
                The Stage Is Free<br />
                <span style={{ color: "var(--red)", fontStyle: "italic" }}>Because of You</span>
              </h2>
              <div style={{ height: "3px", width: "48px", background: "var(--sky)", marginBottom: "2rem" }} />
              <p style={{ ...R, fontSize: "0.95rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.85 }}>
                Theater should be accessible to every young artist — not just those who can afford tuition. Next Scene NY charges nothing to participate because donors like you make it possible.
              </p>
            </div>

            {/* Right grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {WHY.map((item, i) => (
                <div key={i} className="card" style={{ padding: "2rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: i === 0 ? "var(--sky)" : i === 1 ? "var(--red)" : i === 2 ? "var(--gold)" : "var(--navy)" }} />
                  <div style={{
                    width: "44px", height: "44px",
                    background: i === 0 ? "var(--sky-light)" : i === 1 ? "var(--red-light)" : i === 2 ? "var(--gold-light)" : "rgba(19,17,56,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon name={item.icon} size={18} style={{ color: i === 0 ? "var(--sky)" : i === 1 ? "var(--red)" : i === 2 ? "var(--gold)" : "var(--navy)" }} />
                  </div>
                  <h3 style={{ ...R, fontSize: "1.1rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.65rem", lineHeight: 1.15 }}>{item.title}</h3>
                  <p style={{ ...R, fontSize: "0.85rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATION AMOUNTS ── */}
      <section id="donate-form" style={{ background: "var(--surface)", padding: "6rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Choose Your Impact</p>
            <h2 style={{ ...R, fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "1rem" }}>
              Every Gift Counts
            </h2>
            <p style={{ ...R, fontSize: "0.95rem", fontWeight: 400, color: "var(--ink-2)", maxWidth: "480px", margin: "0 auto" }}>
              Select a giving level below or enter a custom amount. All donations go directly to supporting teen artists.
            </p>
          </div>

          {/* Giving levels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {AMOUNTS.map((a, i) => (
              <div key={i} className="card" style={{
                padding: "2.25rem 1.75rem",
                position: "relative", overflow: "hidden",
                border: i === 1 ? "2px solid var(--sky)" : undefined,
                cursor: "pointer",
              }}>
                {i === 1 && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "var(--sky)", padding: "0.25rem", textAlign: "center" }}>
                    <span style={{ ...R, fontSize: "0.57rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff" }}>Most Popular</span>
                  </div>
                )}
                <div style={{ position: "absolute", top: i === 1 ? "auto" : 0, bottom: i === 1 ? 0 : "auto", left: 0, right: 0, height: "3px", background: i === 0 ? "var(--sky-light)" : i === 1 ? "var(--sky)" : i === 2 ? "var(--gold)" : "var(--navy)" }} />
                <p style={{ ...R, fontSize: "3rem", fontWeight: 900, color: i === 1 ? "var(--sky)" : "var(--red)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.2rem", marginTop: i === 1 ? "1.25rem" : 0 }}>{a.value}</p>
                <p style={{ ...R, fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "1rem" }}>{a.label}</p>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                <p style={{ ...R, fontSize: "0.82rem", fontWeight: 500, color: "var(--ink-2)", lineHeight: 1.65 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Custom + CTA */}
          <div style={{ background: "var(--white)", border: "2px solid var(--border-md)", padding: "2.5rem 3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <div>
                <p style={{ ...R, fontSize: "1.25rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
                  Custom Amount
                </p>
                <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", marginBottom: "1.5rem" }}>
                  Any amount makes a real difference for our teen performers.
                </p>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <div style={{ display: "flex", alignItems: "center", background: "var(--surface)", border: "2px solid var(--border-md)", borderRight: "none", padding: "0 1rem" }}>
                    <span style={{ ...R, fontSize: "1.1rem", fontWeight: 800, color: "var(--ink-3)" }}>$</span>
                  </div>
                  <input type="number" placeholder="Enter amount" className="inp" style={{ flex: 1, borderLeft: "none", borderRight: "none", fontSize: "1rem", fontWeight: 700 }} />
                  <button className="btn-red" style={{ borderLeft: "none" }}>
                    <Icon name="Heart" size={14} />
                    Donate
                  </button>
                </div>
              </div>
              <div>
                <div style={{ background: "var(--navy)", padding: "2rem 2.25rem" }}>
                  <p style={{ ...R, fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.6rem" }}>
                    Tax Information
                  </p>
                  <p style={{ ...R, fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: "1rem" }}>
                    Next Scene NY is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent of the law.
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon name="ShieldCheck" size={14} style={{ color: "var(--sky)" }} />
                    <span style={{ ...R, fontSize: "0.75rem", fontWeight: 700, color: "var(--sky)", letterSpacing: "0.06em" }}>Secure & Tax-Deductible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT QUOTE ── */}
      <section style={{ background: "var(--navy)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "2px solid rgba(255,255,255,0.12)" }}>
              {[
                { num: "100%", label: "Free\nParticipation" },
                { num: "$0",   label: "Tuition\nfor Students" },
                { num: "1st",  label: "Teen Theater\nIn Rockland" },
                { num: "2025", label: "Year\nFounded" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "2rem 1.75rem",
                  borderRight: [0, 2].includes(i) ? "1px solid rgba(255,255,255,0.1)" : "none",
                  borderBottom: [0, 1].includes(i) ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}>
                  <p style={{ ...R, fontSize: "2.8rem", fontWeight: 900, color: "var(--sky)", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.35rem" }}>{s.num}</p>
                  <p style={{ ...R, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div>
              <div style={{ width: "48px", height: "48px", background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.75rem" }}>
                <Icon name="Quote" size={22} style={{ color: "#fff" }} />
              </div>
              <blockquote style={{ ...R, fontSize: "1.35rem", fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.55, marginBottom: "2rem" }}>
                "Theater gave me confidence, community, and a sense of purpose. Our goal is to give every teen in Rockland County that same opportunity — regardless of what they can afford."
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="User" size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p style={{ ...R, fontSize: "0.88rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>Roy Pan</p>
                  <p style={{ ...R, fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Founder & Artistic Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER WAYS TO GIVE ── */}
      <section style={{ background: "var(--white)", padding: "5.5rem 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Other Ways to Support</p>
          <h2 style={{ ...R, fontSize: "2.6rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "3rem" }}>
            More Ways to Help
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              {
                icon: "Megaphone", accent: "var(--sky)", bg: "var(--sky-light)",
                label: "Spread the Word",
                desc: "Follow us on Instagram and share our posts to help grow our community and reach more young artists.",
                cta: "Follow on Instagram", href: "#",
              },
              {
                icon: "Building2", accent: "var(--gold)", bg: "var(--gold-light)",
                label: "Corporate Sponsorship",
                desc: "Businesses can sponsor a production or season. Your logo appears on all marketing materials and programs.",
                cta: "Contact Us", href: "mailto:nextsceneny@gmail.com",
              },
              {
                icon: "Gift", accent: "var(--navy)", bg: "rgba(19,17,56,0.07)",
                label: "In-Kind Donations",
                desc: "We gratefully accept donations of costumes, props, staging equipment, or event space for rehearsals and performances.",
                cta: "Get in Touch", href: "mailto:nextsceneny@gmail.com",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: item.accent }} />
                <div style={{ width: "50px", height: "50px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Icon name={item.icon} size={22} style={{ color: item.accent }} />
                </div>
                <h3 style={{ ...R, fontSize: "1.4rem", fontWeight: 900, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.85rem" }}>{item.label}</h3>
                <p style={{ ...R, fontSize: "0.88rem", fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.75, marginBottom: "1.75rem" }}>{item.desc}</p>
                <a href={item.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.45rem",
                  ...R, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: item.accent, textDecoration: "none",
                  transition: "gap 0.18s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "0.8rem")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "0.45rem")}
                >
                  {item.cta} <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: "var(--red)", padding: "5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ ...R, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.6rem" }}>Make a Difference Today</p>
            <h2 style={{ ...R, fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1 }}>
              Support Next Scene NY
            </h2>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#donate-form" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              background: "#fff", color: "var(--red)",
              ...R, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "1rem 2.25rem", textDecoration: "none",
              transition: "transform 0.15s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(19,17,56,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <Icon name="Heart" size={15} />
              Donate Now
            </a>
            <Link to="/about" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              background: "transparent", color: "#fff",
              ...R, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "1rem 2rem", textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.45)",
              transition: "border-color 0.18s, background 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; e.currentTarget.style.background = "transparent"; }}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
