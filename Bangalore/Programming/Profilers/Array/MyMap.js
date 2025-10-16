Array.prototype.MyMap = function (callback) {

    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

let arr = [1, 2, 3, 4, 5];

let doubled = arr.MyMap(function (num) {
    return num * 2;
});

console.log(doubled);
