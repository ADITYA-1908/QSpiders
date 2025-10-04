const express = require("express");
const app = express();

const user = {
    name: "Aditya Basantia",
    age: 22,
    clgname: "NIST University",
    projects: ["To-Do App", "Portfolio Website", "API with Express"],
    place: "Bhubaneswar, India",
    education: {
        school: "KV Malkangiri",
        college: "NIST University",
        degree: "B.Tech in CSE"
    },
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express.js"],
    cv: "https://drive.google.com/file/d/1x9pfh_7y-nbgT28Yvtu9q5kSwxDqLvH4/view?usp=drive_link"
};


app.get("/name", (req, res) => {
    res.json({ name: user.name });
});

app.get("/age", (req, res) => {
    res.json({ age: user.age });
});

app.get("/clgname", (req, res) => {
    res.json({ clgname: user.clgname });
});

app.get("/projects", (req, res) => {
    res.json({ projects: user.projects });
});

app.get("/place", (req, res) => {
    res.json({ place: user.place });
});

app.get("/education", (req, res) => {
    res.json({ education: user.education });
});

app.get("/skills", (req, res) => {
    res.json({ skills: user.skills });
});

app.get("/cv", (req, res) => {
    res.json({ cv: user.cv });
});

// Default route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my CV",
        routes: {
            "/name": "Navigate to name",
            "/age": "Navigate to age",
            "/clgname": "Navigate to college name",
            "/projects": "Navigate to see projects",
            "/place": "Navigate to current location",
            "/education": "Navigate to education info",
            "/skills": "Navigate to skills list",
            "/cv": "Navigate to CV link",
            "/check": "Alias of test route"
        }
    });
});

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080/");
});
