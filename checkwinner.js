

console.log('check winner');





let testArr1 = ['2', '6'];
let testArr2 = ['2', '6',];
let testArr8 = ['2', '2', '2', '3', '4', '5', '8'];
let testArr9 = ['3', '4', '5', '6', '7', '8', '9'];
let testArr10 = ['4', '5', '6', '7', '8', '9', '10'];
let testArr11 = ['14', '2', '3', '4', '5', '9', '10'];


let practiceHand7 = {
  card1: { rank: '11', suit: 'H' },
  card2: { rank: '9', suit: 'D' },
  card3: { rank: '4', suit: 'D' },
  card4: { rank: '6', suit: 'D' },
  card5: { rank: '8', suit: 'D' },
  card6: { rank: '7', suit: 'D' },
  card7: { rank: '5', suit: 'D' },
};
let practiceHand9 = {
  card1: { rank: '11', suit: 'H' },
  card2: { rank: '12', suit: 'H' },
  card3: { rank: '4', suit: 'H' },
  card4: { rank: '4', suit: 'H' },
  card5: { rank: '8', suit: 'H' },
  card6: { rank: '5', suit: 'H' },
  card7: { rank: '5', suit: 'H' },
};
let practiceHand8 = {
  card1: { rank: '10', suit: 'l' },
  card2: { rank: '11', suit: 'l' },
  card3: { rank: '4', suit: 'l' },
  card4: { rank: '4', suit: 'l' },
  card5: { rank: '8', suit: 'l' },
  card6: { rank: '5', suit: 'l' },
  card7: { rank: '5', suit: 'S' },
};



// sort array in ascending order
function sortArray(array){
return array.sort(function (a, b) {  return a - b;  });
}

// reduces hand down to an object with the card ranks and how many there are of each
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



function checkHighCard(straightPrep){
  return straightPrep.reverse()
}

console.log(checkHighCard(['3', '5', '7', '9', '12']));

// takes in arr of unique numbers, iterate thru top 5 cards and checks for highest card
// returns player1 or player2
function passHighCard(straightPrep1, straightPrep2){
let firstNum1 = straightPrep1[0]
let secondNum1 = straightPrep1[1]
let thirdNum1 = straightPrep1[2]
let fourthNum1 = straightPrep1[3]
let fifthNum1 = straightPrep1[4]
let sixthNum1 = straightPrep1[5]
let seventhNum1 = straightPrep1[6]

console.log(firstNum1, secondNum1, thirdNum1);

  //1st biggest
  if(parseInt(straightPrep1[straightPrep1.length-1]) > parseInt(straightPrep2[straightPrep2.length-1])){return 'player1'}
  if(parseInt(straightPrep1[straightPrep1.length-1]) < parseInt(straightPrep2[straightPrep2.length-1])){return 'player2'}
  if(parseInt(straightPrep1[straightPrep1.length-1]) === parseInt(straightPrep2[straightPrep2.length-1])){
    //2nd biggest
    if(parseInt(straightPrep1[straightPrep1.length-2]) > parseInt(straightPrep2[straightPrep2.length-2])){return 'player1'}
    if(parseInt(straightPrep1[straightPrep1.length-2]) < parseInt(straightPrep2[straightPrep2.length-2])){return 'player2'}
    if(parseInt(straightPrep1[straightPrep1.length-2]) === parseInt(straightPrep2[straightPrep2.length-2])){
      //3rd biggest
      if(parseInt(straightPrep1[straightPrep1.length-3]) > parseInt(straightPrep2[straightPrep2.length-3])){return 'player1'}
      if(parseInt(straightPrep1[straightPrep1.length-3]) < parseInt(straightPrep2[straightPrep2.length-3])){return 'player2'}
      if(parseInt(straightPrep1[straightPrep1.length-3]) === parseInt(straightPrep2[straightPrep2.length-3])){
        //4th biggest
        if(parseInt(straightPrep1[straightPrep1.length-4]) > parseInt(straightPrep2[straightPrep2.length-4])){return 'player1'}
        if(parseInt(straightPrep1[straightPrep1.length-4]) < parseInt(straightPrep2[straightPrep2.length-4])){return 'player2'}
        if(parseInt(straightPrep1[straightPrep1.length-4]) === parseInt(straightPrep2[straightPrep2.length-4])){
          //5th biggest
          if(parseInt(straightPrep1[straightPrep1.length-5]) > parseInt(straightPrep2[straightPrep2.length-5])){return 'player1'}
          if(parseInt(straightPrep1[straightPrep1.length-5]) < parseInt(straightPrep2[straightPrep2.length-5])){return 'player2'}
          if(parseInt(straightPrep1[straightPrep1.length-5]) === parseInt(straightPrep2[straightPrep2.length-5])){
              return 'tie'
          }
        }
      }
    }
  }
}

