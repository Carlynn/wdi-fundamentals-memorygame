var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];
var score = 0;

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    score = score+1;
    document.getElementById("scoreBoxWins").innerHTML=score;
  } else {
    alert("Sorry, try again.");
    score = score+1;
    document.getElementById("scoreBoxLosses").innerHTML=score;
  }
};

var flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  cardsInPlay.push(cards[cardId].card);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
};

var createBoard = function () {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();

//Game reset on 'reset' button click
document.getElementById('reset').onclick = function () {
  document.getElementById('img').innerHTML = location.reload();
};
