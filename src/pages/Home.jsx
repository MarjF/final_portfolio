import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import "../components/Navbar/Navbar.css";
import marj from "../assets/marj1.png";
import AnimatedText from "../components/AnimatedText/AnimatedText";

const Home = () => {
  return (
    <div className="home container mx-auto h-5/6 w-full bg-tahiti-50 text-white grid">
      <div className="left flex flex-col p-3 lg:pl-10">
        <div className="mt-16 lg:mt-10">
          <h2 className="text-3xl lg:text-5xl">Hello,</h2>

          {/* <AnimatedText text="Hello," className="text-3xl lg:text-5xl" /> */}
        </div>
        <div className="text-center w-full">
          {/* <h1 className="text-7xl lg:text-xxl font-extrabold lg:font-black"> */}

          <AnimatedText
            text="I'm Marj."
            className="text-6xl lg:text-xxl font-extrabold lg:font-black inline-block"
          />

          {/* </h1> */}
        </div>
        <div className="mt-4">
          <p className="text-xs lg:text-lg text-center">
            {/* <AnimatedText
            text=" */}
            I'm an expert Full Stack Web Developer, currently based in the
            Philippines. I'm passionate about web development and creative
            design.
            {/* className="text-xs lg:text-lg text-center"
          /> */}
          </p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/marjorie-faustino-689a53211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="home-icon text-tahiti-100 hover:text-white text-4xl lg:text-5xl" />
          </a>
          <a
            href="https://www.instagram.com/faustinomarj_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="home-icon text-tahiti-100 hover:text-white text-4xl lg:text-5xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="home-icon text-tahiti-100 hover:text-white text-4xl lg:text-5xl" />
          </a>
          <a
            href="https://github.com/MarjF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="home-icon text-tahiti-100 hover:text-white text-4xl lg:text-5xl" />
          </a>
        </div>
      </div>

      <div className="right hidden lg:flex">
        <div className="mx-auto">
          <img src={marj} alt="marj" className="lg:h-98" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
