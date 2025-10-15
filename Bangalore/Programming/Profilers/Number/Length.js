Number.prototype.findLength = function () {
    let count = 0;
    let num = Math.abs(this);
    if (num === 0) {
        return 1;
    }
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

let num = 0;
console.log(num.findLength());
