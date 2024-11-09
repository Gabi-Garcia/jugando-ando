import './NotFound.css';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars, react/prop-types
const NotFound = ({ isAuthenticated }) => {

    return (
    <>
    <div className='caja404'>
      <h1>404 - Página no encontrada</h1>
      <p>Parece que intentaste acceder a una página que no existe o no tienes acceso.</p>
      {isAuthenticated ? (
        <Link to="/Home">Volver a la página principal</Link>
      ) : (
        <Link className="miButton" to="/">Registrarse</Link>
      )}
    </div>
    </>
    )
}

export default NotFound