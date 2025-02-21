import React, { useEffect, useState } from "react";
import axios from "axios";

function ResumeDashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/resumes")
      .then((response) => {
        setResumes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
      });
  }, []);

  return (
    <div>
      <h2>Resume Dashboard</h2>
      {resumes.length === 0 ? (
        <p>No resumes found</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Education</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr key={resume._id}>
                <td>{resume.name}</td>
                <td>{resume.email}</td>
                <td>{resume.phone}</td>
                <td>{resume.skills.join(", ")}</td>
                <td>{resume.experience.join(", ")}</td>
                <td>{resume.education.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResumeDashboard;
