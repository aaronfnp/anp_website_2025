import React from "react";

function About() {
  const icons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      alt: "Mongoose",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      alt: "C#",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
      alt: "Unity",
    },
  ];

  return (
    <div className="about-section p-8">
      <h1>About</h1>
      <div className="flex columns-2">
        <div className="w-1/2">
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
        <div className="w-1/2">
          <div className="flex-col columns-5 items-center ">
            {icons.map((icon, index) => (
              <img
                src={icon.src}
                alt={icon.alt}
                key={index}
                className="m-3 border-2 border-indigo-600 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
