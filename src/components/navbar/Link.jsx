import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <Link to="about" smooth={true} duration={1000} onClick={onClose}>
        Tentang Kami
      </Link>
      <Link to="services" smooth={true} duration={1000} onClick={onClose}>
        Layanan Kami
      </Link>
      <Link to="offer" smooth={true} duration={1000} onClick={onClose}>
        Alat Sewa
      </Link>
      <Link to="folio" smooth={true} duration={1000} onClick={onClose}>
        Folio
      </Link>
      <Link to="testimonials" smooth={true} duration={1000} onClick={onClose}>
        Testimonials
      </Link>
      <Link to="faq" smooth={true} duration={1000} onClick={onClose}>
        Faq
      </Link>
      <Link to="contact" smooth={true} duration={1000} onClick={onClose}>
        Kontak Kami
      </Link>
    </div>
  );
};

const LinkNavbar = () => {
  return (
    <>
      <Link to="/about">Tentang Kami</Link>
      <Link to="/services">Layanan Kami</Link>
      <Link to="/offer">Alat Sewa</Link>
      <Link to="/folio">Folio</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/faq">Faq</Link>
      <Link to="/contact">Kontak Kami</Link>
    </>
  );
};

export { ActiveLink, LinkNavbar };
