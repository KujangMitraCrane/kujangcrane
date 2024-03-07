import React, { useState } from 'react';
import '../../styles/folio.css';
import { folioData } from '../../components/constructionData';
import Filtered from './filtered';
import Dropdown from './dropdown';

const Folio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const filteredCategory = selectedCategory === 'All' ? folioData : folioData.filter((folio) => folio.category === selectedCategory);

  return (
    <div className="folio">
      <div className="our-works">
        <h1>Proyek - Proyek Kami</h1>
        <span />
        <p>Beberapa pekerjaan yang sudah dilakukan oleh perusahaan jasa sewa crane kami, Kujang Mitra Crane.</p>
      </div>
      <div className="filtering">
        <Filtered selectedCategory={selectedCategory} handleCategory={handleCategory} />
        <Dropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} selectedCategory={selectedCategory} handleCategory={handleCategory} />
      </div>
      <div className="folio-content">
        {filteredCategory.map((folio) => (
          <div key={folio.id} className="content" style={{ backgroundImage: `url(${folio.image})` }}>
            <div className="layer">
              <p>{folio.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folio;
