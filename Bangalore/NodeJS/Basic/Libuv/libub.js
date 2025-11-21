const fs = require("fs")


fs.readFile("./msg.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("data is" + data)
    }
    setImmediate(() => {
        console.log("setImmediate fs")
    })

    setTimeout(() => {
        console.log("setTimeOut fs")
    }, 0)
})
console.log("1st sync")

setTimeout(() => {
    console.log("setTimeOut")
}, 0)

setImmediate(() => {
    console.log("setImmediate")
})


console.log("2st sync")