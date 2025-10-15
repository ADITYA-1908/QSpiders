Array.prototype.MySlice = function (start = 0, end = this.length) {
    let slicedArray = [];
    for (let i = start; i < end; i++) {
        slicedArray[slicedArray.length] = this[i];
    }
    return slicedArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sliced = arr.MySlice(3, 7)
console.log(sliced)