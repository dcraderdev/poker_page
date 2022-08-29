'use strict';

// // // Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array.

function sumArray(arr) {
  let sum = 0;
  let sum2 = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sum2.push(arr[i]);
  }
  return sum;
}

// // console.log(sumArray([4, 3, -1, 10])); // 16
// // console.log(sumArray([6, 7, 2])); // 15
// // console.log(sumArray([])); // 0

function rotateRight(array, num) {
  let newArray = array.slice();
  console.log(newArray);
  if (num > 0) {
    // if num 0, we dont need to rotate
    for (let j = 1; j <= num; j++) {
      // add last element to front
      newArray.unshift(newArray[newArray.length - 1]);
      // remove last element
      newArray.pop(newArray[newArray.length - 1]);
    }
  }
  return newArray;
}

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// // // console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// // let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// // console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// // console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

// // function twoDimensionalSum(arr) {
// //   let flatArr = arr.flat(Infinity)
// //   return flatArr.reduce((a,b)=>a + b, 0)
// // }

// // let arr1 = [
// //   [1, 3],
// //   [-4, 7, 10],
// //   [2]
// // ];
// // console.log(twoDimensionalSum(arr1)); // 19

// // let arr2 = [
// //   [],
// //   [3, 1, 2],
// // ];
// // console.log(twoDimensionalSum(arr2)); // 6

// // function avgVal(arr) {
// //   if (arr.length === 0) {return null};
// //   let sum = 0;
// //   let length = 0;

// //   for(let i = 0; i < arr.length; i++) {
// //     sum += arr[i]
// //     length++
// //   }

// //   return sum/length
// // }

// // console.log(avgVal([5, 10])); // 7.5
// // console.log(avgVal([3, 7, 2, 1, 2])); // 3
// // console.log(avgVal([])); // null

// // function myIndexOf(arr, target) {
// // for(let i = 0; i < arr.length; i++) {
// //   if (arr[i] === target) {return i}

// // }
// //   return -1
// // }

// // console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// // console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// // console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// // console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// // console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

// // function tripler(nums) {

// //   return nums.map(x=> x * 3)
// // }

// // // console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// // // console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

// // function longWords(words) {
// //   let long = [];
// // for(let i =0; i < words.length; i++){
// //   if(words[i].length > 5) {
// //     long.push(words[i])
// //   }
// // }
// // return long
// // }

// // console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// // console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// // function removeEWords(sentence) {
// //   let vowels = ['e'];
// //   eFree = []
// //   words = sentence.split(' ')
// //   console.log(words);

// //   //iterate over array of words
// //   for(let i = 0; i < words.length; i++){
// //     let word = words[i]
// //     //iterate over each word
// //     for(let j = 0; j < word.length; j++)

// //     // if word doesnt contains vowel push to new arr
// //     if (!vowels.includes(word[j])){
// //       eFree.push(word);
// //     }
// //   }
// //   return eFree
// //   }

// // console.log(removeEWords('What time is it everyone?')); // 'What is it'
// // // console.log(removeEWords('Enter the building')); // 'building'

// // function removeEWords(sentence) {
// //   let vowels = 'e';
// //   eFree = []
// //   words = sentence.split(' ')
// //   console.log(words);

// //   for(let i = 0; i < words.length; i++){
// //     console.log(words[i]);
// //     for(let j = 0; j < words[i].length; j++){
// //      console.log(words[i][j]);
// //     //  if (!vowels.includes(words[i][j])){
// //      if (words[i][j] !== 'e'){

// //      }
// //     }
// // //   }

// // //   return eFree
// // // }

// // // console.log(removeEWords('What time is it everyone?')); // 'What is it'
// // // // console.log(removeEWords('Enter the building')); // 'building'

// // // function removeEWords(sentence) {
// // //   let vowels = 'e';
// // //   let vowels2 = ['e', 'a']
// // //   let eFree = []
// // //   let words = sentence.split(' ')
// // //   console.log(words);

// // //   for(let i = 0; i < words.length - 1; i++) {
// // //     console.log(words[i]);
// // //     if (!words[i].includes(vowels2)) {

// // //       eFree.push(words[i])
// // //     }

// // //     }return eFree.join(' ')
// // //   }

// // // console.log(removeEWords('What time i si is  reeee is it everyone?')); // 'What is it'
// // // // console.log(removeEWords('Enter the building')); // 'building'

// // function removeEWords(sentence) {
// //   let vowels = 'e';
// //   let vowels2 = ['e','a'];
// //   let vowels3 = 'ae';
// //   let eFree = [];
// //   let words = sentence.split(' ')
// //   console.log(words);

// //   for(let i = 0; i < words.length; i++) {
// //     // if(!words[i].includes(vowels3)){
// //     if(!vowels3.includes(words[i])){
// //         console.log(words[i]);
// //       eFree.push(words[i])
// //     }
// //     }
// //       return eFree.join(' ')
// //     }

// //     function countVowels(word) {
// //       let vowels2 = 'aeiou'
// //       let vowels = ['a','e','i','o','u'];
// //       let count = 0;
// //       let split = word.split('');
// //      split.map(function(x) {
// //         if (!vowels2.includes(x)){
// //           count++
// //         }
// //      })
// //       return count
// //     };
// //     console.log(countVowels("bootcamp")); // => 3
// //     console.log(countVowels("apple")); // => 2
// //     console.log(countVowels("pizza")); // => 2

// // console.log(removeEWords('What time is it at everyone?')); // 'What is it'
// // // console.log(removeEWords('Enter the building')); // 'building'

// const jonas = {

//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this;
//     // const isMillenial = function() {
//     //   console.log();
//     //   console.log(self.year >= 1981 && self.year <= 1996);

//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);

//     };
//     isMillenial()
//   },

//   // greet: () => {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);

//   greet: function()  {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }

// }

// // const isMillenial = () => {
// //   console.log();
// //   console.log(this.year >= 1981 && this.year <= 1996);

// // };

// // console.log(isMillenial());

// jonas.greet(this.firstName);
// jonas.calcAge();

// // agruments keyword
// //only available in regular expressions
// // not available in arrow functions

// const addExpr = function (a,b) {
// console.log(arguments);
// return a + b;

// }

// addExpr(2,5,8,7,6)

// // Primitives vs Objects (primitive vs reference types)

// let age= 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
// name: 'Donovan',
// age: 30

// }

// // const friend = me;
// // friend.age= 32;
// // console.log();

// // ^will not work^

// // if we want to copy anm object to another space in memory we have to declare it
// // const meCopy = Object.assign( {}, me)

// const friend = Object.assign({}, me)

// console.log(me);
// console.log(friend);

// //now we can change info in const friend without changing the info in const me
// friend.name = 'Jose'
// friend.age = 35

// console.log(me);
// console.log(friend);

