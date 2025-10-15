function wordCount(s) {
    c = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            c++
        }
    }
    return c;
}
let str = "Hello i am aditya"
let data = wordCount(str)
console.log(data)