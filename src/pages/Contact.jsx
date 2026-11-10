import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info-card">
              <h3>Let's talk</h3>
              <p>
                Fill out the form and our team will get back to you within one
                business day.
              </p>

              <div className="contact-line">
                <div className="ci">📍</div>
                <div>
                  <strong>Office</strong>
                  <span>
                    100 Innovation Drive,
                    <br />
                    Tech City, TC 10100
                  </span>
                </div>
              </div>

              <div className="contact-line">
                <div className="ci">📞</div>
                <div>
                  <strong>Phone</strong>
                  <span>+1 (234) 567-890</span>
                </div>
              </div>

              <div className="contact-line">
                <div className="ci">✉️</div>
                <div>
                  <strong>Email</strong>
                  <span>hello@futurtech.com</span>
                </div>
              </div>

              <div className="contact-line">
                <div className="ci">🕐</div>
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon – Fri, 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="form-success">
                  ✓ Thank you! Your message has been received. We'll be in
                  touch soon.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="John Smith" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="john@company.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option>New Project Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
