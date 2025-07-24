const connectionDB =require("./config/db")
const mongoose = require("mongoose");
//! DB connected  
connectionDB()

//! create a schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//! model
const User = mongoose.model("boys", userSchema);
const db= async () =>{

    const users = await User.find();
    console.log(users);
}
db()