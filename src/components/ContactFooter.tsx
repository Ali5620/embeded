import { NavLink } from "react-router-dom";
import "../styles/contactFooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3>Semislice</h3>
          <p>
            Siliconsemislice Technologies is a fabless semiconductor company focusing on delivering various AI Chips and semiconsuctor complex products. We Offer end to end support with our highly passioanate team. Siliconsemislice works in Designing IP's and VIP's for complex SOC's. We as well focus on emerging technologies of AI
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
         <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/company">Company</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/insights">Insight</NavLink>
            </li>
            <li>
                <NavLink to="/offerings">Our Offering</NavLink>
            </li>
            <li>
                <NavLink to="/career">Career</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>

        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            
            <li>Product Development</li>
            
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>Email: info@siliconsemislice.com</p>
          
          <p>
            Address: Siliconsemislice Technologies Private Limited
            No 34, SM Towers, Outer Ring Rd
            Above SBI Bank, Bellandur
            Bengaluru, Karnataka 560103
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2025 SiliconSemiSlice. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
