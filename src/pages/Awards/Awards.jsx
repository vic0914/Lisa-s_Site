import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards-page">
      <h1>Awards & Recognition</h1>
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
        <p>"Untitled" - Lisa Tomlin</p>
        <p className="placement">Second Place</p>
      </div>

      <div className="award-entry">
        <span className="award-year">1997</span>
        <h2>
          MasterWorks of New Mexico - Bardean Miniature Fine Art Juried Show
        </h2>
        <p>"Untitled" - Lisa Tomlin</p>
        <p className="placement">Second Place</p>
      </div>
    </div>
  );
};

export default Awards;
