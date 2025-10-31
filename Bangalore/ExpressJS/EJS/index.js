const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs')
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

//! ---------- Helper function ----------
const filePath = path.join(__dirname, 'user.json');
function readUsers() {
    if (!fs.existsSync(filePath)) {
        return []
    };
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}


// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/signup", (req, res) => {
    res.render("signup", { message: null });
});

app.get("/login", (req, res) => {
    res.render("login");
});

//  POST route for signup form
app.post("/signup", (req, res) => {
    const { userName, age, password } = req.body;

    try {
        // Validate input
        if (!userName || !age || !password) {
            return res.render("signup", { message: "Please fill all fields" });
        }

        // Read existing users
        const users = readUsers();

        // Check for duplicate username
        const existingUser = users.find((u) => u.userName === userName);
        if (existingUser) {
            return res.render("signup", { message: "Username already exists!" });
        }

        // Create new user
        const newUser = { userName, age, password };

        // Save to JSON file
        users.push(newUser);
        writeUsers(users);

        console.log("New user added:", newUser);

        // Success message
        res.render("signup", { message: "Signup successful!" });
    } catch (error) {
        return res.render("signup", { message: "Server side error" });
    }
});

app.post("/signin", (req, res) => {
    const { userName, password } = req.body;

    try {
        // Check empty fields
        if (!userName || !password) {
            return res.render("signin", { message: "Please fill all fields" });
        }

        // Read existing users
        const users = readUsers();

        // Find user by username
        const existingUser = users.find((u) => u.userName === userName);

        if (!existingUser) {
            return res.render("signin", { message: "Invalid username" });
        }

        // Check password
        if (existingUser.password !== password) {
            return res.render("signin", { message: "Invalid password" });
        }

        // Success
        console.log("User signed in:", existingUser);
        return res.render("signin", { message: "Signin successful!" });

    } catch (error) {
        console.error("Signin error:", error);
        res.render("signin", { message: "Something went wrong" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});