// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
var deck = [];
// var board = [];
var board = {};
var handPlayerOne = {
  card1: [],
  card2: [],
};
var handPlayerTwo = {
  card1: [],
  card2: [],
};
var handPlayerThree = {};
var handPlayerFour = {};
var handPlayerFive = {};
var handPlayerSix = {};
var handPlayerSeven = {};
var handPlayerEight = {};
var handPlayerNine = {};
// var board = {};
// test input for board and hand
// var testBoard = {};

var testBoard = {
  card1: ['4H'],
  card2: ['AS'],
  card3: ['5S'],
  card4: ['7S'],
  card5: ['3H'],
};
var cardAndBoard = {};
var testBoardFlop = {};
var testBoardFlop2 = [];
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
console.log(`               =-=-=-=-=-=-=-deck creation-=-=-=-=-=-=-`);
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

//  Out puts: ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

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
  return count + ' cards.';
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
console.log(`               =-=-=-=-=-=-=-deck suffled-=-=-=-=-=-=-`);

console.log(testDeck);
console.log(cardsInDeck(testDeck));

// // 3 card flop array
// function seeFlop(deck) {
//   //var testBoardFlop = [];
//   // we start at index 1, and end on 4 becuase we need to burn first card
//   for (let i = 1; i < 4; i++) {
//     console.log(`Dealer turns over ${deck[i]}`);
//     testBoardFlop2.push(deck[i]);
//   }
//   return testBoardFlop2;
// }

// push flop into board hash
// function logFlop(deck) {
//   let cardNumber = 1
//   let i = 1
//   while (i < 4) {
//     board.value(i).push(deck[i]);
//     i++;
//     cardNumber++;
//   }
//   return testBoardFlop;
// }

console.log(`               =-=-=-=-=-=-=-deal cards 2 players-=-=-=-=-=-=-`);

// function cardsForTwoPLayers(deck) {
//   //cards to each player
//   let numberOfCards = 1;
//   let i = 0;
//   // for (let i = 1; i < 4; i++)
//   while (i < 2) {
//     if (i === 0) {    
//       for (let y = 0; y < 1; y++) {
//       handPlayerOne[`card${numberOfCards}`] = deck[y];
//       handPlayerTwo[`card${numberOfCards}`] = deck[y+1];
//     }
//     if (i === 1) {
//       for (let z = 2; z < 3; z++) {
//         handPlayerOne[`card${numberOfCards}`] = deck[z];
//         handPlayerTwo[`card${numberOfCards}`] = deck[z+1];
//     }
//   }

//     numberOfCards++;
//     i++;
//   }
//   }
// }

function cardsForTwoPLayers(deck) {
  handPlayerOne[`card1`] = deck[0];
  handPlayerTwo[`card1`] = deck[1];
  handPlayerOne[`card2`] = deck[2];
  handPlayerTwo[`card2`] = deck[3];
}

handPlayerOne['card1'] = testDeck[1];
handPlayerTwo['card1'] = testDeck;
cardsForTwoPLayers(testDeck);
console.log(handPlayerOne);
console.log(handPlayerTwo);

//cards for flop
for (let i = 6; i < 8; i++)
  //card for turn
  for (let i = 9; i < 10; i++)
    //card for river
    for (let i = 11; i < 12; i++)
      //   {
      //   board[`card${(i)}`] = deck[i]
      //   testBoardFlop[`card${(i)}`] = deck[i]
      //   }
      //   return testBoardFlop
      // }

      console.log(`             =-=-==-=-=-the flop 2 players-=-=-=-==-`);

// push flop cards into board hash
function logFlop2Players(deck) {
  for (let i = 5; i < 8; i++) {
    board[`card${i-4}`] = deck[i];
    testBoardFlop[`card${i-4}`] = deck[i];
  }
  return testBoardFlop;
}

logFlop2Players(testDeck);
console.log(testBoardFlop);
console.log(board);

console.log(`               =-=-=-=-=-=-=-the turn 2 players -=-=-=-=-=-=-`);

// push turn card into board hash
// function logTurn2Players(deck) {
//   for (let i = 9; i < 10; i++) {
//     board[`card${i-5}`] = deck[i];
//     testBoardFlop[`card${i-4}`] = deck[i];
//   }
//   return testBoardFlop;
// }


