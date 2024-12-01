import React from "react";

export default function ProjectContainer({
  title,
  description,
  tech,
  linkGit,
  linkApp,
  linkImg,
  reverse,
}) {
  return (
    <div
      className={`flex items-center justify-center mb-8 mt-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className="mx-5 object-cover h-48 w-96"
        src={linkImg}
        alt={`${title} Thumbnail`}
      />
      <div className={`flex-col text-left ${reverse ? "text-right" : ""}`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-md">{description}</h3>
        <h4 className="text-sm font-bold">Technologies: {tech}</h4>
        <div
          className={`flex mt-5 ${
            reverse ? "justify-end" : "justify-start"
          } space-x-2`}
        >
          {linkGit && (
            <a href={linkGit} className="flex items-center space-x-2">
              <img
                className="object-cover h-12 w-12"
                src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000"
                alt="GitHub Icon"
              />
              <span>GitHub</span>
            </a>
          )}
          {linkApp && (
            <a href={linkApp} className="flex items-center space-x-2">
              <img
                className="object-cover h-10 w-10"
                src="https://img.icons8.com/?size=100&id=PdMS7nTd0vpH&format=png&color=000000"
                alt="Application Icon"
              />
              <span>Application</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
