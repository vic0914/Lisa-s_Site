import "./GalleryItem.css";

const GalleryItem = ({ image, title, onClick }) => {
  return (
    <div className="gallery-item">
      <img
        src={image}
        alt={title}
        className="gallery-item-image"
        onClick={onClick}
      />
      <h2 className="gallery-item-title">{title}</h2>
    </div>
  );
};

export default GalleryItem;
