/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import sudoku from 'sudoku';
import { Link } from 'react-router-dom';
import './Sudoku.css'
import MyButton from '../Button/Button'

const Sudoku = () => {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [userBoard, setUserBoard] = useState([]);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
    setUserBoard(newBoard.map((value) => (value !== null ? value : '')));
    setIsValid(null);
  }, []);

  const handleChange = (index, value) => {
    const newUserBoard = [...userBoard];
    newUserBoard[index] = value;
    setUserBoard(newUserBoard);
  };

  const handleValidate = () => {
    const solved = sudoku.solvepuzzle(sudokuBoard);
    setIsValid(sudokuBoard.every((value, index) => value === solved[index]));
  };

  const handleRestart = () => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
    setUserBoard(newBoard.map((value) => (value !== null ? value : '')));
    setIsValid(null);
  };

  return (
    <>
    <div className='caja'>
          <h1>Sudoku</h1> 
            {isValid !== null && (
                    <div className='texto'><p>{isValid ? '¡ 😃 Sudoku resuelto correctamente!' : '¡ 😐 Sudoku incorrecto! ¡Inténtalo nuevamente!' }</p></div>
            )}
          <div className="sudoku-board">
            {userBoard.map((value, index) => (
              <input className='celda'
              key={index} 
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              disabled={sudokuBoard[index] !== null}
              />
              ))
            }
          </div>
          <div className='botones'>
          <button className='buttonButton' onClick={handleValidate}>Validar</button>
          <button className='buttonButton' onClick={handleRestart}>Nueva Partida</button>
          </div>
    </div>
    <MyButton><Link to="/Home">IR JUEGOS</Link></MyButton>
    </>
  );
};

export default Sudoku;
