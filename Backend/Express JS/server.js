const express = require("express")
const app = express();

const obj = {
    userName: "Aditya",
    age: 20
}


const data = {
    userName: "Anurag",
    age: 22
}

app.get("/", (req, res) => {
    res.json({ obj })
})

app.get("/test", (req, res) => {
    res.json({ data })
})

app.listen(8080, () => {
    console.log("server started at http://localhost:8080/ ")
})