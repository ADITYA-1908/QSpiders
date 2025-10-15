const http = require('http');
const fs = require('fs');
const path = require('path');


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
            case '/delete':
                myfunc('htmlfiles/delete.html');
                break;
            case '/password':
                myfunc('htmlfiles/password.html');
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

            case '/signin':
                let LoginData = '';

                req.on('data', chunk => {
                    LoginData += chunk;
                });

                req.on('end', () => {
                    try {
                        const user = JSON.parse(LoginData);
                        console.log(user)

                        fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, file) => {
                            if (err) {
                                return res.end(JSON.stringify({ message: "Server side error" }));
                            }
                            //read json file 
                            const usersArray = JSON.parse(file);

                            //check Email is exit or not 
                            const isUser = usersArray.find(u => u.email === user.email);

                            //If email is not exit then !f of T
                            if (!isUser) {
                                return res.end(JSON.stringify({ message: "Invalid Email" }));
                            }

                            //If password is not exit then !f of T
                            if (isUser.password !== user.password) {
                                return res.end(JSON.stringify({ message: "Invalid Password" }));
                            }

                            return res.end(JSON.stringify({ message: "Login successful" }));
                        });
                    } catch (error) {
                        res.end(JSON.stringify({ message: "Invalid JSON data" }));
                    }
                });
                break;


        }
    } else if (method === 'DELETE') {
        switch (url) {
            case '/delete':
                let body = '';

                req.on('data', chunk => {
                    body += chunk;
                });

                req.on('end', () => {
                    try {
                        const user = JSON.parse(body);
                        const filePath = path.join(__dirname, 'users.json');

                        if (!fs.existsSync(filePath)) {
                            return res.end(JSON.stringify({ message: "No users found" }));
                        }

                        const usersArray = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

                        const isUser = usersArray.find(u => u.email === user.email);

                        if (!isUser) {
                            return res.end(JSON.stringify({ message: "User not found" }));
                        }

                        if (isUser.password !== user.password) {
                            return res.end(JSON.stringify({ message: "Invalid password" }));
                        }

                        // delete the user
                        const updatedUsers = usersArray.filter(u => u.email !== user.email);

                        fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

                        res.end(JSON.stringify({ message: "User deleted successfully" }));

                    } catch (err) {
                        res.end(JSON.stringify({ message: "Invalid JSON data" }));
                    }
                });
                break;

            default:
                res.end("<h1>404 POST route not found</h1>");
        }
    } else if (method === 'PUT') {
        switch (url) {
            case '/password':
                let body = '';
                req.on('data', chunk => {
                    body += chunk;
                });
                req.on('end', () => {
                    try {
                        const user = JSON.parse(body);

                        const filePath = path.join(__dirname, 'users.json');

                        if (!fs.existsSync(filePath)) {
                            return res.end(JSON.stringify({ message: "No users found" }));
                        }

                        const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                        const isUser = users.find(u => u.email === user.email);

                        if (!isUser) {
                            return res.end(JSON.stringify({ message: "User not found" }));
                        }

                        if (isUser.password !== user.password) {
                            return res.end(JSON.stringify({ message: "Old password is incorrect" }));
                        }


                        const updatedUsers = users.map(u =>
                            u.email === user.email ? { ...u, password: user.newpassword } : u
                        );

                        fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

                        res.end(JSON.stringify({ message: "Password updated successfully" }));

                    } catch (err) {
                        res.end(JSON.stringify({ message: "Invalid data" }));
                    }
                });
                break;
        }

    } else {
        return res.end(JSON.stringify({ message: "invalid api" }));
    }



});

server.listen(4000, 'localhost', () => {
    console.log("Server started at http://localhost:4000");
});
