const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/quantum");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

connectDB();


const mySchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const myModel = mongoose.model("boys", mySchema)

//Ceate the data
app.post("/create", async (req, res) => {
    try {
        const newData = new myModel(req.body)
        await newData.save();
        res.json({ message: "Data created successfully", data: newData });
    } catch (error) {
        res.json({ message: "Error fetching data", error: error.message });
    }
})

//Read the data
app.get("/read", async (req, res) => {
    try {
        const result = await myModel.find()
        res.json({ result })
    } catch (error) {
        res.json({ message: "Error fetching data", error: error.message });
    }
})

// READ - Get by ID
app.get("/read/:id", async (req, res) => {
    try {
        const item = await myModel.findById(req.params.id);
        if (!item) return res.json({ message: "Not found" });
        res.json({ item });
    } catch (error) {
        res.json({ message: "Error fetching data by ID", error: error.message });
    }
});

// UPDATE - Update by ID
app.put("/update/:id", async (req, res) => {
    try {
        const updated = await myModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.json({ message: "Not found" });
        res.json({ message: "Updated successfully", data: updated });
    } catch (error) {
        res.json({ message: "Error updating data", error: error.message });
    }
});


// DELETE - Delete by ID
app.delete("/delete/:id", async (req, res) => {
    try {
        const deleted = await myModel.findByIdAndDelete(req.params.id);
        if (!deleted) return res.json({ message: "Not found" });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.json({ message: "Error deleting data", error: error.message });
    }
});

app.listen(8080, () => {
    console.log("server running at http://localhost:8080");
});
