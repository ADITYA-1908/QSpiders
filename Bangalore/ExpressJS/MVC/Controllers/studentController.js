const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../student.json");

// Read student data
function readStudents() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
}

// Write student data
function writeStudents(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Signup Student
const signupStudent = (req, res) => {
    const { name, email, password, age } = req.body;

    // Basic validation
    if (!name || !email || !password || !age) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Read existing data
    const students = readStudents();

    // Check if email already exists
    const existing = students.find((stu) => stu.email === email);
    if (existing) {
        return res.status(400).json({ message: "Email already registered" });
    }

    // Create new student
    const newStudent = {
        name,
        email,
        password,
        age,
    };

    // Add and save
    students.push(newStudent);
    writeStudents(students);

    res.status(201).json({
        message: "Student registered successfully",
        student: newStudent,
    });
};

module.exports = { signupStudent };
