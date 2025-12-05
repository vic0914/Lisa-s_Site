import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import HoverZoom from "../../components/HoverZoom/HoverZoom";
import { FaPlay } from "react-icons/fa";
import "./PortraitDetail.css";

const PortraitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("image"); // "image" or "video"

  // Same paintings data as Work page
  const paintings = [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-web.jpg`,
      title: "Aphrodite",
      medium: "Colored Pencil/Pastel/Gold Leaf on Bristol Vellum",
      size: 'Bristol Vellum 22 x 30"',
      description: `In 'Aphrodite', the first piece in the self-titled series, I wanted to portray the
        goddess not as a passive muse, but as a vibrant, self-assured, and undeniably
        contemporary figure. The gold leaf symbolizes opulence and reverence, while her gaze
        exudes confidence, unapologetic and entirely her own.`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War-web.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Empress.MOV`,
      title: "Empress of the Unseen War",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      size: 'Bristol Vellum 22 x 30"',
      description: `A young aristocrat stands sovereign over battles fought in silence—internal,
        inherited, and unseen. Her ceremonial armor, woven from memory and defiance, evokes
        tradition while asserting self-forged power. Inspired by Klimt and mythic symbolism,
        this portrait honors quiet resilience and the nobility of strength unrecognized.`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sheild-Maiden-web.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden-The-Awakening.MOV`,
      title: "Shield Maiden: The Awakening",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      size: 'Bristol Vellum 22 x 30"',
      description: `A tribute to the quiet courage that precedes action. Her soft gaze and firm
        stance reflect the tension between vulnerability and emerging strength. The shield she
        holds is both protection and promise—marking the moment before she becomes a warrior
        shaped by the world.`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg`,
      title: "Shield Maiden",
      medium: "Colored and Pastel Pencil/Charcoal",
      size: 'Bristol Vellum 22 x 30"',
      description: `Not a warrior, but a guardian—her elegance is armor. Softly rendered against
        gilded, mosaic-like patterns, she embodies both protection and reverence. The shield
        symbolizes resilience and inherited struggle, while her stillness asserts beauty as
        quiet defiance.`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Future-Aspirations.MOV`,
      title: "Future Aspirations",
      medium: "Oil and Gold Leaf on Canvas",
      size: 'Canvas 30 x 40"',
      description: `A meditation on identity and transformation, this work balances the ancient with
        the futuristic. The central figure—part human, part machine—radiates poised strength
        within a golden halo, while a naturalistic counterpart evokes vulnerability. Between
        them, symbols trace a journey of growth and memory, suggesting that our aspirations
        honor the past even as they shape the future.`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Judith-and-the-Head-of-Holofernes.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Judith.MOV`,
      title: "Judith and the Head of Holofernes",
      medium: "Oil and Gold Leaf on Canvas",
      size: 'Canvas 24 x 36"',
      description: `Reimagined in the opulent style of Klimt's golden period, Judith appears as both
        executioner and icon. Her cool composure contrasts with the raw intensity of
        Holofernes' severed head, while gilded patterns and sacred adornments evoke divine
        authority. This work explores feminine strength, sacrifice, and justice, balancing
        beauty with brutality.`,
    },
  ];

  const portraitIndex = parseInt(id);
  const portrait = paintings[portraitIndex];

  // Redirect if invalid ID
  if (!portrait || isNaN(portraitIndex)) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="portrait-detail-page">
      <button className="back-button" onClick={() => navigate("/work")}>
        ← Back to Gallery
      </button>
      <div className="portrait-detail-container">
        <div className="portrait-image-section">
          <div className="main-display">
            {viewMode === "image" ? (
              <HoverZoom src={portrait.src} alt={portrait.title} />
            ) : (
              <video
                className="portrait-video"
                src={portrait.videoSrc}
                controls
                autoPlay
                loop
                muted
              />
            )}
          </div>

          {portrait.videoSrc && (
            <div className="thumbnail-container">
              <div
                className={`thumbnail ${viewMode === "image" ? "active" : ""}`}
                onClick={() => setViewMode("image")}
              >
                <img src={portrait.src} alt={`${portrait.title} thumbnail`} />
              </div>
              <div
                className={`thumbnail video-thumbnail ${viewMode === "video" ? "active" : ""}`}
                onClick={() => setViewMode("video")}
              >
                <video src={portrait.videoSrc} />
                <div className="play-overlay">
                  <FaPlay />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="portrait-info-section">
          <h1 className="portrait-title">{portrait.title}</h1>
          {portrait.medium && <p className="portrait-medium">{portrait.medium}</p>}
          {portrait.size && <p className="portrait-size">{portrait.size}</p>}
          {portrait.description && <p className="portrait-description">{portrait.description}</p>}
          <button className="inquire-button" onClick={() => navigate("/contact")}>
            Inquire About Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortraitDetail;
