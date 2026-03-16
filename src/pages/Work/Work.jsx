import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Work.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";

const aphroditePaintings = [
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite's-Golden-Reign.jfif`,
    title: "Aphrodite's Golden Reign",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned-2.jfif`,
    title: "Aphrodite's Gilded Gaze",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Ascendant.jpg`,
    title: "Aphrodite Ascendant",
    panel: "Panel I",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned.jpg`,
    title: "Aphrodite Enthroned",
    panel: "Panel II",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Eternal.jpg`,
    title: "Aphrodite Eternal",
    panel: "Panel III",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite.jpg`,
    title: "Aphrodite",
  },
];

const sentinelPaintings = [
  {
    src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Young-Sentinel-1.jfif`,
    title: "Young Sentinel",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Emerging-Sentinel-2.jfif`,
    title: "Emerging Sentinel",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Seasoned-Sentinel-3.jfif`,
    title: "Seasoned Sentinel",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Noble-Sentinel-4.jfif`,
    title: "Noble Sentinel",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Eternal-Sentinel-5.jfif`,
    title: "Eternal Sentinel",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Other-Series/Empress-of-the-Unseen-War.jpg`,
    title: "Empress of the Unseen War",
  },
];

const otherPaintings = [
  {
    src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden-Awakening.jpg`,
    title: "Shield Maiden: The Awakening",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden.jpg`,
    title: "Shield Maiden",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Other-Series/Future-Aspirations.png`,
    title: "Future Aspirations",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Other-Series/Judith-and-the-Head-of-Holofernes.png`,
    title: "Judith and the Head of Holofernes",
  },
];

const SENTINEL_OFFSET = aphroditePaintings.length;
const OTHER_OFFSET = SENTINEL_OFFSET + sentinelPaintings.length;

const TABS = [
  { key: "aphrodite", label: "Aphrodite", paintings: aphroditePaintings, offset: 0 },
  { key: "sentinel", label: "Sentinel", paintings: sentinelPaintings, offset: SENTINEL_OFFSET },
  { key: "additional", label: "Additional", paintings: otherPaintings, offset: OTHER_OFFSET },
];

const Work = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(
    () => sessionStorage.getItem("workActiveTab") || "aphrodite"
  );

  useEffect(() => {
    sessionStorage.setItem("workActiveTab", activeTab);
  }, [activeTab]);
  const maxRows = Math.max(
    aphroditePaintings.length,
    sentinelPaintings.length,
    otherPaintings.length
  );

  const activeTabData = TABS.find((t) => t.key === activeTab);

  return (
    <div className="work-page">
      {/* Mobile tab bar */}
      <div className="work-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`work-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile single-column list */}
      <div className="work-mobile-list">
        {activeTabData.paintings.map((painting, index) => (
          <GalleryItem
            key={index}
            image={painting.src}
            title={painting.title}
            panel={painting.panel}
            onClick={() => navigate(`/work/${activeTabData.offset + index}`)}
          />
        ))}
      </div>

      {/* Desktop 3-column grid */}
      <div className="work-grid">
        <h2 className="work-column-title">Aphrodite Series</h2>
        <h2 className="work-column-title">Sentinel Series</h2>
        <h2 className="work-column-title">Additional Works</h2>

        {Array.from({ length: maxRows }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {aphroditePaintings[rowIndex] ? (
              <GalleryItem
                image={aphroditePaintings[rowIndex].src}
                title={aphroditePaintings[rowIndex].title}
                panel={aphroditePaintings[rowIndex].panel}
                onClick={() => navigate(`/work/${rowIndex}`)}
              />
            ) : (
              <div />
            )}

            {sentinelPaintings[rowIndex] ? (
              <GalleryItem
                image={sentinelPaintings[rowIndex].src}
                title={sentinelPaintings[rowIndex].title}
                onClick={() => navigate(`/work/${SENTINEL_OFFSET + rowIndex}`)}
              />
            ) : (
              <div />
            )}

            {otherPaintings[rowIndex] ? (
              <GalleryItem
                image={otherPaintings[rowIndex].src}
                title={otherPaintings[rowIndex].title}
                onClick={() => navigate(`/work/${OTHER_OFFSET + rowIndex}`)}
              />
            ) : (
              <div />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Work;

