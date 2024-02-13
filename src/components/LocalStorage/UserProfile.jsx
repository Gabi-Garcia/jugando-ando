// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './UserProfile.css'


const UserProfile = () => {
    const navigate = useNavigate();
  // Estado para almacenar la información del usuario
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    // Agrega más campos según sea necesario
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que se hayan completado los campos requeridos
    if (userInfo.username === 'juego' && userInfo.password === 'juego') {
      // Almacena la información del usuario en el LocalStorage
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      // Redirige a la home de la aplicación
      navigate('/home');
    }else if(userInfo.username !== 'juego' && userInfo.password !== 'juego'){
        alert('Usuario o Contraseña Incorrectas');    
    }else if (userInfo.username === '' && userInfo.password === ''){
    alert('Debes completar los campos')
    }
  };
  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        Contraseña:
          <input
            type="text"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Agrega más campos según sea necesario */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UserProfile;
