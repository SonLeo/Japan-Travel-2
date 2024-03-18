"use client"
import { Bars3Icon } from "@heroicons/react/16/solid";
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./Header.module.css";
import React, { useState } from "react";
import Logo from "../../components/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sticky h-28 top-0 w-full py-4 text-white bg-indigo-950 opacity-90 z-50">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:inline-flex items-center uppercase text-sm">
          <li className={`px-6 py-3 ${styles["navbar-item"]} ${styles["active"]}`}>Home</li>
          <li className={`px-6 py-3 ${styles["navbar-item"]}`}>About</li>
          <li className={`px-6 py-3 ${styles["navbar-item"]}`}>Services</li>
          <li className={`px-6 py-3 ${styles["navbar-item"]}`}>Blog</li>
          <li className={`px-6 py-3 ${styles["navbar-item"]}`}>Contact</li>
        </ul>
        <button className={`hidden lg:inline-flex gap-2 items-center py-2 px-12 rounded border border-solid border-white ${styles["nav-login"]}`}>
          <UserCircleIcon className="text-white w-6" /> <span className="uppercase">Login</span>
        </button>
        <div className="inline-flex lg:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <>
              <div>
                <XCircleIcon className="text-white w-8" />
              </div>
              <ul className={`${styles["nav-mobile"]} absolute top-full inset-x-0 bg-indigo-950 border-t border-solid border-gray-300 w-full z-40`}>
                <li className={`${styles["nav-mobile-item"]} ${styles["active"]} px-4 py-2 w-full uppercase text-white`}>Home</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full uppercase text-white`}>About</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full uppercase text-white`}>Services</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full uppercase text-white`}>Blog</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full uppercase text-white`}>Contact</li>
              </ul>
            </>
          ) : (
            <Bars3Icon className="text-white w-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;