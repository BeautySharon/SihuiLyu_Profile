import React from "react";
import { motion } from "framer-motion";
import resume_sihuilyu from "../assets/Files/resume_sihuilyu.pdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdOutlineInsertDriveFile, MdSchool } from "react-icons/md";

export default function Resume() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full min-h-screen py-20 px-6 bg-white flex flex-col justify-start items-center text-center"
      initial="hidden"
      animate="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={fadeIn}>
        <div id="resume-anchor" className="anchor" />
        <h2 className="mt-24 text-3xl font-bold text-gray-800 mb-4 tracking-tight flex items-center justify-center gap-2 hover:text-indigo-500 transition duration-300">
          <MdOutlineInsertDriveFile className="text-5xl text-indigo-300" />
          Resume
        </h2>
      </motion.div>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-6"
        variants={fadeIn}
      >
        Here's my latest resume showcasing my background and skill set.
      </motion.p>

      <motion.div
        className="w-full max-w-5xl border-2 border-gray-300 rounded-2xl shadow-2xl overflow-hidden bg-white"
        variants={fadeIn}
      >
        <iframe
          src={`${resume_sihuilyu}#toolbar=0`}
          className="w-full h-124 sm:h-148 md:h-160 lg:h-[90vh] border-none"
          style={{ border: "none" }}
          title="Resume PDF"
        />
      </motion.div>

      <motion.a
        href={resume_sihuilyu}
        download
        className="mt-10 px-6 py-3 bg-white border-2 border-gray-600 text-gray-800 rounded-full text-lg font-semibold shadow hover:shadow-md hover:bg-gray-100 transition duration-300 flex items-center gap-2"
        variants={fadeIn}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineDocumentDownload className="text-2xl text-indigo-300" />{" "}
        Download PDF
      </motion.a>
    </motion.section>
  );
}
