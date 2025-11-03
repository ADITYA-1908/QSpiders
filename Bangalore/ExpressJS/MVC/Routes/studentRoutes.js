const express = require("express");
const router = express.Router();
const { signupStudent } = require("../Controllers/studentController");

// POST: /api/student/signup
router.post("/signup", signupStudent);

module.exports = router;
