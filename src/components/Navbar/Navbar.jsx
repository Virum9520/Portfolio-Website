import React from "react";
import astronautGif from "../../assets/astronaut.gif";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={astronautGif} alt="Astronaut" className="w-10 h-10" />
              <span>Virum Ranka</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <Link
                    to="aboutme"
                    className="hover:cursor-pointer transform hover:scale-110 hover:text-blue-700 transition-colors duration-300"
                    smooth={true}
                    duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="experience"
                    className="hover:cursor-pointer transform hover:scale-110 hover:text-blue-700 transition-colors duration-300"
                    smooth={true}
                    duration={500}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    className="hover:cursor-pointer transform hover:scale-110 hover:text-blue-700 transition-colors duration-300"
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    className="hover:cursor-pointer transform hover:scale-110 hover:text-blue-700 transition-colors duration-300"
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contactme"
                    className="hover:cursor-pointer transform hover:scale-110 hover:text-blue-700 transition-colors duration-300"
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
