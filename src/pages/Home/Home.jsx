import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const inProgress = [
    {
      src: `${import.meta.env.BASE_URL}images/In-Progress-1.jpg`,
      title: "In progress image 1",
      medium: "-----",
      description: "-----",
    },
    {
      src: `${import.meta.env.BASE_URL}images/In-Progress-2.png`,
      title: "In progress image 2",
      medium: "medium",
      description: "desc",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <img
          src={`${import.meta.env.BASE_URL}images/Hero-Image.jpg`}
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
        <div>
          <Carousel items={inProgress} />
        </div>
      </section>
    </>
  );
};

export default Home;
