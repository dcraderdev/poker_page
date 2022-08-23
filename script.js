// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
let hashDeck = {};
let deck = [];
let board = {};
let burnCards = {};
let handPlayerOne = {};
let handPlayerTwo = {};
let handPlayerThree = {};
let handPlayerFour = {};
let handPlayerFive = {};
let handPlayerSix = {};
let handPlayerSeven = {};
let handPlayerEight = {};
let handPlayerNine = {};
let PlayerCardAndBoard = {};
let boardFlop = {};
let boardFlop2 = {};
let boardTurn = {};
let boardRiver = {};

let testBoard = {
  card1: ['4H'],
  card2: ['AS'],
  card3: ['5S'],
  card4: ['7S'],
  card5: ['3H'],
};
let testHandPlayerOne = [];
let testHandPlayerTwo = [];
let testHandPlayerThree = [];
let testHandPlayerFour = [];
let testHandPlayerFive = [];
let testHandPlayerSix = [];
let testHandPlayerSeven = [];
let testHandPlayerEight = [];
let testHandPlayerNine = [];
// assign number values to face cards
let A = 14;
let K = 13;
let Q = 12;
let J = 11;
// assign letters to suits
let c = 'clubs';
let d = 'diamond';
let h = 'heart';
let s = 'spade';
// array containing all suits to create deck with
let suits = ['S', 'C', 'H', 'D'];
// arrar containging card # rankings to create deck with
let rankings = [
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
console.log(`=-=-=-=-=-=-=-deck creation-=-=-=-=-=-=-`);
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
// invokes deck
createDeck()
//  Out puts: ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

console.log(`=-=-=-=-=-=-=-deck creation-=-=-=-=-=-=-`);
// function createHashDeck() {
//   // iterates through rankings and suits pairing them up in order and placing in global array
//   var hashDeck = {};
//   for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
//     hashDeck.suit = `${suits[suitCounter]}`
//     for (var rankingCounter = 0; rankingCounter < 13; rankingCounter++) {
//       // console.loghas((rankings[rankingCounter] + suits[suitCounter]));
//     }
//   }
//   return deck;
// }

// suits, rankings

// checks for length of card in array so we can separate into hash.
function faceCardCheck(card) {
  if (card.length > 2) {
    return true;
  } else {
    return false;
  }
}

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
let testDeck = createDeck();

console.log(shuffleDeck(testDeck));
//check for dupes
console.log(`=-=-=-=-=-=-=-deck suffled-=-=-=-=-=-=-`);

console.log(testDeck);
console.log(cardsInDeck(testDeck));

console.log(`-=-=-=-=--=--=put shuffled cards into hash-=-=-=-=-=-=`);

// function faceCardCheck(card) {
//   if (card.length > 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(testDeck);
// returns info at any index position in deck
function rankOfCardInDeck(deck, position) {
  let card = deck[position - 1];
  let rank = '';
  // let rank = card.charAt(0,3)
  // let rank = card[0];
  if (faceCardCheck(card)) {
    rank = card.slice(0, 2);
  } else {
    rank = card.slice(0, 1);
  }
  return rank;
}

// console.log(rankOfCardInDeck(testDeck, 1));

function suitOfCardInDeck(deck, position) {
  let card = deck[position - 1];
  let suit = card.slice(-1);
  return suit;
}

// console.log(suitOfCardInDeck(testDeck, 1));

console.log(`-=-=-=-=-=-=- createHashDeck-=-=-=-=-=-=-=-`);

// pulls info from cardIndeck and stores info in card
function createHashDeck(deck) {
  for (i = 1; i <= 52; i++) {
    hashDeck[`card${i}`] = {};
    hashDeck[`card${i}`]['rank'] = rankOfCardInDeck(deck, i);
    hashDeck[`card${i}`]['suit'] = suitOfCardInDeck(deck, i);
  }
}

createHashDeck(testDeck);
console.log(hashDeck);

// hashDeck[`card${i}`].rank = 2
// hashDeck[`card${i}`].suit = 'H'
// suitOfCardInDeck
// rankOfCardInDeck
// hashDeck[`card${i}`]['rank'] = 2
// hashDeck[`card${i}`]['suit'] = H
// hashDeck[`card${i}`].rank = 2
// hashDeck[`card${i}`] = cardInDeck(deck[i]) ;
// }
// deck created - array of strings
// deck shuffled - array of strings

// each string sorted into hands and board by rank and suit
// function cardsForTwoPLayers(deck) {
//   // if index in deck is > 2 then put this : or put that
//   for (let i = 0; i < 4; i++) {
//     if (faceCardCheck(deck[i])) {
//       handPlayerOne[`card${i}`].rank = deck[i].slice(0, 2);

//       // handPlayerOne.card1.rank = deck[i].slice(0,2);
//       // handPlayerOne.card1.suit = deck[i].slice(0,-1);
//     } else {
//       // handPlayerOne[`card${numberOfCards}`]
//       handPlayerOne[`card${i}`].rank = deck[i].slice(0, 1);
//       // handPlayerOne.card1.suit = deck[i].slice(0,-1);
//     }
//   }
// }



// cards in form of a Hash
function cardsForTwoPLayersHash(deck) {
  //puts empty hash named card1 inside handPlayerOne 
  console.log(deck);
  handPlayerOne.card1 = deck.card1
  handPlayerTwo.card1 = deck.card2
  handPlayerOne.card2 = deck.card3
  handPlayerTwo.card2 = deck.card4

}
// invoke cardsForTwoPlayers
cardsForTwoPLayersHash(hashDeck)

// test check players hands
console.log(`hand player one`);
console.log(handPlayerOne);
console.log(`hand player two`);
console.log(handPlayerTwo);


console.log(`=-=-==-=-=-the flop 2 players-=-=-=-==-`);

// push flop cards into board hash
function logFlop2Players(deck) {
  burnCards.card1 = deck.card5
  boardFlop.card1 = deck.card6
  boardFlop.card2 = deck.card7
  boardFlop.card3 = deck.card8
}

logFlop2Players(hashDeck);

console.log(burnCards);
console.log(boardFlop);














// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 3, c: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign({}, hashDeck.card1);
// const obj2 = Object.assign({}, hashDeck.card2);

// const obj3 = Object.assign({}, hashDeck.card3);




// console.log(obj);
// console.log(obj2);
// console.log(obj3);









// console.log(handPlayerOne.card1[rank]='h');

// if str length = 3; push first 2 char to rank
// else just push first
// push last ele to suit

// // 3 card flop array
// function seeFlop(deck) {
//   //var boardFlop = [];
//   // we start at index 1, and end on 4 becuase we need to burn first card
//   for (let i = 1; i < 4; i++) {
//     console.log(`Dealer turns over ${deck[i]}`);
//     boardFlop2.push(deck[i]);
//   }
//   return boardFlop2;
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
//   return boardFlop;
// }

console.log(`=-=-=-=-=-=-=-deal cards 2 players-=-=-=-=-=-=-`);



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

// assign both players cards in correct order
// function cardsForTwoPLayers(deck) {
//   handPlayerOne[`card1`] = deck[0];
//   handPlayerTwo[`card1`] = deck[1];
//   handPlayerOne[`card2`] = deck[2];
//   handPlayerTwo[`card2`] = deck[3];
// }

// cardsForTwoPLayers(testDeck);

// handPlayerOne['card1'] = testDeck[1];
// handPlayerTwo['card1'] = testDeck;
console.log(handPlayerOne);
console.log(handPlayerTwo);

//cards for flop
// for (let i = 6; i < 8; i++)
//   //card for turn
//   for (let i = 9; i < 10; i++)
//     //card for river
//     for (let i = 11; i < 12; i++)
//       //   {
//       //   board[`card${(i)}`] = deck[i]
//       //   boardFlop[`card${(i)}`] = deck[i]
//       //   }
//       //   return boardFlop
//       // }

console.log(`=-=-==-=-=-the flop 2 players-=-=-=-==-`);

// push flop cards into board hash
function logFlop2Players(deck) {
  for (let i = 5; i < 8; i++) {
    board[`card${i - 4}`] = deck[i];
    boardFlop[`card${i - 4}`] = deck[i];
  }
  return boardFlop;
}

// logFlop2Players(testDeck);
// console.log(boardFlop);
// console.log(board);

console.log(`=-=-=-=-=-=-=-the turn 2 players -=-=-=-=-=-=-`);

// push turn card into board hash
// function logTurn2Players(deck) {
//   for (let i = 9; i < 10; i++) {
//     board[`card${i-5}`] = deck[i];
//     boardFlop[`card${i-4}`] = deck[i];
//   }
//   return boardFlop;
// }

function logTurn2Players(deck) {
  return (board[`card4`] = deck[9]);
}

// console.log(logTurn2Players(testDeck));
// logTurn2Players(testDeck)
// console.log(board);

console.log(`=-=-=-=-=-=-=-the river 2 players -=-=-=-=-=-=-`);

// push turn card into board hash
// function logTurn2Players(deck) {
//   for (let i = 9; i < 10; i++) {
//     board[`card${i-5}`] = deck[i];
//     boardFlop[`card${i-4}`] = deck[i];
//   }
//   return boardFlop;
// }

// function logRiver2Players(deck) {
//   // testBoardTurn[`card4`] = deck[9];
//   board[`card5`] = deck[11];
//   return board['card5']
// }

function logRiver2Players(deck) {
  return (board[`card5`] = deck[11]);
}

// console.log(logRiver2Players(testDeck));
// logRiver2Players(testDeck)
// console.log(board);

console.log(`=-=-=--=-=-All 5 board cards 2 players -=-=-=-`);

function allFiveBoardCards2Players(deck) {
  logFlop2Players(deck);
  logTurn2Players(deck);
  logRiver2Players(deck);
  return board;
}

console.log(allFiveBoardCards2Players(testDeck));

console.log('-=-=-=-=-=-=-=-= faceCardCheck -=-=-=-=-=-=-=-=');
//

// Check for face card by checking length of string
function faceCardCheck(card) {
  if (card.length > 2) {
    return true;
  } else {
    return false;
  }
}

// after the flop; separate cards in hand and board into two arrays - suits and ranks

// console.log(faceCardCheck('10s')); // true
// console.log(faceCardCheck('1s')); // false

console.log(Object.keys(handPlayerOne).length);
console.log(handPlayerOne);

// function totalSuits(handPlayerOne, board) {
//   let totalSuits = [];
//    for (let i = 0; i < Object.keys(handPlayerOne).length; i++)
//   {if (faceCardCheck(handPlayerOne)) {
//     // totalSuits.push(handPlayerOne[i].slice(0,2))
//     tempCard = handPlayerOne[i].slice(0,2)
//     totalSuits.push(tempCard)
//     // totalSuits.push(handPlayerOne[`card${(i)}`].slice(0,2))
//   } else {
//     tempCard = handPlayerOne[`card${i}`].slice(0,1)
//     totalSuits.push(tempCard)
//     // totalSuits.push(handPlayerOne[i].slice(0,1))
//     // totalSuits.push(handPlayerOne[`card${(i)}`].slice(0,1))

//   }}

//   return totalSuits
// }

console.log(`-=-=-=--=--=-total suits function -=-=--=--=-=-`);

// function totalSuits(handPlayerOne, board) {
//   let totalSuits = [];
//   for (let i = 0; i < Object.keys(handPlayerOne).length; i++) {
//     console.log(handPlayerOne[`card1`]);
//     totalSuits.push(handPlayerOne[i]);
//   }
//   return totalSuits;
// }

// // console.log(handPlayerOne[1]);
// console.log(handPlayerOne);

// push turn card into board hash
// function logTurn2Players(deck) {
//   for (let i = 9; i < 10; i++) {
//     board[`card${i-5}`] = deck[i];
//     boardFlop[`card${i-4}`] = deck[i];
//   }
//   return boardFlop;
// }

// console.log(totalSuits(handPlayerOne['card1'], board));

// console.log(handPlayerOne);
// console.log(handPlayerOne.length);

// // board[`card${(i)}`] = deck[i]
// // console.log(handPlayerOne['card1']);
// // [`card${i-4}`]
// // // boardFlop[`card${i-4}`]
// // console.log(handPlayerOne[`card${i-4}`]);
// // console.log(handPlayerOne['card1']);

// // console.log(handPlayerOne['card1'].slice());

// console.log(board);

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

// let testboardAndHand = testBoard['card1'][0][0];
// console.log(testboardAndHand);

// console.log(testBoard['card1']);
// console.log(testBoard['card1']);
// let user = {
//   1: 'hi',
//   2: 'hello',
//   3: 'goodbye',
//   4: ""
// };
// for (const key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

// // convert object to key's array
// // const keys = Object.keys(courses);

// let keys = Object.keys(user);
// console.log(user);
// console.log('here');

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
//   return boardFlop.concat(testBoardTurn);
// }

// test 3 card flop array + new turn card
// console.log(seeTurn(testDeck));

// 3 card flop array, turn card + new river card
// function seeRiver(deck) {
//   for (let i = 7; i < 8; i++) {
//     console.log(deck[i]);
//     testBoardRiver.push(deck[i]);
//   }
//   return boardFlop.concat(testBoardTurn.concat(testBoardRiver));
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

// console.log(boardFlop[0][0][0], boardFlop[0][1]);

console.log('-=-=-=-=-=-=-=-= break 1 -=-=-=-=-=-=-=-=');

// main goal - split up arrays to interpret hand strength based on hand and board
// combine hand and board into array with rankings of all cards
// combine hand and board into array with suits of all cards

// test hash inside of hash

// logs flop to console
// console.log(
//   `The flop is ${boardFlop[0]} ${boardFlop[1]} ${boardFlop[2]}`
// );
// // logs players hand to console
// console.log(`Players hand is ${testHandPlayerOne[0]} ${testHandPlayerOne[1]}`);
// console.log(boardFlop[0][0], boardFlop[0][1]);
// console.log(boardFlop, '-----');
// console.log(testHandPlayerOne);
// // sort cards by rankings
// function boardHandRanks(boardFlop, testHand) {
//   let boardHand = [];
//   for (let i = 0; i < 3; i++) {
//     //boardHand.push(boardFlop[i][0]);
//     boardHand.push(boardFlop[i][0]);
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

// console.log(boardHandRanks(boardFlop, testHandPlayerOne));
// // sort cards by suits
// function boardHandSuits() {
//   return boardFlop[0][0];
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

// // flop and player hand hash
// let boardAndHand = {
//   testArray: [
//     ['9C', '8S', '10H'],
//     ['JS', 'AH'],
//   ],
// };

// console.log(boardAndHand['testArray'][0][2][0]); // 1
// console.log(boardAndHand['testArray'][0][2][1]); // 0                 .length -1
// console.log(boardAndHand['testArray'][0][2][2]); // H
// console.log(boardAndHand['testArray'][0][2][boardAndHand['testArray'[-1]]]); // undefined

// console.log(boardAndHand['testArray'][0][2][2]); // H

// console.log(boardAndHand['testArray'][0][0][0]); // 9
// console.log(
//   boardAndHand['testArray'][0][0][0],
//   boardAndHand['testArray'][0][0][1]
// ); // 9 C

// console.log(boardAndHand['testArray'][0][1][0]); // 8
// console.log(boardAndHand['testArray'][0][1][0]); // S

// console.log(boardAndHand['testArray'][1][0][0]); // J
// console.log(boardAndHand['testArray'][1][0][1]); // S

// console.log(boardAndHand['testArray'][1][1][0]); // A
// console.log(boardAndHand['testArray'][1][1][1]); // H

// console.log(boardAndHand);
// // console.log(boardAndHand['boardFlop'][0][0][0]);
// // console.log(boardAndHand['boardFlop'][0][1][0]);
// // console.log(boardAndHand['boardFlop'][0][1][1]);

// const book = {};
// console.log('book');
// console.log(book);

// // objectName.keyName = value

// book.author = 'Jane Smith';
// book.pages = 42;

// console.log(book);

// // console.log(book[0][0]);
// console.log(book[1]);
// console.log('-=-=-=-=-=-=here-=-=-=-=');

// // obj hash
// let obj = {
//   flop: [['1h', 10, 5]],
//   hand: ['2h', '1D'],
// };

// // anotherObj hash
// let anotherObj = {
//   flopper: [['1h', '10h', '5h']],
//   hander: ['3h', 'Jh'],
// };
// // console.log(anotherObj);

// // bigObj hash
// let bigObj = {
//   anotherObj,
//   obj,
// };

// console.log(obj['flop'][0]);
// console.log(bigObj[obj[flop]]);
// console.log(bigObj);

console.log('-=-=-=-=-=-=-=-=- break 3 -=-=-=-=-=-=-=-=');

// function flop(obj) {
//   for (key in obj) {
//     console.log(obj[key]);
//   }
// }

// flop(obj);
// console.log(flop(flop));

// we can declare a variable object

const hashBoardArray = [['10H'], ['10S'], ['10D'], ['7S'], ['3H']];

const hashBoard = {
  card1: ['4H'],
  card2: ['AS'],
  card3: ['5S'],
  card4: ['7S'],
  card5: ['3H'],
};

const hashBoard2 = {
  card1: { rank: J, suit: 'D' },
  card2: { rank: 7, suit: 'H' },
  card3: { rank: 3, suit: 'H' },
  card4: { rank: 9, suit: 'H' },
  card5: { rank: 6, suit: 'H' },
};

// console.log(hashBoardArray);
// console.log(hashBoard);

// doesnt work, need to take in hash length value differently
function hashLoop(hash) {
  for (let i = 0; i < hash.length; i++) console.log(hash[i]);
}

// if we want to access inner object (object within object) we can use a dot
console.log(hashBoard2.card1.rank);
// prints 11 because we have assigned J to 11 above
console.log(hashBoard2.card1);
// {rank: 11, suit: 'D'}
console.log(hashBoard2);
// card1: {rank: 11, suit: 'D'}
// card2: {rank: 7, suit: 'H'}
// card3: {rank: 3, suit: 'H'}
// card4: {rank: 9, suit: 'H'}
// card5: {rank: 6, suit: 'H'}

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }




