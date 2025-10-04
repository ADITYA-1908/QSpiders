//! Pascal trinagle 
let n = 5;
for (let i = 0; i < n; i++) {
    let res = " ".repeat(n - i);
    let num = 1;
    for (let j = 0; j <= i; j++) {
        res += num + " "
        num = num * (i - j) / (j + 1)
    }
    console.log(res)
}