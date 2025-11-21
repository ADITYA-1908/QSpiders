let str = "mississsippi"

let freq = {}

for (let i of str) {
    freq[i] = (freq[i] || 0) + 1
}

let m = 0;
let ch = ""
for (let i in str) {
    let c = str[i]
    if (freq[c] > m) {
        m = freq[c]
        ch = c
    }
}
console.log(ch)

// console.log(max)