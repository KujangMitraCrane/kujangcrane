import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <ScrollLink to="about" smooth={true} duration={1000} onClick={onClose}>
        About
      </ScrollLink>
      <ScrollLink to="services" smooth={true} duration={1000} onClick={onClose}>
        Services
      </ScrollLink>
      <ScrollLink to="offer" smooth={true} duration={1000} onClick={onClose}>
        Offer
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
        Contact
      </ScrollLink>
    </div>
  );
};

const LinkNavbar = ({ onClose }) => {
  return (
    <>
      <ScrollLink to="about" smooth={true} duration={1000} onClick={onClose}>
        About
      </ScrollLink>
      <ScrollLink to="services" smooth={true} duration={1000} onClick={onClose}>
        Services
      </ScrollLink>
      <ScrollLink to="offer" smooth={true} duration={1000} onClick={onClose}>
        Offer
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
        Contact
      </ScrollLink>
    </>
  );
};

export { ActiveLink, LinkNavbar };
