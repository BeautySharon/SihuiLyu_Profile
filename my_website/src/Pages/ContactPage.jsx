import React from "react";
import Navbar from "../components/Navbar";
import Contactform from "../components/Contactform";
import ContactCard from "../components/ContactCard";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";

export default function ContactPage() {
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
    <div className="bg-gray-100 min-h-screen">
      {/* ✅ fixed Navbar 会浮在顶部 */}
      <Navbar />

      {/* ✅ 内容下移，避开 fixed 导航栏 */}
      <main className="pt-44 px-2 flex flex-col items-center gap-4">
        <motion.h1
          className="py-auto text-3xl sm:text-3xl font-bold text-gray-800 flex items-center hover:text-indigo-500 transition duration-300 gap-2"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <HiOutlineMail className="text-indigo-300" />
          Contact Me
        </motion.h1>
        <Contactform />
        <ContactCard />
      </main>
    </div>
  );
}
