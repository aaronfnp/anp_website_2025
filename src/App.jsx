import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Contact from "./components/contact";
import ProjectContainer from "./components/layout/project-container";

function App() {
  return (
    <div>
      <div>
        <h1>What do you get when you cross a VFX artist and coding?</h1>
        <Header />
        <h1>About</h1>
        <h2>
          Driven software engineer with a strong foundation in frontend and
          full-stack web development, transitioning from a successful background
          in VFX editing. My experience in VFX and game development (Unity & C#)
          has honed my attention to detail and creativity, while General
          Assembly&apos;s Software Engineering program solidified my technical
          skills, especially in JavaScript and React. Passionate about creating
          responsive, user-centered applications.
        </h2>
        <h1>Projects</h1>
        <ProjectContainer
          title={"Talent-Trees"}
          description={
            "A dynamic web application for creating and sharing custom talent trees, designed for gamers to personalize skill paths."
          }
          tech={"React, Firebase, Vite, Tailwind"}
          linkGit={""}
          linkApp={""}
        ></ProjectContainer>
        <ProjectContainer
          title={"Colonel Kernel"}
          description={
            'A clicker game where users earn "corn" to purchase upgrades, within a team of four.'
          }
          tech={"MongoDB, Express, React, Node.js"}
          linkGit={""}
          linkApp={""}
        ></ProjectContainer>
        <ProjectContainer
          title={"Get Back To Work"}
          description={
            "A 3D spot-the-difference game set in an office environment built in Unity"
          }
          tech={"Unity, C#, Blender"}
          linkGit={""}
          linkApp={""}
        ></ProjectContainer>
        <Contact />
      </div>
    </div>
  );
}

export default App;
