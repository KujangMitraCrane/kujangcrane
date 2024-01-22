import React from 'react';
import '../../styles/experiences.css';
import experience from '../../assets/experiences.jpg';

const Experiences = () => {
  return (
    <div className="experiences" style={{ backgroundImage: `url(${experience})` }}>
      <div className="layer">
        <div className="projects">
          <h3>300+</h3>
          <span>Total Proyek</span>
        </div>
        <div className="clients">
          <h3>500</h3>
          <span>Klien</span>
        </div>
        <div className="total-rents">
          <h3>800+</h3>
          <span>Total Sewa</span>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
