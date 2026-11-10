import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const perks = [
  {
    icon: "🌍",
    title: "Remote-Friendly",
    desc: "Work from anywhere with flexible hours and async-friendly collaboration.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    desc: "Annual budget for courses, conferences, books, and certifications.",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Comprehensive health coverage and wellness programs for you and your family.",
  },
  {
    icon: "🏖️",
    title: "Generous Time Off",
    desc: "Paid vacation, holidays, and parental leave — because rest fuels great work.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Clear growth paths, mentorship, and regular feedback to help you level up.",
  },
  {
    icon: "🎉",
    title: "Great Culture",
    desc: "Team events, hackathons, and a collaborative, low-ego environment.",
  },
];

const jobs = [
  {
    title: "Customer Service Supervisor",
    tags: ["Full-time", "Customer Service", "£31,000 – £35,000"],
    desc: "The Customer Service Supervisor is responsible for leading and co-ordinating the customer service team to ensure customers receive a high standard of support. The role involves handling complex or sensitive customer queries and complaints, planning and delivering team training, and managing staff schedules to meet business requirements. The supervisor works closely with managers to review customer feedback, identify operational issues, and recommend improvements to products, services, and customer experience.",
  },
];

export default function Careers() {
  return (
    <>
      <PageHeader
        title="Careers at FuturTech"
        subtitle="Do the best work of your career alongside people who care about craft, impact, and each other."
      />

      {/* Perks */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Join Us</span>
            <h2>Benefits & perks</h2>
            <p>We take care of our team so our team can take care of our clients.</p>
          </div>
          <div className="grid-3">
            {perks.map((p) => (
              <div className="card" key={p.title}>
                <div className="icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Open Positions</span>
            <h2>Current openings</h2>
            <p>
              Don't see a perfect fit? Send your resume to{" "}
              <a href="mailto:careers@futurtech.com">careers@futurtech.com</a> —
              we're always looking for great people.
            </p>
          </div>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {jobs.map((j) => (
              <div className="job-card" key={j.title}>
                <div>
                  <h3>{j.title}</h3>
                  <div className="job-meta">
                    {j.tags.map((t) => (
                      <span className="job-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="job-desc">{j.desc}</p>
                </div>
                <a
                  href={`mailto:careers@futurtech.com?subject=Application: ${encodeURIComponent(j.title)}`}
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Curious about life at FuturTech?</h2>
            <p>Reach out and chat with our team — no commitment, just conversation.</p>
            <Link to="/contact" className="btn btn-light">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
