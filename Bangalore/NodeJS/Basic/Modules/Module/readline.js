const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter your name ", (name) => {
    console.log("Entered name is " + name)
    rl.close()
})

rl.on('close', () => {
    console.log("Envent is closed")
})