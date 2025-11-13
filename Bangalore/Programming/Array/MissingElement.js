//find missing 
// let arr = [1, 2, 3, 4, 5, 7]
// let n = 7
// let total = (n * (n + 1)) / 2
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(total - sum);

//find all missing 
let arr = [2, 4, 7, 9]
let min = Math.min(...arr)
let max = Math.max(...arr)
let arr2 = []
for (let i = min; i < max; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
            found = true
            break;
        }
    }
    if (!found) {
        arr2[arr2.length] = i
    }
}

console.log(arr2);


