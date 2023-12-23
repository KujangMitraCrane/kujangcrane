import React from 'react';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const FooterAbout = () => {
  return (
    <>
      <label>About Us</label>
      <span className="underline" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, dolore Consequuntur, tempora. Numquam, maiores quisquam.</p>
      <span className="media">
        <i>
          <FaXTwitter />
        </i>
        <i>
          <FaFacebook />
        </i>
        <i>
          <FaLinkedin />
        </i>
        <i>
          <FaInstagram />
        </i>
      </span>
    </>
  );
};

export default FooterAbout;