// new clean poker notes from here down

// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
let hashDeck = {};
let deck = [];
let board = {};
let burnCards = { card1: {}, card2: {}, card3: {} };
let boardAndHand = [];
let cardAndBoard = [];
let handPlayerOne = {};
let handPlayerTwo = {};
let handPlayerThree = {};
let handPlayerFour = {};
let handPlayerFive = {};
let handPlayerSix = {};
let handPlayerSeven = {};
let handPlayerEight = {};
let handPlayerNine = {};
let playerCardAndBoard = {};
let boardFlop = {};
let boardFlop2 = {};
let boardTurn = {};
let boardRiver = {};

let testBoard = {
  card1: ['4H'],
  card2: ['AS'],
  card3: ['5S'],
  card4: ['7S'],
  card5: ['3H'],
};
let testHandPlayerOne = [];
let testHandPlayerTwo = [];
let testHandPlayerThree = [];
let testHandPlayerFour = [];
let testHandPlayerFive = [];
let testHandPlayerSix = [];
let testHandPlayerSeven = [];
let testHandPlayerEight = [];
let testHandPlayerNine = [];
// assign number values to face cards
let A = 14;
let K = 13;
let Q = 12;
let J = 11;

// let '14' = 'A';
// let '13' = 'K';
// let '12' = 'Q';
// let '11' = 'J';


