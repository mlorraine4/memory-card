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

  const displayWrongMove = (move) => {
    console.log(document.getElementById(move));
    document.getElementById(move).classList.add("wrong");
  };

  const clearBoard = (move) => {
    document.getElementById(move).classList.remove("wrong");
  };
  return { addMoves, checkTurn, displayWrongMove, clearBoard };
})();

export { controller };
