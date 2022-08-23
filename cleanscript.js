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



// var p = {
//   0: "value1",
//   "b": "value2",
//   key: "value3"
// };

// for (var key of Object.keys(p)) {
//   console.log(key + " -> " + p[key])
// }


// function getCard (handPlayerNumber){




// for (let [key, value] of Object.entries(handPlayerNumber)) {
//   console.log(key, value);
// }
// }

// console.log(getCard(handPlayer1));
// console.log('-=-=-=-=-=-=-=-=-');

// const items = {
//   'card1': {rank:'9', suit:'H'},
//   'first': new Date(),
//   'second': 2,
//   'third': 'test'
// }


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








// Object.entries(handPlayer1['card1']).map(item => {
//   console.log(items['card1'])
// })

// console.log('^^here');

// Object.entries(items).forEach(item => {
//   console.log(item)
// })

// for (const item of Object.entries(items)) {
//   console.log(item)
// }




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

// creates new boardandHand (reducedBoardAndHand) that does not contain duplicates
function shrinkBoardAndHand (boardAndHand) {
  let reducedBoardAndHand = [];
  for(let i = 0; i < boardAndHand.length; i++) {
    if (i === 0) {
      reducedBoardAndHand.push(boardAndHand[i]);
      // console.log(boardAndHand[i]);
      } else if (!(reducedBoardAndHand.includes(boardAndHand[i]))) {
      reducedBoardAndHand.push(boardAndHand[i]);
    } 
    }
  return reducedBoardAndHand
}

console.log(`=-=-=-=-shrinkBoardAndHand-=-=-=-`);
let reducedHandPlayer1 = shrinkBoardAndHand(orderedHandPlayer1Ranks)
let reducedHandPlayer2 = shrinkBoardAndHand(orderedHandPlayer2Ranks)





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

// iterates through all ranks to use in pairCheck
function passPairCheck(list) {
  let x = 2;
  let counter = 0;
  tempPairCombinations = [];
  for (let i = x; i <= 14; i++) {
    if (pairCheck(list, x)) {
      counter++
      tempPairCombinations.push(x);
    }
    x++;

// console.log(pairCombinations);
  } if (counter === 0) {
    return false
}
return tempPairCombinations
}


console.log(`=-=-=-=-passPairCheck-=-=-=-`);
passPairCheck(handPlayer1Ranks);
console.log(passPairCheck(handPlayer1Ranks)); 

// check for triple of same card
function tripCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i]) === what) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  } else {
    return false;
  }
}

// takes in array, if triple of same card, returns card
function passTripCheck(list) {
  let x = 2;
  let counter = 0
  tempTripCombinations = [];

  for (let i = x; i <= 14; i++) {
    if (tripCheck(list, x)) {
      tempTripCombinations.push(x);
      tripArray.push(x);
      counter++;
    }
    x++;
  }
  if (counter === 0)
  return false;
  else return tempTripCombinations
}
console.log(`=-=-=-=-passTripCheck-=-=-=-`);
passTripCheck(handPlayer1Ranks);
console.log(passTripCheck(handPlayer1Ranks));

