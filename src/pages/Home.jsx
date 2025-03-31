import React from 'react';

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing content and explore our features.
        </p>
        <div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
          <button className="ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 1</h3>
          <p className="text-gray-600">
            Learn about our first amazing feature and how it can help you.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 2</h3>
          <p className="text-gray-600">
            Explore the second feature that makes our platform unique.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 3</h3>
          <p className="text-gray-600">
            Discover the third feature and how it benefits you.
          </p>
        </div>
      </div>
    </div>
  );
};