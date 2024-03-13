import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ onClose }) => {
  return (
    <div className="link">
      <Link to="/tentang-kami" onClick={onClose}>
        Tentang Kami
      </Link>
      <Link to="/layanan" onClick={onClose}>
        Layanan Kami
      </Link>
      <Link to="/alat-sewa" onClick={onClose}>
        Alat Sewa
      </Link>
      <Link to="/folio" onClick={onClose}>
        Folio
      </Link>
      <Link to="testimoni" onClick={onClose}>
        Testimonials
      </Link>
      <Link to="faq" onClick={onClose}>
        Faq
      </Link>
      <Link to="kontak" onClick={onClose}>
        Kontak Kami
      </Link>
    </div>
  );
};

const LinkNavbar = () => {
  return (
    <>
      <Link to="/tentang-kami">Tentang Kami</Link>
      <Link to="/layanan">Layanan Kami</Link>
      <Link to="/alat-sewa">Alat Sewa</Link>
      <Link to="/folio">Folio</Link>
      <Link to="/testimoni">Testimonials</Link>
      <Link to="/faq">Faq</Link>
      <Link to="/kontak">Kontak Kami</Link>
    </>
  );
};

export { ActiveLink, LinkNavbar };
