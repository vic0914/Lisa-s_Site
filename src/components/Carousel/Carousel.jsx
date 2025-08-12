import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Carousel.css";

/**
 * Flexible Carousel that supports images and videos.
 * Pass an `items` prop: [{ type: "image"|"video", src, poster?, title?, medium?, description? }, ...]
 */
const Carousel = ({ items = [] }) => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Reset to first slide on route change (mirrors your existing behavior)
  useEffect(() => {
    setIndex(0);
  }, [location.key || location.pathname]);

  const next = () => {
    if (!items.length) return;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % items.length);
      setFading(false);
    }, 300);
  };

  const prev = () => {
    if (!items.length) return;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + items.length) % items.length);
      setFading(false);
    }, 300);
  };

  if (!items.length) {
    return (
      <div className="carousel-container">
        <div className="carousel-empty">No items to display.</div>
      </div>
    );
  }

  const current = items[index] || {};
  const isVideo = current.type === "video";

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-image-wrapper">
          {current.type === "pair" ? (
            <div className={`carousel-pair ${fading ? "fade-out" : "fade-in"}`}>
              <img
                src={current.left.src}
                alt={current.left.alt || current.title || ""}
                className="carousel-media pair-item"
              />
              <img
                src={current.right.src}
                alt={current.right.alt || current.title || ""}
                className="carousel-media pair-item"
              />
            </div>
          ) : isVideo ? (
            <video
              className={`carousel-media ${fading ? "fade-out" : "fade-in"}`}
              src={current.src}
              poster={current.poster}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={current.src}
              alt={current.title || ""}
              className={`carousel-media ${fading ? "fade-out" : "fade-in"}`}
            />
          )}
        </div>

        <div className={`carousel-text ${fading ? "fade-out" : "fade-in"}`}>
          {current.title && <h2 className="carousel-title">{current.title}</h2>}
          {current.medium && (
            <p className="carousel-medium">{current.medium}</p>
          )}
        </div>

        <div className="carousel-buttons">
          <button
            className="carousel-button"
            onClick={prev}
            aria-label="Previous slide"
          >
            <MdNavigateBefore className="icon" />
          </button>
          <button
            className="carousel-button"
            onClick={next}
            aria-label="Next slide"
          >
            <MdNavigateNext className="icon" />
          </button>
        </div>
      </div>

      {current.description && (
        <div
          className={`carousel-description ${fading ? "fade-out" : "fade-in"}`}
        >
          <p>{current.description}</p>
        </div>
      )}
    </>
  );
};

export default Carousel;
