'use strict';


// OBJECTS AND DATASTRUCTURES


// OBJECTS PRACTICE


// Write a function called `keysInObject(obj)` that takes in an object and returns an array of all the keys within that Object.
function keysInObject(obj) {
  return Object.keys(obj)
}

// Write a function called `valuesInObject(obj)` that takes in an object and returns an array of all the values within that Object. 
function valuesInObject(obj) {
  return Object.values(obj)
}

// Write a function `setKeyInObject(obj, string, value)` that takes in three parameters. The first parameter is an object, the second parameter will be a string and the third parameter will be a value. Your job is to return the object adding the second parameter as a key using the third parameter as its value.

function setKeyInObject(obj, string, value) {
  obj[string] = value
  return obj
}

// Write a function `getFullName(person)` that takes in an person object
// and returns a string containing their full name.
function getFullName(person) {
  return person.firstName + ' ' + person.lastName
}


// Write a function `doesKeyExist(obj, key)` that takes in an object and a
// key and returns true if the key is inside the object and false if the
// key is not inside the object.


let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}

function doesKeyExist(obj, key) {
  return !(obj[key] === undefined)
  //return boolean
}
// console.log(doesKeyExist(obj1, 'course'));
// console.log(doesKeyExist(obj1, 'name'));



// Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of objects as the first parameter and a string as the second. The `keyInObjectArray` function will return `true` if any of the objects contains the `keyString` as a key within them, and `false` if not.


let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];


function keyInObjectArray(objArray, keyString) {
  for (const obj of objArray) {
    if (keyString in obj) {
      return true;
    }
  }
  return false
}



// console.log(keyInObjectArray(objArray, 'planet'));// => true
// console.log(keyInObjectArray(objArray, 'age'));// => true
// console.log(keyInObjectArray(objArray, 'food'));// => false
// console.log(keyInObjectArray(objArray, 'animal'));// => false





// Write a function `breakDownObj(obj)` that takes in an object as a parameter and returns an array containing:  all the keys from the object **and** all the values of the object.


// *** works ***
// function breakDownObj(obj) {
//   let arr = [];
//   for (const key in obj) {
//     console.log(key);
//     arr.push(key)
//   }
//   let values = Object.values(obj)
//   arr.push(values)
//   console.log(arr.flat());
// }



function breakDownObj(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(key)
  }
  for (const key in obj) {
    arr.push(obj[key])
}
return arr
}



// let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
// console.log(breakDownObj(object1));; // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// // console.log(breakValues(object1));; // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]


// let object2 = {location: 'NY', borough: 'Brooklyn'};
// console.log(breakDownObj(object2));; // => [ 'location', 'borough', 'NY', 'Brooklyn' ]





// Write a function `valuePair(obj1, obj2, key)` that takes in two objects and a key (string). The function should return an array containing the corresponding values of the objects for the given key.





function valuePair(obj1, obj2, key) {
  let arr = [];
  let check = key

  for (const key in obj1) {
    if(key === check) {
      arr.push(obj1[key])
    }
  }

  for (const key2 in obj2) {
    if(key2 === check) {
      arr.push(obj2[key2])
    }
  }

  return arr
}

let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
// console.log(valuePair(object1, object2, 'location')); ; // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name'));  ; // => [ 'One', 'Two' ]




// Write a function `appleCounter(appleObj)` that takes in an object containing a number of keys that have the word 'apple' contained within them. The `appleCounter` function will be in charge of returning the number of keys that contain the word "apple".

function appleCheck (key) {
  let appleSlice = key.slice(-5).toLowerCase()
  if (appleSlice === 'apple'){return true}
  return false
}


function appleCounter(appleObj) {
  let counter = 0
  for(const key in appleObj){
    if (appleCheck(key)) {counter++}
  }
  return counter
}



let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
// console.log(appleCounter(obj3)); ; // => 3




// Write a function named `restSum` that accepts all incoming parameters and sums them.
function restSum(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}

// console.log(restSum(3,5,6)); ; // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); ; // => 14
// console.log(restSum(0)); ; // => 0





// Write a function named `spreadItOut(array1, array2)` that accepts two arrays and uses *spread operator* syntax to return a single array. 
function spreadItOut(array1, array2) {
  return [...array1, ...array2]
}


// Examples:
// console.log(spreadItOut([3,5,6], [1,2,3])); ; // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => 14;
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];







