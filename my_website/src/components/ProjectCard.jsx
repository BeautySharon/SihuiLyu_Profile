import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  subtitle,
  image,
  tags = [],
  link,
}) {
  return (
    <Link
      to={link}
      className="w-[400px] rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden bg-white"
    >
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-md font-semibold px-4 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="p-4 text-center bg-white">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{title}</h1>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
