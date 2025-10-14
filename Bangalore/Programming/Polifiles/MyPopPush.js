//pop last element and push new element at last
Array.prototype.MypopPush = function (a) {
    let op = this[this.length - 1];
    console.log(op)
    this[this.length - 1] = a;
    return this.length;

}
let arr = [1, 2, 3, 4]
arr.MypopPush(5);
console.log(arr)

//shiftpop
