/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TresEnRaya.css'
import MyButton from '../Button/Button';


const TresEnRaya = () => {
  const initialBoard = Array(3).fill(null).map(() => Array(3).fill(null));
  const [isStarted, setIsStarted] = useState(false);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('🟥');
  const [winner, setWinner] = useState(null);


  const startGame = () => {
    setIsStarted(true);
    setBoard(initialBoard);
    setCurrentPlayer('🟥');
    setWinner(null);
  };

  const endGame = () => {
    setIsStarted(false);
    setBoard(initialBoard);
    setCurrentPlayer('🟥'); 
    setWinner(null);
  };

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return; // Si la celda ya está marcada o hay un ganador, no hacer nada

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : cell
      )
    );

    setBoard(newBoard);
    checkWinner(newBoard);
    togglePlayer();
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === '🟥' ? '🔴' : '🟥');
  };

  const checkWinner = (currentBoard) => {
    // Lógica para verificar ganador (filas, columnas, diagonales)

    // Filas
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[i][0] === currentPlayer &&
        currentBoard[i][1] === currentPlayer &&
        currentBoard[i][2] === currentPlayer
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    // Columnas
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[0][i] === currentPlayer &&
        currentBoard[1][i] === currentPlayer &&
        currentBoard[2][i] === currentPlayer
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
    // Diagonales
    if (
      (currentBoard[0][0] === currentPlayer &&
        currentBoard[1][1] === currentPlayer &&
        currentBoard[2][2] === currentPlayer) ||
      (currentBoard[0][2] === currentPlayer &&
        currentBoard[1][1] === currentPlayer &&
        currentBoard[2][0] === currentPlayer)
    ) {
      setWinner(currentPlayer);
      return;
    }
    // Empate
    if (!currentBoard.flat().includes(null)) {
      setWinner('Empate');
    }
  };

  useEffect(() => {
    if (isStarted) {
      checkWinner(board);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, isStarted]);

  return (
    <>
          <div className='caja'>
                <h1>Tres en Línea</h1>
                <div className='texto'>{isStarted && <p>Es el turno de {currentPlayer}</p>}</div>
                  <div className='texto2'>{winner && <p>{winner === 'Empate' ? '¡ 🤭 HAN EMPATADO !' : `¡ 😀 Felicitaciones has GANADO ${winner}!`}</p>}</div> 
                <div className="board">
                    {board.map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                          {row.map((cell, colIndex) => (
                            <button
                              key={colIndex}
                              className="cell"
                              onClick={() => handleClick(rowIndex, colIndex)}
                            >
                              {cell}
                            </button>
                          ))}
                      </div>
                    ))}
                </div>
                        <div className='partida'>
                        <button className='buttonButton' onClick={isStarted ? endGame : startGame}>
                        {isStarted ? 'Terminar Partida' : 'Comenzar Partida'}
                        </button>
                        </div>
          </div>
                       <div className="miButtonTresEnLinea">
                       <MyButton><Link to="/Home">IR JUEGOS</Link></MyButton>
                       </div>
    </>
  );
};

export default TresEnRaya;
