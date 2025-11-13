function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            while (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = t
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

let arr = [23, 11, 10, 5, 2]

console.log(bubbleSort(arr))