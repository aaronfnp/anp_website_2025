import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Contact from "./components/contact";
import ProjectContainer from "./components/layout/project-container";

function App() {
  return (
    <div className="relative h-screen w-full bg-slate-950">
      <div>
        <Header />
        <h1>What do you get when you cross a VFX artist and coding?</h1>
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
        <h2>Talent-Trees</h2>
        <h3>
          A dynamic web application for creating and sharing custom talent
          trees, designed for gamers to personalize skill paths.
        </h3>
        <h4>Technologies: React, Firebase, Vite, Tailwind</h4>
        <h3 href="">GitHub</h3> <h3 href="">Application</h3>
        <h2>Colonel Kernel</h2>
        <h3>
          A clicker game where users earn &quot;corn&quot; to purchase upgrades,
          within a team of four.
        </h3>
        <h4>Technologies: MongoDB, Express, React, Node.js</h4>
        <h3 href="">GitHub</h3> <h3 href="">Application</h3>
        <h2>Get Back To Work</h2>
        <h3>
          A 3D spot-the-difference game set in an office environment built in
          Unity
        </h3>
        <h4>Technologies: Unity, C#, Blender</h4>
        <h3 href="">GitHub</h3> <h3 href="">Application</h3>
        <h1>Test APP</h1>
        <ProjectContainer></ProjectContainer>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
