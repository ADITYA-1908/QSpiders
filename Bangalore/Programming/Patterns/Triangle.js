//! Pascal trinagle
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let res = ""
//     for (let j = 0; j <= n - i; j++) {
//         res += " "
//     }
//     let num = 1;
//     for (let j = 0; j <= i; j++) {
//         res += num + " ";
//         num = num * (i - j) / (j + 1)
//     }
//     console.log(res)
// }


//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let res = ""
//     for (let j = 0; j <= n - i; j++) {
//         res += " "
//     }
//     for (let j = 0; j <= i; j++) {
//         res += "*" + " ";
//     }
//     console.log(res)
// }



//      *
//     * *
//    *   *
//   *     *
//  *       *

let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 0; j <= n - i; j++) {
        res += " "
    }
    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i) {
            res += "*"
        } else {
            res += " ";
        }
        res += " ";

    }
    console.log(res)
}


//      *
//     * *
//    *   *
//   *     *
//  * * * * *


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     res += " ".repeat(n - i);
//     for (let k = 1; k <= i; k++) {
//         if (k === 1 || k === i || i === n) {
//             res += "*"
//         } else {
//             res += " "
//         }
//         res += " "
//     }
//     console.log(res)
// }


//      *
//     ***
//    *****
//   *******
//  *********
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let res = ""
//     res += " ".repeat(n - i);
//     for (let k = 0; k < 2 * i + 1; k++) {
//         res += "*"
//     }
//     console.log(res)
// }

//    1
//   121
//  12321
// 1234321

// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     res += " ".repeat(n - i);
//     for (let k = 1; k <= i; k++) {
//         res += k;
//     }
//     for (let k = i - 1; k >= 1; k--) {
//         res += k;
//     }
//     console.log(res);
// }


//    1
//   321
//  54321
// 7654321
// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     res += " ".repeat(n - i);
//     for (let k = 2 * i - 1; k >= 1; k--) {
//         res += k;
//     }
//     console.log(res);
// }
