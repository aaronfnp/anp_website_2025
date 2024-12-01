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

    // Version Control
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
    },

    // Other
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
      alt: "Unity",
    },

    // Firebase slot (left blank for now)
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      alt: "Firebase",
    },
  ];

  return (
    <div className="about-section p-8">
      <h1>About</h1>
      <div className="flex columns-2 justify-center items-center">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <img
            src="https://air-tutorial.com/wp-content/uploads/2020/01/cropped-coding-man-6.png"
            className="w-40 h-15"
          ></img>
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
          <div className="grid grid-cols-4 gap-4 items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-16 h-24 "
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-16 h-16 object-contain m-2 border-2 border-indigo-600 rounded-md p-1"
                />
                <h3 className="text-center text-sm">{icon.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