function logTurn2Players(deck) {
  // testBoardTurn[`card4`] = deck[9];
  board[`card4`] = deck[9];
  return board['card4']
}

console.log(logTurn2Players(testDeck));
logTurn2Players(testDeck)
console.log(board);


console.log(`               =-=-=-=-=-=-=-the river 2 players -=-=-=-=-=-=-`);

// push turn card into board hash
// function logTurn2Players(deck) {
//   for (let i = 9; i < 10; i++) {
//     board[`card${i-5}`] = deck[i];
//     testBoardFlop[`card${i-4}`] = deck[i];
//   }
//   return testBoardFlop;
// }


// function logRiver2Players(deck) {
//   // testBoardTurn[`card4`] = deck[9];
//   board[`card5`] = deck[11];
//   return board['card5']
// }

function logRiver2Players(deck) {
  // testBoardTurn[`card4`] = deck[9];
  return board[`card5`] = deck[11];
}

console.log(logTurn2Players(testDeck));
logTurn2Players(testDeck)
console.log(board);


console.log(`               =-=-=--=-=-All 5 board cards 2 players -=-=-=-`);


function allFiveBoardCards2Players(deck) {
  logFlop2Players(deck);
  logTurn2Players(deck);
  logRiver2Players(deck);
  return board
}

console.log(allFiveBoardCards2Players(testDeck));





// function test() {
//   var sub_array = [];
//   var super_array = [];
//   for (var i = 1; i <= 3; i++) {
//       sub_array.push(i);
//       super_array.push(sub_array.slice(0));
//   }
//   console.log(super_array);
// }

// let animal = "cow"
// console.log(animal.slice(0,2)); // co
// console.log(animal);            // cow (not permanent)
// console.log(animal.slice(-1));  // w
// console.log(animal.slice(0, -1));  // co




console.log('-=-=-=-=-=-=-=-= break 1.50000 -=-=-=-=-=-=-=-=');

// var testBoard = {
//   card1: ['4H'],
//   card2: ['AS'],
//   card3: ['5S'],
//   card4: ['7S'],
//   card5: ['3H'],
// };

let testboardAndHand = testBoard['card1'][0][0];
console.log(testboardAndHand);

console.log(testBoard['card1']);
console.log(testBoard['card1']);
let user = {
  1: 'hi',
  2: 'hello',
  3: 'goodbye',
};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

// convert object to key's array
// const keys = Object.keys(courses);

let keys = Object.keys(user);
console.log(user);
console.log('here');

// var board = {
//   card1: [],
//   card2: [],
//   card3: [],
//   card4: [],
//   card5: [],
// }

// const book = {};
// console.log('book');
// console.log(book);

// // objectName.keyName = value

// book.author = "Jane Smith";
// book.pages = 42

// test 3 card flop array
// console.log(seeFlop(testDeck));

// 3 card flop array + new turn card
// function seeTurn(deck) {
//   for (let i = 5; i < 6; i++) {
//     console.log(deck[i]);
//     testBoardTurn.push(deck[i]);
//   }
//   return testBoardFlop.concat(testBoardTurn);
// }

// test 3 card flop array + new turn card
// console.log(seeTurn(testDeck));

// 3 card flop array, turn card + new river card
// function seeRiver(deck) {
//   for (let i = 7; i < 8; i++) {
//     console.log(deck[i]);
//     testBoardRiver.push(deck[i]);
//   }
//   return testBoardFlop.concat(testBoardTurn.concat(testBoardRiver));
// }

// // test 3 card flop array, turn card + new river card
// console.log(seeRiver(testDeck));

// // player one cards - 2 card array
// function seePlayerHoleCards(deck) {
//   for (let i = 8; i <= 9; i++) {
//     console.log(deck[i]);
//     testHandPlayerOne.push(deck[i]);
//   }
//   return testHandPlayerOne;
// }

// // player one cards - 2 card array
// console.log(seePlayerHoleCards(testDeck));

// console.log(testBoardFlop[0][0][0], testBoardFlop[0][1]);

console.log('-=-=-=-=-=-=-=-= break 1 -=-=-=-=-=-=-=-=');

