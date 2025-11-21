let arr = [0, 1, 0, 3, 12];
let c = 0;

for (let i in arr) {
    if (arr[i] != 0) {
        let t = arr[c]
        arr[c] = arr[i]
        arr[i] = t
        c++
    }
}
console.log(arr);