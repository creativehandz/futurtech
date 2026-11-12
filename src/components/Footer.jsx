import { Link } from "react-router-dom";
import logo from "../assets/future-tech-logo.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand footer-brand" aria-label="Future Tech Co UK home">
              <img src={logo} alt="Future Tech Co UK" className="brand-logo" />
            </Link>
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
              <li><a href="mailto:info@futurtech.com">info@futurtech.com</a></li>
              <li><a href="tel:+447557361304">+44 7557 361304</a></li>
              <li>
                Registered office<br />
                167-169 Great Portland Street,<br />
                London, England, W1W 5PF
              </li>
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
