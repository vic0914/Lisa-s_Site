import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [location.key || location.pathname]);

  const next = () => {
    setFading(true);
    setTimeout(() => {
      setIndex((index + 1) % items.length);
      setFading(false);
    }, 300);
  };

  const prev = () => {
    setFading(true);
    setTimeout(() => {
      setIndex((index - 1 + items.length) % items.length);
      setFading(false);
    }, 300);
  };

  const current = items[index];

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-image-wrapper">
          <img
            src={current.src}
            alt={current.title}
            className={`carousel-image ${fading ? "fade-out" : "fade-in"}`}
          />
        </div>
        <div className={`carousel-text ${fading ? "fade-out" : "fade-in"}`}>
          <h2 className="carousel-title">{current.title}</h2>
          {current.medium && (
            <p className="carousel-medium">{current.medium}</p>
          )}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={prev}>
            <MdNavigateBefore className="icon" />
          </button>
          <button className="carousel-button" onClick={next}>
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
