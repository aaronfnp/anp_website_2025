import { useState } from "react";
import Popout from "./imagepopout";

const ProjectContainer = ({ projects }) => {
  const [isPopoutOpen, setPopoutOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(""); // State to hold the image source for popout
  const [altText, setAltText] = useState(""); // State to hold the alt text for popout

  const openPopout = (src, alt) => {
    setImageSrc(src);
    setAltText(alt);
    setPopoutOpen(true);
  };

  const closePopout = () => setPopoutOpen(false);

  return (
    <div>
      <h1 className="text-left font-extrabold">PROJECTS</h1>
      <div className="flex flex-wrap justify-between my-4 min-h-[90vh]">
        {projects.map((project, index) => (
          // PROJECT CONTAINER
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-[45%] lg:w-[45%] "
          >
            {/* IMAGE */}
            <div
              className="w-full h-[200px] flex items-center justify-center drop-shadow-md cursor-pointer brightness-90 border-0 border-[#4091f9] hover:brightness-110 hover:border-2 transition-all"
              onClick={() =>
                openPopout(project.linkImg, `${project.title} Thumbnail`)
              }
            >
              <img
                className="object-cover h-full w-full rounded "
                src={project.linkImg}
                alt={`${project.title} Thumbnail`}
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col text-left mt-2 flex-grow w-full">
              <h2 className="text-2xl font-semibold text-[#f6f9ff]">
                {project.title}
              </h2>
              <p className="text-md text-[#f6f9ff]">{project.description}</p>
              <div className="mt-4 w-[40%] h-[.5%] bg-[#f1f1e6]"></div>
              <h4 className="text-md mt-2 font-bold text-[#4091f9]">
                {project.tech}
              </h4>
              <div className="flex justify-start">
                {project.linkGit && (
                  <a
                    href={project.linkGit}
                    className="flex items-center space-x-4"
                  >
                    <img
                      className="object-cover mr-1.5 mt-1.5 h-7 w-7"
                      src="https://img.icons8.com/?size=100&id=12599&format=png&color=f1f1e6"
                      alt="GitHub Icon"
                    />
                  </a>
                )}
                {project.linkApp && (
                  <a href={project.linkApp} className="flex items-center">
                    <img
                      className="object-cover mr-1.5 mt-1.5 h-8 w-8"
                      src="https://img.icons8.com/?size=100&id=mVWTXxOBk0I1&format=png&color=f1f1e6"
                      alt="Application Icon"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popout modal for image */}
      <Popout
        isOpen={isPopoutOpen}
        onClose={closePopout}
        imageSrc={imageSrc}
        altText={altText}
      />
    </div>
  );
};

export default ProjectContainer;
