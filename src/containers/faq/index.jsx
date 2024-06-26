import React, { useState } from 'react';
import '../../styles/faq.css';
import faqPict from '../../assets/truck-crane.jpg';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { faqData } from '../../components/constructionData';

const Faq = () => {
  const [expended, setExpended] = useState(0);

  const handleExpended = (nextIndex) => {
    setExpended((currIndex) => {
      if (currIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedFaq = faqData.map((faq, index) => {
    const isExpended = index === expended;

    return (
      <div className="accordion" key={faq.id}>
        <div className="accordion-label" onClick={() => handleExpended(index)}>
          <label>{faq.label}</label>
          <MdOutlineArrowDropDown />
        </div>
        {isExpended && <div className="accordion-content">{faq.text}</div>}
      </div>
    );
  });

  return (
    <div className="faq">
      <div className="why-us">
        <h2>Kenapa Memilih Kami?</h2>
        <span></span>
        <div className="rendered">{renderedFaq}</div>
      </div>
      <div className="faqImage">
        <div className="image" style={{ backgroundImage: `url(${faqPict})` }} />
      </div>
    </div>
  );
};

export default Faq;
