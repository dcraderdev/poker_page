'use strict'

// // Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array.

// function sumArray(arr) {
//   let sum = 0;
//   let sum2 = [];
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     sum2.push(arr[i]);
//   }
//   return sum
// }






// console.log(sumArray([4, 3, -1, 10])); // 16
// console.log(sumArray([6, 7, 2])); // 15
// console.log(sumArray([])); // 0



// function rotateRight(array, num) {
//   let newArray = array.slice()
//   console.log(newArray);
//   if (num > 0) {
//     // if num 0, we dont need to rotate
//     for(let j = 1; j <= num; j++){
//       // add last element to front
//       newArray.unshift(newArray[newArray.length-1])
//       // remove last element
//       newArray.pop(newArray[newArray.length-1]);

// }
// }
// return newArray
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// // console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]



// function twoDimensionalSum(arr) {
//   let flatArr = arr.flat(Infinity)
//   return flatArr.reduce((a,b)=>a + b, 0)
// }



// let arr1 = [
//   [1, 3],
//   [-4, 7, 10],
//   [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//   [],
//   [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6



// function avgVal(arr) {
//   if (arr.length === 0) {return null};
//   let sum = 0;
//   let length = 0;
  
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i] 
//     length++ 
//   }
  
//   return sum/length
// }


// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null



// function myIndexOf(arr, target) {
// for(let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {return i}

// }
//   return -1
// }







// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1





// function tripler(nums) {

//   return nums.map(x=> x * 3)
// }






// // console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// // console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]




// function longWords(words) {
//   let long = [];
// for(let i =0; i < words.length; i++){
//   if(words[i].length > 5) {
//     long.push(words[i])
//   }
// }
// return long
// }


// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]



// function removeEWords(sentence) {
//   let vowels = ['e'];
//   eFree = []
//   words = sentence.split(' ')
//   console.log(words);

//   //iterate over array of words
//   for(let i = 0; i < words.length; i++){  
//     let word = words[i]
//     //iterate over each word
//     for(let j = 0; j < word.length; j++)

//     // if word doesnt contains vowel push to new arr
//     if (!vowels.includes(word[j])){
//       eFree.push(word);
//     }  
//   }
//   return eFree
//   }






// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// // console.log(removeEWords('Enter the building')); // 'building'





// function removeEWords(sentence) {
//   let vowels = 'e';
//   eFree = []
//   words = sentence.split(' ')
//   console.log(words);


//   for(let i = 0; i < words.length; i++){
//     console.log(words[i]);
//     for(let j = 0; j < words[i].length; j++){
//      console.log(words[i][j]); 
//     //  if (!vowels.includes(words[i][j])){
//      if (words[i][j] !== 'e'){

      
//      }
//     }
//   }

//   return eFree
// }





// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// // console.log(removeEWords('Enter the building')); // 'building'




// function removeEWords(sentence) {
//   let vowels = 'e';
//   let vowels2 = ['e', 'a']
//   let eFree = []
//   let words = sentence.split(' ')
//   console.log(words);

//   for(let i = 0; i < words.length - 1; i++) {
//     console.log(words[i]);
//     if (!words[i].includes(vowels2)) {
      
//       eFree.push(words[i])
//     }

      
//     }return eFree.join(' ')
//   }
  






// console.log(removeEWords('What time i si is  reeee is it everyone?')); // 'What is it'
// // console.log(removeEWords('Enter the building')); // 'building'




function removeEWords(sentence) {
  let vowels = 'e';
  let vowels2 = ['e','a'];
  let vowels3 = 'ae';
  let eFree = [];
  let words = sentence.split(' ')
  console.log(words);

  for(let i = 0; i < words.length; i++) {
    // if(!words[i].includes(vowels3)){
    if(!vowels3.includes(words[i])){
        console.log(words[i]);
      eFree.push(words[i])
    }
    }
      return eFree.join(' ')
    }
  




    function countVowels(word) {
      let vowels2 = 'aeiou'
      let vowels = ['a','e','i','o','u'];
      let count = 0;
      let split = word.split('');
     split.map(function(x) {
        if (!vowels2.includes(x)){
          count++
        }
     })
      return count
    };
    console.log(countVowels("bootcamp")); // => 3
    console.log(countVowels("apple")); // => 2
    console.log(countVowels("pizza")); // => 2






console.log(removeEWords('What time is it at everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'
