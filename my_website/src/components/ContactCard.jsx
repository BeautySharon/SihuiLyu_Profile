import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactCard() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full rounded-lg p-2 mx-auto text-center"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.p className="text-lg text-gray-600 p-2" variants={fadeIn}>
        Feel free to reach out via email or connect with me on LinkedIn &
        GitHub!
      </motion.p>
      <motion.div className="flex justify-center space-x-6" variants={fadeIn}>
        <motion.a
          href="mailto:lyu.sihui96@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-gray-700 text-3xl hover:text-gray-300 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-solid fa-envelope"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sihuilyu/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-gray-700 text-3xl hover:text-gray-300 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-brands fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sihuilyu/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-gray-700 text-3xl hover:text-gray-300 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-brands fa-github"></i>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
