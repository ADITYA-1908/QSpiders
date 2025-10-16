Array.prototype.MyReduce = function (fn, i) {
    if (typeof fn !== "function") {
        throw new TypeError(`${typeof fn} ${fn} is not a function`);
    }

    let acc = i;
    let s = 0;

    for (let i = s; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }
    return acc;
};


let arr = [10, 3, 2, 5];
let sum = arr.MyReduce((acc, curr) => acc + curr, 0);
console.log(sum);

