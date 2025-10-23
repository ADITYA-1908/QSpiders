const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());   // for req.body
app.use(cookieParser());   // for req.cookies

//!-------------------------Request object-----------------------------------------

//! req.app
app.get('/', (req, res) => {
    console.log(req.app);
    return res.json({ message: "Server info", appName: req.app.get('appName') });
});

//! req.body (use POST to send JSON data)
app.post('/app', (req, res) => {
    console.log(req.body);
    return res.json({ message: "Request body received", data: req.body });
});

//! req.hostname
app.get('/hostname', (req, res) => {
    console.log(req.hostname);
    return res.json({ hostname: req.hostname });
});

//! req.cookies
app.get('/cookies', (req, res) => {
    console.log(req.cookies);
    return res.json({ message: "Cookies from client", cookies: req.cookies });
});

//! req.params (route parameters)
app.get('/params/:id', (req, res) => {
    console.log(req.params);
    return res.json({ message: "Params are accepted", params: req.params });
});

//! req.query (query parameters)
app.get('/search', (req, res) => {
    console.log(req.query);
    return res.json({ query: req.query });
});

//!-------------------------Response object----------------------------------

//! res.cookie
app.post('/cookie', (req, res) => {
    const token = "ashfdgfgkhgeu";
    res.cookie("Token", token);
    return res.json({ message: "Login successful" });
});

//! res.download
app.get('/download', (req, res) => {
    return res.download(path.join(__dirname, 'Lipuv.png'), 'Lipuv.png');
});

//! res.clearCookie
app.post('/clearCookies', (req, res) => {
    res.clearCookie("Token");
    return res.json({ message: "Cookie cleared" });
});

//! res.sendFile
app.get('/sendfile', (req, res) => {
    return res.sendFile(path.join(__dirname, "index.html"));
});

//! res.status
app.post('/signup', (req, res) => {
    return res.status(201).json({ message: "User created" });
});

//! res.status
app.post('/signin', (req, res) => {
    return res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
