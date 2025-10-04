const express = require("express");
const app = express();
//middleware it will say to server to understance the incomming json format data 
app.use(express.json());

let userDetails = [];

// Register new user
app.post("/register", (req, res) => {
    const newUser = req.body;
    userDetails.push(newUser);
    res.json({ message: "Registered Successfully", user: newUser });
});

// Login 
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const matchedUsers = userDetails.filter(user => user.email === email && user.password === password);

    if (matchedUsers.length > 0) {
        res.json({ message: "Login Successful", user: matchedUsers });
    } else {
        res.json({ message: "Invalid email or password" });
    }
});

// Get all users
app.get("/userdetails", (req, res) => {
    res.json({ users: userDetails });
});

// Get user by ID
app.get("/userdetail/:id", (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id);
    const userData = userDetails.filter(user => user.id === numericId);

    if (userData) {
        res.json({ user: userData });
    } else {
        res.json({ message: "User not found" });
    }
});


// Delete user by ID 
app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id);
    const user = userDetails.some((e) => e.id === id)
    if (user >= 0) {
        userDetails = userDetails.filter(user => user.id !== numericId);
        res.json({ message: "User deleted successfully" });
    } else {
        res.json({ message: "User not found" });
    }
});


// Update user by ID (PUT)
app.put("/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id);
    const newData = req.body;

    const userIndex = userDetails.findIndex(user => user.id === numericId);

    if (userIndex >= 0) {
        userDetails[userIndex] = newData;

        res.json({
            message: "User updated successfully",
            updatedUser: userDetails[userIndex]
        });
    } else {
        res.json({ message: "User not found" });
    }
});



app.listen(8080, () => {
    console.log("http://localhost:8080");
});
