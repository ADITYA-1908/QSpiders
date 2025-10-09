// *
// **
// ***
// ****
// ***
// **
// *

let n = 7
let mid = Math.ceil(n / 2)
for (let i = 1; i <= n; i++) {
    let res = ""
    let limit = i <= mid ? i : n - i + 1
    for (let j = 1; j <= limit; j++) {
        res += "*"
    }
    console.log(res)
}


// let n = 7
// for (let i = 0; i < n; i++) {
//     let res = ""
//     if (i < n / 2) {
//         for (let j = 0; j <= i; j++) {
//             res += "*"
//         }
//     }
//     else {
//         for (let j = 1; j < n - i + 1; j++) {
//             res += "*"
//         }
//     }
//     console.log(res)
// }

// let n = 7
// for (let i = 0; i <= n; i++) {
//     let res = ""
//     if (i < n / 2) {
//         res += "*".repeat(i)
//     } else {
//         res += "*".repeat(n - i + 1)
//     }
//     console.log(res)
// }

// 1
// 22
// 333
// 4444
// 555
// 66
// 7

// let n = 7
// for (let i = 0; i <= n; i++) {
//     let res = ""
//     if (i < n / 2) {
//         res += String(i).repeat(i)
//     } else {
//         res += String(i).repeat(n - i + 1)
//     }
//     console.log(res)
// }


// 1
// 21
// 321
// 4321
// 321
// 21
// 1

// let n = 7;
// let mid = Math.ceil(n / 2);

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     let limit = i <= mid ? i : n - i + 1;
//     for (let j = limit; j >= 1; j--) {
//         row += j;
//     }
//     console.log(row);
// }


