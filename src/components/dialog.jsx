"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  ChatBubbleLeftEllipsisIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function DialogWindow({
  isDialogOpen,
  setIsDialogOpen,
  title,
  message,
}) {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-xs transform rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="flex flex-col items-center px-6 py-8">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                title === "Error" ? "bg-red-100" : "bg-green-100"
              }`}
            >
              {title === "Error" ? (
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
              ) : (
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-green-600" />
              )}
            </div>
            <DialogTitle
              as="h3"
              className="mt-4 text-lg font-semibold text-gray-900 text-center"
            >
              {title}
            </DialogTitle>
            <p className="mt-2 text-center text-sm text-gray-500">{message}</p>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
