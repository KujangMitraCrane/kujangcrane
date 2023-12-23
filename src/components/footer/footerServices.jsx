import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const FooterServices = () => {
  return (
    <>
      <label>Our Services</label>
      <span className="underline" />
      <ul>
        <li>
          <FaCheck /> Mining
        </li>
        <li>
          <FaCheck /> High rise buildings
        </li>
        <li>
          <FaCheck /> Factories & warehouses
        </li>
        <li>
          <FaCheck /> Civil construction
        </li>
        <li>
          <FaCheck /> Infrastructure
        </li>
        <li>
          <FaCheck /> Material lift
        </li>
      </ul>
    </>
  );
};

export default FooterServices;
