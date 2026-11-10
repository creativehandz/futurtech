import PageHeader from "../components/PageHeader";

export default function Terms() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or services."
      />

      <section className="section">
        <div className="container legal">
          <p className="updated">Last updated: November 10, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the FuturTech website ("Site") and services
            ("Services"), you agree to be bound by these Terms &amp;
            Conditions. If you do not agree with any part of these terms, you
            must not use our Site or Services.
          </p>

          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes. You must not:</p>
          <ul>
            <li>Use the Site in any way that violates applicable laws or regulations.</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
            <li>Transmit any malicious code, viruses, or harmful content.</li>
            <li>Reproduce, duplicate, or resell any portion of the Site without written permission.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, icons,
            and software — is the property of FuturTech or its licensors and is
            protected by copyright, trademark, and other intellectual property
            laws. You may not use our branding or content without prior written
            consent.
          </p>

          <h2>4. Services and Engagements</h2>
          <p>
            Specific terms for client projects, including scope, deliverables,
            pricing, and intellectual property ownership, are governed by
            separate written agreements. In case of conflict, the signed
            agreement prevails over these general terms.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Site and its content are provided "as is" and "as available"
            without warranties of any kind, whether express or implied. We do
            not guarantee that the Site will be uninterrupted, error-free, or
            free of harmful components.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, FuturTech shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising out of or relating to your use of the Site or
            Services.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of any
            third-party sites and encourage you to review their terms
            separately.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. The
            updated version will be posted on this page with a revised "Last
            updated" date. Continued use of the Site after changes constitutes
            acceptance of the revised terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of the jurisdiction in which FuturTech is registered, without
            regard to conflict of law principles.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions,
            please contact us at{" "}
            <a href="mailto:legal@futurtech.com">legal@futurtech.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
