function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
let data = factorial(3)
console.log(data)