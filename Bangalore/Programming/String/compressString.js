// Input: "aaabbc"
// Output: "a3b2c1"

let str = "aaabbc"
let res = ""
let c = 1
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        c++;
    } else {
        res += str[i] + c
        c = 1
    }
}
console.log(res)