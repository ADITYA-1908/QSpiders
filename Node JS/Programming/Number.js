// //1) Even or odd number
// function evenOdd(n) {
//   console.log(n % 2 === 0 ? `${n} is a even` : `${n} is a odd`);
// }

// evenOdd(11);
// evenOdd(10);

// //2) WAP to print to find the largest number from 2 number

// function compair(a, b) {
//   console.log(a > b ? `${a} is larger then ${b}` : `${b} is larger then ${a}`);
// }
// compair(10, 11);
// compair(10, 111);

//3) WAP to print to find the largest number from 3 number

// function compair(a, b, c) {
//   console.log(
//     a > b && a > c
//       ? `${a} is larger ${b} and ${c}`
//       : b > c && b > a
//       ? `${b} is larger ${a} and ${c}`
//       : `${c} is larger ${a} and ${b}`
//   );
// }
// compair(10, 11, 12);
// compair(10, 111, 11);

// //4)Square of a number
// function square(n) {
//   console.log(`the square of ${n} is ${n * n}`);
// }
// square(2);
// square(4);

// 5)WAP to to convert a negative number to a positive number
// function isPositive(x) {
//   console.log(x * -1);
// }
// isPositive(-10);
// isPositive(-7);

//6) WAP to count how many digit presnt in a number
function countDigit(n) {
  let c = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    c++;
  }
  console.log(`Number of digits is ${c}`);
}
countDigit(1271);

//*)Reverse a number
// function reverseNumber(n) {
//     let d = n % 10;
//     r = r * 10 + d;
//     n = Math.floor(n / 10);
//   }
//   console.log(`Reversed number is ${r}`);
// }
// reverseNumber(1219);
