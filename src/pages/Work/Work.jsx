import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";
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

const silverBellesPaintings = [
  {
    src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Anticipating-Her-Next-Move.jfif`,
    title: "Anticipating Her Next Move",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Modern-Belle.jfif`,
    title: "Modern Belle",
  },
  {
    src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Reflecting-in-Living-Marble.jpg`,
    title: "Reflecting in Living Marble",
  },
];

const SENTINEL_OFFSET = aphroditePaintings.length;
const OTHER_OFFSET = SENTINEL_OFFSET + sentinelPaintings.length;
const SILVER_BELLES_OFFSET = OTHER_OFFSET + otherPaintings.length;

const TABS = [
  { key: "aphrodite", label: "Aphrodite", gridLabel: "Aphrodite Series", paintings: aphroditePaintings, offset: 0 },
  { key: "sentinel", label: "Sentinel", gridLabel: "Sentinel Series", paintings: sentinelPaintings, offset: SENTINEL_OFFSET },
  { key: "silver-belles", label: "Silver Belles", gridLabel: "Silver Belles Series", paintings: silverBellesPaintings, offset: SILVER_BELLES_OFFSET },
  { key: "additional", label: "Additional", gridLabel: "Additional Works", paintings: otherPaintings, offset: OTHER_OFFSET },
];

const Work = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(
    () => sessionStorage.getItem("workActiveTab") || "silver-belles"
  );

  const [activeFilter, setActiveFilter] = useState(() => {
    const stored = sessionStorage.getItem("workActiveFilter");
    if (stored === "all") return null;
    return stored || "silver-belles";
  });

  useEffect(() => {
    sessionStorage.setItem("workActiveTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    sessionStorage.setItem("workActiveFilter", activeFilter ?? "all");
  }, [activeFilter]);

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

      {/* Desktop column filters */}
      <div className="work-filters">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`work-filter-btn ${!activeFilter || activeFilter === tab.key ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.key)}
          >
            {tab.gridLabel}
          </button>
        ))}
        {activeFilter && (
          <button className="work-filter-clear" onClick={() => setActiveFilter(null)}>
            <MdClear />
          </button>
        )}
      </div>

      {/* Desktop columns — flat grid, interleaved by row for true cross-column alignment */}
      {(() => {
        const visibleTabs = TABS.filter(
          (tab) => !activeFilter || activeFilter === tab.key
        );
        const maxRows = Math.max(...visibleTabs.map((t) => t.paintings.length));
        return (
          <div className={`work-grid${activeFilter ? " work-grid--single" : ""}`}>
            {/* Title row */}
            {visibleTabs.map((tab) => (
              <h2 key={`title-${tab.key}`} className="work-column-title">
                {tab.gridLabel}
              </h2>
            ))}
            {/* One painting per column per row */}
            {Array.from({ length: maxRows }).flatMap((_, rowIndex) =>
              visibleTabs.map((tab) => {
                const painting = tab.paintings[rowIndex];
                return painting ? (
                  <GalleryItem
                    key={`${tab.key}-${rowIndex}`}
                    image={painting.src}
                    title={painting.title}
                    panel={painting.panel}
                    onClick={() => navigate(`/work/${tab.offset + rowIndex}`)}
                  />
                ) : (
                  <div key={`empty-${tab.key}-${rowIndex}`} />
                );
              })
            )}
          </div>
        );
      })()}
    </div>
  );
};

export default Work;
