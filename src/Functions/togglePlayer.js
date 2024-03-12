/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

  export const startGame = () => {
    setIsStarted(true);
    setBoard(initialBoard);
    setCurrentPlayer('🟥');
    setWinner(null);
  };
