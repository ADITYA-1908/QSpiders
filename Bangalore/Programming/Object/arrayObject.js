//!Mid level

//!Q1
//!output
// [
//     { id: 1, name: 'Aditya', age: 22 },
//     { id: 2, name: 'Subham', age: 23 }
// ]
// const arr1 = [
//     { id: 1, name: "Aditya" },
//     { id: 2, name: "Subham" },
// ];

// const arr2 = [
//     { id: 1, age: 22 },
//     { id: 2, age: 23 },
// ];

// const merged = arr1.map((item) => (
//     { ...item, ...arr2.find((a) => a.id === item.id) }
// ))
// console.log(merged);

//!Q2
const students = [
    { name: "Aditya", grade: "A" },
    { name: "Neha", grade: "B" },
    { name: "Subham", grade: "A" },
];

const res = {}
students.forEach((obj) => {
    if (res[obj.grade]) {
        res[obj.grade].push(obj.name)
    } else {
        res[obj.grade] = [obj.name]
    }
})

console.log(res);
// let arr = [
//     { county: "IND", state: "odisha" },
//     { county: "IND", state: "karnataka" },
//     { county: "USA", state: "Londan" },
//     { county: "USA", state: "Califonia" }
// ]

// let res = {}
// let result = []
// arr.forEach((o) => {
//     if (res[o.county]) {
//         res[o.county].push(o.state)
//     } else {
//         res[o.county] = [o.state]
//     }
// })
// console.log(res);
// for (let c in res) {
//     let obj = {}
//     obj.c = c;
//     obj.s = res[c]
//     result.push(obj)
// }
// console.log(result);