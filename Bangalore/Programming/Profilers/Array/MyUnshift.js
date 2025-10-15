//! Add only one Element at the first 
// Array.prototype.MyUnshift = function (a) {
//     for (let i = this.length; i > 0; i--) {
//         this[i] = this[i - 1]
//     }
//     this[0] = a;
//     return this.length;
// }

// let arr = [1, 2, 3, 4]
// console.log(arr)
// arr.MyUnshift(0)
// console.log(arr)

//! Add more then one Element at the first 
Array.prototype.MyUnshift = function (...a) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + a.length] = this[i];
    }

    for (let j = 0; j < a.length; j++) {
        this[j] = a[j]
    }

    return this.length;

}

let arr = [1, 2, 3, 4]
console.log(arr)
arr.MyUnshift(11, 22)
console.log(arr)
