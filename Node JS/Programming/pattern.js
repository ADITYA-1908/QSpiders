//!  12345
//!  12345
//!  12345
//!  12345
//!  12345

//  for(let i=1;i<=5;i++){
//     let result=''
//     for(let j=1;j<=5;j++){
//     result+=j
//     }
//     console.log(result)
//  }

//! 11111
//! 22222
//! 33333
//! 44444
//! 55555

// for(let i=1;i<=5;i++){
//         let result=''
//         for(let j=1;j<=5;j++){
//         result+=i
//         }
//         console.log(result)
//      }
//!  or

//  for(let i=1;i<=5;i++){
//     let result=''
//     for(let j=1;j<=5;j++){
//     result+= `${i} `
//     }
//     console.log(result)
//  }

//! 54321
//! 54321
//! 54321
//! 54321
//! 54321
//  for(let i=1;i<=5;i++){
//     let result=''
//     for(let j=5;j>=1;j--){
//     result+=j
//     }
//     console.log(result)
//  }

//! 55555
//! 44444
//! 33333
//! 22222
//! 11111
// for(let i=5;i>=1;i--){
//         let result=''
//         for(let j=1;j<=5;j++){
//         result+=i
//         }
//         console.log(result)
//      }

//! 1
//! 12
//! 123
//! 1234
//! 12345
// for(let i=1;i<=5;i++){
//         let result=''
//         for(let j=1;j<=i;j++){
//         result+=j
//         }
//         console.log(result)
//      }

// ! 12345
// ! 1234
// ! 123
// ! 12
// ! 1
// for (let i = 5; i >= 1; i--) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result += j;
//   }
//   console.log(result);
// }

//! 1
//! 1 *
//! 1 * 3
//! 1 * 3 *
//! 1 * 3 * 5

// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       result += "*";
//     } else {
//       result += j;
//     }
//   }
//   console.log(result);
// }

//! 1 * 3 * 5
//! 1 * 3 * 5
//! 1 * 3 * 5
//! 1 * 3 * 5
//! 1 * 3 * 5

// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   for (let j = 1; j <= 5; j++) {
//     if (j % 2 === 0) {
//       result += " * ";
//     } else {
//       result += j;
//     }
//   }
//   console.log(result);
// }

//! 1 2 3 4 5
//! * * * * *
//! 1 2 3 4 5
//! * * * * *
//!1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   for (let j = 1; j <= 5; j++) {
//     if (i % 2 == 0) {
//       result += "*";
//     } else {
//       result += j;
//     }
//   }
//   console.log(result);
// }

// for (let i = 1; i < 5; i++) {
//   let res = "";
//   let c = 0;
//   if (i % 2 === 0) {
//     res = "*".repeat(5);
//   } else {
//     res = " ".repeat(5).replace(/./g, () => `${++c}`);
//   }
//   console.log(res);
// }

//! 1
//! 1 2
//! 1 2 3
//! 1 2 3 4
//! 1 2 3 4 5
//! 1 2 3 4
//! 1 2 3
//! 1 2
//! 1

//1-->way
// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   console.log(result);
// }
// for (let i = 4; i >= 1; i--) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   console.log(result);
// }

//2--> way
// let n = 5;
// for (let i = 1; i <= 2 * n - 1; i++) {
//   let res = "";
//   if (i <= n) {
//     for (let j = 1; j <= i; j++) {
//       res += j + "";
//     }
//   } else {
//     for (let j = 1; j <= 2 * n - i; j++) {
//       res += j + "";
//     }
//   }
//   console.log(res);
// }

//    1
//   12
//  123
// 1234
//12345

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let res = "";

//   for (let j = 1; j <= n - i; j++) {
//     res += " ";
//   }

//   for (let s = 1; s <= i; s++) {
//     res += s;
//   }

//   console.log(res);
// }

//    1
//   21
//  321
// 4321
//54321
// 4321
//  321
//   21
//    1
// let n = 5;
// for (let i = 1; i < 2 * n; i++) {
//   let r = "";
//   if (i <= n) {
//     for (let j = 1; j <= n - i; j++) {
//       r += " ";
//     }
//     for (let k = i; k >= 1; k--) {
//       r += k;
//     }
//   } else {
//     for (let j = 1; j <= i - n; j++) {
//       r += " ";
//     }

//     for (let k = 2 * n - i; k >= 1; k--) {
//       r += k;
//     }
//   }
//   console.log(r);
// }

//) how memory allocation happensa in JS
//find all inbuilt array method in js with example
//push-pop-shift-unshift-sort-reverse-slice-splice-concat-joinindexOf-lastIndexOf
let arr = [1, 2, 3, 4];
// let index1 = arr.indexOf(2);
// console.log(index1);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// arr.sort();
// console.log(arr)
// arr.reverse();
// console.log(arr);
// let sl = arr.slice(0, 3);
// console.log(sl);
// let sp = arr.splice(1, 2);
// console.log(sp);
// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// console.log(result);
// let arr2 = [1, 2, 3, 2];
// let index2 = arr2.lastIndexOf(2);
// console.log(index2);
// let ar = ["a", "b", "c"];
// let result = ar.join("-");
// console.log(result)

//find all inbuilt string method in js with example
let str = "Hello";
// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.indexOf("o"));
// console.log("A".charCodeAt(0));
// console.log(str.at(-1));
// console.log(str.concat(" World"));
// console.log(str.includes("l"));
// console.log(str.startsWith("H"));
// console.log(str.endsWith("o"));
// console.log(str.slice(1, 4));
// console.log(str.substring(0, 3));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let s = "   hello     ";
// console.log(s.trim());
// let s1 = "hello       ";
// console.log(s1.trimStart());
// let ss = "hello       ";
// console.log(ss.trimEnd());
// let sen = "hello aditya";
// console.log(sen.replace("aditya", "subham"));
// let obj = "apple,banana,grape";
// console.log(obj.s`plit(","));
console.log(str.repeat(5));
// A
// A B
// A B C
// A B C D

// for (let i = 0; i <= 5; i++) {
//   let res = "";
//   for (let j = 0; j < i; j++) {
//     res += String.fromCharCode(65 + j) + " ";
//   }
//   console.log(res);
// }

// a
// a b
// a b c
// a b c d

// for (let i = 0; i <= 5; i++) {
//   let res = "";
//   for (let j = 0; j < i; j++) {
//     res += String.fromCharCode(97 + j) + " ";
//   }
//   console.log(res);
// }
