let arr = [5, 9, 8, 6, 4, 10]
let smallest = Infinity
let secoundSmallest = Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secoundSmallest = smallest;
        smallest = arr[i]
    } else if (arr[i] < secoundSmallest && arr[i] != smallest) {
        secoundSmallest = arr[i]
    }

}
console.log(secoundSmallest);