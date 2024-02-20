// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './UserProfile.css'
import Footer from '../../components/Footer/Footer';


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
    <>
    <div className='cajaForm'>
      <p>¡Te damos la bienvenida a nuestra aplicación de juegos! Para comenzar la diversión,
         simplemente ingresa tu nombre de usuario y contraseña! 
        </p>
      <form  className="formulario"onSubmit={handleSubmit}>
        <label>
          Usuario:
          </label> 
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        <label>
        Contraseña:
        </label>
          <input
            type="text"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        {/* Agrega más campos según sea necesario */}
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
