let arr = [1, 2, 3, 2, 4, 1];
let n = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            n[n.length] = arr[i]
        }
    }
}
console.log(n)