// Write a function `arrayConverter(array)` that will intake an
// array as an argument and returns an object representing the count of each
// value in the array. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.
function arrayConverter(arr) {
  let newObj = {}
  for(let i = 0; i < arr.length; i++){
    if(newObj[arr[i]] === undefined) {
      newObj[arr[i]] = 1
    }
    else if(newObj[arr[i]] !== undefined) {
      newObj[arr[i]] += 1
    }
  }
  return newObj
}
// // Examples:
// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}





// Write a function `stringConverter(string)` that will intake a
// string as an argument and returns an object representing the count of each
// character in the string. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.


function stringConverter(string) {
  let wordArr = string.split('');
  let newObj = {};
  for(let i = 0; i < wordArr.length; i++){
    if(newObj[wordArr[i]] === undefined) {
      newObj[wordArr[i]] = 1
    }
    else if(newObj[wordArr[i]] !== undefined) {
      newObj[wordArr[i]] += 1
    }
  }
return newObj
}
// // Examples:
// console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
// console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
// console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}




// Write a function `countScores(people)` that takes in an array of score
// objects (people) as its input. A score object has two key-value pairs:
// the scorer (string) and a point value (number). `countScores(people)` should
// return an object that has key-value pairs listing each person who scored as a key
// and the sum of the total points for the game as their value.


// function countScores(people) {
//   let newObj = {}
//   let tempName;
//   let tempScore;
//   for(let i = 0; i < people.length; i++){


//   for (const keys in people[i]) {


// if(newObj[keys]===undefined){

// // if(newObj[people[i]]===undefined){
//   console.log(newObj[people[i]]);
// }


//     if (keys === 'name') {

//       tempName = people[i][keys]
//     } 
    

//     else if (keys === 'score') {
//       tempScore = people[i][keys]
//     }


//     newObj[tempName] = tempScore
//   }



// }


//   return newObj
// }




function countScores(people) {
let newObj = {};
  for(let i = 0; i < people.length; i++){
    let personObj = people[i]
    // console.log(people[i]);
    let nameVar = personObj.name
    let scoreVar = personObj.score

    // console.log(nameVar);
    // console.log(scoreVar);

    if(newObj[nameVar]){
      newObj[nameVar] += scoreVar;
    } else {
      newObj[nameVar] = scoreVar;
    }


  }
  return newObj
}



// Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2:
// let peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }













// PRACTICE TEST

// Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
// object, a string to be set as a key in that object, and a value. When invoked
// the function should assign the key and value arguments as a key value pair in
// the object argument ONLY IF the value is not already a value for a different
// key in the object. Return the mutated object.




function keyAdderUniqueVal(object, key, value) {
  for(const key in object) {
    if(object[key].includes(value)){return object}
  }  
  object[key] = value
return object
}

// See below for examples

let cat = { name: 'Willie', color: 'orange' };

// console.log(keyAdderUniqueVal(cat, "toy", "yarn")); ; // => {name: "Willie", color: "orange", toy: "yarn"}


// console.log(keyAdderUniqueVal(cat, "fruit", "orange")); ; // => {name: "Willie", color: "orange", toy: "yarn"}



// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }


// Write a function `duplicateCharMinCount(string, minCount)` that will takes
// a string as an argument and returns an array of characters that show up
// at least `minCount` number of times. The string will have at least one
// character.







function countCharacters(string) {
  let count = {}
  for(let i = 0; i < string.length; i++){
    if(count[string[i]]===undefined) {
      count[string[i]] = 1
    }else {
      count[string[i]] += 1
    }
  }
  return count
}

function duplicateCharMinCount(string, minCount) {
	let count = countCharacters(string);
  let newArr = [];

  for(const key in count){
    if(count[key] >= minCount){
      newArr.push(key)
    }
  }

  return newArr
}


// Examples:
// console.log(countCharacters("apple"));


// console.log(duplicateCharMinCount("apple", 2));  // ["p"]
// console.log(duplicateCharMinCount("banana", 2));  // ["a", "n"]
// console.log(duplicateCharMinCount("What about a longer string?", 3));  // ["a", "t", " "]





console.log('-=-=-=-=-=-=-=-=-=-=-=-=-');
// DATASTRUCTURES

// Array destructuring

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // OPTIONAL CHAINING

// // WITH optional chaining (?)

// console.log(restaurant.openingHours.mon?.open);
// // will return undefined because it doesnt exist

