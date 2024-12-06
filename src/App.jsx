import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/layout/resume";
import "./App.css";
import Header from "./components/layout/header";
import Contact from "./components/contact";
import ProjectContainer from "./components/layout/project-container";
import Titlecard from "./components/layout/titlecard";
import About from "./components/layout/about";
import Footer from "./components/layout/footer";
import StyledBreak from "./components/layout/styledbreak";
import GetBackToWork from "./assets/images/GetBackToWork.png";
import TenSecondTorch from "./assets/images/TenSecondTorch.png";
import TalentTrees from "./assets/images/TalentTrees.png";
import ReelThumb from "./assets/images/ReelThumb.png";
import ANPReel from "./assets/videos/ANPReel.mp4";

function App() {
  const projects = [
    {
      title: "TALENT-TREES",
      description:
        "A dynamic web application for creating and sharing custom talent trees, designed for gamers to personalize skill paths.",
      tech: "React, Firebase, Vite, Tailwind",
      linkGit: "https://github.com/chriscain/talent-trees",
      linkApp: "",
      linkImg: TalentTrees,
      type: "image",
    },
    {
      title: "COLONEL KERNEL",
      description:
        'A clicker game where users earn "corn" to purchase upgrades.',
      tech: "MongoDB, Express, React, Node.js",
      linkGit: "https://github.com/aaronfnp/kernel_colonel",
      linkApp: "https://kernelcolonel-363e070e95f0.herokuapp.com/",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
      type: "image",
    },
    {
      title: "GET BACK TO WORK",
      description:
        "A 3d spot-the-difference game set in an office environment built in unity. Currently unreleased.",
      tech: "Unity, C#, Blender",
      linkGit: "",
      linkApp: "",
      linkImg: GetBackToWork,
      type: "image",
    },
    {
      title: "TEN-SECOND TORCH",
      description:
        "A '90s inspired horror game, where you have 10 seconds to keep your torch lit between campfires. Created for ludum dare #51.",
      tech: "Unity, C#",
      linkGit: "",
      linkApp: "https://aaronfnp.itch.io/tstorch",
      linkImg: TenSecondTorch,
      type: "image",
    },
    {
      title: "VFX PORTFOLIO",
      description:
        "Want to have a closer look at my portfolio? Or click the link below to see my other website!",
      tech: "Adobe Creative Suite",
      linkGit: "",
      linkApp: "https://anpv.webnode.com/",
      linkImg: ReelThumb,
      // linkImg: ANPReel,
      type: "video",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full min-h-screen">
              <div className="hero-container">
                <Titlecard />
              </div>
              <Header />

              <section id="about">
                <div className="container-max-width">
                  <About />
                </div>
              </section>
              <StyledBreak />

              <section id="projects" className="projects-section">
                <div className="container-max-width">
                  <ProjectContainer projects={projects} />
                </div>
              </section>
              <StyledBreak />

              <section id="contact">
                <div className="container-max-width">
                  <Contact />
                </div>
              </section>
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <div className="container-max-width">
        <Footer />
      </div>
    </div>
  );
}

export default App;
