import React from "react";

function About() {
  const tech = [
    // Languages
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      text: "HTML5",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      text: "CSS3",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      text: "JavaScript",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      text: "C#",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      text: "PYTHON",
    },

    // Frameworks/Tools
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "REACT",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "TAILWIND CSS",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      text: "NODE.JS",
    },

    // Version Control
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      text: "GIT",
    },
    // Databases
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      text: "MONGODB",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      text: "MONGOOSE",
    },
    {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      text: "FIREBASE",
    },
  ];

  const description =
    "I'm a software developer with a solid foundation in frontend and full-stack web development, building on my background in VFX editing. Originally my interest in video game development started as a hobby, which led me to explore Unity and C#. My experiences have helped me develop a keen eye for detail and creativity. After completing General Assembly's Software Engineering program, I've focused on honing my skills in JavaScript and React.";

  return (
    <div className="about-section relative h-[60vh] pt-[20vh]">
      <h1 className=" text-left font-extrabold ">ABOUT</h1>
      <div className="flex justify-start items-start space-x-8 h-full">
        <div className="flex flex-col w-1/2 text-left text-[#f6f9ff] text-xl">
          <h2>{description}</h2>
          <h2>
            <span className="font-bold text-[#4091f9] italic">
              more than anything,{" "}
            </span>{" "}
            <br></br>I want to build practical solutions that{" "}
            <span className="underline">genuinely</span> help people.
          </h2>
        </div>

        <div className="w-1/2">
          <div className="flex flex-wrap items-start">
            {tech.map((icon, index) => (
              <h3
                key={index}
                className="text-center text-[3.5em] text-[#2f3e5d] hover:grayscale-0 grayscale leading-none italic"
              >
                {icon.text}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