// assign letters to suits
let c = 'clubs';
let d = 'diamond';
let h = 'heart';
let s = 'spade';
// array containing all suits to create deck with
let suits = ['S', 'C', 'H', 'D'];
// arrar containging card # rankings to create deck with
let rankings = [
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

console.log(`=-=-=-=-=-=-=-deck creation-=-=-=-=-=-=-`);
// invokes deck
createDeck();
//  Out puts: ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

// checks for length of card in array so we can separate into hash.
function faceCardCheck(card) {
  if (card.length > 2) {
    return true;
  } else {
    return false;
  }
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

// clean up

console.log(`=-=-=-=-=-=-=-deck suffled-=-=-=-=-=-=-`);
// create deck to shuffle
// create deck makes us an un ordered deck
let testDeck = createDeck();
shuffleDeck(testDeck);
// test check for suffled deck
// console.log(testDeck);

console.log(`-=-=-=---=organize shuffled for hash-=-=-==-=`);

// returns rank of card at given index
function rankOfCardInDeck(deck, position) {
  let card = deck[position - 1];
  let rank = '';
  // let rank = card.charAt(0,3)
  // let rank = card[0];
  if (faceCardCheck(card)) {
    rank = card.slice(0, 2);
  } else {
    rank = card.slice(0, 1);
  }
  return rank;
}

// check suit of card at given index
function suitOfCardInDeck(deck, position) {
  let card = deck[position - 1];
  let suit = card.slice(-1);
  return suit;
}

// pulls info from cardIndeck and stores info in card
function createHashDeck(deck) {
  for (i = 1; i <= 52; i++) {
    hashDeck[`card${i}`] = {};
    hashDeck[`card${i}`]['rank'] = rankOfCardInDeck(deck, i);
    hashDeck[`card${i}`]['suit'] = suitOfCardInDeck(deck, i);
  }
}

console.log(`-=-=-=-=-=-=- createHashDeck-=-=-=-=-=-=-=-`);
createHashDeck(testDeck);
console.log(hashDeck);

// cards in form of a Hash
function cardsForTwoPLayersHash(deck) {
  //puts empty hash named card1 inside handPlayerOne
  console.log(deck);
  handPlayerOne.card1 = deck.card1;
  handPlayerTwo.card1 = deck.card2;
  handPlayerOne.card2 = deck.card3;
  handPlayerTwo.card2 = deck.card4;
}

console.log(`=-=-==-=-=-deal cards for 2 players-=-=-=-==-`);
// invoke cardsForTwoPlayers
cardsForTwoPLayersHash(hashDeck);

// test check players hands
console.log(`hand player one`);
console.log(handPlayerOne);
console.log(`hand player two`);
console.log(handPlayerTwo);


// push flop cards into board hash
function logFlop2Players(deck) {
  burnCards.card1 = deck.card5;
  boardFlop.card1 = deck.card6;
  boardFlop.card2 = deck.card7;
  boardFlop.card3 = deck.card8;
  board.card1 = deck.card6;
  board.card2 = deck.card7;
  board.card3 = deck.card8;
}
console.log(`=-=-==-=-=-the flop 2 players-=-=-=-==-`);
logFlop2Players(hashDeck);

console.log(`Burn Cards`);
console.log(burnCards);
console.log(`The Flop`);
console.log(boardFlop);



// push turn cards into turn hash
function logTurn2Players(deck) {
  burnCards.card2 = deck.card9;
  boardTurn.card1 = deck.card10;
  board.card4 = deck.card10;

}
console.log(`=-=-==-=-=-the turn 2 players-=-=-=-==-`);
logTurn2Players(hashDeck);

console.log(`Burn Card`);
console.log(burnCards);
console.log(`The Turn`);
console.log(boardTurn);







// push turn cards into turn hash
function logRiver2Players(deck) {
  burnCards.card3 = deck.card11;
  boardRiver.card1 = deck.card12;
  board.card5 = deck.card12;

}
console.log(`=-=-==-=-=-the River 2 players-=-=-=-==-`);
logRiver2Players(hashDeck);

console.log(`Burn Card`);
console.log(burnCards);
console.log(`The River`);
console.log(boardRiver);



// array of object values from board and player1 hand

function boardHandFlop(handPlayerOne, board) {
boardAndHand = [handPlayerOne.card1.rank, handPlayerOne.card2.rank, board.card1.rank, board.card2.rank, board.card3.rank];
return boardAndHand
}

console.log(`=-=-=--=-=-5 board cards & player1 cards ranks -=-=-=-`);
boardHandFlop(handPlayerOne, board);
console.log(boardAndHand);









// // sexy way to increment thru player hand and board cards and push to array
// function boardHandFlop (handPlayerOne, board) {
//   boardAndHand = [];
//   for (let i = 1;  i <= 2; i++){
//     for (const [key, value] of Object.entries(`handPlayerOne.card${[i]}.rank`)){
//     boardAndHand.push(`${value}`);
//   } 
// } for (let i = 1; i <= 3; i++){
//   for (const [key, value] of Object.entries(`board.card${[i]}.rank`)){
//     boardAndHand.push(`${value}`);
//   }
// }
//   return boardAndHand;
// }


var list = [2, 1, 4, 2, 1, 1, 4, 5];  


function check(x) {
  for (let i = 1; i < 15; i++){
  return i
  }
}

console.log('here');
console.log(check());






function rankToValuesArray() {
  if 

}




function countInArray(array, x) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === x) {
            count++;
        }
    }
    return count;
}

