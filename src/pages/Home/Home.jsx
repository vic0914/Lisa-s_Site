import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const inProgress = [
    {
      type: "pair",
      title: "Empress of the Unseen War",
      medium: "Colored Pencil/Charcoal",
      description:
        "This drawing is a celebration of detail and design. I’m having fun exploring texture, symmetry, and the elegance of traditional adornment.\
       Each pin and coil is a chance to play with form and precision. It’s a satisfying challenge—balancing beauty and complexity while staying tuned to\
        the quiet harmony between technique and ornament.",
      left: {
        src: `${import.meta.env.BASE_URL}images/In-Process-3.jpg`,
        alt: "Left image",
      },
      right: {
        src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War.jpg`,
        alt: "Right image",
      },
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}videos/Drawing 2.MOV`,
      title: "Process Video",
      medium: "Short Clip",
      description: "A behind the scenes look.",
    },
    {
      type: "pair",
      title: "Shield Maiden",
      medium: "Colored Pencil/Charcoal",
      description:
        "This drawing-in-progress captures a delicate balance between classical reverence and contemporary craftsmanship.\
         I love creating lifelike depth with softly blended shading and paying close attention to facial features. \
         The unfinished parts, like the partly drawn hair and incomplete gilded ornamentation, show the layering process,\
          giving you a peek into the transformation from a raw sketch to a polished icon. ",
      left: {
        src: `${import.meta.env.BASE_URL}images/In-Progress-1.jpg`,
        alt: "Left image",
      },
      right: {
        src: `${import.meta.env.BASE_URL}images/Untitled-Image.jpg`,
        alt: "Right image",
      },
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}videos/Process.MOV`,
      title: "Process Video",
      medium: "Short Clip",
      description: "A behind the scenes look.",
    },
    // {
    //   type: "image",
    //   src: `${import.meta.env.BASE_URL}images/In-Progress-2.png`,
    //   title: "In Progress Image 2",
    //   medium: "Oil and Gold Leaf on Canvas",
    //   description: "-----",
    // },
  ];

  return (
    <div className="home-page">
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
        <h2>Progress Side-by-Side</h2>
        <div className="home-carousel-slot">
          <Carousel items={inProgress} />
        </div>
      </section>
    </div>
  );
};

export default Home;
