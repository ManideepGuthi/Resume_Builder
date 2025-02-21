import React, { useEffect, useState } from "react";

function RecruiterPortal() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recruiter/resumes")
      .then((res) => res.json())
      .then((data) => setResumes(data));
  }, []);

  return (
    <div>
      <h2>Recruiter Portal</h2>
      <ul>
        {resumes.map((res, index) => (
          <li key={index}>
            <strong>{res.name}</strong> - {res.email} - {res.jobApplied}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecruiterPortal;
