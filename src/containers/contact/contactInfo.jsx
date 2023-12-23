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
          <p>+62 8123456</p>
        </div>
      </span>
      <span className="location">
        <i className="icon">
          <IoLocation />
        </i>
        <p>Jl. Raya Sukabumi, Telukpinang, Kec. Ciawi - Bogor</p>
      </span>
      <span className="email">
        <i className="icon">
          <IoMailOpen />
        </i>
        <div>
          <label>E-mail:</label>
          <p>example@arsan.com</p>
        </div>
      </span>
    </>
  );
};

export default ContactInfo;
