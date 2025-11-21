let arr = [1, 2, 3, 4, 5, 6]
let key = 1;
function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == key) {
            return mid
        } else if (arr[mid] < key) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
}
let index = binarySearch(arr, key);
if (index === -1) {
    console.log("not found");
} else {
    console.log("found at index " + index);
}
