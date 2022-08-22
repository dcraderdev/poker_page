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


// used in straightCheck
let firstFive = [];
let secondFive = [];
let thirdFive = [];

// used in shrinkHand, used to remove duplicate cards to check for straight
let reducedBoardAndHand = [];


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

function boardHandFlopTurnRiver(handPlayerOne, board) {
  boardAndHand = [
    handPlayerOne.card1.rank,
    handPlayerOne.card2.rank,
    board.card1.rank,
    board.card2.rank,
    board.card3.rank,
    board.card4.rank,
    board.card5.rank,

  ];
  return boardAndHand;
}

console.log(board);
console.log(`=-=-=--=-=- boardHandFlopTurnRiver -=-=-=-`);
boardHandFlopTurnRiver(handPlayerOne, board);


let pairCombinations = [];
let tripCombinations = [];
let quadCombinations = [];
let pairArray = [];
let tripArray = [];
let quadArray = [];


// sort array by number
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

console.log(boardAndHand);

console.log(`=-=-=-orderedHand(boardAndHand)-=-=-`);
orderedHand(boardAndHand);

console.log(boardAndHand);


// check if boardAndHand contains 7 cards
// if so break into 3 groups and check if either group includes a straight

// check if boardAndHand contains 6 cards
// if so break into 2 groups and check if either group includes a straight

// check if boardAndHand contains 5 cards
// if so break into 1 groups and check if either group includes a straight

// let firstFive = [];
// let secondFive = [];
// let thirdFive = [];


// function sliceUp (boardAndHand) {
//   if (boardAndHand.length === 7) {
//     firstFive = [boardAndHand.slice(0,5)];
//     secondFive = [boardAndHand.slice(1,6)];
//     thirdFive = [boardAndHand.slice(2,7)];
//   }
//   if (boardAndHand.length === 6) {
//     firstFive = [boardAndHand.slice(0,5)];
//     secondFive = [boardAndHand.slice(1,6)];
//   }
//   if (boardAndHand.length === 5) {
//     firstFive = [boardAndHand.slice(0,5)];
//   }
//   if (boardAndHand.length === 7) {
//     return firstFive, secondFive, thirdFive
//   }
//   if (boardAndHand.length === 6) {
//     return firstFive, secondFive
//   }
//   if (boardAndHand.length === 5) {
//     return firstFive
// }
// }




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
passPairCheck(boardAndHand);
console.log(passPairCheck(boardAndHand)); 

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

// if triple of same card, returns card
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
passTripCheck(boardAndHand);
console.log(passTripCheck(boardAndHand));

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
passQuadCheck(boardAndHand);
console.log(passQuadCheck(boardAndHand));


// sort array by number
function compareNumbers(a, b) {
  return a - b;
}



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


// creates new boardandHand (reducedBoardAndHand) that does not contain duplicates
function shrinkBoardAndHand (boardAndHand) {
  for(let i = 0; i < boardAndHand.length; i++) {
    if (i === 0) {
      reducedBoardAndHand.push(boardAndHand[i]);
      // console.log(boardAndHand[i]);
      } else if (!(reducedBoardAndHand.includes(boardAndHand[i]))) {
      reducedBoardAndHand.push(boardAndHand[i]);
    } 
    }
  
}

console.log(`=-=-=-=-shrinkBoardAndHand-=-=-=-`);
shrinkBoardAndHand(boardAndHand)







// check if boardAndHand contains 7 cards
// if so break into 3 groups and check if either group includes a straight

// check if boardAndHand contains 6 cards
// if so break into 2 groups and check if either group includes a straight

// check if boardAndHand contains 5 cards
// if so break into 1 groups and check if either group includes a straight
function passStraightCheck (boardAndHand) {
  // if 7 long, make 3 slices
  if (boardAndHand.length === 7) {
    firstFive = [boardAndHand.slice(0,5)];
    secondFive = [boardAndHand.slice(1,6)];
    thirdFive = [boardAndHand.slice(2,7)];
  }
  // if 6 long, make 2 slices
  if (boardAndHand.length === 6) {
    firstFive = [boardAndHand.slice(0,5)];
    secondFive = [boardAndHand.slice(1,6)];
  }
  // if 5 long, make 1 slice
  if (boardAndHand.length === 5) {
    firstFive = [boardAndHand.slice(0,5)];
  }
  // if 7 long, check 3 slices
  if (boardAndHand.length === 7) {
    if (`${thirdFive}` in straightHash) { return straightHash[`${thirdFive}`]};
    if (`${secondFive}` in straightHash) { return straightHash[`${secondFive}`]};
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};
  }
  // if 6 long, check 2 slices

  if (boardAndHand.length === 6) {
    if (`${secondFive}` in straightHash) { return straistraightHash[`${secondFive}`]};
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};

  
  }
  // if 5 long, check 2 slices

  if (boardAndHand.length === 5) {
   if (`${firstFive}` in straightHash) { return straightHash[`${firstFive}`]};

  
}
return false
}


console.log(`=-=-=-=-passStraightCheck-=-=-=-`);
passStraightCheck(reducedBoardAndHand);

console.log(passStraightCheck(reducedBoardAndHand));






// const arr = ['a', 'b', 'c', 'd', 'e'];
// const iterator = arr.values();

// for (const letter of iterator) {
//   console.log(letter);
// } //"a" "b" "c" "d" "e"
// for (const letter of iterator) {
//   console.log(letter);
// } // undefined


// console.log(iterator);        // Array Iterator {  }
// iterator.next().value;        // "a"
// arr[1] = 'n';
// iterator.next().value;        // "n"


// // let testArr1 = ['2', '3', '4', '5', '6'];
// let iteration = testArr1.values();

// console.log(iteration);

// for ( let x of iteration) {
  
// }







console.log('^^^^^');




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


// function pass5HighStraightCheck(boardAndHand) {
//   if (
//     boardAndHand[0] === '2' &&
//     boardAndHand[1] === '3' &&
//     boardAndHand[2] === '4' &&
//     boardAndHand[3] === '5' &&
//     boardAndHand[boardAndHand.length-1] === '14'
//     ||
//     boardAndHand[1] === '2' &&
//     boardAndHand[2] === '3' &&
//     boardAndHand[3] === '4' &&
//     boardAndHand[4] === '5' &&
//     boardAndHand[boardAndHand.length-1] === '14'
//     ||
//     boardAndHand[2] === '2' &&
//     boardAndHand[3] === '3' &&
//     boardAndHand[4] === '4' &&
//     boardAndHand[5] === '5' &&
//     boardAndHand[boardAndHand.length-1] === '14'
//   ) {
//     return 5;
//   }
//   return false;
// }

// console.log(pass5HighStraightCheck(testArr7));
// console.log(pass5HighStraightCheck(testArr7));
// // console.log(pass5HighStraightCheck(lowArr3));


// console.log(pass5HighStraightCheck(boardAndHand));
// console.log(`=-=-=-=-pass5HighStraightCheck-=-=-=-`);

// // needs firstFive, secondFive, and thirdFive passed thru
// function passAceHighStraightCheck(boardAndHand) {
//   if (
//     boardAndHand[0] === '2' &&
//     boardAndHand[1] === '3' &&
//     boardAndHand[2] === '4' &&
//     boardAndHand[3] === '5' &&
//     boardAndHand[4] === '14'
//   ) {
//     return 14;
//   }
//   return false;
// }
// console.log(`=-=-=-=-passAceHighStraightCheck-=-=-=-`);

// console.log(passAceHighStraightCheck(boardAndHand));

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