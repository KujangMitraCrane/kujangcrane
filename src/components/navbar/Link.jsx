import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <Link to="/about">Tentang Kami</Link>
      <Link to="/services">Layanan Kami</Link>
      <Link to="/offer">Alat Sewa</Link>
      <Link to="/folio">Folio</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/faq">Faq</Link>
      <Link to="/contact">Kontak Kami</Link>
    </div>
  );
};

const LinkNavbar = ({ onClose }) => {
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
