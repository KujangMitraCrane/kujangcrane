import React from 'react';

const OfferContent = (props) => {
  const { title, specific, price, image } = props;

  return (
    <div className="content">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="desc">
        <label>
          name: <h2>{title}</h2>
        </label>
        <p className="price">
          from: <label>Rp. {price}</label>
        </p>
        <p className="specs">
          Ton: <label>{specific}</label>
        </p>
      </div>
    </div>
  );
};

export default OfferContent;
