import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import DocumentRepository from './components/DocumentRepository';
import LoginPage from './components/LoginPage';
import MeetingPage from './components/MeetingPage';
import MeetingsList from './components/MeetingsList';
import mockMeetings from './data/mockMeetings';
import MeetingDetails from './components/MeetingDetails';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<DocumentRepository />} />
        <Route path="/meetings" element={<MeetingPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/meetings-list" element={<MeetingsList meetings={mockMeetings} />} />
        <Route path="/meetings" element={<MeetingsList meetings={mockMeetings} />} />
        <Route path="/meeting/:meetingId" element={<MeetingDetails meetings={mockMeetings} />} />
      </Routes>
    </Router>
  );
}

export default App;
