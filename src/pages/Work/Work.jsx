import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Work = () => {
  const paintings = [
    {
      src: `${
        import.meta.env.BASE_URL
      }images/Judith-and-the-Head-of-Holofernes.png`,
      title: "Judith and the Head of Holofernes",
      medium: "Oil and Gold Leaf on Canvas",
      description:
        "In this richly detailed interpretation of the biblical tale, Judith and the Head of Holofernes is \
      reimagined with a visual language reminiscent of Gustav Klimt’s golden period. Judith stands as\
      both executioner and icon, her expression cool and enigmatic, embodying a complex blend of\
      grace, resolve, and silent defiance.\
      Her elaborate robe—ornamented with geometric patterns and shimmering gold leaf—evokes\
      sacred relics and royal vestments, while her jeweled headdress and halo-like backdrop suggest\
      divine authority. The severed head of Holofernes rests heavily beneath her, rendered with raw\
      emotional intensity, a stark contrast to Judith’s poised composure.\
      This piece explores themes of feminine strength, sacrifice, and justice, using the opulence of gold\
      and the intimacy of oil paint to heighten the drama between beauty and brutality.",
    },
    {
      src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png`,
      title: "Future Aspirations",
      medium: "Oil and Gold Leaf on Canvas",
      description:
        "Future Aspirations presents a powerful meditation on identity, transformation, and the path\
      forward. The central figure — part human, part machine — is encircled by a luminous gold halo,\
      evoking sacred iconography while embodying a futuristic ideal. Her expression is calm and\
      commanding, a portrait of poised strength shaped by both history and imagination.\
      To her right stands a more naturalistic form, echoing the classical and the vulnerable. Between\
      them, a vertical panel of symbols charts a journey — perhaps personal, perhaps collective —\
      marked by growth, memory, and transcendence.\
      Balancing the ancient with the futuristic, the painting suggests that our aspirations are not simply\
      forward-facing, but rooted in who we have been. It is a vision of what we might become when we\
      honor the past while shaping the future.",
    },
    {
      src: `${import.meta.env.BASE_URL}images/Untitled.png`,
      title: "Untitled",
      medium: "Oil and Gold Leaf on Canvas",
      description:
        "A work in progress — a quiet reflection of change, caught mid-transition. What it will become is still unfolding.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const total = paintings.length;

  const next = () => {
    setFading(true);
    setTimeout(() => {
      setIndex((index + 1) % paintings.length);
      setFading(false);
    }, 300);
  };

  const prev = () => {
    setFading(true);
    setTimeout(() => {
      setIndex((index - 1 + paintings.length) % paintings.length);
      setFading(false);
    }, 300);
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-image-wrapper">
          <img
            // key={index}
            src={paintings[index].src}
            alt={paintings[index].title}
            className={`carousel-image ${fading ? "fade-out" : "fade-in"}`}
          />
        </div>
        <div className={`carousel-text ${fading ? "fade-out" : "fade-in"}`}>
          <h2 className="carousel-title">{paintings[index].title}</h2>
          <p className="carousel-medium">{paintings[index].medium}</p>
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
      <div
        className={`carousel-description ${fading ? "fade-out" : "fade-in"}`}
      >
        <p>{paintings[index].description}</p>
      </div>
      {/* <div className="artistic-statement">
        <p>
          My work explores the tension between antiquity and futurism,
          sacredness and violence, femininity and power. I draw inspiration from
          the opulence of Byzantine iconography and the ornamental decadence of
          Gustav Klimt, reinterpreting classical narratives through a
          contemporary, often speculative lens.
        </p>
        <p>
          Together, these paintings reflect my fascination with how women are
          mythologized—as destroyers, protectors, or vessels of meaning—and how
          visual storytelling can reclaim that gaze. Gold, for me, is not just a
          material of luxury or reverence, but a veil, both illuminating and
          obscuring what lies beneath.
        </p>
        <p className="signature">- Lisa</p>
      </div> */}
      <div className="contact-cta">
        <Link to="/contact" className="contact-button">
          Contact Lisa
        </Link>
      </div>
    </>
  );
};

export default Work;
