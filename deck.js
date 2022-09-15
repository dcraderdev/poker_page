
export default class Deck {

  constructor(cards = createDeck()) {
    this.cards = cards
  }

  shuffleDeck(deck) {
    for (let i = 0; i < 52; i++) {
      let tempCard = deck[i];
      let randomIndex = Math.floor(Math.random() * 52);
      deck[i] = deck[randomIndex];
      deck[randomIndex] = tempCard;
    }
  }

  createHashDeck(deck) {
    for (let i = 1; i <= 12; i++) {
      hashDeck[`card${i}`] = {};
      hashDeck[`card${i}`]['rank'] = rankOfCardInDeck(deck, i);
      hashDeck[`card${i}`]['suit'] = suitOfCardInDeck(deck, i);
    }
  }

}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}


let hashDeck = {}
const suits = ['S', 'C', 'H', 'D'];
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










