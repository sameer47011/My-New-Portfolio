import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex flex-wrap justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold md:inline hidden"> Sameer </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="w-full md:w-auto space-y-2 md:space-y-0 space-x-0 md:space-x-6 text-center md:text-left hidden md:flex">
          <a href="#home" className="hover:text-gray-400 block md:inline-block">Home</a>
          <a href="#about" className="hover:text-gray-400 block md:inline-block">About Me</a>
          <a href="#service" className="hover:text-gray-400 block md:inline-block">Services</a>
          <a href="#project" className="hover:text-gray-400 block md:inline-block">Projects</a>
          <a href="#contact" className="hover:text-gray-400 block md:inline-block">Contact</a>
        </div>

        {/* Connect Me Button */}
        <a
          href="https://www.linkedin.com/in/sameer-ansari-159976244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline-block
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

