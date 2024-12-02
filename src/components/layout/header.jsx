"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const links = [
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-lg">
      <nav
        aria-label="Global"
        className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 container-max-width"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 text-[1.75rem] text-[#006645] hover:text-[#00A97C]"
            aria-label="ANP"
          >
            ☺
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-[#006645]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-lg font-bold transition border-b-8 -mb-2 leading-tight ${
                active === link.name
                  ? "border-[#e7fdff]"
                  : "border-white hover:border-[#e7fdff]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-ƒ-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ANP</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6 text-[#006645]">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7"
                  >
                    {" "}
                    <span
                      className={`font-bold border-b-8 -mb-2 leading-tight ${
                        active === link.name
                          ? "border-[#e7fdff]"
                          : "border-white hover:border-[#e7fdff]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
