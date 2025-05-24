import React from "react";
import balloon_project from "../assets/Images/balloon_project.jpg";
import { motion } from "framer-motion"; // ✅ 加入动画库
import { FaArrowLeft } from "react-icons/fa";

export default function BalloonProjectDetails() {
  return (
    <div className="w-2/3 h-auto bg-white text-black flex flex-col justify-center items-center p-6 mb-[50px]">
      {/* 图片部分 */}
      <div className="flex justify-center items-center mt-12 w-full">
        <img
          src={balloon_project}
          alt="Project"
          className="block w-4/5 max-w-md"
        />
      </div>

      {/* 标题 */}
      <h1 className="text-xl font-bold text-center mt-6">
        Live Balloon Tracking & Airspace Safety System
      </h1>

      {/* 介绍文本 */}
      <p className="text-sm text-left mt-4 px-6">
        This project develops a real-time balloon tracking, trajectory
        prediction, and airspace safety monitoring system by integrating live
        data from multiple sources, including: Windborne Systems, OpenSky
        Network, OpenWeather API, OpenStreetMap API, and FAA Special Use
        Airspace Data. The system dynamically updates every hour, ensuring
        continuous balloon flight tracking.
      </p>

      {/* 详细功能列表 */}
      <div className="text-sm text-left mt-4 px-8 space-y-4">
        <ul className="list-disc space-y-3">
          <li>
            <strong>Real-Time Data Processing:</strong> Collects and processes
            the past 24 hours of balloon flight history, filters corrupted data,
            removes invalid records, and interpolates missing timestamps using
            <strong> Pandas and NumPy</strong>.
          </li>
          <li>
            <strong>Weather Integration:</strong> Retrieves wind speed and
            direction from the <strong>OpenWeather API</strong> and integrates
            this data into balloon trajectory predictions to enhance accuracy.
          </li>
          <li>
            <strong>Machine Learning-Based Trajectory Prediction: </strong>
            Implements a <strong>Random Forest Regressor</strong> trained on
            historical balloon data and wind conditions to forecast future
            balloon speed and direction over the next few hours.
          </li>
          <li>
            <strong>Airspace Collision Detection & Risk Identification:</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Uses <strong>KD-Tree nearest-neighbor search</strong> to detect
                potential <strong>airspace conflicts</strong> between balloons
                and aircraft.
              </li>
              <li>
                Flags balloons flying
                <strong> too close to military bases</strong> based on
                OpenStreetMap data.
              </li>
              <li>
                Checks for balloons entering <strong>FAA no-fly zones </strong>
                and restricted airspaces.
              </li>
              <li>
                Monitors and identifies balloons that have
                <strong>crossed national borders</strong>, marking potential
                security risks.
              </li>
            </ul>
          </li>
          <li>
            <strong>Interactive Map Visualization:</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                The homepage displays
                <strong>all detected dangerous balloons</strong>, each marked
                with a distinct <strong>color-coded risk indicator</strong>:
              </li>
              <ul className="list-none ml-6">
                <li>
                  <span className="text-pink-500 text-xs">⬤ </span>
                  <strong>Pink:</strong> Balloon near an aircraft (potential
                  collision risk).
                </li>
                <li>
                  <span className="text-orange-500 text-xs">⬤ </span>
                  <strong>Orange:</strong> Balloon entering a military base
                  airspace.
                </li>
                <li>
                  <span className="text-purple-500 text-xs">⬤ </span>
                  <strong>Purple:</strong> Balloon inside a restricted FAA
                  no-fly zone.
                </li>
                <li>
                  <span className="text-yellow-500 text-xs">⬤ </span>
                  <strong>Yellow:</strong> Balloon that has crossed an
                  international border.
                </li>
              </ul>
              <li>
                On the top right corner, a <strong>search bar</strong> enables
                users to quickly locate specific balloons by ID.
              </li>
              <li>
                Below the search bar, two <strong>filter buttons</strong> allow
                users to control the display of balloon trajectories:
              </li>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Show All:</strong> Displays the paths of all detected
                  balloons.
                </li>
                <li>
                  <strong>Hide All:</strong> Hides all balloon paths from view.
                </li>
              </ul>
              <li>
                Beside these buttons, a <strong>filter panel</strong> enables
                users to select specific balloons to display their
                <strong>
                  past, current, and predicted future trajectories
                </strong>
                in real-time.
              </li>
              <ul className="list-none ml-6">
                <li>
                  <span className="text-blue-500 text-xs">⬤ </span>
                  <strong>Blue:</strong> Start position of the balloon.
                </li>
                <li>
                  <span className="text-green-500 text-xs">⬤ </span>
                  <strong>Green:</strong> Current position of the balloon.
                </li>
                <li>
                  <span className="text-red-500 text-xs">⬤ </span>
                  <strong>Red:</strong> Predicted position of the balloon.
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Automated Updates & Continuous Monitoring:</strong> The
            system uses <strong>APScheduler</strong> within Flask to automate
            data retrieval, processing, and updates every hour, ensuring that
            the latest balloon and aircraft tracking information is always
            available.
          </li>
          <li>
            <strong>Deployment & Accessibility:</strong> Hosted online using
            <strong> FlaskDeploy</strong>, making the system publicly accessible
            with real-time updates.
          </li>
          {/* <li>
            <strong>Applications & Impact:</strong>
            <ul className="list-disc ml-6">
              <li>
                Enhances <strong>aviation safety</strong> by preventing
                potential airspace conflicts.
              </li>
              <li>
                Aids <strong>meteorological research</strong> through real-time
                high-altitude tracking.
              </li>
              <li>
                Supports <strong>unmanned balloon navigation</strong> for
                scientific and commercial applications.
              </li>
            </ul>
          </li> */}
        </ul>
      </div>

      {/* Call to Action */}
      <p className="text-lg font-bold text-center mt-8">
        Explore the web application live! Click the link below 👇
      </p>

      {/* button */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🚀 View Live Project */}
        <motion.a
          href="https://balloonforecastpage.onrender.com/static/Balloon_History_And_Prediction.html"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg hover:brightness-110 transition"
        >
          View Live Project
        </motion.a>

        {/* 🔙 Back Button */}
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 text-grey-700 font-semibold text-sm border border-white/30 backdrop-blur-md shadow hover:bg-white/20 text-indigo-300 transition"
        >
          Back to Projects
        </motion.button>
      </motion.div>
    </div>
  );
}
