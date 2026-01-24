import contact from "../assets/contact us.jpg";
import "../styles/contact.css";
import Footer from "../components/ContactFooter";


const Contact = () => {
  return (
    <div className="contact-section-bg">
    <div className="contact-page">
      {/* HERO SECTION */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>Let's Build Something Great Together</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="contact-content">
        
        {/*  LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-block">
            <h4>Email address</h4>
            <p>info@siliconsemislice.com</p>
          </div>

          <div className="info-block">
            <h4>Phone numbers</h4>
            <p>.....</p>
          </div>

          <div className="info-block">
            <h4>Registered Office Address</h4>
            <p>
              Siliconsemislice Technologies Private Limited <br />
              No 34, SM Towers, Outer Ring Rd <br />
              Above SBI Bank, Bellandur <br />
              Bengaluru, Karnataka 560103
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Ready to start? Let us know how we can help</h2>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows={4} />
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
      <Footer/>
    </div>
  </div>
  );
};

export default Contact;
