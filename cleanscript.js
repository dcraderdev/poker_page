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
let boardFlop = {};
let boardTurn = {};
let boardRiver = {};

let testBoard = {
  card1: ['4H'],
  card2: ['AS'],
  card3: ['5S'],
  card4: ['7S'],
  card5: ['3H'],
};

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
  '11',
  '12',
  '13',
  '14',
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

console.log(`=-=-=--=-createDeck-=-=-=-=-`);
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

console.log(`=-=-=-=-=-shuffleDeck-=-=-==-=-`);
// create deck to shuffle
// create deck makes us an un ordered deck
let testDeck = createDeck();
shuffleDeck(testDeck);
// test check for suffled deck
// console.log(testDeck);

// organize shuffled deck for hash

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

console.log(`-=-=-=-=-createHashDeck-=-=-=-==-`);
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

console.log(`=-=--=-cardsForTwoPLayersHash-=-==-`);
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
console.log(`=-=-==-=-logFlop2Players-=-=-==-`);
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
console.log(`=-=-=-=-logTurn2Players-=-=-==-`);
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
console.log(`=-==-=-logRiver2Players-=-===-`);
logRiver2Players(hashDeck);

console.log(`Burn Card`);
console.log(burnCards);
console.log(`The River`);
console.log(boardRiver);

// array of object values from board and player1 hand

function boardHandFlop(handPlayerOne, board) {
  boardAndHand = [
    handPlayerOne.card1.rank,
    handPlayerOne.card2.rank,
    board.card1.rank,
    board.card2.rank,
    board.card3.rank,
  ];
  return boardAndHand;
}

console.log(`=-=-=--=-=- boardAndHand -=-=-=-`);
boardHandFlop(handPlayerOne, board);
console.log(boardAndHand);

// // sexy way to increment thru player hand and board cards and push to 
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

let list = [10, 10, 2, 2, 10, 14, 14, 3, 3, 3, 3];
let pairCombinations = [];
let tripCombinations = [];
let quadCombinations = [];
let pairArray = [];
let tripArray = [];
let quadArray = [];
// rest of straightArr is auto filled with createStraights function below
let straightArr = [['13', '2', '3', '4', '5']];

// check for two of same card
function pairCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === what) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}
// iterates through all ranks to use in pairCheck
function passPairCheck(list) {
  let x = 2;
  for (let i = x; i <= 14; i++) {
    if (pairCheck(list, x)) {
      pairCombinations.push(x);
      pairArray.push(x);
      console.log(`yes pair of ${[x]}s`);
    }
    x++;
  }
  return pairCombinations;
}

console.log(passPairCheck(list));

// check for triple of same card
function tripCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === what) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  } else {
    return false;
  }
}

// if triple of same card, returns card
function passTripCheck(list) {
  let x = 2;
  for (let i = x; i <= 14; i++) {
    if (tripCheck(list, x)) {
      tripCombinations.push(x);
      tripArray.push(x);
      console.log(`yes trips of ${[x]}s`);
    }
    x++;
  }
  return tripCombinations;
}

console.log(passTripCheck(list));

// check for quad of same card
function quadCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === what) {
      count++;
    }
  }
  if (count === 4) {
    return true;
  } else {
    return false;
  }
}
1;

// if quad of same card, returns card
function passQuadCheck(list) {
  let x = 2;
  for (let i = x; i <= 14; i++) {
    if (quadCheck(list, x)) {
      quadCombinations.push(x);
      quadArray.push(x);
      console.log(`yes quads of ${[x]}s`);
    }
    x++;
  }
  return quadCombinations;
}

console.log(passQuadCheck(list));

console.log(pairArray);
console.log(tripArray);
console.log(quadArray);

// sort array by number
function compareNumbers(a, b) {
  return a - b;
}

// sort array by number
// moves aces to back
function orderedList(list) {
  let orderedList = list.sort(compareNumbers);
  
  if (orderedList[orderedList.length - 1] === '13') {
    orderedList[orderedList.length - 1].unshift
    orderedList[orderedList.length - 1].pop
  }
  if (orderedList[orderedList.length - 1] === '13') {
    orderedList[orderedList.length - 1].unshift
    orderedList[orderedList.length - 1].pop
  }
  if (orderedList[orderedList.length - 1] === '13') {
    orderedList[orderedList.length - 1].unshift
    orderedList[orderedList.length - 1].pop
  }
  if (orderedList[orderedList.length - 1] === '13') {
    orderedList[orderedList.length - 1].unshift
    orderedList[orderedList.length - 1].pop
  }
  return orderedList;
}

console.log(`=-=-=-=-sort the boardAndHand-=-=-=-`);
orderedList(boardAndHand);
console.log(orderedList(['13', '12', '13', '12', '5']));

// creates arr of straight arrays to check orderArr against
function createStraights() {
  for (let cardCounter = 2; cardCounter <= 10; cardCounter++) {
    straightArr.push([
      `${cardCounter}`,
      `${cardCounter + 1}`,
      `${cardCounter + 2}`,
      `${cardCounter + 3}`,
      `${cardCounter + 4}`,
    ]);
  }
  return straightArr;
}
console.log(`=-=-=-=-create straights array-=-=-==-`);
createStraights();



function exists(array2D, list2){
  for(var i = 0; i<array2D.length; i++){
      let checker = false
      for(var j = 0; j < list2[i].length; j++){
          if(list2[i][j] === list2[j]){
              checker = true
          } else {
              checker = false
              break;
          }
      }
      if (checker){
          return array2D[4]
      }
  }
  return false
}




console.log(exists(straightArr, boardAndHand));
// console.log(exists(straightArr, ['13', '2', '3', '4', '5']));









function isTwoPair(board, hand) {}
function isThreeOfKind(board, hand) {}
// function isStraight(board, hand) {}
function isFullHouse(board, hand) {}
function isFourOfKind(board, hand) {}
function isStraightFlush(board, hand) {}
function isRoyalFlush(board, hand) {}

function outsWithoutSuits(board, hand) {}


// let modifiedArr = arr.map(function(element){
//   return element *3;
// });


function countVowels(word) {
  let vowels = 'aeiou';
  let count = 0;

 word.split('').map(function(x) {
    if (vowels.includes(x)){
      count++;
    }
 })

  return count
};







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


