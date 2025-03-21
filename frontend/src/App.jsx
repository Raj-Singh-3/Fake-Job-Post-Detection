/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import ValidateInput from './ValidateInput'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <ValidateInput />
//     </>
//   )
// }

// export default App

// 


import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  SignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./styles/App.css"; // Import the CSS file
import Home from "./components/Home";
import CompleteBackend from "./CompleteBackend";
import AboutUs from "./AboutUs";
import UserDashboard from "./components/Userdashboard";
import JobResult from "./components/JobResult";

export default function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };
  return (
    <BrowserRouter >
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo">
          <Link to="/">FakeJobDetect</Link>
        </div>

        {/* Navigation links on the right */}
        <div className="nav-links" >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <SignedIn>
          <Link to="/userdashboard" className="nav-link">User Dashboard</Link>
          </SignedIn>
          {/* Show "Analyze Post" only when user is signed in */}
          <SignedIn>
            <Link to="/analyzepost" className="nav-link">Analyze Post</Link>
          </SignedIn>
          <Link onClick={toggleTheme} className="nav-link-dark-light">{theme}</Link>
        </div>

        {/* Authentication section */}
        <div className="auth-section">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="get-started-button">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="/userdashboard" element={<UserDashboard></UserDashboard>} />
        {/* <Route path="/contactus" element={<h1>Contact Us</h1>} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h1>Welcome to the Dashboard!</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/analyzepost"
          element={
            <ProtectedRoute>
              <CompleteBackend />
            </ProtectedRoute>
          }
        />
        <Route path="/job-result" element={<JobResult />} />
      </Routes>
    </BrowserRouter>
  );
}

// import React from "react";
// import CompleteBackend from "./CompleteBackend";

// function App() {
//   return (
//     <div className="app">
//       <CompleteBackend />
//     </div>
//   );
// }

// export default App;