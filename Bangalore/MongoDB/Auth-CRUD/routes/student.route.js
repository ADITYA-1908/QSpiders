const express = require("express");
const router = express.Router();

const { signupStudent, signinStudent } = require("../controllers/student.controller.js");

// POST /api/student/signup
router.post("/signup", signupStudent);
router.post("/signin", signinStudent);

module.exports = router;
