// console.log("START");

// setTimeout(function () {
//   console.log("Timer ended");
// }, 0);

// Promise.resolve("Promsie Resolved").then(function (data) {
//   console.log(data);
// });

// console.log("END");

// OUTPUT -> START -> END -> Timer ended -> Promise Resolved

// var anyVar = "Hello World";

// console.log(typeof anyVar); // string

// anyVar = 201;

// console.log(typeof anyVar); // number

// var fn = function add(n1, n2) {
//     return n1 + n2;
// }

// var user = {
//     getDetails: function () {
//         return "Hello, this is John!"
//     }
// }

// var anyVar = null;

// console.log(typeof anyVar); // ?

// console.log(anyVar === undefined); // ?

// var x = "20";

// var y = 20;

// console.log(x === y); //

// function demoFn(arr) {
//   if (arr.length > 2) {
//     let LOAD = "LOADING";
//     console.log(FLASH); // undefined
//   } else {
//     let FLASH = "FLASHING";
//   }
// }

// demoFn([1, 2, 3, 4]);

// const LUCKY_NUMBER = Math.round(Math.random() * 100);

// console.log(LUCKY_NUMBER);

// const user = {
//   name: "John Doe",
// };

// Case 1
// user = {
//   name: "Jenny Alice",
// };

// Case 2
// user.name = "Jack D";

// user.email = "test@test.com";

// console.log(user); // { name : "Jack D." }

// const friends = ["Monika", "Chandler", "Ross"];

// friends.push("Joe");

// console.log(friends.length); // ?

// let x = 2 ** 4;

// console.log(x); // ?

// let y = 10;

// let result = y++ + ++y;

// console.log(result); // ?

// y++ = 10

// +

// ++y 12

//     = 22

// Short Curcuit Operator - &&

// let x = 101;

// let y = 103;

// let z = 105;

// let result = null;

// result = x > y && ( "X is greater" ) ;

// result = x < y && "Y is greater than Y";

// console.log("RESULT : ", result);

// result = x < y ? "X is greater" : null;

// let data = ["A", "B", "C"];

// function demo(data) {
//   console.log("Hello World");
//   return data;
// }

// const result = data.length !== 0 && demo(data);

// console.log("DATA : ", result);

// Back tick (` ` || " " || ' ')
// - Embed the variables within string without (+) operator
// - Multiline String without (\n) operator

// let username = "John Doe";

// let userAge = 32;

// let greet = ` Hello ${username}!!

// I'm ${userAge} years old.

// `;

// console.log(greet);

// Type Conversion (Explicit) vs Coercion (Implicit)

// let x = "20";
// let y = 10;

// console.log(parseInt(x) + y); // ?

// console.log(x - y); // ?

// For...of

// let fruits = ["Apple", "Banana", "Kiwi", "Oranges"];

// for (let item of fruits) {
//   console.log("ITEM : ", item);
// }

let user = {
  name: "John",
  email: "john@test",
  age: 32,
};

for (let item in user) {
  console.log(`${item} : ${user[item]}`);
}
