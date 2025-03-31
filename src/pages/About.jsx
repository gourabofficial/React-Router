import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      {/* About Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a team of passionate individuals dedicated to delivering the best experience for our users. Our mission is to create innovative solutions that make a difference in people's lives.
        </p>
        <div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Alice Johnson</h3>
          <p className="text-gray-600">Lead Designer</p>
        </div>
      </div>
    </div>
  );
};