// main goal - split up arrays to interpret hand strength based on hand and board
// combine hand and board into array with rankings of all cards
// combine hand and board into array with suits of all cards

// test hash inside of hash

// logs flop to console
// console.log(
//   `The flop is ${testBoardFlop[0]} ${testBoardFlop[1]} ${testBoardFlop[2]}`
// );
// // logs players hand to console
// console.log(`Players hand is ${testHandPlayerOne[0]} ${testHandPlayerOne[1]}`);
// console.log(testBoardFlop[0][0], testBoardFlop[0][1]);
// console.log(testBoardFlop, '-----');
// console.log(testHandPlayerOne);
// // sort cards by rankings
// function boardHandRanks(testBoardFlop, testHand) {
//   let boardHand = [];
//   for (let i = 0; i < 3; i++) {
//     //boardHand.push(testBoardFlop[i][0]);
//     boardHand.push(testBoardFlop[i][0]);
//   }
//   for (let i = 0; i < testHand.length; i++) {
//     boardHand.push(testHand[i][0]);
//   }
//   console.log(boardHand);
//   return typeof(boardHand);
// return `Board/Hand ranks are ${boardHand}` + typeof(boardHand)
// return boardHand
// }

// test typeOf on boardHandRanks
// console.log(typeof Object === typeof Array);

// console.log(boardHandRanks(testBoardFlop, testHandPlayerOne));
// // sort cards by suits
// function boardHandSuits() {
//   return testBoardFlop[0][0];
// }
// console.log(boardHandSuits());
// // combine and check for truths

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
  '-=-=-=-=-=-=-=-= info to pull from 2d array/ hashes -=-=-=-=-=-=-=-='
);

// test hash inside of hash

// flop and player hand hash
let boardAndHand = {
  testArray: [
    ['9C', '8S', '10H'],
    ['JS', 'AH'],
  ],
  testBoardFlop: [testBoardFlop],
  testHandPlayerOne: [testHandPlayerOne],
};

// console.log(boardAndHand['testArray'][0][2][0]); // 1
// console.log(boardAndHand['testArray'][0][2][1]); // 0                 .length -1
// console.log(boardAndHand['testArray'][0][2][2]); // H
// console.log(boardAndHand['testArray'][0][2][boardAndHand['testArray'[-1]]]); // undefined

// console.log(boardAndHand['testArray'][0][2][2]); // H

// console.log(boardAndHand['testArray'][0][0][0]); // 9
// console.log(boardAndHand['testArray'][0][0][0], boardAndHand['testArray'][0][0][1]); // 9 C

// console.log(boardAndHand['testArray'][0][1][0]); // 8
// console.log(boardAndHand['testArray'][0][1][0]); // S

// console.log(boardAndHand['testArray'][1][0][0]); // J
// console.log(boardAndHand['testArray'][1][0][1]); // S

// console.log(boardAndHand['testArray'][1][1][0]); // A
// console.log(boardAndHand['testArray'][1][1][1]); // H

// console.log(boardAndHand);
// console.log(boardAndHand['testBoardFlop'][0][0][0]);
// console.log(boardAndHand['testBoardFlop'][0][1][0]);
// console.log(boardAndHand['testBoardFlop'][0][1][1]);

const book = {};
console.log('book');
console.log(book);

// objectName.keyName = value

book.author = 'Jane Smith';
book.pages = 42;

console.log(book);

// console.log(book[0][0]);
console.log(book[1]);
console.log('-=-=-=-=-=-=here-=-=-=-=');

// obj hash
let obj = {
  flop: [['1h', 10, 5]],
  hand: ['2h', '1D'],
};

// anotherObj hash
let anotherObj = {
  flopper: [['1h', '10h', '5h']],
  hander: ['3h', 'Jh'],
};
// console.log(anotherObj);

// bigObj hash
let bigObj = {
  anotherObj,
  obj,
};

console.log(obj['flop'][0]);
console.log(bigObj[obj[flop]]);
console.log(bigObj);

console.log('-=-=-=-=-=-=-=-=- break 3 -=-=-=-=-=-=-=-=');

function flop(obj) {
  for (key in obj) {
    console.log(obj[key]);
  }
}

flop(obj);
console.log(flop(flop));
