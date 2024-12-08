import * as React from 'react';
import PropTypes from 'prop-types';
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
import CodeIcon from '@mui/icons-material/Code';

const techIcons = {
  JavaScript: <SiJavascript className="text-orange-400 text-2xl" />,
  React: <SiReact className="text-[#61dafb] text-2xl" />,
  Python: <SiPython className="text-[#306998] text-2xl" />,
  MySQL: <SiMysql className="text-[#00758f] text-2xl" />,
  AWS: <SiAwsamplify className="text-[#FF9900] text-2xl" />,
  PHP: <SiPhp className="text-[#777bb3] text-2xl" />,
  Angular: <SiAngular className="text-[#dd1b16] text-2xl" />,
  NodeJs: <SiNodedotjs className="text-[#8cc84b] text-2xl" />,
  MongoDB: <SiMongodb className="text-[#47a248] text-2xl" />,
  Firebase: <SiFirebase className="text-[#ffcc00] text-2xl" />,
  Tailwind: <SiTailwindcss className="text-[#06b6d4] text-2xl" />,
  MUI: <SiMui className="text-[#007fff] text-2xl" />,
  Express: <SiExpress className="text-[#eeeeee] text-2xl" />,
  TypeScript: <SiTypescript className="text-[#007acc] text-2xl" />,
  JWT: <SiJsonwebtokens className="text-[#9cf6ff] text-2xl" />,
  GCP: <SiGoogle className="text-[#4285f4] text-2xl" />,
  VueJs: <SiVuedotjs className="text-[#41b883] text-2xl" />,
  Vuetify: <SiVuetify className="text-[#1867c0] text-2xl" />,
  Java: <FaJava className="text-[#007396] text-2xl" />,
  Flask: <SiFlask className="text-[#eeeeee] text-2xl" />,
  Selenium: <SiSelenium className="text-[#43b02a] text-2xl" />
};

const ExperienceCard = ({ title, company, date, description, techStack, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card
      className="max-w-[800px] w-full m-4 border border-lime-700 rounded-lg shadow-lg flex flex-col bg-gray-800 text-white cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <Box className="p-6 flex flex-col flex-grow bg-gray-800 text-white">
        <Stack direction="column" className="mb-2">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm text-gray-400">{company}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </Stack>
        <ul className="text-sm text-gray-400 mt-2">
          {description.map((desc, index) => (
            <li key={index}>&#8226; {desc}</li>
          ))}
        </ul>
      </Box>
      <Divider className="my-4 border-gray-700" />
      <Box className="p-6 flex-shrink-0 bg-gray-800 text-white">
        <Stack direction="row" spacing={2}>
          {techStack.map((tech, index) => (
            <Box
              key={index}
              className="relative flex items-center justify-center group"
            >
              <Box className="transition-transform transform group-hover:scale-125">
                {techIcons[tech] || <CodeIcon className="text-gray-500 text-2xl" />}
              </Box>
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
  link: PropTypes.string
};

export default ExperienceCard;
