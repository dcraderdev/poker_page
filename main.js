var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';



var obj = JSON.parse(text);

let personName = obj.name;
let personAge = obj.age;








// // JSON String

// '{"name":"John", "age":30, "car":null}'


// class Player {


// }



const obj = {name: "John", age: 30, city: "New York"};

const myJSON = JSON.stringify(obj);




// function Apple (type) {
//   this.type = type;
//   this.color = "red";
//   this.getInfo = getAppleInfo;
// }


// function getAppleInfo() {
//   return this.color + ' ' + this.type + ' apple';
// }


// var apple = new Apple('macintosh');
// apple.color = "reddish";
// alert(apple.getInfo());


// // {
// //   "_id": "4573475234234",
// //   "plummie_tag": "nraboy",
// //   "xp": 298347234,
// //   "falls": 328945783957,
// //   "steps": 438579348573,
// //   "collisions": 2345325,
// //   "losses": 3485,
// //   "wins": 3,
// //   "created_at": 3498534,
// //   "updated_at": 4534534,
// //   "lifetime_hours_played": 5,
// //   "pineapples": 24532,
// //   "achievements": [
// //       {
// //           "name": "Super Amazing Person",
// //           "timestamp": 2345435
// //       }
// //   ],
// //   "inventory": {
// //       "outfits": [
// //           {
// //               "id": 34345,
// //               "name": "The Kilowatt Huaulme",
// //               "timestamp": 2345345
// //           }
// //       ]
// //   }
// // }