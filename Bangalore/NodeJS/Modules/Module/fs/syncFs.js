const fs = require("fs")

//!-----------------------sync------------------------------

//!Read the file
// const readFileSync = fs.readFileSync("./syncFs.txt", "utf-8")
// console.log(readFileSync)

//!write the file
// let content = "event loop is the heart of the node.js"
// const writeFile = fs.writeFileSync("./syncFs.txt", content, "utf-8")
// console.log(writeFile)

//!append the file 
// let content = "event loop is the heart of the node.js"
// const writeFile = fs.appendFileSync("./syncFs.txt", content, "utf-8")
// console.log(writeFile)

//!-----------------------sync------------------------------
let content = "event loop is the heart of the node.js"
fs.writeFile("./asyncFs.txt", content, "utf-8", (data, error) => {
    try {
        console.log("written")
    } catch (error) {
        console.log(error)

    }
})

