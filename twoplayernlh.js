// Poker Page!!! All things poker coding and algos

//New create unshuffled deck function below (function createDeck())
let hashDeck = {};
let deck = [];
let board = {};
let burnCards = { card1: {}, card2: {}, card3: {} };
let boardAndHand = [];
let cardAndBoard = [];
let handPlayer1 = {};
let handPlayer2 = {};
let handPlayer3 = {};
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


// // used in straightCheck
// let firstFive = [];
// let secondFive = [];
// let thirdFive = [];



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
// rest of straightArr is auto filled with createStraights function below
let straightArr = [['14', '2', '3', '4', '5']];
// creates arr of straight arrays to check orderArr against
function createStraights() {
  for (let cardCounter = 2; cardCounter <= 10; cardCounter++) {
    straightArr.push([
      `${cardCounter}`,
      `${cardCounter + 1}`,
      `${cardCounter + 2}`,
      `${cardCounter + 3}`,
      `${cardCounter + 4}`
    ]);
  }
  return straightArr;
}
console.log(`=-=-=-=-createStraights-=-=-==-`);
createStraights();
console.log(straightArr);


let straightHash = {};
function createStraightHash(straightArr) {
  for (let i = 0; i < straightArr.length; i++) {
    // straightHash[`Straight${i+5}`] = {};
    // straightHash[`${i+5}`] = straightArr[i];
    straightHash[straightArr[i]] = i+5;
    // straightHash[`highcard${i+5}`]['highcard'] = straightArr[i];  
  }
  return straightHash
}


console.log(`-=-=-=-=-createStraightHash-=-=-=-==-`);
createStraightHash(straightArr);
console.log(straightHash);




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
console.log(testDeck);

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







// let handPlayer1Arr = [];
// let handPlayer2Arr = [];

// //create arrays for handPlayer1Arr and handPlayer2Arr
// function cardsForTwoPlayersArr(deck) {
//   for(let i = 0; i < 13; i++){
//     if(i === 1 || i === 3  || i === 6 || i === 7 || i === 8 || i === 10 || i === 12){handPlayer1Arr.push(deck[i])}
//     if(i === 2 || i === 4  || i === 6 || i === 7 || i === 8 || i === 10 || i === 12){handPlayer2Arr.push(deck[i])}

//   }

// }

// console.log(cardsForTwoPlayersArr(testDeck));
// console.log(handPlayer1Arr);







// iterate over cards 
// sort them by suit
// if arr >= 5 sort them by rank and check for straight



// cards in form of a Hash
// assigns cards for two player hand
function cardsForTwoPLayersHash(deck) {
  // player one cards - 1st and 3rd card + flop, turn, river
  handPlayer1.card1 = deck.card1;
  handPlayer1.card2 = deck.card3;
  handPlayer1.card3 = deck.card6;
  handPlayer1.card4 = deck.card7;
  handPlayer1.card5 = deck.card8;
  handPlayer1.card6 = deck.card10;
  handPlayer1.card7 = deck.card12;

  // player two cards - 2nd and 4th card + flop, turn, river
  handPlayer2.card1 = deck.card2;
  handPlayer2.card2 = deck.card4;
  handPlayer2.card3 = deck.card6;
  handPlayer2.card4 = deck.card7;
  handPlayer2.card5 = deck.card8;
  handPlayer2.card6 = deck.card10;
  handPlayer2.card7 = deck.card12;
}


console.log(`=-=--=-cardsForTwoPLayersHash-=-==-`);
// invoke cardsForTwoPlayers
cardsForTwoPLayersHash(hashDeck);

// test check players hands
console.log(`hand player one`);
console.log(handPlayer1);
console.log(`hand player two`);
console.log(handPlayer2);



var p = {
  0: "value1",
  "b": "value2",
  key: "value3"
};

for (var key of Object.keys(p)) {
  console.log(key + " -> " + p[key])
}


function getCard (handPlayerNumber){




for (let [key, value] of Object.entries(handPlayerNumber)) {
  console.log(key, value);
}
}

console.log(getCard(handPlayer1));
console.log('-=-=-=-=-=-=-=-=-');

const items = {
  'card1': {rank:'9', suit:'H'},
  'first': new Date(),
  'second': 2,
  'third': 'test'
}


// for (const rank in items['card1']) {
//   console.log(rank)
// }



// function getSuits (handPlayerNumber){
//   let hearts = [];
//   let diamonds = [];
//   let spades = [];
//   let clubs = [];

//   for(let i = 1; i < 8; i++){
//     if (handPlayer1[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayer1[`card${[i]}`]['rank'])}
//     if (handPlayer1[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayer1[`card${[i]}`]['rank'])}
//     if (handPlayer1[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayer1[`card${[i]}`]['rank'])}
//     if (handPlayer1[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayer1[`card${[i]}`]['rank'])}

//   }
//   if (hearts.length>4) {}
//   if (diamonds.length>4) {}
//   if (spades.length>4) {}
//   if (clubs.length>4) {}

//   return `${hearts}, ${diamonds}, ${spades}, ${clubs}`
// }


