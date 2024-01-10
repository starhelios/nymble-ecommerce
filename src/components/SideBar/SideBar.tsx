// Sidebar.js
import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const Sidebar:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <nav className="bg-gray-800 text-white w-64 h-full flex flex-col">
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <ul className="flex-1">
          <li className="p-4 border-b border-gray-700">
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard Home</Link>
          </li>
          <li className="p-4 border-b border-gray-700">
            <Link to="/dashboard/profile" className="hover:text-gray-300">Profile</Link>
          </li>
          <li className="p-4 border-b border-gray-700">
            <Link to="/dashboard/settings" className="hover:text-gray-300">Settings</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
