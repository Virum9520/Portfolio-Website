import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import wave from "./assets/wave Gif.gif";
import Project1 from "./components/Project1/Project1.jsx"
import Project2 from "./components/Project2/Project2.jsx";
import Project3 from "./components/Project3/Project3.jsx";
import AboutMe from "./components/Aboutme/Aboutme.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();



const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <HeroCard />
      <Skills />
      <Project1 />
      <Project2 />
      <Project3 />
      {/* <Footer /> */}
      <Footer5 />
    </div>
  );
};

export default App;
