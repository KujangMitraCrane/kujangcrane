import React from 'react';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const FooterAbout = () => {
  return (
    <>
      <label>Tentang Kami</label>
      <span className="underline" />
      <p>Kujang Mitra Crane adalah perusahaan jasa sewa crane berkualitas & terpercaya di Jawa Barat yang berlokasi di Bogor. Sudah beroperasi selama 5 tahun.</p>
      <span className="media">
        <span>
          <FaXTwitter />
        </span>
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaInstagram />
        </span>
      </span>
    </>
  );
};

export default FooterAbout;
