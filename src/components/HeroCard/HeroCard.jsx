import React from "react";
import wave from "../../assets/wave Gif.gif";
import companyLogo1 from "../../assets/companyLogo1.png"; 
import companyLogo2 from "../../assets/companyLogo2.png";
import companyLogo3 from "../../assets/companyLogo3.png";

const ServiceData = [
  {
    title: "AI/ML Developer",
    content: "July'24 - Current",
    description: [
      "Developed AI/ML models for Twitter data classification using NLP, achieving 81% accuracy and reducing false positives by 15%.",
      "Automated tweet scraping and processing, enhancing user-targeting efficiency on the Sprect platform.",
    ],
    logo: companyLogo1,
    link: "https://sprect.com",
    aosDelay: "300",
  },
  {
    title: "Gen AI Developer",
    content: "Dec'23 - Mar'24",
    description: [
      "Enhanced audio-visual synchronization and accessibility by employing Text-to-Speech technologies, fine-tuned voice models, and lip-syncing models",
      "Utilized AI models for image generation and prompt-based editing to improve visual appeal for multimedia projects",
    ],
    logo: companyLogo2,
    link: "http://whiteturtlestudios.com/",
    aosDelay: "500",
  },
  {
    title: "Backend Developer",
    content: "Oct'23 - Nov'23",
    description: [
      "Designed and maintained scalable backend services, developing and integrating RESTful APIs to enhance platform performance",
      "Optimized database schemas and managed AWS EC2 instances, ensuring over 90% uptime and reliable application availability"
    ],
    logo: companyLogo3,
    link: "http://crucibo.com/",
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <section id="experience" className="bg-primary">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="text-center py-10">
            <h2 className="text-4xl text-left font-semibold text-white">Experience</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[200px] flex flex-col justify-start items-start rounded-xl gap-4 bg-gray-800 /60 backdrop-blur-sm text-white text-left text-lg py-4 px-6 w-full lg:w-[300px] mx-auto"
              >
                {/* Company Logo with Link */}
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={data.logo}
                    alt={`${data.title} Logo`}
                    style={{
                      paddingTop: data.title !== "Gen AI Developer" ? "2.66rem" : "0",
                      paddingBottom: data.title !== "Gen AI Developer" ? "2.66rem" : "0"
                    }}
                    className="object-fill"
                  />
                </a>
                {/* Title */}
                <h1 className="text-2xl font-bold">{data.title}</h1>
                {/* Date/Time Period */}
                <p className="font-medium">{data.content}</p>
                {/* Description as Bullet Points */}
                <ul className="list-disc list-outside pl-5 space-y-2 mt-4">
                  {data.description.map((point, idx) => (
                    <li key={idx} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Decorative Wave Image */}
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
