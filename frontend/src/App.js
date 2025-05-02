import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Example component
import LoginPage from './components/LoginPage'; // Example component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
