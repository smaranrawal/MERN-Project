import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-amber-400">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/"
            className="px-6 py-3 bg-amber-400 text-white rounded-lg font-semibold shadow-md hover:bg-amber-500 transition text-center"
          >
            Return Home
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 border border-amber-400 text-amber-400 rounded-lg font-semibold hover:bg-amber-50 transition text-center"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </div>
  );
}