// function twoSum(arr, target) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       console.log(`arr I is ${arr[i]}`);
//       console.log(`arr J is ${arr[j+1]}`);

//     if(arr[i] + arr[j] === target) {
//       return true}
//     }
//   }
//   return false
// }

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false

// function reverseWord(word) {

// }

// function reverseSentence(sentence) {
// return reverse = sentence.split(' ').reverse().join(' ')

// }// for(let i = 0; i < sentence.length; i++){
// //  reverse += (arr.reverse())

// function reverseSentence(sentence) {
//   let words = sentence.split(' ')
//   let reverse = [];
//   for(let i = 0; i < words.length; i++){
//     // console.log(words[i]);
//     reverse.unshift(words[i])

//   }

//   return reverse.join(' ')

//   }

// // console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// // console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

// function initial(name) {
//   let initials3 = ''
//   for(let i = 0; i < name.length; i++){
//     if (i === 0){
//       initials3 += (name[i].toUpperCase())
//     }
//   }
//   return initials3
// }

// function initials(name){
// let names = name.split(' ')
// let initials2 = ''

// for(let i = 0; i < names.length; i++) {
//   initials2 += initial(names[i]);
// }
// return initials2
// }

// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

// function twoDimensionalProduct(array) {
//   let flat = array.flat(10);
//   let prod = 1;
//   // console.log(flat);
//   for(let i = 0; i < flat.length; i++)
//   // console.log(flat[i]);
//     {prod *= flat[i]}
// return prod
// }

// let arr1 = [
//   [6, 4],
//   [5],
//   [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//   [11, 4],
//   [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88

// function popper(array, num) {
//   return new2 = array.splice(-num).reverse()

// }

// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function choosePrimes(nums) {
  let primes = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      primes.push(nums[i]);
    }
  }
  return primes
}
// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// console.log(howLong('word'));

function longestWord(sentence) {
  let words = sentence.split(' ');
  let biggest = '';

  // console.log(words);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > biggest.length) {
      biggest = words[i];
    }
  }

  return biggest;
}

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

// let additionMutator = function(numbers, n) {
//   for (let i = 0; i < numbers.length; i++) {
//       numbers[i] += n;
//   }
// }

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]

// function abbreviate(word) {

// let vowels = 'aeiou';
// let newWord = ''

// for(let i = 0 ; i < word.length; i++) {
//   console.log(word[i]);
//   if (!vowels.includes(word[i])) {
//     newWord += word[i]

//   }
// }
// return newWord
// }

// console.log(abbreviate('wonderful')); // 'wndrfl'
// // console.log(abbreviate('mystery')); // 'mystry'
// // console.log(abbreviate('Accordian')); // 'ccrdn'

// function product(nums) {
// let prod = 1;
// for (let i = 0; i < nums.length; i++) {
//   prod *= nums[i]
// }
// return prod
// }

// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3])); // 12

// function rotate(array, num) {
//   if(num>1){
//     for(let i = 0; i < Math.abs(num); i++){
//       let temp = array.splice(-1).toString()
//       array.unshift(temp)

//     }
//     }
//   if(num<1){
//     for(let i = 0; i < Math.abs(num); i++){
//       let temp = array.splice(0,1).toString()
//       array.push(temp)
//   }
// }
// }

// function rotate(array, num) {
//   if(num>1){
//     // for(let i = 0; i < Math.abs(num); i++){
//       let temp = array.splice(-num).toString()
//       array.unshift(temp)

//     // }
//     }
//   if(num<1){
//     // for(let i = 0; i < Math.abs(num); i++){
//       let temp = array.splice(0,num).toString()
//       array.push(temp)
//   // }
// }
// }

// function rotate(array, num) {
//   if(num>1){
//     let temp = array.splice(-num)
//     return array.splice(0,0,temp).flat()
//     }
//   if(num<1){
//   let temp2 = array.splice(num)
//   return array.splice(0,temp2).flat()
//   }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

// let rotate = function(array, num) {
//   if (num > 0) {
//       for (let i = 0; i < num; i++) {
//           let el = array.pop();
//           array.unshift(el);
//       }
//   } else {
//       for (let i = 0; i < -(num); i++) {
//           let el = array.shift();
//           array.push(el);
//       }
//   }
// };

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // rotate(arr, 2);
// // console.log(arr);

// // let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// // rotate(animals, -1);
// // console.log(animals);

// function alternatingWords(arr){
//   //iterate over array
//   arr.forEach( (word, idx) => {
//     if (idx % 2 === 0) {
//       arr[idx] = arr[idx].toUpperCase();
//     }
//     if (idx % 2 === 1) {
//       arr[idx] = arr[idx].toLowerCase();
//     }
//   })
// return arr
// }

// // array1.forEach(element => console.log(element));

// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

// function abbreviateWords(sentence) {
//   let words = sentence.split(' ');
//   let vowels ='aeiou';
//   let vowels2 = ['a','e','i','o','u']
//   let newSent = [];

//   console.log(words);

// for (let j = 0; j < words.length; j++) {

//   if (words[j].length < 5) {
//     newSent.push(words[j])
//   }
// console.log(newSent);

//   if (words[j].length > 4) {
//   let newWord = '';
//     for(let i =0; i<words[j].length; i++) {

//      let char = words[j][i]
//       if(!vowels.includes(char)){
//         newWord += char;
//         console.log(newWord);
//       }
//     }newSent.push(newWord)
//   }

// }
// return newSent.join(' ')
// }

//   // return newSent.join(' ')

// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

// Write a function containsWord(sentence, targetWord) that accepts two strings as args.
// The function should return a boolean indicating whether the targetWord is found inside
// of the sentence. Solve this without using String's indexOf() or includes() methods.

// function containsWord(sentence, targetWord) {
// let words = sentence.split(' ');

// for (let i = 0; i <words.length; i++) {
//   let tempWord = words[i].toLowerCase()
//   if (tempWord === targetWord) {
//     return true
//   }
// }
// return false
// }

// // your code here

// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false

// Write a function uncompress(str) that takes in a "compressed" string as an arg.
// A compressed string consists of a character immediately followed by the number of times
// it appears in the "uncompressed" form. The function should return the uncompressed
// version of the string. See the examples.

// Hint: you can use the built-in Number function should convert a numeric string into
// the number type. For example. Number("4") // => 4

// function uncompress(str) {
//   let newStr = ''
//   for(let i = 0; i < str.length; i++) {
//     let letter = str[i]
//     let number = str[i+1]
//     for (let j = 1; j <= number; j++) {
//       newStr += letter
//     }
//   }
//   return newStr
// }

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// // Write a function hipsterfy(sentence) that takes in a sentence string and
// // returns the sentence where every word is missing its last vowel.