// console.log(getSuits(handPlayer1));








Object.entries(handPlayer1['card1']).map(item => {
  console.log(items['card1'])
})

console.log('^^here');

Object.entries(items).forEach(item => {
  console.log(item)
})

for (const item of Object.entries(items)) {
  console.log(item)
}




// // push flop cards into board hash
// function logFlop2Players(deck) {
//   burnCards.card1 = deck.card5;
//   boardFlop.card1 = deck.card6;
//   boardFlop.card2 = deck.card7;
//   boardFlop.card3 = deck.card8;
//   board.card1 = deck.card6;
//   board.card2 = deck.card7;
//   board.card3 = deck.card8;
// }
// console.log(`=-=-==-=-logFlop2Players-=-=-==-`);
// logFlop2Players(hashDeck);

// console.log(`Burn Cards`);
// console.log(burnCards);
// console.log(`The Flop`);
// console.log(boardFlop);

// // push turn cards into turn hash
// function logTurn2Players(deck) {
//   burnCards.card2 = deck.card9;
//   boardTurn.card1 = deck.card10;
//   board.card4 = deck.card10;
// }
// console.log(`=-=-=-=-logTurn2Players-=-=-==-`);
// logTurn2Players(hashDeck);

// console.log(`Burn Card`);
// console.log(burnCards);
// console.log(`The Turn`);
// console.log(boardTurn);

// // push turn cards into turn hash
// function logRiver2Players(deck) {
//   burnCards.card3 = deck.card11;
//   boardRiver.card1 = deck.card12;
//   board.card5 = deck.card12;
// }
// console.log(`=-==-=-logRiver2Players-=-===-`);
// logRiver2Players(hashDeck);

// console.log(`Burn Card`);
// console.log(burnCards);
// console.log(`The River`);
// console.log(boardRiver);







// array of object values from board and player1 hand
function playerCardRanks(handPlayerNumber) {
 let playerCardRanks = [
    handPlayerNumber.card1.rank,
    handPlayerNumber.card2.rank,
    handPlayerNumber.card3.rank,
    handPlayerNumber.card4.rank,
    handPlayerNumber.card5.rank,
    handPlayerNumber.card6.rank,
    handPlayerNumber.card7.rank,
   

  ];
  return playerCardRanks;
}

// console.log(board);
// console.log(`=-=-=--=-=- boardHandFlopTurnRiver -=-=-=-`);

let handPlayer1Ranks = playerCardRanks(handPlayer1);
let handPlayer2Ranks = playerCardRanks(handPlayer2);



console.log(playerCardRanks(handPlayer1));




let pairCombinations = [];
let tripCombinations = [];
let quadCombinations = [];
let pairArray = [];
let tripArray = [];
let quadArray = [];


// sort array by number
function compareNumbers(a, b) {
  return a - b;
}


let practiceHand =  {
  card1: { rank: '9', suit: 'S'},
  card2: { rank: '10', suit: 'S'},
  card3: {rank: '2', suit: 'S'},
  card4: {rank: '3', suit: 'S'},
  card5: {rank: '6', suit: 'S'},
  card6: {rank: '4', suit: 'S'},
  card7: {rank: '5', suit: 'S'}
};





// // cards in playerhand1
// function sortHand(handPlayerNumber) {

//   let sortable = [];
// for(let card=1;card<=7;i++){
// {for (let card in handPlayerNumber) {
//     sortable.push([card, handPlayerNumber[card[i]]]);
//     console.log(card);
// }}

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// })}
// return sortable
// };


// console.log(sortHand(handPlayer1));




// [['str', {object}]['str', {object}]]



// let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });





// sort array of ranks by number
// moves aces to back
function orderedHand(hand) {

  let orderedHand = hand.sort(compareNumbers);

  if (orderedHand[orderedHand.length - 1] === '14') {
    orderedHand[orderedHand.length - 1].unshift;
    orderedHand[orderedHand.length - 1].pop;
  }
  if (orderedHand[orderedHand.length - 1] === '14') {
    orderedHand[orderedHand.length - 1].unshift;
    orderedHand[orderedHand.length - 1].pop;
  }
  if (orderedHand[orderedHand.length - 1] === '14') {
    orderedHand[orderedHand.length - 1].unshift;
    orderedHand[orderedHand.length - 1].pop;
  }
  if (orderedHand[orderedHand.length - 1] === '14') {
    orderedHand[orderedHand.length - 1].unshift;
    orderedHand[orderedHand.length - 1].pop;
  }
  return orderedHand;
}

console.log(orderedHand(playerCardRanks(practiceHand)));


console.log(handPlayer1Ranks);

console.log(`=-=-=-orderedHand(handPlayerNumber)-=-=-`);+

console.log(handPlayer1);
console.log(handPlayer2);



let orderedHandPlayer1Ranks = orderedHand(handPlayer1Ranks);
console.log(handPlayer1Ranks);
let orderedHandPlayer2Ranks = orderedHand(handPlayer2Ranks);
console.log(handPlayer2Ranks);



// check for two of same card
function pairCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i]) === what) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}
