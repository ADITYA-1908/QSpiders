const express = require("express");
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Import routes
const studentRoutes = require("./Routes/studentRoutes");

// Use routes
app.use("/api/student", studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
