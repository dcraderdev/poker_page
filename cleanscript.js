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


let list = [10, 10, 2, 2, 2, 3, 3, 4, 4, 4, 5];  



function pairCheck(list, what) {
    let count = 0;
  for (let i = 0; i < 15; i++) {
      if (list[i] === what) {
          count++;
      }
    } if (count > 1){
     return true;
    } else {
      return false
    }
}

console.log(list);
console.log(pairCheck(list, 2)); // returns 3 true
console.log(pairCheck(list, 1)); // returns 0 false
console.log(pairCheck(list, 10)); // returns 2 true


// function passPairCheck (list) {
//   let pairsArray = [];
//   let y = 0
//   while (y < list.length) {
//     pairCheck(list, y); 
//     y++;
//   } if (pairCheck === true) 
//       pairsArray.push(`list${[y]}`);
  
//   return pairsArray
// };

// console.log(passPairCheck(list));


function passPairCheck2 (list) {
  let x = 2;
  let pairArray = []
  for (let i = x; i < 15; i++)
    ((pairCheck(list, x) === true) ? pairArray.push(i) : false);
    return pairArray
}

console.log(passPairCheck2(list));


// function check 


// console.log(flopCheck(list, check()))





// check hand strength

function isTwoPair(board, hand) {}

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


