import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Lisa</h1>
      <div className="contact-content">
        <img
          src={`${import.meta.env.BASE_URL}images/Image2.jpg`}
          alt="Lisa"
          className="contact-image"
        />
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject*</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
        </form>
      </div>
      <div className="submit-wrapper">
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
