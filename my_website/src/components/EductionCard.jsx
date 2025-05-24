// import React from "react";

// export default function EductionCard({
//   University,
//   Major,
//   GraduationDate,
//   GPA,
// }) {
//   return (
//     // <div className="max-w-[30%] bg-white p-5 rounded-lg shadow-md text-center w-full max-w-[400px] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
//     <div className="w-full h-full flex flex-col justify-center items-center text-center px-2">
//       <h1 className="text-2xl font-bold mb-2 text-center">{University}</h1>
//       <p className="text-lg font-bold text-gray-600">{Major}</p>
//       <p className="text-lg font-bold text-gray-600">{GraduationDate}</p>
//       <p className="text-lg font-bold text-gray-600">GPA {GPA}</p>
//     </div>
//   );
// }
import React from "react";

export default function EductionCard({
  University,
  Major,
  GraduationDate,
  GPA,
  adaptiveText = false,
}) {
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-2">
        <h1 className="text-2xl font-bold mb-2">{University}</h1>
        <p
          className={
            adaptiveText
              ? "text-[15px] font-semibold text-gray-600 whitespace-nowrap overflow-hidden"
              : "text-lg font-semibold text-gray-600"
          }
        >
          {Major}
        </p>
        {/* <p className="text-base text-gray-600 mt-1">{GraduationDate}</p>
      <div className="mt-3 pt-2 border-t border-gray-200 w-full flex justify-center"></div>
      <p className="text-base text-gray-500 font-medium">GPA: {GPA}</p> */}
      </div>
      {/* GPA + 固定横线在底部 */}
      {GPA && (
        <div className="w-full mb-auto pt-3 border-t border-gray-200">
          <p className="text-base text-gray-500 font-medium mt-2">GPA: {GPA}</p>
        </div>
      )}
    </div>
  );
}
