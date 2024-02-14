/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ahorcado.css';
import MyButton from '../Button/Button';
// eslint-disable-next-line no-unused-vars
//import MiComponente from '../Funciones/MiComponente';


const Ahorcado = () => {
  const palabras = ['melodia', 'jazz', 'saxofon', 'compositor', 'rock', 'piano', 'bach', 'cancion', 'violin', 'electronica'];
  const intentosMaximos = 6;

  const [palabra, setPalabra] = useState('');
  const [pista, setPista] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [intentosRestantes, setIntentosRestantes] = useState(intentosMaximos);
  const [estadoJuego, setEstadoJuego] = useState('enJuego'); // 'enJuego', 'ganado', 'perdido'
  // eslint-disable-next-line no-unused-vars
  const [valor, setValor] = useState('')
 

  const empezarPartida = () => {
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    const pistaInicial = palabraAleatoria.split('').map(() => '_');
    
    setPalabra(palabraAleatoria);
    setPista(pistaInicial);
    setLetrasUsadas([]);
    setIntentosRestantes(intentosMaximos);
    setEstadoJuego('enJuego');
  };
  

  const manejarInputLetra = () => {
    if (estadoJuego !== 'enJuego') return;
    if (letrasUsadas.includes(valor)) return;
      // eslint-disable-next-line no-unreachable    
    const letra = valor.toLocaleLowerCase()
    const nuevasLetrasUsadas = [...letrasUsadas, letra];
    setLetrasUsadas(nuevasLetrasUsadas);
    
    if (palabra.includes(letra)) {
      // La letra está en la palabra
      const nuevaPista = palabra.split('').map((char, index) => (char === letra ? letra : pista[index]));
      setPista(nuevaPista);
      if (!nuevaPista.includes('_')) {
        // Todas las letras han sido adivinadas
        setEstadoJuego('ganado');
      }
    } else {
      // La letra no está en la palabra
      setIntentosRestantes(intentosRestantes - 1);
      if (intentosRestantes === 1) {
        // Agotados todos los intentos
        setEstadoJuego('perdido');
      }
    }
    //Limpia el valor del input después de manejar la letra
    setValor('')
  }

  
  useEffect(() => {
    // Reiniciar la partida cuando cambia la palabra
    empezarPartida();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const borrarLetra = () => {
    console.log('LIMPIAR')
    setValor('')
  }
  // eslint-disable-next-line no-unused-vars
  
  return (
    <>
    <div className='caja'>
      <h1>¿Lo tienes?</h1>
      <div className='caja2'>
      <div className='segundaCaja'>
          <p>Palabra: {pista.join(' ')}</p>
          <div className='botones'>
          <input
            type="text"
            maxLength="1"
            placeholder='Introduce una letra'
            value={valor}
            // eslint-disable-next-line no-unused-vars
            onChange={(e) => setValor(e.target.value.toLowerCase())}
            />
            <button className="buttonButton" onClick={manejarInputLetra}>VER LETRA</button>
            <button className="buttonButton" onClick={borrarLetra}>BORRAR LETRA</button>
          </div> 
      </div>
      <div className='terceraCaja'>
          {estadoJuego === 'ganado' && <p>¡ 😀 Has Ganado!</p>}
          {estadoJuego === 'perdido' && <p>¡ 😶 Has Perdido! La palabra era: {palabra}</p>}
          {estadoJuego === 'enJuego' && (
            <div className='cajaDerecha'>
               <p>Letras Usadas: {letrasUsadas.join('-')}</p>
               <p>Intentos Restantes: {intentosRestantes}</p>
             </div>
          )}
          <button className="buttonButton" onClick={empezarPartida}> Nueva Partida </button>
      </div> 
      </div>
    </div>
    <div className="miButton">
      <MyButton ><Link to="/Home">IR JUEGOS</Link></MyButton>
    </div>
    </>
  );
};


export default Ahorcado;
