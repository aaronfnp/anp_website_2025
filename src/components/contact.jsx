"use client";

import { useState } from "react";
import Timer from "./timer";
import DialogWindow from "./dialog";

export default function Contact() {
  const [isSubmittingDialog, setIsSubmittingDialog] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-20 sm:py-32 lg:px-8">
      <DialogWindow
        isSubmittingDialog={isSubmittingDialog}
        setIsSubmittingDialog={setIsSubmittingDialog}
      ></DialogWindow>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Me
        </h2>
        <p className="mt-5 text-lg/8 text-gray-600">
          <Timer />
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-8 max-w-xl sm:mt-12">
        <div className="sm:col-span-2">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsSubmittingDialog(true);
            }}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
}
