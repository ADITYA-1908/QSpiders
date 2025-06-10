// // 1)WAP to fins sum of the 3 digits
// function add(a) {
//   let sum = 0;
//   while (a != 0) {
//     let rem = a % 10;
//     sum += rem;
//     a = Math.floor(a / 10);
//   }
//   return sum;
// }

// let addition = add(11);
// console.log(addition);

// // 2) WAP to for doing operation on number
// function hof(x, y, task) {
//   console.log(task(x, y));
// }
// hof(30, 10, (a, b) => a + b);
// hof(30, 10, (a, b) => a - b);
// hof(30, 10, (a, b) => a * b);
// hof(30, 10, (a, b) => a / b);

// // 3) WAP to print 1  2 3 4 5
// let s = "";
// for (var i = 1; i <= 5; i += 1) {
//   s += i + " ";
// }
// console.log(s);

// // 4) input n=10     output=  2 4 6 8 10
// function even(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// even(10);

// // 4) input n=10     output=  1 3 5 7 9
// function even(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }
// even(10);

//) how memory allocation happensa in JS
//find all inbuilt array method in js with example
//push-pop-shift-unshift-sort-reverse-slice-splice-concat-joinindexOf-lastIndexOf
// let arr = [1, 2, 3, 4];
// let index1 = arr.indexOf(2);
// console.log(index1);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// arr.sort();
// console.log(arr)
// arr.reverse();
// console.log(arr);
// let sl = arr.slice(0, 3);
// console.log(sl);
// let sp = arr.splice(1, 2);
// console.log(sp);
// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// console.log(result);
// let arr2 = [1, 2, 3, 2];
// let index2 = arr2.lastIndexOf(2);
// console.log(index2);
// let ar = ["a", "b", "c"];
// let result = ar.join("-");
// console.log(result)
// let arr = [1, 2, 3];
// let a = arr.map((n) => n * 2);
// console.log(a);
// let b = arr.filter((n) => n % 2 == 0);
// console.log(b);
//find all inbuilt string method in js with example
// let str = "Hello";
// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.indexOf("o"));
// console.log("A".charCodeAt(0));
// console.log(str.at(-1));
// console.log(str.concat(" World"));
// console.log(str.includes("l"));
// console.log(str.startsWith("H"));
// console.log(str.endsWith("o"));
// console.log(str.slice(1, 4));
// console.log(str.substring(0, 3));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let s = "   hello     ";
// console.log(s.trim());
// let s1 = "hello       ";
// console.log(s1.trimStart());
// let ss = "hello       ";
// console.log(ss.trimEnd());
// let sen = "hello aditya";
// console.log(sen.replace("aditya", "subham"));
// let obj = "apple,banana,grape";
// console.log(obj.s`plit(","));
