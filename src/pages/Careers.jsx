import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const APPLICATION_EMAIL = "prasharpranav@gmail.com";

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

function ApplyModal({ job, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <h3 id="apply-modal-title">Apply for {job.title}</h3>
        <p className="modal-sub">
          Fill in your details and attach your resume — we'll get back to you
          soon.
        </p>

        <form
          action={`https://formsubmit.co/${APPLICATION_EMAIL}`}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="position" value={job.title} />
          <input
            type="hidden"
            name="_subject"
            value={`Job Application: ${job.title}`}
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/careers?applied=1`}
          />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="app-name">Full Name *</label>
              <input id="app-name" name="name" type="text" required placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="app-email">Email Address *</label>
              <input id="app-email" name="email" type="email" required placeholder="john@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="app-phone">Phone Number *</label>
            <input id="app-phone" name="phone" type="tel" required placeholder="+44 7000 000000" />
          </div>

          <div className="form-group">
            <label htmlFor="app-resume">Resume / CV * (PDF or Word)</label>
            <input
              id="app-resume"
              name="attachment"
              type="file"
              required
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="form-group">
            <label htmlFor="app-message">Cover Note</label>
            <textarea
              id="app-message"
              name="message"
              rows="4"
              placeholder="Tell us briefly why you're a great fit for this role..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const applied = searchParams.get("applied") === "1";

  return (
    <>
      {activeJob && (
        <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
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
            {applied && (
              <div className="form-success">
                ✓ Thank you! Your application has been submitted successfully.
                We'll be in touch soon.{" "}
                <button
                  className="dismiss-link"
                  onClick={() => setSearchParams({}, { replace: true })}
                >
                  Dismiss
                </button>
              </div>
            )}
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
                <button
                  className="btn btn-primary btn-apply"
                  onClick={() => setActiveJob(j)}
                >
                  Apply Now
                </button>
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
