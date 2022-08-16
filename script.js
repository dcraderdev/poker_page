// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
var deck = [];
var board = [];
var handPlayerOne = [];
var handPlayerTwo = [];
var handPlayerThree = [];
var handPlayerFour = [];
var handPlayerFive = [];
var handPlayerSix = [];
var handPlayerSeven = [];
var handPlayerEight = [];
var handPlayerNine = [];
// test input for board and hand
var testBoardFlop = [];
var testBoardTurn = [];
var testBoardRiver = [];
var testHandPlayerOne = [];
var testHandPlayerTwo = [];
var testHandPlayerThree = [];
var testHandPlayerFour = [];
var testHandPlayerFive = [];
var testHandPlayerSix = [];
var testHandPlayerSeven = [];
var testHandPlayerEight = [];
var testHandPlayerNine = [];
// assign number values to face cards
var A = 14;
var K = 13;
var Q = 12;
var J = 11;
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
  return `------Count is good, 52 in the deck-------`;
}



//deck shuffler
function shuffleDeck(deck) {
 // randomizedDeck = [];
  for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

// create deck to shuffle
var testDeck = createDeck();
console.log(testDeck);
console.log(shuffleDeck(testDeck));
//check for dupes
console.log(testDeck);
console.log(cardsInDeck(testDeck));

// 3 card flop array
function seeFlop(deck) {
  // var testBoardFlop = [];
  // we start at index 1, and end on 4 becuase we need to burn first card
  for (let i = 1; i < 4; i++) {
    console.log(deck[i]);
    testBoardFlop.push(deck[i]);
  }
  return testBoardFlop
}

// test 3 card flop array
console.log(seeFlop(testDeck)); 




// 3 card flop array + new turn card
function seeTurn(deck) {
  for (let i = 5; i < 6; i++) {
    console.log(deck[i]);
    testBoardTurn.push(deck[i]);
  }
  return testBoardFlop.concat(testBoardTurn);
}

// test 3 card flop array + new turn card
console.log(seeTurn(testDeck)); 


// 3 card flop array, turn card + new river card
function seeRiver(deck) {
  for (let i = 7; i < 8; i++) {
    console.log(deck[i]);
    testBoardRiver.push(deck[i]);
  }
  return testBoardFlop.concat(testBoardTurn.concat(testBoardRiver));
}

// test 3 card flop array, turn card + new river card
console.log(seeRiver(testDeck)); 




// player one cards - 2 card array
function seePlayerHoleCards(deck) {
  for (let i = 8; i <= 9; i++) {
    console.log(deck[i]);
    testHandPlayerOne.push(deck[i]);
  }
  return testHandPlayerOne;
}

// player one cards - 2 card array
console.log(seePlayerHoleCards(testDeck)); 

//
// main goal - split up arrays to interpret hand strength based on hand and board


// split board into separate cards with separate suits
// split board into separate cards with separate suits

console.log(testBoardFlop);
console.log(testHandPlayerOne);
console.log(testBoardFlop[0][0], testBoardFlop[0][1]);

// sort cards by rankings
function boardHandRankings(){
  return testBoardFlop[0][0]
}
console.log(boardHandRankings()); 
// sort cards by suits

// combine and check for truths





console.log('^^^here^^^');






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
    [A, d],
    [Q, d],
    [10, h],
  ],
  [2, 7]
);
