import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const NAV_LINKS = ["About", "Mission", "Team", "Productions", "Get Involved", "Contact"];

export default function Index() {
  return (
    <div style={{ backgroundColor: "var(--bg-cream)", minHeight: "100vh" }}>

      {/* ── ANNOUNCEMENT ── */}
      <div style={{ backgroundColor: "var(--accent)", padding: "0.55rem 2.5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#fff", fontWeight: 400 }}>
          A nonprofit teen theater company in Rockland County &nbsp;·&nbsp; Now enrolling for 2025 productions
        </p>
      </div>

      {/* ── HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "rgba(253,250,245,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-light)",
        boxShadow: "0 1px 8px rgba(26,22,18,0.05)",
      }}>
        <div style={{
          maxWidth: "1360px", margin: "0 auto", padding: "1.1rem 2.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span className="heading-display" style={{ fontSize: "1.45rem", letterSpacing: "0.01em", color: "var(--text-dark)", lineHeight: 1 }}>
              Next Scene NY
            </span>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Teen Theater Company
            </span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {NAV_LINKS.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <a href="#get-involved" className="btn-primary" style={{ fontSize: "0.7rem" }}>
            Support Us
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "90vh", minHeight: "640px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover", backgroundPosition: "center 20%",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(26,22,18,0.88) 0%, rgba(26,22,18,0.48) 40%, rgba(26,22,18,0.12) 80%)",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem 5.5rem", width: "100%" }}>
          <div style={{ maxWidth: "760px" }}>
            <p className="section-label animate-reveal" style={{ marginBottom: "1.2rem", color: "#D4A07A" }}>
              Rockland County · Est. 2025
            </p>
            <h1 className="heading-display animate-reveal delay-100" style={{
              fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)",
              color: "#FDFAF5",
              marginBottom: "1.4rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}>
              The Next Generation<br />
              <em style={{ fontStyle: "italic", color: "#E8C9A0" }}>of Theater Starts Here</em>
            </h1>
            <p className="animate-reveal delay-200" style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem", fontWeight: 300,
              color: "rgba(253,250,245,0.75)",
              lineHeight: 1.75, maxWidth: "520px", marginBottom: "2.5rem",
            }}>
              A nonprofit theater company led entirely by teens — creating professional-quality productions
              and expanding access to the arts in Rockland County.
            </p>
            <div className="animate-reveal delay-300" style={{ display: "flex", gap: "0.9rem" }}>
              <a href="#productions" className="btn-primary">Explore Productions</a>
              <a href="#get-involved" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                color: "rgba(253,250,245,0.85)", fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "0.85rem 2rem",
                border: "1.5px solid rgba(253,250,245,0.35)",
                transition: "border-color 0.2s", textDecoration: "none",
              }}>
                Support the Mission
              </a>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "2rem", right: "2.5rem",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 2,
        }}>
          <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,250,245,0.4)", writingMode: "vertical-rl" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(253,250,245,0.4), transparent)" }} />
        </div>
      </section>

      {/* ── VALUE STRIP ── */}
      <div style={{ backgroundColor: "var(--bg-white)", borderBottom: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { icon: "Star", label: "Teen-Founded", desc: "Created by students, for students" },
            { icon: "Users", label: "Entirely Teen-Led", desc: "Every role held by young artists" },
            { icon: "Gift", label: "No Tuition", desc: "Free participation for all teens" },
            { icon: "Heart", label: "Inclusive Access", desc: "Onstage and off, everyone belongs" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "2rem",
              borderRight: i < 3 ? "1px solid var(--border-light)" : "none",
              display: "flex", alignItems: "center", gap: "1.2rem",
            }}>
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                backgroundColor: "var(--accent-light)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={item.icon} size={16} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="heading-display" style={{ fontSize: "1.05rem", marginBottom: "0.15rem" }}>{item.label}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ maxWidth: "1360px", margin: "0 auto", padding: "8rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "7rem", alignItems: "center" }}>
          {/* Image block */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: "-16px", left: "-16px",
              width: "100%", height: "100%",
              border: "2px solid var(--accent)", zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              aspectRatio: "4/5",
              backgroundImage: `url(${HERO_IMAGE})`,
              backgroundSize: "cover", backgroundPosition: "center top",
              boxShadow: "var(--shadow-lg)",
            }} />
            <div style={{
              position: "absolute", bottom: "-1.5rem", right: "-1.5rem", zIndex: 2,
              backgroundColor: "var(--accent)", padding: "1.5rem",
              boxShadow: "var(--shadow-md)", textAlign: "center",
            }}>
              <p className="heading-display" style={{ fontSize: "2.4rem", color: "#fff", lineHeight: 1 }}>1st</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>In Rockland County</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>About</p>
            <h2 className="heading-display" style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)", marginBottom: "0.4rem" }}>By the next generation</h2>
            <h2 className="heading-display" style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)", fontStyle: "italic", marginBottom: "2rem", color: "var(--text-muted)" }}>
              of young artists
            </h2>
            <div className="divider-thick" style={{ marginBottom: "2rem" }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Next Scene NY is the first teen-founded and entirely teen-led theater company in Rockland County.
              Founded in 2025 by Roy Pan as a freshman in high school, the company gives young artists the opportunity
              to create, direct, and perform professional-quality productions.
            </p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Every aspect of the organization is led by teens — from casting and choreography to production design
              and musical direction.
            </p>
            <a href="#mission" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "0.8rem" }}>
              Our Mission <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" style={{ backgroundColor: "var(--bg-warm)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", padding: "8rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Mission</p>
              <h2 className="heading-display" style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)", marginBottom: "2.5rem" }}>
                Making theater more<br />
                <em style={{ color: "var(--accent)" }}>inclusive and accessible</em>
              </h2>
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1.75rem", marginBottom: "2.5rem" }}>
                <p className="heading-display" style={{ fontSize: "1.25rem", fontStyle: "italic", color: "var(--text-dark)", lineHeight: 1.55 }}>
                  "A space where every young artist<br />can find their role."
                </p>
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.9rem 1.25rem",
                backgroundColor: "var(--bg-white)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <Icon name="HandHeart" size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-body)", letterSpacing: "0.03em" }}>
                  In partnership with Rockland County YMCA
                </span>
              </div>
            </div>

            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Our mission is to provide teens with the chance to lead, create, and perform.
                We create a space where every young artist can find their role onstage, backstage,
                or as part of a creative team — all offered with no tuition.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.9 }}>
                We work with the Rockland County YMCA and their Teens in Action program to expand
                opportunities for youth involvement. Through storytelling, hands-on experience, and teamwork,
                we build community, inspire confidence, and cultivate the next generation of theater makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ maxWidth: "1360px", margin: "0 auto", padding: "8rem 2.5rem" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Leadership</p>
          <h2 className="heading-display" style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)" }}>Meet the team</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1.5rem" }}>
          {/* Roy Pan */}
          <div className="card-light" style={{ padding: "3rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", backgroundColor: "var(--accent)" }} />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div style={{ width: "64px", height: "64px", backgroundColor: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Icon name="User" size={24} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="heading-display" style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>Roy Pan</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.5rem" }}>
                Founder & Artistic Director
              </p>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.85 }}>
                Roy Pan founded Next Scene NY as a freshman in high school, creating the first teen-led theater company
                in Rockland County. He serves as director and musical director for teen-directed and performed productions.
                Roy has trained with industry professionals for over three years and has performed since age four in community
                theater and Off-Broadway productions.
              </p>
            </div>
          </div>

          {/* Charleigh Taylor */}
          <div className="card-warm" style={{ padding: "3rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", backgroundColor: "var(--gold)" }} />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div style={{ width: "64px", height: "64px", backgroundColor: "var(--bg-soft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Icon name="User" size={24} style={{ color: "var(--gold)" }} />
              </div>
              <h3 className="heading-display" style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>Charleigh Taylor</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.5rem" }}>
                Choreographer & Assistant Director
              </p>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.85 }}>
                More about our team coming soon as Next Scene NY grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section id="get-involved" style={{ backgroundColor: "var(--bg-soft)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", padding: "8rem 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Get Involved</p>
            <h2 className="heading-display" style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)" }}>
              There's a place for every<br />
              <em style={{ color: "var(--accent)" }}>young artist</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: "Mic2", num: "01", label: "Perform", desc: "Join productions and develop your voice onstage. No prior experience required.", iconBg: "var(--accent-light)", iconColor: "var(--accent)" },
              { icon: "Clapperboard", num: "02", label: "Create", desc: "Contribute backstage: choreography, music, direction, costume, and set design.", iconBg: "var(--bg-warm)", iconColor: "var(--text-dark)" },
              { icon: "Heart", num: "03", label: "Support", desc: "Donate or partner with us to expand access to teen-led theater opportunities.", iconBg: "rgba(184,151,74,0.12)", iconColor: "var(--gold)" },
            ].map((item, i) => (
              <div key={i} className="card-light" style={{ padding: "3rem 2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={item.icon} size={18} style={{ color: item.iconColor }} />
                  </div>
                  <span className="heading-display" style={{ fontSize: "3.5rem", color: "rgba(26,22,18,0.07)", lineHeight: 1, userSelect: "none" }}>{item.num}</span>
                </div>
                <h3 className="heading-display" style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>{item.label}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" style={{ padding: "8rem 2.5rem", backgroundColor: "var(--bg-white)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>Support the Arts</p>
            <h2 className="heading-display" style={{ fontSize: "clamp(2.6rem, 4vw, 4rem)", marginBottom: "1.5rem" }}>
              Support the next scene<br />
              <em style={{ color: "var(--accent)" }}>of young artists</em>
            </h2>
            <div className="divider-thick" style={{ marginBottom: "2rem" }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "var(--text-body)", lineHeight: 1.85 }}>
              Help us create more opportunities for teens to lead, perform, and grow through theater.
              Your support directly funds productions, workshops, and free participation for all teens.
            </p>
          </div>

          <div style={{
            backgroundColor: "var(--bg-warm)",
            border: "1px solid var(--border-light)",
            padding: "3.5rem",
            boxShadow: "var(--shadow-md)",
          }}>
            <h3 className="heading-display" style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>Get in Touch</h3>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "2.5rem", fontWeight: 300 }}>
              Reach out about auditions, volunteering, sponsorships, or press.
            </p>

            {[
              { icon: "Mail", label: "Email us", value: "hello@nextsceneny.org" },
              { icon: "MapPin", label: "Location", value: "Rockland County, New York" },
              { icon: "Building2", label: "Partner", value: "Rockland County YMCA" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: i < 2 ? "1.5rem" : "2.5rem" }}>
                <div style={{ width: "36px", height: "36px", flexShrink: 0, backgroundColor: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={item.icon} size={14} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.1rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "var(--text-dark)" }}>{item.value}</p>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="#donate" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>Donate</a>
              <a href="#contact" className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "var(--text-dark)", padding: "4rem 2.5rem 3rem" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "2rem",
          }}>
            <div>
              <h3 className="heading-display" style={{ fontSize: "1.5rem", color: "#FDFAF5", marginBottom: "0.6rem" }}>Next Scene NY</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(253,250,245,0.45)", lineHeight: 1.7, maxWidth: "320px" }}>
                A nonprofit theater company by the next generation of young artists.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(253,250,245,0.3)", marginBottom: "1.2rem" }}>Navigate</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem 2rem" }}>
                {NAV_LINKS.map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`}
                    style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: "rgba(253,250,245,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FDFAF5")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(253,250,245,0.5)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "rgba(253,250,245,0.3)" }}>
              © 2025 Next Scene NY. All rights reserved. Nonprofit organization.
            </p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", color: "rgba(253,250,245,0.3)" }}>
              Rockland County, New York
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
