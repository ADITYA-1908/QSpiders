// // spread opeartor
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = [9, 10, 11, 12, 12];
// const arr3 = [...arr1, ...arr2];
// // console.log(arr3);

// function getData(x) {
//   for (let i = 0; i < arr1.length; i++) {
//     console.log(x);
//   }
// }
// getData(...arr1);

// // string parameter
// const str = "hello";
// console.log([...str]);

// const obj = {
//   userName: "aditya",
//   age: 21,
// };
// console.log({ ...str });
// console.log([...str]);

// //!Rest parameter
// function getCalculate() {
//   let result = 0;
//   for (const element of arguments) {
//     result += element;
//   }
//   console.log(result);
// }

// getCalculate(10, 20);
// getCalculate(10, 20, 30);
// getCalculate(10, 20, 30, 40);

// function getCalculate(...x) {
//   console.log(x);
// }

// getCalculate(10, 20);
// getCalculate(10, 20, 30);
// getCalculate(10, 20, 30, 40);

//!Array Destructuring
// LHS=RHS   ------------ Rest=spread
// NOTE- rest parameter should be the last parameter
// const arr = ["adi", "aditya", "subham", "adi_subham"];
// const [a, b, c, d] = arr;
// console.log(a, b, c);
// const [, , , z] = arr;
// console.log(z);
// const [h, ...x] = arr;
// console.log(a);
// console.log(x);

// //!object destructuring
// const obj = {
//   useName: "aditya",
//   age: 21,
//   class: 12,
//   section: "b",
// };
// const { useName, age, ...x } = obj;
// console.log(useName, age);
// console.log(x);