// function reverseVowelIndexCheck (word) {
//   let vowels = 'aeiou'
//   let reverseWord = word.split('').reverse().join('');
//   for (let i = 0; i < reverseWord.length; i++) {
//     if (vowels.includes(reverseWord[i])) { return i }

//   }
// }

// console.log(reverseVowelIndexCheck('worod'));

// function hipsterfy(sentence) {
//   let words = sentence.split(' ');
//   let newSent = [];
// // return index of first vowel
// // slice out that vowel and push rest of word to newSent
//   console.log(words);

//   for(let i = 0; i < words.length; i++){
//     console.log(words[i]);
//     let reverseWord = words[i].split('').reverse().join('');
//     console.log(reverseWord);
//     let indexToSlice = reverseVowelIndexCheck(words[i])
//     console.log(indexToSlice);
//     let newWord = reverseWord.replace(reverseWord[indexToSlice],'');
//     let fixWord = newWord.split('').reverse().join('')
//     console.log(fixWord);
//     newSent.push(fixWord)
//   }
// return newSent.join(' ')
// }

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// let removeLastVowel = function(word) {
//   let vowels = 'aeiou';

//   for(let i = word.length - 1; i >= 0; i--) {
//       let char = word[i];
//       if (vowels.includes(char)) {
//           return word.slice(0, i) + word.slice(i + 1);
//       }
//   }

//   return word;
// };

// let hipsterfy2 = function(sentence) {
//   let newWords = [];
//   let words = sentence.split(' ');

//   for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       newWords.push(removeLastVowel(word));
//   }

//   return newWords.join(' ');
// };

// console.log(hipsterfy2('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy2('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy2('panthers are great animals')); // 'panthrs ar gret animls'

// Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments.
// The functions should return the smallest number that is divisible by both num1 and num2.

// function leastCommonMultiple(num1, num2) {
//   for(let i = 2; i <= num1*num2; i++) {
//     if(i % num1 === 0 && i % num2 === 0){
//       return i
//     }
//   }
// }

// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10

// Remove Last Vowel Recall
// Write a function removeLastVowel(word) that takes in a string and returns the
// string with its last vowel removed.

// let removeLastVowel = function(word) {
//   let vowels = 'aeiou';

//   for(let i = word.length - 1; i >= 0; i--) {
//       let letter = word[i];
//       if (vowels.includes(letter)) {
//           return word.slice(0, i) + word.slice(i + 1);
//       }
//   }

//   return word;
// };

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

// function vowelIndexCheck (word) {
//   let vowels = 'aeiou'

//   for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) { return i }

//   }
// }

// console.log(vowelIndexCheck('word'));

// function weirdThings (word) {
//   let vowels = 'aeiou'
//   let num = vowelIndexCheck(word)
//   if (vowels.includes(word[word.length-1])){
//     return word+word
//   } else {
//     return word + word.slice(num)
//   }
//   // if word ends in a vowel repeat the entire word twice and push into new sentence
//         // slice whole thing twice?
//     // if the word ends with a non-vowel, repeat all letters that come after the
// //     word's last vowel, including the last vowel itself (example:
// //     'trash'->'trashash')
//       // def use slice
// }

// console.log(weirdThings('word'));
// console.log(weirdThings('wooo'));
// console.log('======');

// function repeatingTranslate (sentence) {
// let words = sentence.split(' ');
// let newSent = []
//   //separate into words
//   // check length of words
//   for(let i =0; i <words.length;i++){
//     if(words[i].length<4) {
//       newSent.push(words[i]);
//     } else if (words[i].length>=4){
//       newSent.push ( weirdThings(words[i]) )
//     }
//   }
//   // if 3 or less characters push word to new sentence
//   // if more than 3 characters
//     // if word ends in a vowel repeat the entire word twice and push into new sentence
//         // slice whole thing twice?
//     // if word check vowel index and repeat all chars afterwards
//       // def use slice
//   return newSent.join(' ')
// }

// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and
// returns the largest value in the matrix. The matrix contains at least one value.

// function maxInMatrix(matrix) {
//   let flat = matrix.flat(Infinity)
//   let maxNum = Math.max(...flat)
//   console.log(maxNum);
// }

// matrix = [[11,  2,-99],
//           [20, 19, 10],
//           [47, 72, 56]]

// console.log(maxInMatrix(matrix)); // 72

// function maxInMatrix2(matrix) {
//   let biggestNum = -Infinity;
//   for (let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix.length; j++){
//       // console.log(matrix[i][j]);
//       if(matrix[i][j] > biggestNum) {
//         biggestNum = matrix[i][j]
//       }
//     }
//   }
//   return biggestNum
// }

// matrix2 = [[11,  2,-99],
//           [20, 19, 10],
//           [47, 72, 56]]

// console.log(maxInMatrix2(matrix2)); // 72

// matrix3 = [[-11,  -2,-99],
//           [-20, -19, -10],
//           [-47, -72, -56]]

// console.log(maxInMatrix2(matrix3)); // 72

// Max in Columns
// Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
// and returns an array containing the maximum value in each column. The array length
// should be equal to the number of columns, such that returnArrayi is equal to the max
// value in the ith column.

// function maxColumn(matrix) {
// let height = matrix.length
// let width = matrix[0].length
// let bigArr = [];

// // iterate thru

//   for (let i = 0; i < width; i++) {
//     let colMax = matrix[0][i];
//     console.log(colMax);
//     for(let j = 1; j < height; j++){
//       // console.log(matrix[i][j]);
//       // console.log(bigArr[i]);

//       if (matrix[j][i] > colMax) {
//         colMax = matrix[j][i]
//       }
// }
// bigArr.push(colMax)
// }
// return bigArr
// }

// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(maxColumn(matrix)); // [12, 19, 21]

//   let bigNum = -Infinity
//   for (let i = 0; i < matrix.length; i++) {
//       // console.log(matrix[i][j]);
//       if(matrix[i] > bigNum) {
//         bigNum = matrix[i][j]
//       }
//     }

// // console.log(arr0);

// console.log('^^^^^');
// }

// function returnsWhat() {
//   return;
// }

// console.log(returnsWhat);

// function whatIsThis() {
// }

// console.log(whatIsThis);

// function yeller(words) {
// let yell = [];

// for(let i = 0; i < words.length; i++){
//   yell.push((words[i].toUpperCase() + '!'))
// }
//  return yell
// }

// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

// Write a function commonFactors that accepts two numbers as arguments.
// The function should return an array containing positive numbers that are
// able to divide both arguments.

// function commonFactors(num1, num2) {
//   let divs = []
//   for(let i = 0; i <= Math.min(num1,num2); i++) {
//     if(num1 % i === 0 && num2 % i === 0){
//       divs.push(i)
//     }
//   }
//   return divs
// }

// console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
// console.log(commonFactors(8, 4));              // [1, 2, 4]
// console.log(commonFactors(4, 8));              // [1, 2, 4]
// console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
// console.log(commonFactors(7, 9));              // [1]

