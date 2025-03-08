import React from "react";
import { FaPython, FaReact, FaAws, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiDocker, SiMysql, SiPostgresql, SiC } from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    list: [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    category: "AI & Machine Learning",
    list: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-blue-300" /> },
      { name: "Keras", icon: <SiKeras className="text-red-400" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    list: [
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    list: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-left mb-8" data-aos="fade-up">
          My Skills
        </h2>
        
        <div className="flex flex-col gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-sky-500/50 transition duration-300" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-sky-300 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skill.list.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