// check for quad of same card
// list is board and hand, 
function quadCheck(list, what) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i]) === what) {
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
//list is boardandhand
// x iterates over all card ranks
function passQuadCheck(list) {
  let x = 2;
  tempQuadCombinations = [];

  for (let i = x; i <= 14; i++) {
    if (quadCheck(list, x)) {
      tempQuadCombinations.push(x);
      return tempQuadCombinations
    }
    x++;
  }
  return false;
}
console.log(`=-=-=-=-passQuadCheck-=-=-=-`);
passQuadCheck(handPlayer1Ranks);
console.log(passQuadCheck(handPlayer1Ranks));


// // sort array by number
// function compareNumbers(a, b) {
//   return a - b;
// }



let testArr1 = ['2', '3', '4', '5', '6'];
let testArr2 = ['3', '4', '5', '6', '7'];
let testArr3 = ['3', '4', '5', '6', '14', '4', '9'];
let testArr4 = ['2', '3', '4', '5', '7'];
let testArr5 = ['3', '4', '5', '6', '7', '8', '2'];
let testArr6 = ['3', '4', '5', '6', '7', '8', '9'];

let testArr7 = ['2', '2', '3', '3', '4', '5', '6']
let testArr8 = ['2', '2', '2', '3', '4', '5', '6']
let testArr9 = ['3', '4', '5', '6', '7', '8', '9']
let testArr10 = ['4', '5', '6', '7', '8', '9', '10']
let testArr11 = ['2', '6', '7', '8', '9', '10', '13']
let testArr12 = ['6', '7', '8', '9', '9', '10', '11']
let testArr13 = ['7', '8', '9', '10', '11', '12', '13'] //return K high straight
let testArr14 = ['8', '9', '10', '11', '12', '13', '14'] //return broadway straight
let testArr15 = ['9', '10', '11', '12', '13', '14'] //return broadway straight
let testArr16 = ['9', '10', '11', '12', '13', '14'] //return broadway straight




// check if boardAndHand contains 7 cards
// if so break into 3 groups and check if either group includes a straight

// check if boardAndHand contains 6 cards
// if so break into 2 groups and check if either group includes a straight

// check if boardAndHand contains 5 cards
// if so break into 1 groups and check if either group includes a straight
function passStraightCheck (reducedHandPlayerNumber) {
  // used in straightCheck
  let firstFive = [];
  let secondFive = [];
  let thirdFive = [];

  // if 7 long, make 3 slices
  if (reducedHandPlayerNumber.length === 7) {
    firstFive = [reducedHandPlayerNumber.slice(0,5)];
    secondFive = [reducedHandPlayerNumber.slice(1,6)];
    thirdFive = [reducedHandPlayerNumber.slice(2,7)];
  }
  // if 6 long, make 2 slices
  if (reducedHandPlayerNumber.length === 6) {
    firstFive = [reducedHandPlayerNumber.slice(0,5)];
    secondFive = [reducedHandPlayerNumber.slice(1,6)];
  }
  // if 5 long, make 1 slice
  if (reducedHandPlayerNumber.length === 5) {
    firstFive = [reducedHandPlayerNumber.slice(0,5)];
  }
  // console.log(firstFive);
  // console.log(secondFive);
  // console.log(thirdFive);
  // if 7 long, check 3 slices
  if (reducedHandPlayerNumber.length === 7) {
    if (`${thirdFive}` in straightHash) { return straightHash[`${thirdFive}`]};
    if (`${secondFive}` in straightHash) { return straightHash[`${secondFive}`]};
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};
  }
  // if 6 long, check 2 slices

  if (reducedHandPlayerNumber.length === 6) {
    if (`${secondFive}` in straightHash) { return straightHash[`${secondFive}`]};
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};

  
  }
  // if 5 long, check 2 slices 

  if (reducedHandPlayerNumber.length === 5) {
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};

  
}
return false
}

console.log(`=-=-=-=-passStraightCheck-=-=-=-`);

// console.log(reducedHandPlayer1);
console.log(passStraightCheck(reducedHandPlayer1));


// console.log(straightHash);
// console.log(passStraightCheck(['2','3','4','5','6','7','14']));

// // console.log(passStraightCheck(reducedBoardAndHand));
// console.log('^^here');









// takes in entire reducedHandPlayerNumber and returns true if contains 5 high straight
function pass5HighStraightCheck(boardAndHand) {
  let lowFive2 = '2,3,4,5,14'
  let lowFive = ['2','3','4','5','14']

  let count = 0;
  for(let i =0; i <boardAndHand.length;i++)
  // if (boardAndHand[i].includes(lowFive)){
  if (lowFive.includes(boardAndHand[i])){

    // console.log('yes');
    lowfive = lowFive.filter(num => boardAndHand[i]);
    count++;

  } if (count === 5) {return true}
  return false;
}

console.log(`=-=-=-=-pass5HighStraightCheck-=-=-=-`);

// console.log(reducedHandPlayer1);
console.log(pass5HighStraightCheck(reducedHandPlayer1));


// console.log(pass5HighStraightCheck(['2','3','4','5','14']));
// console.log(pass5HighStraightCheck(['2','3','4','5','6','14']));
// console.log(pass5HighStraightCheck(['2','3','4','5','6']));


function playerSuits(handPlayerNumber) {
  // check suits of all cards in hand
  let tempSuits2 = [ 
    handPlayerNumber.card1.suit,
    handPlayerNumber.card2.suit,
    handPlayerNumber.card3.suit,
    handPlayerNumber.card4.suit,
    handPlayerNumber.card5.suit,
    handPlayerNumber.card6.suit,
    handPlayerNumber.card7.suit
  ]
  return tempSuits2
}




