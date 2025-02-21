import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    jobApplied: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/resume/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      console.error("Error saving resume:", error);
    }
  };

  return (
    <div>
      <h2>📄 Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
        <input type="text" name="jobApplied" placeholder="Job Applied For" onChange={handleChange} required />
        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
}

export default ResumeBuilder;
