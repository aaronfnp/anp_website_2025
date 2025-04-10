import { useState } from "react";
import Popout from "../ui/ImagePopout";

const ProjectContainer = ({ projects }) => {
  const [isPopoutOpen, setPopoutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopout = (project) => {
    setSelectedProject(project);
    setPopoutOpen(true);
  };

  const closePopout = () => {
    setSelectedProject(null);
    setPopoutOpen(false);
  };

  return (
    <div>
      <h1 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-between my-4 sm:min-h-[100vh] lg:min-h-[90vh]">
        {projects.map((project, index) => (
          // PROJECT CONTAINER
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full md:w-[45%] lg:w-[45%] mt-5 "
          >
            {/* IMAGE */}
            <div
              className="w-full h-[200px] flex items-center justify-center drop-shadow-md cursor-pointer brightness-90 border-0 border-[#4091f9] hover:brightness-110 hover:border-2 transition-all"
              onClick={() => openPopout(project)}
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
              <p className="text-base md:text-lg text-[#f6f9ff]">
                {project.description}
              </p>
              <div className="mt-4 w-[40%] h-[1px] bg-[#f1f1e6]"></div>
              <h4 className="text-md mt-2 font-bold text-[#4091f9]">
                {project.tech}
              </h4>
              <div className="flex justify-start">
                {project.linkGit ? (
                  <a
                    href={project.linkGit}
                    className="flex items-center space-x-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="object-cover mr-1.5 mt-1.5 mb-3 h-7 w-7"
                      src="https://img.icons8.com/?size=100&id=12599&format=png&color=f1f1e6"
                      alt="GitHub Icon"
                    />
                  </a>
                ) : (
                  <div className="mt-1.5 mb-3"></div>
                )}
                {project.linkApp && (
                  <a
                    href={project.linkApp}
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="object-cover mr-1.5 mt-1.5 mb-3 h-8 w-8"
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
      {selectedProject && (
        <Popout
          isOpen={isPopoutOpen}
          onClose={closePopout}
          imageSrc={selectedProject.linkImg}
          altText={selectedProject.title}
          type={selectedProject.type}
          videoSrc={selectedProject.linkVideo}
        />
      )}
    </div>
  );
};

export default ProjectContainer;
