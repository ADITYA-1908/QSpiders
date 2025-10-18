
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let n = 5;
// for (let i = 1; i <= n * 2 - 1; i++) {
//     let res = ""
//     if (i < n) {
//         for (let j = 1; j <= n - i; j++) {
//             res += " "
//         }
//         for (let j = 1; j <= i; j++) {
//             res += "* "
//         }
//     } else {
//         for (let j = 1; j <= i - n; j++) {
//             res += " "
//         }
//         for (let j = 1; j <= n * 2 - i; j++) {
//             res += "* "
//         }
//     }

//     console.log(res)
// }


//!Prime
// function isPrime(n, i = 2) {
//     if (n <= 2) {
//         return false
//     }
//     if (n % 2 == 0) {
//         return false
//     }
//     if (i * i > n) {
//         return true
//     }
// }

// const data = isPrime(3)
// console.log(data)

//! Add more then one Element at the first
// Array.prototype.MyUnshift = function (...a) {
//     for (let i = this.length - 1; i >= 0; i--) {
//         this[i + a.length] = this[i];
//     }

//     for (let j = 0; j < a.length; j++) {
//         this[j] = a[j]
//     }

//     return this.length;

// }

// let arr = [1, 2, 3, 4]
// console.log(arr)
// arr.MyUnshift(11, 22)
// console.log(arr)





// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = ""
//     c = 1;
//     for (let j = 1; j <= n; j++) {
//         if (i === 1) {
//             res += j
//         }
//         if (j === 1) {
//             c += 1;

//         }
//         else {
//             res += ""
//         }
//     }
//     console.log(res)
// }

let n = 5
for (let i = 1; i <= n; i++)  {
    let res = ""
    for (let j = 1; j <= j; j++) {
        res += "*"
    }
    console.log("*")
}