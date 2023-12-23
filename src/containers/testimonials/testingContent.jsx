import React from 'react';
import { BsChatQuote } from 'react-icons/bs';

const TestingContent = (props) => {
  const { name, company, text } = props;

  return (
    <div className="content">
      <span className="icon">
        <BsChatQuote />
      </span>
      <h2>{text}</h2>
      <span className="underline"></span>
      <div className="clients">
        <p className="name">{name}</p>
        <span>{company}</span>
      </div>
    </div>
  );
};

export default TestingContent;
