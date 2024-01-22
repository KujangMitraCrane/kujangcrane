import React from 'react';
import { IoLogoWhatsapp, IoLocation, IoMailOpen } from 'react-icons/io5';

const ContactInfo = () => {
  return (
    <>
      <span className="phone">
        <i className="icon">
          <IoLogoWhatsapp />
        </i>
        <div>
          <label>Phone:</label>
          <p>+62 81511020455</p>
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
