import React from "react";

export default function About() {
  const tech = [
    { text: "HTML5" },
    { text: "CSS3" },
    { text: "JavaScript" },
    { text: "C#" },
    { text: "PYTHON" },
    { text: "REACT" },
    { text: "TAILWINDCSS" },
    { text: "VITE" },
    { text: "NODE.JS" },
    { text: "GIT" },
    { text: "MONGODB" },
    { text: "MONGOOSE" },
    { text: "FIREBASE" },
    { text: "EXPRESS" },
  ];

  const description =
    "I'm a software developer with a solid foundation in frontend and full-stack web development, building on my background in VFX editing. Originally my interest in video game development started as a hobby, which led me to explore Unity and C#. My experiences have helped me develop a keen eye for detail and creativity. After completing General Assembly's Software Engineering program, I've focused on honing my skills in JavaScript and React.";

  return (
    <div className="about-section flex flex-col relative pt-8 md:pt-[10vh] lg:pt-[20vh]">
      <h1 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
        ABOUT
      </h1>
      <div className="flex flex-col md:flex-row justify-start items-start md:space-x-8 space-y-8 md:space-y-0">
        {/* Left Section: Description */}
        <div className="flex flex-col w-full text-left text-[#f6f9ff] text-base sm:text-md md:text-lg lg:text-2xl ">
          <h2 className="leading-normal">{description}</h2>
          <h2>
            <span className="font-bold text-[#4091f9] italic">
              More than anything,{" "}
            </span>
            <br />I want to build practical solutions that genuinely help
            people.
          </h2>
          {/* Tech Section */}
          <div className="flex flex-col md:flex-row justify-start items-start md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex flex-row flex-wrap max-w-full text-left text-[#f6f9ff] sm:text-2xl md:text-3xl lg:text-4xl mt-4">
              {tech.map((icon, index) => (
                <h3
                  key={index}
                  className="flex flex-row text-[#2f3e5d] hover:grayscale-0 grayscale italic "
                >
                  {icon.text}
                </h3>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Tech Stack */}
      </div>
    </div>
  );
}
