import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import balloon_bg from "../assets/Images/balloon_bg.jpg";
import BJProjectDetails from "../components/BJProjectDetails";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // ✅ 加入动画库

export default function BlackjackProjectPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="w-full h-auto bg-cover bg-center bg-gray-100 bg-opacity-45 text-center flex flex-col justify-center items-center gap-5">
        {/* 项目标题 */}
        <div className="mt-[120px] flex flex-col justify-center items-center gap-5 ">
          <div className="mt-20 flex flex-col justify-center items-center gap-5 ">
            {/* 🎈图标与标题同一行 */}
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold drop-shadow-md">
              ♠️ ACE (AI Card Expert)
            </h1>
            <p className="text-gray-700 text-lg md:text-xl opacity-90 max-w-3xl lg:max-w-full whitespace-normal lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
              Java Blackjack project with reinforcement learning (Q-Learning),
              Swing GUI, and MVC architecture
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
          <BJProjectDetails />
        </div>
      </div>
    </div>
  );
}
