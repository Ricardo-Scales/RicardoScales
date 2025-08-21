
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AAFC from './AAFC.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AAFC />} />
      </Routes>
    </Router>
  );
}

export default App;
