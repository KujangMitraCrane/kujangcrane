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
        className={selectedCategory === 'Construction Support' ? 'active' : ''}
        onClick={() => {
          handleCategory('Construction Support');
        }}
      >
        Construction Support
      </li>
      <li
        className={selectedCategory === 'Infrastructure Support' ? 'active' : ''}
        onClick={() => {
          handleCategory('Infrastructure Support');
        }}
      >
        Infrastructures Support
      </li>
      <li
        className={selectedCategory === 'Material Lift' ? 'active' : ''}
        onClick={() => {
          handleCategory('Material Lift');
        }}
      >
        Material Lift
      </li>
      <li
        className={selectedCategory === 'Warehouses Support' ? 'active' : ''}
        onClick={() => {
          handleCategory('Warehouses Support');
        }}
      >
        Warehouses Support
      </li>
      <li
        className={selectedCategory === 'Buldings Support' ? 'active' : ''}
        onClick={() => {
          handleCategory('Buildings Support');
        }}
      >
        Buildings Support
      </li>
      <li
        className={selectedCategory === 'Real Estate Support' ? 'active' : ''}
        onClick={() => {
          handleCategory('Real Estate Support');
        }}
      >
        Real Estate Support
      </li>
    </ul>
  );
};

export default Filtered;
