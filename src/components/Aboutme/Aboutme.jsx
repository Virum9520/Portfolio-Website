import React from "react";
import profileImg from "../../assets/astronaut.gif";

const AboutMe = () => {
  return (
    <section id="aboutme" className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 items-center">
          
          {/* About Me Text Section - Takes 3/4 of the space */}
          <div data-aos="fade-left" className="sm:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I’m a <span className="font-bold text-blue-500">Data Scientist</span> and <span className="font-bold text-blue-500">Software Developer</span>. I get to turn messy data into meaningful insights and, occasionally, make computers do cool things.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Currently, I’m in the final stretch of my <span className="font-bold text-blue-500">CSE (Data Science)</span> degree, juggling research, projects, and enough caffeine to power a small city. My interests lie at the intersection of <span className="font-bold text-blue-500">technology</span> with <span className="font-bold text-blue-500">business</span> and <span className="font-bold text-blue-500">healthcare</span>, where I aim to create solutions that are not just smart but also practical.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              When I’m not knee-deep in algorithms, you’ll find me mentoring aspiring developers, exploring investment strategies, or figuring out the next big idea. Always learning, always building—because what’s life without a little curiosity?
              <br /><br />
              🚀 Let’s connect and create something awesome!
            </p>

            {/* Actionable Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://drive.google.com/file/d/14WMv4f0CiiEUbtnV0sm5UyI2iVzGZQ80/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition"
              >
                View Resume
              </a>
              <a
                href="https://linkedin.com/in/virumranka" // Add your LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image Section - Takes 1/4 of the space */}
          <div data-aos="fade-right" className="sm:col-span-1 flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg border-4 border-sky-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
