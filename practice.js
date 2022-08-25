// 'use strict'

// // // Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array.

// // function sumArray(arr) {
// //   let sum = 0;
// //   let sum2 = [];
// //   for(let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //     sum2.push(arr[i]);
// //   }
// //   return sum
// // }






// // console.log(sumArray([4, 3, -1, 10])); // 16
// // console.log(sumArray([6, 7, 2])); // 15
// // console.log(sumArray([])); // 0



// // function rotateRight(array, num) {
// //   let newArray = array.slice()
// //   console.log(newArray);
// //   if (num > 0) {
// //     // if num 0, we dont need to rotate
// //     for(let j = 1; j <= num; j++){
// //       // add last element to front
// //       newArray.unshift(newArray[newArray.length-1])
// //       // remove last element
// //       newArray.pop(newArray[newArray.length-1]);

// // }
// // }
// // return newArray
// // }



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




// function isPrime(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {return false}
//   }
//   return true
// }



// function choosePrimes(nums) {
//   let primes = [];
//   for (let i = 0; i < nums.length; i++)
//     if(isPrime(nums[i])){
//       primes.push(nums[i])
//     }
//     return primes
// }




// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]



// console.log(howLong('word'));

// function longestWord(sentence) {
// let words = sentence.split(' ');
// let biggest = ''

// console.log(words);
// for(let i = 0; i < words.length; i++) {
//  let word = words[i]; 
//   if (word.length > biggest.length) {
//     biggest = words[i]
//   }
// }

// return biggest
// }


// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''



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

// // function rotate(array, num) {
// //   if(num>1){
// //     // for(let i = 0; i < Math.abs(num); i++){
// //       let temp = array.splice(-num).toString()
// //       array.unshift(temp)

// //     // }
// //     }
// //   if(num<1){
// //     // for(let i = 0; i < Math.abs(num); i++){
// //       let temp = array.splice(0,num).toString()
// //       array.push(temp)
// //   // }
// // }
// // }




// // function rotate(array, num) {
// //   if(num>1){
// //     let temp = array.splice(-num)
// //     return array.splice(0,0,temp).flat()
// //     }
// //   if(num<1){
// //   let temp2 = array.splice(num)
// //   return array.splice(0,temp2).flat()
// //   }
// // }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]





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

let removeLastVowel = function(word) {
  let vowels = 'aeiou';

  for(let i = word.length - 1; i >= 0; i--) {
      let letter = word[i];
      if (vowels.includes(letter)) {
          return word.slice(0, i) + word.slice(i + 1);
      }
  }

  return word;
};



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'