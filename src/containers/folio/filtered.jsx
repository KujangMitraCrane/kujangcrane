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
        className={selectedCategory === 'Material Lift' ? 'active' : ''}
        onClick={() => {
          handleCategory('Material Lift');
        }}
      >
        Material Lift
      </li>
      <li
        className={selectedCategory === 'Warehouses' ? 'active' : ''}
        onClick={() => {
          handleCategory('Warehouses');
        }}
      >
        Warehouses
      </li>
      <li
        className={selectedCategory === 'High Rise Buldings' ? 'active' : ''}
        onClick={() => {
          handleCategory('High Rise Buildings');
        }}
      >
        High Rise Buildings
      </li>
      <li
        className={selectedCategory === 'Real Estate' ? 'active' : ''}
        onClick={() => {
          handleCategory('Real Estate');
        }}
      >
        Real Estate
      </li>
    </ul>
  );
};

export default Filtered;
