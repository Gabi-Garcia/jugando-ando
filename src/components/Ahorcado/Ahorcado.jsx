/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ahorcado = () => {
  const palabras = ['coche', 'computadora', 'programacion', 'javascript', 'react', 'desarrollo'];
  const intentosMaximos = 6;

  const [palabra, setPalabra] = useState('');
  const [pista, setPista] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [intentosRestantes, setIntentosRestantes] = useState(intentosMaximos);
  const [estadoJuego, setEstadoJuego] = useState('enJuego'); // 'enJuego', 'ganado', 'perdido'

  const empezarPartida = () => {
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    const pistaInicial = palabraAleatoria.split('').map(() => '_');
    
    setPalabra(palabraAleatoria);
    setPista(pistaInicial);
    setLetrasUsadas([]);
    setIntentosRestantes(intentosMaximos);
    setEstadoJuego('enJuego');
  };

  const manejarInputLetra = (letra) => {
    if (estadoJuego !== 'enJuego') return;

    if (letrasUsadas.includes(letra)) {
      // La letra ya fue utilizada
      return;
    }

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
  };

  useEffect(() => {
    // Reiniciar la partida cuando cambia la palabra
    empezarPartida();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div>
      <h1>Ahorcado</h1>
      <button onClick={empezarPartida}>Empezar Partida</button>
      <p>Palabra: {pista.join(' ')}</p>
      <p>Letras Usadas: {letrasUsadas.join(', ')}</p>
      <p>Intentos Restantes: {intentosRestantes}</p>
      {estadoJuego === 'ganado' && <p>¡Has Ganado!</p>}
      {estadoJuego === 'perdido' && <p>¡Has Perdido! La palabra era: {palabra}</p>}
      {estadoJuego === 'enJuego' && (
        <div>
          <p>Ingresa una letra:</p>
          <input
            type="text"
            maxLength="1"
            onChange={(e) => manejarInputLetra(e.target.value.toLowerCase())}
          />
        </div>
      )}
    </div>
    <Link to="/Home">IR JUEGOS</Link>
    </>
  );
};

export default Ahorcado;
