import React, { useRef } from 'react';
import '../styles/home.css';
import About from '../containers/about';
import Experiences from '../containers/experiences';
import Faq from '../containers/faq';

const AboutPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <About aboutPage={true} />
      <Experiences />
      <Faq />
    </div>
  );
};

export default AboutPage;
