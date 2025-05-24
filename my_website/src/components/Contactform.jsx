import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmission(e) {
    e.preventDefault();

    const serviceID = "service_6ut5rwh";
    const templateID = "template_utxww5p";
    const publicKey = "STNjIfm8FFOwRZ57b";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSent(true);
        setShowModal(true);
        setFormData({
          from_name: "",
          from_email: "",
          from_phone: "",
          message: "",
        });
      })
      .catch((err) => console.error("Email send error:", err));
  }

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
      className="w-full flex justify-center items-center bg-gray-100"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.div
        className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 focus:ring-2 focus:ring-indigo-400"
        variants={fadeIn}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmission}>
          <input
            type="text"
            name="from_name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="from_phone"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Phone (Optional)"
            value={formData.from_phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-full shadow-md hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaPaperPlane className="text-lg" /> Send Message
          </button>
        </form>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold text-black">✅ Message Sent!</h2>
              <p className="text-gray-700 mt-2">
                Thank you! I have received your message.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
