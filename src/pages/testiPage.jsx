import React, { useRef } from 'react';
import '../styles/home.css';
import Testimonials from '../containers/testimonials';
import Cooperation from '../containers/cooperation';

const TestiPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Testimonials />
      <Cooperation />
    </div>
  );
};

export default TestiPage;
