import React from "react";
import './HomePage.css'; // Import custom CSS for particle effect

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-teal-100 to-coral-100 animate-gradient text-gray-900 font-sans relative overflow-hidden">
      {/* Particle Effect Container */}
      <div className="absolute inset-0 particles"></div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg px-6 py-4 md:px-12 md:py-6 flex justify-between items-center sticky top-0 z-50">
        {/* Left: Logo */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Alumni Connect</h1>
        </div>

        {/* Center: Nav Links */}
        <div className="flex-1 hidden md:flex justify-center space-x-10">
          {["Home", "About", "Features", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 text-lg font-medium hover:text-indigo-600 transition-all duration-300 ease-in-out relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right: Login/Register */}
        <div className="flex-1 flex justify-end">
          <a
            href="/login"
            className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-teal-600 transition-all duration-300 shadow-md"
          >
            Login / Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20 pb-32 px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-6 leading-tight">
          Connect. Inspire. Grow.
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl">
          Your central hub for students and alumni to network, share, and grow together.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-coral-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-coral-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}

export default HomePage;