import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/c0e92f1d-0619-490e-8791-44b7c6bd05df/files/750a5a33-83cf-4830-ace8-d7c761e9302c.jpg";

const Index = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0.6rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              color: "var(--text-secondary)",
            }}
          >
            A nonprofit teen theater company in Rockland County
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#contact" className="nav-link" style={{ fontSize: "0.72rem" }}>
              Contact us
            </a>
            <a href="#get-involved" className="nav-link" style={{ fontSize: "0.72rem", color: "var(--accent-soft)" }}>
              Support young artists
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(14,15,18,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "1.2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <span
              className="heading-display"
              style={{ fontSize: "1.35rem", letterSpacing: "0.01em", color: "var(--text-primary)", lineHeight: 1 }}
            >
              Next Scene NY
            </span>
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Teen Theater Company
            </span>
          </a>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {["About", "Mission", "Team", "Productions", "Get Involved", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#get-involved" className="btn-primary" style={{ fontSize: "0.72rem" }}>
            Support Us
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "92vh",
          minHeight: "680px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(14,15,18,1) 0%, rgba(14,15,18,0.7) 40%, rgba(14,15,18,0.25) 70%, rgba(14,15,18,0.15) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(14,15,18,0.4) 0%, transparent 30%, transparent 70%, rgba(14,15,18,0.4) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2.5rem 5rem",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <p className="section-label animate-reveal" style={{ marginBottom: "1.5rem" }}>
              Rockland County · Est. 2025
            </p>
            <h1
              className="heading-display animate-reveal delay-100"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}
            >
              The Next Generation<br />
              <em style={{ color: "var(--accent-soft)" }}>of Theater Starts Here</em>
            </h1>
            <p
              className="animate-reveal delay-200"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "560px",
                marginBottom: "2.5rem",
              }}
            >
              A nonprofit theater company led entirely by teens — creating professional-quality productions
              and expanding access to the arts in Rockland County.
            </p>
            <div className="animate-reveal delay-300" style={{ display: "flex", gap: "1rem" }}>
              <a href="#productions" className="btn-primary">
                Explore Productions
              </a>
              <a href="#get-involved" className="btn-outline">
                Support the Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ── */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {[
            { label: "Teen-Founded", desc: "Created by students, for students" },
            { label: "Entirely Teen-Led", desc: "Every role held by young artists" },
            { label: "No Tuition", desc: "Free participation for all teens" },
            { label: "Inclusive Creative Access", desc: "Onstage and off, everyone belongs" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "2.2rem 2rem",
                borderRight: i < 3 ? "1px solid var(--border-subtle)" : "none",
              }}
            >
              <p
                className="heading-display"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "8rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>About</p>
          <h2
            className="heading-display"
            style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", lineHeight: 1.1, color: "var(--text-primary)" }}
          >
            By the next generation<br />
            <em>of young artists</em>
          </h2>
          <div className="divider" style={{ margin: "2.5rem 0", width: "80px" }} />
          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <p className="heading-display" style={{ fontSize: "2.5rem", color: "var(--accent)" }}>2025</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Founded</p>
            </div>
            <div>
              <p className="heading-display" style={{ fontSize: "2.5rem", color: "var(--accent)" }}>1st</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>In Rockland County</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            Next Scene NY is the first teen-founded and entirely teen-led theater company in Rockland County.
            Founded in 2025 by Roy Pan as a freshman in high school, the company gives young artists the opportunity
            to create, direct, and perform professional-quality productions while leading every aspect of the organization.
          </p>
          <a href="#about" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
            Learn more about us <Icon name="ArrowRight" size={14} />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" style={{ maxWidth: "1400px", margin: "0 auto", marginLeft: "2.5rem", marginRight: "2.5rem" }} />

      {/* ── MISSION ── */}
      <section
        id="mission"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "8rem 0",
        }}
      >
        {/* Large background text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "20vw",
            fontWeight: 300,
            color: "rgba(245,241,232,0.02)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Mission
        </div>

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>Mission</p>
              <h2
                className="heading-display"
                style={{
                  fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  marginBottom: "3rem",
                }}
              >
                Making theater more<br />
                <em style={{ color: "var(--accent-soft)" }}>inclusive and accessible</em>
              </h2>

              {/* Highlight block */}
              <div
                style={{
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  className="heading-display"
                  style={{ fontSize: "1.15rem", color: "var(--text-primary)", fontStyle: "italic", lineHeight: 1.5 }}
                >
                  "A space where every young artist can find their role."
                </p>
              </div>
            </div>

            <div style={{ paddingTop: "4rem" }}>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}
              >
                Our mission is to provide teens with the chance to lead, create, and perform.
                We create a space where every young artist can find their role onstage, backstage,
                or as part of a creative team — all offered with no tuition.
              </p>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                }}
              >
                We work with the Rockland County YMCA and their Teens in Action program to expand
                opportunities for youth involvement. Through storytelling, hands-on experience, and teamwork,
                we build community, inspire confidence, and cultivate the next generation of theater makers.
              </p>

              {/* Partner badge */}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.25rem",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Icon name="HandHeart" size={16} style={{ color: "var(--accent)" }} />
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>
                  In partnership with Rockland County YMCA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" style={{ maxWidth: "1400px", margin: "0 auto", marginLeft: "2.5rem", marginRight: "2.5rem" }} />

      {/* ── LEADERSHIP ── */}
      <section
        id="team"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "8rem 2.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Leadership</p>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)", color: "var(--text-primary)" }}
            >
              Meet the founder
            </h2>
          </div>
          <a href="#team" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Full team <Icon name="ArrowRight" size={14} />
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2rem" }}>
          {/* Roy Pan — featured card */}
          <div
            className="card-hover"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative number */}
            <span
              className="heading-display"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                fontSize: "7rem",
                color: "rgba(245,241,232,0.03)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              01
            </span>

            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--bg-surface-2)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Icon name="User" size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="heading-display"
                style={{ fontSize: "1.9rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}
              >
                Roy Pan
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Founder & Artistic Director
              </p>
            </div>

            <div className="divider" style={{ marginBottom: "1.5rem" }} />

            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.92rem",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.85,
              }}
            >
              Roy Pan founded Next Scene NY as a freshman in high school, creating the first teen-led theater company
              in Rockland County. He serves as director and musical director for teen-directed and performed productions.
              Roy has trained with industry professionals for over three years and has performed since age four in community
              theater and Off-Broadway productions. Through Next Scene, he empowers young artists to lead, create, and
              perform at the highest standard.
            </p>
          </div>

          {/* Charleigh Taylor */}
          <div
            className="card-hover"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              className="heading-display"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                fontSize: "7rem",
                color: "rgba(245,241,232,0.03)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              02
            </span>

            <div>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--bg-surface-2)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Icon name="User" size={20} style={{ color: "var(--text-muted)" }} />
              </div>
              <h3
                className="heading-display"
                style={{ fontSize: "1.9rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}
              >
                Charleigh Taylor
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Choreographer & Assistant Director
              </p>
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                More about the team coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section
        id="get-involved"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "8rem 0",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Get Involved</p>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)", color: "var(--text-primary)" }}
            >
              There's a place for<br />
              <em style={{ color: "var(--accent-soft)" }}>every young artist</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5px", backgroundColor: "var(--border-subtle)" }}>
            {[
              {
                icon: "Mic2",
                label: "Perform",
                desc: "Join productions and develop your voice onstage.",
                num: "01",
              },
              {
                icon: "Clapperboard",
                label: "Create",
                desc: "Contribute backstage, in choreography, music, direction, and production.",
                num: "02",
              },
              {
                icon: "Heart",
                label: "Support",
                desc: "Help expand access to teen-led theater opportunities.",
                num: "03",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  padding: "3.5rem 3rem",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <span
                  className="heading-display"
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "2rem",
                    fontSize: "5rem",
                    color: "rgba(245,241,232,0.04)",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--bg-deep)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <Icon name={item.icon} size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="heading-display"
                  style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "1rem" }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        style={{
          padding: "10rem 2.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big background text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "16vw",
            fontWeight: 300,
            color: "rgba(185,60,45,0.04)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          Next Scene
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Support Us</p>
          <h2
            className="heading-display"
            style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)", lineHeight: 1.08, marginBottom: "1.5rem", color: "var(--text-primary)" }}
          >
            Support the next scene<br />
            <em style={{ color: "var(--accent-soft)" }}>of young artists</em>
          </h2>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "3rem",
              maxWidth: "500px",
              margin: "0 auto 3rem",
            }}
          >
            Help us create more opportunities for teens to lead, perform, and grow through theater.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="#donate" className="btn-primary">
              Donate
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "4rem 2.5rem 3rem",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: "4rem",
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--border-subtle)",
              marginBottom: "2rem",
            }}
          >
            {/* Brand */}
            <div>
              <h3
                className="heading-display"
                style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}
              >
                Next Scene NY
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  maxWidth: "320px",
                }}
              >
                A nonprofit theater company by the next generation of young artists.
              </p>
            </div>

            {/* Links */}
            <div>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1.2rem",
                }}
              >
                Navigate
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.7rem 2rem",
                }}
              >
                {["About", "Mission", "Team", "Productions", "Get Involved", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="nav-link"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              © 2025 Next Scene NY. All rights reserved. Nonprofit organization.
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              Rockland County, New York
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
