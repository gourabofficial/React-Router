import React from "react";
import { Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        We Dont have any Product at this Moment
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
      Thank you!
      </p>

      
      <Outlet />
    </div>
  );
};
 
