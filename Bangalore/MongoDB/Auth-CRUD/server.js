const express = require("express");
const connectDB = require("./db/db.js");
require("dotenv").config();

const SERVER_PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());

// DB connection
connectDB();

// Import routes
const studentRoutes = require("./routes/student.route.js");

// Use routes
app.use("/api/student", studentRoutes);


app.listen(SERVER_PORT, () => {
    console.log(`server is running at http://localhost:${SERVER_PORT}`);
});
