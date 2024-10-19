import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 border py-4">
      <main className="container mx-auto flex flex-col gap-y-[30px] lg:flex-row items-start lg:items-center  justify-between">
        <span className=" flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <h2 className=" font-semibold text-bold ">Shamzbridge.</h2>
          <p className=" font-medium text-sm">
            Copyright 2024, Shamzbridge.com
          </p>
        </span>
        <nav className="flex flex-col lg:flex-row items-center gap-[20px]">
          <Link href={"/about-us"} className=" text-base font-medium ">
            About us
          </Link>
          <Link href={"/services"} className=" text-base font-medium ">
            Services
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default Footer;
