let arr = [5, 9, 8, 6, 4, 10]
let highest = -  Infinity
let secoundHighest = -  Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
        secoundHighest = highest;
        highest = arr[i]
    } else if (arr[i] > secoundHighest && arr[i] != highest) {
        secoundHighest = arr[i]
    }

}
console.log(secoundHighest);