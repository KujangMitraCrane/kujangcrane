import React, { useRef } from 'react';
import '../styles/home.css';
import Services from '../containers/services';
import Folio from '../containers/folio';
import Testimonials from '../containers/testimonials';

const ServicesPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Services />
      <Folio />
      <Testimonials />
    </div>
  );
};

export default ServicesPage;
