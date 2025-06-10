// 1;
// 10;
// 101;
// 1010;
// 10101;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 == 0) {
//       result += `${j % 2}`;
//     } else {
//       result += "1";
//     }
//   }
//   console.log(result);
// }

// let n = 5;
// let val = 65;
// for (let i = 1; i <= n; i++) {
//   let res = "";

//   if (i <= Math.round(n / 2)) {
//     for (let j = 1; j <= n - i; j++) {
//       res += " ";
//     }
//     for (let k = i; k >= i; k--) {
//       if (k % 2 == 0) {
//         res += `${String.fromCharCode(val + Math.floor(i / k))}`;
//       } else {
//         res += "0";
//       }
//     }
//   } else {
//     for (let i = 1; i <= n; i++) {
//       let res = "";
//     }
//     for (let k = i; k >= 1; k--) {
//       if (k % 2 != 0) {
//         val++;
//         res += `${String.fromCharCode(val + Math.floor(i / k))}`;
//       } else {
//         res += "1";
//       }
//     }
//   }

//   console.log(res);
// }

// 1 # 4 # 9
// 16 # 25 # 36
// 49 # 64 # 81
//  # 36 # 64 #
//  # 49 # 81 #

// let c = 1;
// let d = 7;
// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   if (i <= 3) {
//     for (let j = 1; j <= 5; j++) {
//       if (j % 2 === 0) {
//         result += " # ";
//       } else {
//         result += `${c ** 2}`;
//         c += 1;
//       }
//     }
//   } else {
//     for (let j = 1; j <= 5; j++) {
//       if (j % 2 != 0) {
//         result += " # ";
//       } else {
//         result += `${(i + j) ** 2}`;
//       }
//     }
//   }

//   console.log(result);
// }

let r = 5;
let m = Math.ceil(r / 2);

for (let i = 1; i <= r; i++) {
  let l = "";

  if (i <= m) {
    l += " ".repeat(m - i);

    for (let op = 1; op <= 2 * i - 1; op++) {
      if ((i + op) % 2 == 0) {
        l += "1";
      } else {
        l += "0";
      }
    }
  } else {
    let j = r - i + 1;
    l += " ".repeat(m - j);
    l += "*".repeat(2 * j - 1);
  }

  console.log(l);
}

// let n=5
// for (let i = 0; i < Math.round(n/2); i++) {
//   let res=""

// }

// let r = 5;
// let k = 1;
// for (let i = 1; i < 5; i++) {
//   let l = "";

//   let s = i < r ? i : r - i;

//   for (let op = 0; op < s; op++) {
//     l += k + " ";
//     k = k + 1;
//   }

//   l += "  ".repeat((r - s) * 2 - 1);

//   l += "* ".repeat(s);

//   console.log(l);
// }
