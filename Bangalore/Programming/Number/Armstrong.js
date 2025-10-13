function armstrong(n) {
    let sum = 0
    while (n != 0) {
        let fact = 1
        let mod = n % 10;
        fact = Math.pow(mod, 3)
        sum = sum + fact;
        n = Math.floor(n / 10)
    }
    return sum
}

let num = 153
let data = armstrong(num)
console.log(data)
if (data == num) {
    console.log("Armstrong number")
} else {
    console.log("Not an Armstrong number")
}