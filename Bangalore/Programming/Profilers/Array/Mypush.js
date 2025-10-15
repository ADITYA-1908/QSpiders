//! Add only one Element
// Array.prototype.myPush = function (e) {
//     this[this.length] = e
//     return this
// }

// let arr = [1, 2, 3, 4]
// arr.myPush(5)
// console.log(arr)

//! Add multiple Elements
Array.prototype.myPushMultiple = function (...e) {
    for (let i = 0; i < e.length; i++) {
        this[this.length] = e[i]
    }
    return this
}
let arr = [1, 2, 3, 4]
arr.myPushMultiple(5, 6, 7)
console.log(arr)