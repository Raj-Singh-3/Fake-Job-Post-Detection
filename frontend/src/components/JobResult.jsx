/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/JobResult.css";

const JobResult = () => {
  const location = useLocation();
  const jobData = location.state?.jobData;

  if (!jobData) {
    return <div>No job data available</div>;
  }

  const features = [
    { key: 'job_title', label: 'Job Title' },
    { key: 'job_location', label: 'Location' },
    { key: 'department', label: 'Department' },
    { key: 'range_of_salary', label: 'Salary Range' },
    { key: 'profile', label: 'Profile' },
    { key: 'job_description', label: 'Description' },
    { key: 'requirements', label: 'Requirements' },
    { key: 'job_benefits', label: 'Benefits' },
    { key: 'telecommunication', label: 'Remote Work' },
    { key: 'company_logo', label: 'Has Company Logo' },
    { key: 'type_of_employment', label: 'Employment Type' },
    { key: 'experience', label: 'Experience' },
    { key: 'qualification', label: 'Qualification' },
    { key: 'type_of_industry', label: 'Industry' },
    { key: 'operations', label: 'Operations' },
    { key: 'fraudulent', label: 'Validity' }
  ];

  const getValue = (key) => {
    const value = jobData[key];
    
    if (value === undefined || value === null) {
      return 'Not specified';
    }
    
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    
    if (value === 0 || value === 1) {
      return value === 1 ? 'Yes' : 'No';
    }
    
    if (value === '') {
      return 'Not specified';
    }
    
    return value;
  };

  return (
    <div className="results-container">
      <h2>Job Analysis Results</h2>
      <div className="results-grid">
        {features.map(({ key, label }) => (
          <div key={key} className="result-item">
            <h3>{label}</h3>
            <p>{getValue(key)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobResult;