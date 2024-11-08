/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ahorcado.css';
// eslint-disable-next-line no-unused-vars
//import MiComponente from '../Funciones/MiComponente';


const Ahorcado = () => {
  const palabrasConConceptos = {
    melodia: "Secuencia de notas que forman una estructura musical.",
    jazz: "Género musical caracterizado por la improvisación.",
    saxofon: "Instrumento de viento usado comúnmente en el jazz.",
    compositor: "Persona que crea música.",
    rock: "Género musical con guitarras eléctricas y batería.",
    piano: "Instrumento musical de teclado.",
    bach: "Compositor famoso de música barroca.",
    cancion: "Composición musical con letra.",
    violin: "Instrumento de cuerda tocado con arco.",
    electronica: "Género musical creado principalmente con sintetizadores y computadoras.",
  };


  const intentosMaximos = 6;

  const [palabra, setPalabra] = useState('');
  const [concepto, setConcepto] = useState(''); // Añadimos el estado de concepto
  const [pista, setPista] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [intentosRestantes, setIntentosRestantes] = useState(intentosMaximos);
  const [estadoJuego, setEstadoJuego] = useState('enJuego'); // 'enJuego', 'ganado', 'perdido'
  // eslint-disable-next-line no-unused-vars
  const [valor, setValor] = useState('')
 

  const empezarPartida = () => {
    const palabras = Object.keys(palabrasConConceptos);
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    const pistaInicial = palabraAleatoria.split('').map(() => '_');
    
    setPalabra(palabraAleatoria);
    setConcepto(palabrasConConceptos[palabraAleatoria]); // Establecemos el concepto correspondiente
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
    <div className='cajaAhorcado'>
      <div className='cajaCabecera'>
          <h1>¿Lo sabes?</h1>
          <p className='subtitulo'>Tienes <span>6</span> oportunidades por cada palabra</p>
      </div>
      <div className='caja2'>
          <div className='segundaCaja'>
              <p>Palabra: {pista.join(' ')}</p>
              <p className='concepto'>Pista: {concepto}</p> {/* Mostramos el concepto como pista */}
                    <div className='botones'>
                            <input
                            type="text"
                            maxLength="1"
                            placeholder='letra'
                            value={valor}
                            // eslint-disable-next-line no-unused-vars
                            onChange={(e) => setValor(e.target.value.toLowerCase())}
                            />
                            <button className="buttonButton" onClick={manejarInputLetra}>VER LETRA</button>
                            <button className="buttonButton" onClick={borrarLetra}>BORRAR LETRA</button>
                    </div> 
          </div> 
          <div className='terceraCaja'>
          {estadoJuego === 'ganado' && <p>¡😀 HAS GANADO!</p>}
          {estadoJuego === 'perdido' && <p>¡😶 Has Perdido! La palabra era: {palabra} ¡Inténtalo otra vez!</p>}
          {estadoJuego === 'enJuego' && (
            <div className='cajaDerecha'>
                <p>Letras Usadas: {letrasUsadas.join('-')}</p>
                <p style={{ color: intentosRestantes <= 3 ? "rgb(231, 111, 111)" : "rgb(128, 226, 128)"}}>
                    Tienes {intentosRestantes} intentos
                </p>
            </div> 
          )}
          <button className="buttonButton" onClick={empezarPartida}> Nueva Partida </button>
      </div> 
      </div>
      <Link to="/Home" className="miButton">IR A JUEGOS</Link>
    </div>
    </>
  );
};


export default Ahorcado;
