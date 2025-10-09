
let n = 4;
for (let i = n; i >= 1; i--) {
    let res = ""
    for (let j = 1; j <= n - i; j++) {
        res += " "
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        res += j
    }
    console.log(res)
}