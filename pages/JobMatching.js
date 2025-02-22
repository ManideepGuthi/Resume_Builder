import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobMatching = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const predefinedSkills = [
    "JavaScript", "Python", "Java", "React", "Node.js", "SQL",
    "MongoDB", "Machine Learning", "AI", "Cybersecurity", "DevOps",
    "Cloud Computing", "Data Analytics", "Business Intelligence"
  ];

  // Predefined job data with Analytics-related jobs
  const predefinedJobs = [
    { title: "Software Engineer", company: "Google", description: "Develop scalable web applications.", requiredSkills: ["JavaScript", "React", "Node.js"], location: "California, USA", salary: "$120,000" },
    { title: "AI Engineer", company: "OpenAI", description: "Work on cutting-edge AI models.", requiredSkills: ["Python", "Machine Learning", "AI"], location: "Remote", salary: "$140,000" },
    { title: "Cybersecurity Analyst", company: "Microsoft", description: "Ensure system security and prevent threats.", requiredSkills: ["Cybersecurity", "SQL"], location: "Washington, USA", salary: "$110,000" },
    { title: "Data Scientist", company: "Amazon", description: "Analyze large datasets and build predictive models.", requiredSkills: ["Python", "Machine Learning", "SQL"], location: "New York, USA", salary: "$130,000" },
    { title: "Cloud Engineer", company: "AWS", description: "Manage and deploy cloud applications.", requiredSkills: ["Cloud Computing", "DevOps"], location: "Texas, USA", salary: "$125,000" },
    { title: "Data Analyst", company: "Deloitte", description: "Interpret complex data to provide business insights.", requiredSkills: ["SQL", "Data Analytics", "Business Intelligence"], location: "Chicago, USA", salary: "$105,000" },
    { title: "Business Intelligence Analyst", company: "Facebook", description: "Develop dashboards and BI reports.", requiredSkills: ["SQL", "Business Intelligence", "Data Analytics"], location: "Remote", salary: "$115,000" }
  ];

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Filter jobs based on selected skills
  const filteredJobs = predefinedJobs.filter((job) =>
    selectedSkills.some((skill) => job.requiredSkills.includes(skill))
  );

  return (
    <div>
      <h2>Job Matching AI</h2>
      
      <h3>Select Your Skills:</h3>
      <div>
        {predefinedSkills.map((skill, index) => (
          <button key={index} onClick={() => handleSkillSelect(skill)} style={{ margin: "5px", padding: "5px 10px", cursor: "pointer" }}>
            {skill}
          </button>
        ))}
      </div>

      <h3>Selected Skills:</h3>
      <p>{selectedSkills.length > 0 ? selectedSkills.join(", ") : "None"}</p>

      <h3>Matching Jobs:</h3>
      {filteredJobs.length > 0 ? (
        <ul>
          {filteredJobs.map((job, index) => (
            <li key={index} style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "5px" }}>
              <h4>{job.title} at {job.company}</h4>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <button 
                onClick={() => navigate("/analytics", { state: { job } })}
                style={{ padding: "5px 10px", cursor: "pointer", background: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
              >
                View Job Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching jobs found. Try selecting more skills.</p>
      )}
    </div>
  );
};

export default JobMatching;
