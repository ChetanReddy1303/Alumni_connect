import React from "react";
import './LoginPage.css'; // Import custom CSS for background effects

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-teal-100 to-coral-100 animate-gradient px-4 relative overflow-hidden">
      {/* Particle Effect Container */}
      <div className="absolute inset-0 particles"></div>

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md transform hover:scale-105 transition-all duration-300 relative z-10">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-3">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Login to connect with Alumni or Students</p>

        <div className="flex justify-center mb-8 space-x-6">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="userType"
              defaultChecked
              className="form-radio text-indigo-600 focus:ring-indigo-500 h-5 w-5"
            />
            <span className="ml-2 text-gray-700 font-medium">Student</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="userType"
              className="form-radio text-indigo-600 focus:ring-indigo-500 h-5 w-5"
            />
            <span className="ml-2 text-gray-700 font-medium">Alumni</span>
          </label>
        </div>

        <form>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-coral-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:from-coral-600 hover:to-orange-600 transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Register Here
          </a>
        </p>

        <p className="text-center text-sm text-gray-600 mt-2">
          Admin?{" "}
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Go to Admin Panel
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;