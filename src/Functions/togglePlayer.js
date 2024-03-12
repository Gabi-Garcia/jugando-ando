/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */



  export const startGame = () => {
    setIsStarted(true);
    setBoard(initialBoard);
    setCurrentPlayer('🟥');
    setWinner(null);
  };


// export const togglePlayer = () => {
//       setCurrentPlayer(currentPlayer === '🟥' ? '🔴' : '🟥');
//     };

    // export const checkWinner = (currentBoard) => {
    //     // Filas
    //     for (let i = 0; i < 3; i++) {
    //       if (
    //         currentBoard[i][0] === currentPlayer &&
    //         currentBoard[i][1] === currentPlayer &&
    //         currentBoard[i][2] === currentPlayer
    //       ) {
    //         setWinner(currentPlayer);
    //         return;
    //       }
    //     }
    //     // Columnas
    //     for (let i = 0; i < 3; i++) {
    //       if (
    //         currentBoard[0][i] === currentPlayer &&
    //         currentBoard[1][i] === currentPlayer &&
    //         currentBoard[2][i] === currentPlayer
    //       ) {
    //         setWinner(currentPlayer);
    //         return;
    //       }
    //     }
    //     // Diagonales
    //     if (
    //       (currentBoard[0][0] === currentPlayer &&
    //         currentBoard[1][1] === currentPlayer &&
    //         currentBoard[2][2] === currentPlayer) ||
    //       (currentBoard[0][2] === currentPlayer &&
    //         currentBoard[1][1] === currentPlayer &&
    //         currentBoard[2][0] === currentPlayer)
    //     ) {
    //       setWinner(currentPlayer);
    //       return;
    //     }
    //     // Empate
    //     if (!currentBoard.flat().includes(null)) {
    //       setWinner('Empate');
    //     }
    //   };