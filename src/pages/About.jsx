import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPhotoshop,
  DiDatabase,
  DiHeroku,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

import { FaFigma, FaNodeJs, FaWordpress } from "react-icons/fa"; // Use FaNodeJs for the Node.js (Express) icon
import "../components/Navbar/Navbar.css";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="h-screen w-full lg:fixed font-poppins px-2 lg:px-10 pt-10 bg-tahiti-50 text-white">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold ml-4 -mt-4 lg:mt-0 lg:ml-12">
          Skills
        </h1>
      </div>

      <div className="about w-full h-auto grid">
        <div className="skills h-full w-full ">
          <div className="flex flex-col w-full lg:px-12 px-2 ">
            <div className="flex justify-between  mt-1 lg:mt-4 ">
              <DiHtml5 className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150  text-6xl p-1 lg:text-8xl border rounded-lg" />
              <DiCss3 className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150 text-6xl p-1 lg:text-8xl border rounded-lg" />
              <DiJavascript1 className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150  text-6xl lg:text-8xl border rounded-lg" />
              <DiReact className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150  text-6xl lg:text-8xl border rounded-lg" />
            </div>
            <div className="flex justify-between  mt-4">
              <FaNodeJs className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150  text-6xl lg:text-8xl p-2 border rounded-lg" />
              <DiMongodb className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150 text-6xl lg:text-8xl border p-2 rounded-lg" />
              <DiDatabase className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150 text-6xl lg:text-8xl border rounded-lg" />
              <FaWordpress className="skills-icon text-tahiti-100 hover:text-white hover:bg-tahiti-150  p-2 text-6xl lg:text-8xl border rounded-lg" />
            </div>
            <div className="flex justify-between  mt-4">
              <DiHeroku className="skills-icon text-tahiti-100 hover:text-white text-6xl lg:text-8xl border p-2 rounded-lg hover:bg-tahiti-150" />
              <SiTailwindcss className="skills-icon text-tahiti-100 hover:text-white text-6xl lg:text-8xl border p-2 rounded-lg hover:bg-tahiti-150 " />
              <FaFigma className="skills-icon text-tahiti-100 hover:text-white text-6xl lg:text-8xl border p-3 rounded-lg hover:bg-tahiti-150 " />
              <DiPhotoshop className="skills-icon text-tahiti-100 hover:text-white text-6xl lg:text-8xl border rounded-lg hover:bg-tahiti-150" />
            </div>
          </div>
        </div>
        <div className="training h-auto -mt-2">
          <p className="text-xs lg:text-lg px-4 lg:py-4 rounded-lg hover:bg-tahiti-150">
            Initially, my career journey led me to excel as a Virtual Assistant
            with a specialization in Data Analysis and Management. However, my
            passion for technology and coding has since taken center stage, and
            I now immerse myself in the world of coding and development.
          </p>
          <p className="text-xs mt-2 lg:text-lg px-4 lg:py-4 rounded-lg hover:bg-tahiti-150">
            I participated in a comprehensive Bootcamp focused on Full Stack Web
            Development, seeking to expand my knowledge and expertise in this
            field. This intensive program provided me with a deep understanding
            of both front-end and back-end technologies, empowering me to create
            fully functional web applications from start to finish.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
