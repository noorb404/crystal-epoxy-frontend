import React from 'react';
import './NavbarUpperSide.css';
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const NavbarUpperSide = () => {
  return (
    <nav className="navbar">
    <div className="navbar__links">
      <div className="navbar__links-left">
        <p className="navbar__follow">Follow us</p>
        <a href="https://www.facebook.com/profile.php?id=100088418421973" className="navbar__social"><FaFacebook className="navbar__icon" /></a>
        <a href="https://www.instagram.com/crystal.wood_epoxydesign/" className="navbar__social"><FaInstagram className="navbar__icon" /></a>
      </div>
      <div className="navbar__links-right">
        <a href="mailto:crystalepoxy797@gmail.com" className="navbar__email"><FaEnvelope className="navbar__icon" />crystalepoxy797@gmail.com</a>
        <a href="https://wa.link/s6o3sg" style={{textDecoration:'none'}} className="navbar__whatsapp"><FaWhatsapp className="navbar__icon" />Contact us via WhatsApp</a>
      </div>
    </div>
  </nav>
  );
};

export default NavbarUpperSide;
