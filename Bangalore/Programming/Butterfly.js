// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
let n = 5;

for (let i = 1; i <= n * 2 - 1; i++) {
    let res = "";


    let row = i <= n ? i : 2 * n - i;


    for (let j = 1; j <= row; j++) {
        res += "*";
    }

    let space = (n - row) * 2 - 1;
    if (space > 0) {
        for (let s = 1; s <= space; s++) {
            res += " ";
        }
    }

    for (let j = 1; j <= row; j++) {
        res += "*";
    }

    console.log(res);
}
