import React from 'react';
import '../../styles/experiences.css';
import experience from '../../assets/experiences.jpg';

const Experiences = () => {
  return (
    <div className="experiences" style={{ backgroundImage: `url(${experience})` }}>
      <div className="layer">
        <div className="projects">
          <label>300+</label>
          <span>Total Proyek</span>
        </div>
        <div className="clients">
          <label>500</label>
          <span>Klien</span>
        </div>
        <div className="total-rents">
          <label>800+</label>
          <span>Total Sewa</span>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
