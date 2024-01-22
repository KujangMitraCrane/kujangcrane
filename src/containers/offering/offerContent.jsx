import React from 'react';

const OfferContent = (props) => {
  const { title, specific, price, image } = props;

  const handleCheckout = () => {
    const phoneNumber = '081511020455'; // Ganti dengan nomor telepon tujuan
    const message = 'Halo, saya tertarik dengan produk Anda.'; // Ganti dengan pesan Anda
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

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
        <p className="price">
          from: <label>Rp. {price}</label>
        </p>
        <p className="specs">
          Ton: <label>{specific}</label>
        </p>
      </div>
      <div className="actions">
        <button className="checkout" type="button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OfferContent;
