import React, { useState } from "react";
import axios from "axios";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [],
    experience: [],
    education: [],
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add dynamic fields
  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  // Handle dynamic input change
  const handleDynamicChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Remove dynamic fields
  const removeField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData); // Debugging log

    try {
      const response = await axios.post("http://localhost:5000/resume/save", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Error saving resume");
    }
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required /><br />

        <h3>Skills</h3>
        {formData.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleDynamicChange(index, "skills", e.target.value)}
              placeholder="Enter skill"
            />
            <button type="button" onClick={() => removeField(index, "skills")}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("skills")}>Add Skill</button><br />

        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <textarea
              value={exp}
              onChange={(e) => handleDynamicChange(index, "experience", e.target.value)}
              placeholder="Enter experience"
            />
            <button type="button" onClick={() => removeField(index, "experience")}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("experience")}>Add Experience</button><br />

        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <textarea
              value={edu}
              onChange={(e) => handleDynamicChange(index, "education", e.target.value)}
              placeholder="Enter education"
            />
            <button type="button" onClick={() => removeField(index, "education")}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("education")}>Add Education</button><br />

        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
}

export default ResumeBuilder;
