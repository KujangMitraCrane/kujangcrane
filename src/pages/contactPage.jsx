import React, { useRef } from 'react';
import '../styles/home.css';
import Contact from '../containers/contact';

const ContactPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Contact />
    </div>
  );
};

export default ContactPage;
