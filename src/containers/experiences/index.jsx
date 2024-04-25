import React from 'react';
import '../../styles/experiences.css';
import experience from '../../assets/experiences.jpg';

const Experiences = () => {
  return (
    <div className="experiences" style={{ backgroundImage: `url(${experience})` }}>
      <div className="layer">
        <div className="projects">
          <label>300+</label>
          <h3>Total Proyek</h3>
        </div>
        <div className="clients">
          <label>500</label>
          <h3>Klien</h3>
        </div>
        <div className="total-rents">
          <label>800+</label>
          <h3>Total Sewa</h3>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
