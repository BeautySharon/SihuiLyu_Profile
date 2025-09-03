import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import balloon_bg from "../assets/Images/balloon_bg.jpg";
import PawTrustProjectDetails from "../components/PawTrustProjectDetails";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // ✅ 加入动画库

export default function PawtrustProejctPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="w-full h-auto bg-cover bg-center bg-gray-100 bg-opacity-45 text-center flex flex-col justify-center items-center gap-5">
        {/* 项目标题 */}
        <div className="mt-24 flex flex-col justify-center items-center gap-5 ">
          <div className="mt-20 flex flex-col justify-center items-center gap-5 ">
            {/* 🎈图标与标题同一行 */}
            <h1 className="text-gray-700 text-2xl md:text-2xl font-bold drop-shadow-md">
              🐾 PawTrust🐾
            </h1>
            <p className="text-gray-700 text-lg md:text-lg opacity-90 max-w-3xl lg:max-w-full whitespace-normal lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
              A MERN stack web application that connects pet owners with
              sitters, featuring role-based dashboards, task management,
              calendar scheduling, and a review system.
            </p>
          </div>

          {/* ✅ 按钮 hover & tap 动效 */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="text-gray-700 text-base md:text-lg flex items-center hover:text-indigo-300 transition"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mr-2"
            >
              <FaArrowLeft />
            </motion.div>
            Back to Projects
          </motion.button>
          <PawTrustProjectDetails />
        </div>
      </div>
    </div>
  );
}