// // rest pattern and parameters
// // the rest pattern uses similar syntax as the spread operator but instead the rest operator
// // collects elements into an array

// //spread operator
// const arr5 = [1, 2, ...[3, 4]];

// //rest operator
// const [ab, bc, ...others] = [1, 2, 3, 4, 5];

// console.log(ab, bc, others);
// console.log(ab);
// console.log(bc);
// console.log(others);

// const [pizza, , risotto, focaccia, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, focaccia, otherFood);
// console.log(otherFood);
// console.log(pizza);

// spread operator on objects

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// spread operator on functions
const add = function (...numbers) {
  // console.log(numbers);
};

add(2, 3);
add(2, 3, 4, 5, 6);

const xx = [23, 7, 5];
add(...xx);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// destructuring objects

const { name2, openingHours, categories } = restaurant;

// console.log(name2, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// const { menu2 = [], starterMenu: starters = [] } = restaurant;

// console.log(menu2, restaurant);

// console.log(restaurant);

// // mutating variables
// let aa = 111;
// let bb = 999;
// const obj = { aa: 23, bb: 27, cc: 14 };

// // in order ot mutate a variable we have to wrap our destructuring assignment into parentheses
// // so {a, b} = obj ; gets wrapped in ()
// ({ aa, bb } = obj);

// console.log(aa, bb);

// // console.log(restaurantName, hours, tags);
// // console.log(restaurant);

// // destructuring is breaking down a is to break a complex data structure down
// // into a smaller data structure like a variable.

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(a, b, c, c, c, c);
// console.log(x, y, z, a, b, c, c);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.categories);

// // Receive 2 return values from a function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // spread operator (...)

// const arr2 = [7, 8, 9];
// const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
// console.log(badNewArr);
// //^^ this is slow and tedious to write out

// const newArr2 = [1, 2, ...arr2];
// console.log(newArr2);

// console.log(restaurant.mainMenu);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// // const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];

// // restaurant.orderPasta(...ingredients)

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// // LOOPING ARRAYS - THE FOR - OF LOOP

// for (const item of menu) {
//   console.log(item);
// }

// // ES6 Enhanced Object literals
// // openingHours,

// console.log('-=-=-=--=--=-=-=--=-=-=');

// LOOPING OBJECTS
// Object keys, values, and entries

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//Looping thru Property NAMES/KEYS
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);




//Looping thru Property VALUES


const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

