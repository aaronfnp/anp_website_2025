import React from "react";

function About() {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
  ];
  return (
    <div className="about-section p-8">
      <h1>About</h1>
      <div className="flex columns-2">
        <div>
          <h2>
            Driven software engineer with a strong foundation in frontend and
            full-stack web development, transitioning from a successful
            background in VFX editing. My experience in VFX and game development
            (Unity & C#) has honed my attention to detail and creativity, while
            General Assembly&apos;s Software Engineering program solidified my
            technical skills, especially in JavaScript and React. Passionate
            about creating responsive, user-centered applications.
          </h2>
        </div>
        <div>
          <div className="flex-col columns-5">
            {icons.map((icon, index) => (
              <img src={icon} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
