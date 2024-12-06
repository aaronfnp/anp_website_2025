"use client";

import { useState } from "react";
import Timer from "./timer";
import DialogWindow from "./dialog";

export default function Contact() {
  const [isSubmittingDialog, setIsSubmittingDialog] = useState(false);
  const [isCompleteDialog, setIsCompleteDialog] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmittingDialog(true); // Set submitting dialog to true when the form is submitted
    setResult("Sending....");
    const formData = new FormData(event.target);

    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmittingDialog(false);
    setIsCompleteDialog(true);
  };

  return (
    <div className="relative pt-[2vh] lg:h-[75vh] lg:h-auto lg:pt-0">
      <h1 className=" text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        CONTACT
      </h1>
      <div className="isolate">
        {/* Submitting Dialog */}
        <DialogWindow
          isDialogOpen={isSubmittingDialog}
          setIsDialogOpen={setIsSubmittingDialog}
          title="Sending Message"
          message="Please wait"
        />

        {/* Result Dialog */}
        <DialogWindow
          isDialogOpen={isCompleteDialog}
          setIsDialogOpen={setIsCompleteDialog}
          title={
            result === "Form Submitted Successfully" ? "Success!" : "Error"
          }
          message={result}
        />
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Timer and Text */}
          <div className="lg:w-1/2 flex flex-col text-left text-[#f6f9ff] mt-2">
            <Timer />
            <div className="mt-3 w-[40%] h-[1px] bg-[#f1f1e6]"></div>
            <h3 className="mt-3 font-thin">AARON NELSON-PURCELL</h3>
            <a
              href="mailto:aaronfnp@gmail.com"
              className="font-thin hover:underline hover:font-light"
            >
              Email aaronfnp@gmail.com
            </a>
            <div className="flex flex-col justify-start">
              <a
                href="https://github.com/aaronfnp"
                className="font-thin hover:underline hover:font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  className="object-cover h-8 w-8 mr-2"
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=f6f9ff"
                  alt="GitHub Profile"
                /> */}
                <h3>GitHub @aaronfnp</h3>
              </a>
              <a
                href="https://www.linkedin.com/in/aaronnp/"
                className="font-thin hover:underline hover:font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  className="object-cover h-8 w-8"
                  src="https://img.icons8.com/?size=100&id=60444&format=png&color=f6f9ff"
                  alt="LinkedIn Profile"
                /> */}
                <h3>LinkedIn @aaronnp</h3>
              </a>
              <a
                href="/resume"
                className="font-thin hover:underline hover:font-light mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  className="object-cover h-12 w-12"
                  src="https://img.icons8.com/?size=100&id=wf816jDvhsuq&format=png&color=f6f9ff"
                  alt="Resume"
                /> */}
                <h3>Resume PDF</h3>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={onSubmit} className="lg:w-1/2 sm:mt-2">
            {/* Name Input */}
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-md font-bold text-[#4091f9] text-left"
              >
                Name:
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-[#f6f9ff] px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-40 opacity-90"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="w-full mt-4">
              <label
                htmlFor="email"
                className="block text-md font-bold text-[#4091f9] text-left"
              >
                Email:
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-[#f6f9ff] px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-40 opacity-90"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="w-full mt-4">
              <label
                htmlFor="message"
                className="block text-md font-bold text-[#4091f9] text-left"
              >
                Message:
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  className="block w-full rounded-md bg-[#f6f9ff] px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-40 opacity-90"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full mt-8">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#4091f9] px-3.5 py-2.5 text-center text-sm font-bold text-[#f1f1e6] shadow-sm hover:bg-[#2f3e5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7fdff]"
              >
                Contact Me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
