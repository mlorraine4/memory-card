const controller = (() => {
  let moves = [];

  function addMoves(move) {
    moves.push(move);
  }

  const checkTurn = (move) => {
    if (moves.length === 0) {
      addMoves(move);
      return true;
    }
    for (let i = 0; i < moves.length; i++) {
      if (move === moves[i]) {
        moves = [];
        return false;
      }
    }

    addMoves(move);
    return true;
  };
  return { addMoves, checkTurn };
})();

export { controller };