// for (const x of entries) {
// destructured to [key, value]
// for (const [key, value] of entries) {
// destructured to [key, {open, close}]
for (const [key, { open, close }] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

// // SHORT CIRCUITING LECTURE

// // Use ANY data type, return ANY data type,

// // short circuiting with ||
// console.log(3 || 'Donovan'); // 3
// console.log('' || 'Donovan'); // Donovan
// console.log(true || '0'); // true
// console.log(undefined || null); // undefined
// console.log(0 || null); // null

// // returns the first truthy value

// // short circuiting with &&
// console.log(3 && 'Donovan');
// console.log('' && 'Donovan');
// console.log(true && '0');
// console.log(undefined && null);

// // returns the first falsey  value

// // The Nullish Coalescing Operator(??) -- treats 0 and '' (empty string) as if they were truthy values

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// // console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// // console.log(guestsCorrect);
// // treats 0 and '' (empty string) as if they were truthy values

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Gio Rossi',
// };

// // logical assignment operators
// // very similar to +=, -=, *=, /=

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// //OR assignment operator
// rest1.numGuests ||= 10;

// // console.log(rest1);
// // console.log(rest2);

// //AND assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// // console.log(rest1);
// // console.log(rest2);

// // Coding Challenge #1
// // We're building a football betting app (soccer for my American friends 😅)!
// // Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// // Your tasks:
// // 1. Create one player array for each team(variables'players1'and 'players2')
// // 2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goal keeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'all Players' containing all players of both teams(22 players)
// // 4. During the game,Bayern Munich(team1)used 3 substitute players.So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
// // 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// // GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log(game['score']);

// // 1.
// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// // console.log(fieldPlayers);

// // 3.
// const allPLayers = [...players1, ...players2];
// // console.log(allPLayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //  console.log(team1);
// //  console.log(draw);
// //  console.log(team2);

// // 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...names) {
//   console.log(`${names.length} goals were scored by`);
//   console.log(...names);
// };

// // printGoals('joey','chris','issac','henry','rich');

// // 7. The team with the lower odd is more likely to win.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.

// team1 < team2 && console.log('team1 is gonna win it!');
// team1 > team2 && console.log('team2 is gonna win it!');

// // OPTIONAL CHAINING

// // say we wanted to get the opening hours for monday

// console.log(restaurant.openingHours.mon);
// // returns undefined

// // console.log(restaurant.openingHours.mon.open);
// // returns an error becuase opening hours is undefined

// // we can prevent an error by checking if a property exists
// // simliar to an if-then statement
// console.log(restaurant?.openingHours?.mon?.open);
// // if restaurant exists
// // if openingHours exists
// // if mon exists
// // return open properties from restaurant.openingHours.mon.open

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   // short circuiting works here if our optional chaining returns undefined but we need to use the nullish coalescing operator (??) in case there is a 0 returned
//   // const open = restaurant.openingHours[day]?.open || 'Closed'
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   // console.log(`On ${day} we open at ${open}`);
// }

// // optional chaining also works on methods and arrays

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Does not exist');
// // ['Focaccia', 'Pasta']
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Does not exist');
// // Does not exist

// // Arrays
// const users = [{ name: 'Donovan', email: 'myEmail@email.io' }];

// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

// // Coding Challenge #2
// // Let's continue with our football betting app! Keep using the 'game' variable from before.
// // Your tasks:
// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// console.log(game.scored);

// // let gameValues = game.scored.values()
// // let gameEntries = game.scored.entries()

// // let gameValues = game.values()
// let gameEntries = Object.entries(game.scored);
// let gameValues = Object.values(game.scored);

// console.log(gameValues);
// console.log(gameEntries);

// // for (const [i, names] of game.scored) {
// //   console.log(`Goal ${names}`);
// // }

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal #${i + 1}: ${player}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)

// // const odds = game.odds

// // function sum(...odds){
// //   let sum = 0
// //   for(let i = 0; i < odds.length; i++){
// //     console.log(odds[i]);
// //    sum += odds[i]
// //   }
// //   return sum
// // }

// // console.log(sum([odds]));

// // // const odds = [numbers1, numbers2, numbers3]
// // console.log(sum(odds)/odds.length);

// const odds = Object.values(game.odds);
// const teamz = Object.entries(game.odds);

// console.log(odds);
// console.log(teamz);

// let sum = 0;
// for (const odd of odds) sum += odd;
// // console.log(`sum is ${sum}`);
// // console.log(`add ${odd}`);
// // console.log(`divide by ${odds.length}`);

// sum /= odds.length;

// console.log(sum);

// // 3. Print the 3 odds to the console,but in a nice formatted way,exactly like this:
// // Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// // for (const [key, {open, close}] of entries) {
// //   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// // }

// // for(const [team, game['odds'] of odds) {
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
//   console.log(`${teamStr}: ${odd}`);
// }
// // function oddsEachTeam()

// // 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //      {
// //        Gnarby: 1,
// //        Hummels: 1,
// //        Lewandowski: 2
// // }
// // GOOD LUCK 😀

// // destructuring and aliasing

// // let obj7 = {
// //   person: 'Donovan',
// //   animal: 'elephant'
// // };

// let { person, animal } = { person: 'Pat', animal: 'elephant' };

// console.log(person, animal);

// let { person:name, animal:species } = {
//   person: obj.person,
//   animal: obj.animal,
// };


// console.log(name, species);
// console.log(person, animal);


// person = 'Pat';




// let students = ['james', 'dani', 'pierre'];

// let [stud1,stud2 , stud3, stud4 = 'john'] = students
// // console.log(stud1);
// // console.log(stud1);
// // console.log(stud3);
// // console.log(stud4);



// // console.log([stud1, stud2] = [stud2, stud1]);




// // REST PARAMETER


// let yell = function(...strings){
//   let res = [];
//   for(let i = 0; i < strings.length; i++){
//     let ele = strings[i]
//     res.push(ele.toUpperCase())
//   }
//   return res.join(' ')
// }

// console.log(yell('james', 'dani', 'pierre'));


// //SPREAD PARAMETER

// let arr111 = [1,2,3]
// let arr222 = [4, 5, 6]
// let arr3 = [...arr111, ,...arr222]
// // console.log(arr3);


// let obj10 = { name: "don"}
// let obj11 = { name: "jon"}

// // let newArr3 = [...obj10]

// // console.log(newArr3);


// let newObj3 = {...arr111}

// // console.log(newObj3);


