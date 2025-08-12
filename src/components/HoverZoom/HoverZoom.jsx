import { useRef, useState } from "react";

export default function HoverZoom({
  src,
  alt = "",
  zoom = 1.25, // magnification
  size = 200, // popup square size (px)
  wrapperClassName = "",
  imgClassName = "",
}) {
  const imgRef = useRef(null);
  const popRef = useRef(null);
  const raf = useRef(null);
  const [show, setShow] = useState(false);

  const update = (e) => {
    const img = imgRef.current;
    const pop = popRef.current;
    if (!img || !pop) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const iw = rect.width;
    const ih = rect.height;

    const bgW = iw * zoom;
    const bgH = ih * zoom;

    const half = size / 2;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    let bgX = (x / iw) * bgW - half;
    let bgY = (y / ih) * bgH - half;

    bgX = clamp(bgX, 0, Math.max(0, bgW - size));
    bgY = clamp(bgY, 0, Math.max(0, bgH - size));

    pop.style.backgroundImage = `url(${src})`;
    pop.style.backgroundSize = `${bgW}px ${bgH}px`;
    pop.style.backgroundPosition = `-${bgX}px -${bgY}px`;

    const wrapRect = img.parentElement.getBoundingClientRect();
    let left = e.clientX - wrapRect.left + 16;
    let top = e.clientY - wrapRect.top - size - 16;

    left = Math.min(Math.max(0, left), wrapRect.width - size);
    top = Math.min(Math.max(0, top), wrapRect.height - size);

    pop.style.left = `${left}px`;
    pop.style.top = `${top}px`;
  };

  const onMove = (e) => {
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      update(e);
      raf.current = null;
    });
  };

  return (
    <div className={`hover-zoom-wrapper ${wrapperClassName}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={onMove}
        draggable={false}
      />
      {show && (
        <div
          ref={popRef}
          className="hover-zoom-pop"
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
}
