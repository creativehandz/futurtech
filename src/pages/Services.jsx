import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    desc: "From internal tools to customer-facing platforms, we design and build software tailored to your exact needs.",
    points: ["Web applications", "Enterprise systems", "API design & integration", "Legacy modernization"],
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Migrate, optimize, and manage your infrastructure in the cloud with confidence and cost control.",
    points: ["Cloud migration", "DevOps & CI/CD", "Infrastructure as Code", "24/7 managed services"],
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "Turn your data into a competitive advantage with practical, production-ready AI solutions.",
    points: ["Predictive analytics", "Natural language processing", "Computer vision", "Intelligent automation"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps with pixel-perfect design and reliable performance.",
    points: ["iOS & Android", "React Native & Flutter", "App store optimization", "Ongoing maintenance"],
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    desc: "Protect your business, your data, and your customers with a proactive security posture.",
    points: ["Security audits", "Penetration testing", "Compliance (SOC 2, GDPR)", "Incident response"],
  },
  {
    icon: "📊",
    title: "IT Consulting",
    desc: "Senior technology leadership and strategy, available exactly when you need it.",
    points: ["Digital transformation", "Technology roadmaps", "Architecture reviews", "Team augmentation"],
  },
];

const steps = [
  { num: "01", title: "Discover", desc: "We learn your business, goals, and constraints in depth." },
  { num: "02", title: "Design", desc: "We architect a solution and agree on a clear, realistic plan." },
  { num: "03", title: "Build", desc: "Agile sprints with demos and feedback loops every step of the way." },
  { num: "04", title: "Support", desc: "Launch is just the beginning — we stay with you as you grow." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end technology services designed to help you build, modernize, and scale."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="check-list" style={{ marginTop: "16px" }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ fontSize: "0.92rem", marginBottom: "8px" }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">How We Work</span>
            <h2>A proven process, built around you</h2>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {steps.map((st) => (
              <div className="card" key={st.num}>
                <div
                  className="icon"
                  style={{ fontSize: "1.1rem", fontWeight: 800 }}
                >
                  {st.num}
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Not sure where to start?</h2>
            <p>
              Book a free consultation and we'll help you identify the highest
              impact opportunities for your business.
            </p>
            <Link to="/contact" className="btn btn-light">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
