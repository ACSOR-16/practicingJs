const deck = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

function dealCards(numberCard) {
  const dealCards = deck.splice(0, numberCard)
  console.log(dealCards); 
}

shuffleDeck();
console.log(deck);

const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);
