import React, { useRef } from 'react';
import '../styles/home.css';
import Folio from '../containers/folio';

const FolioPage = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} id="content">
      <Folio />
    </div>
  );
};

export default FolioPage;
