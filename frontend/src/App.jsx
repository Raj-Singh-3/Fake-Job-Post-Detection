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


import React from "react";
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

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo">
          <Link to="/">FakeJobDetect</Link>
        </div>

        {/* Navigation links on the right */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <SignedIn>
          <Link to="/admin" className="nav-link">User Dashboard</Link>
          </SignedIn>
          {/* Show "Analyze Post" only when user is signed in */}
          <SignedIn>
            <Link to="/analyzepost" className="nav-link">Analyze Post</Link>
          </SignedIn>
          <Link to="/contactus" className="nav-link">Dark/Light</Link>
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
        <Route path="/admin" element={<h1>User dashborad</h1>} />
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