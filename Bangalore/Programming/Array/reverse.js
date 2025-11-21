let arr = [10, 2, 30, 60, 50]
let res = []
for (let i = arr.length - 1; i >= 0; i--) {
    res[res.length] = arr[i]
}

console.log(res);