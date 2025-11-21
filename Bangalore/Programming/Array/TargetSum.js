let arr = [2, 7, 11, 15, 5, 4]
let sum = []
let t = 9;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if ((arr[i] + arr[j]) === t) {
            sum[sum.length] = arr[i];
            sum[sum.length] = arr[j];
        }
    }

}
console.log(sum)