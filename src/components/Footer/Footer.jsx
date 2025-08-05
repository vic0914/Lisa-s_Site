import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/" onClick={scrollToTop}>
          Home
        </Link>
        <Link to="/work" onClick={scrollToTop}>
          Work
        </Link>
        <Link to="/about" onClick={scrollToTop}>
          About
        </Link>
        <Link to="/awards" onClick={scrollToTop}>
          Awards
        </Link>
        <Link to="/contact" onClick={scrollToTop}>
          Contact
        </Link>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Lisa Tomlin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
