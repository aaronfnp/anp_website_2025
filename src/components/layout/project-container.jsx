const ProjectContainer = ({ projects }) => {
  return (
    <div>
      <h1 className=" text-left font-extrabold">projects.</h1>
      <div className="flex flex-wrap justify-between my-8 min-h-[90vh]">
        {projects.map((project, index) => (
          // PROJECT CONTAINER
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-[45%] lg:w-[35%]"
          >
            {/* IMAGE */}
            <div className="w-full h-[200px] flex items-center justify-center drop-shadow-md">
              <img
                className="object-cover h-full w-full rounded"
                src={project.linkImg}
                alt={`${project.title} Thumbnail`}
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col text-left mt-4 flex-grow w-full">
              <h2 className="text-2xl font-semibold text-[#f6f9ff]">
                {project.title}
              </h2>
              <p className="text-md text-[#f6f9ff]">{project.description}</p>
              <div className="mt-4 w-[30%] h-[4%] bg-[#f1f1e6]"></div>
              <h4 className="text-md mt-1 font-bold text-[#4091f9]">
                {project.tech}
              </h4>
              <div className="flex justify-start">
                {project.linkGit && (
                  <a
                    href={project.linkGit}
                    className="flex items-center space-x-2"
                  >
                    <img
                      className="object-cover h-8 w-8"
                      src="https://img.icons8.com/?size=100&id=12599&format=png&color=f1f1e6"
                      alt="GitHub Icon"
                    />
                  </a>
                )}
                {project.linkApp && (
                  <a href={project.linkApp} className="flex items-center">
                    <img
                      className="object-cover h-10 w-10"
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
    </div>
  );
};

export default ProjectContainer;
