import React from 'react';
import '../../styles/about.css';
import { aboutData } from '../../components/constructionData';
import aboutPict from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-us">
        <h1>About Us</h1>
        <span />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quasi molestiae, facilis recusandae tempora modi.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel eos sunt est.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
