// //defoult function
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 1);

// !//anonomymous function
// const sum = function (a, b) {
//   console.log(a + b);
// };
// sum(1, 1);

// !//nested function
// const add = function (a, b) {
//   console.log("Addition:", a + b);
//   const sub = function () {
//     console.log("Subtraction:", a - b);
//   };
//   sub();
// };
// add(5, 3);

// !//IIFE
// (function (x, y) {
//   const sum = x + y;
//   console.log(sum);
// })(1, 1);

// !//HOF
// function sum(a, b, x) {
//   console.log(a + b);
//   x(5, 3);
// }
// function sub(c, d) {
//   console.log(c - d);
// }
// sum(3, 2, sub);
