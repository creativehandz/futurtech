import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What does FuturTech do?",
        a: "FuturTech is a full-service technology company. We provide custom software development, cloud solutions, AI & machine learning, mobile app development, cybersecurity, and IT consulting services to businesses of all sizes.",
      },
      {
        q: "What industries do you work with?",
        a: "We have deep experience in finance, healthcare, retail, logistics, and manufacturing — but our process adapts to any industry. If you have a technology challenge, we can likely help.",
      },
      {
        q: "Where is FuturTech located?",
        a: "Our headquarters are at 100 Innovation Drive, Tech City. We work with clients worldwide and support both remote and on-site collaboration.",
      },
    ],
  },
  {
    category: "Projects & Pricing",
    items: [
      {
        q: "How much does a typical project cost?",
        a: "Every project is different. After a free initial consultation, we provide a detailed, transparent proposal with clear pricing. We offer fixed-price, time & materials, and dedicated-team engagement models.",
      },
      {
        q: "How long does a project take?",
        a: "A small web application may take 6–10 weeks, while larger enterprise platforms can span several months. We break all work into agile milestones so you see progress — and working software — early and often.",
      },
      {
        q: "Do you work with startups as well as enterprises?",
        a: "Absolutely. We tailor our engagement model to your stage: MVP-focused delivery for startups, and governance-ready processes for enterprise clients.",
      },
    ],
  },
  {
    category: "Support & Process",
    items: [
      {
        q: "Do you provide support after launch?",
        a: "Yes. We offer flexible maintenance and support plans including monitoring, bug fixes, security patches, and feature enhancements — so your product keeps improving after go-live.",
      },
      {
        q: "How do you keep projects on track?",
        a: "You get a dedicated project manager, regular sprint demos, and full access to our project tracking tools. Transparency is built into how we work.",
      },
      {
        q: "Who owns the code and intellectual property?",
        a: "You do. Upon final payment, all code, designs, and deliverables created for your project are fully owned by you.",
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        <span className="faq-chevron">▾</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we hear most often. Can't find what you're looking for? Get in touch."
      />

      <section className="section">
        <div className="container">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="faq-cat">{group.category}</h2>
              <div className="faq-list" style={{ marginBottom: "28px" }}>
                {group.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <h2>Still have questions?</h2>
            <p>Our team is happy to help — reach out and we'll respond within one business day.</p>
            <Link to="/contact" className="btn btn-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
