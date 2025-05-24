import React, { useEffect } from "react";
import { motion } from "framer-motion";
import EductionCard from "../components/EductionCard";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EducationPage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="pt-[140px] px-4 text-center pb-20">
        <h1 className="pt-20 text-4xl font-bold text-gray-800 mb-6">
          🎓 My Education
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 whitespace-normal md:whitespace-nowrap">
          A journey through my academic background — covering computer science,
          operations research, supply chain and industrial engineering.
        </p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%]
 h-[250px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md">
              Current
            </div>
            <EductionCard
              University="Northeastern University"
              Major="M.S. in Computer Science (Expected 2026)"
              GraduationDate=""
              GPA="4.0"
            />
          </motion.div>

          <motion.div
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%]
 h-[250px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <EductionCard
              University="Case Western Reserve University"
              Major="M.S. in Operations Research & Supply Chain Management  "
              GraduationDate="Aug 2019 – Jan 2021"
              GPA="3.6"
              adaptiveText={true}
            />
          </motion.div>

          <motion.div
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] h-[250px] bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <EductionCard
              University="Wuhan University of Technology"
              Major="B.E. in Logistics Engineering  "
              GraduationDate="Sep 2015 – Jun 2019"
              GPA="3.6"
            />
          </motion.div>
        </motion.div>
        <div className="flex flex-row justify-center items-center gap-6 mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/aboutme")}
            className="text-gray-700 text-base md:text-lg flex items-center hover:text-indigo-300 transition"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mr-2"
            >
              <FaArrowLeft />
            </motion.div>
            About Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/work")}
            className="text-gray-700 text-base md:text-lg flex items-center hover:text-indigo-300 transition"
          >
            Professional Experience
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              <FaArrowRight />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
