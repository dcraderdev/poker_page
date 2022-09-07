// WEEK 3

// inline callback function

let arr = ['a','bsss','cddd']

arr.forEach(function(parameter1) {
  //block to do to each ele of the array
  console.log(parameter1);
})

//arrow function example
arr.forEach((ele) => {console.log(ele);})



console.log('------');
let newArr = arr.filter((ele) => ele.length > 1)

console.log(newArr);

let nums = [1,2,3,4,5]

newMap = nums.map((num) => num * 2)

objArr = [
  obj1 = {name: 'Donovan'},
  obj2 = {name: 'Jim'},
  obj3 = {name: 'Bob'},
]


console.log(newMap);


console.log(objArr);
let objNames = objArr.map((obj) => console.log(obj.name))


// First class object
