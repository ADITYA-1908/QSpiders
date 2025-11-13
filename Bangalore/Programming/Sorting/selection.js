function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let k = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[k]) {
                k = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;

    }

    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // [11, 12, 22, 25, 64]
