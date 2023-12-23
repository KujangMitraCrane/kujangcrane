import React from 'react';
import './support.css';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdMail, MdPhone, MdOutlineWatchLater } from 'react-icons/md';

const Support = () => {
  return (
    <div className="support" id="support">
      <div className="cs-support">
        <span>
          <MdMail /> <>support@arsan.com</>
        </span>
        <span>
          <MdPhone /> <>(0251)-12345</>
        </span>
        <span>
          <MdOutlineWatchLater /> <>Mon - Sat: 08:00 - 16:00</>
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
