import * as React from 'react';
import PropTypes from 'prop-types'; // For type-checking props
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { 
  SiJavascript, SiReact, SiPython, SiPhp, SiMysql, SiAwsamplify, SiAngular, 
  SiNodedotjs, SiMongodb, SiFirebase, SiTailwindcss, SiMui, SiExpress, 
  SiTypescript, SiJsonwebtokens, SiGoogle, SiVuedotjs, SiVuetify, SiFlask, SiSelenium 
} from 'react-icons/si'; 
import { FaJava } from 'react-icons/fa';
import CodeIcon from '@mui/icons-material/Code'; // Fallback icon

const techIcons = {
  JavaScript: <SiJavascript className="text-orange-400 text-2xl" />, // Official JS yellow
  React: <SiReact className="text-[#61dafb] text-2xl" />, // Official React light blue
  Python: <SiPython className="text-[#306998] text-2xl" />, // Official Python blue
  MySQL: <SiMysql className="text-[#00758f] text-2xl" />, // Official MySQL blue
  AWS: <SiAwsamplify className="text-[#FF9900] text-2xl" />, // AWS official orange
  PHP: <SiPhp className="text-[#777bb3] text-2xl" />, // Official PHP purple
  Angular: <SiAngular className="text-[#dd1b16] text-2xl" />, // Official Angular red
  NodeJs: <SiNodedotjs className="text-[#8cc84b] text-2xl" />, // Official Node.js green
  MongoDB: <SiMongodb className="text-[#47a248] text-2xl" />, // Official MongoDB green
  Firebase: <SiFirebase className="text-[#ffcc00] text-2xl" />, // Official Firebase yellow
  Tailwind: <SiTailwindcss className="text-[#06b6d4] text-2xl" />, // Official Tailwind blue
  MUI: <SiMui className="text-[#007fff] text-2xl" />, // Official Material-UI blue
  Express: <SiExpress className="text-[#000000] text-2xl" />, // Official Express black
  TypeScript: <SiTypescript className="text-[#007acc] text-2xl" />, // Official TypeScript blue
  JWT: <SiJsonwebtokens className="text-[#9cf6ff] text-2xl" />, // Approx JWT light blue
  GCP: <SiGoogle className="text-[#4285f4] text-2xl" />, // Official Google blue (GCP)
  VueJs: <SiVuedotjs className="text-[#41b883] text-2xl" />, // Official Vue.js green
  Vuetify: <SiVuetify className="text-[#1867c0] text-2xl" />, // Official Vuetify blue
  Java: <FaJava className="text-[#007396] text-2xl" />, // Official Java blue
  Flask: <SiFlask className="text-[#000000] text-2xl" />, // Official Flask black
  Selenium: <SiSelenium className="text-[#43b02a] text-2xl" /> // Official Selenium green
};


const ExperienceCard = ({ title, company, date, description, techStack, link }) => {
  const handleClick = () => {
    if (link) {
      console.log("I am here")
      window.open(link, '_blank');
    }
  };

  return (
    <Card 
      className="max-w-[800px] m-4 border rounded-lg shadow-md flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <Box className="p-6 flex flex-col flex-grow">
        {/* Top part of the card (Title, Company, Date) */}
        <Stack direction="column" className="mb-2">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-sm text-gray-400">{company}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </Stack>

        {/* Description as a list */}
        <ul className="text-sm text-gray-600 mt-2">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </Box>
      
      {/* Divider */}
      <Divider className="my-4" />
      
      {/* Tech Stack section */}
      <Box className="p-6 flex-shrink-0">
        <Stack direction="row" spacing={1}>
          {techStack.map((tech, index) => (
            <Box key={index} className="flex items-center justify-center">
              {techIcons[tech] || <CodeIcon className="text-gray-500 text-2xl" />} {/* Default Icon */}
            </Box>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string, // Non-mandatory prop
};

export default ExperienceCard;
