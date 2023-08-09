import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tahiti-50 text-white py-4 text-center fixed bottom-0 left-0 w-full">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Marjorie Faustino. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
