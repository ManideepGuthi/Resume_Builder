import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import JobMatching from './pages/JobMatching';
import Analytics from "./pages/Analytics";
import RecruitmentPortal from "./pages/RecruitmentPortal";

function Home() {
  return (
    <div>
      <h1>Welcome to AI-Powered Portfolio & Resume Builder 🚀</h1>

      <nav>
        <Link to="/dashboard"><button>📊 Dashboard</button></Link>
        <Link to="/resume-builder"><button>📄 Resume Builder</button></Link>
        <Link to="/job-matching"><button>Job Matching</button></Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/job-matching" element={<JobMatching />} />
        <Route path="/" element={<JobMatching />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<RecruitmentPortal />} />
        <Route path="/analytics" element={<Analytics />} />

      </Routes>
    </Router>
  );
}

export default App;