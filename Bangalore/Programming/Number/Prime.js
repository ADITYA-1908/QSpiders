function isPrime(n) {
    c = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            c++;
        }
    }
    return c;
}
let n = 3
const data = isPrime(n)
if (data == 2) {
    console.log("Prime")
} else {
    console.log("Not Prime")
}