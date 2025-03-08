import React from "react";
import projectVideo from "../../assets/project1.mp4"; 

const Project1 = () => {
  return (
    <>
      <section id="projects" className="bg-primary text-white pb-12">
        <div className="container">
          <h2 id="experience" className="text-4xl text-left font-semibold text-white mb-5">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Video Section */}
            <div data-aos="zoom-in" className="relative">
              <video
                src={projectVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              />
              {/* Faded blackish effect */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>

            {/* Project Details */}
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p data-aos="fade-up" data-aos-delay="300" className="text-sky-800 uppercase">
                Fitness & Healthcare
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" className="text-3xl">
                Flexi - AI fitness Assistant
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Developed an AI-powered web app, utilizing OpenPose for real-time exercise detection, implemented multiple regression
                techniques for personalized calorie tracking and fine-tuned CNN models for image-based calorie analysis, ensuring accurate
                feedback and optimized fitness metrics.
              </p>

              {/* View Demo Button */}
              <a href="https://www.youtube.com/watch?v=sG5puyUgIZA" target="_blank" rel="noopener noreferrer">
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-3 mr-2"
                >
                  View Demo
                </button>
              </a>

              {/* Source Code Button */}
              <a href="https://github.com/Virum9520/Flex.i-AI-powered-fitness-Web-application" target="_blank" rel="noopener noreferrer">
                <button
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-3"
                >
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project1;
