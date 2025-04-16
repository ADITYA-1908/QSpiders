// // 1)WAP to fins sum of the 3 digits
// function add(a) {
//   let sum = 0;
//   while (a != 0) {
//     let rem = a % 10;
//     sum += rem;
//     a = Math.floor(a / 10);
//   }
//   return sum;
// }

// let addition = add(11);
// console.log(addition);

// // 2) WAP to for doing operation on number
// function hof(x, y, task) {
//   console.log(task(x, y));
// }
// hof(30, 10, (a, b) => a + b);
// hof(30, 10, (a, b) => a - b);
// hof(30, 10, (a, b) => a * b);
// hof(30, 10, (a, b) => a / b);

// // 3) WAP to print 1  2 3 4 5
// let s = "";
// for (var i = 1; i <= 5; i += 1) {
//   s += i + " ";
// }
// console.log(s);

// // 4) input n=10     output=  2 4 6 8 10
// function even(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// even(10);

// // 4) input n=10     output=  1 3 5 7 9
// function even(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }
// even(10);
