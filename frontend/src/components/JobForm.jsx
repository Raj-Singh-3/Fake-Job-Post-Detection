/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const JobForm = ({ setJobData, setLoading, setError }) => {
  const [url, setUrl] = useState('');
  const [jobPost, setJobPost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        url: url || null,
        job_post: jobPost || null
      });
      setJobData(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred while analyzing the job posting');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">Enter Job URL or paste a job post</label>
          <input
            id="url"
            type="text"
            placeholder="Enter job posting URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            id="jobPost"
            placeholder="Paste job posting content here"
            value={jobPost}
            onChange={(e) => setJobPost(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Analyze Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;