import React from "react";
import project1 from "../assets/project_portfolio.jpg";
import project2 from "../assets/project_game.jpg";
import project3 from "../assets/project_react.jpg";
import project4 from "../assets/project_backend.jpg";
import project5 from "../assets/project_mern.jpg";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import Footer from "../components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <div className="home container mx-auto h-full w-full bg-tahiti-50 text-white">
        <div className="text-center mt-8 mb-4 lg:mb-6">
          <p>
            As a passionate and dedicated web developer, I have had the
            opportunity to work on some exciting projects that showcase my
            skills and creativity.
          </p>
        </div>
        <div className="projects grid w-full h-auto p-3 lg:mt-8">
          <div className="project4 project grid mt-4 lg:mt-0 h-auto lg:h-80 rounded-lg p-2 lg:px-52 lg:mb-4 hover:bg-tahiti-150">
            <div className="pic lg:w-64 w-1/2  h-auto mt-2">
              <img src={project5} alt="Inventory Management" />
            </div>
            <div className="details text-start mt-2 lg:mt-0">
              <div className="flex">
                <h1 className="text-2xl lg:text-xl font-bold">Chika Minute</h1>
                <div className=" ml-2 lg:ml-4 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://chikaminute-mern-app.onrender.com/">
                    <BsBoxArrowUpRight className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" ml-2 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://github.com/marscreation/chikaminute">
                    <BsGithub className=" h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-1 lg:mt-2">
                <div className="flex flex-row">
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5 rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">HTML</span>
                  </div>
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">CSS</span>
                  </div>
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-1 px-2  rounded-lg text-sm lg:text-base mr-4">
                    <span className="text-center">JAVASCRIPT</span>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">REACT</span>
                  </div>
                </div>
              </div>
              <p className="text-xs lg:text-sm mt-2 mb-2">
                ChikaMinute is an interactive messaging app thoughtfully
                designed by our experienced team,utilizing the power of the MERN
                (MongoDB, Express.js, React, Node.js) stack. This platform
                offers engaging communication experience, combining modern
                technologies with user-centric design principles.
              </p>
            </div>
          </div>
          <div className="project3 projects grid mt-4 lg:mt-0 h-auto lg:h-60 rounded-lg p-2 lg:px-52 lg:mb-4 hover:bg-tahiti-150">
            <div className="pic lg:w-64 w-full  h-auto mt-2 lgLmt-0">
              <img src={project3} alt="Tax Calculator" />
            </div>
            <div className="details text-start mt-2 lg:mt-0">
              <div className="flex">
                <h1 className="text-2xl font-bold">Tax Calculator</h1>
                <div className=" ml-2 lg:ml-4 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://tax-calculator-philippines-project.netlify.app/">
                    <BsBoxArrowUpRight className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" ml-2 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://github.com/MarjF/p3-react-app">
                    <BsGithub className=" h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex mt-1 lg:mt-2">
                <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                  <span className="text-center">HTML</span>
                </div>
                <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                  <span className="text-center">CSS</span>
                </div>
                <div className="text-tahiti-300 bg-tahiti-200 lg:px-1 px-2 rounded-lg text-sm lg:text-base mr-4">
                  <span className="text-center">JAVASCRIPT</span>
                </div>
              </div>
              <p className="text-xs lg:text-sm mt-2 mb-2">
                The Tax Calculator Philippines App is a user-friendly web
                application developed with React, designed to help individuals
                quickly and accurately calculate their income tax liabilities
                based on the Philippine tax system.
              </p>
            </div>
          </div>

          <div className="project4 project grid mt-4 lg:mt-0 h-auto lg:h-60 rounded-lg p-2 lg:px-52 lg:mb-4 hover:bg-tahiti-150">
            <div className="pic lg:w-64 w-full  h-auto mt-2">
              <img src={project4} alt="Inventory Management" />
            </div>
            <div className="details text-start mt-2 lg:mt-0">
              <div className="flex">
                <h1 className="text-2xl lg:text-xl font-bold">
                  Inventory Management
                </h1>
                <div className=" ml-2 lg:ml-4 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://onekonekinternet.netlify.app/">
                    <BsBoxArrowUpRight className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" ml-2 mt-1  text-tahiti-100 hover:text-white">
                  <a href="https://github.com/MarjF/p4-node-app">
                    <BsGithub className=" h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-1 lg:mt-2">
                <div className="flex flex-row">
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5 rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">HTML</span>
                  </div>
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">CSS</span>
                  </div>
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-1 px-2  rounded-lg text-sm lg:text-base mr-4">
                    <span className="text-center">JAVASCRIPT</span>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base lg:text-xl mr-4">
                    <span className="text-center">REACT</span>
                  </div>
                </div>
              </div>
              <p className="text-xs lg:text-sm mt-2 mb-2">
                The Inventory Management App is a comprehensive and efficient
                backend project that seamlessly integrates Express.js, Node.js,
                and React to offer a robust solution for managing inventory.
              </p>
            </div>
          </div>
        </div>

        <div className="project1 project grid lg:mt-2 h-auto lg:h-44 rounded-lg p-2 lg:px-52 lg:mb-4 hover:bg-tahiti-150">
          <div className="pic lg:w-64 w-full  h-auto mt-2">
            <img src={project1} alt="Web Dev Porfolio" />
          </div>
          <div className="details text-start mt-2 lg:mt-0">
            <div className="flex">
              <h1 className="text-xl font-bold">Web Dev Porfolio</h1>
              <div className=" ml-2 lg:ml-4 mt-1  text-tahiti-100 hover:text-white">
                <a href="https://p1-web-dev-portfolio-marj.netlify.app/">
                  <BsBoxArrowUpRight className=" h-5 w-5" />
                </a>
              </div>
              <div className=" ml-2 mt-1  text-tahiti-100 hover:text-white">
                <a href="https://github.com/MarjF/p1-web-dev-portfolio">
                  <BsGithub className=" h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex mt-1 lg:mt-2">
              <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base mr-4">
                <span className="text-center">HTML</span>
              </div>
              <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5 rounded-lg text-base mr-4">
                <span className="text-center">CSS</span>
              </div>
            </div>
            <p className="text-xs lg:text-sm lg:mt-2 mt-4 mb-2">
              A personal website that can be a great space to express yourself,
              showcase your work and skills using pure HTML and CSS.
            </p>
          </div>
        </div>

        <div className="project2 project grid mt-4 lg:mt-0 h-auto lg:h-44 rounded-lg p-2 lg:px-52 lg:mb-4 hover:bg-tahiti-150">
          <div className="pic lg:w-64 w-full h-auto mt-2">
            <img src={project2} alt="Logo Guessing Game" />
          </div>
          <div className="details text-start mt-2 lg:mt-0">
            <div className="flex">
              <h1 className="text-xl font-bold">Logo Guessing Game</h1>
              <div className=" ml-2 lg:ml-4 mt-1 lg:mt-0 text-tahiti-100 hover:text-white">
                <a href="https://p1-web-dev-portfolio-marj.netlify.app/">
                  <BsBoxArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div className=" ml-2 mt-1 lg:mt-0 text-tahiti-100 hover:text-white">
                <a href="https://github.com/MarjF/p2-js-game">
                  <BsGithub className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex mt-1 lg:mt-2">
              <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5  rounded-lg text-base mr-4">
                <span className="text-center">HTML</span>
              </div>
              <div className="text-tahiti-300 bg-tahiti-200 lg:px-5 px-5 rounded-lg text-base mr-4">
                <span className="text-center">CSS</span>
              </div>
              <div className="text-tahiti-300 bg-tahiti-200 lg:px-1 px-2 rounded-lg text-sm mr-4">
                <span className="text-center">JAVASCRIPT</span>
              </div>
            </div>
            <p className="text-xs lg:text-sm lg:mt-2 mt-4 mb-2">
              Logo Guessing Game is a creative and enjoyable web game inspired
              with 4pics1word where I used HTML, CSS and Vanilla JS.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
