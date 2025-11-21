let str = "swiss"

let s = ""
let freq = {}
for (let i of str) {
    freq[i] = (freq[i] || 0) + 1
}

for (let i in freq) {
    if (freq[i] == 1) {
        //!for first
        // console.log(i)
        // break

        //!for all 
        s += i
    }
}
console.log(s)