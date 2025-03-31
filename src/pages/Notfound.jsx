import React from 'react';
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mb-8 text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
       to={"/"}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
        </Link>
    </div>
  );  
};