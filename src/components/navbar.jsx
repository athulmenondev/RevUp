import React, { useState } from 'react';
// We rename the standard Link to 'RouterLink' to avoid a name conflict
import { Link as RouterLink } from 'react-router-dom';
// Import the Link component from react-scroll
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Using icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navLinks to handle BOTH scrolling and page routes
  const navLinks = [
    // 'type: "scroll"' will scroll to an ID on the current page
    { name: 'Home', type: 'scroll', target: 'home' }, // Corresponds to an id="home"
    
    // 'type: "route"' will navigate to a new page path
    { name: 'RevUp', type: 'route', target: '/revup' }, // Navigates to /revup page
    { name: 'Sponsors', type: 'route', target: '/sponsors' }, // Navigates to /sponsors page
    
    { name: 'About', type: 'scroll', target: 'about' }, // Corresponds to an id="about"
  ];

  // Common classes for all nav links
  const linkClassName = "text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer";

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo and Brand (Uses RouterLink to go to homepage) */}
          <RouterLink to="/" className="flex items-center space-x-2">
            {/* Placeholder for your logo graphic */}
            <svg className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
            </svg>
            <span className="font-bold text-lg whitespace-nowrap">SBC NSSCE</span>
          </RouterLink>

          {/* Center: Desktop Navigation Links (Conditionally renders ScrollLink or RouterLink) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <ScrollLink
                  key={link.name}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjusts for sticky navbar height
                  duration={500}
                  className={linkClassName}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.name}
                  to={link.target} // This is now a path like "/revup"
                  className={linkClassName}
                >
                  {link.name}
                </RouterLink>
              )
            ))}
          </div>

          {/* Right Side: Register Button (Uses RouterLink) & Mobile Menu Icon */}
          <div className="flex items-center">
            {/* Register Now Button (Desktop) */}
            <RouterLink
              to="/register" // This still goes to a separate page
              className="hidden md:block bg-blue-300 hover:bg-blue-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Register Now
            </RouterLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 p-2 text-gray-300 hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-900 shadow-xl border-t border-gray-700`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            link.type === 'scroll' ? (
              <ScrollLink
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.name}
                to={link.target}
                className={linkClassName}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.name}
              </RouterLink>
            )
          ))}
          <RouterLink
            to="/register"
            className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Register Now
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

