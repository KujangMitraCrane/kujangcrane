import React from 'react';
import '../../styles/contact.css';
import ContactInfo from './contactInfo';
import ContactForm from './contactForm';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <span className="underline" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolor beatae molestias asperiores ipsam eveniet dolorem rem, fuga exercitationem, animi neque numquam modi quaerat, iure ea! Aperiam ab iste impedit.</p>
      </div>
      <div className="contact-info">
        <ContactInfo />
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
