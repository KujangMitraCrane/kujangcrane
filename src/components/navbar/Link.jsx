import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <Link to="/about" onClick={onClose}>
        Tentang Kami
      </Link>
      <Link to="/services" onClick={onClose}>
        Layanan Kami
      </Link>
      <Link to="/offer" onClick={onClose}>
        Alat Sewa
      </Link>
      <Link to="/folio" onClick={onClose}>
        Folio
      </Link>
      <Link to="/testimonials" onClick={onClose}>
        Testimonials
      </Link>
      <Link to="/faq" onClick={onClose}>
        Faq
      </Link>
      <Link to="/contact" onClick={onClose}>
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
