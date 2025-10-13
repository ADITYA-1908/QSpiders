const http = require('http');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log("url =", url);
    console.log("method =", method);

    function myfunc(endPath) {
        fs.readFile(path.join(__dirname, endPath), (err, file) => {
            if (err) {
                return res.end("<h1>Server side error</h1>");
            } else {
                return res.end(file);
            }
        });
    }

    if (url === "/favicon.ico") return;

    // Handle GET requests
    if (method === 'GET') {
        switch (url) {
            case '/':
            case '/home':
                myfunc("htmlfiles/home.html");
                break;
            case '/home/css':
                myfunc('htmlfiles/css/style.css');
                break;
            case '/home/js':
                myfunc('htmlfiles/js/home.js');
                break;
            case '/about':
                myfunc('htmlfiles/about.html');
                break;
            case '/signup':
                myfunc('htmlfiles/signup.html');
                break;

            case '/signin':
                myfunc('htmlfiles/signin.html');
                break;

            default:
                res.end("<h1>404 page not found</h1>");

        }

        // Handle POST requests
    } else if (method === 'POST') {
        switch (url) {
            case '/signup':
                let body = '';
                req.on('data', chunk => {
                    body += chunk;
                });

                req.on('end', () => {
                    try {
                        let user = JSON.parse(body);

                        // validation
                        if (!user.name || !user.email || !user.age || !user.password) {
                            return res.end(JSON.stringify({ status: "error", message: "All fields are required" }));
                        }

                        console.log(user);

                        const filePath = path.join(__dirname, 'users.json');
                        let userArray = [];

                        // if file exists, read old users
                        if (fs.existsSync(filePath)) {
                            userArray = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                        }

                        // check for duplicate email
                        const isUser = userArray.find(u => u.email === user.email);
                        if (isUser) {
                            return res.end(JSON.stringify({ status: "error", message: "User already exists" }));
                        }

                        // push and save
                        userArray.push(user);
                        fs.writeFileSync(filePath, JSON.stringify(userArray, null, 2));

                        // success response
                        res.end(JSON.stringify({ status: "success", message: "User signup successful", data: user }));
                    } catch (err) {
                        res.end(JSON.stringify({ status: "error", message: "Invalid JSON data" }));
                    }
                });
                break;

            default:
                res.end("<h1>404 POST route not found</h1>");
        }
    }


});

server.listen(4000, 'localhost', () => {
    console.log("Server started at http://localhost:4000");
});
