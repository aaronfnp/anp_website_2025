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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 border-y-8 border-[#006645]"
        autoPlay
        loop
        muted
      >
        <source src={ANPReel} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div
          className="relative group text-center cursor-pointer"
          onClick={() => setIsTitleClicked(true)}
        >
          <h1
            className={`flex flex-col text-white my-4 text-[6rem] font-extrabold drop-shadow-2xl ease-in-out transform transition-all whitespace-nowrap`}
          >
            {/* "WHAT DO YOU GET" SLIDES OUT LEFT, INNOVATIVE SLIDES IN */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-20 opacity-100"
                  }`}
                >
                  WHAT DO YOU GET
                </span>
                <span
                  className={`text-[6rem] font-bold transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  }`}
                >
                  {titles.title1}
                </span>
              </h2>
            </div>

            {/* "WHEN YOU CROSS" SLIDES OUT LEFT, RESPONSIVE SLIDES IN */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-20 opacity-100"
                  }`}
                >
                  WHEN YOU CROSS
                </span>
                <span
                  className={`text-[6rem] font-bold transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  }`}
                >
                  {titles.title2}
                </span>
              </h2>
            </div>

            {/* "A VFX ARTIST..." SLIDES OUT LEFT, LOGICAL SLIDES IN */}
            <div className="inline-block">
              <h2 className="flex justify-between w-full">
                <span
                  className={`duration-700 text-left ${
                    isTitleClicked
                      ? "-translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-black/50"
                      : "translate-x-20 opacity-100"
                  }`}
                >
                  A VFX ARTIST AND DEVELOPER
                </span>
                <span
                  className={`text-[6rem] font-bold transition-all duration-700 ease-in-out transform text-right ${
                    isTitleClicked
                      ? "-translate-x-20 opacity-100 "
                      : "translate-x-full opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-white/50"
                  }`}
                >
                  {titles.title3}
                </span>
              </h2>
            </div>
          </h1>

          {/* Title 3 IGNORE FOR NOW */}
          {/* <h2
            className={`mt-4 text-[#00A97C] transition-all duration-500 transform ${
              isTitleClicked
                ? "group-hover:opacity-100 group-hover:translate-y-0"
                : "opacity-0 group-hover:opacity-0 group-hover:translate-y-4"
            }`}
          >
            {titles.title3}
          </h2> */}
        </div>
      </div>

      {/* Optional: Overlay for styling (e.g., darkening the background) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>
    </div>
  );
};

export default TitleCard;