countInArray(list, check(boardAndHand)); // returns 2
countInArray(list, 1); // returns 3




// check hand strength

function isTwoPair(board, hand) {}

console.log(handPlayerOne.card1[1]);
console.log();



function isThreeOfKind(board, hand) {}
function isStraight(board, hand) {}
function isFullHouse(board, hand) {}
function isFourOfKind(board, hand) {}
function isStraightFlush(board, hand) {}
function isRoyalFlush(board, hand) {}

function outsWithoutSuits(board, hand) {}


function countInArray(array, what) {
  return array.filter(item => item == what).length;
}


// let list = boardAndHand;  

// function countInArray(boardAndHand, rank) {
//     let count = 0;
//     for (let i = 0; i < boardAndHand.length; i++) {
//         if (boardAndHand[i] === rank) {
//             count++;
//         }
//     }
//     return count;
// }




function arrayAlreadyHasArray(arr, testArr){
  for(var i = 0; i<arr.length; i++){
      let checker = []
      counter = 0
      for(var j = 0; j<arr[i].length; j++){
          if(arr[i][j] === testArr[j]){
              checker.push(true)
              counter++
          } else {
              checker.push(false)
          }
      } if (counter >= 5 && ((parseInt(testArr[5]) - parseInt(testArr[4])) !== 1)) {
        return testArr[4];
      } else if (counter >= 6 && ((parseInt(testArr[6]) - parseInt(testArr[5])) !== 1)) {
        return testArr[5];
      }
      else if (counter >= 7 && ((parseInt(testArr[7]) - parseInt(testArr[6])) !== 1)) {
        return testArr[6];
      }
  }
  return false
}



