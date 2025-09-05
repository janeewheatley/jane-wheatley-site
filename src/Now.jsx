import './App.css';

function Now() {
  return (
    <div className="now max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-8">
     <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10">
        {/* Left Column */}
        <div className="md:w-1/3 mt-10 ">
            <h2 className="text-3xl font-bold text-red-600 mb-4">What am I working on now?</h2>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 mt-10">
            <p className="text-lg text-gray-700 mb-6">I recently participated in <a href="https://codetv.link" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-black underline transition-colors">CodeTv's</a> Web Dev Challenge.  The challenge was to build a breakfast app in under 4 hours, using the tool <a href="https://hashbrown.dev/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-black underline transition-colors">Hashbrown</a>.  Check out what my partner and I accomplished <a href="https://github.com/janeewheatley/hashbrown-breakfast-app" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-black underline transition-colors">here.</a></p>
            
            <h3 className="text-xl font-semibold text-red-600 mb-3">What I learned:</h3>
            <ul className="list-disc list-outside text-lg text-gray-700 space-y-2 px-5">
                <li>How to rapidly prototype with new tools and frameworks</li>
                <li>Effective pair programming techniques under time pressure</li>
                <li>Generative AI can accelerate development, but it’s a tool, not a replacement for a developer’s creativity and problem-solving</li>
                <li>How to prioritize features when time is limited</li>
            </ul>
        </div>
      </div>

      {/* Footer with Social Icons */}
      <div className="flex justify-center items-center mt-25 pb-20 space-x-8">
        <a
          href="https://www.linkedin.com/in/jane-wheatley-a65313112/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-black transition-colors duration-200"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/janeewheatley"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-black transition-colors duration-200"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Now;
