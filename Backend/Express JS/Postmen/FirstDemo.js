const express = require("express");
const app = express();
app.use(express.json());

const userDetails = [
    {
        id: 1,
        userName: "aditya",
        email: "aditya@gmail.com",
        password: "adi123"
    },
    {
        id: 2,
        userName: "anurag",
        email: "anurag@gmail.com",
        password: "anu123"
    }
];

// Get all users
app.get("/userdetails", (req, res) => {
    res.json({ userDetails });
});

// Register new user
app.post("/register", (req, res) => {
    const newUser = req.body;
    userDetails.push(newUser);
    res.json({ message: "Register Successfully" });
});

// Get user by ID
app.get("/userdetails/:id", (req, res) => {
    //to get route parameter we use req.parems
    const { id } = req.params;
    const numericId = parseInt(id);
    const userData = userDetails.find(user => user.id === numericId);

    if (userData) {
        res.json({ user: userData });
        console.log(userData)
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(8080, () => {
    console.log("http://localhost:8080");
});
