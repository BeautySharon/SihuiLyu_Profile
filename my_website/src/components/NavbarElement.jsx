import React, { use, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavbarElement({ Name, Weblink }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-2xl font-extrabold drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] px-10 py-5 inline-block transition-colors duration-300 text-gray-700 hover:text-indigo-300 border-gray-700 border-opacity-100 rounded-md"
      : "text-2xl font-bold px-10 py-5 inline-block transition-colors duration-300 text-gray-500 hover:text-indigo-300";
  return (
    <NavLink className={linkClass} to={Weblink}>
      {Name}
    </NavLink>
  );
}
