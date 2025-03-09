import React from "react";
import Video from "../../assets/project2.mp4"; 

const Project2 = () => {
  return (
    <>
      <section id="projects" className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Network Security
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" className="text-3xl">
                Phishing Website Detection
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                This tool is an efficient way to identify and mitigate phishing
                attacks by analyzing domain content and comparing webpage images
                to detect malicious activity. It assigns phishing probability
                scores, ensuring high accuracy, quick threat detection, and
                user-friendly outputs, providing a robust defense against cyber
                threats.
              </p>
              <a
                href="https://github.com/Virum9520/storm_BroCode/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-3 mr-2"
                >
                  View Demo
                </button>
              </a>

              <a
                href="https://github.com/Virum9520/storm_BroCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-3"
                >
                  Source Code
                </button>
              </a>
            </div>
            <div data-aos="zoom-in" className="relative">
              <video
                src={Video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              />
              {/* Optional: Faded Overlay Effect */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project2;
