// userProfileFunctions.js
export const handleInputChange = (userInfo, setUserInfo) => (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };
  
  export const handleSubmit = (userInfo, navigate) => (e) => {
    e.preventDefault();
    // Validar que se hayan completado los campos requeridos
    if (userInfo.username === 'juego' && userInfo.password === 'juego') {
      // Almacena la información del usuario en el LocalStorage
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      // Redirige a la home de la aplicación
      navigate('/Home');
    } else if (userInfo.username !== 'juego' || userInfo.password !== 'juego') {
      alert('Usuario o Contraseña Incorrectas');
    } else if (userInfo.username === '' || userInfo.password === '') {
      alert('Debes completar los campos');
    }
  };