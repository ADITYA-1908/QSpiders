let arr = [1, 2, 3, 2, 4, 1];
let unique = [];
for (let i = 0; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            found = true
            break
        }
    }
    if (!found) {
        unique[unique.length] = arr[i]
    }
}
console.log(unique);
