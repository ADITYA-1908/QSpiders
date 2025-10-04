// //convert the strin gin to the array
// const str = "hello";
// console.log(str);
// console.log(str.split(""));

// //WAP to count no of words present in the string
// const str = "MERN Stack Development";
// console.log("no of words= " + str.split(" ").length);
// console.log("no of alphabet= " + str.split("").length);

// //--------------------Array InBuilt methods--------------------------------
// const arr = [1, 2];
// console.log(arr);
// arr.push(6);
// console.log("push the value at last index ");
// console.log(arr);
// arr.push(6, 12);
// console.log("push multiple value at last index ");
// console.log(arr);
// arr.shift(6);
// console.log("shift will remove the value at first index ");
// console.log(arr);
// arr.unshift(0);
// console.log("unshift will add the value at first index");
// console.log(arr);
// arr.unshift(2, 3);
// console.log("unshift will add the value at first index");
// console.log(arr);
// arr.pop();
// console.log("pop the value at last index");
// console.log(arr);

// //---------------------splice method------------------------
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr1.splice(6, 2);
// console.log("Remove  some element from the array");
// console.log(arr1);
// const str = ["aditya", "adi_subham", "subham"];
// str.splice(0, 1);
// console.log(str);
// const str1 = ["aditya", "adi_subham", "subham"];
// str1.splice(1, 0, "adi");
// console.log(str1);

// //extract somee number from the array
// const a = [1, 2, 3, 4, 5];
// b = a.slice(2, 4);
// console.log(b);

// //join and tostring of the array
// const a = [1, 2, 3, 4, 5];
// console.log(a.toString());
// console.log(a.join("-"));

//reverse the array
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("reverse the array");
// console.log(arr2.reverse());

//WAP to find a number is palemdrom or not
// let a = 121;
// let b = a;
// let op = 0;
// while (a < 0) {
//   let n = a % 10;
//   op = op * 10 + n;
//   n = n / 10;
// }
// if (op === b) {
//   console.log("Number is palindrome");
// } else {
//   console.log("Number is not palindrome");
// }

//WAP a program to remove all the spacila cheracter from the string

//WAP to count the spacial cheracter and count no of @ present
const str2 = "hello@hii@bye";
console.log(str2.split("@"));
let c = 0;
for (const i of str2) {
  if (i == "@") {
    c += 1;
  }
}
console.log("number of spacila cheracter " + c);

// count the number of evene and odd number present in the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let odd = 0,
  even = 0;
for (let i in arr) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("No of odd numbers: ", odd);
console.log("No of odd numbers: ", even);

//--------------------forEach | map | filter | reduce --------------------------

//WAP to check whether a string is palindrome or not

// const str = "madam";
// console.log(str === str.split("").reverse().join(""));
