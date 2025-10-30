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

    if (!userName || !age || !password) {

        return res.render("signup", { message: " Please fill all fields" });
    }
    const user = readUsers();
    const isUser = user.find((u) => u.userName === userName)

    console.log(" User signed up:", { userName, age, password });
    res.render("signup", { message: " Signup successful!" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});