// let practiceHand =  {
//   card1: { rank: '10', suit: 'S'},
//   card2: { rank: '10', suit: 'S'},
//   card3: {rank: '2', suit: 'S'},
//   card4: {rank: '3', suit: 'S'},
//   card5: {rank: '2', suit: 'S'},
//   card6: {rank: '4', suit: 'S'},
//   card7: {rank: '5', suit: 'C'}
// };


function suitsOfPlayer (handPlayerNumber){
  let tempSuits = [ 
    handPlayerNumber.card1.suit,
    handPlayerNumber.card2.suit,
    handPlayerNumber.card3.suit,
    handPlayerNumber.card4.suit,
    handPlayerNumber.card5.suit,
    handPlayerNumber.card6.suit,
    handPlayerNumber.card7.suit
  ]
  return tempSuits

}


let practiceHand2 =  {
  card1: { rank: '13', suit: 'S'},
  card2: { rank: '7', suit: 'S'},
  card3: {rank: '2', suit: 'S'},
  card4: {rank: '3', suit: 'S'},
  card5: {rank: '6', suit: 'S'},
  card6: {rank: '4', suit: 'S'},
  card7: {rank: '5', suit: 'S'}
};







// takes in player hand hash
function passStraightFlushCheck (handPlayerNumber){
  let hearts = [];
  let diamonds = [];
  let spades = [];
  let clubs = [];

  for(let i = 1; i < 8; i++){
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     let orderedSpades = orderedHand(spades)
//     console.log(orderedSpades);
// console.log(passStraightCheck(orderedSpades));
  } // sort array then passStraightCheck
  if (hearts.length>4 && (passStraightCheck(orderedHand(hearts)))) {return (passStraightCheck(orderedHand(hearts)))}
  else if (diamonds.length>4 && (passStraightCheck(orderedHand(diamonds)))) {return (passStraightCheck(orderedHand(diamonds)))}
  else if (spades.length>4 && (passStraightCheck(orderedHand(spades)))) {return (passStraightCheck(orderedHand(spades)))}
  else if (clubs.length>4 && (passStraightCheck(orderedHand(clubs)))) {return (passStraightCheck(orderedHand(clubs)))}

  return false
}


console.log(`=-=-=-=-passStraightFlushCheck-=-=-=-`);

// console.log(reducedHandPlayer1);
console.log(passStraightFlushCheck(handPlayer1));


// console.log(passStraightFlushCheck(practiceHand2));
// console.log(getSuits(handPlayer1));
// console.log(handPlayer1);



// function passStraightFlushCheck (handPlayerNumber){
//   let hearts = [];
//   let diamonds = [];
//   let spades = [];
//   let clubs = [];

//   for(let i = 1; i < 8; i++){
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     let orderedSpades = orderedHand(spades)
//     console.log(orderedSpades);
// console.log(passStraightCheck(orderedSpades));
//   } // sort array then passStraightCheck
//   if (hearts.length>4) {return (passStraightCheck(orderedHand(hearts)) || pass5HighStraightCheck(heart))}
//   if (diamonds.length>4) {return (passStraightCheck(orderedHand(diamonds)) || pass5HighStraightCheck(diamonds))}
//   if (spades.length>4) {return (passStraightCheck(orderedHand(spades)) || pass5HighStraightCheck(spades))}
//   if (clubs.length>4) {return (passStraightCheck(orderedHand(clubs)) || pass5HighStraightCheck(clubs))}

//   return `${hearts}, ${diamonds}, ${spades}, ${clubs}`
// }

// console.log(passStraightFlushCheck(practiceHand2));
// console.log('^^here');
// // console.log(getSuits(handPlayer1));
// // console.log(handPlayer1);




function pass5HighStraightFlushCheck (handPlayerNumber){
  let hearts = [];
  let diamonds = [];
  let spades = [];
  let clubs = [];

  for(let i = 1; i < 8; i++){
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayerNumber[`card${[i]}`]['rank'])}
    if (handPlayerNumber[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayerNumber[`card${[i]}`]['rank'])}

  } // sort array then passStraightCheck
  if (hearts.length>4 && (pass5HighStraightCheck(hearts))) {return 5}
  if (diamonds.length>4 && (pass5HighStraightCheck(diamonds))) {return 5}
  if (spades.length>4 && (pass5HighStraightCheck(spades))) {return 5}
  if (clubs.length>4 && (pass5HighStraightCheck(clubs))) {return 5}

  return false
}

