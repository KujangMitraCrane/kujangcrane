import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const FooterServices = () => {
  return (
    <>
      <label>Layanan Kami</label>
      <span className="underline" />
      <ul>
        <li>
          <FaCheck /> Warehouses
        </li>
        <li>
          <FaCheck /> High rise buildings
        </li>
        <li>
          <FaCheck /> Real Estate
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
