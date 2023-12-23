import React from 'react';
import '../../styles/cooperation.css';
import indolakto from '../../assets/indolakto.png';
import pocari from '../../assets/otsuka.png';
import mayora from '../../assets/mayora.png';
import samsung from '../../assets/samsung.png';
import enesis from '../../assets/enesis.png';

const Cooperation = () => {
  return (
    <div className="cooperation">
      <span className="companies">
        <img src={indolakto} alt="pt indolakto" />
      </span>
      <span className="companies">
        <img src={pocari} alt="pt amerta indah otsuka" />
      </span>
      <span className="companies">
        <img src={mayora} alt="pt mayora indah tbk" />
      </span>
      <span className="companies">
        <img src={samsung} alt="Samsung Electronics Co., Ltd." />
      </span>
      <span className="companies">
        <img src={enesis} alt="pt marketama indah" />
      </span>
    </div>
  );
};

export default Cooperation;
