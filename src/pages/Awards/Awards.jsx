import { useState } from "react";
import "./Awards.css";

const Awards = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const handleOpen = (imageSrc) => {
    setActiveCertificate(imageSrc);
  };

  const handleClose = () => {
    setActiveCertificate(null);
  };

  return (
    <div className="awards-page">
      <h1>Awards & Recognition</h1>
      <div className="award-entry">
        <span className="award-year">2025</span>
        <h2>Artist Invitational 11 Art Awards - Camelback Gallery</h2>
        <p>"Future Aspirations" - Lisa Tomlin</p>
        <p className="placement">Gold Award</p>
        <button
          className="certificate-button"
          onClick={() => handleOpen("/certificates/Award2025.docx")}
        >
          View Certificate
        </button>
      </div>

      <div className="award-entry">
        <span className="award-year">2024</span>
        <h2>Artist Invitational 10 Art Awards - Camelback Gallery</h2>
        <p>"Judith and the Head of Holofernes" - Lisa Tomlin</p>
        <p className="placement">Silver Award</p>
        <button
          className="certificate-button"
          onClick={() => handleOpen("/certificates/Award2024.docx")}
        >
          View Certificate
        </button>
      </div>

      <div className="award-entry">
        <span className="award-year">2004</span>
        <h2>New Mexico Digital - Second Annual Juried Show</h2>
        <p>"In Next to No Time" - Lisa Tomlin</p>
        <p className="placement">First Place</p>
      </div>

      <div className="award-entry">
        <span className="award-year">2002</span>
        <h2>
          MasterWorks of New Mexico - Bardean Miniature Fine Art Juried Show
        </h2>
        <p>"Queen of the Nile" - Lisa Tomlin</p>
        <p className="placement">Second Place</p>
      </div>

      <div className="award-entry">
        <span className="award-year">1997</span>
        <h2>
          MasterWorks of New Mexico - Bardean Miniature Fine Art Juried Show
        </h2>
        <p>"Youth" - Lisa Tomlin</p>
        <p className="placement">Second Place</p>
      </div>

      {activeCertificate && (
        <div className="certificate-modal">
          <div className="certificate-modal-content">
            <button className="close-btn" onClick={handleClose}>
              x
            </button>
            <img src={activeCertificate} alt="Award Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
