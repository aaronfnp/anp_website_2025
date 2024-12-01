import React from "react";

export default function ProjectContainer(props) {
  return (
    <div>
      <div className="flex items-center justify-center ...">
        <img
          className="mr-5 object-cover h-48 w-96 ..."
          // WILL ADD {props.linkImage}
          src="https://picsum.photos/1000/1000"
        />
        <div className="flex-col content-center text-left">
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <h3 className="text-md">
            {props.description}
          </h3>
          <h4 className="text-sm font-bold">
            Technologies: {props.tech}
          </h4>
          <div className="flex mt-5 space-x-2">
            <a href={props.linkGit} className="flex items-center space-x-2">
              <img
                className="object-cover h-12 w-12"
                src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000"
                alt="GitHub Icon"
              />
              <h3>GitHub</h3>
            </a>{" "}
            <a href={props.linkApp} className="flex items-center space-x-2">
              <img
                className="object-cover h-10 w-10"
                src="https://img.icons8.com/?size=100&id=PdMS7nTd0vpH&format=png&color=000000"
                alt="GitHub Icon"
              />
              <h3>Application</h3>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
