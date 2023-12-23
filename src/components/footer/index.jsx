import React from 'react';
import './footer.css';
import { FaRegCopyright } from 'react-icons/fa6';
import FooterAbout from './footerAbout';
import FooterServices from './footerServices';
import FooterMap from './footerMap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="further-info">
        <div className="footer-about">
          <FooterAbout />
        </div>
        <div className="footer-services">
          <FooterServices />
        </div>
        <div className="footer-map">
          <FooterMap />
        </div>
      </div>
      <div className="copyright">
        <div className="license">
          <FaRegCopyright /> Copyright 2023 arsanIndonesia.com by Naudhilcorp
        </div>
        <div className="privacy">
          <Link>Disclaimer</Link>
          <Link>Privacy Policy</Link>
          <Link>Term & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
