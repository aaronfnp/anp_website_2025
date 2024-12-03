import React from "react";

function About() {
  const icons = [
    // Languages
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      alt: "C#",
    },

    // Frameworks/Tools
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },

    // Databases
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      alt: "Mongoose",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      alt: "Firebase",
    },

    // Version Control
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
    },
  ];

  const description =
    "Driven software engineer with a strong foundation in frontend and full-stack web development, transitioning from a successful background in VFX editing. My experience in VFX and game development (Unity & C#) has honed my attention to detail and creativity, while General Assembly&apos;s Software Engineering program solidified my technical skills, especially in JavaScript and React. Passionate about creating responsive, user-centered applications.";

  return (
    <div className="about-section p-8 relative h-screen pt-[20vh]">
      <h1 className="text-2xl text-left font-extrabold">about.</h1>
      <div className="flex justify-start items-start space-x-8 h-full">
        <div className="flex flex-col w-1/2 text-left">
          <h2>{description}</h2>
        </div>

        <div className="w-1/2">
          <div className="grid grid-cols-6 gap-4 items-start xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center w-16 h-24"
              >
                <img src={icon.src} alt={icon.alt} className="w-16 h-16 m-2" />
                <h3 className="text-center text-sm">{icon.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-8 w-[1%] h-[20%] bg-[#e7fdff]"></div>
    </div>
  );
}

export default About;
