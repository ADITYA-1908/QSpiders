function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n; 
}

function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true; 
}

function range(s, e, operation) {
    for (let i = s; i < e; i++) {
        if (operation(i)) {
            console.log(i);
        }
    }
}
range(1, 10, isPrime);
range(1, 10, isPerfect);
