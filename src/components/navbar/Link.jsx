import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

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

const LinkNavbar = ({ onClose }) => {
  return (
    <>
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
    </>
  );
};

export { ActiveLink, LinkNavbar };
