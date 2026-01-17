import type { FC } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

import logo from "../assets/logo1.png";


const Navbar: FC = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="SmartSoC" className="logo" />
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

       <div className="auth-buttons">
        <NavLink to="/login" className="btn login">Login</NavLink>
        <NavLink to="/register" className="btn register">Register</NavLink>
      </div>

      {/* Contact
      <div className="navbar-contact">
        <span>080-49789412</span>
        <span>info@smartsocs.com</span>
      </div> */}
    </header>
  );
};

export default Navbar;
