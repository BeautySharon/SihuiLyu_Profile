// import React from "react";
// import Navbar from "../components/Navbar";
// import Contactform from "../components/Contactform";
// import ContactCard from "../components/ContactCard";
// import { motion } from "framer-motion";
// import { HiOutlineMail } from "react-icons/hi";

// export default function ContactPage() {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="pt-[120px] w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
//         <motion.h1
//           className="mt-20 text-3xl font-bold text-gray-800 mb-10 flex items-center gap-2 hover:text-indigo-500 transition duration-300"
//           variants={fadeIn}
//         >
//           <HiOutlineMail className="text-indigo-300" />
//           Contact Me
//         </motion.h1>

//         {/* <h1 className="text-3xl font-bold text-gray-800 mb-5">📧 Contact Me</h1> */}
//         <Contactform />
//         <ContactCard />
//       </div>
//     </div>
//   );
// }
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
      <main className="pt-48 px-4 pb-20 flex flex-col items-center">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-2 hover:text-indigo-500 transition duration-300"
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
