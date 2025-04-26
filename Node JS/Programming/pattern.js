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
//     *
//    ***
//   *****
// let r = 5;
// for (let i = 1; i <= r; i++) {
//   let l = "";

//   l += " ".repeat(r - i);
//   l += "*".repeat(2 * i - 1);

//   console.log(l);
// }

//     *
//    ***
//   *****
//    ***
//     *
// let r = 5;
// let m = Math.ceil(r / 2);

// for (let i = 1; i <= r; i++) {
//   let l = "";

//   if (i <= m) {
//     l += " ".repeat(m - i);
//     l += "*".repeat(2 * i - 1);
//   } else {
//     let j = r - i + 1;
//     l += " ".repeat(m - j);
//     l += "*".repeat(2 * j - 1);
//   }

//   console.log(l);
// }
// *
// ***
// *****
// *******
// *******
// *****
// ***
// *
// let r = 8;
// let m = Math.ceil(r / 2);

// for (let i = 1; i <= r; i++) {
//   let l = "";

//   if (i <= m) {
//     l += "*".repeat(2 * i - 1);
//   } else {
//     let j = r - i + 1;

//     l += "*".repeat(2 * j - 1);
//   }

//   console.log(l);
// }

let r = 8;
let m = Math.ceil(r / 2);

for (let i = 1; i <= r; i++) {
  let l = "";

  if (i <= m) {
    l += "*".repeat(2 * i - 1);
  } else {
    let j = r - i + 1;

    l += "*".repeat(2 * j);
  }

  console.log(l);
}

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
