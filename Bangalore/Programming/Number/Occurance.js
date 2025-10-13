function Occurance(arr, key) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            c++
        }

    }
    return c;
}

let arr = [1, 2, 3, 2, 1, 5, 2, 0, 8, 2]
let key = 2;

let data = Occurance(arr, key)
console.log(`Occure ${data} times`)