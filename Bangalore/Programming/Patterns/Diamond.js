
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
//     let res = "";
//     if (i <= n) {
//         for (let j = 1; j <= n - i; j++) {
//             res += " "
//         }
//         for (let j = 1; j <= i; j++) {
//             res += "* "
//         }
//     }
//     else {
//         for (let j = 1; j <= i - n; j++) {
//             res += " "
//         }
//         for (let j = 1; j <= n * 2 - i; j++) {
//             res += "* "
//         }
//     }
//     console.log(res)
// }


//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

// let n = 5;

// for (let i = 1; i <= n * 2 - 1; i++) {
//     let res = "";

//     let row = i <= n ? i : 2 * n - i;

//     for (let j = 1; j <= n - row; j++) {
//         res += " ";
//     }

//     for (let k = 1; k <= row * 2 - 1; k++) {
//         if (k === 1 || k === row * 2 - 1) {
//             res += "*";
//         } else {
//             res += " ";
//         }
//     }

//     console.log(res);
// }

//     1 
//    1 2 
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
//  1 2 3 4
//   1 2 3
//    1 2
//     1

let n = 5;
for (let i = 1; i <= n * 2 - 1; i++) {
    let res = "";
    if (i <= n) {
        for (let j = 1; j <= n - i; j++) {
            res += " "
        }
        for (let j = 1; j <= i; j++) {
            res += j + " "
        }
    }
    else {
        for (let j = 1; j <= i - n; j++) {
            res += " "
        }
        for (let j = 1; j <= n * 2 - i; j++) {
            res += j + " "
        }
    }
    console.log(res)
}