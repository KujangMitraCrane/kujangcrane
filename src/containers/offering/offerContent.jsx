import React from 'react';

const OfferContent = (props) => {
  const { title, specific, merk, image } = props;

  const handleCheckout = () => {
    const phoneNumber = '081511020455';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="content">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="desc">
        <label>
          <h2>{title}</h2>
        </label>
        <p className="merk">
          Merk: <label>{merk}</label>
        </p>
        <p className="specs">
          Ton: <label>{specific}</label>
        </p>
      </div>
      <div className="actions">
        <button className="checkout" type="button" onClick={handleCheckout}>
          Sewa
        </button>
      </div>
    </div>
  );
};

export default OfferContent;
