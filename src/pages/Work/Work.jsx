import { useNavigate } from "react-router-dom";
import "./Work.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";

const Work = () => {
  const navigate = useNavigate();

  const paintings = [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite.jpg`,
      title: "Aphrodite",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Ascendant.jpg`,
      title: "Aphrodite Ascendant",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Enthroned.jpg`,
      title: "Aphrodite Enthroned",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Eternal.jpg`,
      title: "Aphrodite Eternal",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War.jpg`,
      title: "Empress of the Unseen War",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden-Awakening.jpg`,
      title: "Shield Maiden: The Awakening",
    },

    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg`,
      title: "Shield Maiden",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png`,
      title: "Future Aspirations",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Judith-and-the-Head-of-Holofernes.png`,
      title: "Judith and the Head of Holofernes",
    },
  ];

  return (
    <div className="work-page">
      {paintings.map((painting, index) => (
        <GalleryItem
          key={index}
          image={painting.src}
          title={painting.title}
          onClick={() => {
            navigate(`/work/${index}`);
          }}
        />
      ))}
    </div>
  );
};

export default Work;
