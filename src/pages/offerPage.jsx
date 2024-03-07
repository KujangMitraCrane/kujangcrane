import React, { useRef } from 'react';
import '../styles/home.css';
import Offering from '../containers/offering';

const OfferPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Offering homePage={true} />
    </div>
  );
};

export default OfferPage;
