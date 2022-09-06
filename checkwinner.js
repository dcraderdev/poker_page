

console.log('check winner');

console.log(straightHash);

function multipleCheck (handPlayerNumber) {
  let cardCount = {}

    // iterate over players hand
  for(const obj in handPlayerNumber){
    // get rank of current card
    let tempCardRank = handPlayerNumber[obj]['rank']
    // if cardCount has that rank already, count++
    if(cardCount[tempCardRank]){cardCount[tempCardRank] += 1}
    // else set count to 1
    else {cardCount[tempCardRank] = 1}
    }
    return cardCount
  }
// takes in arr
function passStraightCheck(straightCheck) {
  // used in straightCheck
  let firstFive = [];
  let secondFive = [];
  let thirdFive = [];

  // if 7 long, make 3 slices
  if (straightCheck.length === 7) {
    firstFive = [straightCheck.slice(0, 5)];
    secondFive = [straightCheck.slice(1, 6)];
    thirdFive = [straightCheck.slice(2, 7)];
  }
  // if 6 long, make 2 slices
  if (straightCheck.length === 6) {
    firstFive = [straightCheck.slice(0, 5)];
    secondFive = [straightCheck.slice(1, 6)];
  }
  // if 5 long, make 1 slice
  if (straightCheck.length === 5) {
    firstFive = [straightCheck.slice(0, 5)];
  }
  // if 7 long, check 3 slices
  if (straightCheck.length === 7) {
    if (`${thirdFive}` in straightHash) {
      return straightHash[`${thirdFive}`];
    }
    if (`${secondFive}` in straightHash) {
      return straightHash[`${secondFive}`];
    }
    if (`${firstFive}` in straightHash) {
      return straightHash[`${firstFive}`];
    }
  }
  // if 6 long, check 2 slices

  if (straightCheck.length === 6) {
    if (`${secondFive}` in straightHash) {
      return straightHash[`${secondFive}`];
    }
    if (`${firstFive}` in straightHash) {
      return straightHash[`${firstFive}`];
    }
  }
  // if 5 long, check 2 slices

  if (straightCheck.length === 5) {
    if (`${firstFive}` in straightHash) {
      return straightHash[`${firstFive}`];
    }
  }
  return false;
}

function pass5HighStraightCheck(straightCheck) {
  let lowFive = ['2', '3', '4', '5', '14'];

  let count = 0;
  for (let i = 0; i < straightCheck.length; i++)
    if (lowFive.includes(straightCheck[i])) {
      let lowfive = lowFive.filter((num) => straightCheck[i]);
      count++;
    }
  if (count === 5) {
    return 5;
  }
  return false;
}

function passFlushCheck(handPlayerNumber){
let hearts = [];
let diamonds = [];
let spades = [];
let clubs = [];

for(const card in handPlayerNumber) {
  if (handPlayerNumber[card].suit === 'H'){hearts.push(handPlayerNumber[card].rank)}
  if (handPlayerNumber[card].suit === 'D'){diamonds.push(handPlayerNumber[card].rank)}
  if (handPlayerNumber[card].suit === 'S'){spades.push(handPlayerNumber[card].rank)}
  if (handPlayerNumber[card].suit === 'C'){clubs.push(handPlayerNumber[card].rank)}
}

  if(hearts.length > 4){return Math.max(...hearts)}
  if(diamonds.length > 4){return Math.max(...diamonds)}
  if(spades.length > 4){return Math.max(...spades)}
  if(clubs.length > 4){return Math.max(...clubs)}

}

function passHighCard(straightCheck){
  return Math.max(...straightCheck)
}



function handStrength (handPlayerNumber) {
  let cards = multipleCheck(handPlayerNumber)
  let straightCheck = [];
  let pairCheck = [];
  let tripCheck = [];
  let quadCheck = [];
  let flushCheck = false;
  let straightChecker = 0;

  //check for duplicate cards and push uniques into straightCheck
  for(const each in cards){
    straightCheck.push(each);
    if(cards[each] === 2){pairCheck.push(each)}
    if(cards[each] === 3){tripCheck.push(each)}
    if(cards[each] === 4){quadCheck.push(each)}
  }

  //check for flush
  if(passFlushCheck(handPlayerNumber) > 1){flushCheck = true}
  //check for straights
  if(pass5HighStraightCheck(straightCheck) > 1){straightChecker = pass5HighStraightCheck(straightCheck) }
  if(passStraightCheck(straightCheck) > 1){straightChecker = passStraightCheck(straightCheck) }
  //if both true check if straight is 14      - return royale flush
  if(flushCheck === true && straightChecker === 14){return 'royale flush'}
  //if both true check if straight is not 14  - return straight flush
  if(flushCheck === true && straightChecker < 14){return 'staright flush'}
  //check if four of a kind
  if(quadCheck.length>0){return quadCheck[0]}
  // (fullhouse)check if trips and trips 
  if(tripCheck.length>1){return 'full house'}
  // (fullhouse)or trips and pair
  if(tripCheck.length===1 && pairCheck.length>=1){return 'full house'}
  // Flush. ...
  if(flushCheck === true && straightChecker < 1){return 'flush'}
  // Straight
  if(straightChecker > 0){return 'straight'}
  // trips
  if(tripCheck.length > 0){return 'trips'}
  // two pair
  if(pairCheck.length >= 2){return 'two pair'}
  // pair
  if(pairCheck.length === 1){return 'pair'}

  return Math.max(...straightCheck)
  }


// hand score system


// Royal flush
// 126 + 2-14
// Straight flush
// 112 + 2-14
// Four of a kind
// 98 + 2-14
// Full house
// 84 + 2-14
// Flush
// 70 + 2-14
// Straight
// 56 + 2-14
// Three of a kind
// 42 + 2-14
// Two pairs
// 28 + 2-14
// pair
// 14 + 2-14
// high card
// 2-14




 

  console.log(handStrength(handPlayer1));
  console.log(handStrength(handPlayer2));
