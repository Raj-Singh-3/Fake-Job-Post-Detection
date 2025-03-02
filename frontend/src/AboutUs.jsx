/* eslint-disable no-unused-vars */
import React from 'react';
import './styles/AboutUs.css'; // Import the CSS file for styling
import aboutUsImage from './Images/login-page-banner.png'; // Import your image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
        At <strong>FakeJobDetect</strong>, we are committed to protecting job seekers from fraudulent job postings and scams. In today’s digital age, fake job opportunities have become increasingly prevalent, leaving countless individuals vulnerable to exploitation. Our mission is to empower job seekers with the tools and resources they need to identify and avoid fraudulent job listings.
        </p>
        <p>
        Whether you are a fresh graduate or an experienced professional, FakeJobDetect is your trusted partner in navigating the job market safely and confidently. Together, we can create a safer, more transparent job-seeking experience for everyone.
        </p>
      </div>
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;