import React from 'react';
import './support.css';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdMail, MdPhone, MdOutlineWatchLater } from 'react-icons/md';

const Support = () => {
  const handleCheckout = () => {
    // Construct the WhatsApp link with the provided number
    const whatsappLink = `https://wa.me/081511020455`;

    // Open the WhatsApp link in a new window or tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="support" id="support">
      <div className="cs-support">
        <span>
          <MdMail /> <>kujangmitracrane@gmail.com</>
        </span>
        <span onClick={handleCheckout}>
          <MdPhone /> <>+62 81511020455</>
        </span>
        <span>
          <MdOutlineWatchLater />
          <>Sen - Jum: 08:00 - 16:00 Sab: 08:00 - 12:00</>
        </span>
      </div>
      <div className="social-media">
        <FaInstagram />
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Support;