// let testArr1 = ['2', '3', '4', '5', '6'];


// function checkStraight (arr) {
//   let tempArr = [];
//   let count = 1;
//   for(let i = 0; i < arr.length; i++){
//     // console.log(((parseInt(arr[i])) +1));
//     // console.log(((parseInt  (arr[i+1])  )));
//     // console.log((((parseInt  (arr[-2])  )) + 1));
//     // console.log(arr[1]);
//     // if i < length of arr and current index in array +1 subtracted from next index in array = 0 , push current array index and +count
//    if ( arr.length -1 && ((parseInt(arr[i])) +1)  - ((parseInt  (arr[i+1])  )) === 0 ) {tempArr.push(arr[i]) && count++}
//     // if last index - index beofre that +1 = 0
//    else if (  count === 5  && ((parseInt(arr[arr.length -1])) )  - (((parseInt  (arr[arr.length-2])  )) + 1) === 0 ) {tempArr.push(arr[i]) && count++}
//   }
//   if (count > 4) 
//   return tempArr.pop();
//   else
//   return false
// }



// last index - 1 = last idex before that
// console.log(arr[i]);
// console.log(tempArr);
// console.log(count);


// function forLoop (arr) {
//   for(let i = arr.length -1; i )
// }









// function checkStraight (arr) {
//   for(let i = 0; i < arr.length - 1; i++){}
// }






