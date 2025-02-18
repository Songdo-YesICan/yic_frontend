import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seats from './pages/Seats.jsx';
import Chatbot from './pages/Chatbot';

// React 18의 root API로 변경
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} key="home"/>
        <Route path="/seats" element={<Seats />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  </StrictMode>
);
