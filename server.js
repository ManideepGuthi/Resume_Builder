const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (portfolioDB)
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: String,
  experience: String,
  jobApplied: String,
});

const Resume = mongoose.model("Resume", ResumeSchema, "resumes"); // Explicitly using 'resumes' collection

// Save Resume
app.post("/resume/save", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json({ message: "Resume saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving resume" });
  }
});

// Fetch Latest Resume from portfolioDB
app.get("/resume/latest", async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ _id: -1 });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: "Error fetching resume" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});