import React from 'react';
import Sidebar from './Sidebar';  // Import Sidebar component

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />  {/* Sidebar will be always shown here */}
      <div className="flex-1 p-6">
        {children}  {/* Render the main content (Dashboard, etc.) here */}
      </div>
    </div>
  );
};

export default MainLayout;
