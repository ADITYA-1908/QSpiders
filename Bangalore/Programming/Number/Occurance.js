function Occurance(arr) {
    freq = {}
    for (let i of arr) {
        freq[i] = (freq[i] || 0) + 1
    }
    console.log(freq)

    for (let i in freq) {
        console.log(`${i} Occure ${freq[i]} times`)
    }
}

let arr = [1, 2, 3, 2, 1, 5, 2, 0, 8, 2]


Occurance(arr)