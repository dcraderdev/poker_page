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
};


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




