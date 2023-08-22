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

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

console.log(updateScore({ 'Freyja Cir': 12771008 }, 'Freyja Cir', 73));

function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    scoreBoard[key] += 100;    
  }
  return scoreBoard;
}

console.log(applyMondayBonus({
  'Ami Pastor': 345,
  'Min-seo Shin': 19,
  'Jesse Johnson': 122,
}));  

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

function normalize(score) {
  return 2 * score + 10;
}
const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));