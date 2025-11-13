let str = "aditya"
let unique = ""
for (let i = 0; i < str.length; i++) {
    let f = false;
    for (let j = 0; j < unique.length; j++) {
        if (str[i] === unique[j]) {
            f = true
        }
    }
    if (!f) {
        unique += str[i]
    }
}
console.log(unique)