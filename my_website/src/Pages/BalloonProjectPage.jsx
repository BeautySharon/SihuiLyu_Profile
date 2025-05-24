import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import balloon_bg from "../assets/Images/balloon_bg.jpg";
import BalloonProjectDetails from "../components/BalloonProjectDetails";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // ✅ 加入动画库

export default function BalloonProjectPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div
        className="w-full h-auto bg-cover bg-center bg-gray-900 bg-opacity-45 text-black text-center flex flex-col justify-center items-center gap-5"
        style={{ backgroundImage: `url(${balloon_bg})` }}
      >
        {/* 项目标题 */}
        <div className="mt-24 flex flex-col justify-center items-center gap-5 ">
          <div className="mt-20 flex flex-col justify-center items-center gap-5 ">
            {/* 🎈图标与标题同一行 */}
            <h1 className="text-2xl font-bold text-white">
              🎈 Balloon Trajectory Prediction System
            </h1>
          </div>
          {/* ✅ 按钮 hover & tap 动效 */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="text-white text-base md:text-lg flex items-center hover:text-indigo-300 transition"
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
          <BalloonProjectDetails />
        </div>
      </div>
    </div>
  );
}
