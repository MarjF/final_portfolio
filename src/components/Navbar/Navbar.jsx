import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "../Navbar/Navbar.css";
import "../../pages/pages.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="border-b-2 border-tahiti-100">
      <div className="container mx-auto bg-tahiti-50 lg:text-white lg:px-24 lg:pr-36 text-2xl flex items-center lg:h-24 h-16 justify-between  py-8">
        <Link to="/">
          {/* Use Link component for the logo */}
          <img
            src={logo}
            alt="logo"
            className="mt-2 h-44 w-44 -ml-2 lg:h-60 lg:w-60 "
          />
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-3 mr-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-tahiti-100"></span>
              <span className="block h-0.5 w-8 bg-tahiti-100"></span>
              <span className="block h-0.5 w-8 bg-tahiti-100"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav " : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-16 w-16 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-4 uppercase">
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <Link to="/about" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/projects" onClick={closeMobileMenu}>
                    Projects
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/about"
                className="hover:text-tahiti-100 hover:underline hover:wavy-underline uppercase"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-tahiti-100 hover:underline hover:wavy-underline uppercase"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-tahiti-100 hover:underline hover:wavy-underline uppercase"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
