/* eslint-disable no-unused-vars */
import { useState } from 'react';
import JobForm from './components/JobForm';
import JobResult from './components/JobResult';
// import Navbar from './components/Navbar';
import realFake from "./Images/flat-employment-agency-search-new-employees-hire_88138-802-removebg-preview.png";
import './styles/CompleteBackend.css';

function CompleteBackend() {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="completeBackend">
      {/* <Navbar /> */}
      <div className='outer-container'>
      <div className='header'>
      <h1>Job Post Analyzer</h1>
      <p>AI-Powered Job Scam Detector – Stay Safe, Stay Smart!Protects job seekers from scams & phishing attempts.Saves time by filtering out unreliable job listings.Ensures a safer, smarter job search experience.</p>
      </div>
      <img src={realFake}></img>
      </div>
      <main>
        <JobForm 
          setJobData={setJobData}
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
        {jobData && <JobResult jobData={jobData} />}
      </main>
      
    </div>
  );
}
export default CompleteBackend;