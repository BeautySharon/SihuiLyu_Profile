import React from "react";
import blackjack_demo from "../assets/Images/BalackJack.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import structure_pic from "../assets/Images/MVC_structure.png";
import main_menu from "../assets/Images/mainmenu.jpg";

export default function BJProjectDetails() {
  const navigate = useNavigate();

  return (
    <div className="w-2/3 h-auto bg-white text-black flex flex-col justify-center items-center p-6 mb-[50px]">
      {/* Screenshot */}
      <p className="my-12 text-center">
        <img
          src={blackjack_demo}
          alt="Project folder structure"
          className="rounded-lg shadow-md mx-auto mt-4"
        />
        <p className="text-sm text-gray-500">Gameplay Interface Overview</p>
      </p>

      {/* <img
        src={blackjack_demo}
        alt="Blackjack Demo"
        className="rounded-lg shadow-md mx-auto mb-8 mt-4"
      /> */}

      {/* Sections */}
      <div className="space-y-8 text-left">
        <section>
          <h2 className="text-2xl font-bold mb-2"> Project Overview</h2>
          <p>
            Blackjack.ACE is a full-featured Java card game built using the MVC
            architecture. The game follows standard Blackjack rules, where a
            player competes against a dealer. It offers two modes:{" "}
            <ul className="list-disc pl-6 mt-2">
              <li>
                Training Mode, where users can train and refine their
                decision-making strategies using a reinforcement learning AI
                powered by Q-learning.
              </li>
              <li>
                Versus Mode, where users play a complete game against the dealer
                with real-time move suggestions provided by the AI advisor.
              </li>
            </ul>
          </p>
        </section>
        <p className="my-12 text-center">
          <img
            src={main_menu}
            alt="Project folder structure"
            className="mx-auto rounded-lg shadow-md w-96"
          />
          <p className="text-sm text-gray-500">Blackjack main menu</p>
        </p>
        <section>
          <h2 className="text-2xl font-bold mb-2">
            AI Advisor with Q-Learning
          </h2>
          <p>
            Implemented a Q-learning agent that simulates thousands of games to
            generate a Q-table. During the game, the AI advisor recommends
            optimal actions (Hit/Stand) based on the current state:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Player hand total</li>
            <li>Dealer's visible card</li>
            <li>Whether the player has a usable Ace</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Object-Oriented Design</h2>

          <p className="text-gray-700">
            This project strictly follows the MVC (Model-View-Controller)
            architecture, as reflected in the folder structure shown below.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Model:</strong> Encapsulates the core game logic,
              including card drawing, hand scoring, state transitions, and AI
              logic. Key classes include{" "}
              <code className="bg-gray-100 px-1 rounded">BlackjackGame</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">Card</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">Deck</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">Player</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">Dealer</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">AIAdvisor</code>, and{" "}
              <code className="bg-gray-100 px-1 rounded">AudioPlayer</code>.
            </li>

            <li>
              <strong>View:</strong> Implements the graphical interface using
              Java Swing, rendering cards, buttons, game states, and user
              interactions. Main components include{" "}
              <code className="bg-gray-100 px-1 rounded">MainMenu</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">PlayerVsAIFrame</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">TrainingModeView</code>
              , and{" "}
              <code className="bg-gray-100 px-1 rounded">GamePanelBuilder</code>
              .
            </li>

            <li>
              <strong>Controller:</strong> Connects user inputs to game logic
              and view updates.
              <code className="bg-gray-100 px-1 rounded">
                PlayerVsAIController
              </code>{" "}
              manages user-versus-AI gameplay interactions, while{" "}
              <code className="bg-gray-100 px-1 rounded">
                TrainingModeController
              </code>{" "}
              supports the training mode and strategy visualization.
            </li>
          </ul>
          <p className="my-12 text-center">
            <img
              src={structure_pic}
              alt="Project folder structure"
              className="mx-auto rounded-lg shadow-md w-96"
            />
            <p className="text-sm text-gray-500 mt-2">
              Project Folder Structure (MVC)
            </p>
          </p>
          <p className="mt-4 text-gray-700">
            This project applies core object-oriented principles:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
            <li>
              <strong>Encapsulation</strong>: Game state is accessed and
              modified through public APIs.
            </li>
            <li>
              <strong>Inheritance</strong>:{" "}
              <code className="bg-gray-100 px-1 rounded">Dealer</code> inherits
              from <code className="bg-gray-100 px-1 rounded">Player</code> with
              specific behaviors.
            </li>
            <li>
              <strong>Composition</strong>:{" "}
              <code className="bg-gray-100 px-1 rounded">BlackjackGame</code>{" "}
              composes <code className="bg-gray-100 px-1 rounded">Deck</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">Player</code>, and{" "}
              <code className="bg-gray-100 px-1 rounded">Dealer</code> to
              control the overall game state.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Two distinct modes: <strong>Training Mode</strong> for AI
              learning, and <strong>Versus Mode</strong> for player-vs-dealer
              gameplay
            </li>
            <li>
              Interactive <strong>Java Swing GUI</strong> with custom card image
              rendering
            </li>
            <li>
              AI advisor powered by a pre-trained <strong>Q-stable</strong>{" "}
              using Q-Learning
            </li>
            <li>
              Visual comparison between Q-Learning heatmap and basic strategy
              chart
            </li>
            <li>
              Modular audio system via <code>AudioPlayer</code> for background
              music
            </li>
            <li>Highly testable, extensible code structure</li>
          </ul>
        </section>
        {/* <section>
          <h2 className="text-2xl font-bold mb-2">Limitations & Future Work</h2>
          <ul className="list-disc pl-6">
            <li>No support for betting, doubling, or splitting</li>
            <li>Q-table missing values for rare states</li>
            <li>Possible improvement with Deep Q-Networks (DQN)</li>
          </ul>
        </section> */}
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🚀 View Project (disabled for now) */}
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg hover:brightness-110 transition cursor-not-allowed opacity-60"
        >
          View Demo (Coming Soon)
        </motion.span>

        {/* 🔙 Back Button */}
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 text-indigo-300 font-semibold text-sm border border-white/30 backdrop-blur-md shadow hover:bg-white/20 transition"
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>
      </motion.div>
    </div>
  );
}
