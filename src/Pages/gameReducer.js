/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
const initialState = {
    isStarted: false,
    board: Array(3).fill(null).map(() => Array(3).fill(null)),
    currentPlayer: '🟥',
    winner: null,
  };
  const gameReducer = (state, action) => {
    switch (action.type) {
      case 'START_GAME':
        return {
          ...initialState,
          isStarted: true,
        };
      case 'END_GAME':
        return initialState;
      case 'HANDLE_CLICK':
        if (state.board[action.row][action.col] || state.winner) {
          return state;
        }
        const newBoard = state.board.map((r, rowIndex) =>
          r.map((cell, colIndex) =>
            rowIndex === action.row && colIndex === action.col
              ? state.currentPlayer
              : cell
          )
        ); 
        return {
          ...state,
          board: newBoard,
          winner: checkWinner(newBoard, state.currentPlayer),
          currentPlayer: togglePlayer(state.currentPlayer),
        };
      default:
        return state;
    }
  };
  const togglePlayer = (currentPlayer) => {
    return currentPlayer === '🟥' ? '🔴' : '🟥';
  };
  // eslint-disable-next-line no-unused-vars
  const checkWinner = (currentBoard, currentPlayer) => {
    for (let i = 0; i < 3; i++) {
            if (
              currentBoard[i][0] === currentPlayer &&
              currentBoard[i][1] === currentPlayer &&
              currentBoard[i][2] === currentPlayer
            ) {
              return currentPlayer;
            }
          }
          // Columnas
          for (let i = 0; i < 3; i++) {
            if (
              currentBoard[0][i] === currentPlayer &&
              currentBoard[1][i] === currentPlayer &&
              currentBoard[2][i] === currentPlayer
            ) {
              //   setWinner(currentPlayer);
              return currentPlayer;
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
            return currentPlayer;
          }
          if (!currentBoard.flat().includes(null)) {
            // 
            return 'Empate';
          }
          return null;
        };
  export { gameReducer, initialState, togglePlayer, checkWinner };
  