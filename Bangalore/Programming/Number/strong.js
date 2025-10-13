function reverse(n) {
    let sum = 0
    while (n != 0) {
        let fact = 1
        let mod = n % 10;
        for (let i = 1; i <= mod; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10)
    }
    return sum
}

let num = 145
let data = reverse(num)
if (data == num) {
    console.log("strong number")
} else {
    console.log("Not a Strong number")
}