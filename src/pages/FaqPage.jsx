import React, { useRef } from 'react';
import '../styles/home.css';
import Faq from '../containers/faq';

const FaqPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Faq />
    </div>
  );
};

export default FaqPage;
