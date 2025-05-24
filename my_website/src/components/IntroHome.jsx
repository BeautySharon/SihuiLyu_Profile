import React, { useEffect } from "react";
import profile from "../assets/Images/profile.jpg";
import { FiChevronRight } from "react-icons/fi";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Intro({ onSectionClick, contactRef }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="pt-24 w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center gap-6 px-4"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* 卡片内容 */}
      <motion.div
        className="pt-10 flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg max-w-[900px] w-full mx-auto hover:-translate-y-1 transition-transform duration-300"
        variants={fadeIn}
      >
        <div className="flex justify-center mb-4">
          <img
            src={profile}
            alt="Profile"
            className="w-[160px] h-[160px] rounded-full object-cover border-4 border-gray-200 hover:border-indigo-300 transition-colors duration-300"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">Sihui Lyu</h2>
        <ul className="list-disc pl-5 text-base leading-relaxed text-gray-700 text-left">
          <li>
            CS Master's student @
            <strong> Northeastern University (Silicon Valley)</strong>, with a
            previous Master's in Operations Research and a Bachelor's in
            Logistics Engineering.
          </li>
          <li>
            Transitioned from data analytics to software engineering, bringing
            2.5+ years of experience in <strong>SQL-based reporting</strong>,{" "}
            <strong>ETL workflows</strong>, and{" "}
            <strong>automated data pipelines</strong> for business analysis.
          </li>
          <li>
            Skilled in <strong>Python</strong>, <strong>SQL</strong>,{" "}
            <strong>Java</strong>, <strong>React</strong>, and{" "}
            <strong>Spring Boot</strong>, with a passion for backend and
            full-stack development.
          </li>
          <li>
            Known for rapid self-learning, problem-solving skills, cross-domain
            thinking, and attention to clean, maintainable code.
          </li>
          <li>
            Actively seeking{" "}
            <strong>
              Summer 2026 Software Engineer / Backend / Data Engineer
            </strong>{" "}
            internships or full-time opportunities.
          </li>
        </ul>
      </motion.div>

      {/* Education 按钮 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/education")}
        className="w-full max-w-[1000px] flex justify-center items-center gap-2 text-xl font-bold text-gray-700 hover:text-indigo-500 transition duration-300"
        variants={fadeIn}
      >
        <FaGraduationCap className="text-3xl" />
        <span> Education</span>
        <FiChevronRight size={20} />
      </motion.button>

      {/* Work 按钮 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/work")}
        className="w-full max-w-[1000px] flex justify-center items-center gap-2 text-xl font-bold text-gray-700 hover:text-indigo-500 transition duration-300"
        variants={fadeIn}
      >
        <FaBriefcase className="text-xl" />
        <span> Professional Experience</span>
        <FiChevronRight size={20} />
      </motion.button>

      {/* 箭头按钮 */}
      <motion.div variants={fadeIn}>
        <button
          onClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-bounce text-[40px] font-bold bg-gradient-to-r
            from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-md
            transition-all duration-500 ease-in-out hover:scale-125 hover:brightness-150 hover:drop-shadow-xl"
          aria-label="Scroll to Contact"
        >
          ⌄
        </button>
      </motion.div>
    </motion.div>
  );
}
