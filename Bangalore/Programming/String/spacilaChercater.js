function countSpacilaCheracter(s) {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= 0 && ch <= 9)) {
            continue;
        }
        c++
    }
    return c;
}
let str = "aditya@gmail.com"
let data = countSpacilaCheracter(str);
console.log(data)