let handOne = ['14', '13', '11', '5', '3', '2'].reverse()
let handTwo = ['14', '13', '12', '4', '3', '2'].reverse()


console.log(passHighCard(handOne, handTwo));



// (6) ['14', '13', '11', '5', '3', '2']
// checkwinner.js:432 -------
// checkwinner.js:434 hand2
// checkwinner.js:435 pair check = 14
// checkwinner.js:436 trip check = 
// checkwinner.js:437 quad check = 
// checkwinner.js:438 straight check = false
// checkwinner.js:439 flush check = false
// checkwinner.js:440 (6) ['14', '13', '12', '4', '3', '2']


// takes in sorted arr of unique numbers, separates them into 5 card chunks, checks for straight
// returns number of highest card in straight, or false
function straightCheck(straightPrep) {
  // used in straightPrep
  let firstFive = [];
  let secondFive = [];
  let thirdFive = [];


  // if 7 long, make 3 slices
  if (straightPrep.length === 7) {
    firstFive = [straightPrep.slice(0, 5)];
    secondFive = [straightPrep.slice(1, 6)];
    thirdFive = [straightPrep.slice(2, 7)];
  }
  // if 6 long, make 2 slices
  if (straightPrep.length === 6) {
    firstFive = [straightPrep.slice(0, 5)];
    secondFive = [straightPrep.slice(1, 6)];
  }
  // if 5 long, make 1 slice
  if (straightPrep.length === 5) {
    firstFive = [straightPrep.slice(0, 5)];
  }
  // if 7 long, check 3 slices
  if (straightPrep.length === 7) {
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

  if (straightPrep.length === 6) {
    if (`${secondFive}` in straightHash) {
      return straightHash[`${secondFive}`];
    }
    if (`${firstFive}` in straightHash) {
      return straightHash[`${firstFive}`];
    }
  }
  // if 5 long, check 2 slices

  if (straightPrep.length === 5) {
    if (`${firstFive}` in straightHash) {
      return straightHash[`${firstFive}`];
    }
  }
  return false;
}

// takes in sorted arr of unique numbers, checks if it contains 14,2,3,4,5
// returns 5 if found, or false
function fiveHighStraightCheck(straightPrep) {
  let lowFive = ['2', '3', '4', '5', '14'];

  let count = 0;
  for (let i = 0; i < straightPrep.length; i++)
    if (lowFive.includes(straightPrep[i])) {
      let lowfive = lowFive.filter((num) => straightPrep[i]);
      count++;
    }
  if (count === 5) {
    return 5;
  }
  return false;
}

// takes in both straightCheck arrays
// check if either contains a straight, then compares to see which is higher
// returns player1, player2, or false
function passStraightCheck(straightPrep1, straightPrep2){
  // sets variables to straight high card, or false
  let straight1 = straightCheck(straightPrep1) || fiveHighStraightCheck(straightPrep1)
  let straight2 = straightCheck(straightPrep2) || fiveHighStraightCheck(straightPrep2)
  // if neither has straight, return false
  if(straight1 === false && straight2 === false){return false}
  // check who has bigger straight
  if(straight1 > straight2){return 'player1'}
  if(straight1 < straight2){return 'player2'}
  // if same straight, return tie
  if(straight1 === straight2){return 'tie'}
  // else return false
return false
}

// takes in entire player hand object
// sorts cards by suit
// if 5 of same suit, 
// returns ascending array of that suit
function flushCheck(handPlayerNumber){
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

  if(hearts.length > 4){return sortArray(hearts)}
  if(diamonds.length > 4){return sortArray(diamonds)}
  if(spades.length > 4){return sortArray(spades)}
  if(clubs.length > 4){return sortArray(clubs)}
return false
}

// takes in two entire hand objects
// returns player1 or player2 or false
function passFlushCheck(handPlayerNumber1, handPlayerNumber2){
  // check if neither hands return an array
  if(flushCheck(handPlayerNumber1) === false && flushCheck(handPlayerNumber2) === false){return false}
  // check if only 1 hand returns an array
  if(flushCheck(handPlayerNumber1).length > 0 && flushCheck(handPlayerNumber2) === false){return 'player1'}
  if(flushCheck(handPlayerNumber2).length > 0 && flushCheck(handPlayerNumber1) === false){return 'player2'}
  // check if both hands return an array, check for highcard within arrays
  if(flushCheck(handPlayerNumber1).length > 0 && flushCheck(handPlayerNumber2).length > 0){
    return passHighCard(flushCheck(handPlayerNumber1),flushCheck(handPlayerNumber2))
  }
  return false
}

// takes in 2 sorted arrays - assume array contains cards that qualify as pairs
// returns winner as string
function passPairCheck (pairCheck1, pairCheck2) {
  if(pairCheck1.length === 0 && pairCheck2.length === 0){return false}
  if(parseInt(Math.max(...pairCheck1)) > parseInt(Math.max(...pairCheck2))){return 'player1'}
  if(parseInt(Math.max(...pairCheck1)) < parseInt(Math.max(...pairCheck2))){return 'player2'}
  if(parseInt(Math.max(...pairCheck1)) === parseInt(Math.max(...pairCheck2))){return 'tie'}
}

// takes in 2 arrays - arrays are cards that qualify as pairs, checks if theres 2 pairs of pairs
// returns winner as string
function passTwoPairCheck (pairCheck1, pairCheck2) {
  if(pairCheck1.length === 0 && pairCheck2.length === 0){return false}
  // if player1 has 2 pair && player2 doesnt, player1 wins
  if(pairCheck1.length > 1 &! pairCheck2.length > 1){return "player1"}
  // if player2 has 2 pair && player1 doesnt, player1 wins
  if(pairCheck2.length > 1 &! pairCheck1.length > 1){return "player2"}
  // if both have 2 pair check highest paired card
  if(pairCheck2.length > 1 && pairCheck1.length > 1){
    if(parseInt(Math.max(...pairCheck1)) > parseInt(Math.max(...pairCheck2))){return "player1"}
    if(parseInt(Math.max(...pairCheck1)) < parseInt(Math.max(...pairCheck2))){return "player2"}
    if(parseInt(Math.max(...pairCheck1)) === parseInt(Math.max(...pairCheck2))){
  // if high pair matches, check second highest pair, only top 2 pair counts so go to high card if tie 
      if(pairCheck1[pairCheck1.length-2] > pairCheck2[pairCheck2.length-2]){return "player1"}
      if(pairCheck1[pairCheck1.length-2] < pairCheck2[pairCheck2.length-2]){return "player2"}
      if(pairCheck1[pairCheck1.length-2] === pairCheck2[pairCheck2.length-2]){return "tie"}
    }
  }
  return false
}

// takes in 2 arrays - arrays are cards that qualify as trips
// returns winner as string
function passTripCheck (tripCheck1, tripCheck2) {
  if(tripCheck1.length === 0 && tripCheck2.length === 0){return false}
  if(parseInt(Math.max(...tripCheck1)) > parseInt(Math.max(...tripCheck2))){return "player1"}
  if(parseInt(Math.max(...tripCheck1)) < parseInt(Math.max(...tripCheck2))){return "player2"}
}

// takes in 2 arrays - arrays are cards that qualify as quads
// returns winner as string
function passQuadCheck (quadCheck1, quadCheck2) {
  if(quadCheck1.length === 0 && quadCheck2.length === 0){return false}
  if(parseInt(Math.max(...quadCheck1)) > parseInt(Math.max(...quadCheck2))){return "player1"}
  if(parseInt(Math.max(...quadCheck1)) < parseInt(Math.max(...quadCheck2))){return "player2"}
  if(parseInt(Math.max(...quadCheck1)) === parseInt(Math.max(...quadCheck2))){return 'tie'}
}

// takes in pairCheck and tripCheck
// returns number indicating fullhouse strength, or false
function fullHouseCheck(pairCheck, tripCheck){
  // if no pairs and dont have 2 trips
  if(pairCheck.length === 0 && tripCheck.length < 2){return false}
  // if no trips
  if(tripCheck.length === 0){return false}
  // if 2 sets of trips
  if(tripCheck.length >= 2){return parseInt(Math.max(...tripCheck))}
  // if has trips and pairs
  if(tripCheck.length >= 1 && pairCheck.length >= 1){return parseInt(Math.max(...tripCheck))}
}

// takes in fullHouseCheck(pairCheck, tripCheck)
function passFullHouseCheck(pairCheck1, tripCheck1, pairCheck2, tripCheck2){
  let player1Score = fullHouseCheck(pairCheck1, tripCheck1) 
  let player2Score = fullHouseCheck(pairCheck2, tripCheck2) 
// check if neither player has fullhouse, return false
  if(player1Score === false && player2Score === false){return false}
  // if one or other has full house return winner
  if(player1Score !== false && player2Score === false){return 'player1'}
  if(player1Score === false && player2Score !== false){return 'player2'}
  // if both have full house, comapre the 2 and return winner
  if(player1Score !== false && player2Score !== false){
    if(player1Score > player2Score){return 'player1'}
    if(player1Score > player2Score){return 'player1'}
    if(player1Score === player2Score){return 'tie'}
  }
  //default error message
return 'full house issue'
}

// take in sorted flushCheck array
// take in highest num from straightCheck array
function royaleFlushCheck(flushCheck, straightCheck){
  let flushNum = parseInt(flushCheck[flushCheck.length-1])
  let straightNum = parseInt(straightCheck)

  if(flushNum === 14 && straightNum === 14){return true}

return false
}

function passRoyaleFlushCheck(flushCheck1,straightCheck1,flushCheck2,straightCheck2){
  let hand1 = parseInt(royaleFlushCheck(flushCheck1,straightCheck1))
  let hand2 = parseInt(royaleFlushCheck(flushCheck2,straightCheck2))

  if(hand1 === false && hand2 === false){return false}
  if(hand1 === true && hand2 === false){return 'player1'}
  if(hand1 === false && hand2 === true){return 'player2'}

return 'royale flush issue'
}

// take in sorted flushCheck array
// take in highest num from straightCheck array
function straightFlushCheck(flushCheck, straightCheck){

  let flushNum = parseInt(flushCheck[flushCheck.length-1])
  let straightNum = parseInt(straightCheck)

  if (flushNum === straightNum){return true}
  return false
}





function handStrength (handPlayerNumber1, handPlayerNumber2) {

  // player1 temp info
  let cards1 = multipleCheck(handPlayerNumber1)
  let pairCheck1 = [];
  let tripCheck1 = [];
  let quadCheck1 = [];
  let straightPrep1 = [];

  // player2 temp info
  let cards2 = multipleCheck(handPlayerNumber2)
  let pairCheck2 = [];
  let tripCheck2 = [];
  let quadCheck2 = [];
  let straightPrep2 = [];
  
  
  
  // check for duplicate cards and push uniques into straightCheck1
  for(const each in cards1){
    straightPrep1.push(each);
    if(cards1[each] === 2){pairCheck1.push(each)}
    if(cards1[each] === 3){tripCheck1.push(each)}
    if(cards1[each] === 4){quadCheck1.push(each)}
  }
    //check for duplicate cards and push uniques into straightCheck2
  for(const each in cards2){
    straightPrep2.push(each);
    if(cards2[each] === 2){pairCheck2.push(each)}
    if(cards2[each] === 3){tripCheck2.push(each)}
    if(cards2[each] === 4){quadCheck2.push(each)}
  }
  
  // player1 temp info
  let flushCheck1 = flushCheck(handPlayerNumber1);
  let straightCheck1 = (straightCheck(straightPrep1))


  // player2 temp info
  let flushCheck2 = flushCheck(handPlayerNumber2);
  let straightCheck2 = straightCheck(straightPrep2)


  console.log(straightPrep1);

  let player1Cards = checkHighCard(straightPrep1)
  let player2Cards = checkHighCard(straightPrep2)



console.log('-------');
  // TESTS

  console.log('hand1');
  console.log(`pair check = ${pairCheck1}`);
  console.log(`trip check = ${tripCheck1}`);
  console.log(`quad check = ${quadCheck1}`);
  console.log(`straight check = ${straightCheck1}`);
  console.log(`flush check = ${flushCheck1}`);
  console.log(player1Cards);



console.log('-------');

  console.log('hand2');
  console.log(`pair check = ${pairCheck2}`);
  console.log(`trip check = ${tripCheck2}`);
  console.log(`quad check = ${quadCheck2}`);
  console.log(`straight check = ${straightCheck2}`);
  console.log(`flush check = ${flushCheck2}`);
  console.log(player2Cards);


  console.log('-------');






  // known issues
  // two pair not working correctly
  // high card not working correctly








  // COMPARE HANDS
  
  // Royal flush
  let royaleFlushCheck1 = royaleFlushCheck(flushCheck1,straightCheck1)
  let royaleFlushCheck2 = royaleFlushCheck(flushCheck2,straightCheck2)
  if(royaleFlushCheck1 === true && royaleFlushCheck2 === true){return 'Royal flush tie'}
  if(royaleFlushCheck1 === true){return 'Royal flush player1'}
  if(royaleFlushCheck2 === true){return 'Royal flush player2'}

  // Straight flush 
  let straightFlushCheck1 = straightFlushCheck(flushCheck1, straightCheck1)
  let straightFlushCheck2 = straightFlushCheck(flushCheck2, straightCheck2)
  if(straightFlushCheck1 === true && straightFlushCheck2 === true){return 'Straight flush tie'}
  if(straightFlushCheck1 === true){return 'Straight flush player1'}
  if(straightFlushCheck2 === true){return 'Straight flush player2'}

  // four of a kind 
  if (passQuadCheck (quadCheck1, quadCheck2) === 'player1'){return 'four of a kind player1'}
  if (passQuadCheck (quadCheck1, quadCheck2) === 'player2'){return 'four of a kind player2'}
  if (passQuadCheck (quadCheck1, quadCheck2) === 'tie'){
    return passHighCard(straightPrep1, straightPrep2)
  }

  // Full House 
  if(passFullHouseCheck(pairCheck1, tripCheck1, pairCheck2, tripCheck2) === 'player1'){return 'Full House player1'}
  if(passFullHouseCheck(pairCheck1, tripCheck1, pairCheck2, tripCheck2) === 'player2'){return 'Full House player2'}

  // Flush 
  if(passFlushCheck(handPlayerNumber1, handPlayerNumber2) === 'player1'){return 'Flush player1'}
  if(passFlushCheck(handPlayerNumber1, handPlayerNumber2) === 'player2'){return 'Flush player2'}

  // Straight 
  if(passStraightCheck(straightPrep1, straightPrep2) === 'player1'){return 'Straight player1'}
  if(passStraightCheck(straightPrep1, straightPrep2) === 'player2'){return 'Straight player2'}

  // Three of a kind 
  if(passTripCheck (tripCheck1, tripCheck2) === 'player1'){return 'Three of a kind player1'}
  if(passTripCheck (tripCheck1, tripCheck2) === 'player2'){return 'Three of a kind player2'}
  if (passTripCheck (quadCheck1, quadCheck2) === 'tie'){
    return passHighCard(straightPrep1, straightPrep2)
  }

  // Two pairs 
  if(passTwoPairCheck (pairCheck1, pairCheck2) === 'player1'){return 'Two pairs player1'}
  if(passTwoPairCheck (pairCheck1, pairCheck2) === 'player2'){return 'Two pairs player2'}
  if (passTwoPairCheck (quadCheck1, quadCheck2) === 'tie'){
    return passHighCard(straightPrep1, straightPrep2)
  }

  // pair 
  if(passPairCheck (pairCheck1, pairCheck2) === 'player1'){return 'pair player1'}
  if(passPairCheck (pairCheck1, pairCheck2) === 'player2'){return 'pair player2'}
  if (passPairCheck (quadCheck1, quadCheck2) === 'tie'){
    return passHighCard(straightPrep1, straightPrep2)
  }
  
  // high card 
  if(passHighCard(straightPrep1, straightPrep2) === 'player1'){return 'high card player1'}
  if(passHighCard(straightPrep1, straightPrep2) === 'player2'){return 'high card player2'}
  if(passHighCard(straightPrep1, straightPrep2) === 'tie'){return 'high card tie'}
  



  
  // straight check



  }




// hand score system

// Royal flush
// Straight flush
// Four of a kind
// Full house
// Flush
// Straight
// Three of a kind
// Two pairs
// pair 
// high card




 
console.log('hand1');
for (const i in handPlayer1) {console.log(handPlayer1[i]);}








console.log('hand2');
for (const i in handPlayer2) {console.log(handPlayer2[i]);}


  console.log(handStrength(handPlayer1, handPlayer2));
