//! one element pop 
// Array.prototype.Mypop = function (e) {
//     let arr1 = []
//     for (let i = 0; i < e; i++) {
//         this.length = this.length
//         arr1.push(this.length)
//         this.length = this.length - 1
//     }
//     console.log(arr1)
// }
// let arr = [1, 2, 3, 4, 5, 6]
// arr.Mypop(2)
// console.log(arr)

//!Pop Many element 
Array.prototype.Mypop = function (e) {
    let op = this[this.length - 1]
    if (this.length > 0) {
        this.length = this.length - 1
    }
    return op
}
let arr = [1, 2, 3, 4, 5, 6]
arr.Mypop(1)
console.log(arr)

