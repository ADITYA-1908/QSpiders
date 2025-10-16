Array.prototype.MyforEach = function (fn) {
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function')
    }
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i, this)
    }

}
let arr = [1, 2, 3]
arr.MyforEach((e, i, arr) => {
    console.log(e, i, arr)
})