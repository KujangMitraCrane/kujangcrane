import React from 'react';
import '../../styles/services.css';
import { servicesData } from '../../components/constructionData';

const Services = () => {
  return (
    <div className="services">
      <div className="our-services">
        <h1>Layanan Kami</h1>
        <span />
        <p>Kujang Mitra Crane memberikan full support layanan kepada customer sesuai kebutuhan.</p>
      </div>
      <div className="services-content">
        {servicesData.map((service) => (
          <div className="content" key={service.id}>
            <div className="image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="desc">
              <label>{service.title}</label>
              <span />
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
