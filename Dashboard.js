import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [resume, setResume] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/resume/latest")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched resume:", data); // Debugging log
        if (data && Object.keys(data).length > 0) {
          setResume(data);
        }
      })
      .catch((err) => console.error("Error fetching resume:", err));
  }, []);

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  // Function to download the resume
  const downloadResume = () => {
    const resumeData = `
      Name: ${resume.name}
      Email: ${resume.email}
      Phone: ${resume.phone}
      Skills: ${resume.skills}
      Experience: ${resume.experience}
      Job Applied: ${resume.jobApplied}
    `;
    const blob = new Blob([resumeData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume.name}_resume.txt`; // Name of the downloaded file
    a.click();
    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="/resume-builder">
          <button>📄 Resume Builder</button>
        </Link>
        <Link to="/job-matching">
          <button>🤖 Job Matching AI</button>
        </Link>
        <Link to="/analytics">
          <button>📊 Analytics</button>
        </Link>
        <button onClick={toggleContactInfo}>
          {showContact ? "Hide Contact Info" : "Contact Us"}
        </button>
      </nav>

      <h3>📂 My Resume</h3>
      {resume ? (
        <div>
          <p><strong>Name:</strong> {resume.name}</p>
          <p><strong>Email:</strong> {resume.email}</p>
          <p><strong>Phone:</strong> {resume.phone}</p>
          <p><strong>Skills:</strong> {resume.skills}</p>
          <p><strong>Experience:</strong> {resume.experience}</p>
          <p><strong>Job Applied:</strong> {resume.jobApplied}</p>
          <button onClick={downloadResume}>💾 Download Resume</button>
        </div>
      ) : (
        <p>No resume found. Please create one in the <Link to="/resume-builder">Resume Builder</Link>.</p>
      )}

      {showContact && (
        <div>
          <h3>Team Name: Infinity Dynamics</h3>
          <ul>
            <li>Manideep</li>
            <li>Krishna Prasad</li>
            <li>Sowmya</li>
          </ul>
          <p>Email: <a href="mailto:22eg105b37@anurag.edu.in">22eg105b37@anurag.edu.in</a></p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
