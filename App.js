import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";

function Home() {
  return (
    <div>
      <h1>Welcome to AI-Powered Portfolio & Resume Builder 🚀</h1>

      <nav>
        <Link to="/dashboard"><button>📊 Dashboard</button></Link>
        <Link to="/resume-builder"><button>📄 Resume Builder</button></Link>
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
      </Routes>
    </Router>
  );
}

export default App;