// function checkStraight (arr) {
//   let tempArr = [];
//   let count = 1;
//   for(let i = arr.length - 1; i >= 0; i--){
//     console.log(`arr @index ${i} is ${arr[i]}`);
//     console.log(`count is ${count}`);
//     console.log(((parseInt(arr[i])) -1));
//     console.log('^ parsed int 1');
//     console.log(((parseInt(arr[i-1]))));
//     console.log('^ parsed int 2');
//     // last index in array - 1 subtracted from index beofre in array = 0 , push current array index and +count
//    if (((parseInt(arr[i])) -1)  - ((parseInt  (arr[i-1])  )) === 0 ) {tempArr.unshift(arr[i]) && count++}
//    console.log(`count is now ${count}`);
//     console.log(` tempArr is ${tempArr}`);

//    if (i === 0 &&((parseInt(arr[i])) +1)  - ((parseInt  (arr[i+1])  )) === 0 ) {tempArr.unshift(arr[i]) && count++}
//   //  console.log(`${tempArr}`);

//     // if last index - index beofre that +1 = 0
//   //  else if (  count === 6  && ((parseInt(arr[arr.length -1])) )  - (((parseInt  (arr[arr.length-2])  )) + 1) === 0 ) {tempArr.push(arr[i]) && count++}
 
// } 

//   if (count > 4) {
//   console.log(`${tempArr}`);
  
//   return tempArr.pop();
// }
//   else if (count < 4) {
//   return false
//   }
// }

// // let testArr1 = ['2', '3', '4', '5', '6'];
//  let testArr100 = ['2', '3', '4', '5', '6', '13', '14'];
//  let testArr200 = ['2', '3', '10', '11', '12', '13', '14'];


// // console.log(checkStraight(testArr1));
// console.log(checkStraight(testArr100));
// // console.log(checkStraight(testArr200));
// checkStraight(testArr1)
// console.log(checkStraight(testArr5));
// console.log(checkStraight(testArr14));
// console.log(checkStraight(testArr3));
// console.log(checkStraight(reducedBoardAndHand));





// **** good ish one dont edit ******
// function checkStraight (arr) {
//   let tempArr = [];
//   let count = 1;
//   for(let i = 0; i < arr.length; i++){
//     // console.log(((parseInt(arr[i])) +1));
//     // console.log(((parseInt  (arr[i+1])  )));
//     // console.log((((parseInt  (arr[-2])  )) + 1));
//     // console.log(arr[1]);
//     // if i < length of arr and current index in array +1 subtracted from next index in array = 0 , push current array index and +count
//    if ( arr.length -1 && ((parseInt(arr[i])) +1)  - ((parseInt  (arr[i+1])  )) === 0 ) {tempArr.push(arr[i]) && count++}
//     // if last index - index beofre that +1 = 0
//    else if (((parseInt(arr[arr.length -1])) )  - (((parseInt  (arr[arr.length-2])  )) + 1) === 0 ) {tempArr.push(arr[i]) && count++}
//   }
//   if (count > 4) 
//   return tempArr.pop();
//   else
//   return false
// }




;










// function newPLayer(first, last, chips, status) {
//   this.firstName = first;
//   this.lastName = last;
//   this.chips = 0;
//   this.status = '';
// }

// let pokerPlayer = new newPLayer("John", "Doe", 10000, "new");
// let riverRat25 = new newPLayer("Sally", "Rally", 10000, "new");


// console.log(pokerPlayer);
// console.log(riverRat25);
// console.log();




// function reduceBoardAndHand (boardAndHand) {
//   let length = boardAndHand.length
//   for(let i = 0; i < boardAndHand.length; i++) {
//     if (i === 0) {
//       reducedBoardAndHand.push(boardAndHand[i]);
//       // console.log(boardAndHand[i]);
//       } else if (reducedBoardAndHand.length<5 && !(reducedBoardAndHand.includes(boardAndHand[i]))) {
//       reducedBoardAndHand.push(boardAndHand[i]);

//     } else if (biggerThanLast(boardAndHand[i], boardAndHand[1+1])) { 
    
//     }
      
//     }
    // if (!boardAndHand.inlcudes(boardAndHand[i])){
    //   reducedBoardAndHand.push(boardAndHand[i])
    // }
  
// }


// function reduceBoardAndHand (boardAndHand) {
//   for(let i = 0; i < boardAndHand.length; i++){

//   }
// }




// if ele@index = ele@last index +1
// pop first ele and push new ele
// 
// 

// console.log(testArr8);
// reduceBoardAndHand(testArr8)
// // reduceBoardAndHand(boardAndHand)
// // reduceBoardAndHand(boardAndHand)
// console.log(reducedBoardAndHand);




// let modifiedArr = arr.map(function(element){
//   return element *3;
// });

function countVowels(word) {
  let vowels = 'aeiou';
  let count = 0;

  word.split('').map(function (x) {
    if (vowels.includes(x)) {
      count++;
    }
  });

  return count;
}

