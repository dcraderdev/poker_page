// Highest Average
// This problem is worth 7 points. 
// You may receive partial credit.
// First, create a function called getAverage(nums) which takes a single array
// of numbers and returns the average.


// Then, write a function highestAverage(numsList) that takes in a
// 2-dimensional array of numbers and returns the index of the sub-array with the
// highest average value. Hint: You may use the getAverage function as a helper
// function in the highestAverage function to solve the problem.




function getAverage(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i]
  }
  return sum / nums.length
}

function highestAverage(numsList) {
  let index = 0;
  let max = 0;

  for(let i = 0; i < numsList.length; i++){
    if(getAverage(numsList[i]) > max)
      index = i;
      max = getAverage(numsList[i])
  }
  return index
}


// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

// let score = 0;

// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;

// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;

// console.log("You have scored " + score + "/7 points.");





console.log('-=-=-=-=-=-=-=-=-=-');



// Your friend is working on a function called evenNumbersBelow() which returns an array containing all even integers below than that number, ordered from lowest to highest. Zero is considered positive. Unfortunately, the code is not working correctly. Help them fix it!


function evenNumbersBelow(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
      if(i % 2 === 0 ){
        arr.push(i)
      }
  }
  return arr;
}

function evenNumbersBelow(num) {
  let arr = [];
  for(let i = num-1; i >= 0; i--){
    if(i % 2 === 0) {
      arr.unshift(i)
    }
  }
return arr;
}




console.log([0, 2, 4, 6] === [0, 2, 4, 6]);


// Expected return values
console.log(evenNumbersBelow(0)); // []
console.log(evenNumbersBelow(6)); // [0, 2, 4]
console.log(evenNumbersBelow(7)); // [0, 2, 4, 6]
console.log(evenNumbersBelow(8)); // [0, 2, 4, 6]

/* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
let score = 0;

if (evenNumbersBelow(0) === []) score++;
if (evenNumbersBelow(6) === [0, 2, 4]) score++;
if (evenNumbersBelow(7) === [0, 2, 4, 6]) score++;
if (evenNumbersBelow(8) ===  [0, 2, 4, 6]) score++;

console.log("You have scored " + score + "/4 points.");