function isPerfect(n) {
    let c = 0
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            c += i;
        }
    }
    return c;
}
let n = 6
const data = isPerfect(n)
console.log(data)
if (data == n) {
    console.log("Perfect")
} else {
    console.log("Not a perfect")
}