// Has Double Letter
// Write a function hasDoubleLetter(str) that accepts a string.
// The function should return a boolean indicating whether the string contains
// two of the same character consecutively. If the value passed into the function
// is not a string, return null.

// function hasDoubleLetter(str) {
//   if(typeof(str) !== 'string') {
//     return null
//   }
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i+1]) {
//       return true
//     }
//   }
//   return false
// }

// console.log(hasDoubleLetter('deer')); // true
// console.log(hasDoubleLetter('boot camp')); // true
// console.log(hasDoubleLetter('toggle')); // true
// console.log(hasDoubleLetter('taco')); // false
// console.log(hasDoubleLetter('jumper')); // false
// console.log(hasDoubleLetter(18)); // null
// console.log(hasDoubleLetter(['array'])); // null

// // Lucky Numbers (*)
// // Write a function luckyNumbers(matrix) that takes in a 2-dimensional
// // array (matrix) and returns all lucky numbers in any order. A lucky number
// // is the minimum element in its row and the maximum in its column.

// let matrix = [ [ 5, 9, 21], [ 9, 19, 6], [12, 14, 15] ]

// // matrix = [ [ 5,  9, 21],
// //            [ 9, 19,  6],
// //            [12, 14, 15] ]

// function luckyNumBreakDown (matrix) {

//   let minRow = [];
//   let maxCol = [];

//   for(let arr in matrix) {
//     minRow.push(Math.min.apply(null, matrix[arr]))
//   }

//   for(let i in matrix[0]) {
//     let max = 0

//     for(let j in matrix){
//       if(matrix[j][i] > max) {
//         max = matrix[j][i]
//       }
//     }
//     maxCol.push(max)
//   }
//   return minRow.filter(num => maxCol.includes(num))
// }
// console.log(luckyNumBreakDown(matrix));

// function minInRow (arr) {
//  let minInRow = arr[0]
//  for(let i = 0; i < arr.length; i++) {
//   if (arr[i] < minInRow) {
//     minInRow = arr[i]
//   }
//  }
//  return minInRow
// }

// // console.log(minInRow([5, 9, 21]));

// function maxInCol (arr) {
//   let maxInCol = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//    if (arr[i] > maxInCol) {
//     maxInCol = arr[i]
//    }
//   }
//   return maxInCol
//  }

// //  function luckyNumbers(matrix) {
// //    let tempArr = [];
// //    luckyNums = [];
// //    let minRow = [];
// //    let maxCol = [];

// //   for(let i = 0; i < matrix.length; i++) {
// //     // takes each array and checks for min
// //     let tempMinInRow = (minInRow(matrix[i]));
// //     // pushes each column pos into tempArr
// //     tempArr.push(matrix[i][0]);
// //     // console.log(tempArr);
// //     // console.log(matrix[0][i]);

// //     // takes temp arr and check for max
// //     let tempMaxInCol = maxInCol(tempArr)

// //     if(tempMaxInCol === tempMinInRow) {
// //       luckyNums.push(tempMaxInCol)
// //     }

// //   }
// //   return luckyNums

// //  }

//   // console.log(luckyNumbers(matrix)); // [12]

// // function luckyNumbers(matrix) {
// //   let height = matrix.length;
// //   let width = matrix[0].length;
// //   let luckyNumbers = [];

// //   for (let row = 0; row < height; row++) {
// //     let column = matrix[0][row]
// //     let tempRow = matrix[row];
// //     let minInRow = matrix[0][row]
// //     let maxInCol = matrix[0][0];

// //     // console.log(`now on row ${row}`);
// //     // console.log(`min in row is ${minInRow}`);
// //     // console.log(`max in col is ${maxInCol}`);

// //     for (let inRow = 1; inRow < height; inRow++) {
// //       let cInRow = matrix[row][inRow];
// //       // console.log(`cinrow is ${matrix[row][inRow]}, row is ${row}`);
// //       if(cInRow<minInRow){
// //         minInRow = cInRow;
// //       }
// //     }

// //     for (let inCol = 0; inCol <= height; inCol++) {

// //       let cInCol = matrix[row][inCol];
// //       console.log(`current max in  col is ${maxInCol}`);
// //       console.log(`checking column${row}, position ${inCol}`);

// //       if(cInCol>maxInCol){
// //         maxInCol = cInCol;
// //       }
// //       if(maxInCol === minInRow) {
// //         luckyNumbers.push(minInRow)
// //       }

// //     }
// //     }
// //     return luckyNumbers
// //   }

// // iterate thru the row and check for lowest number
// // iterate thru the column and check if there is a bigger number

// // if a bigger number is found, break
// // if bigger number is found,

// // A lucky number is the
// // minimum in its row
// // maximum in its column.

// // matrix = [[ 5, 10,  8,  6],
// //           [10,  2,  7,  9],
// //           [21, 15, 19, 10]]

// // console.log(luckyNumbers(matrix)); // [10]

// // function maxColumn(matrix) {
// // let height = matrix.length
// // let width = matrix[0].length
// // let bigArr = [];

// // // iterate thru

// //   for (let i = 0; i < width; i++) {
// //     let colMax = matrix[0][i];
// //     console.log(colMax);
// //     for(let j = 1; j < height; j++){
// //       // console.log(matrix[i][j]);
// //       // console.log(bigArr[i]);

// //       if (matrix[j][i] > colMax) {
// //         colMax = matrix[j][i]
// //       }
// // }
// // bigArr.push(colMax)
// // }
// // return bigArr
// // }

// First and Last
// Write a function firstAndLast that takes in an array of
// numbers and returns the sum of the first and last element
// if there is an even number of elements in the array. If there
// is an odd number of elements in the array, then the function
// should return the difference between the first and last elements
// of the array.

function firstAndLast(arr) {
  // takes in arr
  // find first ele
  let firstEle = arr[0];
  // find last ele
  let lastEle = arr[arr.length - 1];

  // if arr.length % 2 === 0
  //returns last ele + first ele
  if (arr.length % 2 === 0) {
    return firstEle + lastEle;
  }
  // if arr.length % 2 === 1
  //returns first ele - last ele
  if (arr.length % 2 === 1) {
    return firstEle - lastEle;
  }
}

// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4

// Adjacent Sums
// Write a function adjacentSums that accepts an array of
// numbers as an argument. The function should return a new
// array containing the sum of each pair of elements
// in the input array.

function adjacentSums(arr) {
  // returns arr
  let newArr = [];
  // find unique pairs
  for (let i = 0; i < arr.length - 1; i++) {
    //  if(arr[i+1] !== undefined)
    //  tempNum = (arr[i] + arr[i+1]);
    //  newArr.push(tempNum);

    newArr.push(arr[i] + arr[i + 1]);
  }

  return newArr;
}

let adjacentSums2 = function (array) {
  if (!Array.isArray(array)) {
    throw 'Not an array!';
  }

  let sums = [];
  for (let i = 0; i < array.length - 1; i++) {
    let sum = array[i] + array[i + 1];
    sums.push(sum);
  }
  return sums;
};

// console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
// console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
// console.log(adjacentSums([2, -3, 3]));          // [-1, 0]

// Choose Primes Recall
// Write a function choosePrimes(nums) that takes in an array of numbers as args.
// The function should return a new array containing the primes from the original array.
// A prime number is a number that is only divisible by 1 and itself. Hint: consider
// creating a helper function to check if a number is prime!

// function isPrime(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {return false}
//   }
//   return true
// }

// function choosePrimes(nums) {
//   //return new arr
//   let newArr = [];

//   for(let i = 0; i < nums.length; i++) {
//     if(isPrime(nums[i])) {
//       newArr.push(nums[i])
//     }
//   }
//   return newArr
// }

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// Spiral Matrix (*)
// Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix)
// and returns an array containing the elements in spiral order.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function spiralOrder(matrix) {
  // return new array
  let newArr = [];

  //iterate from even indices front to back
  //iterate from odd indices back to front

  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i]);
    if (i === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j]);
      }
    }
    if (i === matrix.length - 1) {
      for (let k = matrix[i].length - 1; k >= 0; k--) {
        newArr.push(matrix[i][k]);
      }
    }
    if (i === 1) {
      for (let g = 0; g < matrix[i].length; g++) {
        newArr.push(matrix[i][g]);
      }
    }
  }
  return newArr;
}

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

