import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img
          src={`${import.meta.env.BASE_URL}images/home-page-image.jpg`}
          alt="Lisa artwork"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Symbolism, Power, and the Sacred Feminine</h1>
          <Link to="/work" className="hero-button">
            Explore Gallery
          </Link>
        </div>
      </section>

      <section className="artist-statement">
        <p>
          My work explores the tension between antiquity and futurism,
          sacredness and violence, femininity and power. I draw inspiration from
          the opulence of Byzantine iconography and the ornamental decadence of
          Gustav Klimt, reinterpreting classical narratives through a
          contemporary, often speculative lens.&nbsp;beneath.
        </p>
        <p>
          Together, these paintings reflect my fascination with how women are
          mythologized—as destroyers, protectors, or vessels of meaning—and how
          visual storytelling can reclaim that gaze. Gold, for me, is not just a
          material of luxury or reverence, but a veil, both illuminating and
          obscuring what lies
        </p>
      </section>
    </>
  );
};

export default Home;
