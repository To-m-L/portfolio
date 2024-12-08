import React from "react";
import ExperienceCard from './ExperienceCard';

const projects = [
  {
    title: "Cloud Integrated Habitat Monitoring API",
    company: "",
    date: "May 2024 – June 2024",
    description: [
      " Created a REST API using Python 3.10, AWS Lambda, API Gateway, and DynamoDB for efficient data collection and real-time querying.",
      " Implemented CRUD operations and automated deployment with CloudFormation.",
      " Part of a Full Stack Engineering Challenge."
    ], 
    techStack: ["Python", "AWS"],
    link: "https://github.com/To-m-L/Habitat-Monitoring-API"
  },
  {
    title: "Transaction Search Challenge",
    company: "", 
    date: "May 2024",
    description: [
      " Designed and implemented a dynamic web page using React and MUI, adhering to detailed wireframe specifications for an ATM transaction search interface.",
      " Demonstrated proficiency in handling asynchronous data fetching and managing large datasets from multiple API endpoints to ensure smooth user interactions.",
      " Focused on creating an intuitive user experience, emphasizing responsiveness and performance optimization.",
      " Ranked top 5 out of 250+ participants, showcasing technical expertise and efficient implementation.",
      " Delivered a polished project within strict deadlines, applying effective debugging and code optimization strategies."
    ], 
    techStack: ["React", "MUI", "JavaScript"],
    link: "https://github.com/To-m-L/transaction-search-coding-challenge" 
  },
  {
    title: "RESTful Notes API",
    company: "",
    date: "Nov 2023",
    description: [
      " Developed a robust API to manage client notes, implementing CRUD operations with Node.js and Express.js.",
      " Secured user authentication and data integrity using JWT for token-based authentication and bcrypt for secure password hashing.",
      " Designed the API following RESTful principles, ensuring clear and predictable endpoint behavior.",
      " Optimized for scalability and performance, with a focus on reliability in production environments."
    ], 
    techStack: ["NodeJs", "Express", "JWT", "JavaScript"],
    link: "https://github.com/To-m-L/RESTful-Express-MongoDB" 
  },
  {
    title: "CityClock: Worldwide Time Tracker",
    company: "",
    date: "Sept 2023",
    description: [
      " Developed a web app with Vue.js and Google Cloud APIs to compare time zones globally.",
      " Used Vuetify for UI framework."
    ], 
    techStack: ["VueJs", "Vuetify", "GCP", "JavaScript"], 
    link: "https://github.com/To-m-L/location-getter"
  },
  {
    title: "P2P Chat Room",
    company: "",
    date: "Feb 2022 – Mar 2022",
    description: [
      " Created a P2P chat application using UDP payloads for text messaging.",
      " Demonstrated knowledge of TCP and UDP connections."
    ], 
    techStack: ["Java"],
    link: "https://github.com/To-m-L/P2P-UDP-Connection" 
  },
  {
    title: "qBay",
    company: "",
    date: "Sept 2021 – Dec 2021",
    description: [
      " Created a web application utilizing Flask and SQLAlchemy for a Quality Assurance course.",
      " Conducted Unit Testing with Python’s assert statements to validate functionality.",
      " Automated Integration Testing with Selenium, simulating user interactions.",
      " Created detailed reports regarding SQL Injection and XSS attacks.",
      " Actively participated in Scrum meetings, contributing to iterative development and team collaboration."
    ], 
    techStack: ["Flask", "Python", "Selenium"],
    link: "https://github.com/KarlDorogy/Cisc-327-Course-Project-Group-20" 
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
      </header>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            description={exp.description}
            techStack={exp.techStack}
            link={exp.link}
          />
        ))}
      </div>
    </div>
  );
}
