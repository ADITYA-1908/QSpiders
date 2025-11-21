let arr = [1, 2, 3, 2, 4, 1];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    let isUnique = false;

    for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
            isUnique = true;
            break;
        }
    }

    if (!isUnique) {
        arr2[arr2.length] = arr[i];
    }

}



console.log(arr2);
