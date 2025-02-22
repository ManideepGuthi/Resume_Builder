import React, { useState } from "react";

const companies = {
  Google: {
    description: "Google is a multinational technology company specializing in Internet-related services and products.",
    jobs: [
      { title: "Software Engineer", salary: "$120,000 - $150,000" },
      { title: "Data Scientist", salary: "$130,000 - $160,000" }
    ]
  },
  Microsoft: {
    description: "Microsoft is a global leader in software, cloud computing, and AI technologies.",
    jobs: [
      { title: "Cloud Engineer", salary: "$110,000 - $140,000" },
      { title: "AI Researcher", salary: "$125,000 - $155,000" }
    ]
  },
  Amazon: {
    description: "Amazon is a leading e-commerce and cloud computing company.",
    jobs: [
      { title: "DevOps Engineer", salary: "$115,000 - $145,000" },
      { title: "Machine Learning Engineer", salary: "$135,000 - $165,000" }
    ]
  },
  Facebook: {
    description: "Facebook (Meta) is focused on social networking, virtual reality, and AI innovations.",
    jobs: [
      { title: "Front-End Developer", salary: "$105,000 - $135,000" },
      { title: "Back-End Developer", salary: "$115,000 - $145,000" }
    ]
  },
  Tesla: {
    description: "Tesla is a pioneer in electric vehicles and renewable energy solutions.",
    jobs: [
      { title: "Embedded Systems Engineer", salary: "$125,000 - $155,000" },
      { title: "Autonomous Driving Engineer", salary: "$140,000 - $170,000" }
    ]
  }
};

const Analytics = () => {
  const [selectedCompany, setSelectedCompany] = useState("Google");

  return (
    <div>
      <h2>Company Analytics</h2>
      <label>Select a Company: </label>
      <select onChange={(e) => setSelectedCompany(e.target.value)} value={selectedCompany}>
        {Object.keys(companies).map((company) => (
          <option key={company} value={company}>{company}</option>
        ))}
      </select>

      <h3>{selectedCompany}</h3>
      <p>{companies[selectedCompany].description}</p>

      <h3>Job Openings</h3>
      <ul>
        {companies[selectedCompany].jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> - {job.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
