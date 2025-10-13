function reverse(n) {
    let rev = 0;
    while (n != 0) {
        let mod = n % 10;
        rev = rev * 10 + mod;
        n = Math.floor(n / 10);
    }
    return rev;
}

const data = reverse(145);
console.log(data);
