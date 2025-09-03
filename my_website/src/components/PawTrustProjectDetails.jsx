import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

// 👉 将下面三张图换成你的实际截图资源
import pawtrust_home from "../assets/Images/pawtrust_home.png";
import pawtrust_owner from "../assets/Images/pawtrust_owner_dashboard.png";
import pawtrust_sitter from "../assets/Images/pawtrust_sitter_dashboard.png";
import pawtrust_calendarview from "../assets/Images/pawtrust_calendarview.png";

export default function PawTrustProjectDetails() {
  const navigate = useNavigate();

  return (
    <div className="w-2/3 h-auto bg-white text-black flex flex-col justify-center items-center p-6 mb-12">
      {/* Sections */}
      <div className="space-y-8 text-left w-full">
        {/* 1) Project Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            PawTrust is a MERN stack web application that connects pet owners
            with trustworthy pet sitters. Owners can post pet care tasks, review
            and accept applications, while sitters can apply for tasks, complete
            them, and receive reviews. After logging in with email/password,
            users will enter different dashboards based on their role (owner or
            sitter). Below is the homepage of PawTrust.
          </p>
        </section>

        {/* 2) Home Page (image only) */}
        <section className="mb-12">
          <h3 className="sr-only">Home Page</h3>
          <figure className="text-center">
            <img
              src={pawtrust_home}
              alt="PawTrust Home Page screenshot"
              loading="lazy"
              className="rounded-xl shadow-md mx-auto w-full max-w-3xl border border-gray-100"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Home Page
            </figcaption>
          </figure>
        </section>

        {/* 3) Owner Dashboard (intro + image) */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold mb-2">Owner Dashboard</h3>
          <p className="text-gray-700 mb-4">
            In the Owner Dashboard, owners can manage all their postings and
            applications in one place: create, edit, or delete tasks; review
            applications; accept a sitter; track progress; and leave reviews
            once a task is finished. The calendar view also lets owners quickly
            post a new task by selecting a date and provides an overview of all
            scheduled tasks, making it easier to manage bookings.
          </p>
          <figure className="text-center">
            <img
              src={pawtrust_owner}
              alt="Owner Dashboard screenshot"
              loading="lazy"
              className="rounded-xl shadow-md mx-auto w-full max-w-4xl border border-gray-100"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Owner Dashboard
            </figcaption>
          </figure>
          <figure className="text-center">
            <img
              src={pawtrust_calendarview}
              alt="Owner Dashboard screenshot"
              loading="lazy"
              className="rounded-xl shadow-md mx-auto w-full max-w-4xl border border-gray-100"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Calendar View
            </figcaption>
          </figure>
        </section>

        {/* 4) Sitter Dashboard (intro + image) */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold mb-2">Sitter Dashboard</h3>
          <p className="text-gray-700 mb-4">
            In the Sitter Dashboard, sitters can browse open tasks, submit
            applications, view accepted jobs, and mark tasks as finished.
            Completed tasks and received reviews are also displayed, helping
            sitters build trust and reputation.
          </p>
          <figure className="text-center">
            <img
              src={pawtrust_sitter}
              alt="Sitter Dashboard screenshot"
              loading="lazy"
              className="rounded-xl shadow-md mx-auto w-full max-w-4xl border border-gray-100"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Sitter Dashboard
            </figcaption>
          </figure>
        </section>
        {/* Features */}
        <section>
          <h2 className="text-xl font-bold mb-2">Features</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {/* User Authentication */}
            <div>
              <h3 className="font-semibold">User Authentication</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Email/Password login</li>
                <li>Role selection: Owner or Sitter</li>
              </ul>
            </div>

            {/* Task Management */}
            <div>
              <h3 className="font-semibold">Task Management</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Owners: Post, edit, and delete tasks</li>
                <li>Sitters: Browse and apply for open tasks</li>
                <li>Owners accept applications (one sitter per task)</li>
                <li>Sitters mark accepted tasks as finished</li>
                <li>Owners leave reviews after completion</li>
              </ul>
            </div>

            {/* Calendar Integration */}
            <div>
              <h3 className="font-semibold">
                Calendar Integration (FullCalendar)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>View all tasks by date</li>
                <li>Post tasks directly from the calendar view</li>
              </ul>
            </div>

            {/* Reviews & Ratings */}
            <div>
              <h3 className="font-semibold">Reviews & Ratings</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Owners can review sitters after task completion</li>
                <li>
                  Reviews appear in sitters’ Finished &amp; Reviews section
                </li>
              </ul>
            </div>

            {/* Responsive UI */}
            <div>
              <h3 className="font-semibold">Responsive UI</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Built with Tailwind CSS for mobile and desktop</li>
              </ul>
            </div>
          </ul>
        </section>

        {/* Resources */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Resources</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Column 1: APIs */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">APIs</h3>
              <ul className="grid gap-3">
                {[
                  {
                    label: "Frontend (Live)",
                    href: "https://pawtrust.uw.r.appspot.com",
                    desc: "React + Vite client",
                  },
                  {
                    label: "Backend API (sample)",
                    href: "https://pawtrust-backend.uw.r.appspot.com/pawtrust/tasks",
                    desc: "Node.js + Express REST API",
                  },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block rounded-xl border border-gray-100 px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <span className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700">
                        {l.label}
                        <FaExternalLinkAlt className="opacity-80" />
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{l.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Demo & User Guide */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">
                Demo & User Guide
              </h3>
              <ul className="grid gap-3">
                {[
                  {
                    label: "Demo Video",
                    href: "https://www.youtube.com/watch?v=ip4S6lbtx08",
                    desc: "Walkthrough on YouTube",
                  },
                  {
                    label: "User Guide (PDF)",
                    href: "https://docs.google.com/document/d/1Iss2T72vSEq4-krnOlWMqNabvPXAXoBrTseXnCKdLxE/edit?usp=sharing",
                    desc: "Step-by-step documentation",
                  },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block rounded-xl border border-gray-100 px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <span className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700">
                        {l.label}
                        <FaExternalLinkAlt className="opacity-80" />
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{l.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: GitHub */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">
                GitHub Repositories
              </h3>
              <ul className="grid gap-3">
                {[
                  {
                    label: "Frontend Repository",
                    href: "https://github.com/BeautySharon/CS5610_Final_Project/tree/main/pawtrust-frontend",
                    desc: "React + Vite, Tailwind, FullCalendar",
                  },
                  {
                    label: "Backend Repository",
                    href: "https://github.com/BeautySharon/CS5610_Final_Project/tree/main/pawtrust-backend",
                    desc: "Node.js + Express, MongoDB",
                  },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block rounded-xl border border-gray-100 px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <span className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700">
                        {l.label}
                        <FaExternalLinkAlt className="opacity-80" />
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{l.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <h3 className="text-lg font-bold mb-2">Frontend</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>React.js + Vite</li>
                <li>Tailwind CSS</li>
                <li>FullCalendar (React)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Backend</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Node.js + Express.js</li>
                <li>MongoDB (DAO pattern)</li>
                <li>RESTful API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Deployment</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Cloud App Engine</li>
                <li>MongoDB Atlas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample Accounts */}
        <section>
          <h2 className="text-xl font-bold mb-2">Sample Testing Accounts</h2>
          <div className="text-sm text-gray-700">
            <h3 className="font-semibold mb-2">
              <strong>Email/Password login</strong> · choose role on signup
            </h3>
            {/* <p className="mb-2">
              <strong>Email/Password login</strong> · choose role on signup
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <table className="min-w-full border border-gray-200 text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Role</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border font-semibold">Owner</td>
                    <td className="px-4 py-2 border">owner1@gmail.com</td>
                    <td className="px-4 py-2 border">88888888</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-semibold">Owner</td>
                    <td className="px-4 py-2 border">owner2@gmail.com</td>
                    <td className="px-4 py-2 border">88888888</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-semibold">Sitter</td>
                    <td className="px-4 py-2 border">sitter1@gmail.com</td>
                    <td className="px-4 py-2 border">88888888</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-semibold">Sitter</td>
                    <td className="px-4 py-2 border">sitter2@gmail.com</td>
                    <td className="px-4 py-2 border">88888888</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* View Demo */}
        <a
          href="https://www.youtube.com/watch?v=ip4S6lbtx08"
          target="_blank"
          rel="noreferrer"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg hover:brightness-110 transition"
          >
            View Demo
          </motion.span>
        </a>

        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 text-indigo-600 font-semibold text-sm border border-indigo-200 shadow hover:bg-indigo-50 transition"
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>
      </motion.div>
    </div>
  );
}
