let str = "apple";
let freq = {};
for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1
}
console.log(freq);

for (let i in freq) {
    console.log(`${i} comes ${freq[i]} times`)
}