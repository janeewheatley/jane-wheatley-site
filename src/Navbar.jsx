import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="max-w-7xl mx-auto px-10 py-5 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl sm:text-4xl font-bold text-red-600">
            Jane Wheatley
          </a>

          {/* Hamburger Menu Button - Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex space-x-6 text-lg">
            <a href="/about" className="text-gray-600 hover:text-black transition">About</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">Resume</a>
            <a href="/now" className="text-gray-600 hover:text-black transition">Now</a>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2 text-lg">
            <a href="about" className="block text-gray-600 hover:text-black transition">About</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-black transition">Resume</a>
            <a href="/now" className="block text-gray-600 hover:text-black transition">Now</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
