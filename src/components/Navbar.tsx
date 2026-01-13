import type { FC } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: FC = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/logo.png" alt="SmartSoC" />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="navbar-menu">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/company">Company</NavLink>
        <NavLink to="/offerings">Our Offerings</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/insights">Insights</NavLink>
        <NavLink to ="/about">About</NavLink>
      </nav>

      {/* Contact */}
      <div className="navbar-contact">
        <span>080-49789412</span>
        <span>info@smartsocs.com</span>
      </div>
    </header>
  );
};

export default Navbar;
