import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { useRef, useState } from "react";
import { GiLobArrow } from "react-icons/gi";

const Home = () => {
  const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowOverlay(false);
  };
  const inProgress = [
    {
      type: "pair",
      title: "Shield Maiden: The Awakening",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      description:
        "This piece is still finding its final shape, with copper leaf shimmering and scattering like confetti around the portrait.\
         The loose flakes and stray brush marks feel like little secrets of the process, as if the painting is dressing up before stepping out into the world. ",
      left: {
        src: `${
          import.meta.env.BASE_URL
        }images/Shield-Maiden-Awakening-Process.jpg`,
        alt: "Left image",
      },
      right: {
        src: `${import.meta.env.BASE_URL}images/Shield-Maiden-Awakening.jpg`,
        alt: "Right image",
      },
    },
    {
      type: "video",
      src: `${
        import.meta.env.BASE_URL
      }videos/Shield-Maiden-Awakening-Process.mov`,
      title: "Process Video",
      medium: "Short Clip",
      description: "A behind the scenes look.",
    },

    {
      type: "pair",
      title: "Shield Maiden",
      medium: "Colored and Pastel Pencil/Charcoal",
      description:
        "This drawing-in-progress captures a delicate balance between classical reverence and contemporary craftsmanship.\
         I love creating lifelike depth with softly blended shading and paying close attention to facial features. \
         The unfinished parts, like the partly drawn hair and incomplete gilded ornamentation, show the layering process,\
          giving you a peek into the transformation from a raw sketch to a polished icon. ",
      left: {
        src: `${import.meta.env.BASE_URL}images/Shield-Maiden-Process.jpg`,
        alt: "Left image",
      },
      right: {
        src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg`,
        alt: "Right image",
      },
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}videos/Shield-Maiden-Process.MOV`,
      title: "Process Video",
      medium: "Short Clip",
      description: "A behind the scenes look.",
    },

    {
      type: "pair",
      title: "Empress of the Unseen War",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      description:
        "This drawing is a celebration of detail and design. I’m having fun exploring texture, symmetry, and the elegance of traditional adornment.\
       Each pin and coil is a chance to play with form and precision. It’s a satisfying challenge—balancing beauty and complexity while staying tuned to\
        the quiet harmony between technique and ornament.",
      left: {
        src: `${import.meta.env.BASE_URL}images/Empress-Process.jpg`,
        alt: "Left image",
      },
      right: {
        src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War.jpg`,
        alt: "Right image",
      },
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}videos/Empress-Process.MOV`,
      title: "Process Video",
      medium: "Short Clip",
      description: "A behind the scenes look.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div
          className="hero-left"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="hero-video"
            src={`${import.meta.env.BASE_URL}videos/Lisa CloseUp.MOV`}
            muted
            loop
            playsInline
          />
          <div className={`video-overlay ${showOverlay ? "show" : ""}`}>
            <Link to="/about" className="about-button">
              About
            </Link>
            <GiLobArrow className="lob-arrow" />
          </div>
        </div>
        <div className="hero-right">
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
