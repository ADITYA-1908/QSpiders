// let str = "I love JavaScript programming"
// let word = str.split(" ");
// let longest = ""
// for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longest.length) {
//         longest = word[i]
//     }
// }
// console.log(longest)


//!without in built
let str = "I love JavaScript programming";

let c = ""
let l = ""

for (let i = 0; i <= str.length; i++) {
    if (i < str.length && str[i] !== " ") {
        c += str[i]
    } else {

        if (c.length > l.length) {
            l = c;
        }
        c = "";
    }
}
console.log(l)