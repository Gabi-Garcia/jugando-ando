/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import './TresEnRaya.css';
import { CajaTresEnRaya } from '../../components/CajaTresEnRaya/CajaTresEnRaya';
import { gameReducer, initialState, togglePlayer, checkWinner } from '../gameReducer'; 

  export const TresEnRaya = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const { isStarted, board, currentPlayer, winner } = state;
  
    const startGame = () => {
      dispatch({ type: 'START_GAME' });
    };
  
    const endGame = () => {
      dispatch({ type: 'END_GAME' });
    };
  
    const handleClick = (row, col) => {
      dispatch({ type: 'HANDLE_CLICK', row, col });
    };
  
    useEffect(() => {
      if (isStarted) {
            checkWinner(board);
          }
    }, [board, isStarted]);
  
  return (
    <>
        <div className='CajaTresEnRayaPage'>
                <CajaTresEnRaya
                    isStarted={isStarted}
                    currentPlayer={currentPlayer}
                    winner={winner}
                    board={board}
                    handleClick={handleClick}
                    startGame={startGame}
                    endGame={endGame}
                    />
                <Link to="/Home" className="miButton">IR A JUEGOS</Link>          
        </div>
    </>
  );
};
export default TresEnRaya;
