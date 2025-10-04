// *
// **
// ***
// ****
// *****
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let j = 1; j <= i; j++) {
//         res += "*"
//     }
//     console.log(res)
// }




// 1
// 22
// 333
// 4444
// 55555
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let j = 1; j <= i; j++) {
//         res += i;
//     }
//     console.log(res)
// }





// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let j = 1; j <= i; j++) {
//         res += j;
//     }
//     console.log(res)
// }




// 1
// 23
// 456
// 78910

// let n = 4;
// let c = 1;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let j = 1; j <= i; j++) {
//         res += c;
//         c++;
//     }
//     console.log(res)
// }


// 1
// 10
// 101
// 1010

let n = 4;
let c = 1;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        if (j % 2 != 0) {
            res += 1
        } else {
            res += 0;
        }
    }
    console.log(res)
}


// A
// AB
// ABC
// ABCD

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let res = "";
//     for (let j = 0; j <= i; j++) {
//         res += String.fromCharCode(65 + j);
//     }
//     console.log(res)
// }

// A
// BB
// CCC
// DDDD

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let res = "";
//     for (let j = 0; j <= i; j++) {
//         res += String.fromCharCode(65 + i);
//     }
//     console.log(res)
// }

// A
// BC
// DEF
// GHIJ

// let n = 4;
// let c = 0;
// for (let i = 0; i < n; i++) {
//     let res = "";
//     for (let j = 0; j <= i; j++) {
//         res += String.fromCharCode(65 + c);
//         c++;
//     }
//     console.log(res)
// }