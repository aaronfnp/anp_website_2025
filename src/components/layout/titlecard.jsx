import { useState } from "react";

function Titlecard() {
  const [isTitleClicked, setIsTitleClicked] = useState(false);

  const titles = {
    title1: "What do you get when you cross a VFX artist and coding?",
    title2: "A world of endless creativity and technical mastery.",
    title3: "also me, a guy who likes really minute details...",
  };

  return (
    <div className="title-section min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-neutral-50/75 p-8 rounded-lg shadow-lg text-center max-w-xl mx-auto">
        <div className="text-md font-bold text-gray-800 mb-4 cursor-pointer">
          <div
            className="relative group"
            onClick={() => setIsTitleClicked(true)}
          >
            {/* Title 1 ALWAYS SHOWS */}
            <h1 className="mb-4">{titles.title1}</h1>

            {/* Title 2 APPEARS ON HOVER */}
            <h2 className="left-0 top-full opacity-0 group-hover:opacity-100 text-sm group-hover:text-lg transition-all duration-600">
              {titles.title2}
            </h2>
            {/* Title 3 APPEARS ON CLICK */}
            <h2
              className={`left-0 top-full text-xs transition-all opacity-0 duration-400 ${
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
    </div>
  );
}

export default Titlecard;
