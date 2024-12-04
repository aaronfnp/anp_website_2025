import { useState } from "react";
import ANPReel from "../../assets/videos/ANPReel.mp4";

const TitleCard = () => {
  const [isTitleClicked, setIsTitleClicked] = useState(false);

  const titles = {
    title1: "INNOVATIVE",
    title2: "RESPONSIVE",
    title3: "LOGICAL",
    title4: "ALSO ME, someone obsessed with the details",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden p-2">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 border-y-8 border-[#2f3e5d]"
        autoPlay
        loop
        muted
      >
        <source src={ANPReel} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#f6f9ff]">
        <div
          className="relative group text-center cursor-pointer"
          onClick={() => setIsTitleClicked(true)}
        >
          <h1 className="flex flex-col text-[#f6f9ff] my-4 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bebas font-extrabold drop-shadow-4xl ease-in-out transform transition-all whitespace-nowrap">
            {/* Title Group 1 */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-8 md:translate-x-20 opacity-100"
                  } drop-shadow-4xl`}
                >
                  WHAT DO YOU GET
                </span>
                <span
                  className={`transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-8 md:-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  } drop-shadow-4xl`}
                >
                  {titles.title1}
                </span>
              </h2>
            </div>

            {/* Title Group 2 */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-8 md:translate-x-20 opacity-100"
                  } drop-shadow-4xl`}
                >
                  WHEN YOU CROSS
                </span>
                <span
                  className={`transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-8 md:-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  } drop-shadow-4xl`}
                >
                  {titles.title2}
                </span>
              </h2>
            </div>

            {/* Title Group 3 */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-8 md:translate-x-20 opacity-100"
                  } drop-shadow-4xl`}
                >
                  A VFX ARTIST AND DEVELOPER
                </span>
                <span
                  className={`transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-8 md:-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  } drop-shadow-4xl`}
                >
                  {titles.title3}
                </span>
              </h2>
            </div>
          </h1>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>
    </div>
  );
};

export default TitleCard;
