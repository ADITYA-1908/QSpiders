const express = require('express')
const fs = require('fs')
const app = express()


// for / home.html
app.get('/', (req, res) => {
    
})


app.listen(8000, () => {
    console.log("server running at http://localhost:8000");
})