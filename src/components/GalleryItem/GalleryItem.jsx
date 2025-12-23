import "./GalleryItem.css";

const GalleryItem = ({ image, title, panel, onClick }) => {
  return (
    <div className="gallery-item">
      <img
        src={image}
        alt={title}
        className="gallery-item-image"
        onClick={onClick}
      />
      <div className="gallery-item-title-container">
        <h2 className="gallery-item-title">{title}</h2>
        {panel && <div className="gallery-item-panel">{panel}</div>}
      </div>
    </div>
  );
};

export default GalleryItem;
