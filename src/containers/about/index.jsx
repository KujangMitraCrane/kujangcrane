import React from 'react';
import '../../styles/about.css';
import { aboutData } from '../../components/constructionData';
import aboutPict from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <h1>Tentang Kami</h1>
        <span />
        <p>
          Kujang Mitra Crane adalah perusahaan jasa sewa crane terpecaya, murah & berkualitas di Jawa Barat yang berlokasi di Bogor. Kujang Mitra Crane sudah menjalani berbagai pekerjaan diantaranya,
          <i style={{ fontWeight: 'bold' }}> construction support, infrastructure support, material lift, buildings support, warehouses support dan real estate support. </i>
        </p>
      </div>
      <div className="about-content">
        <div className="content-pict">
          <div className="pict" style={{ backgroundImage: `url(${aboutPict})` }} />
        </div>
        <div className="content">
          {aboutData.map((data) => (
            <div className="data" key={data.id}>
              <span>{data.icon}</span>
              <div className="data-desc">
                <h3>{data.label}</h3>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
