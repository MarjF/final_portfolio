import React, { useState, useRef } from "react";
import Footer from "../components/Footer/Footer";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BiSolidContact } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jr2ixz4",
        "template_h56axjd",
        form.current,
        "-z3sLUljThQkodLJV"
      )
      .then(() => {
        setShowAlert(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="home container mx-auto h-full mb-5 w-full bg-tahiti-50 text-white ">
      <div className="contact grid p-4">
        <div className="info mt-6 lg:mt-12 w-full  rounded-lg hover:bg-tahiti-150 p-2 lg:px-4 lg:pt-4">
          <h1 className="text-3xl lg:text-5xl font-bold">Get in touch</h1>
          <p className="lg:text-center mt-2 text-sm">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, send me a message or an email and let's talk. 🙂
          </p>

          <div className="pl-6 lg:pl-10">
            <h1 className="text-2xl mt-6 ml-6">Marjorie Faustino</h1>
            <div className="contact-info">
              <div className="location flex">
                <ImLocation2 className="text-tahiti-100 mr-2" />
                <label>#0505 Hagonoy Bulacan</label>
              </div>
              <div className="phone-number flex">
                <BiSolidContact className="text-tahiti-100 mr-2" />
                <label>+63919-123-1234</label>
              </div>
              <div className="email flex">
                <AiTwotoneMail className="text-tahiti-100 mr-2" />
                <label>faustinomarjj@gmail.com</label>
              </div>
            </div>
          </div>
          <a
            href="../../assets/Marjcv.pdf"
            download="Marjorie_Faustino_CV.pdf"
            className="text-white hover:text-tahiti-100 hover:bg-white py-1 w-40 px-2 mx-auto rounded-lg lg:ml-16 mt-2 text- xl flex bg-tahiti-100"
          >
            Download CV
            <BsDownload className="ml-4 mt-1" />
          </a>
          <div>
            <p className="mt-2 text-sm  lg:mt-4">
              Let's get social... Follow my online fan page on Facebook and
              profiles on Instagram, GitLab and Linkedin.
            </p>
            <div className="flex justify-center w-full mt-4 space-x-4 mb-6 ">
              <a
                href="https://www.linkedin.com/in/marjorie-faustino-689a53211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="home-icon text-tahiti-100 hover:text-white text-3xl lg:text-4xl lg:mr-4" />
              </a>
              <a
                href="https://www.instagram.com/faustinomarj_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home-icon text-tahiti-100 hover:text-white text-3xl lg:text-4xl lg:mr-4" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="home-icon text-tahiti-100 hover:text-white text-3xl lg:text-4xl lg:mr-4" />
              </a>
              <a
                href="https://github.com/MarjF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home-icon text-tahiti-100 hover:text-white text-3xl lg:text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="message w-full lg:mt-1 lg:w-9/12 mx-auto text-white rounded-lg hover:bg-tahiti-150 p-4 lg:p-6">
          <h2 className="text-3xl font-semibold mb-2 lg:mb-4 ">Message me</h2>
          {showAlert && (
            <div className=" text-tahiti-100 px-2 text-center rounded-lg mb-2">
              Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} ref={form}>
            <div className="lg:mb-4 mb-2">
              <label
                htmlFor="name"
                className="block font-medium text-tahiti-100"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 px-4 py-2 border h-8 lg:py-1 lg:h-full rounded-lg text-tahiti-50 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="lg:mb-4 mb-2">
              <label
                htmlFor="email"
                className="block font-medium text-tahiti-100 "
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 px-4 py-2 lg:py-1 border h-8 lg:h-full text-tahiti-50 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="lg:mb-4 mb-2">
              <label
                htmlFor="message"
                className="block font-medium text-tahiti-100"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 px-2 py-2 border rounded-lg w-full text-tahiti-50 focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="bg-tahiti-100 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-tahiti-100 cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
