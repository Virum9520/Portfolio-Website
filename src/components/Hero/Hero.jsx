import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MountainPng from "../../assets/moon-surface-hd.png";
import ErrorGif from "../../assets/error-loading.gif"; // Add your error GIF path

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially show the loading error GIF

  useEffect(() => {
    // Simulate loading delay before the hero section appears
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after delay (e.g., 2 seconds)
    }, 2000); // Adjust the delay time here if needed
  }, []);

  return (
    <div className="bg-black/20 h-full relative">
      
        // Show the actual hero content after loading
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-white space-y-4 lg:pr-36">
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold">Hello, I am</h3>
                <h1 className="text-5xl font-bold bg-gradient-to-l from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Virum Ranka
                </h1>
              </div>
              <p data-aos="fade-up" data-aos-delay="300" className="whitespace-nowrap">
                {/* Add any text you want */}
                Data Science | Artificial Intelligence | Software Development
              </p>
              <Link
              to="aboutme" // Make sure your target section has this ID
              smooth={true}
              duration={500}  // EXACT 500ms transition
              className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200 cursor-pointer inline-block"
              >
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                
              >
                Explore my Universe  ↓
              </button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      <img
        src={MountainPng}
        alt="Background"
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
