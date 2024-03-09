import React from 'react';
import { IoLogoWhatsapp, IoLocation, IoMailOpen } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  const whatsappLink = `https://wa.me/081511020455`;

  return (
    <>
      <span className="phone">
        <i className="icon">
          <IoLogoWhatsapp />
        </i>
        <div className="phone-contact">
          <label>Phone:</label>
          <Link to={whatsappLink} aria-label="whatsapp" target="_blank">
            +62 81511020455
          </Link>
        </div>
      </span>
      <span className="location">
        <i className="icon">
          <IoLocation />
        </i>
        <p>Jl. Mayjen H.R. Edi Sukma, Tlk. Pinang, Kec. Ciawi, Bogor - Jawa Barat</p>
      </span>
      <span className="email">
        <i className="icon">
          <IoMailOpen />
        </i>
        <div>
          <label>E-mail:</label>
          <p>kujangmitracrane@gmail.com</p>
        </div>
      </span>
    </>
  );
};

export default ContactInfo;
