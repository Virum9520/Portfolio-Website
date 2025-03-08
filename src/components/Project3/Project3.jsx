import React from "react";
import video from "../../assets/project3.mp4";
import { FaGithub } from "react-icons/fa";

const Project3 = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Video Section */}
            <div data-aos="zoom-in" className="relative">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              />
              {/* Optional Faded Blackish Effect */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>

            {/* Text Content Section */}
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Big Data Engineering
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" className="text-3xl">
                Big-Data-Pipeline-using-AWS
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                In today's data-centric world, where the volume, velocity, and
                variety of data continue to soar, the efficient management and
                utilization of data assets have become pivotal. A data pipeline
                orchestrates the seamless flow of data from disparate sources to
                actionable insights, driving informed decision-making and
                operational excellence. The pipeline leverages technologies such
                as Kafka, AWS EC2, AWS Glue, Amazon Athena, and Amazon
                QuickSight.
              </p>

              <a
                href="https://github.com/Virum9520/Big-Data-Pipeline-using-AWS/blob/main/README.md"
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
          </div>
        </div>
        <div className="text-center mt-6">
          <p><br></br></p>
          
  <p className="text-3xl text-gray-300" data-aos="fade-up" data-aos-delay="700">
    🚀 Much more on GitHub
  </p>
  <a
  href="https://github.com/virum9520"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-md font-bold hover:bg-sky-600 transition duration-300"
>
  <FaGithub className="text-2xl" /> Explore More Projects
</a>
</div>

      </section>
      
    </>
  );
};

export default Project3;
