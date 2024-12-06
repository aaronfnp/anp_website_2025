import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
} from "@headlessui/react";

const Popout = ({ isOpen, onClose, imageSrc, altText, type }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <DialogPanel
          transition
          className="relative w-full max-w-4xl transform rounded-lg bg-[#2f3e5d] shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="relative">
            <div className="flex flex-col items-center dropshadow">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 py-0 px-2 bg-transparent text-[#4091f9] hover:text-[#f1f1e6] text-xl "
              >
                x
              </button>

              {type === "video" ? (
                <video
                  className="object-contain rounded-lg w-full h-auto"
                  src={imageSrc}
                  controls
                  loop
                ></video>
              ) : (
                <div>
                  <img
                    className="object-contain rounded-lg w-full h-auto"
                    src={imageSrc}
                    alt={altText}
                  />
                  <DialogTitle
                    as="h3"
                    className="absolute bottom-0 left-0 w-full text-center text-[#4091f9] bg-black/50 py-2 text-lg font-semibold"
                  >
                    {altText}
                  </DialogTitle>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Popout;
