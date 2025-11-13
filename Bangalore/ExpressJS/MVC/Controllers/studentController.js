const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt")

const filePath = path.join(__dirname, "../student.json");

//! Read student data from student.json
function readStudents() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
}

//! Write student data to the student.json
function writeStudents(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

//! Signup Student:POST 
const signupStudent = async (req, res) => {
    const { name, email, password, age } = req.body;

    // Validation
    if (!name || !email || !password || !age) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Read existing students
    const students = readStudents();

    // Check duplicate
    const existing = students.find((stu) => stu.email === email);
    if (existing) {
        return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new student
    const newStudent = { id: Date.now(), name, email, password: hashedPassword, age };

    // Save student
    students.push(newStudent);
    writeStudents(students);

    res.status(201).json({
        message: "Student registered successfully",
    });
};

//! signin student:GET
const signinStudent = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required " })
    }

    const students = readStudents()

    const student = students.find((stu) => stu.email === email)

    if (!student) {
        return res.status(404).json({ message: "Email and password is required " })
    }
    const isMatch = await bcrypt.compare(password, student.password)

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" })
    }
    res.status(201).json({
        message: "Student login successfully",
    });
}

//! Edit all the data of the student:PUT
const editStudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, password } = req.body;

    if (!id) {
        return res.status(400).json({ message: "Student ID is required" });
    }

    const students = readStudents()

    const studentIndex = students.findIndex((stu) => stu.id == id);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (name) {
        students[studentIndex].name = name;
    }
    if (age) {
        students[studentIndex].age = age;
    }

    if (password) {
        const hashedPasword = await bcrypt.hash(password, 10)
        students[studentIndex].password = hashedPasword;
    }

    writeStudents(students)
    res.status(201).json({
        message: "Student data updated successfully",
    });
}

//! Edit data of the student:PATCH
const editData = async (req, res) => {
    const { id } = req.params;
    const { name, age, password } = req.body

    if (!id) {
        return res.status(400).json({ message: "Student ID is required" });
    }

    const students = readStudents();

    const studentIndex = students.findIndex((stu) => stu.id == id)

    if (studentIndex === -1) {
        return res.status(404).json({ message: "student is not found" })
    }

    if (name) {
        students[studentIndex].name = name;
    }

    if (age) {
        students[studentIndex].age = age;
    }

    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10)
        students[studentIndex].password = hashedPassword;
    }
    writeStudents(students)

    res.status(200).json({ Message: "Student data updated" })
}

//! Delete Student data :DELETE
const deleteStudent = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Student ID is required" });
    }

    const students = readStudents()

    const findId = students.find((stud) => stud.id == id)

    if (!findId) {
        return res.status(404).json({
            message: "Student ID does not exist in your database",
        });
    }
    const updatedStudent = students.filter((stu) => stu.id != id)

    writeStudents(updatedStudent)
    res.status(200).json({ message: "Student deleted" })
}

module.exports = { signupStudent, signinStudent, editStudent, editData, deleteStudent };
