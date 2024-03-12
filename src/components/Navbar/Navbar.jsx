/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React from 'react';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import linksData from '../../Data/linksData,js';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {linksData.map((link, index) => (
          <NavbarLinks key={index} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
