import React, { useEffect } from "react";
import WorkCard from "../components/WorkCard";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function WorkPage() {
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

      <div className="flex flex-col items-center pt-[140px] gap-6 text-center pb-20 px-4">
        <h1 className="pt-20 text-4xl font-bold text-gray-800 mb-6">
          💼 Professional Experience
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 whitespace-normal md:whitespace-nowrap">
          Highlights from my professional experience in data analytics, supply
          chain, and machine learning-oriented roles.
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-[400px] h-[250px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <WorkCard
              Position="Data Analyst"
              Company="Bettaway"
              Duration="09/2021 - 05/2024"
            />
          </motion.div>
          <motion.div
            className="w-[400px] h-[250px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out"
            variants={cardVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <WorkCard
              Position={
                <>
                  Supply Chain Intern <br /> (Machine Learning Oriented)
                </>
              }
              Company="Athersys"
              Duration="02/2021 - 08/2021"
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
            onClick={() => navigate("/education")}
            className="text-gray-700 text-base md:text-lg flex items-center hover:text-indigo-300 transition"
          >
            Education
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
