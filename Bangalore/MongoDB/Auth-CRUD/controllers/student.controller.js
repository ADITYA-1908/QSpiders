const Auth = require("../models/auth.student.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//!Student signup
const signupStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        //  Validate fields
        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        // Check if user already exists
        const studentExist = await Auth.findOne({ email });
        if (studentExist) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // 3 Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create student
        const newStudent = await Auth.create({
            email,
            password: hashedPassword,
        });

        // Send Response
        return res.status(201).json({
            message: "Student registered successfully",
            student: {
                id: newStudent._id,
                email: newStudent.email,
            },

        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

//!student signup
const signinStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate fields
        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        // Check if student exists
        const student = await Auth.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: "Email is not registered" });
        }

        // Compare password
        const compairPassword = await bcrypt.compare(password, student.password);

        if (!compairPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: student._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_SECRET_EXPIRES }
        );

        // Send Response
        return res.status(200).json({
            message: "Login successful",
            student: {
                id: student._id,
                email: student.email,
            },
            token,
        });

    } catch (error) {
        console.error("Signin Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { signupStudent, signinStudent };
