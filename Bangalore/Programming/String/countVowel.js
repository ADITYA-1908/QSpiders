function countVowel(s) {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            c++
        }
    }
    return c;
}
let str = "aditya"
let data = countVowel(str);
console.log("total vowel", data)
console.log("total consonent", str.length - data)