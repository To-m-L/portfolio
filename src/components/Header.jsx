import React from "react";
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Header = () => (
  <header className="bg-blue-700 text-white py-6 px-4 text-center">
    <h1 className="text-4xl font-bold">Tom Lin</h1>
    <p className="mt-2">
      <a href="mailto:tomlin8731@gmail.com" className="underline">
        tomlin8731@gmail.com
      </a>{" "}
      • 226-600-1892
    </p>
    <div className="flex justify-center items-center space-x-4 mt-2">
      <a href="https://linkedin.com/in/tom-lin-2b73981a2/" 
         className="text-white text-2xl hover:text-gray-200"
         aria-label="LinkedIn">
        <SiLinkedin />
      </a>
      <a href="https://github.com/To-m-L" 
         className="text-white text-2xl hover:text-gray-200"
         aria-label="GitHub">
        <SiGithub />
      </a>
    </div>
  </header>
);

export default Header;
