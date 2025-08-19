import { useRef, useState, useId, useEffect } from "react";
import ReactDOM from "react-dom";

export default function HoverZoom({
  src,
  alt = "",
  magnification = 3,
  size = 250,
  wrapperClassName = "",
  imgClassName = "",
}) {
  const imgRef = useRef(null);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomStyle, setZoomStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const instanceId = useId();

  // Detect if device supports hover (desktop) vs touch (mobile)
  useEffect(() => {
    const checkMobile = () => {
      // Check if device supports hover and has a fine pointer (mouse)
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsMobile(!(hasHover && hasFinePointer));
    };

    checkMobile();
    // No need for resize listener since hover capability doesn't change
  }, []);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only proceed if mouse is actually over this specific image
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      return;
    }

    // Calculate background position to center the cursor position in the popup
    const bgWidth = rect.width * magnification;
    const bgHeight = rect.height * magnification;

    // Map cursor position to background coordinates
    const bgX = (x / rect.width) * bgWidth;
    const bgY = (y / rect.height) * bgHeight;

    // Center the cursor position in the popup with proper clamping
    let offsetX = bgX - size / 2;
    let offsetY = bgY - size / 2;

    // Clamp to prevent showing areas outside the image
    offsetX = Math.max(0, Math.min(offsetX, bgWidth - size));
    offsetY = Math.max(0, Math.min(offsetY, bgHeight - size));

    // Smart positioning: try right first, then left if no space
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 20;

    let finalX = e.clientX + margin;
    let finalY = e.clientY - size / 2;

    // If popup would go off right edge, position it to the left of cursor
    if (finalX + size > viewportWidth - margin) {
      finalX = e.clientX - size - margin;
    }

    // If still off left edge, clamp to left margin
    if (finalX < margin) {
      finalX = margin;
    }

    // Vertical positioning with viewport bounds
    if (finalY < margin) {
      finalY = margin;
    } else if (finalY + size > viewportHeight - margin) {
      finalY = viewportHeight - size - margin;
    }

    setPosition({ x: finalX, y: finalY });
    setZoomStyle({
      backgroundImage: `url(${src})`,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      backgroundPosition: `-${offsetX}px -${offsetY}px`,
    });
  };

  return (
    <div className={`hover-zoom-wrapper ${wrapperClassName}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName}
        onMouseEnter={
          !isMobile
            ? (e) => {
                e.stopPropagation();
                setShow(true);
              }
            : undefined
        }
        onMouseLeave={
          !isMobile
            ? (e) => {
                e.stopPropagation();
                setShow(false);
              }
            : undefined
        }
        onMouseMove={
          !isMobile
            ? (e) => {
                e.stopPropagation();
                handleMouseMove(e);
              }
            : undefined
        }
        draggable={false}
      />
      {!isMobile &&
        show &&
        ReactDOM.createPortal(
          <div
            className="hover-zoom-popup"
            data-instance={instanceId}
            style={{
              position: "fixed",
              left: position.x,
              top: position.y,
              width: size,
              height: size,
              border: "2px solid #fff",
              borderRadius: "8px",
              pointerEvents: "none",
              zIndex: 9999,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              backgroundRepeat: "no-repeat",
              ...zoomStyle,
            }}
          />,
          document.body
        )}
    </div>
  );
}
