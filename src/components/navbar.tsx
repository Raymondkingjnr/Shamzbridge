"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div className="px-4   border-b py-4 ">
      <main className="container mx-auto flex justify-between relative ">
        <Link href={"/"} className=" font-semibold text-bold ">
          Shamzbridge.
        </Link>

        <nav className=" hidden  md:flex items-center gap-[20px]">
          <Link href={"/about-us"} className=" text-base font-medium ">
            About us
          </Link>
          <Link href={"/services"} className=" text-base font-medium ">
            Services
          </Link>
        </nav>
        <div className=" block md:hidden">
          <IoMenuOutline size={25} onClick={handleNav} />
        </div>

        {showNav && (
          <div className="fixed h-[100%] pt-3 flex flex-col w-full top-0 left-0 bg-slate-100">
            <div className=" grid place-content-end px-3">
              <IoMdClose size={25} onClick={handleNav} />
            </div>
            <nav className=" flex flex-col justify-center items-center gap-[20px] mt-[5rem] ">
              <Link
                href={"/about-us"}
                className=" text-base font-medium "
                onClick={handleNav}
              >
                About us
              </Link>
              <Link
                href={"/services"}
                className=" text-base font-medium "
                onClick={handleNav}
              >
                Services
              </Link>
            </nav>
          </div>
        )}
      </main>
    </div>
  );
};

export default Navbar;
