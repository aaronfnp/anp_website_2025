import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Contact from "./components/contact";
import ProjectContainer from "./components/layout/project-container";
import Titlecard from "./components/layout/titlecard";
import About from "./components/layout/about";

function App() {
  const projects = [
    {
      title: "Talent-Trees",
      description:
        "A dynamic web application for creating and sharing custom talent trees, designed for gamers to personalize skill paths.",
      tech: "React, Firebase, Vite, Tailwind",
      linkGit: "https://github.com/chriscain/talent-trees",
      linkApp: "",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
    },
    {
      title: "Colonel Kernel",
      description:
        'A clicker game where users earn "corn" to purchase upgrades, within a team of four.',
      tech: "MongoDB, Express, React, Node.js",
      linkGit: "https://github.com/aaronfnp/kernel_colonel",
      linkApp: "https://kernelcolonel-363e070e95f0.herokuapp.com/",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
    },
    {
      title: "Get Back To Work",
      description:
        "A 3D spot-the-difference game set in an office environment built in Unity",
      tech: "Unity, C#, Blender",
      linkGit: "",
      linkApp: "",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
    },
    {
      title: "Ten-Second Torch",
      description:
        "A '90s inspired horror game, where you have 10 seconds to keep your torch lit between campfires. Created for Ludum Dare #51.",
      tech: "Unity, C#",
      linkGit: "",
      linkApp: "https://aaronfnp.itch.io/tstorch",
      linkImg:
        "https://raw.githubusercontent.com/aaronfnp/kernel_colonel/main/public/game-interface.png",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full min-h-screen">
        <div className="container-max-width hero-container">
          <Titlecard />
        </div>
        <Header />

        <section id="about">
          <div className="container-max-width">
            <About />
          </div>
        </section>

        <section id="projects" className="projects-section p-8">
          <div className="container-max-width">
            <ProjectContainer projects={projects} />
          </div>
        </section>

        <section id="contact">
          <div className="container-max-width">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
