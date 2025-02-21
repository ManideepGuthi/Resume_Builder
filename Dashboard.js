import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [resume, setResume] = useState(null);

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

  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="/resume-builder"><button>📄 Resume Builder</button></Link>
        <Link to="/job-matching"><button>🤖 Job Matching AI</button></Link>
        <Link to="/analytics"><button>📊 Analytics</button></Link>
        <Link to="/recruiter-portal"><button>🧑‍💼 Recruiter Portal</button></Link>
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
        </div>
      ) : (
        <p>No resume found. Please create one in the <Link to="/resume-builder">Resume Builder</Link>.</p>
      )}
    </div>
  );
}

export default Dashboard;