// function stringChanger(word, operation) {
//   if (operation === 'capitalize') {}
//   if (operation === 'uppercase') {}
//   if (operation === 'double') {}
//   if (operation === 'reverse') {}
//   if (operation === 'unknown') {}
// }

// console.log();

// function stringChanger(word, operation) {
//    if (operation === 'capitalize') {
//       return word[0].toUpperCase()+word.slice(1);
//    }
//    if (operation === 'uppercase') {
//     return word.toUpperCase();
//    }
//    if (operation === 'double') {
//     return word+word;
//    }
//    if (operation === 'reverse') {
//     return word.split('').reverse().join('');
//    }
//    if (operation === 'unknown') {
//     return word;
//    }
// }

// console.log(stringChanger("foo", "capitalize"));
// console.log(stringChanger("foo", "uppercase"));
// console.log(stringChanger("foo", "double"));
// console.log(stringChanger("foo", "reverse"));
// console.log(stringChanger("foo", "unknown"));

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

function exists(array2D, list2) {
  let checker = 0;
  for (var i = 0; i < array2D.length; i++) {
    for (var j = 0; j < list2.length; j++) {
      if (array2D[i][j] === list2[j]) {
        checker++;
      }
    }
  }
  if (checker === 5) {
    return `${true}, straight`;
  }
  return false;
}

// testArr1 = ['2', '3', '4', '5', '6']
// testArr2 = ['3', '4', '5', '6', '7']
// testArr3 = ['3', '4', '5', '6', '7', '8', '9']
// testArr4 = ['2', '3', '4', '5', '7']

// function fullBoardStraightCheck (straightArr, boardAndHand) {
//   for(let i = 0; i < straightArr.length; i++){
//     let checker = 0
//     for(var j = 2; j<7; j++){
//       console.log(straightArr[i]);
//       console.log(boardAndHand[j]);
//         if(straightArr[i] === boardAndHand[j]){
//             checker++
//         } else {
//             checker.push(false)
//         }
//     }
//     if (checker.every(check => check === 5)){
//         return boardAndHand[boardAndHand.length - 1]
//     }
//   }
//     return false
//   }

//   }
//   for(let i = 1; i < 6; i++){

//   }
//   for(let i = 0; i < 5; i++){

//   }

// }

// console.log(fullBoardStraightCheck(testArr3));

// testArr1 = ['2', '3', '4', '5', '6']
// testArr2 = ['3', '4', '5', '6', '7']
// testArr3 = ['3', '4', '5', '6', '7', '4', '9']
// testArr4 = ['2', '3', '4', '5', '7']

// function arrayAlreadyHasArray(arr, testArr){
//   for(var i = 0; i<arr.length; i++){
//       let checker = []
//       for(var j = 0; j<arr[i].length; j++){
//           if(arr[i][j] === testArr[j]){
//               checker.push(true)
//           } else {
//               checker.push(false)
//           }
//       }
//       if (checker.every(check => check === true)){
//           return testArr[testArr.length - 1]
//       }
//   }
//   return false
// }

// console.log(arrayAlreadyHasArray(straightArr, testArr1));    // true
// console.log(arrayAlreadyHasArray(straightArr, testArr2));   //
// console.log(arrayAlreadyHasArray(straightArr, testArr3));   //
// console.log(arrayAlreadyHasArray(straightArr, testArr4));   //

// function arrayAlreadyHasArray(arr, testArr) {
//   for (var i = 0; i < arr.length; i++) {
//     let checker = [];
//     let counter = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       // if 2d array[i][j] = boardandhand[j]
//       // +counter
//       // else false
//       if (arr[i][j] === testArr[j]) {
//         counter++;
//         checker.push(true);
//       } else {
//         checker.push(false);
//       }
//     }
//     if (counter === 5) {
//       return testArr[testArr[5]];
//     } else if (counter === 6) {
//       return testArr[testArr[5]];
//     } else if (checker.every((check) => check === true)) {
//       return testArr[testArr.length - 1];
//     }
//   }
//   return false;
// }







// testArr1 = ['2', '3', '4', '5', '6'];
// testArr2 = ['3', '4', '5', '6', '7'];
// testArr3 = ['3', '4', '5', '6', '7', '4', '9'];
// testArr4 = ['2', '3', '4', '5', '7'];
// testArr5 = ['3', '4', '5', '6', '7', '8', '2'];
// testArr6 = ['3', '4', '5', '6', '7', '8', '9'];

// testArr7 = ['2', '2', '3', '3', '4', '5', '6']
// testArr8 = ['2', '3', '4', '5', '6', '7', '8']
// testArr9 = ['3', '4', '5', '6', '7', '8', '9']
// testArr10 = ['4', '5', '6', '7', '8', '9', '10']
// testArr11 = ['5', '6', '7', '8', '9', '10', '11']
// testArr12 = ['6', '7', '8', '9', '9', '10', '11']
// testArr13 = ['7', '8', '9', '10', '11', '12', '13'] //return K high straight
// testArr14 = ['8', '9', '10', '11', '12', '13', '14'] //return broadway straight
// testArr15 = ['9', '10', '11', '12', '13', '14', '15'] //return broadway straight
// testArr16 = ['9', '10', '11', '12', '13', '14', '15'] //return broadway straight




// function arrayAlreadyHasArray(array) {
//   var conseq = 1;
//   for (var idx = 1; idx < array.length ; idx++) {
//       if (array[idx] == array[idx-1] + 1)
//           conseq++;
//       else
//           conseq = 1;
//       if (conseq == 5)
//           return true;
//   }
//   return false;
// }

