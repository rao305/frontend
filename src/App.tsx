import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavigation from './components/TopNavigation';
import Dashboard from './pages/Dashboard';
import AIAssistant from './pages/AIAssistant';
import Transcript from './pages/Transcript';
import DegreeAudit from './pages/DegreeAudit';
import Planner from './pages/Planner';
import CourseExplorer from './pages/CourseExplorer';
import Settings from './pages/Settings';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-minimal-bg">
          <TopNavigation />
          <main className="max-w-7xl mx-auto px-8 py-8">
            <Routes>
              <Route path="/" element={<AIAssistant />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/transcript" element={<Transcript />} />
              <Route path="/degree-audit" element={<DegreeAudit />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/courses" element={<CourseExplorer />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;