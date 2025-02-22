import React, { useState } from "react";
import axios from "axios";

function AIResumeHelper() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
    jobDescription: "",
  });

  const [aiSuggestions, setAiSuggestions] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/resume/improve", {
        ...formData,
        skills: formData.skills.split(","),
      });
      setAiSuggestions(response.data.suggestions);
    } catch (error) {
      alert("Error fetching AI suggestions");
    }
  };

  return (
    <div>
      <h2>AI Resume Helper</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required /><br />
        <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} required /><br />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} required></textarea><br />
        <textarea name="education" placeholder="Education" onChange={handleChange} required></textarea><br />
        <textarea name="jobDescription" placeholder="Paste Job Description" onChange={handleChange} required></textarea><br />
        <button type="submit">Get AI Suggestions</button>
      </form>

      {aiSuggestions && (
        <div>
          <h3>AI Suggestions:</h3>
          <p>{aiSuggestions}</p>
        </div>
      )}
    </div>
  );
}

export default AIResumeHelper;