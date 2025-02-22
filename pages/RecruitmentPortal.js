import React, { useState } from "react";

const companies = {
  "Google": {
    description: "Google is a multinational tech company specializing in Internet services and AI.",
    jobs: [
      { title: "Software Engineer", salary: "₹15,00,000/year" },
      { title: "Data Analyst", salary: "₹12,00,000/year" }
    ]
  },
  "Microsoft": {
    description: "Microsoft is a global leader in software, cloud computing, and AI solutions.",
    jobs: [
      { title: "Cloud Engineer", salary: "₹14,50,000/year" },
      { title: "Cybersecurity Analyst", salary: "₹13,00,000/year" }
    ]
  },
  "Amazon": {
    description: "Amazon is a top e-commerce and cloud computing company.",
    jobs: [
      { title: "DevOps Engineer", salary: "₹16,00,000/year" },
      { title: "Machine Learning Engineer", salary: "₹18,00,000/year" }
    ]
  }
};

const RecruitmentPortal = () => {
  const [selectedCompany, setSelectedCompany] = useState("Google");

  return (
    <div>
      <h2>Recruitment Portal</h2>
      <p>Select a company to view job opportunities.</p>
      <select onChange={(e) => setSelectedCompany(e.target.value)}>
        {Object.keys(companies).map((company) => (
          <option key={company} value={company}>{company}</option>
        ))}
      </select>
      <h3>{selectedCompany}</h3>
      <p>{companies[selectedCompany].description}</p>
      <h4>Available Jobs:</h4>
      <ul>
        {companies[selectedCompany].jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.salary}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecruitmentPortal;
