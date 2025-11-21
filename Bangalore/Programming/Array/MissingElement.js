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
let min = arr[0]
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    if (arr[i] > max) {
        max = arr[i]
    }

}
let arr2 = []
for (let i = min; i < max; i++) {
    let flag = false
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
            flag = true
            break
        }
    }
    if (!f) {
        arr2[arr2.length] = i
    }
}

console.log(arr2);


