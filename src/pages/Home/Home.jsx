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
        <blockquote>
          “Art is a line around your thoughts.”
          <br />
          <span className="attribution">- Gustav Klimt</span>
        </blockquote>
      </section>

      <section className="in-progress-section">
        <hr className="section-divider" />
        <h2>In Progress</h2>
        <div className="in-progress-content">
          <div className="in-progress-image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/In_Progress.jpg`}
              alt="Drawing in progress by Lisa Tomlin"
              className="in-progress-image"
            />
          </div>
          <div className="in-progress-text">
            <p>
              This drawing-in-progress captures a delicate balance between
              classical reverence and contemporary craftsmanship. I tend to
              focus on building lifelike depth through softly blended shading
              and meticulous attention to facial features. The unfinished
              elements—like the partially rendered hair and incomplete gilded
              ornamentation—reveal the layering process behind the piece,
              offering a glimpse into the transformation from raw sketch to
              refined icon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
