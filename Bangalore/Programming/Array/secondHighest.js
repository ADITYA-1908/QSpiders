let arr = [5, 9, 8, 6, 4, 10]
let high = -Infinity
let second = -Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
        second = high
        high = arr[i]
    } else {
        if (arr[i] > high && arr[i] != high) {
            high = arr[i]
        }
    }
}
console.log(second);