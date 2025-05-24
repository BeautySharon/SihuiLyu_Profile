import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HomepageDetails from "../components/HomepageDetails";
import IntroHome from "../components/IntroHome";
import { HiOutlineMail } from "react-icons/hi";
import Contactform from "../components/Contactform";
import ContactCard from "../components/ContactCard";
import { useLayoutEffect } from "react";

export default function HomePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (section) => {
    if (section === "edu-section") {
      navigate("/education");
    } else if (section === "work") {
      navigate("/work");
    } else {
      scrollToIntro();
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <Navbar />
      <HomepageDetails onArrowClick={() => handleSectionClick("Intro")} />

      <motion.div
        ref={introRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <IntroHome
            onSectionClick={handleSectionClick}
            contactRef={contactRef}
          />
        </motion.div>
      </motion.div>
      <div className="pt-24 bg-gray-100 flex flex-col items-center">
        <div className="h-1 w-11/12 rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  hover:brightness-350 hover:drop-shadow-xl duration-300" />
        <motion.div
          ref={contactRef}
          className="pt-20 w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 p-6 flex items-center gap-2"
          >
            <HiOutlineMail className="text-indigo-300" />
            Contact Me
          </motion.h1>

          <motion.div variants={itemVariants} className="w-full max-w-xl pb-4">
            <Contactform />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactCard />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
