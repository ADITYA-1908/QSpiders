//find unque elements
let arr = [10, 30, 20, 10, 30]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    let s = false
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            s = true
        }
    }
    if (!s) {
        arr2.push(arr[i])
    }
}
console.log(arr2);