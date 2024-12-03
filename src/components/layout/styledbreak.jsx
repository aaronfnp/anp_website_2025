import React from "react";

export default function StyledBreak({ side }) {
  return (
    <div className="container-max-width">
      <div className="relative h-[20vh]">
        <div
          className={`absolute bottom-10 ${
            side === "left" ? "left-8" : "right-8"
          } w-[1%] h-[100%] bg-[#e7fdff]`}
        ></div>
      </div>
    </div>
  );
}
