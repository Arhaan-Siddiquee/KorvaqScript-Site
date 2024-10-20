import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-secondary text-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Script Language</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray">Home</Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:text-gray">Documentation</Link>
          </li>
          <li>
            <Link to="/download" className="hover:text-gray">Download</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
