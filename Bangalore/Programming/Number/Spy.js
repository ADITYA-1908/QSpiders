function spyNumber(n) {
    let sum = 0
    let prod = 1
    while (n != 0) {
        let mod = n % 10;
        sum = sum + mod;
        prod = prod * mod
        n = Math.floor(n / 10)
    }
    return sum === prod
}


let data = spyNumber(123)
if (data) {
    console.log("spy number number")
} else {
    console.log("Not a spy number number")
}