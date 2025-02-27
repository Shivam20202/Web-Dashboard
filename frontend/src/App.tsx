import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<div>Dashboard</div>} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/inputs" element={<div>Inputs</div>} />
              <Route path="/profile" element={<div>Profile</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;