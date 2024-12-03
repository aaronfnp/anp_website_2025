const ProjectContainer = ({ projects }) => {
  return (
    <div>
      <h1 className="ml-5 text-left font-bold">projects.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 mt-8 justify-center place-items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-5 w-[350px] h-[450px] "
          >
            <div className="w-full h-[200px] flex items-center justify-center drop-shadow-md">
              <img
                className="object-cover h-full w-full"
                src={project.linkImg}
                alt={`${project.title} Thumbnail`}
              />
            </div>

            <div className="flex-col text-left mt-4 flex-grow w-full">
              <h2 className="text-2xl font-semibold text-slate-500">
                {project.title}
              </h2>
              <p className="text-md text-slate-500">{project.description}</p>
              <div className="mt-4 w-[30%] h-[4%] bg-[#e7fdff]"></div>
              <h4 className="text-md my-1 font-bold text-[#00A97C]">
                {project.tech}
              </h4>
              <div className="flex justify-start space-x-2">
                {project.linkGit && (
                  <a
                    href={project.linkGit}
                    className="flex items-center space-x-2"
                  >
                    <img
                      className="object-cover h-8 w-8"
                      src="https://img.icons8.com/?size=100&id=SzgQDfObXUbA&format=png&color=000000"
                      alt="GitHub Icon"
                    />
                  </a>
                )}
                {project.linkApp && (
                  <a
                    href={project.linkApp}
                    className="flex items-center space-x-2"
                  >
                    <img
                      className="object-cover h-10 w-10"
                      src="https://img.icons8.com/?size=100&id=PdMS7nTd0vpH&format=png&color=000000"
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
