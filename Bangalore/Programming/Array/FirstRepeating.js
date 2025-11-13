function firstReapeting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return -1
}


let arr = [12, 1, 4, 3, 1, 2, 4]
console.log(firstReapeting(arr))