console.log(`=-=-=-=-pass5HighStraightFlushCheck-=-=-=-`);
console.log(pass5HighStraightFlushCheck(practiceHand2));







// delete below after correcting



// // orderedHand(practiceHand2)

// console.log(passStraightCheck(practiceHand2));
// console.log('^^here');


// function passStraightFlushCheck (handPlayerNumber){
//   let hearts = [];
//   let diamonds = [];
//   let spades = [];
//   let clubs = [];

//   for(let i = 1; i < 8; i++){
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayerNumber[`card${[i]}`]['rank'])}
// console.log(spades);
// console.log( passStraightCheck((orderedHand(spades))));
//   } // sort array then passStraightCheck
//   let orderedHearts = orderedHand(hearts);
//   let orderedDiamonds = orderedHand(diamonds);
//   let orderedSpades = orderedHand(spades);
//   let orderedClubs = orderedHand(clubs);
// console.log(orderedSpades);
// console.log(passStraightCheck(orderedSpades));
//   if (hearts.length>4 && (passStraightCheck(orderedHearts) !== false)) {return Math.max(...hearts)}
//   if (diamonds.length>4 && passStraightCheck(orderedDiamonds)) {return Math.max(...diamonds)}
//   if (spades.length>4 && passStraightCheck(orderedSpades)) {return Math.max(...spades) }
//   if (clubs.length>4 && passStraightCheck(orderedClubs)) {return Math.max(...clubs)}

//   return `${hearts}, ${diamonds}, ${spades}, ${clubs}`
// }

// console.log(passStraightFlushCheck(practiceHand2));

// // console.log(getSuits(handPlayer1));
// // console.log(handPlayer1);


// function pass5HighStraightFlushCheck (handPlayerNumber){
//   let hearts = [];
//   let diamonds = [];
//   let spades = [];
//   let clubs = [];

//   for(let i = 1; i < 8; i++){
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'H'){hearts.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'D'){diamonds.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'S'){spades.push(handPlayerNumber[`card${[i]}`]['rank'])}
//     if (handPlayerNumber[`card${[i]}`]['suit'] === 'C'){clubs.push(handPlayerNumber[`card${[i]}`]['rank'])}

//   } // sort array then passStraightCheck
//   if (hearts.length>4 && (pass5HighStraightCheck(hearts))) {return 5}
//   if (diamonds.length>4 && (pass5HighStraightCheck(diamonds))) {return 5}
//   if (spades.length>4 && (pass5HighStraightCheck(spades))) {return 5}
//   if (clubs.length>4 && (pass5HighStraightCheck(clubs))) {return 5}

//   return false
// }

// console.log(pass5HighStraightFlushCheck(practiceHand2));










// **** good flush check dont edit ******

// // checks for 5 of same suit and returns highest card within that suit range
// function passFlushCheck(handPlayerNumber) {
//   // check suits of all cards in hand
//   let tempSuits = [ 
//     handPlayerNumber.card1.suit,
//     handPlayerNumber.card2.suit,
//     handPlayerNumber.card3.suit,
//     handPlayerNumber.card4.suit,
//     handPlayerNumber.card5.suit,
//     handPlayerNumber.card6.suit,
//     handPlayerNumber.card7.suit
//   ]

//   let tempRanks = [ 
//     handPlayerNumber.card1.rank,
//     handPlayerNumber.card2.rank,
//     handPlayerNumber.card3.rank,
//     handPlayerNumber.card4.rank,
//     handPlayerNumber.card5.rank,
//     handPlayerNumber.card6.rank,
//     handPlayerNumber.card7.rank
//   ]


//   //check for 5+ of same suit
//   let tempSpadesRanks = [];
//   let tempDiamondsRanks = [];
//   let tempClubsRanks = [];
//   let tempHeartsRanks = [];
//   let countSpades = 0;
//   let countDiamonds = 0;
//   let countClubs = 0;
//   let countHearts = 0;



//   for(let i = 0; i <= tempSuits.length; i++){

//     // console.log(tempSuits);
//     // console.log(tempRanks);

//     if (tempSuits[i] === 'S' ){
//       tempSpadesRanks.push(tempRanks[i])
//       countSpades++
//     }
//     if (tempSuits[i] === 'D' ){
//       tempDiamondsRanks.push(tempRanks[i])
//       countDiamonds++
//     }
//     if (tempSuits[i] === 'C' ){
//       tempClubsRanks.push(tempRanks[i])
//       countClubs++
//     }
//     if (tempSuits[i] === 'H' ){
//       tempHeartsRanks.push(tempRanks[i])
//       countHearts++
//     }


