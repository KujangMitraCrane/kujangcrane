import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const contactFormHandler = (event) => {
    event.preventDefault();

    const formData = { name, email, phone };

    const formDataString = JSON.stringify(formData);

    window.localStorage.setItem('userData', formDataString);

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <form action="POST" onSubmit={contactFormHandler}>
        <div className="identity">
          <input type="text" placeholder="Your Name *" required onChange={(e) => setName(e.target.value)} value={name} />
          <input type="email" placeholder="Your Email *" required onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="number" placeholder="Your Phone *" required onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <div className="message">
          <textarea placeholder="Message *" required onChange={(e) => setMessage(e.target.value)} value={message} />
        </div>
        <div className="actions">
          <p>We will contact you within one business day</p>
          <button className="submit" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
