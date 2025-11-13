const express = require("express");
const router = express.Router();
const { signupStudent } = require("../Controllers/studentController");
const { signinStudent } = require("../Controllers/studentController");
const { editStudent } = require("../Controllers/studentController");
const { editData } = require("../Controllers/studentController");
const { deleteStudent } = require("../Controllers/studentController");

// POST: /api/student/signup
router.post("/signup", signupStudent);

// GET: /api/student/signip
router.get("/signin", signinStudent);

// PUT: /api/student/edit/:id
router.put("/edit-student/:id", editStudent)

// PATCH: /api/student/editdata/:id
router.patch("/editdata/:id", editData);

// DELETE: /api/student/delete/:id
router.delete("/delete/:id", deleteStudent)

module.exports = router;
