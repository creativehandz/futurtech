import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark">FT</span>
              Futur<span>Tech</span>
            </div>
            <p className="footer-about">
              FuturTech delivers innovative technology solutions that help
              businesses modernize, scale, and stay ahead in a digital-first
              world.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@futurtech.com">hello@futurtech.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>100 Innovation Drive,<br />Tech City, TC 10100</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} FuturTech. All rights reserved.</span>
          <span>
            <Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