//   }
//   if (countSpades > 4){return Math.max(...tempSpadesRanks)}
//   if (countDiamonds > 4){return Math.max(...tempDiamondsRanks)}
//   if (countClubs > 4){return Math.max(...tempClubsRanks)}
//   if (countHearts > 4){return Math.max(...tempHeartsRanks)}

// //   if true, return true and highest card rank with that suit
// //   if false return false
//     return false
// }


// console.log(`-=-=-=-passFlushCheck-=-=-=`);
// console.log(passFlushCheck(handPlayer1));
// console.log(passFlushCheck(handPlayer2));
// console.log(passFlushCheck(practiceHand));








// iterate over each handPlayerNumber key and check for straight
// if straight check if all 5 are same suit

// iterate over each handPlayerNumber value and check for flush


// function passStraightFlushCheck (handPlayerNumber) {
//   let tempFirstFive = [];
//   let tempSecondFive = [];
//   let tempThirdFive = [];

//   straightHighCard = [];

//   // console.log(handPlayerNumber);
//   // get temp ranks for hand being played
//   let tempRanks = playerCardRanks(handPlayerNumber)
//   console.log(tempRanks);
//   // put ranks in order for hand being played
//   let tempOrdered = orderedHand(tempRanks)
//   console.log(tempOrdered);

//   // remove duplicates for hand being played
//   let tempReduce = shrinkBoardAndHand(tempOrdered)
//   console.log(tempReduce);

// // if 7 long, make 3 slices
// if (boardAndHand.length === 7) {
//   firstFive = [tempReduce.slice(0,5)];
//   secondFive = [tempReduce.slice(1,6)];
//   thirdFive = [tempReduce.slice(2,7)];
// }
// // if 6 long, make 2 slices
// if (tempReduce.length === 6) {
//   firstFive = [tempReduce.slice(0,5)];
//   secondFive = [tempReduce.slice(1,6)];
// }
// // if 5 long, make 1 slice
// if (tempReduce.length === 5) {
//   firstFive = [tempReduce.slice(0,5)];
// }
// console.log(firstFive);
// console.log(secondFive);
// console.log(thirdFive);
// // if 7 long, check 3 slices
// if (tempReduce.length === 7) {
//   if (`${thirdFive}` in straightHash) { return straightHash[`${thirdFive}`]};
//   if (`${secondFive}` in straightHash) { return straightHash[`${secondFive}`]};
//  if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};
// }
// // if 6 long, check 2 slices

// if (tempReduce.length === 6) {
//   if (`${secondFive}` in straightHash) { return straistraightHash[`${secondFive}`]};
//  if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};


// }
// // if 5 long, check 2 slices 

// if (tempReduce.length === 5) {
//  if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};
// }





//   //check if all 5 cards are same suit

//   // check if handPLayerNumber has flush






// return false
// }

// // console.log(passStraightFlushCheck(handPlayer1));
// console.log(passStraightFlushCheck(practiceHand));







// // checks for 5 of same suit and returns highest card within that suit range
// function passFlushCheck(handPlayerNumber) {

//   // take entire hand, chop into 3 slices
//   // check for straight
//   // check for 5 card flush
//   // if both then straight flush


//   // check suits of all cards in hand
//   let tempSuits = [ 
//     handPlayerNumber.card1.suit,
//     handPlayerNumber.card2.suit,
//     handPlayerNumber.card3.suit,
//     handPlayerNumber.card4.suit,
//     handPlayerNumber.card5.suit,
//     handPlayerNumber.card6.suit,
//     handPlayerNumber.card7.suit
//   ]

//   let tempRanks = [ 
//     handPlayerNumber.card1.rank,
//     handPlayerNumber.card2.rank,
//     handPlayerNumber.card3.rank,
//     handPlayerNumber.card4.rank,
//     handPlayerNumber.card5.rank,
//     handPlayerNumber.card6.rank,
//     handPlayerNumber.card7.rank
//   ]


//   //check for 5+ of same suit
//   let tempSpadesRanks = [];
//   let tempDiamondsRanks = [];
//   let tempClubsRanks = [];
//   let tempHeartsRanks = [];
//   let countSpades = 0;
//   let countDiamonds = 0;
//   let countClubs = 0;
//   let countHearts = 0;



//   for(let i = 0; i <= tempSuits.length; i++){

