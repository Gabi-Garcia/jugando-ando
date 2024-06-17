/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import TresEnRaya from '../../Pages/TresEnRaya/TresEnRaya'

 const CajaTresEnRaya = ({isStarted, currentPlayer, winner, board, handleClick, startGame, endGame }) => {
  return (
    <>
      <div className='caja'>
                <h1>Tres en Línea</h1>

                <div className='textos'>
                  <div className='texto'>{isStarted && <p>Es el turno de {currentPlayer}</p>}</div>
                  <div className='texto2'>{winner && <p>{winner === 'Empate' ? '¡🤭HAY EMPATE!' : `¡😀 HA GANADO ${winner}!`}</p>}</div> 
                </div>

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
    </>
  )
}
export {CajaTresEnRaya}