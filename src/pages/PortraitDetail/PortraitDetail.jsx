import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import HoverZoom from "../../components/HoverZoom/HoverZoom";
import { FaPlay } from "react-icons/fa";
import "./PortraitDetail.css";

const PortraitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  // Same paintings data as Work page
  const paintings = [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite.MOV`,
      title: "Aphrodite",
      medium: 'Original - Colored Pencil/Pastel/Gold Leaf on Bristol Vellum, 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          In <em>Aphrodite</em>, the first piece in the self-titled series, I wanted to portray the
          goddess not as a passive muse, but as a vibrant, self-assured, and undeniably
          contemporary figure. The gold leaf symbolizes opulence and reverence, while her gaze
          exudes confidence, unapologetic and entirely her own.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Aphrodite-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Aphrodite-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Aphrodite-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Aphrodite-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Ascendant.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Ascendant.MOV`,
      title: "Aphrodite Ascendant",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel, 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          The opening panel of the <em>Aphrodite Triptych: Journey of a Goddess</em> presents a youthful Aphrodite emerging in serene radiance. Her upward gaze, gilded halo, and ocean-evoking ornaments frame her as beauty's origin—calm, elevated, and luminous—introducing Aphrodite as a divine force rising into presence.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Ascendant.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Ascendant.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Ascendant-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Ascendant-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Ascendant-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-All-Triptych-1.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Enthroned.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned.MOV`,
      title: "Aphrodite Enthroned",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          In this central work of the <em>Aphrodite Triptych: Journey of a Goddess</em>, the goddess appears fully empowered. Her poised expression, golden latticework, and jeweled adornments portray love's commanding duality—tender yet formidable. This panel emphasizes Aphrodite's sovereign beauty and confident influence at the height of her mythic authority.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Enthroned.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Enthroned-1.JPG` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Enthroned-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Enthroned-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-All-Triptych-2.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Eternal.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Eternal.MOV`,
      title: "Aphrodite Eternal",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          Completing the <em>Aphrodite Triptych: Journey of a Goddess</em>, this panel reveals Aphrodite as a timeless cosmic presence. Against deep blue, her golden ornaments glow like constellations. Her serene, powerful gaze conveys enduring beauty and desire, presenting the goddess as an eternal force beyond the boundaries of mortal experience.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Eternal.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Eternal.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Eternal-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Eternal-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Eternal-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-All-Triptych-3.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Empress-of-the-Unseen-War.MOV`,
      title: "Empress of the Unseen War",
      medium:
        'Original - Colored and Pastel Pencil/Charcoal/Copper Leaf on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A young aristocrat stands sovereign over battles fought in silence—internal,
        inherited, and unseen. Her ceremonial armor, woven from memory and defiance, evokes
        tradition while asserting self-forged power. Inspired by Klimt and mythic symbolism,
        this portrait honors quiet resilience and the nobility of strength unrecognized.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War.jpg` },
        {
          type: "video",
          src: `${import.meta.env.BASE_URL}videos/AI-Empress-of-the-Unseen-War.MOV`,
        },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Empress-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Empress-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Empress-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Empress-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden-Awakening.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden-The-Awakening.MOV`,
      title: "Shield Maiden: The Awakening",
      medium:
        'Original - Colored and Pastel Pencil/Charcoal/Copper Leaf on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A tribute to the quiet courage that precedes action. Her soft gaze and firm
        stance reflect the tension between vulnerability and emerging strength. The shield she
        holds is both protection and promise—marking the moment before she becomes a warrior
        shaped by the world.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Shield-Maiden-Awakening.jpg` },
        {
          type: "video",
          src: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden-The-Awakening.MOV`,
        },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Awakening-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Awakening-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Awakening-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Awakening-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden.MOV`,
      title: "Shield Maiden",
      medium: 'Original - Colored and Pastel Pencil/Charcoal on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `Not a warrior, but a guardian—her elegance is armor. Softly rendered against
        gilded, mosaic-like patterns, she embodies both protection and reverence. The shield
        symbolizes resilience and inherited struggle, while her stillness asserts beauty as
        quiet defiance.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Shield-Maiden-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Shield-Maiden-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Shield-Maiden-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Shield-Maiden-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Future-Aspirations.MOV`,
      title: "Future Aspirations",
      medium: 'Original - Oil and Gold Leaf on Canvason Canvas 30 x 40"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A meditation on identity and transformation, this work balances the ancient with
        the futuristic. The central figure—part human, part machine—radiates poised strength
        within a golden halo, while a naturalistic counterpart evokes vulnerability. Between
        them, symbols trace a journey of growth and memory, suggesting that our aspirations
        honor the past even as they shape the future.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Future-Aspirations.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Future-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Future-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Future-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Future-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Judith-and-the-Head-of-Holofernes.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Judith.MOV`,
      title: "Judith and the Head of Holofernes",
      medium: 'Original - Oil and Gold Leaf on Canvas on Canvas 24 x 36"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `Reimagined in the opulent style of Klimt's golden period, Judith appears as both
        executioner and icon. Her cool composure contrasts with the raw intensity of
        Holofernes' severed head, while gilded patterns and sacred adornments evoke divine
        authority. This work explores feminine strength, sacrifice, and justice, balancing
        beauty with brutality.`,
      thumbnails: [
        {
          type: "image",
          src: `${import.meta.env.BASE_URL}images/Judith-and-the-Head-of-Holofernes.png`,
        },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Judith.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Judith-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Judith-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Judith-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/TN-Judith-4.jpg` },
      ],
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
            {portrait.thumbnails && portrait.thumbnails[selectedMediaIndex] ? (
              portrait.thumbnails[selectedMediaIndex].type === "video" ? (
                <video
                  className="portrait-video"
                  src={portrait.thumbnails[selectedMediaIndex].src}
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <HoverZoom src={portrait.thumbnails[selectedMediaIndex].src} alt={portrait.title} />
              )
            ) : (
              <HoverZoom src={portrait.src} alt={portrait.title} />
            )}
          </div>

          {portrait.thumbnails && portrait.thumbnails.length > 0 && (
            <div className="thumbnail-container">
              {portrait.thumbnails.map((media, index) => (
                <div
                  key={index}
                  className={`thumbnail ${media.type === "video" ? "video-thumbnail" : ""} ${selectedMediaIndex === index ? "active" : ""}`}
                  onClick={() => setSelectedMediaIndex(index)}
                >
                  {media.type === "video" ? (
                    <>
                      <video src={media.src} />
                      <div className="play-overlay">
                        <FaPlay />
                      </div>
                    </>
                  ) : (
                    <img src={media.src} alt={`${portrait.title} thumbnail ${index + 1}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="portrait-info-section">
          {portrait.title === "Aphrodite Ascendant" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel I — Aphrodite Ascendant
            </h1>
          ) : portrait.title === "Aphrodite Enthroned" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel II — Aphrodite Enthroned
            </h1>
          ) : portrait.title === "Aphrodite Eternal" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel III — Aphrodite Eternal
            </h1>
          ) : (
            <h1 className="portrait-title">{portrait.title}</h1>
          )}
          {portrait.medium && <p className="portrait-medium">{portrait.medium}</p>}
          {portrait.size && <p className="portrait-size">{portrait.size}</p>}
          {portrait.description && <p className="portrait-description">{portrait.description}</p>}
          <button className="inquire-button" onClick={() => navigate("/contact")}>
            Inquire About Purchase
          </button>
          <p className="video-disclaimer">AI video shown for display purposes only</p>
        </div>
      </div>
    </div>
  );
};

export default PortraitDetail;
