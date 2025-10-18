import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());   // for req.body
app.use(cookieParser());   // for req.cookies


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
    return res.json({message:"Parames are accepted" });
});

//! req.query (query parameters)
app.get('/search', (req, res) => {
    console.log(req.query);
    return res.json({ query: req.query });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
