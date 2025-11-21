const data = [
    {
        name: "aditya",
        age: "21",
        designation: "QA"
    },
    {
        name: "subham",
        age: "22",
        designation: "QA"
    },
    {
        name: "subham",
        age: "23",
        designation: "DA"
    }
]

//! Add in the object
// const add = data.map((item) => ({ ...item, address: "bangalore" }))
// console.log(add);

//!remove in the object
// const remove = data.map(({ age, ...rest }) => rest)
// console.log(remove);

//!add "year old after age"
// const addAge = data.map((item) => ({ ...item, age: item.age + " year old" }))
// console.log(addAge);

//!filter QA and give all the data
// const Qa = data.filter((item) => (item.designation === "QA")).map((i) => ({ name: i.name, age: i.age }))
// console.log(Qa);

//!filter QA and add postfix of designation as Traniee
// const traniee = data.
//     filter((item) => (item.designation === "QA"))
//     .map((tr) => ({ name: tr.name, designation: tr.designation + "Traniee" }))

// console.log(traniee);

//!Remove objects with duplicate designation and keep the first occurrence.
// const seen = []
// const unique = data.filter((item) => {
//     if (!seen.includes(item.designation)) {
//         seen.push(item.designation)
//         return true
//     }
//     return false
// })
// console.log(unique);

//!If designation is "DA", add level: "Junior" else level: "Intern".
// const update = data.map((item) => (
//     { ...item, level: item.designation === "DA" ? "intern" : "Junior" }
// ))
// console.log(update);

//!sort age
// const sortAge = data.sort((a, b) => a.age - b.age)
// console.log(sortAge);
