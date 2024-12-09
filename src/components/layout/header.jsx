"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-10 w-full bg-gradient-to-b from-[#2f3e5d] to-[#121212] border-t border-[#2f3e5d] shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
      <nav
        aria-label="Global"
        className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 container-max-width"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 pl-1.5 text-[3rem] text-[#4091f9]  hover:text-[#f1f1e6] tracking-tighter"
            aria-label="ANP"
          >
            ANP
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md bg-transparent p-2.5 text-white-700 hover:border-blue"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-[#4091f9]" />
          </button>
        </div>
        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-[#4091f9]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-lg font-bold transition -mb-2 leading-tight ${
                active === link.name ? "text-white" : ""
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2f3e5d] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-ƒ-900/10">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="-m-1.5 pl-1.5 text-[3rem] text-[#4091f9]  hover:text-[#f1f1e6] tracking-tighter"
              aria-label="ANP"
            >
              ANP
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-black" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6 text-[#4091f9]">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-tight transition-all hover:bg-white "
                  >
                    <span
                      className={`${
                        active === link.name ? "text-white " : "text-[#4091f9]"
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
