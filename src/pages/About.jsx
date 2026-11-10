import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in everything we build and deliver.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "Honest communication and transparent processes are the foundation of our client relationships.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We continuously explore new technologies to keep our clients ahead of the curve.",
  },
  {
    icon: "🌱",
    title: "Growth",
    desc: "We invest in our people and our partners, growing together over the long term.",
  },
];

const milestones = [
  { year: "2010", event: "FuturTech founded with a team of 4 engineers" },
  { year: "2014", event: "Opened our first international office" },
  { year: "2017", event: "Launched dedicated cloud & DevOps practice" },
  { year: "2021", event: "Crossed 200 delivered projects worldwide" },
  { year: "2024", event: "Established AI & Machine Learning division" },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About FuturTech"
        subtitle="We're a team of engineers, designers, and strategists passionate about building technology that makes a difference."
      />

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>Our mission</h2>
              <p>
                Founded in 2010, FuturTech was built on a simple belief:
                technology should empower businesses, not complicate them. We
                help organizations of every size navigate digital
                transformation with confidence.
              </p>
              <p>
                Today, our team of 80+ specialists serves clients across
                finance, healthcare, retail, and manufacturing — delivering
                software, cloud infrastructure, and intelligent systems that
                stand the test of time.
              </p>
              <Link to="/services" className="btn btn-primary">
                See What We Do
              </Link>
            </div>
            <div className="split-visual">🏢</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Values</span>
            <h2>What drives us every day</h2>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {values.map((v) => (
              <div className="card value-card" key={v.title}>
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Journey</span>
            <h2>Milestones along the way</h2>
          </div>
          <div className="faq-list">
            {milestones.map((m) => (
              <div className="job-card" key={m.year}>
                <div>
                  <h3 style={{ color: "var(--blue-700)" }}>{m.year}</h3>
                  <p className="job-desc">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <h2>Want to build with us?</h2>
            <p>
              Whether you're a future client or a future colleague, we'd love
              to hear from you.
            </p>
            <Link to="/contact" className="btn btn-light" style={{ marginRight: "12px" }}>
              Contact Us
            </Link>
            <Link to="/careers" className="btn btn-outline-light">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
