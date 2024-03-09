import React from 'react';
import '../../styles/contact.css';
import ContactInfo from './contactInfo';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Hubungi Kami</h1>
        <span className="underline" />
        <p>Kami Kujang Mitra Crane perusahaan jasa sewa crane di Indonesia. Siap melayani anda kapanpun. Bisa bertanya segala persoalan apapun. Kami akan support kebutuhan anda.</p>
      </div>
      <div className="contact-info">
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
