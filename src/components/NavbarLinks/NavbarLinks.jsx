/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// components/NavbarLink.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLink = ({ path, imageSrc, alt, text }) => (
  <li>
    <Link to={path}>
      <img className="card" src={imageSrc} alt={alt} />
      <p className='home'>{text}</p>
    </Link>
  </li>
);

export default NavbarLink;
