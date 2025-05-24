// import React from "react";
// import NavbarElement from "./NavbarElement";
// export default function Navbar() {
//   return (
//     <div className="fixed h-[120px] w-full bg-white bg-opacity-95 py-5 text-center shadow-md z-[1000] flex flex-row justify-center items-center space-x-10">
//       <NavbarElement Name="Home" Weblink="/" />
//       <NavbarElement Name="About Me" Weblink="/aboutme" />
//       <NavbarElement Name="Projects" Weblink="/projects" />
//       <NavbarElement Name="Resume" Weblink="/Resume" />
//       <NavbarElement Name="Contact" Weblink="/Contact" />
//     </div>
//   );
// }
import React, { useState } from "react";
import NavbarElement from "./NavbarElement";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-md z-[1000]">
      {/* Top bar */}
      <div className="relative flex items-center justify-center h-[120px] px-4 md:px-10 ">
        {/* Mobile Hamburger Button - Left aligned */}
        <div className="absolute left-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiOutlineX className="text-3xl" />
            ) : (
              <HiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Centered Logo / Website name */}
        {/* <div className="text-xl font-bold text-gray-800 md:hidden">
          Welcome to my Website
        </div> */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-xl font-bold text-gray-800 mb-4 md:hidden"
        >
          ⭐️Welcome to my website⭐️
        </motion.h1>

        {/* Desktop nav */}
        <div className="hidden md:flex overflow-x-auto space-x-6 text-center items-center no-scrollbar px-4">
          <NavbarElement Name="Home" Weblink="/" />
          <NavbarElement Name="About Me" Weblink="/aboutme" />
          <NavbarElement Name="Projects" Weblink="/projects" />
          <NavbarElement Name="Skills" Weblink="/skills" />
          <NavbarElement Name="Resume" Weblink="/Resume" />
          <NavbarElement Name="Contact" Weblink="/Contact" />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-6 py-6 md:hidden bg-white shadow-md overflow-y-auto max-h-[calc(100vh-120px)] px-4">
          <NavbarElement Name="Home" Weblink="/" />
          <NavbarElement Name="About Me" Weblink="/aboutme" />
          <NavbarElement Name="Projects" Weblink="/projects" />
          <NavbarElement Name="Skills" Weblink="/skills" />
          <NavbarElement Name="Resume" Weblink="/Resume" />
          <NavbarElement Name="Contact" Weblink="/Contact" />
        </div>
      )}
    </nav>
  );
}
