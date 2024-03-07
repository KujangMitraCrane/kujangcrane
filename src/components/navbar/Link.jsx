import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <ScrollLink to="about" smooth={true} duration={1000} onClick={onClose}>
        Tentang Kami
      </ScrollLink>
      <ScrollLink to="services" smooth={true} duration={1000} onClick={onClose}>
        Layanan Kami
      </ScrollLink>
      <ScrollLink to="offer" smooth={true} duration={1000} onClick={onClose}>
        Alat Sewa
      </ScrollLink>
      <ScrollLink to="folio" smooth={true} duration={1000} onClick={onClose}>
        Folio
      </ScrollLink>
      <ScrollLink to="testimonials" smooth={true} duration={1000} onClick={onClose}>
        Testimonials
      </ScrollLink>
      <ScrollLink to="faq" smooth={true} duration={1000} onClick={onClose}>
        Faq
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={1000} onClick={onClose}>
        Kontak Kami
      </ScrollLink>
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
