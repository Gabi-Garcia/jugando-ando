/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'
import Footer from '../../components/Footer/Footer';
import { handleInputChange, handleSubmit } from '../../Functions/userProfileFunctions';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ 
    username: '',
    password: '',
  });
  return (
    <>
    <div className='cajaForm'>
      <p>¡Te damos la bienvenida a nuestra aplicación de juegos! Para comenzar la diversión,
        simplemente crea un nombre de usuario y contraseña!
        </p>
      <form  className="formulario"onSubmit={handleSubmit(userInfo, navigate)}>
        <label>
          Usuario:
          </label> 
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange(userInfo, setUserInfo)}
          />
        <label>
        Contraseña:
        </label>
          <input
            type="text"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange(userInfo, setUserInfo)}
          />
        <button  className="buttonButton" type="submit">Guardar</button>
      </form>
    </div>
    <div className='footerUserProfile'>
    <Footer />
    </div>
    </>
  );
};
export default UserProfile;
