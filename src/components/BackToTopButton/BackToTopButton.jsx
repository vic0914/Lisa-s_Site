import { useEffect, useRef, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import "./BackToTopButton.css";

export default function BackToTopButton({
  threshold = 600,
  minScroll = 200,
  size = 56,
  iconScale = 0.7,
}) {
  const [show, setShow] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollY = window.scrollY || doc.scrollTop;
        const viewportH = window.innerHeight;
        const pageH = doc.scrollHeight;
        const distanceFromBottom = pageH - (scrollY + viewportH);
        setShow(distanceFromBottom <= threshold && scrollY > minScroll);

        // overlap check with footer
        const footer = document.querySelector("footer");
        const btn = btnRef.current;
        if (footer && btn) {
          const f = footer.getBoundingClientRect();
          const b = btn.getBoundingClientRect();
          const overlap = !(
            b.right < f.left ||
            b.left > f.right ||
            b.bottom < f.top ||
            b.top > f.bottom
          );
          setOnDark(overlap);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold, minScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      ref={btnRef}
      className={`back-to-top ${show ? "show" : ""} ${onDark ? "on-dark" : ""}`}
      aria-label="Back to top"
      onClick={scrollToTop}
      style={{ "--btn-size": `${size}px`, "--icon-scale": iconScale }}
    >
      <FaChevronCircleUp className="back-to-top-icon" />
    </button>
  );
}
