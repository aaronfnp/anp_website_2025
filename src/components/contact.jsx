"use client";

import { useState } from "react";
import Timer from "./timer";
import DialogWindow from "./dialog";

export default function Contact() {
  const [isSubmittingDialog, setIsSubmittingDialog] = useState(false);

  return (
    <div className="relative h-[75vh] pt-[2vh]">
      <h1 className="text-2xl ml-6 text-left font-extrabold">contact.</h1>
      <div className="isolate bg-white px-6">
        <DialogWindow
          isSubmittingDialog={isSubmittingDialog}
          setIsSubmittingDialog={setIsSubmittingDialog}
        />
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Timer and Text */}
          <div className="lg:w-1/2 flex flex-col text-left">
            <Timer />
            <h3 className="mt-5 font-thin">AARON NELSON-PURCELL</h3>
            <a
              href="mailto:aaronfnp@gmail.com"
              className="font-thin hover:underline hover:font-light"
            >
              aaronfnp@gmail.com
            </a>
            <div className="flex justify-start mt-1">
              <a
                href="https://github.com/aaronfnp"
                className="flex items-center"
              >
                <img
                  className="object-cover h-10 w-10 mr-1"
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=92A0FF"
                  alt="GitHub Profile"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aaronnp/"
                className="flex items-center"
              >
                <img
                  className="object-cover h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=60444&format=png&color=92A0FF"
                  alt="LinkedIn Profile"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form action="#" method="POST" className="lg:w-1/2 sm:mt-2">
            {/* Name Input */}
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-md font-bold text-[#00A97C] text-left"
              >
                name:
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-8 -outline-offset-1 outline-[#e7fef6] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="w-full mt-4">
              <label
                htmlFor="email"
                className="block text-md font-bold text-[#00A97C] text-left"
              >
                email:
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-8 -outline-offset-1 outline-[#e7fef6] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="w-full mt-4">
              <label
                htmlFor="message"
                className="block text-md font-bold text-[#00A97C] text-left"
              >
                message:
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-8 -outline-offset-1 outline-[#e7fef6] placeholder:text-gray-400"
                  defaultValue={""}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full mt-8">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSubmittingDialog(true);
                }}
                className="block w-full rounded-md bg-[#00A97C] px-3.5 py-2.5 text-center text-sm font-bold text-[#e7fef6] shadow-sm hover:bg-[#006645] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7fdff]"
              >
                contact me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
