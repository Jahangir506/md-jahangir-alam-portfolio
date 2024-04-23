"use client";

import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex flex-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={Logo}
            alt="logo"
            height={70}
            width={70}
            className="object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                className={`${
                  active === navLink.title ? "text-white" : "text-secondary"
                } font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(navLink.title);
                }}
              >
                <Link href={`${navLink.id}`}>{navLink.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? menu : close}
            alt="menu"
            height={25}
            width={25}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => {
                return (
                  <li
                    key={navLink.id}
                    className={`${
                      active === navLink.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(navLink.title);
                    }}
                  >
                    <Link href={`${navLink.id}`}>{navLink.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
