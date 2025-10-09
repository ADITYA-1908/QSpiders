let arr = [21, 2, 93, 24, 15, 6]

let k = 21
function insertionSort(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            return i;
        }
    }
    return -1
}
let isFound = insertionSort(arr, k)
if (isFound === -1) {
    console.log("not found")
} else {
    console.log(`found at ${isFound} index`)
}