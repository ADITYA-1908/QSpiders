//  ****
//   ***
//    **
//     *
//     *

// let n = 5
// for (let i = 1; i < n; i++) {
//     let res = "";
//     for (let j = 1; j < i; j++) {
//         res += " "
//     }
//     for (let s = 1; s < n - i + 1; s++) {
//         res += "*"
//     }
//     console.log(res)
// }


// 1234
//  123
//   12
//    1

// let n = 5
// for (let i = 1; i < n; i++) {
//     let res = "";
//     for (let j = 1; j < i; j++) {
//         res += " "
//     }
//     for (let s = 1; s < n - i + 1; s++) {
//         res += s
//     }
//     console.log(res)
// }



// 1111
//  222
//   33
//    4

// let n = 5
// for (let i = 1; i < n; i++) {
//     let res = "";
//     for (let j = 1; j < i; j++) {
//         res += " "
//     }
//     for (let s = 1; s < n - i + 1; s++) {
//         res += i
//     }
//     console.log(res)
// }


// ABCDE
//  ABCD
//   ABC
//    AB
//     A

// let n = 5
// for (let i = 0; i < n; i++) {
//     let res = "";
//     for (let j = 0; j < i; j++) {
//         res += " "
//     }
//     for (let s = 0; s < n - i; s++) {
//         res += String.fromCharCode(65 + s)
//     }
//     console.log(res)
// }



// AAAAA
//  BBBB
//   CCC
//    DD
//     E

let n = 5
for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < i; j++) {
        res += " "
    }
    for (let s = 0; s < n - i; s++) {
        res += String.fromCharCode(65 + i)
    }
    console.log(res)
}
