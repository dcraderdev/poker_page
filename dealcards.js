console.log('deal cards');
//
//  Creates deck, shuffles, and deals cards to 2 players


// function fn1() {
//   document.getElementById("result").innerHTML += "fn1 gets called";
// }



let straightArr = [['14', '2', '3', '4', '5']];
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
console.log(`=-=-=-=-createStraights-=-=-==-`);
createStraights();


let straightHash = {};
function createStraightHash(straightArr) {
  for (let i = 0; i < straightArr.length; i++) {
    // straightHash[`Straight${i+5}`] = {};
    // straightHash[`${i+5}`] = straightArr[i];
    straightHash[straightArr[i]] = i + 5;
    // straightHash[`highcard${i+5}`]['highcard'] = straightArr[i];
  }
  return straightHash;
}

console.log(`-=-=-=-=-createStraightHash-=-=-=-==-`);
createStraightHash(straightArr);



let handPlayer1 = {};
let handPlayer2 = {};
let hashDeck = {}

const rankings = [
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

const suits = ['S', 'C', 'H', 'D'];

function createDeck() {
  // iterates through rankings and suits pairing them up in order and placing in global array
  const deck = [];
  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankingCounter = 0; rankingCounter < 13; rankingCounter++) {
      deck.push(rankings[rankingCounter] + suits[suitCounter]);
    }
  }
  return deck;
}

//create deck
let deck = createDeck();


//deck shuffler
function shuffleDeck(deck) {
  // randomizedDeck = [];
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

// SHUFFLE ZE DECK!
shuffleDeck(deck)
shuffleDeck(deck)
shuffleDeck(deck)
shuffleDeck(deck)
shuffleDeck(deck)
shuffleDeck(deck)
shuffleDeck(deck)


// returns rank of card at given index
function rankOfCardInDeck(deck, position) {
  let card = deck[position - 1];
  if (card.length > 2) {
    return card.slice(0, 2);
  } else {
    return card.slice(0, 1);
  }
}


// check suit of card at given index
function suitOfCardInDeck(deck, position) {
  return deck[position - 1].slice(-1);
}






// pulls info from cardIndeck and stores info in  
// enough cards for 2 people
function createHashDeck(deck) {
  for (let i = 1; i <= 12; i++) {
    hashDeck[`card${i}`] = {};
    hashDeck[`card${i}`]['rank'] = rankOfCardInDeck(deck, i);
    hashDeck[`card${i}`]['suit'] = suitOfCardInDeck(deck, i);
  }
}

 
createHashDeck(deck);
// console.log(hashDeck);


// cards in form of a Hash
// assigns cards for two player hand
function cardsForTwoPLayersHash(hashDeck) {
  // player one cards - 1st and 3rd card + flop, turn, river
  handPlayer1.card1 = hashDeck.card1;
  handPlayer1.card2 = hashDeck.card3;
  handPlayer1.card3 = hashDeck.card6;
  handPlayer1.card4 = hashDeck.card7;
  handPlayer1.card5 = hashDeck.card8;
  handPlayer1.card6 = hashDeck.card10;
  handPlayer1.card7 = hashDeck.card12;

  // player two cards - 2nd and 4th card + flop, turn, river
  handPlayer2.card1 = hashDeck.card2;
  handPlayer2.card2 = hashDeck.card4;
  handPlayer2.card3 = hashDeck.card6;
  handPlayer2.card4 = hashDeck.card7;
  handPlayer2.card5 = hashDeck.card8;
  handPlayer2.card6 = hashDeck.card10;
  handPlayer2.card7 = hashDeck.card12;
}

cardsForTwoPLayersHash(hashDeck);

// console.log(handPlayer1);
// console.log(handPlayer2);
