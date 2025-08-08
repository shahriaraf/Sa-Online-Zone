import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <FiAlertCircle className="text-7xl text-red-500 mb-6" />
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
