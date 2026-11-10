import PageHeader from "../components/PageHeader";

export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains what data we collect and how we use it."
      />

      <section className="section">
        <div className="container legal">
          <p className="updated">Last updated: November 10, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            FuturTech ("we", "us", or "our") is committed to protecting your
            personal information. This Privacy Policy describes how we collect,
            use, and safeguard data when you visit our website or interact with
            our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email address,
              phone number, company details, and message content submitted
              through our contact or career application forms.
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, time spent on the
              site, browser type, device information, and referring URLs.
            </li>
            <li>
              <strong>Cookies:</strong> small files stored on your device that
              help us improve site functionality and analyze traffic.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to inquiries and provide requested services.</li>
            <li>Process job applications.</li>
            <li>Improve our website, services, and user experience.</li>
            <li>Send communications you have opted into, such as updates or newsletters.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share data only
            with trusted service providers who assist in operating our website
            and business (under confidentiality obligations), or when required
            by law.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes described in this policy, or as required by
            applicable law. When no longer needed, data is securely deleted.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Withdraw consent at any time.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>

          <h2>8. Cookies and Analytics</h2>
          <p>
            You can control or disable cookies through your browser settings.
            Note that disabling cookies may affect certain site features.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Site is not directed at children under 16, and we do not
            knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with an updated "Last updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at{" "}
            <a href="mailto:privacy@futurtech.com">privacy@futurtech.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
