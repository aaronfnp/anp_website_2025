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
    "I'm a software developer with a solid foundation in frontend and full-stack web development, building on my background in VFX editing. Originally my interest in video game development started as a hobby, which led me to explore Unity and C#. My experiences have helped me develop a keen eye for detail and creativity. After completing General Assembly's Software Engineering program, I've focused on honing my skills in JavaScript and React.";

  return (
    <div className="about-section relative h-[60vh] pt-[20vh]">
      <h1 className="text-2xl text-left font-extrabold">about.</h1>
      <div className="flex justify-start items-start space-x-8 h-full">
        <div className="flex flex-col w-1/2 text-left">
          <h2>{description}</h2>
          <h2>
            <span className="font-bold text-green-600 italic">
              More than anything,{" "}
            </span>{" "}
            <br></br>I want to build practical solutions that{" "}
            <span className="underline">genuinely</span> help people.
          </h2>
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
    </div>
  );
}

export default About;
