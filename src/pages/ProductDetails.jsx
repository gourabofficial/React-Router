import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams(); 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Product Details
      </h2>
      <p className="text-gray-600">
        You are viewing details for product ID: <strong>{productId}</strong>
      </p>
    </div>
  );
};