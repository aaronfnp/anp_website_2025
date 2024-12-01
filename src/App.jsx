import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Contact from "./components/contact";
import ProjectContainer from "./components/layout/project-container";
import Titlecard from "./components/layout/titlecard";
import About from "./components/layout/about";

function App() {
  return (
    <div>
      <Titlecard />

      <Header />

      <About />

      <div className="projects-section p-8">
        <h1>Projects</h1>
        <ProjectContainer
          title={"Talent-Trees"}
          description={
            "A dynamic web application for creating and sharing custom talent trees, designed for gamers to personalize skill paths."
          }
          tech={"React, Firebase, Vite, Tailwind"}
          linkGit={""}
          linkApp={""}
        />
        <ProjectContainer
          title={"Colonel Kernel"}
          description={
            'A clicker game where users earn "corn" to purchase upgrades, within a team of four.'
          }
          tech={"MongoDB, Express, React, Node.js"}
          linkGit={""}
          linkApp={""}
        />
        <ProjectContainer
          title={"Get Back To Work"}
          description={
            "A 3D spot-the-difference game set in an office environment built in Unity"
          }
          tech={"Unity, C#, Blender"}
          linkGit={""}
          linkApp={""}
        />
      </div>

      <Contact />
    </div>
  );
}

export default App;