/* <script>
  
  // JavaScript program for the above approach
    
  // Function to print in spiral order
  function spiralOrder(matrix)
  { */

//   function spiralOrder2(matrix) {
//       let ans = [];

//           if (matrix.length == 0)
//               return ans;

//           let R = matrix.length, C = matrix[0].length;
//           let seen = new Array(R);
//           for(let i=0;i<R;i++)
//           {
//               seen[i]=new Array(C);
//               for(let j=0;j<C;j++)
//               {
//                   seen[i][j]=false;
//               }
//           }

//           let dr = [ 0, 1, 0, -1 ];
//           let dc = [ 1, 0, -1, 0 ];
//           let r = 0, c = 0, di = 0;

//           // Iterate from 0 to R * C - 1
//           for (let i = 0; i < R * C; i++) {
//               ans.push(matrix[r]);
//               seen[r] = true;
//               let cr = r + dr[di];
//               let cc = c + dc[di];

//               if (0 <= cr && cr < R && 0 <= cc && cc < C
//                   && !seen[cr][cc]) {
//                   r = cr;
//                   c = cc;
//               }
//               else {
//                   di = (di + 1) % 4;
//                   r += dr[di];
//                   c += dc[di];
//               }
//           }
//           return ans;
//   }

//   matrix = [[ 1, 2, 3],
//   [ 4, 5, 6],
//   [ 7, 8, 9]]

//   // let input =  {{1,    2,   3,   4},
//   //             {5,    6,   7,   8},
//   //            {9,   10,  11,  12},
//   //           {13,  14,  15,  16 }}

// console.log(spiralOrder2(matrix)); // [1,2,3,6,9,8,7,4,5]
// // console.log(spiralOrder2(input)); // [1,2,3,6,9,8,7,4,5]

// // matrix = [[1, 2, 3, 4],
// //           [5, 6, 7, 8],
// //           [9,10,11,12]]

// // console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

// function spiralPrint2(m, n, arr) {
//   let i, k = 0, l = 0;
//   /*
//       k - starting row index
//       m - ending row index
//       l - starting column index
//       n - ending column index
//       i - iterator
//   */

//   while (k < m && l < n) {
//       // print the first row from the remaining rows
//       for (i = l; i < n; ++i) {
//           document.write(arr[k][i] + ' ');
//       }
//       k++;

//       // print the last column from the remaining columns
//       for (i = k; i < m; ++i) {
//           document.write(arr[i][n - 1] + ' ');
//       }
//       n--;

//       // print the last row from the remaining rows
//       if (k < m) {
//           for (i = n - 1; i >= l; --i) {
//               document.write(arr[m - 1][i] + ' ');
//           }
//           m--;
//       }

//       // print the first column from the remaining columns
//       if (l < n) {
//           for (i = m - 1; i >= k; --i) {
//               document.write(arr[i][l] + ' ');
//           }
//           l++;
//       }
//   }
// }

// function spiralOrder22(matrix) {
//   const arr = [];

//    while (matrix.length) {
//      arr.push(
//        ...matrix.shift(),
//        ...matrix.map(a => a.pop()),
//        ...(matrix.pop() || []).reverse(),
//        ...matrix.map(a => a.shift()).reverse()
//      );
//    }
//    return arr
//  }

//    matrix = [[ 1, 2, 3],
//              [ 4, 5, 6],
//              [ 7, 8, 9]]

// console.log(spiralOrder22(matrix)); // [1,2,3,6,9,8,7,4,5]

// function spiral2 (matrix) {
//   // variables
//   // k - starting row index
//   // m - ending row index
//   // l - starting column index
//   // n - ending column index
//   // i - iterator
//   let i = 0;
//   let k = 0;
//   let l = 0;
//   let spirals = [];

//   // 4 for loops

//   // first loop  - movement left to right
//   while ( k < m && 1 < n) {
//     for (i = l; i < m; i++) {
//       spirals.push(arr[k][i] + ' ')
//     }
//     k++
//   }
//   // second loop - movement top to bottom
//   // third loop  - movement right to left
//   // fourth loop - movement bottom to top

//   // print top row left to right
//   // print last column
// }

// Shortest Word (*)
// Write a function shortestWord that accepts a sentence as an argument.
// The function should return the shortest word in the sentence.
// If there is a tie, return the word that appears later in the sentence.

// function shortestWord (sentence) {
//   let words = sentence.split(' ')
//   let shorts = []

//   for(let i = words.length-1; i >= 1; i--) {
//   let lengthCounter = Infinity;

//   // console.log(words[i].length);
//   // console.log(lengthCounter);
//     if ((words[i].length)<(words[i-1].length) && (words[i].length <= lengthCounter)) {
//       lengthCounter = (words[i].length)
//       shorts.push(words[i])
//       console.log(shorts);
//     }
//   }
// return shorts[0]
// }

// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'

function shortestWord2(sentence) {
  let words = sentence.split(' ');
  let shorts = [];
  let lengthCounter = Infinity;

  for (let i = 0; i < words.length; i++) {
    // if ((words[i].length)<(words[i+1].length) && (words[i].length <= lengthCounter)) {
    if (words[i].length <= lengthCounter) {
      lengthCounter = words[i].length;
      shorts.unshift(words[i]);
    }
  }
  return shorts[0];
}

