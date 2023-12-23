import React from 'react';

const Filtered = (props) => {
  const { selectedCategory, handleCategory } = props;

  return (
    <ul>
      <li
        className={selectedCategory === 'All' ? 'active' : ''}
        onClick={() => {
          handleCategory('All');
        }}
      >
        All
      </li>
      <li
        className={selectedCategory === 'Construction' ? 'active' : ''}
        onClick={() => {
          handleCategory('Construction');
        }}
      >
        Construction
      </li>
      <li
        className={selectedCategory === 'Infrastructure' ? 'active' : ''}
        onClick={() => {
          handleCategory('Infrastructure');
        }}
      >
        Infrastructures
      </li>
      <li
        className={selectedCategory === 'Material lift' ? 'active' : ''}
        onClick={() => {
          handleCategory('Material lift');
        }}
      >
        Material lift
      </li>
    </ul>
  );
};

export default Filtered;
