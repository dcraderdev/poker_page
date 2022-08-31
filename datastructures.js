'use strict';

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

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};





// OPTIONAL CHAINING

// WITH optional chaining (?)

console.log(restaurant.openingHours.mon?.open);
// will return undefined because it doesnt exist


// rest pattern and parameters
// the rest pattern uses similar syntax as the spread operator but instead the rest operator
// collects elements into an array

//spread operator
const arr5 = [1, 2, ...[3, 4]];

//rest operator
const [ab, bc, ...others] = [1, 2, 3, 4, 5]

console.log(ab, bc, others);
console.log(ab);
console.log(bc);
console.log(others);

const [pizza, ,risotto ,focaccia,  ...otherFood] =[...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza ,risotto ,focaccia ,otherFood);
console.log(otherFood);
console.log(pizza);


// spread operator on objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// spread operator on functions
const add = function (...numbers) {
  console.log(numbers);
}

add(2, 3);
add(2, 3, 4, 5, 6);

const xx = [23, 7, 5];
add(...xx)


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')



// destructuring objects

const { name2, openingHours, categories } = restaurant;

// console.log(name2, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const { menu2 = [], starterMenu: starters = [] } = restaurant;

console.log(menu2, restaurant);

console.log(restaurant);

// mutating variables
let aa = 111;
let bb = 999;
const obj = { aa: 23, bb: 27, cc: 14 };

// in order ot mutate a variable we have to wrap our destructuring assignment into parentheses
// so {a, b} = obj ; gets wrapped in ()
({ aa, bb } = obj);

console.log(aa, bb);

// console.log(restaurantName, hours, tags);
// console.log(restaurant);

// destructuring is breaking down a is to break a complex data structure down
// into a smaller data structure like a variable.

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

console.log(a, b, c, c, c, c);
console.log(x, y, z, a, b, c, c);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.categories);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// spread operator (...)

const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);
//^^ this is slow and tedious to write out

const newArr2 = [1, 2, ...arr2];
console.log(newArr2);


console.log(restaurant.mainMenu);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];


// restaurant.orderPasta(...ingredients)

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);





// LOOPING ARRAYS - THE FOR - OF LOOP

for (const item of menu) {console.log(item)};

// ES6 Enhanced Object literals
// openingHours, 




console.log('-=-=-=--=--=-=-=--=-=-=');


// LOOPING OBJECTS
// Object keys, values, and entries

for (const day of Object.keys(openingHours)) {
  console.log(day);
}


 //Looping thru Property NAMES/KEYS
const properties = Object.keys(openingHours)
console.log(properties);


let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr);


 //Looping thru Property VALUES
 const values = Object.values(openingHours)
 console.log(values);


const entries = Object.entries(openingHours)
console.log(entries);


// for (const x of entries) {
  // destructured to [key, value]
// for (const [key, value] of entries) {
  // destructured to [key, {open, close}]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}





// SHORT CIRCUITING LECTURE

// Use ANY data type, return ANY data type,

// short circuiting with ||
console.log(3 || 'Donovan');    // 3
console.log('' || 'Donovan');   // Donovan
console.log(true || '0');       // true 
console.log(undefined || null); // undefined
console.log(0 || null); // null

// returns the first truthy value




// short circuiting with &&
console.log(3 && 'Donovan');
console.log('' && 'Donovan');
console.log(true && '0');
console.log(undefined && null);

// returns the first falsey  value


// The Nullish Coalescing Operator(??) -- treats 0 and '' (empty string) as if they were truthy values

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);


const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// treats 0 and '' (empty string) as if they were truthy values



const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Gio Rossi'
}


// logical assignment operators
// very similar to +=, -=, *=, /=

rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10

//OR assignment operator
rest1.numGuests ||= 10

// console.log(rest1);
// console.log(rest2);


//AND assignment operator
rest1.owner &&= '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);




// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team(variables'players1'and 'players2')
// 2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goal keeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'all Players' containing all players of both teams(22 players)
// 4. During the game,Bayern Munich(team1)used 3 substitute players.So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
// 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀



const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
  [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
  ], [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
  ], ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  }, };


  // 1.
const [players1, players2] = game.players
// console.log(players1);
// console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1
// console.log(gk);
// console.log(fieldPlayers);

// 3.
const allPLayers = [...players1, ...players2]
// console.log(allPLayers);

// 4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);


 // 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')

 const {odds: {team1, x: draw, team2}} = game

//  console.log(team1);
//  console.log(draw);
//  console.log(team2);


 // 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

 const printGoals = function (...names) {
   console.log(`${names.length} goals were scored by`);
  console.log(...names);
 }

// printGoals('joey','chris','issac','henry','rich');

 // 7. The team with the lower odd is more likely to win.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log('team1 is gonna win it!');
team1 > team2 && console.log('team2 is gonna win it!');


// OPTIONAL CHAINING 

// say we wanted to get the opening hours for monday

console.log(restaurant.openingHours.mon);
// returns undefined 

// console.log(restaurant.openingHours.mon.open);
// returns an error becuase opening hours is undefined

// we can prevent an error by checking if a property exists 
// simliar to an if-then statement
console.log(restaurant?.openingHours?.mon?.open);
// if restaurant exists
// if openingHours exists
// if mon exists
// return open properties from restaurant.openingHours.mon.open

const days = ['mon','tues','wed','thu','fri','sat','sun']

for (const day of days) {
  // console.log(day);
  // short circuiting works here if our optional chaining returns undefined but we need to use the nullish coalescing operator (??) in case there is a 0 returned
  // const open = restaurant.openingHours[day]?.open || 'Closed'
  const open = restaurant.openingHours[day]?.open ?? 'Closed'  
  // console.log(`On ${day} we open at ${open}`);
}

// optional chaining also works on methods and arrays

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Does not exist');
// ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Does not exist');
// Does not exist

// Arrays
const users = [{name: 'Donovan', email: 'myEmail@email.io'}]


console.log(users[0]?.name ?? 'User array empty')
console.log(users[1]?.name ?? 'User array empty')









// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

console.log(game.scored);

// let gameValues = game.scored.values()
// let gameEntries = game.scored.entries()

// let gameValues = game.values()
let gameEntries = Object.entries(game.scored)
let gameValues = Object.values(game.scored)


console.log(gameValues);
console.log(gameEntries);

// for (const [i, names] of game.scored) {
//   console.log(`Goal ${names}`);
// }


for (const [i, player] of game.scored.entries()){
  console.log(`Goal #${i+1}: ${player}`);
}


// 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)

// const odds = game.odds

const odds = Object.values(game.odds)
const teamz = Object.entries(game.odds)

console.log(odds);
console.log(teamz);


function sum(...odds){
  let sum = 0
  for(let i = 0; i < odds.length; i++){
    console.log(odds[i]);
   sum += odds[i]
  }
  return sum
}

console.log(sum([odds]));

// const odds = [numbers1, numbers2, numbers3]
console.log(sum(odds)/odds.length);


let average = 0;
for (const odd of odds){
  average += odd
   average /= odds.length
  console.log(average);
}





// 3. Print the 3 odds to the console,but in a nice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }


// for(const [team, game.odds] of odds) {
//   console.log(`team ${team} has odds ${odds}`);
// }
// function oddsEachTeam()


// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK 😀
