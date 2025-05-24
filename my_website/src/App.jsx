import React from "react";
import HomePage from "./Pages/HomePage";
import IntroductionPage from "./Pages/IntroductionPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import ResumePage from "./Pages/ResumePage";
import BalloonProjectPage from "./Pages/BalloonProjectPage";
import BlackjackProjectPage from "./Pages/BlackjackProjectPage";
import EducationPage from "./Pages/EducationPage";
import WorkPage from "./Pages/WorkPage";
import TechStackPage from "./Pages/TechStackPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/aboutme" element={<IntroductionPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/skills" element={<TechStackPage />} />
      <Route path="/projects/balloon" element={<BalloonProjectPage />} />
      <Route path="/projects/blackjack" element={<BlackjackProjectPage />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
