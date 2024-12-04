import React from "react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

const Popout = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-gray-700 opacity-75 transition-opacity duration-700" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel
          className={`relative bg-white rounded-lg shadow-xl transition-transform transform  ease-out scale-100 opacity-100 duration-700  ${
            isOpen ? "opacity-100 w-[70vw] h " : "opacity-000 w-[20vw]"
          } max-h-1/2`}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 py-1 px-2 bg-transparent text-[#4091f9] hover:text-[#f1f1e6] text-xl "
            >
              x
            </button>
            <img
              className="object-contain rounded-lg w-full h-auto"
              src={imageSrc}
              alt={altText}
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Popout;
