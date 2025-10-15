const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

//! ---------- Helper function ----------
const filePath = path.join(__dirname, 'users.json');
function readUsers() {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

//! ---------- Serve Static Files ----------
app.use('/home/css', express.static(path.join(__dirname, 'htmlfiles/css')));
app.use('/home/js', express.static(path.join(__dirname, 'htmlfiles/js')));

//! ---------- GET Routes (HTML Pages) ----------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/about.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/signup.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/signin.html'));
});

app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/delete.html'));
});

app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/password.html'));
});

//! ---------- POST: Signup ----------
app.post('/signup', (req, res) => {
    const { name, email, age, password } = req.body;

    if (!name || !email || !age || !password) {
        return res.json({ status: "error", message: "All fields are required" });
    }

    let users = readUsers();
    const isUser = users.find(u => u.email === email);
    if (isUser) return res.json({ status: "error", message: "User already exists" });

    users.push({ name, email, age, password });
    writeUsers(users);

    res.json({ status: "success", message: "Signup successful" });
});

//! ---------- POST: Signin ----------
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const users = readUsers();
    const user = users.find(u => u.email === email);

    if (!user) return res.json({ message: "Invalid Email" });
    if (user.password !== password) return res.json({ message: "Invalid Password" });

    res.json({ message: "Login successful" });
});

//! ---------- PUT: Update Password ----------
app.put('/password', (req, res) => {
    const { email, password, newpassword } = req.body;

    const users = readUsers();
    const user = users.find(u => u.email === email);

    if (!user) return res.json({ message: "User not found" });
    if (user.password !== password) return res.json({ message: "Old password is incorrect" });

    const updatedUsers = users.map(u =>
        u.email === email ? { ...u, password: newpassword } : u
    );

    writeUsers(updatedUsers);
    res.json({ message: "Password updated successfully" });
});

//! ---------- DELETE: Delete Account ----------
app.delete('/delete', (req, res) => {
    const { email, password } = req.body;

    const users = readUsers();
    const user = users.find(u => u.email === email);

    if (!user) return res.json({ message: "User not found" });
    if (user.password !== password) return res.json({ message: "Invalid password" });

    const updatedUsers = users.filter(u => u.email !== email);
    writeUsers(updatedUsers);

    res.json({ message: "User deleted successfully" });
});

//! ---------- Invalid Route Handler ----------
app.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

//! ---------- Start Server ----------
app.listen(8000, () => {
    console.log("Server started at http://localhost:8000");
});
