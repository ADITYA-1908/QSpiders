Array.prototype.MyFilter = function (fn) {
    if (typeof fn != "function") {
        throw new Error(`${typeof fn} ${fn} is not a function`)
    }
    let op = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            op[op.length] = this[i]
        }
    }
    return op;
}
let arr = [1, 2, 11, 22, 5];
let res = arr.MyFilter((ele) => ele > 5);
console.log(res);


