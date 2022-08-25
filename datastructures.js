'use strict'

// DATASTRUCTURES


// Array destructuring

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
};


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


let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

console.log(restaurant.categories)

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);



// nested destructuring 
const nested = [2,4, [5,6]];
// const [i, j] = nested;
const [i, , [j, k]] = nested;
console.log(i , j ,k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);



// destructuring objects


