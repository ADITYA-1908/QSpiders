Array.prototype.MyFind = function (fn) {
    if (typeof fn !== "function") {
        throw new TypeError(`${typeof fn} ${fn} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return this[i];
        }
    }
};


let arr = [1, 2, 11, 33, 5];
let res = arr.MyFind((ele) => ele > 5);
console.log(res); 