// // console.log(shortestWord2('what a wonderful life'));     // 'a'
// console.log(shortestWord2('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord2('do what you enjoy'));         // 'do'

// Double Sequence
// Write a function doubleSequence that accepts a base and a length as arguments.
// The function should return an array representing a sequence that contains "length" elements.
// The first element of the sequence is always the "base", the subsequent elements can be generated
// by doubling the previous element of the sequence.

function doubleSequence(base, length) {
  //return array
  // double the base length(n) times
  if (length === 0) {
    return [];
  }

  let newArr = [base];
  newArr[newArr.length - 1];
  for (let i = 2; i <= length; i++) {
    newArr.push(newArr[newArr.length - 1] * 2);
  }
  return newArr;
}

// console.log(doubleSequence(7, 3));  // [7, 14, 28]
// console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
// console.log(doubleSequence(5, 3));  // [5, 10, 20]
// console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
// console.log(doubleSequence(5, 0));  // [ ]

// // Dynamic Fizz Buzz
// // Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2).
// // The function should return an array containing positive numbers less than max that are
// // divisible by num1 or num2, but not both.

function dynamicFizzBuzz(max, num1, num2) {
  //return new arr
  let newArr = [];
  // iterate 0 thru max
  // if divisible by divisible by num1 or num2, but not both - push to newArr
  for (let i = 0; i < max; i++) {
    if (
      (i % num1 === 0 || i % num2 === 0) & !(i % num1 === 0 && i % num2 === 0)
    )
      newArr.push(i);
  }
  return newArr;
}

// console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
// console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]

// Reverb
// Write a function reverb that accepts a word as an argument.
// The function should return a new word where all letters that come
// after the last vowel (including the vowel itself) are repeated at
// the end of the word.
// If the value passed in is not a string,
//  say someone passes in a number as an argument, then return null.

let findLastVowel = function (word) {
  let vowels = 'aeiouAEIOU';

  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      return i;
    }
  }

  return word;
};

let removeLastVowel = function (word) {
  let vowels = 'aeiou';

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
};

// console.log(findLastVowel('hello'));

function reverb(word) {
  if (typeof word !== 'string') {
    return null;
  }
  // find last vowel
  let index = findLastVowel(word);
  return word + word.slice(index);
}

// console.log(reverb('running')); // runninging
// console.log(reverb('FAMILY'));  // FAMILYILY
// console.log(reverb('trash'));   // trashash
// console.log(reverb('DISH'));    // DISHISH
// console.log(reverb(197393));    // null

// Pair Product
// Write a function pairProduct that accepts an array of numbers and a product as arguments.
// The function should return a boolean indicating whether or not a pair of distinct elements
// in the array result in the product when multiplied together. You may assume that the input
// array contains unique elements.

// return Boolean

//iterate thru all unique pairs
// if one equals num return true

// if none found return false
function pairProduct(arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}

// console.log(pairProduct([4, 2, 5, 8], 16))    // true
// console.log(pairProduct([8, 1, 9, 3], 8))     // true
// console.log(pairProduct([3, 4], 12))          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
// console.log(pairProduct([4, 2, 5, 7], 16))    // false
// console.log(pairProduct([8, 4, 9, 3], 8))     // false
// console.log(pairProduct([3], 12))             // false

// Snake to Camel
// Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased
// version of the string. snakecase is where each word is separated with underscores (``).
// PascalCase is a string where the first char of each word is capital, all other chars lowercase.

function snakeToCamel(string) {
  let words = string.split('_');
  let camel = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let tempWord = [];

      if (j === 0) {
        tempWord.push(words[i][j].toUpperCase());
      } else {
        tempWord.push(words[i][j].toLowerCase());
      }
      camel.push(tempWord);
    }
  }
  return camel.join('');
}

// console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

// Strange Sums
// Write a function strangeSums that accepts an array of numbers as an argument.
// The method should return a count of the number of distinct pairs of elements that
// have a sum of zero. You may assume that the input array contains unique elements.

// function strangeSums(arr) {
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         counter++;
//       }
//     }
//   }

//   //iterate over unique paris
//   // check if that pair adds up to 0
//   // if so increment counter
//   return counter;
// }

// console.log(strangeSums([2, -3, 3, 4, -2])); // 2
// console.log(strangeSums([42, 3, -1, -42])); // 1
// console.log(strangeSums([-5, 5])); // 1
// console.log(strangeSums([19, 6, -3, -20])); // 0
// console.log(strangeSums([9])); // 0

// Triplet True
// Write a function tripletTrue that accepts a string as an argument.
// The function should return a boolean indicating whether or not the the string
// contains three of the same character consecutively.

// function tripletTrue (string) {
//   for(let i = 0; i < string.length-3;i++){
//     console.log(string[i], string[i+2], string[i+3]);
//     if (string[i] === string[i+2] === string[i+3]) {
//       for(let j = 0; j < string.length-3;j++){}
//       return true
//     }
//   }
// }

function tripletTrue(string) {
  for (let i = 0; i < string.length - 2; i++) {
    if (string[i] === string[i + 1] && string[i + 1] === string[i + 2]) {
      return true;
    }
  }
  return false;
}
// console.log(tripletTrue('caaabb'));        // true

// // start at index one and iterate thru all trips
// // then go index 2 iterate thru all trips
// // keep going until starting from 3 away from last

//   // return boolean
//   // iterate over string until 3rd from last index
//   // if stringi === stringi+2 === stringi+3 return true
//   // else fasle

// console.log(tripletTrue('terrrrrible'));   // true
// console.log(tripletTrue('runninggg'));     // true
// console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

// Three Increasing
// Write a function threeIncreasing that accepts an array of numbers as an argument.
// The function should return a boolean indicating whether or not the array contains
// three consecutive numbers in consecutive increasing order, like 7, 8, 9.

function threeIncreasing(arr) {
  // return boolean
  // iterate over arr until length-2
  // if arr[i] - arr[i+1] - 1 === 0 && arr[i+1] - arr[i+2] - 1 === 0

  for (let i = 0; i < arr.length - 2; i++) {
    // console.log(arr[i], arr[i+1], arr[i+2]);
    if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
      return true;
    }
  }
  return false;
}

// console.log(threeIncreasing([3, 2, 11, 12, 13]));     // true

// // console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// // console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// // console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// // console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

// Uncompress Recall
// Write a function uncompress(str) that takes in a "compressed" string as an arg.
// A compressed string consists of a character immediately followed by the number of times
// it appears in the "uncompressed" form. The function should return the uncompressed
// version of the string. See the examples.

// Hint: you can use the built-in Number function should convert a numeric string into the
// number type. For example. Number("4") // => 4

