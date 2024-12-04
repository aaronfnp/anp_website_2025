import React from "react";

export default function StyledBreak({ side }) {
  return (
    <div className="container-max-width">
      <div className="relative h-[20vh]">
        <div
          className={`absolute bottom-10 ${
            side === "left" ? "left-0" : "right-0"
          } w-[.5%] h-[100%] bg-[#f1f1e6] rounded`}
        ></div>
      </div>
    </div>
  );
}
