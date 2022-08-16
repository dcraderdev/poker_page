// Poker Page!!! All things poker coding and algos

const a = 14;
const k = 13;
const q = 12;
const j = 11;

const c = 'clubs';
const d = 'diamond';
const h = 'heart';
const s = 'spade';



// test input for board and hand
const board = [[a,d],[q,d],[10,h]];
const hand = [[j,c],[k,s]]

//suits from board - diamond diamond heart
// console.log(board[0][1], board[1][1], board[2][1]);
// card ranking from board - 14, 12, 10
// console.log(board[0][0], board[1][0], board[2][0]);

// init as second card w/o suit
let cardSecond = [hand[1,1]]
let boardCards = [board[1,1],board[2,1],board[3,1],]




// board and hand listed above ^^
// current hand ranking functions 
function isPair(currentBoard, currentHand) {
  // init as first card w/o suit
  let cardOneRanking = [currentHand[0][0]];
  // init as second card w/o suit
  let cardTwoRanking = [currentHand[1][0]];
  let boardCardRanking = [currentBoard[0][0],currentBoard[1][0],currentBoard[2][0]];
  console.log(cardOneRanking, cardTwoRanking, boardCardRanking);
}; 

isPair(board, hand);
console.log('^^^here^^^');

function isTwoPair(board, hand) {};
function isThreeOfKind(board, hand) {};
function isStraight(board, hand) {};;
function isFullHouse(board, hand) {};
function isFourOfKind(board, hand) {};
function isStraightFlush(board, hand) {};
function isRoyalFlush(board, hand) {};





function outsWithoutSuits(board, hand) {}
  

console.log([[a,d],[q,d],[10,h]], [2,7]);