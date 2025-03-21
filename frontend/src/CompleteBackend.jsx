/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobForm from './components/JobForm';
import realFake from "./Images/flat-employment-agency-search-new-employees-hire_88138-802-removebg-preview.png";
import './styles/CompleteBackend.css';

function CompleteBackend() {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleJobData = (data) => {
    setJobData(data);
    navigate('/job-result', { state: { jobData: data } });
  };

  return (
    <div className="completeBackend">
      <div className='outer-container'>
        <div className='header'>
          <h1>Job Post Analyzer</h1>
          <p>AI-Powered Job Scam Detector – Stay Safe, Stay Smart!Protects job seekers from scams & phishing attempts.Saves time by filtering out unreliable job listings.Ensures a safer, smarter job search experience.</p>
        </div>
        <img src={realFake} alt="Job Analyzer" />
      </div>
      <main>
        <JobForm 
          setJobData={handleJobData}
          setLoading={setLoading}
          setError={setError}
        />
        {loading && (
          <div className="loading-message">
            Analyzing job posting...
          </div>
        )}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </main>
    </div>
  );
}

export default CompleteBackend;