//     // console.log(tempSuits);
//     // console.log(tempRanks);

//     if (tempSuits[i] === 'S' ){
//       tempSpadesRanks.push(tempRanks[i])
//       countSpades++
//     }
//     if (tempSuits[i] === 'D' ){
//       tempDiamondsRanks.push(tempRanks[i])
//       countDiamonds++
//     }
//     if (tempSuits[i] === 'C' ){
//       tempClubsRanks.push(tempRanks[i])
//       countClubs++
//     }
//     if (tempSuits[i] === 'H' ){
//       tempHeartsRanks.push(tempRanks[i])
//       countHearts++
//     }


//   }
//   if (countSpades > 4){return Math.max(...tempSpadesRanks)}
//   if (countDiamonds > 4){return Math.max(...tempDiamondsRanks)}
//   if (countClubs > 4){return Math.max(...tempClubsRanks)}
//   if (countHearts > 4){return Math.max(...tempHeartsRanks)}

// //   if true, return true and highest card rank with that suit
// //   if false return false
//     return false
// }


console.log(`-=-=-=-passFlushCheck-=-=-=`);
// console.log(passFlushCheck(handPlayer1));
// console.log(passFlushCheck(handPlayer2));
// console.log(passFlushCheck(practiceHand));
























// let arr = ['1','2','3','5','4','8','9']

// function arrIsStraight (arr) {


// }

// // console.log(arrIsStraight(arr));


// practice hand array
// ['2', '2', '3', '4', '5', '10', '10']



// check if 5 cards are in a row
// check if those cards have same suit







// function passStraightFlushCheck (handPlayerNumber) {
//   // check suits of all cards in hand
//   let tempSuits = [ 
//     handPlayerNumber.card1.suit,
//     handPlayerNumber.card2.suit,
//     handPlayerNumber.card3.suit,
//     handPlayerNumber.card4.suit,
//     handPlayerNumber.card5.suit,
//     handPlayerNumber.card6.suit,
//     handPlayerNumber.card7.suit
//   ]

//   let tempRanks = [ 
//     handPlayerNumber.card1.rank,
//     handPlayerNumber.card2.rank,
//     handPlayerNumber.card3.rank,
//     handPlayerNumber.card4.rank,
//     handPlayerNumber.card5.rank,
//     handPlayerNumber.card6.rank,
//     handPlayerNumber.card7.rank
//   ]


//   //check for 5+ of same suit
//   let tempSpadesRanks = [];
//   let tempDiamondsRanks = [];
//   let tempClubsRanks = [];
//   let tempHeartsRanks = [];
//   let countSpades = 0;
//   let countDiamonds = 0;
//   let countClubs = 0;
//   let countHearts = 0;



//   for(let i = 0; i <= tempSuits.length; i++){

//     // console.log(tempSuits);
//     // console.log(tempRanks);

//     if (tempSuits[i] === 'S' ){
//       tempSpadesRanks.push(tempRanks[i])
//       countSpades++
//     }
//     if (tempSuits[i] === 'D' ){
//       tempDiamondsRanks.push(tempRanks[i])
//       countDiamonds++
//     }
//     if (tempSuits[i] === 'C' ){
//       tempClubsRanks.push(tempRanks[i])
//       countClubs++
//     }
//     if (tempSuits[i] === 'H' ){
//       tempHeartsRanks.push(tempRanks[i])
//       countHearts++
//     }


//   }
//   if (countSpades > 4 && tempSpadesRanks.passStraightCheck()){return Math.max(...tempSpadesRanks)}
//   if (countDiamonds > 4){return Math.max(...tempDiamondsRanks)}
//   if (countClubs > 4){return Math.max(...tempClubsRanks)}
//   if (countHearts > 4){return Math.max(...tempHeartsRanks)}

// //   if true, return true and highest card rank with that suit
// //   if false return false
//     return false
// }















// function isTwoPair(board, hand) {}
// function isThreeOfKind(board, hand) {}
// // function isStraight(board, hand) {}
// function isFullHouse(board, hand) {}
// function isFourOfKind(board, hand) {}
// function isStraightFlush(board, hand) {}
// function isRoyalFlush(board, hand) {}

// function outsWithoutSuits(board, hand) {}



console.log('^^^^^');





// console.log(Math.max(1, 3, 2));
// // expected output: 3

// console.log(Math.max(-1, -3, -2));
// // expected output: -1

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// // expected output: 3


// console.log(Math.max(array1));



