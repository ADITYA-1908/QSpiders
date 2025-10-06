
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 

let n = 5;
for (let i = 1; i <= n * 2 - 1; i++) {
    let res = ""
    if (i < n) {
        for (let j = 1; j <= n - i; j++) {
            res += " "
        }
        for (let j = 1; j <= i; j++) {
            res += "* "
        }
    } else {
        for (let j = 1; j <= i - n; j++) {
            res += " "
        }
        for (let j = 1; j <= n * 2 - i; j++) {
            res += "* "
        }
    }

    console.log(res)
}