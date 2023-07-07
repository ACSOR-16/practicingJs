const SCORE_BOARD = {};

function createScoreBoard() {
  SCORE_BOARD["The Best Ever"] = 1000000;
  
  console.log(SCORE_BOARD);
  return SCORE_BOARD;
}
// console.log(createScoreBoard());

function addPlayer(scoreBoard, player, score) {
  
  scoreBoard[player] = score;
  return scoreBoard;
}

// console.log(addPlayer({ 'Dave Thomas': 0 }, 'Jose Val', 486373));

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  
  return scoreBoard;
}

console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'));
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fan'));
