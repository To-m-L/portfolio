import React from "react";
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Xambi Tech",
    date: "Oct 2024 - Dec 2024",
    description: [
      " Built dynamic web pages and reusable components using React and Tailwind CSS.",
      " Enhanced data querying efficiency with custom React hooks for Firebase integration.",
      " Delivered scalable solutions aligned with modular design principles, optimizing usability across features."
    ],
    techStack: ["React", "Firebase", "Tailwind", "JavaScript"],

  },
  {
    title: "Web Developer",
    company: "Monster Plow Company", 
    date: "Mar 2024 - Apr 2024",
    description: [
      " Built PHP models for an online quote and contract signing service, improving code maintainability.",
      " Streamlined task tracking by creating a Todo list using Angular and Angular Materials.",
      " Designed a RESTful backend for seamless client account management."
    ], 
    techStack: ["PHP", "JavaScript", "MongoDB", "Angular", "TypeScript"], 
  },
  {
    title: "Full Stack Developer",
    company: "Individual Client (noorurrahman94@gmail.com)",
    date: "Sep 2022 - Apr 2023",
    description: [
      " Designed and implemented a greenhouse gas web calculator, increasing reporting efficiency by 100%.",
      " Utilized React, AWS (Lambda, API Gateway, DynamoDB), and Node.js for scalable deployment.",
      " Authored technical documentation, requirement plans, and QA protocols to ensure maintainability."
    ], 
    techStack: ["React", "NodeJs", "AWS", "JavaScript"], 
  },
  
];

export default function WorkExperience() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-bold mb-6">Experiences</h1>
      </header>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            description={exp.description}
            techStack={exp.techStack}
            
          />
        ))}
      </div>
    </div>
  );
}


