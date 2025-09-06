import './App.css';

function Now() {
  return (
    <div className="now max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-8">
     <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10">
        {/* Left Column */}
        <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-red-600 mb-4">What am I working on now?</h2>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2">
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
    </div>
  );
}

export default Now;
