import React from 'react';
import '../../styles/services.css';
import { servicesData } from '../../components/constructionData';

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="our-services">
        <h1>Our Services</h1>
        <span />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquam cum adipisci soluta ullam.</p>
      </div>
      <div className="services-content">
        {servicesData.map((service) => (
          <div className="content" key={service.id}>
            <div className="image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="desc">
              <h3>{service.title}</h3>
              <span />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
