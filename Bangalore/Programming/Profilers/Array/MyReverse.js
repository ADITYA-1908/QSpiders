Array.prototype.MyReverse = function () {
    let l = 0;
    let r = this.length - 1;
    while (l < r) {
        let temp = this[l];
        this[l] = this[r];
        this[r] = temp;
        l++;
        r--;
    }
    return this;
};

let arr = [1, 2, 3, 4, 5];
arr.MyReverse();
console.log(arr); 
