import React from 'react';
import './footer.css';
import { FaRegCopyright } from 'react-icons/fa6';
import FooterAbout from './footerAbout';
import FooterServices from './footerServices';
import FooterMap from './footerMap';
import { Link } from 'react-router-dom';

const DISCLAIMER = 'https://www.privacypolicyonline.com/live.php?token=rsHZP5Q6gEhkFWr5AjqC0HUtdFfzXdqr';
const PRIVACYPOLICY = 'https://www.privacypolicyonline.com/live.php?token=LYkkSeZcFDAhmyAupynygtky5HXDO5gp';
const TERMCONDITION = 'https://www.privacypolicyonline.com/live.php?token=mWpA6kOgu6c13lUXY7tlIBPXM5inAPgz';

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
          <FaRegCopyright /> Copyright 2024 kujangmitracrane.site
        </div>
        <div className="privacy">
          <Link to={DISCLAIMER} target="_blank">
            Disclaimer
          </Link>
          <Link to={PRIVACYPOLICY} target="_blank">
            Privacy Policy
          </Link>
          <Link to={TERMCONDITION} target="_blank">
            Term & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
