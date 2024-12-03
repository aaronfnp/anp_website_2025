import { useState } from "react";

function Titlecard() {
  const [isTitleClicked, setIsTitleClicked] = useState(false);

  const titles = {
    title2: "a cross between creativity and technical mastery.",
    title3: "also me, a guy who likes really minute details...",
  };

  return (
    <div className="flex flex-col container">
      <div className="text-md font-bold text-gray-800 mb-4 cursor-pointer">
        <div
          className="relative group mx-auto text-center"
          onClick={() => setIsTitleClicked(true)}
        >
          {/* Title 1 ALWAYS SHOWS */}
          <h1 className="my-4 leading-relaxed">
            WHAT DO YOU GET <br />
            WHEN YOU CROSS <br />
            A VFX ARTIST <br />
            AND <br />
            CODING <br />?
          </h1>

          {/* Title 2 APPEARS ON HOVER */}
          <h2 className="left-0 top-full opacity-0 group-hover:opacity-100 text-lg group-hover:text-lg transition-all duration-600">
            {titles.title2}
          </h2>

          {/* Title 3 APPEARS ON CLICK */}
          <h2
            className={`left-0 top-full text-xs text-[#00A97C] transition-all opacity-0 duration-400 ${
              isTitleClicked
                ? "group-hover:opacity-100"
                : "group-hover:opacity-0"
            } `}
          >
            {titles.title3}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Titlecard;
