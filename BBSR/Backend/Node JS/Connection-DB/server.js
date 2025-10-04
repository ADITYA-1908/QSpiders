const express = require("express");
const mongoose = require("mongoose");
const connectionDB = require("./config/db");

const app = express();
const PORT = 8080;

//! Connect to DB
connectionDB();

//! Create Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//! Create Model
const User = mongoose.model("boys", userSchema);

//! Route to show users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);  // Send the data to frontend
    } catch (err) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

//! Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
