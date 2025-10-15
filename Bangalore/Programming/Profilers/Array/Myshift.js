//! Add only one Element at the first 
Array.prototype.myShift = function () {
    let op = this[0];
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i]
    }
    if (this.length > 0) {
        this.length = this.length - 1
    }
}

let arr = [1, 2, 3, 4]
console.log(arr)
arr.myShift()
console.log(arr)
