import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="site-footer">
      <div className="footer-social">
        <a
          href="https://www.instagram.com/lisalisatomlin/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram size={32} />
        </a>
      </div>
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
        <div style={{ marginTop: "15px" }}>
          Website by{" "}
          <a
            href="https://www.linkedin.com/in/victor-rabadan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Victor Rabadan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
