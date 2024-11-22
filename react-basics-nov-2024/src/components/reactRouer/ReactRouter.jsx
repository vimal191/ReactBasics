import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Home Component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the homepage!</p>
  </div>
);

// About Component
const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the About page!</p>
  </div>
);

// Profile Component (uses useParams)
const Profile = () => {
  const { username } = useParams();
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {username}! </p>
    </div>
  );
};

// NotFound Component
const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>Sorry, the page you're looking for does not exist.</p>
  </div>
);

// App Component with Routing
const ReactRouter = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile/Ajay">Ajay's Profile</Link>
            </li>
            <li>
              <Link to="/profile/Neha">Neha's Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ReactRouter;