// function fiveInARow(array) {

//   // compare if one element is greater than or equal to the previous one
//   function compare(elt, i, arr) { return !i || elt >= arr[i-1]; };

//   // check if at a given position, every one of the last five comparisons is true
//   function check (_, i, greaters) { 
//     return i >= 4 && greaters.slice(i-4, i) . every(Boolean);                         
//   }

//   return array . map(compare) . some(check);
// }



// console.log('-=-=-=-=--=-=--=-here-=-=-=--=-=-=-');

// console.log(arrayAlreadyHasArray(testArr1)); // 6
// console.log(arrayAlreadyHasArray(testArr2)); // 7
// console.log(arrayAlreadyHasArray(testArr3)); // 7
// console.log(arrayAlreadyHasArray(testArr4)); // false
// console.log(arrayAlreadyHasArray(testArr5)); // 8
// console.log(arrayAlreadyHasArray(testArr6)); 
// console.log(arrayAlreadyHasArray(testArr7)); 
// console.log(arrayAlreadyHasArray(testArr8));
// console.log(arrayAlreadyHasArray(testArr9)); 
// console.log(arrayAlreadyHasArray(testArr10)); 
// console.log(arrayAlreadyHasArray(testArr11)); 
// console.log(arrayAlreadyHasArray(testArr12)); 
// console.log(arrayAlreadyHasArray(testArr13));
// console.log(arrayAlreadyHasArray(testArr14)); 
// console.log(arrayAlreadyHasArray(testArr15)); 
// console.log(passAceHighStraightCheck(testArr16)); // 14
// console.log('break----=-=-==----------');
// console.log(fiveInARow(testArr1)); // 6 
// console.log(fiveInARow(testArr2)); // 7
// console.log(fiveInARow(testArr3)); // 7
// console.log(fiveInARow(testArr4)); // false
// console.log(fiveInARow(testArr5)); // 8
// console.log(fiveInARow(testArr6)); 
// console.log(fiveInARow(testArr7)); 
// console.log(fiveInARow(testArr8));
// console.log(fiveInARow(testArr9)); 
// console.log(fiveInARow(testArr10)); 
// console.log(fiveInARow(testArr11)); 
// console.log(fiveInARow(testArr12)); 
// console.log(fiveInARow(testArr13));
// console.log(fiveInARow(testArr14)); 
// console.log(fiveInARow(testArr15)); 
// console.log(passAceHighStraightCheck(testArr16)); // 14
// console.log('break----=-=-==----------');
// console.log(arrayAlreadyHasArray(straightArr, testArr1)); // 6
// console.log(arrayAlreadyHasArray(straightArr, testArr2)); // 7
// console.log(arrayAlreadyHasArray(straightArr, testArr3)); // 7
// console.log(arrayAlreadyHasArray(straightArr, testArr4)); // false
// console.log(arrayAlreadyHasArray(straightArr, testArr5)); // 8
// console.log(arrayAlreadyHasArray(straightArr, testArr6)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr7)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr8));
// console.log(arrayAlreadyHasArray(straightArr, testArr9)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr10)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr11)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr12)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr13));
// console.log(arrayAlreadyHasArray(straightArr, testArr14)); 
// console.log(arrayAlreadyHasArray(straightArr, testArr15)); 
// console.log(passAceHighStraightCheck(straightArr, testArr16)); // 14



// // ****    good version dont edit plz      ****** 

// // function arrayAlreadyHasArray(arr, testArr){
// //   for(var i = 0; i<arr.length; i++){
// //       let checker = []
// //       for(var j = 0; j<arr[i].length; j++){
// //           if(arr[i][j] === testArr[j]){
// //               checker.push(true)
// //           } else {
// //               checker.push(false)
// //           }
// //       }
// //       if (checker.every(check => check === true)){
// //           return true
// //       }
// //   }
// //   return false
// // }




vendors = [{
  Name: 'Magenic',
  ID: 'ABC'
},
{
  Name: 'Microsoft',
  ID: 'DEF'
} // and so on... 
];

if (vendors.filter(e => e.Name === 'Magenic').length > 0) {
  /* vendors contains the element we're looking for */
}


if (vendors.some(e => e.Name === 'Magenic')) {
  /* vendors contains the element we're looking for */

}



if (vendors.filter(function(e) { return e.Name === 'Magenic'; }).length > 0) {
  /* vendors contains the element we're looking for */

}


// Calculator
// This problem is worth 5 points. 
// You may receive partial credit.
// Build a calculator function that takes in three arguments: num1, operator,
// and num2. Each number will be an integer and the operator will be +, -,
// * or /. Your function will perform the calculations between the two
// numbers and return the answer.


// If the operator is invalid, return the string "Invalid Operator".



function calculator(num1, operator, num2) {
   if (operator === '+') {
      return num1 + num2;
   }
   if (operator === '-') {
    return num1 - num2;
   }
   if (operator === '*') {
    return num1 * num2;
   }
   if (operator === '/') {
    return num1 / num2;
   }
   if (operator === '?') {
    return "Invalid Operator";
   }
}

let score = 0;

if (calculator(123, "+", 456) === 579) score++;
if (calculator(987, "-", 654) === 333) score++;
if (calculator( 99, "*",   3) === 297) score++;
if (calculator(111, "/",   3) ===  37) score++;

if (calculator( 42, "?", 42) === "Invalid Operator") score++;

console.log("You have scored " + score + "/5 points.");