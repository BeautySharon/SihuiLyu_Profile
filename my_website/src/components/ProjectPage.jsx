import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import balloon_image from "../assets/Images/balloon_project.jpg";
import blackjack_image from "../assets/Images/BalackJack.jpg";
import pawtrust_image from "../assets/Images/pawtrust_home.png";
import { FaLaptopCode } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectPage() {
  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-8 pt-24 pb-20 bg-gray-100 min-h-screen"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="mt-24 flex items-center justify-center gap-2 mb-12 text-gray-700 hover:text-indigo-500 transition duration-300">
        <FaLaptopCode className="text-3xl" />
        <h1 className="text-3xl font-bold text-center">My Recent Projects:</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 justify-items-centermax-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
        <ProjectCard
          title="🐾 PawTrust 🐾"
          subtitle="MERN stack web application connecting pet owners with sitters, featuring role-based dashboards, task management, calendar scheduling, and review system."
          image={pawtrust_image}
          tags={["React", "Node.js", "Express", "MongoDB", "Google Cloud"]}
          link="/projects/pawtrust"
        />
        <ProjectCard
          title="ACE (AI Card Expert)"
          subtitle="Java Blackjack project with reinforcement learning (Q-Learning), Swing GUI, and MVC architecture"
          image={blackjack_image}
          tags={["Java", "OOP", "MVC", "Q-Learning", "SwingGUI"]}
          link="/projects/blackjack"
        />
        <ProjectCard
          title="Balloon Trajectory Prediction System"
          subtitle="A real-time airspace safety monitoring system built with Flask, integrating live weather and flight data to predict balloon trajectories and identify potential conflicts"
          image={balloon_image}
          tags={["Python", "Flask", "Machine Learning", "API Integration"]}
          link="/projects/balloon"
        />
      </div>
    </motion.div>
  );
}
