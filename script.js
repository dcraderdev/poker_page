// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
var deck = [];
var board = [];
var handOne = [];
var handTwo = [];
var handThree = [];
var handFour = [];
var handFive = [];
var handSix = [];
var handSeven = [];
var handEight = [];
var handNine = [];
// test input for board and hand
var testBoardFlop = [];
var testBoardTurn = [];
var testBoardRiver = [];
var testHandOne = [];
var testHandTwo = [];
var testHandThree = [];
var testHandFour = [];
var testHandFive = [];
var testHandSix = [];
var testHandSeven = [];
var testHandEight = [];
var testHandNine = [];
// assign number values to face cards
var a = 14;
var k = 13;
var q = 12;
var j = 11;
// assign letters to suits
var c = 'clubs';
var d = 'diamond';
var h = 'heart';
var s = 'spade';
// array containing all suits to create deck with
var suits = ['S', 'C', 'H', 'D'];
// arrar containging card # rankings to create deck with
var rankings = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

// create deck function
function createDeck() {
  // iterates through rankings and suits pairing them up in order and placing in global array
  var deck = [];
  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankingCounter = 0; rankingCounter < 13; rankingCounter++) {
      deck.push(rankings[rankingCounter] + suits[suitCounter]);
    }
  }
  return deck;
}

// ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

// counts cards in deck, checks for duplicates
// if deck before or after this index include this card do not add to count
function cardsInDeck(deck) {
  let count = 0;
  let burnedCards = [];

  for (let i = 0; i < deck.length; i++) {
    burnedCards.push(deck[i]);
    if (burnedCards.includes(deck[i + 1])) {
      return `duplicate found ${deck[i]}`;
    } else {
      count++;
    }
  }
  return `Count is good, 52 in the deck`;
}

function shuffleDeck(deck) {
  randomizedDeck = [];
  for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

//create deck to shuffle
var testDeck = createDeck();

console.log(createDeck());
console.log(cardsInDeck(deck));
console.log(suits);
console.log(testDeck);
shuffleDeck(testDeck);
console.log(testDeck);

function seeFlop(deck) {
  var testBoardFlop = [];
  for (let i = 0; i < 3; i++) {
    console.log(deck[i]);
    testBoardFlop.push(deck[i]);
  }
  return testBoardFlop
}

console.log(seeFlop(testDeck)); 



//suits from board - diamond diamond heart
// console.log(board[0][1], board[1][1], board[2][1]);
// card ranking from board - 14, 12, 10
// console.log(board[0][0], board[1][0], board[2][0]);

// init as second card w/o suit
// let cardSecond = [hand[(1, 1)]];
let boardCards = [board[(1, 1)], board[(2, 1)], board[(3, 1)]];

// board and hand listed above ^^
// current hand ranking functions
function isPair(currentBoard, currentHand) {
  // init as first card w/o suit
  let cardOneRanking = [currentHand[0][0]];
  // init as second card w/o suit
  let cardTwoRanking = [currentHand[1][0]];
  let boardCardRanking = [
    currentBoard[0][0],
    currentBoard[1][0],
    currentBoard[2][0],
  ];
  console.log(cardOneRanking, cardTwoRanking, boardCardRanking);
}

// isPair(board, hand);
console.log('^^^here^^^');

function isTwoPair(board, hand) {}
function isThreeOfKind(board, hand) {}
function isStraight(board, hand) {}
function isFullHouse(board, hand) {}
function isFourOfKind(board, hand) {}
function isStraightFlush(board, hand) {}
function isRoyalFlush(board, hand) {}

function outsWithoutSuits(board, hand) {}

console.log(
  [
    [a, d],
    [q, d],
    [10, h],
  ],
  [2, 7]
);
