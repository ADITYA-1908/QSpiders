let c = 0
function isPerfect(n) {
    for (let i = 1; i <= n; i++) {
        if (i % n == 0) {
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
    console.log("not a perfect")
}