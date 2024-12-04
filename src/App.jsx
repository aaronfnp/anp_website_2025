import { useState } from "react";
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

function App() {
  const projects = [
    {
      title: "TALENT-TREES",
      description:
        "a dynamic web application for creating and sharing custom talent trees, designed for gamers to personalize skill paths.",
      tech: "React, Firebase, Vite, Tailwind",
      linkGit: "https://github.com/chriscain/talent-trees",
      linkApp: "",
      linkImg: TalentTrees,
    },
    {
      title: "COLONEL KERNEL",
      description:
        'a clicker game where users earn "corn" to purchase upgrades, within a team of four.',
      tech: "MongoDB, Express, React, Node.js",
      linkGit: "https://github.com/aaronfnp/kernel_colonel",
      linkApp: "https://kernelcolonel-363e070e95f0.herokuapp.com/",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
    },
    {
      title: "GET BACK TO WORK",
      description:
        "a 3d spot-the-difference game set in an office environment built in unity. currently unreleased.",
      tech: "Unity, C#, Blender",
      linkGit: "",
      linkApp: "",
      linkImg: GetBackToWork,
    },
    {
      title: "TEN-SECOND TORCH",
      description:
        "a '90s inspired horror game, where you have 10 seconds to keep your torch lit between campfires. created for ludum dare #51.",
      tech: "Unity, C#",
      linkGit: "",
      linkApp: "https://aaronfnp.itch.io/tstorch",
      linkImg: TenSecondTorch,
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full min-h-screen">
        <div className=" hero-container">
          <Titlecard />
        </div>
        <Header />

        <section id="about">
          <div className="container-max-width">
            <About />
          </div>
        </section>
        <StyledBreak side={"left"} />

        <section id="projects" className="projects-section p-8">
          <div className="container-max-width">
            <ProjectContainer projects={projects} />
          </div>
        </section>
        <StyledBreak side={"right"} />

        <section id="contact">
          <div className="container-max-width">
            <Contact />
          </div>
        </section>
      </div>
      <div className="container-max-width">
        <Footer />
      </div>
    </div>
  );
}

export default App;
