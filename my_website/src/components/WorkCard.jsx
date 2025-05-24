import React from "react";

export default function EductionCard({ Position, Company, Duration }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center px-2">
      <h1 className="text-2xl font-bold mb-2 text-center">{Position}</h1>
      <p className="text-lg font-bold text-gray-600">{Company}</p>
      <p className="text-lg font-bold text-gray-600">{Duration}</p>
    </div>
  );
}
