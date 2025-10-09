// *    *
// **  **
// ******
// **  **
// *    *

let n = 5
for (let i = 1; i <= n; i++) {
    let res = "";
    if (i <= Math.ceil(n / 2)) {
        for (let j = 1; j <= i; j++) {
            res += "*"
        }
    } else {
        for (let j = 1; j <= n - i + 1; j++) {
            res += "*"
        }
    }
    console.log(res)
}