function uncompress(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let number = str[i + 1];
    for (let j = 1; j < number; j++) {
      newStr += letter;
    }
  }

  return newStr;
}

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b5o2c4z1')); // 'aaaaabbccccz'

// console.log(uncompress('b1o2t1')); // 'boot'

// Zip
// Write a function zip that accepts two arrays as arguments.
// The function should return a two dimensional array with subarrays of length 2
// that contain elements at corresponding indices from the input arrays.
// You may assume that the input arrays have the same length.

function zip(arr1, arr2) {
  let newArr = [];
  let length = Math.max(arr1.length, arr2.length);
  // return 2D array with pairs inside each arr
  // index 0 of arr1 && index 0 of arr2 &&
  // index 1 of arr1 && index 1 of arr2 && and so on
  for (let j = 0; j < length; j++) {
    let arr = [];
    arr.push(arr1[j]);
    arr.push(arr2[j]);
    newArr.push(arr);
  }
  return newArr;
}

// console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

// console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// // [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

// console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

// Unique
// Write a function unique that accepts an array as an argument.
// The function should return a new array containing elements of the
// input array, without duplicates.

function unique(arr) {
  // return newArr
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

// Write a function hipsterfy(sentence) that takes in a sentence string and
// returns the sentence where every word is missing its last vowel.

function findLastVowel2(word) {
  let vowels = 'aieou';
  for (let i = word.length; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return i;
    }
  }
}

function hipsterfy(sentence) {
  let words = sentence.split(' ');
  let newSent = [];
  for (let i = 0; i < words.length; i++) {
    let index = findLastVowel2(words[i]);
    newSent.push(words[i].slice(0, index) + words[i].slice(index + 1));
  }
  return newSent.join(' ');
}

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// Zany Zip
// Write a function zanyZip that accepts two arrays as arguments.
// The function should return a two dimensional array with subarrays of length 2
// that contain elements at corresponding indices from the input arrays. If one of
// the arrays is shorter than the other, then substitute null for the missing elements.

function zanyZip(arr1, arr2) {
  // return 2d array with pairs in each array
  // take each pair of indices and put them in new arr then push arr to main array
  // if else statements - if undefined push null

  let length = Math.max(arr1.length, arr2.length);
  let mainArr = [];
  for (let i = 0; i < length; i++) {
    let tempArr = [];
    if (arr1[i] === undefined) {
      tempArr.push(null);
    } else {
      tempArr.push(arr1[i]);
    }
    if (arr2[i] === undefined) {
      tempArr.push(null);
    } else {
      tempArr.push(arr2[i]);
    }
    mainArr.push(tempArr);
  }

  return mainArr;
}

// console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

// Silly Strings
// Write a function sillyString that accepts a word as an argument.
// The functions should return a new word where every vowel of the original word is
// followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

// function sillyString (word) {
//   //return new word
//   let newWord = []
//   let letters = word.split('')
//   let vowels = 'aeiou'

//   console.log(letters);

//   for (let i = 0; i < letters; i++ ) {
//     if(vowels.includes(letters[i])) {
//       newWord.push(letters[i]+'b'+letters[i])
//     } else {
//       newWord.push(letters[i])
//     }
//   }
//   // iterate over word
//   // push each constanant to new word
//   // if vowel @ word[i] push word[i]+'b'+word[i]
//   return newWord.join('')
// }

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

// Most Expensive Groceries
// This problem is worth 1 points.
// You may receive partial credit.
// You are compiling a price checker for a grocery store. The grocery prices are as follows:

// butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5

// First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost.

// Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items and returns the index of the sub-array with the highest cost.

// This problem is worth 7 points. It is possible to get partial points on this problem.

// // butter: $1
// // eggs: $2
// // milk: $3
// // bread: $4
// // cheese: $5
//   //takes in arr of gorceries
//   //returns total cost
function costOfGroceries(groceries) {
  let totalCost = 0;

  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === 'butter') {
      totalCost += 1;
    }
    if (groceries[i] === 'eggs') {
      totalCost += 2;
    }
    if (groceries[i] === 'milk') {
      totalCost += 3;
    }
    if (groceries[i] === 'bread') {
      totalCost += 4;
    }
    if (groceries[i] === 'cheese') {
      totalCost += 5;
    }
  }
  return totalCost;
}

// // Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items
// // and returns the index of the sub-array with the highest cost.

function mostExpensiveGroceries(groceriesList) {
  let most = null;
  let index = null;
  for (let i = 0; i < groceriesList.length; i++) {
    if (costOfGroceries(groceriesList[i]) > most) {
      most = costOfGroceries(groceriesList[i]);
      index = i;
    }
  }
  return index;
}

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// // console.log(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC])); // 2

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1
)
  score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log('You have scored ' + score + '/7 points.');

// // Your friend is working on a function called isSorted() which checks if an array of numbers is in order, sorted lowest to highest.
// // Unfortunately, the code is not working correctly. Help them fix it!

// function isSorted(nums) {

//   // Loop through each number
//   for (let i = 0 ; i < nums.length ; i++) {

//       // Check if the current number is less than
//       // the previous number
//       if (nums[i] > nums[i+1]) {
//           // If it's not, return false
//           return false;
//       }
//   }

//   // If every number is greater or equal to the previous number
//   // in the array, it's sorted.
//   return true;

// }

// // console.log(isSorted([1, 2, 3, 4, 5]) );
// // console.log(isSorted([2, 2, 4, 4]) );
// // console.log(isSorted([1, 2, 4, 3, 5, 6]));

//  // true
//  // true
//   // false

// isSorted([1, 2, 3, 4, 5])  // true
// isSorted([2, 2, 4, 4])  // true
// isSorted([1, 2, 4, 3, 5, 6])  // false

// Silly Strings
// Write a function sillyString that accepts a word as an argument.
// The functions should return a new word where every vowel of the original word is followed
// by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

function sillyString(word) {
  // returns new word
  let newWord = [];
  let vowels = 'aeiou';

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      newWord.push(word[i] + 'b' + word[i]);
    } else {
      newWord.push(word[i]);
    }
  }
  return newWord.join('');
}

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

// More Dot Less Dash
// Write a function moreDotLessDash that accepts a string as an argument.
// The function should return a boolean indicating whether or not the string
// contains more dots (.) than dashes (-).

function moreDotLessDash(string) {
  //return boolean
  //iterate over string and increment separate counter for . and -
  counterDash = 0;
  counterDot = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '.') {
      counterDot++;
    }
    if (string[i] === '-') {
      counterDash++;
    }
  }

  if (counterDot > counterDash) {
    return true;
  } else {
    return false;
  }
}

// console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
// console.log(moreDotLessDash('Morse code is great.'));                   // true
// console.log(moreDotLessDash('.... . -.--'));                            // true
// console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
// console.log(moreDotLessDash('high-flying acrobat.'));                   // false

