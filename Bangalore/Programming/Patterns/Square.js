// ****
// ****
// ****
// ****


let n = 4;
for (let i = 1; i <= n; i++) {
    let res = ""
    for (let j = 1; j <= n; j++) {
        res += "*"
    }
    console.log(res)
}

// ****
// *  *
// *  *
// ****
// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let res = ""
//     for (let j = 1; j <= n; j++) {
//         if (i == 1 || j == 1 || j == n || i == n) {
//             res += "*"
//         }
//         else {
//             res += " "
//         }
//     }
//     console.log(res)
// }