import React from "react";
import { Routes, Route } from "react-router";
import PageLayout from "./components/Layout";
import HomePage from "./components/Home";
import LandingPage from "./components/Landing";
import AboutPage from "./components/About";
import ResumePage from "./components/Resume";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./components/Projects";
import ContactPage from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<PageLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
