import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiR,
  SiTailwindcss,
  SiAwsamplify,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const skills = [
  {
    name: "Java",
    icon: <FaJava className="text-4xl text-[#E76F00]" />,
    level: "Advanced",
    percent: 100,
  },
  {
    name: "Python",
    icon: <FaPython className="text-4xl text-[#3776AB]" />,
    level: "Proficient",
    percent: 100,
  },
  {
    name: "SQL",
    icon: <DiDatabase className="text-4xl text-[#00618A]" />,
    level: "Proficient",
    percent: 100,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-[#F7DF1E]" />,
    level: "Proficient",
    percent: 100,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
    level: "Proficient",
    percent: 85,
  },
  {
    name: "C/C++",
    icon: <SiCplusplus className="text-4xl text-[#00599C]" />,
    level: "Intermediate",
    percent: 75,
  },
  {
    name: "HTML/CSS",
    icon: (
      <div className="flex gap-1">
        <FaHtml5 className="text-4xl text-[#E34F26]" />
        <FaCss3Alt className="text-4xl text-[#1572B6]" />
      </div>
    ),
    level: "Proficient",
    percent: 90,
  },
  {
    name: "R",
    icon: <SiR className="text-4xl text-[#276DC3]" />,
    level: "Intermediate",
    percent: 70,
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-4xl text-[#61DAFB]" />,
    level: "Proficient",
    percent: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
    level: "Proficient",
    percent: 90,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-[#F05032]" />,
    level: "Proficient",
    percent: 95,
  },
  {
    name: "Linux",
    icon: <FaLinux className="text-4xl text-[#FCC624]" />,
    level: "Proficient",
    percent: 90,
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-4xl text-[#2496ED]" />,
    level: "Intermediate",
    percent: 80,
  },
  {
    name: "Kafka",
    icon: <FaServer className="text-4xl text-[#231F20]" />,
    level: "Intermediate",
    percent: 75,
  },
  {
    name: "AWS (Lambda, RDS, CloudWatch)",
    icon: <SiAwsamplify className="text-4xl text-[#FF9900]" />,
    level: "Intermediate",
    percent: 70,
  },
];
const levelColor = {
  Proficient: "bg-blue-400",
  Advanced: "bg-blue-400",
  Intermediate: "bg-blue-300",
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export default function TechStackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="pt-24 min-h-screen bg-[#F5F6F8] px-6 py-20 flex flex-col items-center justify-center ">
        <h2 className="mt-20 text-4xl font-bold text-black mb-12 hover:text-indigo-500 transition duration-300">
          Professional Skills :
        </h2>
        <motion.div
          className="flex flex-col gap-6 w-full max-w-xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <div className="flex flex-col gap-6 w-1/3 "> */}
          {skills.map((skill) => (
            // <div
            //   key={skill.name}
            //   className="flex items-center bg-[#EDEDED] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden "
            // >
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex items-center bg-[#EDEDED] rounded-2xl p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white mr-4 shrink-0">
                {skill.icon}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-black mb-1">
                  {skill.name}
                </div>
                <div className="relative w-full h-5 bg-gray-400 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${levelColor[skill.level]} rounded-full`}
                    style={{ width: `${skill.percent}%` }}
                  >
                    <span className="absolute right-2 text-sm text-white font-semibold">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* </div> */}
        </motion.div>
      </section>
    </>
  );
}
