import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import HomePage from './Components/Home';
import Dashboard from './Components/Dashboard'
import MainLayout from './Components/MainLayout ';

function App() {
  return (
    <Routes>
      {/* HomePage route without Sidebar */}
      <Route path="/" element={<HomePage />} />  

      {/* Dashboard route with Sidebar */}
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
    </Routes>
  );
}

export default App;
