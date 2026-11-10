import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    desc: "Tailored web and enterprise applications built with modern, scalable technology stacks.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Cloud migration, architecture, and management services for AWS, Azure, and Google Cloud.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "Intelligent automation and data-driven insights that transform how your business operates.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Beautiful, high-performance iOS and Android apps that your users will love.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    desc: "Comprehensive security audits, threat monitoring, and compliance support.",
  },
  {
    icon: "📊",
    title: "IT Consulting",
    desc: "Strategic technology guidance to align your IT roadmap with business goals.",
  },
];

const stats = [
  { num: "250+", label: "Projects Delivered" },
  { num: "120+", label: "Happy Clients" },
  { num: "15+", label: "Years of Experience" },
  { num: "80+", label: "Team Members" },
];

const reasons = [
  "Proven track record across industries and company sizes",
  "Dedicated teams with transparent communication",
  "Agile delivery with measurable milestones",
  "Security and quality built in from day one",
  "Ongoing support long after launch",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <ParticleBackground />
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Technology Solutions for Modern Business</span>
            <h1>
              Building the <em>future</em> of your business with technology
            </h1>
            <p>
              FuturTech partners with ambitious companies to design, build, and
              scale digital products and infrastructure that drive real growth.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-light">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What We Do</span>
            <h2>Services that power your growth</h2>
            <p>
              End-to-end technology services, from strategy to delivery and
              beyond.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="learn-more">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow" style={{ display: "inline-block", color: "var(--blue-600)", background: "var(--blue-100)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "6px 14px", borderRadius: "100px", marginBottom: "14px" }}>
                Why FuturTech
              </span>
              <h2>A partner you can rely on, every step of the way</h2>
              <p>
                We combine deep technical expertise with a genuine commitment
                to your success. That's why clients stay with us for years, not
                just projects.
              </p>
              <ul className="check-list">
                {reasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: "10px" }}>
                About Us
              </Link>
            </div>
            <div className="split-visual">🚀</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to start your next project?</h2>
            <p>
              Tell us about your goals and we'll show you how FuturTech can
              help you get there — faster.
            </p>
            <Link to="/contact" className="btn btn-light">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