// Next Prime
// Write a function nextPrime that accepts a number as an argument.
// The function should return the nearest prime number that is greater than the given number.

function isPrime(num) {
  if(num === 1 ){return false}
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(num) {
  for (let i = num + 1; i < Infinity; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

// console.log(nextPrime(2)); // 3
// console.log(nextPrime(3)); // 5
// console.log(nextPrime(7)); // 11
// console.log(nextPrime(8)); // 11
// console.log(nextPrime(20)); // 23
// console.log(nextPrime(97)); // 101

// Matrix Addition
// A 2-dimensional array is also known as a "matrix".
// Write a function matrixAddition that accepts two matrices as arguments.
// The two matrices are guaranteed to have the same "height" and "width".
// The function should return a new matrix representing the sum of the two arguments.
// To add matrices, we add the values at the same positions.

function matrixAddition(mtrx1, mtrx2) {
  let newArr = [];
  // console.log(mtrx1[0][0]);
  for (let i = 0; i < mtrx1.length; i++) {
    let tempArr = [];
    for (let j = 0; j < mtrx1[0].length; j++) {

     tempArr.push(mtrx1[i][j] + mtrx2[i][j])
    }
    newArr.push(tempArr)
  }
  return newArr
}

let matrixA = [
  [2, 5],
  [4, 7],
];
let matrixB = [
  [9, 1],
  [3, 0],
];
let matrixC = [
  [-1, 0],
  [0, -1],
];
let matrixD = [
  [2, -5],
  [7, 10],
  [0, 1],
];
let matrixE = [
  [0, 0],
  [12, 4],
  [6, 3],
];

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]



// Is Perfect Square
// Write a function isPerfectSquare that accepts a number as an argument. 
// The method should return a boolean indicating whether or not the argument is a perfect square. 
// A perfect square is a number that is the product of some number multiplied by itself. 
// For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.

function isPerfectSquare(num) {
for(let i = 0; i <= num; i++) {
  if( i*i === num) {return true}
}
  return false

}



// console.log(isPerfectSquare(1))     // true
// console.log(isPerfectSquare(4))     // true
// console.log(isPerfectSquare(64))    // true
// console.log(isPerfectSquare(100))   // true
// console.log(isPerfectSquare(169))   // true
// console.log(isPerfectSquare(2))     // false
// console.log(isPerfectSquare(40))    // false
// console.log(isPerfectSquare(32))    // false
// console.log(isPerfectSquare(50))    // false



// Prime Factors
// Write a function primeFactors that accepts a number as an argument. 
// The function should return an array containing all of the prime numbers that can divide the given number.


function primeFactors (num) {
  let newArr = [];
  for(let i = 0; i <= num; i++){
    if(num % i === 0 && isPrime(i)) {
      newArr.push(i)
    }
  }
  return newArr
}



// console.log(primeFactors(12));  // [2, 3]
// console.log(primeFactors(7));   // [7]
// console.log(primeFactors(16));  // [2]
// console.log(primeFactors(30));  // [2, 3, 5]
// console.log(primeFactors(35));  // [5, 7]
// console.log(primeFactors(49));  // [7]
// console.log(primeFactors(128)); // [2]

// Prev Prime
// Write a function prevPrime that accepts a number as an argument. 
// The function should return the nearest prime number that is smaller than the given argument. 
// Since 2 is the smallest prime number, return null if no number can be returned.

function prevPrime (num) {
  for(let i = num-1; i >= 2; i--){
    if(isPrime(i)) {return i}
  }
  return null
}



// console.log(prevPrime(32)); // 31
// console.log(prevPrime(33)); // 31
// console.log(prevPrime(14)); // 13
// console.log(prevPrime(7));  // 5
// console.log(prevPrime(4));  // 3
// console.log(prevPrime(2));  // null
// console.log(prevPrime(1));  // null


// Has Three Vowels (*)
// Write a function hasThreeVowels that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the string contains at least three different vowels.



function hasThreeVowels(string) {
  let counter = []
  let vowels ='aeiou'
  for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i])){
      if(!counter.includes(string[i])){
        counter.push(string[i])
      }
    }
  }
  if(counter.length > 2) {return true}
  else{return false}
}


// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false


// Fibonacci Sequence
// Write a function fibonacciSequence that accepts a number as an argument. 
// The function should return an array representing the fibonacci sequence up to the given length. 
// The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, 
// we take the sum of the previous two numbers of the sequence.


function fibonacciSequence (num) {
  let fib = []
  if(num === 1) {return [1]}
  for(let i = 1; i < num; i++){
    if(i === 1) { fib.push(i, i) }

    else {fib.push( fib[fib.length-1] + fib[fib.length-2] )}

    }
    return fib
  }




// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(0));  // [ ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]




// Is Anti Prime
// Write a function isAntiPrime that accepts a number as an argument. 
// The method should return true if the given number has more divisors 
// than all positive numbers less than the given number. For example, 24 
// is an anti-prime because it has more divisors than any positive number less than 24.

function numDivisors(num) {
  let divs = [];
  for(let i = 1; i <= num; i++){
    if(num % i === 0) {divs.push(i)}
  }
  return divs.length
}



function isAntiPrime (num) {
  let numToBeat = numDivisors(num)
// return boolean
// check divisors for num
// iterate num thru 1
// check # of divisors for each num
// if i has more divisors than num return false 

for(let i = num-1; i >1; i--){
  if(numDivisors(i) > numToBeat) {return false}
}
  return true
}



// console.log(isAntiPrime(24))   // true
// console.log(isAntiPrime(36))   // true
// console.log(isAntiPrime(48))   // true
// console.log(isAntiPrime(360))  // true
// console.log(isAntiPrime(1260)) // true
// console.log(isAntiPrime(27))   // false
// console.log(isAntiPrime(5))    // false
// console.log(isAntiPrime(100))  // false
// console.log(isAntiPrime(136))  // false
// console.log(isAntiPrime(1024)) // false




// Pyramid Array
// Write a function pyramidArray(base) that takes in an array of numbers representing 
// the base of a pyramid. The function should return a two-dimensional array representing 
// the completed pyramid. To generate an element of the next level of the pyramid, we sum 
// the elements below and to the left and below and to the right.


// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//



function pyramidArray(base) {
  let newArr = [base]
  while(newArr.length < newArr.length){
  for(let i = 0; i < base.length-1; i++){
    let tempArr = [];

    console.log(base[i] + base[i+1]);
    
    tempArr.unshift(base[i] + base[i+1])
  }}
  return newArr
}



let p1 = pyramidArray([2, 3, 7, 5, 9]);
// console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
// console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]



let maxValue = function(arr) {
  let topDog = null;

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (topDog === null || num > topDog) {
          topDog = num;
      }
  }

  return topDog;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null