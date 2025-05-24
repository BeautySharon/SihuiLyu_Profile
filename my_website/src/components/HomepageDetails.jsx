import React from "react";
import bg from "../assets/Images/background.jpg";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default function HomepageDetails({ onArrowClick }) {
  const [clicked, setClicked] = useState(true);
  const clickFunction = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-[70px] font-bold tracking-wider drop-shadow-md">
        Sihui Lyu
      </h1>
      <p className="text-[22px] mt-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {/* Master's in Computer Science | Software Engineer | Machine Learning
        Enthusiast */}
        CS Master's @ Northeastern | Full Stack & Data Engineer | 2026 SWE
        Candidate
      </p>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://www.linkedin.com/in/sihuilyu/"
          target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-full text-gray-700 text-3xl transition-colors duration-300 hover:text-white active:text-gray-400"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/BeautySharon"
          target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-full text-gray-700 text-3xl transition-colors duration-300 hover:text-white active:text-gray-400"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <button
        onClick={onArrowClick}
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 text-[40px] text-white text-opacity-60 cursor-pointer animate-bounce transition-colors duration-300 hover:text-opacity-100"
      >
        ⌄
      </button>
    </div>
  );
}
