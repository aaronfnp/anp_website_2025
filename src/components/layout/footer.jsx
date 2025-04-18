import React from "react";

export default function Footer() {
  return (
    <div className="relative mt-4 xs:pb-4 lg:pb-8">
      {/* COLOR BAR */}
      <div className="w-full h-[1px] bg-[#f1f1e6]"></div>
      {/* TEXT SECTION */}
      <div className="flex justify-between text-xs sm:text-base text-[#f6f9ff]">
        <h3>Copyright 2024. ANP All rights reserved.</h3>
        <h3>Thanks for visiting ☺</h3>
      </div>
    </div>
  );
}
