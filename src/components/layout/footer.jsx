import React from "react";

export default function Footer() {
  return (
    <div className="relative my-4">
      {/* COLOR BAR */}
      <div className="w-full h-[8px] bg-gray-200"></div>

      {/* TEXT SECTION */}
      <div className="flex justify-between">
        <h3>Copyright 2024. ANP All rights reserved.</h3>
        <h3>Thanks for visiting ☺</h3>
      </div>
    </div>
  );
}
