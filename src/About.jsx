import './App.css';

function About() {
  return (
    <div className="about max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-8">
     <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10">
        {/* Left Column */}
        <div className="md:w-1/3 mt-10 ">
            <h2 className="text-3xl font-bold text-red-600 mb-4">I'm a software engineer who combines compassion and technical expertise to build impactful solutions.</h2>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 mt-10">
            <p className="text-lg text-gray-700">I'm a software engineer with a unique background. Before I transitioned into tech, I spent several years as an elementary school teacher. That experience taught me the power of communication, patience, and problem-solving, all of which I now bring into my work as a developer.</p>
            <p className="text-lg text-gray-700 pt-4">I'm passionate about using technology to create tools that genuinely help people. Whether it's improving a process, building for accessibility, or creating user-friendly experiences, I believe in using my technical skills for the greater good.</p>
            <p className="text-lg text-gray-700 pt-4">I find all areas of engineering fascinating and love diving into new challenges. I've yet to meet a project I wasn't excited about. I thrive in collaborative environments and value clear, kind communication as much as clean code.</p>
            <p className="text-lg text-gray-700 pt-4">If you're looking to work with someone who’s curious, team-oriented, and driven by purpose, I’d love to connect.</p>   
        </div>
      </div>
    </div>
  );
}

export default About;
